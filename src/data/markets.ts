import type { Localized, MarketRegion } from "@/types";

export const egyptCoordinates: [number, number] = [31.2357, 30.0444];

export const marketsHeroContent = {
    title: { en: "From Egypt to the World", ar: "من مصر للعالم" } as Localized,
    subtitle: {
        en: "Connecting the fertile Nile valley with global markets. Our rigorous logistics and quality control ensure premium produce reaches destinations across Europe, the GCC, and Asia with absolute freshness.",
        ar: "بنربط وادي النيل الخصب بالأسواق العالمية. لوجستياتنا الصارمة ومراقبة الجودة بتضمن وصول محاصيلنا الفاخرة لأوروبا والخليج وآسيا بأعلى درجة طزاجة.",
    } as Localized,
};

export const marketsStat = {
    value: "45K+",
    label: { en: "Metric Tons Delivered Annually", ar: "طن متري يُسلَّم سنويًا" } as Localized,
};

export const marketRegions: MarketRegion[] = [
    {
        key: "eu",
        icon: "Globe2",
        name: { en: "European Union", ar: "الاتحاد الأوروبي" },
        description: {
            en: "Strict adherence to Global GAP standards ensures our produce seamlessly enters the most demanding European markets.",
            ar: "التزامنا الصارم بمعايير Global GAP بيضمن دخول محاصيلنا بسلاسة لأكتر الأسواق الأوروبية تشددًا.",
        },
        volume: "18K MT",
        keyCrops: { en: "Citrus, Grapes", ar: "الموالح، العنب" },
        countries: ["Germany", "Netherlands", "UK", "France", "Italy"],
        coordinates: [13.405, 52.52],
    },
    {
        key: "gcc",
        icon: "Building2",
        name: { en: "GCC & Middle East", ar: "الخليج والشرق الأوسط" },
        description: {
            en: "Rapid transit times and specialized cold-chain logistics tailored for the Gulf region.",
            ar: "أوقات نقل سريعة ولوجستيات سلسلة تبريد متخصصة مصممة لمنطقة الخليج.",
        },
        volume: "15K MT",
        keyCrops: { en: "Onions, Potatoes", ar: "البصل، البطاطس" },
        countries: ["KSA", "UAE", "Kuwait"],
        coordinates: [55.2708, 25.2048],
    },
    {
        key: "asia",
        icon: "Compass",
        name: { en: "Asia & Far East", ar: "آسيا والشرق الأقصى" },
        description: {
            en: "Expanding horizons with durable packaging solutions designed for extended sea freight journeys.",
            ar: "بنوسّع آفاقنا بحلول تعبئة متينة مصممة لرحلات الشحن البحري الطويلة.",
        },
        volume: "12K MT",
        keyCrops: { en: "Pomegranates", ar: "الرمان" },
        countries: ["India", "China", "Malaysia"],
        coordinates: [72.8777, 19.076],
    },
];

export const marketsCTA = {
    heading: {
        en: "Ready to Secure Premium Egyptian Produce for Your Market?",
        ar: "جاهز تأمّن منتجات مصرية فاخرة لسوقك؟",
    } as Localized,
};