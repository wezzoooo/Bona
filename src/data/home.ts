import type { Stat, ProductPreviewItem } from "@/types";

export const heroContent = {
  headlineLine1: { en: "Fresh From Egypt.", ar: "طازج من مصر." },
  headlineLine2: { en: "Delivered Worldwide.", ar: "يُشحن لكل أنحاء العالم." },
  subtext: {
    en: "Premium B2B agricultural export bridging Egyptian heritage with global logistical excellence. Supplying the world with the finest quality produce.",
    ar: "تصدير زراعي متميز بين الشركات، يربط التراث المصري بالتميز اللوجستي العالمي، ونورّد لأسواق العالم أجود المحاصيل.",
  },
  // ⚠️ صورة مؤقتة (placeholder) — استبدلها بصورة حقول/نهر النيل الحقيقية بتاعتكم
  image: "https://picsum.photos/seed/bona-hero/1600/900",
};

export const stats: Stat[] = [
  { value: "15+", label: { en: "Years Experience", ar: "سنوات خبرة" } },
  { value: "30+", label: { en: "Global Markets", ar: "سوق عالمي" } },
  {
    value: "50K",
    label: { en: "Tons Exported Annually", ar: "طن يُصدَّر سنويًا" },
  },
  {
    value: "100%",
    label: { en: "Global GAP Certified", ar: "معتمد Global GAP بالكامل" },
  },
];

export const productsPreviewIntro = {
  heading: { en: "Premium Egyptian Produce", ar: "منتجات مصرية متميزة" },
  subtext: {
    en: "Sourced from the fertile lands of the Nile Delta, meticulously sorted, and packaged for international standards.",
    ar: "من أخصب أراضي الدلتا، تُفرز بدقة وتُعبأ وفق أعلى المعايير العالمية.",
  },
};

export const productsPreview: ProductPreviewItem[] = [
  {
    id: "citrus-fruits",
    name: { en: "Citrus Fruits", ar: "الموالح" },
    description: {
      en: "World-renowned Valencia and Navel oranges, renowned for juice content and shelf life.",
      ar: "برتقال بلدي وفالنسيا مشهور عالميًا بمحتواه العصيري وقدرته على التخزين الطويل.",
    },
    // ⚠️ صورة مؤقتة — استبدلها بصورة حقيقية لصناديق الموالح بتاعتكم
    image: "https://picsum.photos/seed/bona-citrus/800/600",
    metadata: {
      origin: { en: "Nile Delta", ar: "دلتا النيل" },
      season: { en: "Nov - May", ar: "نوفمبر - مايو" },
      packaging: { en: "Telescopic Cartons", ar: "كراتين تليسكوبية" },
    },
  },
  {
    id: "root-vegetables",
    name: { en: "Root Vegetables", ar: "الخضروات الجذرية" },
    description: {
      en: "Premium potatoes and onions cultivated in nutrient-rich sandy soils.",
      ar: "بطاطس وبصل فاخر يُزرع في تربة رملية غنية بالعناصر الغذائية.",
    },
    // ⚠️ صورة مؤقتة — استبدلها بصورة حقيقية للبطاطس/البصل بتاعتكم
    image: "https://picsum.photos/seed/bona-root-vegetables/800/600",
    metadata: {
      season: { en: "Jan - Jun", ar: "يناير - يونيو" },
      packaging: { en: "Mesh Bags", ar: "أكياس شبكية" },
    },
  },
];


export const homeCTA = {
  heading: {
    en: "Ready to Source Premium Egyptian Produce?",
    ar: "جاهز تستورد أجود المحاصيل المصرية؟",
  },
  subtext: {
    en: "Partner with Bona for a reliable, end-to-end export experience — from the farm to your market.",
    ar: "اتشارك مع Bona في تجربة تصدير موثوقة ومتكاملة، من المزرعة لسوقك مباشرة.",
  },
};