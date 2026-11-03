import type { Localized, SustainabilityPillar } from "@/types";

export const sustainabilityHeroContent = {
    title: { en: "Sustainability", ar: "الاستدامة" } as Localized,
    subtitle: {
        en: "Environmental stewardship woven into every stage of Bona's export journey.",
        ar: "الحفاظ على البيئة جزء أصيل من كل مرحلة في رحلة تصدير Bona.",
    } as Localized,
    image: "https://picsum.photos/seed/bona-sustainability-hero/1000/800",
};

export const sustainabilityIntro = {
    heading: { en: "Cultivating Tomorrow", ar: "نزرع للمستقبل" } as Localized,
    subtext: {
        en: "Our commitment to sustainability is embedded in every stage of our supply chain. We believe that premium quality export is intrinsically linked to environmental stewardship.",
        ar: "التزامنا بالاستدامة جزء أساسي في كل مرحلة من سلسلة التوريد بتاعتنا. إحنا بنؤمن إن التصدير عالي الجودة مرتبط ارتباط وثيق بالحفاظ على البيئة.",
    } as Localized,
};

export const sustainabilityPillars: SustainabilityPillar[] = [
    {
        icon: "Droplet",
        title: { en: "Water Management", ar: "إدارة المياه" },
        description: {
            en: "Implementing advanced drip irrigation and water recycling systems across partner farms to conserve Egypt's most precious resource while maximizing crop yield.",
            ar: "بنطبّق أنظمة ري بالتنقيط وإعادة تدوير مياه متقدمة في المزارع الشريكة، عشان نحافظ على أثمن موارد مصر مع تعظيم إنتاجية المحصول.",
        },
        image: "https://picsum.photos/seed/bona-water/600/400",
    },
    {
        icon: "Sun",
        title: { en: "Renewable Energy", ar: "الطاقة المتجددة" },
        description: {
            en: "Our central packing facilities and cold storage units are increasingly powered by solar arrays, significantly reducing our carbon footprint in the logistics chain.",
            ar: "منشآت التعبئة والتخزين المبرّد بتاعتنا بتتشغّل بشكل متزايد بالطاقة الشمسية، وده بيقلل بصمتنا الكربونية في سلسلة اللوجستيات بشكل ملحوظ.",
        },
        image: "https://picsum.photos/seed/bona-solar/600/400",
    },
    {
        icon: "Sprout",
        title: { en: "Soil Regeneration", ar: "تجديد التربة" },
        description: {
            en: "Promoting organic farming practices and crop rotation to maintain soil health, ensuring long-term fertility and higher nutritional value in our produce.",
            ar: "بنشجع الزراعة العضوية وتدوير المحاصيل للحفاظ على صحة التربة، وده بيضمن خصوبة طويلة المدى وقيمة غذائية أعلى في محاصيلنا.",
        },
        image: "https://picsum.photos/seed/bona-soil/600/400",
    },
];

export const sustainabilityCertificationsIntro = {
    heading: { en: "Certifications", ar: "الشهادات" } as Localized,
    subtext: {
        en: "Our adherence to stringent international standards guarantees safety, quality, and ethical practices.",
        ar: "التزامنا بأعلى المعايير الدولية بيضمن السلامة والجودة والممارسات الأخلاقية.",
    } as Localized,
};

export const sustainabilityCTA = {
    heading: {
        en: "Committed to a Greener Supply Chain",
        ar: "ملتزمون بسلسلة توريد أكثر استدامة",
    } as Localized,
    subtext: {
        en: "Learn more about how Bona's sustainable practices can align with your brand's values.",
        ar: "اعرف أكتر إزاي ممارسات Bona المستدامة ممكن تتماشى مع قيم علامتك التجارية.",
    } as Localized,
};