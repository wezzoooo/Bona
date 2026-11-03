import type { Product } from "@/types";
import type { Localized } from "@/types";

export const productsPageIntro = {
    heading: { en: "Our Harvest", ar: "محصولنا" } as Localized,
    subtext: {
        en: "Discover our premium selection of Egyptian agricultural products, cultivated with heritage and exported with precision.",
        ar: "اكتشف تشكيلتنا المتميزة من المنتجات الزراعية المصرية، تُزرع بتراث عريق وتُصدَّر بدقة.",
    } as Localized,
};

export const productCategories: {
    key: "all" | "fruits" | "vegetables" | "herbs";
    label: Localized;
}[] = [
        { key: "all", label: { en: "All", ar: "الكل" } },
        { key: "fruits", label: { en: "Fruits", ar: "فواكه" } },
        { key: "vegetables", label: { en: "Vegetables", ar: "خضروات" } },
        // ⚠️ مفيش أي منتج "Herbs" في التصميم لحد دلوقتي — التاب هيفضل موجود بس هيرجّع قائمة فاضية
        { key: "herbs", label: { en: "Herbs", ar: "أعشاب" } },
    ];

export const products: Product[] = [
    {
        slug: "egyptian-oranges",
        category: "fruits",
        name: { en: "Egyptian Oranges", ar: "البرتقال المصري" },
        shortDescription: {
            en: "Premium juicing oranges known for their excellent color, high juice content, and sweet flavor profile.",
            ar: "برتقال فاخر معروف بلونه المميز ومحتواه العصيري المرتفع ونكهته الحلوة.",
        },
        description: {
            en: "Renowned globally for their vibrant color, intense flavor, and exceptional juiciness. Cultivated in the fertile soils of the Nile Delta, meeting the highest standards of international trade.",
            ar: "مشهور عالميًا بلونه الزاهي ونكهته القوية وعصارته الاستثنائية. يُزرع في تربة دلتا النيل الخصبة وفق أعلى معايير التجارة الدولية.",
        },
        // ⚠️ صورة placeholder — استبدلها بصورة حقيقية للبرتقال
        image: "https://picsum.photos/seed/bona-egyptian-oranges/1200/900",
        specs: {
            origin: { en: "Egypt", ar: "مصر" },
            varieties: { en: "Navel, Valencia, Baladi", ar: "أبوسرة، فالنسيا، بلدي" },
            harvestSeason: { en: "November - May", ar: "نوفمبر - مايو" },
            availability: { en: "Fresh / Cold Storage", ar: "طازج / تخزين مبرّد" },
            caliberSizes: ["44", "48", "56", "64", "72", "80", "88", "100", "113", "125"],
            certifications: ["Global GAP", "ISO 9001"],
        },
        packagingOptions: [
            {
                name: { en: "15kg Open Top", ar: "15 كجم مفتوح من أعلى" },
                description: {
                    en: "Standard carton suitable for direct display.",
                    ar: "كرتونة قياسية مناسبة للعرض المباشر.",
                },
            },
            {
                name: { en: "15kg Telescopic", ar: "15 كجم تليسكوبي" },
                description: {
                    en: "Reinforced carton for long-distance cold transit.",
                    ar: "كرتونة معززة للنقل البارد لمسافات طويلة.",
                },
            },
        ],
        editorial: {
            heading: {
                en: "Exceptional Quality from the Nile Delta",
                ar: "جودة استثنائية من دلتا النيل",
            },
            paragraphs: [
                {
                    en: "Egyptian oranges, particularly the Navel and Valencia varieties, dominate the global citrus market due to their robust flavor profile, high juice content, and long shelf life. Our dedicated farms utilize modern, sustainable agricultural practices alongside the natural advantages of Egypt's climate to produce fruit that meets the stringent requirements of international buyers.",
                    ar: "تتصدر البرتقال المصري، وخاصة صنفي أبوسرة وفالنسيا، السوق العالمي للموالح بفضل نكهته القوية ومحتواه العصيري المرتفع وقدرته على التخزين الطويل. تعتمد مزارعنا ممارسات زراعية حديثة ومستدامة إلى جانب مميزات مناخ مصر الطبيعية لإنتاج ثمار تلبي أعلى متطلبات المشترين الدوليين.",
                },
                {
                    en: "Every batch undergoes rigorous quality control, from field harvesting to packhouse sorting, ensuring consistent sizing, blemish-free skin, and optimal sugar-to-acid ratios. We guarantee a premium product ready for immediate retail display or further processing.",
                    ar: "تخضع كل دفعة لرقابة جودة صارمة، من الحصاد الحقلي وحتى الفرز في بيت التعبئة، لضمان تجانس الأحجام ونقاء القشرة وأفضل نسبة سكر للحموضة. نضمن منتجًا فاخرًا جاهزًا للعرض المباشر أو لمزيد من التصنيع.",
                },
            ],
        },
        qualityBadges: [
            { icon: "Award", label: { en: "Grade A Quality", ar: "جودة الدرجة الأولى" } },
            { icon: "ShieldCheck", label: { en: "GlobalG.A.P. Certified", ar: "معتمد GlobalG.A.P." } },
            { icon: "Leaf", label: { en: "Sustainable Farming", ar: "زراعة مستدامة" } },
        ],
    },
    {
        slug: "prime-seedless-grapes",
        category: "fruits",
        name: { en: "Prime Seedless Grapes", ar: "عنب بدون بذور فاخر" },
        shortDescription: {
            en: "Early season white seedless grapes offering crisp texture and perfectly balanced sweetness.",
            ar: "عنب أبيض بدون بذور من أول الموسم، بقوام مقرمش وحلاوة متوازنة.",
        },
        // ⚠️ صورة placeholder
        image: "https://picsum.photos/seed/bona-grapes/1200/900",
        specs: {
            origin: { en: "Menia", ar: "المنيا" },
            harvestSeason: { en: "May - Jul", ar: "مايو - يوليو" },
        },
        packagingOptions: [
            { name: { en: "Punnets (500g) in Cartons", ar: "علب (500 جم) داخل كراتين" } },
        ],
    },
    {
        slug: "globe-artichokes",
        category: "vegetables",
        name: { en: "Globe Artichokes", ar: "الخرشوف" },
        shortDescription: {
            en: "Freshly harvested globe artichokes known for their tender hearts and robust flavor.",
            ar: "خرشوف طازج معروف بقلبه الطري ونكهته القوية.",
        },
        // ⚠️ صورة placeholder
        image: "https://picsum.photos/seed/bona-artichokes/1200/900",
        specs: {
            origin: { en: "Beheira", ar: "البحيرة" },
            harvestSeason: { en: "Dec - Apr", ar: "ديسمبر - أبريل" },
        },
        packagingOptions: [
            { name: { en: "Plastic Crates (5kg)", ar: "صناديق بلاستيك (5 كجم)" } },
        ],
    },
    {
        slug: "wonderful-pomegranates",
        category: "fruits",
        name: { en: "Wonderful Pomegranates", ar: "رمان وندرفل" },
        shortDescription: {
            en: "Large, ruby-red pomegranates with juicy arils and a perfect sweet-tart balance.",
            ar: "رمان كبير أحمر ياقوتي بحبات عصيرية وتوازن مثالي بين الحلاوة والحموضة.",
        },
        // ⚠️ صورة placeholder
        image: "https://picsum.photos/seed/bona-pomegranates/1200/900",
        specs: {
            origin: { en: "Assiut", ar: "أسيوط" },
            harvestSeason: { en: "Sep - Nov", ar: "سبتمبر - نوفمبر" },
        },
        packagingOptions: [
            { name: { en: "Open Top Cartons (4.5kg)", ar: "كراتين مفتوحة (4.5 كجم)" } },
        ],
    },
];

export function getProductBySlug(slug: string) {
    return products.find((p) => p.slug === slug);
}