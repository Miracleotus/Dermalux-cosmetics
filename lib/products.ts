export type Product = {
  id: string;
  sku: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  category: string;
};

export const products: Product[] = [
  {
    id: "DLX-TNR-01",
    sku: "DLX-TNR-01",
    name: "Luminous Rose Water Toner",
    price: 24.00,
    category: "Skincare",
    shortDesc: "Instantly hydrate and refresh your skin.",
    fullDesc: "Infused with pure Damask rose extract, this gentle toner balances pH levels, tightens pores, and preps your skin for maximum serum absorption. Cruelty-free and vegan.",
  },
  {
    id: "DLX-SRM-02",
    sku: "DLX-SRM-02",
    name: "Vitamin C Radiance Serum",
    price: 38.00,
    category: "Skincare",
    shortDesc: "Brighten dark spots and even skin tone.",
    fullDesc: "A potent 15% Vitamin C serum packed with antioxidants. It defends against environmental stressors while promoting collagen production for a youthful, radiant glow.",
  },
  {
    id: "DLX-MST-03",
    sku: "DLX-MST-03",
    name: "Silk Cloud Moisturizer",
    price: 32.00,
    category: "Skincare",
    shortDesc: "Deep, non-greasy daily hydration.",
    fullDesc: "Formulated with hyaluronic acid and ceramides, this lightweight gel-cream locks in moisture for 24 hours, leaving skin plump, soft, and perfectly prepped for makeup.",
  },
  {
    id: "DLX-LIP-04",
    sku: "DLX-LIP-04",
    name: "Velvet Matte Lipstick - Blossom",
    price: 18.00,
    category: "Makeup",
    shortDesc: "A long-lasting, hydrating dusty pink matte.",
    fullDesc: "Experience rich, opaque color that doesn't dry out your lips. Enriched with shea butter and Vitamin E, this signature pink shade flatters all skin tones.",
  },
  {
    id: "DLX-BLS-05",
    sku: "DLX-BLS-05",
    name: "Dew Drops Liquid Blush",
    price: 22.00,
    category: "Makeup",
    shortDesc: "A buildable, natural-looking flush.",
    fullDesc: "This weightless liquid blush melts into the skin for a seamless, lit-from-within glow. Just a drop delivers the perfect rosy tint to cheeks and lips.",
  },
  {
    id: "DLX-MST-06",
    sku: "DLX-MST-06",
    name: "Peptide Night Repair Cream",
    price: 45.00,
    category: "Skincare",
    shortDesc: "Wake up to firmer, smoother skin.",
    fullDesc: "A rich overnight treatment that uses advanced peptides and retinol alternatives to repair the skin barrier and smooth fine lines while you sleep.",
  },
  {
    id: "DLX-CLN-07",
    sku: "DLX-CLN-07",
    name: "Gentle Foaming Oat Cleanser",
    price: 20.00,
    category: "Skincare",
    shortDesc: "Melt away makeup and impurities.",
    fullDesc: "A sulfate-free daily cleanser that uses soothing oat extract to calm redness while effectively removing daily grime and waterproof makeup.",
  },
  {
    id: "DLX-SPF-08",
    sku: "DLX-SPF-08",
    name: "Everyday Mineral Shield SPF 50",
    price: 28.00,
    category: "Skincare",
    shortDesc: "Broad-spectrum protection with zero white cast.",
    fullDesc: "Defend your skin from harmful UVA/UVB rays with this sheer, lightweight mineral sunscreen. Acts as the perfect smoothing primer under makeup.",
  },
  {
    id: "DLX-MSK-09",
    sku: "DLX-MSK-09",
    name: "AHA/BHA Resurfacing Mask",
    price: 34.00,
    category: "Skincare",
    shortDesc: "A 10-minute facial for glowing skin.",
    fullDesc: "Exfoliate dead skin cells and unclog pores with our blend of glycolic and salicylic acids. Use weekly for a noticeably smoother, brighter complexion.",
  },
  {
    id: "DLX-MSC-10",
    sku: "DLX-MSC-10",
    name: "Lash Lengthening Mascara",
    price: 20.00,
    category: "Makeup",
    shortDesc: "Lift, define, and volumize all day.",
    fullDesc: "Get the look of extensions with our clump-free, smudge-proof formula. The precision wand catches every lash for maximum length and dramatic curl.",
  }
];