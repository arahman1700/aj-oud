import type { Product, Category, LocalizedProduct } from "@/types/product";

export const categories: Category[] = [
  {
    id: "musk",
    name: { ar: "المسك", en: "Musk" },
    description: {
      ar: "تشكيلة فاخرة من أجود أنواع المسك الطبيعي",
      en: "A premium collection of the finest natural musk",
    },
    image: "/images/products/three-musks.png",
  },
  {
    id: "oud",
    name: { ar: "العود", en: "Oud" },
    description: {
      ar: "عود كمبودي نادر من أعماق الغابات الاستوائية",
      en: "Rare Cambodian oud from the depths of tropical forests",
    },
    image: "/images/products/oud-globe-1.png",
  },
  {
    id: "gift-sets",
    name: { ar: "أطقم الهدايا", en: "Gift Sets" },
    description: {
      ar: "أطقم هدايا فاخرة لكل المناسبات",
      en: "Premium gift sets for every occasion",
    },
    image: "/images/products/oud-box.png",
  },
  {
    id: "bakhoor",
    name: { ar: "بخور", en: "Bakhoor" },
    description: {
      ar: "بخور فاخر من أجود أنواع الخشب العطري",
      en: "Premium bakhoor from the finest aromatic woods",
    },
    image: "/images/products/oud-globe-1.png",
  },
  {
    id: "oils",
    name: { ar: "أدهان", en: "Oils & Dehn" },
    description: {
      ar: "أدهان عود ومسك طبيعية مركزة",
      en: "Concentrated natural oud and musk oils",
    },
    image: "/images/products/oud-globe-2.png",
  },
  {
    id: "home",
    name: { ar: "بخور بيتي", en: "Home Fragrance" },
    description: {
      ar: "خلطات بخور بيتية لأجواء عطرية مميزة",
      en: "Home bakhoor blends for a distinctive aromatic atmosphere",
    },
    image: "/images/products/oud-box.png",
  },
];

export const products: Product[] = [
  {
    id: "musk-filipino",
    slug: "filipino-musk",
    name: { ar: "مسك فلبيني", en: "Filipino Musk" },
    description: {
      ar: "مسك فلبيني فاخر من أندر أنواع المسك في العالم. يتميز برائحته العميقة والدافئة التي تدوم طويلاً.",
      en: "Premium Filipino musk, one of the rarest musks in the world. Distinguished by its deep, warm scent that lasts throughout the day.",
    },
    story: {
      ar: "يُستخلص هذا المسك من مصادر طبيعية نادرة في الفلبين، حيث تُجمع المواد الخام يدوياً بعناية فائقة للحفاظ على نقاء العطر.",
      en: "This musk is extracted from rare natural sources in the Philippines, where raw materials are carefully hand-collected to preserve the purity of the fragrance.",
    },
    category: "musk",
    images: ["/images/products/white-musk.png", "/images/products/three-musks.png"],
    sizes: [
      { id: "quarter", label: { ar: "ربع تولة", en: "Quarter Tola" }, price: 75 },
      { id: "half", label: { ar: "نصف تولة", en: "Half Tola" }, price: 140 },
      { id: "full", label: { ar: "تولة", en: "Tola" }, price: 260 },
    ],
    fragranceNotes: {
      top: [{ ar: "مسك أبيض", en: "White Musk" }, { ar: "عنبر", en: "Amber" }],
      heart: [{ ar: "صندل", en: "Sandalwood" }, { ar: "ورد", en: "Rose" }],
      base: [{ ar: "عود", en: "Oud" }, { ar: "فانيلا", en: "Vanilla" }],
    },
    badges: ["bestseller"],
    inStock: true,
  },
  {
    id: "musk-royal",
    slug: "royal-musk",
    name: { ar: "مسك ملكي", en: "Royal Musk" },
    description: {
      ar: "مسك ملكي فاخر بتركيبة حصرية تجمع بين الفخامة والأناقة. عطر يليق بالملوك.",
      en: "Premium royal musk with an exclusive formula combining luxury and elegance. A fragrance fit for royalty.",
    },
    story: {
      ar: "صُمم هذا المسك ليكون الخيار الأول لمحبي الفخامة، بتركيبة سرية تجمع أندر المكونات الشرقية.",
      en: "Designed to be the first choice for luxury enthusiasts, with a secret formula combining the rarest oriental ingredients.",
    },
    category: "musk",
    images: ["/images/products/green-musk.png", "/images/products/three-musks.png"],
    sizes: [
      { id: "quarter", label: { ar: "ربع تولة", en: "Quarter Tola" }, price: 65 },
      { id: "half", label: { ar: "نصف تولة", en: "Half Tola" }, price: 120 },
      { id: "full", label: { ar: "تولة", en: "Tola" }, price: 220 },
    ],
    fragranceNotes: {
      top: [{ ar: "زعفران", en: "Saffron" }, { ar: "هيل", en: "Cardamom" }],
      heart: [{ ar: "مسك", en: "Musk" }, { ar: "عنبر", en: "Amber" }],
      base: [{ ar: "عود", en: "Oud" }, { ar: "باتشولي", en: "Patchouli" }],
    },
    badges: ["bestseller"],
    inStock: true,
  },
  {
    id: "musk-aj",
    slug: "aj-musk",
    name: { ar: "مسك AJ", en: "AJ Musk" },
    description: {
      ar: "المسك المميز لعلامة أجود. تركيبة فريدة تحمل هوية البراند وتعكس الذوق الرفيع.",
      en: "AJoud's signature musk. A unique formula that carries the brand identity and reflects refined taste.",
    },
    story: {
      ar: "مسك AJ هو العطر الذي بدأت به قصة أجود. تركيبة شخصية تطورت عبر سنوات من التجريب حتى وصلت للكمال.",
      en: "AJ Musk is the fragrance that started the AJoud story. A personal formula refined over years of experimentation until perfection was achieved.",
    },
    category: "musk",
    images: ["/images/products/white-musk.png", "/images/products/three-musks.png"],
    sizes: [
      { id: "quarter", label: { ar: "ربع تولة", en: "Quarter Tola" }, price: 65 },
      { id: "half", label: { ar: "نصف تولة", en: "Half Tola" }, price: 120 },
      { id: "full", label: { ar: "تولة", en: "Tola" }, price: 220 },
    ],
    fragranceNotes: {
      top: [{ ar: "برغموت", en: "Bergamot" }, { ar: "ليمون", en: "Lemon" }],
      heart: [{ ar: "مسك أبيض", en: "White Musk" }, { ar: "ياسمين", en: "Jasmine" }],
      base: [{ ar: "صندل", en: "Sandalwood" }, { ar: "سيدار", en: "Cedar" }],
    },
    badges: ["new"],
    inStock: true,
  },
  {
    id: "musk-aj-blue",
    slug: "aj-blue-musk",
    name: { ar: "مسك AJ الأزرق", en: "AJ Blue Musk" },
    description: {
      ar: "النسخة الزرقاء المنعشة من مسك AJ. مزيج بارد ومنعش يناسب كل الأوقات.",
      en: "The refreshing blue edition of AJ Musk. A cool, invigorating blend perfect for any occasion.",
    },
    story: {
      ar: "استُلهم مسك AJ الأزرق من نسمات البحر الأبيض المتوسط، ليقدم تجربة عطرية منعشة بلمسة شرقية.",
      en: "AJ Blue Musk draws inspiration from Mediterranean sea breezes, delivering a refreshing fragrance experience with an oriental touch.",
    },
    category: "musk",
    images: ["/images/products/blue-musk.png", "/images/products/blue-musk-angle.png"],
    sizes: [
      { id: "quarter", label: { ar: "ربع تولة", en: "Quarter Tola" }, price: 65 },
      { id: "half", label: { ar: "نصف تولة", en: "Half Tola" }, price: 120 },
      { id: "full", label: { ar: "تولة", en: "Tola" }, price: 220 },
    ],
    fragranceNotes: {
      top: [{ ar: "نعناع", en: "Mint" }, { ar: "لافندر", en: "Lavender" }],
      heart: [{ ar: "مسك أزرق", en: "Blue Musk" }, { ar: "أوزون", en: "Ozone" }],
      base: [{ ar: "خشب الأرز", en: "Cedarwood" }, { ar: "عنبر", en: "Amber" }],
    },
    badges: ["new"],
    inStock: true,
  },
  {
    id: "musk-taifi-rose",
    slug: "taifi-rose-musk",
    name: { ar: "مسك ورد طائفي", en: "Taifi Rose Musk" },
    description: {
      ar: "مزيج ساحر من المسك وورد الطائف الشهير. عطر أنثوي فاخر بلمسة شرقية أصيلة.",
      en: "An enchanting blend of musk and the famous Taifi rose. A luxurious feminine fragrance with an authentic oriental touch.",
    },
    story: {
      ar: "يجمع هذا العطر بين نقاء المسك وجمال ورد الطائف المقطوف يدوياً من حدائق الطائف العريقة.",
      en: "This fragrance combines the purity of musk with the beauty of hand-picked Taifi roses from the historic gardens of Taif.",
    },
    category: "musk",
    images: ["/images/products/green-musk.png", "/images/products/three-musks.png"],
    sizes: [
      { id: "quarter", label: { ar: "ربع تولة", en: "Quarter Tola" }, price: 65 },
      { id: "half", label: { ar: "نصف تولة", en: "Half Tola" }, price: 120 },
      { id: "full", label: { ar: "تولة", en: "Tola" }, price: 220 },
    ],
    fragranceNotes: {
      top: [{ ar: "ورد طائفي", en: "Taifi Rose" }, { ar: "فريزيا", en: "Freesia" }],
      heart: [{ ar: "مسك", en: "Musk" }, { ar: "ورد دمشقي", en: "Damascene Rose" }],
      base: [{ ar: "عنبر", en: "Amber" }, { ar: "فانيلا", en: "Vanilla" }],
    },
    badges: [],
    inStock: true,
  },
  {
    id: "musk-premium",
    slug: "premium-musk",
    name: { ar: "مسك فاخر", en: "Premium Musk" },
    description: {
      ar: "مسك فاخر بتركيبة غنية وعميقة. رائحة دافئة تدوم طوال اليوم وتترك أثراً لا يُنسى.",
      en: "Premium musk with a rich, deep formula. A warm scent that lasts all day and leaves an unforgettable impression.",
    },
    story: {
      ar: "تركيبة كلاسيكية تعكس عراقة المسك الشرقي، مُعدّة بعناية لتناسب الذواقة من محبي العطور الأصيلة.",
      en: "A classic formula reflecting the heritage of oriental musk, carefully crafted for connoisseurs of authentic fragrances.",
    },
    category: "musk",
    images: ["/images/products/white-musk.png", "/images/products/three-musks.png"],
    sizes: [
      { id: "quarter", label: { ar: "ربع تولة", en: "Quarter Tola" }, price: 65 },
      { id: "half", label: { ar: "نصف تولة", en: "Half Tola" }, price: 120 },
      { id: "full", label: { ar: "تولة", en: "Tola" }, price: 220 },
    ],
    fragranceNotes: {
      top: [{ ar: "مسك", en: "Musk" }, { ar: "عنبر رمادي", en: "Ambergris" }],
      heart: [{ ar: "دهن العود", en: "Oud Oil" }, { ar: "زنبق", en: "Lily" }],
      base: [{ ar: "صندل", en: "Sandalwood" }, { ar: "باتشولي", en: "Patchouli" }],
    },
    badges: [],
    inStock: true,
  },
  {
    id: "musk-legends",
    slug: "legends-musk",
    name: { ar: "مسك الأساطير", en: "Legends Musk" },
    description: {
      ar: "مسك الأساطير — عطر غامض وساحر مستوحى من حكايات الشرق القديمة.",
      en: "Legends Musk — a mysterious, enchanting fragrance inspired by ancient tales of the Orient.",
    },
    story: {
      ar: "مستوحى من أساطير طريق الحرير، حيث كان المسك أغلى من الذهب وأندر من الجواهر.",
      en: "Inspired by Silk Road legends, where musk was more precious than gold and rarer than jewels.",
    },
    category: "musk",
    images: ["/images/products/green-musk.png", "/images/products/three-musks.png"],
    sizes: [
      { id: "quarter", label: { ar: "ربع تولة", en: "Quarter Tola" }, price: 50 },
      { id: "half", label: { ar: "نصف تولة", en: "Half Tola" }, price: 90 },
      { id: "full", label: { ar: "تولة", en: "Tola" }, price: 170 },
    ],
    fragranceNotes: {
      top: [{ ar: "بخور", en: "Incense" }, { ar: "زعفران", en: "Saffron" }],
      heart: [{ ar: "مسك", en: "Musk" }, { ar: "عود", en: "Oud" }],
      base: [{ ar: "عنبر", en: "Amber" }, { ar: "فيتيفر", en: "Vetiver" }],
    },
    badges: [],
    inStock: true,
  },
  {
    id: "musk-sweet",
    slug: "sweet-musk",
    name: { ar: "مسك سويتي", en: "Sweet Musk" },
    description: {
      ar: "مسك حلو وناعم بلمسة فاكهية منعشة. مثالي للاستخدام اليومي.",
      en: "A sweet, soft musk with a refreshing fruity touch. Perfect for everyday wear.",
    },
    story: {
      ar: "صُمم للشباب الباحثين عن عطر عصري يجمع بين أصالة المسك وروح الحداثة.",
      en: "Designed for young people seeking a modern fragrance combining musk authenticity with a contemporary spirit.",
    },
    category: "musk",
    images: ["/images/products/blue-musk.png", "/images/products/three-musks.png"],
    sizes: [
      { id: "quarter", label: { ar: "ربع تولة", en: "Quarter Tola" }, price: 35 },
      { id: "half", label: { ar: "نصف تولة", en: "Half Tola" }, price: 60 },
      { id: "full", label: { ar: "تولة", en: "Tola" }, price: 110 },
    ],
    fragranceNotes: {
      top: [{ ar: "فراولة", en: "Strawberry" }, { ar: "خوخ", en: "Peach" }],
      heart: [{ ar: "مسك", en: "Musk" }, { ar: "كراميل", en: "Caramel" }],
      base: [{ ar: "فانيلا", en: "Vanilla" }, { ar: "سكر بني", en: "Brown Sugar" }],
    },
    badges: ["new"],
    inStock: true,
  },
  {
    id: "musk-tulip",
    slug: "tulip-musk",
    name: { ar: "مسك توليب", en: "Tulip Musk" },
    description: {
      ar: "مسك ناعم بعبير التوليب الهولندي. رائحة أنيقة ومرحة.",
      en: "A delicate musk with Dutch tulip fragrance. An elegant and playful scent.",
    },
    story: {
      ar: "مزيج فريد يجمع بين رقة التوليب الهولندي ودفء المسك الشرقي في تجربة عطرية لا تُنسى.",
      en: "A unique blend combining the delicacy of Dutch tulips with the warmth of oriental musk in an unforgettable fragrance experience.",
    },
    category: "musk",
    images: ["/images/products/green-musk.png", "/images/products/three-musks.png"],
    sizes: [
      { id: "quarter", label: { ar: "ربع تولة", en: "Quarter Tola" }, price: 30 },
      { id: "half", label: { ar: "نصف تولة", en: "Half Tola" }, price: 55 },
      { id: "full", label: { ar: "تولة", en: "Tola" }, price: 100 },
    ],
    fragranceNotes: {
      top: [{ ar: "توليب", en: "Tulip" }, { ar: "زنبق", en: "Lily" }],
      heart: [{ ar: "مسك", en: "Musk" }, { ar: "بيوني", en: "Peony" }],
      base: [{ ar: "خشب أبيض", en: "White Wood" }, { ar: "مسك ناعم", en: "Soft Musk" }],
    },
    badges: [],
    inStock: true,
  },
  {
    id: "musk-floral",
    slug: "floral-musk",
    name: { ar: "مسك زهور", en: "Floral Musk" },
    description: {
      ar: "باقة زهور ربيعية ممزوجة بالمسك الناعم. عطر خفيف ومنعش.",
      en: "A spring flower bouquet blended with soft musk. A light and refreshing fragrance.",
    },
    story: {
      ar: "مستوحى من حدائق الربيع، يجمع أجمل الزهور في تركيبة واحدة مع لمسة مسك دافئة.",
      en: "Inspired by spring gardens, combining the most beautiful flowers in one formula with a warm musk touch.",
    },
    category: "musk",
    images: ["/images/products/white-musk.png", "/images/products/three-musks.png"],
    sizes: [
      { id: "quarter", label: { ar: "ربع تولة", en: "Quarter Tola" }, price: 25 },
      { id: "half", label: { ar: "نصف تولة", en: "Half Tola" }, price: 45 },
      { id: "full", label: { ar: "تولة", en: "Tola" }, price: 80 },
    ],
    fragranceNotes: {
      top: [{ ar: "ورد", en: "Rose" }, { ar: "ياسمين", en: "Jasmine" }],
      heart: [{ ar: "مسك", en: "Musk" }, { ar: "لوتس", en: "Lotus" }],
      base: [{ ar: "خشب الأرز", en: "Cedarwood" }, { ar: "مسك أبيض", en: "White Musk" }],
    },
    badges: [],
    inStock: true,
  },
  {
    id: "musk-ice",
    slug: "ice-musk",
    name: { ar: "مسك ثلجي", en: "Ice Musk" },
    description: {
      ar: "مسك بارد ومنعش كالثلج. رائحة نظيفة وصافية تناسب الأجواء الحارة.",
      en: "A cold, refreshing musk like ice. A clean, pure scent perfect for hot weather.",
    },
    story: {
      ar: "صُمم خصيصاً لمواجهة حرارة الصيف السعودي، يمنحك إحساساً بالانتعاش يدوم طوال اليوم.",
      en: "Specially designed to combat Saudi summer heat, giving you a lasting sense of freshness throughout the day.",
    },
    category: "musk",
    images: ["/images/products/blue-musk.png", "/images/products/three-musks.png"],
    sizes: [
      { id: "quarter", label: { ar: "ربع تولة", en: "Quarter Tola" }, price: 25 },
      { id: "half", label: { ar: "نصف تولة", en: "Half Tola" }, price: 45 },
      { id: "full", label: { ar: "تولة", en: "Tola" }, price: 80 },
    ],
    fragranceNotes: {
      top: [{ ar: "نعناع", en: "Mint" }, { ar: "كافور", en: "Camphor" }],
      heart: [{ ar: "مسك ثلجي", en: "Ice Musk" }, { ar: "أوزون", en: "Ozone" }],
      base: [{ ar: "مسك أبيض", en: "White Musk" }, { ar: "خشب صندل", en: "Sandalwood" }],
    },
    badges: [],
    inStock: true,
  },
  {
    id: "oud-cambodian",
    slug: "cambodian-premium-oud",
    name: { ar: "عود كمبودي فاخر", en: "Cambodian Premium Oud" },
    description: {
      ar: "دهن عود كمبودي فاخر من أندر الغابات الاستوائية. عطر ملكي بامتياز يدوم لأيام.",
      en: "Premium Cambodian oud oil from the rarest tropical forests. A truly royal fragrance that lasts for days.",
    },
    story: {
      ar: "يُقطّر هذا العود من أشجار الأكويلاريا المعمّرة في أعماق غابات كمبوديا، حيث تستغرق عملية التقطير أسابيع للحصول على أنقى دهن عود.",
      en: "This oud is distilled from aged Aquilaria trees deep in Cambodian forests, where the distillation process takes weeks to obtain the purest oud oil.",
    },
    category: "oud",
    images: ["/images/products/oud-globe-1.png", "/images/products/oud-globe-2.png", "/images/products/oud-box.png"],
    sizes: [
      { id: "quarter", label: { ar: "ربع تولة", en: "Quarter Tola" }, price: 350 },
      { id: "half", label: { ar: "نصف تولة", en: "Half Tola" }, price: 650 },
      { id: "full", label: { ar: "تولة", en: "Tola" }, price: 1200 },
    ],
    fragranceNotes: {
      top: [{ ar: "عود كمبودي", en: "Cambodian Oud" }, { ar: "زعفران", en: "Saffron" }],
      heart: [{ ar: "دهن العود", en: "Oud Oil" }, { ar: "ورد", en: "Rose" }],
      base: [{ ar: "عنبر", en: "Amber" }, { ar: "مسك", en: "Musk" }],
    },
    badges: ["limited", "bestseller"],
    inStock: true,
  },
  {
    id: "bakhoor-cambodian",
    slug: "cambodian-bakhoor",
    name: { ar: "بخور كمبودي", en: "Cambodian Bakhoor" },
    description: {
      ar: "بخور كمبودي فاخر من أجود أنواع خشب العود. رائحة غنية وعميقة تملأ المكان بأجواء ساحرة.",
      en: "Premium Cambodian bakhoor from the finest oud wood. A rich, deep scent that fills the space with an enchanting atmosphere.",
    },
    story: {
      ar: "يُحضّر هذا البخور من رقائق خشب العود الكمبودي المعتّق، ويُمزج بالعنبر والمسك لتجربة بخور استثنائية.",
      en: "Prepared from aged Cambodian oud wood chips, blended with amber and musk for an exceptional bakhoor experience.",
    },
    category: "bakhoor",
    images: ["/images/products/oud-globe-1.png", "/images/products/oud-box.png"],
    sizes: [
      { id: "small", label: { ar: "علبة صغيرة", en: "Small Box" }, price: 120 },
      { id: "large", label: { ar: "علبة كبيرة", en: "Large Box" }, price: 220 },
    ],
    fragranceNotes: {
      top: [{ ar: "عود كمبودي", en: "Cambodian Oud" }, { ar: "بخور", en: "Incense" }],
      heart: [{ ar: "عنبر", en: "Amber" }, { ar: "صندل", en: "Sandalwood" }],
      base: [{ ar: "مسك", en: "Musk" }, { ar: "فانيلا", en: "Vanilla" }],
    },
    badges: ["new"],
    inStock: true,
  },
  {
    id: "oil-royal-dehn",
    slug: "royal-dehn-oud",
    name: { ar: "دهن عود ملكي", en: "Royal Dehn Oud" },
    description: {
      ar: "دهن عود ملكي مركّز من أندر أنواع العود. قطرة واحدة تكفي ليوم كامل من الفخامة.",
      en: "Concentrated royal oud oil from the rarest oud varieties. A single drop provides a full day of luxury.",
    },
    story: {
      ar: "يُقطّر بطريقة تقليدية تستغرق أسابيع للحصول على أنقى دهن عود، مخصص لعشاق العطور النادرة.",
      en: "Distilled using a traditional method that takes weeks to obtain the purest oud oil, crafted for rare fragrance enthusiasts.",
    },
    category: "oils",
    images: ["/images/products/oud-globe-2.png", "/images/products/oud-globe-1.png"],
    sizes: [
      { id: "quarter", label: { ar: "ربع تولة", en: "Quarter Tola" }, price: 450 },
      { id: "half", label: { ar: "نصف تولة", en: "Half Tola" }, price: 850 },
    ],
    fragranceNotes: {
      top: [{ ar: "دهن عود", en: "Oud Oil" }, { ar: "زعفران", en: "Saffron" }],
      heart: [{ ar: "ورد طائفي", en: "Taifi Rose" }, { ar: "عنبر", en: "Amber" }],
      base: [{ ar: "مسك", en: "Musk" }, { ar: "صندل", en: "Sandalwood" }],
    },
    badges: ["limited"],
    inStock: true,
  },
  {
    id: "home-bakhoor-mix",
    slug: "home-bakhoor-mix",
    name: { ar: "خلطة بخور بيتي", en: "Home Bakhoor Mix" },
    description: {
      ar: "خلطة بخور بيتية مميزة بروائح دافئة ومريحة. مثالية لتعطير المنزل والمجالس.",
      en: "A distinctive home bakhoor blend with warm, comforting scents. Perfect for scenting homes and gathering spaces.",
    },
    story: {
      ar: "خلطة عائلية توارثتها الأجيال، تجمع بين خشب العود والأعشاب العطرية لتعطير البيت بأصالة سعودية.",
      en: "A family blend passed down through generations, combining oud wood and aromatic herbs for an authentically Saudi home fragrance.",
    },
    category: "home",
    images: ["/images/products/oud-box.png", "/images/products/oud-globe-1.png"],
    sizes: [
      { id: "small", label: { ar: "علبة صغيرة", en: "Small Box" }, price: 85 },
      { id: "large", label: { ar: "علبة كبيرة", en: "Large Box" }, price: 150 },
    ],
    fragranceNotes: {
      top: [{ ar: "بخور", en: "Incense" }, { ar: "هيل", en: "Cardamom" }],
      heart: [{ ar: "عود", en: "Oud" }, { ar: "ورد", en: "Rose" }],
      base: [{ ar: "عنبر", en: "Amber" }, { ar: "مسك أبيض", en: "White Musk" }],
    },
    badges: [],
    inStock: true,
  },
  {
    id: "gift-musk-trio",
    slug: "musk-trio-gift-set",
    name: { ar: "طقم المسك الثلاثي", en: "Musk Trio Gift Set" },
    description: {
      ar: "طقم هدية فاخر يضم ثلاثة من أشهر أنواع المسك في علبة خشبية أنيقة.",
      en: "A premium gift set featuring three of our most popular musks in an elegant wooden box.",
    },
    story: {
      ar: "الهدية المثالية لمحبي المسك — ثلاث تجارب عطرية مختلفة في علبة واحدة أنيقة.",
      en: "The perfect gift for musk lovers — three different fragrance experiences in one elegant box.",
    },
    category: "gift-sets",
    images: ["/images/products/oud-box.png", "/images/products/three-musks.png"],
    sizes: [
      { id: "set", label: { ar: "الطقم الكامل", en: "Full Set" }, price: 180 },
    ],
    fragranceNotes: {
      top: [{ ar: "متنوع", en: "Assorted" }],
      heart: [{ ar: "مسك متنوع", en: "Assorted Musk" }],
      base: [{ ar: "متنوع", en: "Assorted" }],
    },
    badges: ["bestseller"],
    inStock: true,
  },
];

// Helper functions
export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === "best-sellers") {
    return products.filter((p) => p.badges.includes("bestseller"));
  }
  if (categoryId === "new-arrivals") {
    return products.filter((p) => p.badges.includes("new"));
  }
  return products.filter((p) => p.category === categoryId);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getLocalizedProduct(
  product: Product,
  locale: "ar" | "en"
): LocalizedProduct {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name[locale],
    description: product.description[locale],
    story: product.story[locale],
    category: product.category,
    images: product.images,
    sizes: product.sizes.map((s) => ({
      id: s.id,
      label: s.label[locale],
      price: s.price,
    })),
    fragranceNotes: {
      top: product.fragranceNotes.top.map((n) => n[locale]),
      heart: product.fragranceNotes.heart.map((n) => n[locale]),
      base: product.fragranceNotes.base.map((n) => n[locale]),
    },
    badges: product.badges,
    inStock: product.inStock,
    basePrice: product.sizes[0].price,
  };
}
