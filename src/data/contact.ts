import type { Localized, Office, InterestOption } from "@/types";

export const contactHeroContent = {
    title: { en: "Contact Bona", ar: "تواصل مع Bona" } as Localized,
    subtitle: {
        en: "Connect with our team to discuss international trade partnerships, request a quote, or inquire about our premium agricultural exports.",
        ar: "تواصل مع فريقنا لمناقشة شراكات التجارة الدولية، أو طلب عرض سعر، أو الاستفسار عن منتجاتنا الزراعية الفاخرة.",
    } as Localized,
};

export const offices: Office[] = [
    {
        key: "cairo-hq",
        icon: "Building2",
        name: { en: "Cairo Headquarters", ar: "المقر الرئيسي - القاهرة" },
        // ⚠️ عنوان placeholder — محتاج تأكيد نهائي
        address: {
            en: "Nile Tower, 45 Corniche El Nil, Maadi, Cairo, Egypt 11431",
            ar: "برج النيل، 45 كورنيش النيل، المعادي، القاهرة، مصر 11431",
        },
        phone: "+20 2 1234 5678",
        email: "hq@bonaexport.com",
    },
    {
        key: "alexandria-hub",
        icon: "Ship",
        name: { en: "Alexandria Export Hub", ar: "مركز التصدير - الإسكندرية" },
        address: {
            en: "Port Authority Complex, Gate 4, Alexandria, Egypt 21519",
            ar: "مجمع هيئة الميناء، بوابة 4، الإسكندرية، مصر 21519",
        },
        phone: "+20 3 8765 4321",
        email: "logistics@bonaexport.com",
    },
];

export const interestOptions: InterestOption[] = [
    { value: "citrus", label: { en: "Citrus Export", ar: "تصدير الموالح" } },
    { value: "vegetables", label: { en: "Fresh Vegetables", ar: "خضروات طازجة" } },
    { value: "herbs", label: { en: "Fresh Herbs", ar: "أعشاب طازجة" } },
    { value: "logistics", label: { en: "Logistics & Shipping", ar: "الشحن واللوجستيات" } },
    { value: "other", label: { en: "Other Inquiry", ar: "استفسار آخر" } },
];