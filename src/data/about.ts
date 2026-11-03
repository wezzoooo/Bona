import type { Localized, TimelineItem, TeamMember } from "@/types";

export const aboutHeroContent = {
    title: {
        en: "Cultivating Excellence. Rooted in Heritage.",
        ar: "نزرع التميّز، متجذّرين في تراثنا.",
    } as Localized,
    subtitle: {
        en: "For over three decades, Bona has been the bridge between the fertile lands of Egypt and global markets. We are not just exporters; we are stewards of quality, dedicated to delivering the finest agricultural produce with unparalleled reliability.",
        ar: "منذ أكتر من ثلاثين سنة، وBona هي الجسر بين أراضي مصر الخصبة والأسواق العالمية. إحنا مش مجرد مصدّرين، إحنا حُماة الجودة، وملتزمين بتوريد أجود المحاصيل الزراعية بموثوقية لا مثيل لها.",
    } as Localized,
    image: "https://picsum.photos/seed/bona-about-hero/1000/800",
};

export const journeyHeading = {
    en: "Our Journey",
    ar: "رحلتنا",
} as Localized;

export const journey: TimelineItem[] = [
    {
        year: { en: "1992", ar: "1992" },
        title: { en: "The Foundation", ar: "التأسيس" },
        description: {
            en: "Established in the heart of the Nile Delta, beginning with premium citrus exports to regional markets.",
            ar: "تأسست في قلب دلتا النيل، بدايةً بتصدير الموالح الفاخرة للأسواق الإقليمية.",
        },
    },
    {
        year: { en: "2005", ar: "2005" },
        title: { en: "European Expansion", ar: "التوسع في أوروبا" },
        description: {
            en: "Achieved Global GAP certification, opening doors to major European supermarket chains.",
            ar: "حصلنا على شهادة Global GAP، وده فتحلنا أبواب أكبر سلاسل السوبر ماركت الأوروبية.",
        },
    },
    {
        year: { en: "2018", ar: "2018" },
        title: { en: "State-of-the-Art Logistics", ar: "لوجستيات متطورة" },
        description: {
            en: "Inaugurated our advanced packing and cold storage facility, ensuring peak freshness upon arrival.",
            ar: "افتتحنا منشأة التعبئة والتخزين المبرّد المتطورة بتاعتنا، لضمان أعلى درجة طزاجة عند الوصول.",
        },
    },
    {
        year: { en: "Present", ar: "الحاضر" },
        title: { en: "Sustainable Future", ar: "مستقبل مستدام" },
        description: {
            en: "Leading the industry with zero-waste initiatives and full traceability across all product lines.",
            ar: "نقود الصناعة بمبادرات صفر هدر وتتبع كامل لكل خطوط منتجاتنا.",
        },
    },
];

export const managementTeamHeading = {
    heading: { en: "Meet Our Management Team", ar: "تعرّف على فريق الإدارة" } as Localized,
    subtext: {
        en: "Experienced professionals driving Bona's global growth, operations, quality, and international partnerships.",
        ar: "فريق من الخبراء يقود نمو Bona العالمي وعملياتها وجودتها وشراكاتها الدولية.",
    } as Localized,
};

export const managementTeam: TeamMember[] = [
    {
        name: "Ahmed El-Sayed",
        role: { en: "Chief Executive Officer", ar: "الرئيس التنفيذي" },
        bio: {
            en: "Leading Bona's strategic vision with over 20 years of experience in the Egyptian agricultural sector.",
            ar: "يقود الرؤية الاستراتيجية لـ Bona بخبرة تتجاوز 20 عامًا في القطاع الزراعي المصري.",
        },
        // ⚠️ بيانات placeholder من التصميم — محتاجة تأكيد
        image: "https://picsum.photos/seed/bona-team-ahmed/400/400",
        email: "ahmed@bona-eg.com",
        phone: "+20 123 456 7890",
    },
    {
        name: "Mariam Hassan",
        role: { en: "Operations Director", ar: "مديرة العمليات" },
        bio: {
            en: "Optimizing supply chain efficiency and ensuring seamless logistics from farm to global ports.",
            ar: "تعمل على تحسين كفاءة سلسلة التوريد وضمان لوجستيات سلسة من المزرعة للموانئ العالمية.",
        },
        image: "https://picsum.photos/seed/bona-team-mariam/400/400",
        email: "mariam@bona-eg.com",
        phone: "+20 123 456 7891",
    },
    {
        name: "Omar Farouk",
        role: { en: "Quality Assurance Lead", ar: "مسؤول ضمان الجودة" },
        bio: {
            en: "Dedicated to maintaining the highest international standards and certifications for all produce.",
            ar: "مكرّس للحفاظ على أعلى المعايير والشهادات الدولية لكل المنتجات.",
        },
        image: "https://picsum.photos/seed/bona-team-omar/400/400",
        email: "omar@bona-eg.com",
        phone: "+20 123 456 7892",
    },
];

export const aboutCTA = {
    heading: {
        en: "Interested in Partnering with Us?",
        ar: "مهتم بالشراكة معنا؟",
    } as Localized,
    subtext: {
        en: "Our team is ready to discuss how Bona can become a reliable extension of your supply chain.",
        ar: "فريقنا جاهز يتناقش معاك إزاي Bona ممكن تبقى امتداد موثوق لسلسلة التوريد بتاعتك.",
    } as Localized,
};