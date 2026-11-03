import type { Localized, QualityStep } from "@/types";

export const qualityHeroContent = {
    title: { en: "Uncompromising Quality Standards", ar: "معايير جودة لا تقبل التنازل" } as Localized,
    subtitle: {
        en: "From Egyptian soil to global markets, Bona's commitment to excellence ensures every harvest meets rigorous international standards.",
        ar: "من التربة المصرية للأسواق العالمية، التزام Bona بالتميز بيضمن إن كل محصول يستوفي أعلى المعايير الدولية الصارمة.",
    } as Localized,
};

export const protocolHeading = {
    heading: { en: "Our Quality Protocol", ar: "بروتوكول الجودة بتاعنا" } as Localized,
    subtext: {
        en: "Our commitment to international quality and food safety standards ensures that every product is carefully handled from sourcing to delivery.",
        ar: "التزامنا بمعايير الجودة وسلامة الغذاء العالمية بيضمن التعامل بعناية مع كل منتج من مصدره لحد وصوله.",
    } as Localized,
};

export const qualitySteps: QualityStep[] = [
    { number: "01", icon: "Globe2", title: { en: "Sourcing", ar: "التوريد" }, description: { en: "Partnering strictly with certified farms adhering to Good Agricultural Practices.", ar: "نتعامل حصريًا مع مزارع معتمدة ملتزمة بالممارسات الزراعية الجيدة." } },
    { number: "02", icon: "FlaskConical", title: { en: "Soil Analysis", ar: "تحليل التربة" }, description: { en: "Pre-planting testing ensures optimal nutrient profiles and absence of contaminants.", ar: "فحص قبل الزراعة يضمن أفضل محتوى غذائي وخلوّ التربة من الملوثات." } },
    { number: "03", icon: "Droplet", title: { en: "Irrigation Purity", ar: "نقاء مياه الري" }, description: { en: "Continuous monitoring of water sources using advanced filtration systems.", ar: "مراقبة مستمرة لمصادر المياه باستخدام أنظمة ترشيح متقدمة." } },
    { number: "04", icon: "Search", title: { en: "Pre-Harvest & Field Inspection", ar: "فحص الحقل قبل الحصاد" }, description: { en: "Rigorous on-site testing for pesticide residues and physical defects before and during harvest.", ar: "فحص ميداني صارم لبقايا المبيدات والعيوب الفيزيائية قبل وأثناء الحصاد." } },
    { number: "05", icon: "Leaf", title: { en: "Controlled Harvesting", ar: "الحصاد المتحكم فيه" }, description: { en: "Harvesting timed precisely for peak maturity and flavor profile.", ar: "توقيت الحصاد بدقة عالية لضمان النضج الأمثل وأفضل نكهة." } },
    { number: "06", icon: "Layers", title: { en: "Automated Sorting & Grading", ar: "الفرز والتصنيف الآلي" }, description: { en: "Optical sorting technology combined with expert manual grading for uniformity in size and color.", ar: "تقنية فرز بصري مدمجة مع تصنيف يدوي متخصص لضمان تجانس الحجم واللون." } },
    { number: "07", icon: "Microscope", title: { en: "Lab Verification", ar: "التحقق المعملي" }, description: { en: "Final chemical and biological testing before packaging.", ar: "فحوصات كيميائية وبيولوجية نهائية قبل التعبئة." } },
    { number: "08", icon: "PackageOpen", title: { en: "Packing", ar: "التعبئة" }, description: { en: "Export-grade, climate-appropriate packaging designed to maximize shelf life.", ar: "تعبئة بمستوى التصدير ومناسبة للمناخ لإطالة فترة الصلاحية." } },
    { number: "09", icon: "Snowflake", title: { en: "Cold Chain & Storage", ar: "سلسلة التبريد والتخزين" }, description: { en: "Immediate transfer to temperature-controlled facilities to halt degradation during transit.", ar: "نقل فوري لمنشآت مبرّدة لإيقاف أي تدهور أثناء النقل." } },
    { number: "10", icon: "FileText", title: { en: "Documentation", ar: "التوثيق" }, description: { en: "Precise handling of all phytosanitary certificates and export compliance paperwork.", ar: "تعامل دقيق مع كل الشهادات الصحية النباتية وأوراق الامتثال الجمركي." } },
    { number: "11", icon: "Ship", title: { en: "Shipping", ar: "الشحن" }, description: { en: "Logistics coordination utilizing specialized reefer containers for maritime transport.", ar: "تنسيق لوجستي باستخدام حاويات مبرّدة متخصصة للنقل البحري." } },
    { number: "12", icon: "MapPin", title: { en: "Delivery", ar: "التسليم" }, description: { en: "Seamless handover to international distributors, ensuring prime condition upon arrival.", ar: "تسليم سلس للموزعين الدوليين لضمان وصول المنتج في أفضل حالة." } },
];

export const inspectionChecklist = {
    heading: { en: "Rigorous Inspection", ar: "فحص صارم" } as Localized,
    subtext: {
        en: "Every batch undergoes strict scrutiny to guarantee it meets our exacting standards before export.",
        ar: "كل دفعة بتخضع لفحص دقيق لضمان مطابقتها لمعاييرنا الصارمة قبل التصدير.",
    } as Localized,
    items: [
        { en: "Visual aesthetic and blemish check", ar: "فحص المظهر الجمالي والعيوب" },
        { en: "Firmness and ripeness assessment", ar: "تقييم الصلابة ودرجة النضج" },
        { en: "Brix (sugar content) measurement", ar: "قياس نسبة السكر (Brix)" },
        { en: "Residue and contaminant screening", ar: "فحص البقايا والملوّثات" },
    ] as Localized[],
};

export const certificationsIntro = {
    heading: { en: "Global Credentials", ar: "الاعتمادات العالمية" } as Localized,
    subtext: {
        en: "Certified by leading international bodies, ensuring compliance with global safety and quality standards.",
        ar: "معتمدون من كبرى الجهات الدولية، بما يضمن الالتزام بمعايير السلامة والجودة العالمية.",
    } as Localized,
};

export const qualityCTA = {
    heading: { en: "Quality You Can Rely On", ar: "جودة تقدر تعتمد عليها" } as Localized,
    subtext: {
        en: "Talk to our quality assurance team about certifications, lab reports, or a sample shipment.",
        ar: "تواصل مع فريق ضمان الجودة بتاعنا بخصوص الشهادات أو تقارير المعامل أو شحنة عيّنة.",
    } as Localized,
};