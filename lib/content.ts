export const CONTACT = {
  phone: "+91 9953996070",
  phoneHref: "tel:+919953996070",
  email: "concierge@maisonavya.com",
  instagram: "@maisonavya",
  instagramHref: "https://instagram.com/maisonavya",
  location: "New Delhi, India",
};

export type Product = { sku: string; name: string; image: string };

export type Collection = {
  slug: string;
  name: string;
  description: string;
  /** Longer copy used on the collection detail header */
  longDescription?: string;
  eyebrow?: string;
  productCount: number;
  image: string;
  products: Product[];
};

export const collections: Collection[] = [
  {
    slug: "daisy-series",
    name: "The Daisy Series",
    description:
      "Delicate silver baskets, elegant serving trays, and handcrafted candle stands inspired by wildflowers.",
    longDescription:
      "Delicate silver baskets, elegant serving trays, and handcrafted candle stands inspired by wildflowers. Each piece is deliberately structured to bridge botanical romance with sovereign table service.",
    eyebrow: "Signature Line",
    productCount: 9,
    image: "/images/collection-daisy.png",
    products: [
      { sku: "DSB-001", name: "Daisy Basket", image: "/images/product-daisy-basket.png" },
      { sku: "DSB-003", name: "Daisy Candle Stand S/2", image: "/images/about.png" },
      { sku: "DSB-006", name: "Daisy Frame", image: "/images/collection-frames.png" },
      { sku: "DSB-009", name: "Daisy Square Tray", image: "/images/about.png" },
      { sku: "DSB-008", name: "Daisy Round Bowl", image: "/images/about.png" },
      { sku: "DSB-005", name: "Daisy Double Tier Platter", image: "/images/product-daisy-basket.png" },
    ],
  },
  {
    slug: "lily-series",
    name: "Lily Series",
    description: "Architectural decorative bowls mirroring the organic structural elegance of blooming lilies.",
    productCount: 2,
    image: "/images/collection-lily.png",
    products: [],
  },
  {
    slug: "bowls-collection",
    name: "Bowls Collection",
    description:
      "An array of spectacular statements including our elephant bowl and natural malachite-embedded bowl.",
    productCount: 3,
    image: "/images/collection-bowls.png",
    products: [],
  },
  {
    slug: "diyas-pooja-sets",
    name: "Diya's & Pooja Sets",
    description: "Sacred lotus diyas and tall, traditional samai diyas crafted for rituals of light.",
    productCount: 9,
    image: "/images/collection-diyas.png",
    products: [],
  },
  {
    slug: "gift-sets",
    name: "Gift Sets",
    description:
      "Intricately finished floral jar and luxury tray sets, optimized for prestigious corporate gifting.",
    productCount: 2,
    image: "/images/collection-gift-sets.png",
    products: [],
  },
  {
    slug: "photo-frames",
    name: "Photo Frames",
    description: "Sovereign frames featuring detailed 3D leaves and sacred Nandi iconography.",
    productCount: 2,
    image: "/images/collection-frames.png",
    products: [],
  },
];

export const signaturePieces: Product[] = [
  { sku: "DSB-001", name: "Daisy Basket", image: "/images/product-daisy-basket.png" },
  { sku: "DPS-006", name: "Lotus Diya & Pink Bell Set", image: "/images/product-lotus-diya.png" },
  { sku: "B-002", name: "Malachite Bowl", image: "/images/product-malachite-bowl.png" },
];

export const services = [
  { title: "Custom Engraving", body: "Monograms, corporate seals, and bespoke messaging directly onto the silver facade." },
  { title: "Bespoke Sets", body: "Design a customized configuration suited to your brand's unique hospitality standards." },
  { title: "Branded Packaging", body: "Impeccable rigid box structures, sage paper wraps, and gold leaf hot stamping." },
  { title: "Bulk Orders", body: "Streamlined logistics and tailored pricing for high-volume prestigious occasions." },
];

export type PillarIcon = "hand-helping" | "tree-palm" | "gift";

export const pillars: { icon: PillarIcon; title: string; body: string }[] = [
  {
    icon: "hand-helping",
    title: "Handcrafted Artistry",
    body: "Each piece is meticulously shaped and finished by master silverware artisans, preserving generation-spanning craft techniques.",
  },
  {
    icon: "tree-palm",
    title: "Timeless Design",
    body: "Deeply inspired by nature's geometry and organic motifs, built deliberately to serve as a lasting family or corporate legacy.",
  },
  {
    icon: "gift",
    title: "Bespoke Service",
    body: "Meticulously customized for your specific corporate occasion, private brand identity, or prestigious milestone celebration.",
  },
];

export const homeTestimonials = [
  {
    quote:
      "Maison AVYA delivered an exceptional suite of custom-engraved silver platters for our board members. The level of craftsmanship and elegant packaging exceeded all international luxury benchmarks.",
    name: "Radhika K. Sen",
    role: "Vice President, Oberoi Group Initiatives",
  },
  {
    quote:
      "Our annual festive corporate gifting was transformed into an artistic statement. The Lily series decorative bowls became talking points among our premium clientele.",
    name: "Vikramaditya Mehta",
    role: "Managing Director, Vistaara Global Capital",
  },
];

export const corporateTestimonials = [
  { ...homeTestimonials[0], quote: homeTestimonials[0].quote.replace("all international luxury", "all luxury") },
  homeTestimonials[1],
];

export const homeSteps = [
  { title: "Enquire", body: "Share your aesthetic aspirations, budget thresholds, and specific corporate occasion details with our dedicated concierge." },
  { title: "Customise", body: "Review bespoke monogram renders, engraving placements, custom configurations, and custom packaging designs." },
  { title: "Craft", body: "Master artisans bring the designs to life using traditional silversmithing techniques, hand-finishing each curve." },
  { title: "Deliver", body: "Impeccably secured and beautifully gift-wrapped, your customized commissions are dispatched safely nationwide." },
];

export const corporateSteps = [
  { title: "Enquire", body: "Share your aesthetic aspirations, budget thresholds, and corporate occasion details." },
  { title: "Design Consultation", body: "Review bespoke monogram renders, engraving placements, and custom packaging layouts." },
  { title: "Crafting", body: "Master artisans bring the custom designs to life using traditional silversmithing techniques." },
  { title: "Quality Check", body: "Each piece undergoes strict validation to ensure pristine silver purity and finish standards." },
  { title: "Delivery", body: "Impeccably secured and beautifully gift-wrapped, your customized commissions are dispatched safely." },
];

export const occasions = [
  "Weddings",
  "Baby Showers",
  "Diwali Gifting",
  "Corporate Events",
  "Festival Celebrations",
  "Client Appreciation",
];

export const OCCASION_OPTIONS = ["Corporate Gifting", ...occasions, "Catalogue Request", "Other"];
