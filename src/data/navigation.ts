// src/data/navigation.ts
// البنية فقط (المسار + مفتاح الترجمة) — النص الفعلي مصدره messages/*.json

export type NavItem = {
  labelKey: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { labelKey: "home", href: "/" },
  { labelKey: "products", href: "/products" },
  { labelKey: "services", href: "/services" },
  { labelKey: "about", href: "/about" },
  { labelKey: "quality", href: "/quality" },
  { labelKey: "sustainability", href: "/sustainability" },
  { labelKey: "markets", href: "/markets" },
  { labelKey: "contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { labelKey: "about", href: "/about" },
    { labelKey: "sustainability", href: "/sustainability" },
    { labelKey: "quality", href: "/quality" },
  ],
  business: [
    { labelKey: "products", href: "/products" },
    { labelKey: "services", href: "/services" },
    { labelKey: "markets", href: "/markets" },
  ],
  connect: [{ labelKey: "contact", href: "/contact" }],
};