import type { Service, Localized } from "@/types";

export const servicesPageIntro = {
    heading: { en: "Our Services", ar: "خدماتنا" } as Localized,
    subtext: {
        en: "Comprehensive agricultural export solutions bridging Egyptian heritage with global standards. We ensure quality, efficiency, and reliability at every step of the supply chain.",
        ar: "حلول تصدير زراعي متكاملة تربط التراث المصري بالمعايير العالمية. نضمن الجودة والكفاءة والموثوقية في كل خطوة من سلسلة التوريد.",
    } as Localized,
};

export const services: Service[] = [
    {
        slug: "global-sourcing",
        icon: "Globe2",
        name: { en: "Global Sourcing", ar: "التوريد العالمي" },
        description: {
            en: "Strategic procurement from certified Egyptian farms, ensuring consistent supply volumes and adherence to international MRL standards year-round.",
            ar: "توريد استراتيجي من مزارع مصرية معتمدة، بما يضمن كميات توريد ثابتة والالتزام بمعايير الحد الأقصى لبقايا المبيدات (MRL) العالمية طوال العام.",
        },
        image: "https://picsum.photos/seed/bona-sourcing/800/600",
    },
    {
        slug: "global-logistics-freight",
        icon: "Truck",
        name: { en: "Global Logistics & Freight", ar: "الشحن واللوجستيات الدولية" },
        description: {
            en: "Our seasoned logistics team navigates complex international shipping routes, ensuring our premium produce reaches global markets in optimal condition. We manage end-to-end transport, minimizing delays and maintaining cold-chain integrity.",
            ar: "فريق لوجستي متمرّس يدير خطوط الشحن الدولية المعقدة، لضمان وصول محاصيلنا الفاخرة للأسواق العالمية في أفضل حالة. ندير النقل من البداية للنهاية مع الحفاظ على سلسلة التبريد.",
        },
        image: "https://picsum.photos/seed/bona-logistics/800/600",
    },
    {
        slug: "quality-control-inspection",
        icon: "FileCheck2",
        name: { en: "Quality Control & Inspection", ar: "مراقبة الجودة والفحص" },
        description: {
            en: "Rigorous multi-stage inspections utilizing advanced optical sorting technology and manual verification, from harvest to packaging, ensuring only products meeting strict international standards bear the Bona name.",
            ar: "فحوصات صارمة متعددة المراحل باستخدام تقنيات الفرز البصري المتقدمة والتحقق اليدوي، من الحصاد وحتى التعبئة، لضمان إن اسم Bona ميحملوش غير منتج يستوفي أعلى المعايير الدولية.",
        },
        image: "https://picsum.photos/seed/bona-quality-lab/800/600",
    },
    {
        slug: "sorting-grading",
        icon: "Layers",
        name: { en: "Sorting & Grading", ar: "الفرز والتصنيف" },
        description: {
            en: "Automated calibration for size, color, and defect removal, ensuring uniformity that meets exact buyer specifications for retail markets.",
            ar: "معايرة آلية للحجم واللون وإزالة العيوب، لضمان تجانس يلبي مواصفات المشتري بالتحديد لأسواق التجزئة.",
        },
        image: "https://picsum.photos/seed/bona-sorting/800/600",
    },
    {
        slug: "custom-packaging",
        icon: "PackageOpen",
        name: { en: "Custom Packaging Solutions", ar: "حلول تعبئة مخصصة" },
        description: {
            en: "Tailored packaging options designed to preserve freshness and enhance shelf appeal, ranging from bulk export cartons to retail-ready consumer packaging, utilizing sustainable materials wherever possible.",
            ar: "خيارات تعبئة مصممة خصيصًا للحفاظ على الطزاجة وتحسين مظهر العرض، من كراتين التصدير بالجملة وحتى التعبئة الجاهزة للتجزئة، باستخدام مواد مستدامة قدر الإمكان.",
        },
        image: "https://picsum.photos/seed/bona-packaging/800/600",
    },
];

export const servicesCTA = {
    heading: {
        en: "Ready to Scale Your Imports?",
        ar: "جاهز توسّع استيرادك؟",
    } as Localized,
    subtext: {
        en: "Partner with Bona for reliable, premium agricultural exports. Let our team craft a customized solution for your market needs.",
        ar: "اتشارك مع Bona في تصدير زراعي موثوق وفاخر. خلّي فريقنا يصمملك حل مخصص لاحتياجات سوقك.",
    } as Localized,
};