(() => {
  const DIVISIONS = [
    "Dhaka",
    "Chattogram",
    "Sylhet",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Rangpur",
    "Mymensingh",
  ];

  const CATEGORIES = [
    { id: "all", en: "All", bn: "সব" },
    { id: "fashion", en: "Fashion", bn: "ফ্যাশন" },
    { id: "electronics", en: "Tech", bn: "ইলেকট্রনিক্স" },
    { id: "artisan", en: "Artisan", bn: "কারুশিল্প" },
    { id: "beauty", en: "Beauty", bn: "বিউটি" },
    { id: "groceries", en: "Gourmet", bn: "গ্রোসারি" },
  ];

  const PRODUCTS = [
    {
      id: "jamdani_01",
      name: "Dhakaiya Handloom Jamdani Saree",
      brandName: "Tangail & Sonargaon Looms",
      originCity: "Narayanganj",
      categoryId: "fashion",
      priceBdt: 4850,
      originalPriceBdt: 6400,
      rating: 4.9,
      reviewCount: 318,
      description:
        "Woven over 14 days by master weavers along the Shitalakshya river using 80-count muslin cotton and metallic zari floral motifs.",
      highlights: [
        "100% authentic Sonargaon handloom weave",
        "Includes matching unstitched blouse piece",
        "Breathable 80-count combed cotton-silk blend",
      ],
      variants: ["Emerald Gold", "Ivory Crimson", "Midnight Teal"],
      deliveryEstimate: "Same-day Dhaka • 48h Nationwide",
      flashDeal: true,
      artisanVerified: true,
      accentHex: "#006A4E",
      badgeLabel: "Heritage GI",
      iconKind: "fashion",
    },
    {
      id: "panjabi_02",
      name: "Embroidered Khadi Cotton Panjabi",
      brandName: "Deshi Studio",
      originCity: "Dhaka",
      categoryId: "fashion",
      priceBdt: 1890,
      originalPriceBdt: 2450,
      rating: 4.8,
      reviewCount: 246,
      description:
        "Tailored summer-ready Comilla khadi cotton Panjabi featuring tonal geometric collar embroidery and breathable side vents.",
      highlights: [
        "Hand-spun Comilla khadi cotton",
        "Pre-shrunk soft enzyme wash",
        "Concealed side pockets & horn-finish buttons",
      ],
      variants: ["M • Cream", "L • Cream", "XL • Indigo", "XXL • Cream"],
      deliveryEstimate: "Same-day Dhaka • 48h Nationwide",
      flashDeal: true,
      artisanVerified: true,
      accentHex: "#2D4A6D",
      badgeLabel: "Festive Pick",
      iconKind: "fashion",
    },
    {
      id: "anc_headphones_03",
      name: "X-Wave Studio ANC Headphones",
      brandName: "Dhaka Audio Lab",
      originCity: "Dhaka",
      categoryId: "electronics",
      priceBdt: 3690,
      originalPriceBdt: 4990,
      rating: 4.7,
      reviewCount: 412,
      description:
        "Hybrid 40dB active noise cancelling wireless headphones tuned for Dhaka commutes, with 55-hour battery and USB-C fast charge.",
      highlights: [
        "Bluetooth 5.4 dual-device multipoint",
        "10-min charge delivers 6 hours playback",
        "1-year ShopX BD official replacement warranty",
      ],
      variants: ["Matte Obsidian", "Sandstone Beige"],
      deliveryEstimate: "Express 24h Metro • 72h Nationwide",
      flashDeal: true,
      artisanVerified: false,
      accentHex: "#25282C",
      badgeLabel: "Flash Deal",
      iconKind: "tech",
    },
    {
      id: "smartwatch_04",
      name: "Padma Pulse AMOLED Watch",
      brandName: "ShopX Tech",
      originCity: "Dhaka",
      categoryId: "electronics",
      priceBdt: 4250,
      originalPriceBdt: 5500,
      rating: 4.6,
      reviewCount: 189,
      description:
        "1.78-inch crisp AMOLED fitness & call smartwatch with Bengali notification support, SpO2 tracking, and IP68 monsoon resistance.",
      highlights: [
        "Crisp 1000-nit sunlight AMOLED display",
        "Bangla Unicode message alerts & Bluetooth calling",
        "Up to 10 days battery life on single charge",
      ],
      variants: ["Graphite Strap", "Forest Green Strap"],
      deliveryEstimate: "Express 24h Metro • 48h Nationwide",
      flashDeal: true,
      artisanVerified: false,
      accentHex: "#1E3A34",
      badgeLabel: "Bangla UI",
      iconKind: "tech",
    },
    {
      id: "terracotta_05",
      name: "Bogura Carved Terracotta Vase",
      brandName: "Bogura Clay Guild",
      originCity: "Bogura",
      categoryId: "artisan",
      priceBdt: 890,
      originalPriceBdt: 1150,
      rating: 4.9,
      reviewCount: 134,
      description:
        "Hand-thrown and kiln-fired alluvial river clay amphora vase carved with traditional Puthia floral reliefs.",
      highlights: [
        "Double-fired natural Bogura river clay",
        "Water-sealed interior for fresh or dried florals",
        "Sustainably packed in corrugated honeycomb",
      ],
      variants: ["24cm Classic", "30cm Tall Relief"],
      deliveryEstimate: "2–3 days Nationwide (Fragile Care)",
      flashDeal: false,
      artisanVerified: true,
      accentHex: "#B85435",
      badgeLabel: "Artisan Made",
      iconKind: "artisan",
    },
    {
      id: "kantha_06",
      name: "Nakshi Kantha Cushion Cover Pair",
      brandName: "Jamalpur Artisans",
      originCity: "Jamalpur",
      categoryId: "artisan",
      priceBdt: 1250,
      originalPriceBdt: 1600,
      rating: 4.9,
      reviewCount: 205,
      description:
        "Set of two 16x16 inch pure cotton cushion covers hand-stitched by women artisan collectives in Jamalpur with traditional bird & lotus motifs.",
      highlights: [
        "100% hand-embroidered running kantha stitch",
        "Hidden brass zipper with pre-washed backing",
        "Direct fair-trade partnership with 45 artisans",
      ],
      variants: ["Crimson & Mustard", "Indigo & Ivory"],
      deliveryEstimate: "24–48h Dhaka • 3 days Nationwide",
      flashDeal: true,
      artisanVerified: true,
      accentHex: "#D9381E",
      badgeLabel: "Fair Craft",
      iconKind: "artisan",
    },
    {
      id: "powerbank_07",
      name: "VoltX 20000mAh 65W PD Power Bank",
      brandName: "VoltX BD",
      originCity: "Chattogram",
      categoryId: "electronics",
      priceBdt: 2490,
      originalPriceBdt: 3100,
      rating: 4.8,
      reviewCount: 278,
      description:
        "Woven fabric-wrapped high-capacity 65W USB-C PD power bank engineered for load-shedding backup—charges laptops, routers, and phones.",
      highlights: [
        "65W USB-C PD output for ultrabooks & phones",
        "Built-in braided USB-C cable + digital LED %",
        "18-month official warranty across 8 divisions",
      ],
      variants: ["Charcoal Weave", "Olive Slate"],
      deliveryEstimate: "Same-day Dhaka & Ctg • 48h Nationwide",
      flashDeal: false,
      artisanVerified: false,
      accentHex: "#333942",
      badgeLabel: null,
      iconKind: "tech",
    },
    {
      id: "sandal_08",
      name: "Hazaribagh Full-Grain Leather Sandal",
      brandName: "Dhaka Tannery Co.",
      originCity: "Dhaka",
      categoryId: "fashion",
      priceBdt: 2150,
      originalPriceBdt: 2650,
      rating: 4.7,
      reviewCount: 164,
      description:
        "Vegetable-tanned Bangladeshi cowhide leather sandals with cushioned memory footbed and stitched anti-slip crepe sole.",
      highlights: [
        "Full-grain locally tanned leather upper",
        "Adjustable brass buckle & arch contour",
        "Resoleable stitched outsole construction",
      ],
      variants: ["EU 41 • Tan", "EU 42 • Tan", "EU 43 • Espresso"],
      deliveryEstimate: "Same-day Dhaka • 48h Nationwide",
      flashDeal: false,
      artisanVerified: true,
      accentHex: "#8B5A2B",
      badgeLabel: null,
      iconKind: "fashion",
    },
    {
      id: "lantern_09",
      name: "Dhamrai Hand-Pierced Brass Lantern",
      brandName: "Dhamrai Metalcraft",
      originCity: "Dhaka",
      categoryId: "artisan",
      priceBdt: 2400,
      originalPriceBdt: 2900,
      rating: 4.9,
      reviewCount: 92,
      description:
        "Lost-wax and hand-pierced solid brass ambient lantern from Dhamrai's historic brassware ateliers, casting warm filigree shadows.",
      highlights: [
        "Solid antique-burnished brass body",
        "Fits standard pillar candle or warm LED puck",
        "Heirloom craftsmanship from Dhamrai",
      ],
      variants: ["Antique Gold", "Burnished Bronze"],
      deliveryEstimate: "24–48h Dhaka • 3 days Nationwide",
      flashDeal: false,
      artisanVerified: true,
      accentHex: "#B37400",
      badgeLabel: "Artisan Made",
      iconKind: "artisan",
    },
    {
      id: "tea_10",
      name: "Srimangal Single-Estate Reserve Tea",
      brandName: "Srimangal Tea Co.",
      originCity: "Sylhet",
      categoryId: "groceries",
      priceBdt: 620,
      originalPriceBdt: 780,
      rating: 4.9,
      reviewCount: 510,
      description:
        "Freshly plucked second-flush Orthodox & CTC reserve black tea from Srimangal's rolling hills—malty, brisk, and aromatic.",
      highlights: [
        "2 x 250g airtight aroma-lock tins",
        "Single-origin Sylhet valley harvest",
        "Zero artificial flavor or dust blend",
      ],
      variants: ["500g Twin Tin", "250g Reserve Tin"],
      deliveryEstimate: "24h Sylhet & Dhaka • 48h Nationwide",
      flashDeal: true,
      artisanVerified: true,
      accentHex: "#2B5B3F",
      badgeLabel: "Bestseller",
      iconKind: "gourmet",
    },
    {
      id: "honey_11",
      name: "Sundarbans Raw Khalisha Honey (500g)",
      brandName: "Sundarbans Apiary",
      originCity: "Khulna",
      categoryId: "groceries",
      priceBdt: 950,
      originalPriceBdt: 1150,
      rating: 4.8,
      reviewCount: 387,
      description:
        "Unheated, lab-tested wild mangrove Khalisha blossom honey ethically harvested by licensed Mawalis in Satkhira & Khulna.",
      highlights: [
        "100% raw, unfiltered & NMR purity tested",
        "Glass jar with tamper-evident harvest batch",
        "Rich floral notes from Sundarbans mangroves",
      ],
      variants: ["500g Glass Jar", "1kg Family Jar"],
      deliveryEstimate: "48h Nationwide",
      flashDeal: false,
      artisanVerified: true,
      accentHex: "#C27D1A",
      badgeLabel: null,
      iconKind: "gourmet",
    },
    {
      id: "serum_12",
      name: "Botanical Neem & Turmeric Glow Serum",
      brandName: "Prakriti Care BD",
      originCity: "Rajshahi",
      categoryId: "beauty",
      priceBdt: 690,
      originalPriceBdt: 890,
      rating: 4.7,
      reviewCount: 229,
      description:
        "Lightweight niacinamide + Rajshahi wild turmeric and neem extract serum formulated for humid tropical skin.",
      highlights: [
        "5% Niacinamide + cold-extracted turmeric",
        "Non-comedogenic & fragrance-free",
        "Dermatologist-tested 30ml dropper bottle",
      ],
      variants: ["30ml Bottle", "50ml Value Size"],
      deliveryEstimate: "Same-day Dhaka • 48h Nationwide",
      flashDeal: false,
      artisanVerified: false,
      accentHex: "#4D7A58",
      badgeLabel: null,
      iconKind: "beauty",
    },
  ];

  const PAYMENT_METHODS = [
    { code: "BKASH", title: "bKash", subEn: "Instant wallet checkout", subBn: "তাৎক্ষণিক বিকাশ পেমেন্ট" },
    { code: "NAGAD", title: "Nagad", subEn: "Zero-fee mobile pay", subBn: "জিরো-ফি মোবাইল পেমেন্ট" },
    { code: "ROCKET", title: "Rocket", subEn: "DBBL mobile banking", subBn: "ডিবিবিএল মোবাইল ব্যাংকিং" },
    { code: "SSLCOMMERZ", title: "SSLCommerz", subEn: "Visa, Mastercard & Nexus", subBn: "ভিসা, মাস্টারকার্ড ও নেক্সাস" },
    { code: "COD", title: "Cash on Delivery", subEn: "Pay cash at doorstep", subBn: "পণ্য হাতে পেয়ে টাকা পরিশোধ" },
  ];

  const COURIERS = ["Pathao Courier", "Steadfast", "RedX"];

  const TEXT = {
    bn: {
      tagline: "বাংলাদেশের বিশ্বস্ত মার্কেটপ্লেস",
      announcement: "৳৩,০০০+ অর্ডারে ফ্রি ডেলিভারি • BANGLA250 কোডে ৳২৫০ ছাড় • বিকাশ, নগদ ও ক্যাশ অন ডেলিভারি",
      searchHint: "জামদানি, ইয়ারবাড, পাঞ্জাবি খুঁজুন…",
      navOrders: "অর্ডার",
      navWishlist: "পছন্দ",
      navCart: "ব্যাগ",
      heroBadge: "কোড ব্যবহার করুন: BANGLA250",
      heroHeadline: "বাংলার ঐতিহ্য ও\nআধুনিক জীবনযাত্রা",
      heroSubtext: "৳৩,০০০+ অর্ডারে ফ্রি ডেলিভারি • বিকাশ, নগদ ও ক্যাশ অন ডেলিভারি",
      shopNow: "পণ্য দেখুন",
      flashTitle: "ফ্ল্যাশ ডিল",
      flashSubtitle: "সর্বোচ্চ ২৬% ছাড় — সীমিত সময়ের জন্য",
      curatedTitle: "আপনার জন্য বাছাইকৃত",
      itemsLabel: "টি পণ্য",
      noMatchingItems: "কোনো পণ্য খুঁজে পাওয়া যায়নি",
      showAllProducts: "সব পণ্য দেখুন",
      addBag: "ব্যাগে যোগ করুন",
      details: "বিস্তারিত",
      verified: "যাচাইকৃত",
      aboutItem: "পণ্য সম্পর্কে বিস্তারিত",
      selectVariant: "অপশন বাছাই করুন",
      emptyCart: "আপনার শপিং ব্যাগ খালি",
      emptyWishlist: "আপনার পছন্দ তালিকা খালি",
      emptyOrders: "এখনো কোনো অর্ডার নেই",
      promoTitle: "প্রোমো কোড",
      promoHint: "BANGLA250, DHAKA10 বা FREESHIP",
      apply: "প্রয়োগ",
      deliveryTitle: "ডেলিভারি ঠিকানা",
      namePlaceholder: "প্রাপকের নাম",
      phonePlaceholder: "মোবাইল নম্বর (যেমন: 017XXXXXXXX)",
      areaPlaceholder: "এলাকা / থানা (যেমন: বনানী)",
      streetPlaceholder: "বাসা/রোড নম্বর ও বিস্তারিত ঠিকানা",
      paymentTitle: "পেমেন্ট মাধ্যম",
      courierTitle: "কুরিয়ার পার্টনার",
      subtotal: "মোট মূল্য",
      deliveryFee: "ডেলিভারি চার্জ",
      discount: "প্রোমো ছাড়",
      grandTotal: "সর্বমোট পরিশোধ",
      free: "ফ্রি",
      placeOrder: "অর্ডার কনফার্ম করুন",
      footerNote: "বাংলাদেশ জুড়ে ৬৪ জেলায় দ্রুত হোম ডেলিভারি।",
      langLabel: "English",
      sortFeatured: "জনপ্রিয়",
      sortLow: "কম দাম",
      sortHigh: "বেশি দাম",
      sortRated: "সেরা রেটিং",
      orderPlacedToast: "অর্ডার সম্পন্ন হয়েছে! অর্ডার নম্বর:",
      addedToBagToast: "ব্যাগে যোগ হয়েছে:",
      fillAddressToast: "অনুগ্রহ করে প্রাপকের নাম, মোবাইল ও ঠিকানা লিখুন",
    },
    en: {
      tagline: "Bangladesh's Curated Marketplace",
      announcement: "Free shipping over ৳3,000 • Use BANGLA250 for ৳250 off • bKash, Nagad & COD",
      searchHint: "Search Jamdani, earbuds, Panjabi…",
      navOrders: "Orders",
      navWishlist: "Wishlist",
      navCart: "Cart",
      heroBadge: "USE CODE: BANGLA250",
      heroHeadline: "Bengal Craft Meets\nModern Living",
      heroSubtext: "Free shipping over ৳3,000 • bKash, Nagad & Cash on Delivery",
      shopNow: "Browse Products",
      flashTitle: "Flash Deals",
      flashSubtitle: "Up to 26% off curated picks",
      curatedTitle: "Curated For You",
      itemsLabel: "items",
      noMatchingItems: "No matching items found",
      showAllProducts: "Show All Products",
      addBag: "Add to Bag",
      details: "Details",
      verified: "Verified",
      aboutItem: "About this item",
      selectVariant: "Select Option",
      emptyCart: "Your shopping bag is empty",
      emptyWishlist: "Your wishlist is empty",
      emptyOrders: "No orders placed yet",
      promoTitle: "Promo Code",
      promoHint: "Try BANGLA250, DHAKA10, FREESHIP",
      apply: "Apply",
      deliveryTitle: "Delivery Address",
      namePlaceholder: "Recipient full name",
      phonePlaceholder: "Phone number (e.g. 017XXXXXXXX)",
      areaPlaceholder: "Area / Thana (e.g. Banani)",
      streetPlaceholder: "House, Road & street details",
      paymentTitle: "Payment Method",
      courierTitle: "Courier Partner",
      subtotal: "Subtotal",
      deliveryFee: "Delivery Fee",
      discount: "Promo Discount",
      grandTotal: "Grand Total",
      free: "FREE",
      placeOrder: "Place Order",
      footerNote: "Fast nationwide delivery across all 64 districts of Bangladesh.",
      langLabel: "বাংলা",
      sortFeatured: "Featured",
      sortLow: "Price: Low",
      sortHigh: "Price: High",
      sortRated: "Top Rated",
      orderPlacedToast: "Order confirmed! Order #:",
      addedToBagToast: "Added to bag:",
      fillAddressToast: "Please complete recipient name, phone, and address",
    },
  };

  const STORAGE_KEY = "shopx_bd_web_state_v1";
  const saved = (() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  })();

  const state = {
    lang: saved.lang === "en" ? "en" : "bn",
    division: DIVISIONS.includes(saved.division) ? saved.division : "Dhaka",
    category: "all",
    sort: "featured",
    search: "",
    promoCode: saved.promoCode || "",
    paymentMethod: saved.paymentMethod || "BKASH",
    courierPartner: saved.courierPartner || "Pathao Courier",
    cart: Array.isArray(saved.cart) ? saved.cart : [],
    wishlist: Array.isArray(saved.wishlist) ? saved.wishlist : [],
    orders: Array.isArray(saved.orders) ? saved.orders : [],
    address: saved.address || { name: "", phone: "", area: "", street: "" },
    activeDrawer: null,
  };

  const persist = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          lang: state.lang,
          division: state.division,
          promoCode: state.promoCode,
          paymentMethod: state.paymentMethod,
          courierPartner: state.courierPartner,
          cart: state.cart,
          wishlist: state.wishlist,
          orders: state.orders,
          address: state.address,
        })
      );
    } catch {
      // Ignore storage quota errors
    }
  };

  const t = (key) => TEXT[state.lang][key] || key;
  const formatBdt = (n) => `৳${Number(n || 0).toLocaleString("en-IN")}`;

  const iconSvg = (kind) => {
    if (kind === "fashion") {
      return `<svg class="product-thumb-svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10l10 6 10-6 10 8-6 10-6-3v27H24V25l-6 3-6-10 10-8z"/><path d="M24 34h16"/></svg>`;
    }
    if (kind === "tech") {
      return `<svg class="product-thumb-svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="12" width="36" height="40" rx="8"/><circle cx="32" cy="32" r="9"/><path d="M28 6h8M28 58h8"/></svg>`;
    }
    if (kind === "artisan") {
      return `<svg class="product-thumb-svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M24 12h16l-3 10c7 5 9 16 4 26-2 4-5 6-9 6s-7-2-9-6c-5-10-3-21 4-26l-3-10z"/><path d="M22 36h20"/></svg>`;
    }
    return `<svg class="product-thumb-svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 22h24v26a6 6 0 0 1-6 6H26a6 6 0 0 1-6-6V22z"/><path d="M24 22v-4a8 8 0 0 1 16 0v4"/><path d="M28 36l4 4 6-8"/></svg>`;
  };

  let toastTimer;
  const showToast = (msg) => {
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.classList.remove("hidden");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.add("hidden"), 2600);
  };

  const calculateDiscount = (codeRaw, subtotal) => {
    const code = (codeRaw || "").trim().toUpperCase();
    if (!code) return { amount: 0, note: "" };
    if (code === "BANGLA250") {
      return subtotal >= 1500
        ? { amount: 250, note: "৳250 discount applied" }
        : { amount: 0, note: "Spend ৳1,500+ for BANGLA250" };
    }
    if (code === "DHAKA10") {
      const amount = Math.min(Math.floor(subtotal * 0.1), 600);
      return { amount, note: `10% off (${formatBdt(amount)} saved)` };
    }
    if (code === "FREESHIP") {
      return { amount: 0, note: "Free nationwide courier unlocked" };
    }
    return { amount: 0, note: "Invalid code (Try BANGLA250, DHAKA10, FREESHIP)" };
  };

  const calculateDelivery = (division, subtotal, codeRaw) => {
    if (subtotal <= 0) return 0;
    if ((codeRaw || "").trim().toUpperCase() === "FREESHIP") return 0;
    if (subtotal >= 3000) return 0;
    return division === "Dhaka" ? 60 : 110;
  };

  const addToCart = (productId, variantLabel) => {
    const prod = PRODUCTS.find((p) => p.id === productId);
    if (!prod) return;
    const chosenVariant = variantLabel || prod.variants[0];
    const existing = state.cart.find(
      (i) => i.productId === productId && i.variantLabel === chosenVariant
    );
    if (existing) {
      existing.quantity = Math.min(99, existing.quantity + 1);
    } else {
      state.cart.push({
        productId: prod.id,
        name: prod.name,
        brandName: prod.brandName,
        variantLabel: chosenVariant,
        unitPriceBdt: prod.priceBdt,
        quantity: 1,
      });
    }
    persist();
    updateBadges();
    showToast(`${t("addedToBagToast")} ${prod.name}`);
    if (state.activeDrawer === "cart") renderDrawer();
  };

  const toggleWishlist = (productId) => {
    const idx = state.wishlist.indexOf(productId);
    if (idx >= 0) state.wishlist.splice(idx, 1);
    else state.wishlist.push(productId);
    persist();
    updateBadges();
    renderCatalog();
    renderFlashDeals();
    if (state.activeDrawer === "wishlist") renderDrawer();
  };

  const updateBadges = () => {
    const cartCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);
    document.getElementById("cartBadge").textContent = cartCount;

    const wishBadge = document.getElementById("wishlistBadge");
    wishBadge.textContent = state.wishlist.length;
    wishBadge.classList.toggle("hidden", state.wishlist.length === 0);

    const ordBadge = document.getElementById("ordersBadge");
    ordBadge.textContent = state.orders.length;
    ordBadge.classList.toggle("hidden", state.orders.length === 0);
  };

  const buildProductCardHtml = (p) => {
    const savedWish = state.wishlist.includes(p.id);
    const discountPct =
      p.originalPriceBdt > p.priceBdt
        ? Math.round(((p.originalPriceBdt - p.priceBdt) / p.originalPriceBdt) * 100)
        : 0;

    return `
      <article class="product-card" data-product-id="${p.id}">
        <div class="product-thumb" style="background: linear-gradient(145deg, ${p.accentHex}, #181a1b);" data-action="detail" data-id="${p.id}">
          ${p.badgeLabel ? `<span class="badge-top-left">${p.badgeLabel}</span>` : ""}
          ${discountPct > 0 ? `<span class="discount-badge">-${discountPct}%</span>` : ""}
          <button type="button" class="wishlist-btn ${savedWish ? "saved" : ""}" data-action="wish" data-id="${p.id}" aria-label="Toggle Wishlist">
            ${savedWish ? "♥" : "♡"}
          </button>
          ${iconSvg(p.iconKind)}
        </div>
        <div class="product-body">
          <div class="product-meta">
            <span>${p.brandName} • ${p.originCity}</span>
            ${p.artisanVerified ? `<span class="verified-dot">✓ ${t("verified")}</span>` : ""}
          </div>
          <h3 class="product-title" data-action="detail" data-id="${p.id}">${p.name}</h3>
          <div class="product-rating">⭐ ${p.rating.toFixed(1)} (${p.reviewCount}) • ${p.deliveryEstimate}</div>
          <div class="product-price-row">
            <span class="price-current">${formatBdt(p.priceBdt)}</span>
            ${p.originalPriceBdt > p.priceBdt ? `<span class="price-original">${formatBdt(p.originalPriceBdt)}</span>` : ""}
          </div>
          <div class="card-actions">
            <button type="button" class="btn-add-cart" data-action="add" data-id="${p.id}">${t("addBag")}</button>
            <button type="button" class="btn-outline" data-action="detail" data-id="${p.id}">${t("details")}</button>
          </div>
        </div>
      </article>
    `;
  };

  const renderFlashDeals = () => {
    const rail = document.getElementById("flashRail");
    const deals = PRODUCTS.filter((p) => p.flashDeal);
    rail.innerHTML = deals.map(buildProductCardHtml).join("");
  };

  const renderCategories = () => {
    const container = document.getElementById("categoryChips");
    container.innerHTML = CATEGORIES.map((c) => {
      const label = state.lang === "bn" ? c.bn : c.en;
      return `<button type="button" class="chip-btn ${state.category === c.id ? "active" : ""}" data-cat="${c.id}">${label}</button>`;
    }).join("");
  };

  const renderCatalog = () => {
    const q = state.search.trim().toLowerCase();
    let list = PRODUCTS.filter((p) => {
      const matchCat = state.category === "all" || p.categoryId === state.category;
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.brandName.toLowerCase().includes(q) ||
        p.originCity.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });

    if (state.sort === "low") list = [...list].sort((a, b) => a.priceBdt - b.priceBdt);
    else if (state.sort === "high") list = [...list].sort((a, b) => b.priceBdt - a.priceBdt);
    else if (state.sort === "rated") list = [...list].sort((a, b) => b.rating - a.rating);

    document.getElementById("catalogCountText").textContent = `${list.length} ${t("itemsLabel")}`;
    const grid = document.getElementById("productGrid");
    const empty = document.getElementById("emptyCatalogState");

    if (list.length === 0) {
      grid.innerHTML = "";
      empty.classList.remove("hidden");
    } else {
      empty.classList.add("hidden");
      grid.innerHTML = list.map(buildProductCardHtml).join("");
    }
  };

  const openProductModal = (productId) => {
    const p = PRODUCTS.find((item) => item.id === productId);
    if (!p) return;
    let selectedVariant = p.variants[0];
    const body = document.getElementById("productModalBody");

    const draw = () => {
      body.innerHTML = `
        <div class="modal-hero-art" style="background: linear-gradient(145deg, ${p.accentHex}, #181a1b);">
          ${iconSvg(p.iconKind)}
        </div>
        <div class="product-meta">
          <span>${p.brandName} • ${p.originCity}</span>
          <span>⭐ ${p.rating.toFixed(1)} (${p.reviewCount})</span>
        </div>
        <h2 id="modalProductTitle" style="margin-top:6px;">${p.name}</h2>
        <div class="product-price-row" style="margin:10px 0 12px;">
          <span class="price-current" style="font-size:1.45rem;">${formatBdt(p.priceBdt)}</span>
          ${p.originalPriceBdt > p.priceBdt ? `<span class="price-original">${formatBdt(p.originalPriceBdt)}</span>` : ""}
        </div>
        <p style="margin:0 0 12px; color:var(--muted);">${p.description}</p>
        <strong style="font-size:0.88rem;">${t("selectVariant")}</strong>
        <div class="variant-chips">
          ${p.variants
            .map(
              (v) =>
                `<button type="button" class="variant-chip ${v === selectedVariant ? "active" : ""}" data-variant="${v}">${v}</button>`
            )
            .join("")}
        </div>
        <strong style="font-size:0.88rem;">${t("aboutItem")}</strong>
        <ul class="highlights-list">
          ${p.highlights.map((h) => `<li>${h}</li>`).join("")}
        </ul>
        <p style="font-size:0.85rem; color:var(--emerald-dark); font-weight:600;">🚚 ${p.deliveryEstimate}</p>
        <button type="button" id="modalAddBagBtn" class="btn-add-cart" style="width:100%; padding:13px;">
          ${t("addBag")} • ${formatBdt(p.priceBdt)}
        </button>
      `;

      body.querySelectorAll("[data-variant]").forEach((btn) => {
        btn.addEventListener("click", () => {
          selectedVariant = btn.dataset.variant;
          draw();
        });
      });

      document.getElementById("modalAddBagBtn").addEventListener("click", () => {
        addToCart(p.id, selectedVariant);
        document.getElementById("productModalBackdrop").classList.add("hidden");
      });
    };

    draw();
    document.getElementById("productModalBackdrop").classList.remove("hidden");
  };

  const openDrawer = (type) => {
    state.activeDrawer = type;
    document.getElementById("drawerBackdrop").classList.remove("hidden");
    renderDrawer();
  };

  const closeDrawer = () => {
    state.activeDrawer = null;
    document.getElementById("drawerBackdrop").classList.add("hidden");
  };

  const renderDrawer = () => {
    const titleEl = document.getElementById("drawerTitle");
    const bodyEl = document.getElementById("drawerBody");

    if (state.activeDrawer === "wishlist") {
      titleEl.textContent = t("navWishlist");
      const items = PRODUCTS.filter((p) => state.wishlist.includes(p.id));
      if (items.length === 0) {
        bodyEl.innerHTML = `<div class="panel-card"><p style="margin:0; text-align:center; color:var(--muted);">${t("emptyWishlist")}</p></div>`;
        return;
      }
      bodyEl.innerHTML = items
        .map(
          (p) => `
        <div class="panel-card" style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
          <div>
            <strong>${p.name}</strong>
            <div style="font-size:0.82rem; color:var(--muted);">${p.brandName} • ${formatBdt(p.priceBdt)}</div>
          </div>
          <div style="display:flex; gap:6px;">
            <button type="button" class="btn-add-cart" data-wish-add="${p.id}">+</button>
            <button type="button" class="btn-outline" data-wish-remove="${p.id}">✕</button>
          </div>
        </div>`
        )
        .join("");

      bodyEl.querySelectorAll("[data-wish-add]").forEach((b) =>
        b.addEventListener("click", () => addToCart(b.dataset.wishAdd))
      );
      bodyEl.querySelectorAll("[data-wish-remove]").forEach((b) =>
        b.addEventListener("click", () => toggleWishlist(b.dataset.wishRemove))
      );
      return;
    }

    if (state.activeDrawer === "orders") {
      titleEl.textContent = t("navOrders");
      if (state.orders.length === 0) {
        bodyEl.innerHTML = `<div class="panel-card"><p style="margin:0; text-align:center; color:var(--muted);">${t("emptyOrders")}</p></div>`;
        return;
      }
      bodyEl.innerHTML = state.orders
        .map(
          (o) => `
        <div class="panel-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <strong>${o.orderNumber}</strong>
            <span class="order-status-pill">${o.status}</span>
          </div>
          <div style="font-size:0.83rem; color:var(--muted); margin-bottom:6px;">
            ${o.courierPartner} • ${o.paymentMethod} • ${o.dateLabel}
          </div>
          <div style="font-size:0.86rem; margin-bottom:6px;">${o.items.join("<br/>")}</div>
          <div style="font-size:0.82rem; color:var(--muted); margin-bottom:8px;">📍 ${o.deliverySummary}</div>
          <div style="display:flex; justify-content:space-between; font-weight:800;">
            <span>${t("grandTotal")}</span>
            <span>${formatBdt(o.totalBdt)}</span>
          </div>
        </div>`
        )
        .join("");
      return;
    }

    // Cart & Checkout
    titleEl.textContent = t("navCart");
    if (state.cart.length === 0) {
      bodyEl.innerHTML = `<div class="panel-card"><p style="margin:0; text-align:center; color:var(--muted);">${t("emptyCart")}</p></div>`;
      return;
    }

    const subtotal = state.cart.reduce((s, i) => s + i.unitPriceBdt * i.quantity, 0);
    const discountInfo = calculateDiscount(state.promoCode, subtotal);
    const deliveryFee = calculateDelivery(state.division, subtotal, state.promoCode);
    const total = Math.max(1, subtotal + deliveryFee - discountInfo.amount);

    bodyEl.innerHTML = `
      <div class="panel-card">
        ${state.cart
          .map(
            (item, idx) => `
          <div class="cart-item-row">
            <div>
              <strong style="font-size:0.92rem;">${item.name}</strong>
              <div style="font-size:0.78rem; color:var(--muted);">${item.variantLabel} • ${formatBdt(item.unitPriceBdt)}</div>
            </div>
            <div class="qty-stepper">
              <button type="button" class="qty-btn" data-qty-dec="${idx}">−</button>
              <span>${item.quantity}</span>
              <button type="button" class="qty-btn" data-qty-inc="${idx}">+</button>
            </div>
          </div>`
          )
          .join("")}
      </div>

      <div class="panel-card">
        <strong style="display:block; margin-bottom:8px;">${t("promoTitle")}</strong>
        <div style="display:flex; gap:8px;">
          <input type="text" id="promoInput" class="form-input" value="${state.promoCode}" placeholder="${t("promoHint")}" />
          <button type="button" id="applyPromoBtn" class="btn-outline">${t("apply")}</button>
        </div>
        ${discountInfo.note ? `<small style="display:block; margin-top:6px; color:var(--emerald-dark); font-weight:600;">${discountInfo.note}</small>` : ""}
      </div>

      <div class="panel-card">
        <strong style="display:block; margin-bottom:8px;">${t("deliveryTitle")} (${state.division})</strong>
        <div class="form-grid">
          <input type="text" id="addrName" class="form-input" placeholder="${t("namePlaceholder")}" value="${state.address.name || ""}" />
          <input type="tel" id="addrPhone" class="form-input" placeholder="${t("phonePlaceholder")}" value="${state.address.phone || ""}" />
          <input type="text" id="addrArea" class="form-input" placeholder="${t("areaPlaceholder")}" value="${state.address.area || ""}" />
          <input type="text" id="addrStreet" class="form-input" placeholder="${t("streetPlaceholder")}" value="${state.address.street || ""}" />
        </div>
      </div>

      <div class="panel-card">
        <strong style="display:block; margin-bottom:8px;">${t("paymentTitle")}</strong>
        ${PAYMENT_METHODS.map(
          (pm) => `
          <label class="payment-option ${state.paymentMethod === pm.code ? "selected" : ""}">
            <div>
              <strong>${pm.title}</strong>
              <div style="font-size:0.78rem; color:var(--muted);">${state.lang === "bn" ? pm.subBn : pm.subEn}</div>
            </div>
            <input type="radio" name="payMethod" value="${pm.code}" ${state.paymentMethod === pm.code ? "checked" : ""} />
          </label>`
        ).join("")}
        <strong style="display:block; margin:12px 0 8px;">${t("courierTitle")}</strong>
        <select id="courierSelect" class="form-select">
          ${COURIERS.map(
            (c) => `<option value="${c}" ${state.courierPartner === c ? "selected" : ""}>${c}</option>`
          ).join("")}
        </select>
      </div>

      <div class="panel-card">
        <div class="summary-line"><span>${t("subtotal")}</span><span>${formatBdt(subtotal)}</span></div>
        <div class="summary-line"><span>${t("deliveryFee")} (${state.division})</span><span>${deliveryFee === 0 ? t("free") : formatBdt(deliveryFee)}</span></div>
        ${discountInfo.amount > 0 ? `<div class="summary-line" style="color:var(--emerald-dark);"><span>${t("discount")}</span><span>−${formatBdt(discountInfo.amount)}</span></div>` : ""}
        <div class="summary-line total"><span>${t("grandTotal")}</span><span>${formatBdt(total)}</span></div>
        <button type="button" id="placeOrderBtn" class="btn-add-cart" style="width:100%; margin-top:12px; padding:13px;">
          ${t("placeOrder")} • ${formatBdt(total)}
        </button>
      </div>
    `;

    bodyEl.querySelectorAll("[data-qty-dec]").forEach((b) =>
      b.addEventListener("click", () => {
        const i = Number(b.dataset.qtyDec);
        state.cart[i].quantity -= 1;
        if (state.cart[i].quantity <= 0) state.cart.splice(i, 1);
        persist();
        updateBadges();
        renderDrawer();
      })
    );

    bodyEl.querySelectorAll("[data-qty-inc]").forEach((b) =>
      b.addEventListener("click", () => {
        const i = Number(b.dataset.qtyInc);
        state.cart[i].quantity = Math.min(99, state.cart[i].quantity + 1);
        persist();
        updateBadges();
        renderDrawer();
      })
    );

    document.getElementById("applyPromoBtn").addEventListener("click", () => {
      state.promoCode = document.getElementById("promoInput").value.trim().toUpperCase();
      persist();
      renderDrawer();
    });

    const syncAddress = () => {
      state.address = {
        name: document.getElementById("addrName").value.trim(),
        phone: document.getElementById("addrPhone").value.trim(),
        area: document.getElementById("addrArea").value.trim(),
        street: document.getElementById("addrStreet").value.trim(),
      };
      persist();
    };
    ["addrName", "addrPhone", "addrArea", "addrStreet"].forEach((id) => {
      document.getElementById(id).addEventListener("input", syncAddress);
    });

    bodyEl.querySelectorAll('input[name="payMethod"]').forEach((r) =>
      r.addEventListener("change", () => {
        state.paymentMethod = r.value;
        persist();
        renderDrawer();
      })
    );

    document.getElementById("courierSelect").addEventListener("change", (e) => {
      state.courierPartner = e.target.value;
      persist();
    });

    document.getElementById("placeOrderBtn").addEventListener("click", () => {
      syncAddress();
      if (!state.address.name || !state.address.phone || !state.address.street) {
        showToast(t("fillAddressToast"));
        return;
      }
      const orderNumber = `SX-BD-${Math.floor(10000 + Math.random() * 89999)}`;
      state.orders.unshift({
        orderNumber,
        status: "PLACED",
        paymentMethod: state.paymentMethod,
        courierPartner: state.courierPartner,
        totalBdt: total,
        items: state.cart.map((c) => `${c.quantity}x ${c.name} (${c.variantLabel})`),
        deliverySummary: `${state.address.name} • ${state.address.area || state.division}, ${state.division} • ${state.address.phone}`,
        dateLabel: new Date().toLocaleDateString(),
      });
      state.cart = [];
      persist();
      updateBadges();
      showToast(`${t("orderPlacedToast")} ${orderNumber}`);
      openDrawer("orders");
    });
  };

  const applyTranslations = () => {
    document.documentElement.lang = state.lang;
    document.getElementById("announcementText").textContent = t("announcement");
    document.getElementById("searchInput").placeholder = t("searchHint");
    document.getElementById("heroBadge").textContent = t("heroBadge");
    document.getElementById("heroHeadline").textContent = t("heroHeadline");
    document.getElementById("heroSubtext").textContent = t("heroSubtext");
    document.getElementById("curatedTitle").textContent = t("curatedTitle");
    document.getElementById("langToggleBtn").textContent = t("langLabel");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });

    const sortSelect = document.getElementById("sortSelect");
    sortSelect.innerHTML = `
      <option value="featured" ${state.sort === "featured" ? "selected" : ""}>${t("sortFeatured")}</option>
      <option value="low" ${state.sort === "low" ? "selected" : ""}>${t("sortLow")}</option>
      <option value="high" ${state.sort === "high" ? "selected" : ""}>${t("sortHigh")}</option>
      <option value="rated" ${state.sort === "rated" ? "selected" : ""}>${t("sortRated")}</option>
    `;

    renderCategories();
    renderFlashDeals();
    renderCatalog();
    if (state.activeDrawer) renderDrawer();
  };

  // Init controls
  const divSelect = document.getElementById("divisionSelect");
  divSelect.innerHTML = DIVISIONS.map(
    (d) => `<option value="${d}" ${d === state.division ? "selected" : ""}>${d}</option>`
  ).join("");
  divSelect.addEventListener("change", (e) => {
    state.division = e.target.value;
    persist();
    if (state.activeDrawer === "cart") renderDrawer();
  });

  document.getElementById("langToggleBtn").addEventListener("click", () => {
    state.lang = state.lang === "bn" ? "en" : "bn";
    persist();
    applyTranslations();
  });

  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.search = e.target.value;
    renderCatalog();
  });

  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderCatalog();
  });

  document.getElementById("categoryChips").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    state.category = btn.dataset.cat;
    renderCategories();
    renderCatalog();
  });

  document.getElementById("resetFilterBtn").addEventListener("click", () => {
    state.category = "all";
    state.search = "";
    document.getElementById("searchInput").value = "";
    renderCategories();
    renderCatalog();
  });

  document.getElementById("copyPromoBtn").addEventListener("click", () => {
    navigator.clipboard?.writeText("BANGLA250").catch(() => {});
    state.promoCode = "BANGLA250";
    persist();
    showToast("BANGLA250 copied & applied!");
  });

  // Delegated product card clicks
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;
    const id = target.dataset.id;
    if (action === "add") addToCart(id);
    else if (action === "wish") toggleWishlist(id);
    else if (action === "detail") openProductModal(id);
  });

  document.getElementById("openCartBtn").addEventListener("click", () => openDrawer("cart"));
  document.getElementById("openWishlistBtn").addEventListener("click", () => openDrawer("wishlist"));
  document.getElementById("openOrdersBtn").addEventListener("click", () => openDrawer("orders"));
  document.getElementById("closeDrawerBtn").addEventListener("click", closeDrawer);
  document.getElementById("drawerBackdrop").addEventListener("click", (e) => {
    if (e.target.id === "drawerBackdrop") closeDrawer();
  });

  document.getElementById("closeProductModal").addEventListener("click", () => {
    document.getElementById("productModalBackdrop").classList.add("hidden");
  });
  document.getElementById("productModalBackdrop").addEventListener("click", (e) => {
    if (e.target.id === "productModalBackdrop") {
      document.getElementById("productModalBackdrop").classList.add("hidden");
    }
  });

  updateBadges();
  applyTranslations();
})();
