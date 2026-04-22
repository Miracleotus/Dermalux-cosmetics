export type Product = {
  id: string;
  sku: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  category: "Premium Themes" | "E-Commerce Plugins" | "Performance Tools" | "Security Tools" | "Marketing Tools" | "Utility Plugins";
};

export const products: Product[] = [
  {
    id: "1",
    sku: "PHC-THM-001",
    name: "Aura Multipurpose Theme",
    shortDesc: "Lightweight, customizable WP theme.",
    fullDesc: "Build any website with Aura. Featuring a drag-and-drop builder, 50+ pre-designed templates, and a bloat-free codebase, this theme guarantees blazing-fast load times and seamless responsiveness.",
    price: 59.00,
    category: "Premium Themes",
  },
  {
    id: "2",
    sku: "PHC-PLG-001",
    name: "HiveCart Checkout Pro",
    shortDesc: "Optimize your WooCommerce checkout.",
    fullDesc: "Reduce cart abandonment by up to 30%. HiveCart Pro offers a customizable one-page checkout, express payment integrations (Apple Pay, Google Pay), and dynamic order bumps.",
    price: 49.00,
    category: "E-Commerce Plugins",
  },
  {
    id: "3",
    sku: "PHC-PLG-002",
    name: "SpeedBoost Cache Master",
    shortDesc: "Advanced caching for peak performance.",
    fullDesc: "Instantly improve your core web vitals. SpeedBoost includes minification, lazy loading, and advanced page caching to ensure your site loads in under a second.",
    price: 39.00,
    category: "Performance Tools",
  },
  {
    id: "4",
    sku: "PHC-PLG-003",
    name: "SecureHive Defender",
    shortDesc: "All-in-one firewall and malware scanner.",
    fullDesc: "Protect your website from brute-force attacks and malware. Features real-time IP blacklisting, two-factor authentication (2FA), and daily automated security scans.",
    price: 69.00,
    category: "Security Tools",
  },
  {
    id: "5",
    sku: "PHC-THM-002",
    name: "Luma Portfolio Theme",
    shortDesc: "Elegant theme for creatives and agencies.",
    fullDesc: "Showcase your work beautifully. Luma features smooth page transitions, masonry grid layouts, and deep integration with Elementor for pixel-perfect portfolio design.",
    price: 45.00,
    category: "Premium Themes",
  },
  {
    id: "6",
    sku: "PHC-PLG-004",
    name: "SEO Optimizer Pro",
    shortDesc: "Rank higher on search engines.",
    fullDesc: "Take the guesswork out of on-page SEO. Includes advanced schema markup generation, keyword density tracking, and automatic XML sitemap updates.",
    price: 55.00,
    category: "Performance Tools",
  },
  {
    id: "7",
    sku: "PHC-PLG-005",
    name: "HiveMail Newsletter Builder",
    shortDesc: "Native email marketing for WordPress.",
    fullDesc: "Build, send, and track stunning email campaigns directly from your dashboard. Features an intuitive drag-and-drop email designer and deep WooCommerce integration for abandoned cart recovery.",
    price: 79.00,
    category: "Marketing Tools",
  },
  {
    id: "8",
    sku: "PHC-THM-003",
    name: "Nova Corporate Theme",
    shortDesc: "Professional business directory theme.",
    fullDesc: "Perfect for corporate sites and directories. Nova includes built-in appointment booking, team member modules, and customizable pricing tables.",
    price: 59.00,
    category: "Premium Themes",
  },
  {
    id: "9",
    sku: "PHC-PLG-006",
    name: "FlexiForms Builder",
    shortDesc: "Advanced drag-and-drop form creator.",
    fullDesc: "Create complex multi-step forms, surveys, and payment collection forms effortlessly. Includes conditional logic and integrates with Zapier and Mailchimp.",
    price: 35.00,
    category: "Utility Plugins",
  },
  {
    id: "10",
    sku: "PHC-PLG-007",
    name: "Hive Backup Sync",
    shortDesc: "Automated cloud backup solution.",
    fullDesc: "Never lose your data again. Schedule daily or weekly backups and send them directly to Google Drive, Dropbox, or Amazon S3 with one click restoration.",
    price: 29.00,
    category: "Utility Plugins",
  },
  {
    id: "11",
    sku: "PHC-PLG-008",
    name: "Storefront Filter Pro",
    shortDesc: "Advanced AJAX product filtering.",
    fullDesc: "Help your customers find exactly what they want. Add dynamic, instant-loading sidebars that filter WooCommerce products by price, category, attributes, and custom tags.",
    price: 45.00,
    category: "E-Commerce Plugins",
  },
  {
    id: "12",
    sku: "PHC-THM-004",
    name: "Chroma Blog Theme",
    shortDesc: "Minimalist, typography-focused blog theme.",
    fullDesc: "Designed for writers and publishers. Chroma prioritizes readability with an ultra-clean layout, dark mode toggle, and seamless Gutenberg block support.",
    price: 39.00,
    category: "Premium Themes",
  },
];