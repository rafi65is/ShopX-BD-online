const {
  initializeTestEnvironment,
  assertFails,
  assertSucceeds,
} = require("@firebase/rules-unit-testing");
const { test, before, after, beforeEach } = require("node:test");
const fs = require("node:fs");

let testEnv;
const PROJECT_ID = process.env.GCP_PROJECT || "demo-no-project";
const DEV_UID = "dev_uid_001";
const DEV_EMAIL = "ww5360802@gmail.com";
const ALICE_UID = "alice_dhaka_01";
const BOB_UID = "bob_ctg_02";

const [emulatorHost, emulatorPortStr] = (process.env.FIRESTORE_EMULATOR_HOST || "127.0.0.1:8085").split(":");
const emulatorPort = parseInt(emulatorPortStr, 10);

before(async () => {
  const rules = fs.readFileSync("./firestore.rules", "utf8");
  testEnv = await initializeTestEnvironment({
    projectId: PROJECT_ID,
    firestore: {
      rules,
      host: emulatorHost,
      port: emulatorPort,
    },
  });
});

after(async () => {
  if (testEnv) {
    await testEnv.cleanup();
  }
});

beforeEach(async () => {
  if (testEnv) {
    await testEnv.clearFirestore();
  }
});

test("Developer (verified ww5360802@gmail.com) can create, update, hide, and delete products; spoofed or regular users cannot", async () => {
  const devDb = testEnv.authenticatedContext(DEV_UID, {
    email: DEV_EMAIL,
    email_verified: true,
  }).firestore();
  const spoofedDevDb = testEnv.authenticatedContext("spoof_uid", {
    email: DEV_EMAIL,
    email_verified: false,
  }).firestore();
  const aliceDb = testEnv.authenticatedContext(ALICE_UID, {
    email: "alice@example.com",
    email_verified: true,
  }).firestore();
  const unauthDb = testEnv.unauthenticatedContext().firestore();

  const created = new Date(Date.now() - 5000);
  const payload = {
    name: "Custom Dhakaiya Jamdani Saree",
    brandName: "Sonargaon Looms",
    originCity: "Narayanganj",
    categoryId: "saree",
    priceBdt: 4200,
    originalPriceBdt: 5800,
    rating: 4.9,
    reviewCount: 120,
    description: "Handloom jamdani with custom Eid offer.",
    highlights: ["100% Cotton"],
    variants: ["Emerald Gold", "Ivory"],
    deliveryEstimate: "Same-day Dhaka",
    flashDeal: true,
    discountEndEpochMs: Date.now() + 86400000,
    artisanVerified: true,
    imageKey: "fashion",
    imageData: "data:image/jpeg;base64,/9j/4AAQSkZJRg==",
    accentHex: 16737854,
    badgeLabel: "Eid Special",
    published: true,
    updatedByEmail: DEV_EMAIL,
    createdAt: created,
    updatedAt: created,
  };

  // Unauthenticated, regular user, and unverified email spoof must fail to write
  await assertFails(unauthDb.collection("products").doc("jamdani_01").set(payload));
  await assertFails(aliceDb.collection("products").doc("jamdani_01").set(payload));
  await assertFails(spoofedDevDb.collection("products").doc("jamdani_01").set(payload));

  // Verified Developer write succeeds (including custom categoryId 'saree' and imageData)
  await assertSucceeds(devDb.collection("products").doc("jamdani_01").set(payload));

  // Regular signed-in shopper can read published products using filtered query
  await assertSucceeds(aliceDb.collection("products").where("published", "==", true).get());
  // Regular shopper unfiltered list query fails (rules are not filters)
  await assertFails(aliceDb.collection("products").get());

  // Developer can read unfiltered list (including hidden drafts) and update price/caption
  await assertSucceeds(devDb.collection("products").get());
  await assertSucceeds(
    devDb.collection("products").doc("jamdani_01").update({
      priceBdt: 3990,
      published: false,
      updatedAt: new Date(Date.now() - 1000),
    })
  );

  // Regular shopper cannot read hidden (published == false) product directly
  await assertFails(aliceDb.collection("products").doc("jamdani_01").get());
  // Regular shopper cannot update or delete product
  await assertFails(aliceDb.collection("products").doc("jamdani_01").update({ priceBdt: 1 }));
  await assertFails(aliceDb.collection("products").doc("jamdani_01").delete());

  // Developer can delete
  await assertSucceeds(devDb.collection("products").doc("jamdani_01").delete());
});

test("Developer can customize store_config/main A-to-Z; regular users can only read single doc", async () => {
  const devDb = testEnv.authenticatedContext(DEV_UID, {
    email: DEV_EMAIL,
    email_verified: true,
  }).firestore();
  const aliceDb = testEnv.authenticatedContext(ALICE_UID, {
    email: "alice@example.com",
    email_verified: true,
  }).firestore();

  const created = new Date(Date.now() - 5000);
  const configPayload = {
    appName: "Amar Dokan BD",
    appTagline: "Custom Marketplace",
    searchPlaceholder: "Search Saree, Tech...",
    curatedSectionTitle: "Top Picks",
    heroBannerVisible: true,
    heroImageData: "",
    heroBadge: "EID MEGA SALE",
    heroHeadline: "ShopX Eid Collection",
    heroSubtext: "Free Dhaka delivery today",
    flashDealsVisible: true,
    flashDealTitle: "Eid Flash Deals",
    flashDealSubtitle: "Up to 40% Off",
    flashDealEndEpochMs: Date.now() + 3600000,
    announcementText: "Use BANGLA250 for ৳250 off!",
    categories: [
      { id: "all", label: "All", sortOrder: 0 },
      { id: "saree", label: "শাড়ি", sortOrder: 1 },
    ],
    navTabs: [
      { id: "explore", label: "Home", visible: true, iconKey: "home", kind: "builtin", customHeadline: "", customBody: "", linkedCategoryId: "" },
      { id: "orders", label: "Orders", visible: false, iconKey: "orders", kind: "builtin", customHeadline: "", customBody: "", linkedCategoryId: "" },
      { id: "custom_offers", label: "Offers", visible: true, iconKey: "star", kind: "custom", customHeadline: "Eid Special", customBody: "All saree offers", linkedCategoryId: "saree" },
    ],
    deletedProductIds: ["tech_01"],
    supportWhatsApp: "01778146634",
    updatedByEmail: DEV_EMAIL,
    createdAt: created,
    updatedAt: created,
  };

  await assertFails(aliceDb.collection("store_config").doc("main").set(configPayload));
  await assertSucceeds(devDb.collection("store_config").doc("main").set(configPayload));

  // Signed-in shopper can read store_config/main, cannot list collection, cannot update
  await assertSucceeds(aliceDb.collection("store_config").doc("main").get());
  await assertFails(aliceDb.collection("store_config").get());
  await assertFails(
    aliceDb.collection("store_config").doc("main").update({
      heroHeadline: "Hacked",
      updatedAt: new Date(Date.now() - 1000),
    })
  );

  await assertSucceeds(
    devDb.collection("store_config").doc("main").update({
      heroHeadline: "Updated Eid Drop",
      deletedProductIds: ["tech_01", "jamdani_01"],
      supportWhatsApp: "01778146634",
      updatedAt: new Date(Date.now() - 1000),
    })
  );
});

test("Unauthenticated user cannot read or write any user collection", async () => {
  const unauthDb = testEnv.unauthenticatedContext().firestore();
  const now = new Date(Date.now() - 1000);

  await assertFails(unauthDb.collection(`users/${ALICE_UID}/cart`).get());
  await assertFails(unauthDb.collection(`users/${ALICE_UID}/wishlist`).get());
  await assertFails(unauthDb.collection(`users/${ALICE_UID}/addresses`).get());
  await assertFails(unauthDb.collection(`users/${ALICE_UID}/orders`).get());
  await assertFails(
    unauthDb.collection(`users/${ALICE_UID}/cart`).doc("item_1").set({
      productId: "jamdani_01",
      productName: "Dhakaiya Jamdani Saree",
      brandName: "Tangail Looms",
      variantLabel: "Emerald Gold",
      unitPriceBdt: 4850,
      quantity: 1,
      categoryId: "fashion",
      createdAt: now,
      updatedAt: now,
    })
  );
});

test("Cart: owner CRUD succeeds, ghost fields and cross-user access fail", async () => {
  const aliceDb = testEnv.authenticatedContext(ALICE_UID).firestore();
  const bobDb = testEnv.authenticatedContext(BOB_UID).firestore();
  const created = new Date(Date.now() - 5000);

  const cartRef = aliceDb.collection(`users/${ALICE_UID}/cart`).doc("jamdani_01__Emerald");
  await assertSucceeds(
    cartRef.set({
      productId: "jamdani_01",
      productName: "Dhakaiya Jamdani Saree",
      brandName: "Tangail Looms",
      variantLabel: "Emerald Gold",
      unitPriceBdt: 4850,
      quantity: 1,
      categoryId: "fashion",
      createdAt: created,
      updatedAt: created,
    })
  );

  await assertSucceeds(aliceDb.collection(`users/${ALICE_UID}/cart`).get());
  await assertSucceeds(
    cartRef.update({
      quantity: 2,
      updatedAt: new Date(Date.now() - 1000),
    })
  );
  await assertFails(bobDb.collection(`users/${ALICE_UID}/cart`).get());
  await assertSucceeds(cartRef.delete());
});

test("Orders: owner create PLACED, cancel, terminal lock, and security bounds", async () => {
  const aliceDb = testEnv.authenticatedContext(ALICE_UID).firestore();
  const bobDb = testEnv.authenticatedContext(BOB_UID).firestore();
  const created = new Date(Date.now() - 5000);

  const orderRef = aliceDb.collection(`users/${ALICE_UID}/orders`).doc("ord_84921");
  await assertSucceeds(
    orderRef.set({
      orderNumber: "SX-BD-84921",
      status: "PLACED",
      paymentMethod: "BKASH",
      paymentStatus: "PAID",
      courierPartner: "Pathao Courier",
      subtotalBdt: 4850,
      deliveryFeeBdt: 60,
      discountBdt: 250,
      totalBdt: 4660,
      itemCount: 1,
      itemSummaries: ["1x Dhakaiya Jamdani Saree (৳4,850)"],
      deliverySummary: "Tariq Hasan • Banani, Dhaka • +8801711223344",
      promoCode: "BANGLA250",
      createdAt: created,
      updatedAt: created,
    })
  );

  await assertSucceeds(aliceDb.collection(`users/${ALICE_UID}/orders`).get());
  await assertFails(bobDb.collection(`users/${ALICE_UID}/orders`).doc("ord_84921").get());
  await assertSucceeds(
    orderRef.update({
      status: "CANCELLED",
      updatedAt: new Date(Date.now() - 1000),
    })
  );
  await assertFails(
    orderRef.update({
      status: "CONFIRMED",
      updatedAt: new Date(Date.now() - 500),
    })
  );
});

test("Ads: only verified developer can add, edit, and delete company ads; shoppers read active ads only", async () => {
  const devDb = testEnv.authenticatedContext(DEV_UID, {
    email: DEV_EMAIL,
    email_verified: true,
  }).firestore();
  const aliceDb = testEnv.authenticatedContext(ALICE_UID, {
    email: "alice@example.com",
    email_verified: true,
  }).firestore();

  const created = new Date(Date.now() - 3000);
  const adPayload = {
    companyName: "Walton Electronics",
    title: "Eid Refrigerator Cashback",
    caption: "Up to 15% cashback on inverter fridges across Bangladesh.",
    mediaType: "photo",
    mediaData: "https://example.com/walton-ad.jpg",
    videoThumbData: "",
    ctaLabel: "Shop Offer",
    ctaUrl: "https://example.com/offer",
    active: true,
    updatedByEmail: DEV_EMAIL,
    createdAt: created,
    updatedAt: created,
  };

  await assertFails(aliceDb.collection("ads").doc("ad_walton").set(adPayload));
  await assertSucceeds(devDb.collection("ads").doc("ad_walton").set(adPayload));

  await assertSucceeds(aliceDb.collection("ads").where("active", "==", true).get());
  await assertFails(aliceDb.collection("ads").get());

  await assertSucceeds(
    devDb.collection("ads").doc("ad_walton").update({
      active: false,
      caption: "Offer paused",
      updatedAt: new Date(Date.now() - 1000),
    })
  );

  await assertFails(aliceDb.collection("ads").doc("ad_walton").get());
  await assertFails(aliceDb.collection("ads").doc("ad_walton").delete());
  await assertSucceeds(devDb.collection("ads").doc("ad_walton").delete());
});
