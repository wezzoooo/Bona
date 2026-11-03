/** أي نص بيتكرر بالعربي والإنجليزي في ملفات data/*.ts */
export interface Localized {
    en: string;
    ar: string;
}

export interface Stat {
    value: string;
    label: Localized;
}

export interface ProductMetadata {
    origin?: Localized;
    season: Localized;
    packaging: Localized;
}

export interface ProductPreviewItem {
    id: string;
    name: Localized;
    description: Localized;
    image: string;
    metadata: ProductMetadata;
}


export type ProductCategoryKey = "fruits" | "vegetables" | "herbs";

export interface PackagingOption {
    name: Localized;
    description?: Localized;
}

export interface QualityBadge {
    icon: string; // اسم أيقونة من lucide-react (متعرّفة في IconMap جوه الكومبوننت)
    label: Localized;
}

export interface ProductSpecs {
    origin: Localized;
    varieties?: Localized;
    harvestSeason: Localized;
    availability?: Localized;
    caliberSizes?: string[];
    certifications?: string[]; // أسامي زي "Global GAP" بتفضل زي ما هي، مش محتاجة ترجمة
}

export interface Product {
    slug: string;
    category: ProductCategoryKey;
    name: Localized;
    shortDescription: Localized;
    /** فقرة أطول للصفحة التفصيلية — لو مش موجودة بيتم استخدام shortDescription بدلها */
    description?: Localized;
    image: string;
    specs: ProductSpecs;
    packagingOptions: PackagingOption[];
    editorial?: {
        heading: Localized;
        paragraphs: Localized[];
    };
    qualityBadges?: QualityBadge[];
}

export interface Service {
    slug: string;
    icon: string; // اسم أيقونة lucide-react
    name: Localized;
    description: Localized;
    image: string;
}
export interface TimelineItem {
    year: Localized;
    title: Localized;
    description: Localized;
}

export interface TeamMember {
    name: string;
    role: Localized;
    bio: Localized;
    image: string; 
    email: string;
    phone: string;
}

export interface SustainabilityPillar {
    icon: string;
    title: Localized;
    description: Localized;
    image: string;
}


export interface QualityStep {
    number: string;
    icon: string;
    title: Localized;
    description: Localized;
}

export interface MarketRegion {
    key: string;
    name: Localized;
    description: Localized;
    volume: string;
    keyCrops: Localized;
    countries: string[];
    icon: string;
    coordinates: [number, number];
}

export interface Office {
    key: string;
    icon: string;
    name: Localized;
    address: Localized;
    phone: string;
    email: string;
}

export interface InterestOption {
    value: string;
    label: Localized;
}