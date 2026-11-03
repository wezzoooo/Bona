// src/data/certifications.ts
import type { Localized } from "@/types";

export interface Certification {
    name: string; 
    description: Localized;
}

// القائمة الموحّدة الوحيدة للشهادات — تُستخدم في Sustainability وQuality معًا
export const certifications: Certification[] = [
    {
        name: "GlobalG.A.P.",
        description: { en: "Good Agricultural Practices", ar: "الممارسات الزراعية الجيدة" },
    },
    {
        name: "BRCGS",
        description: { en: "Global Standard for Food Safety", ar: "المعيار العالمي لسلامة الغذاء" },
    },
    {
        name: "ISO 22000",
        description: { en: "Food Safety Management System", ar: "نظام إدارة سلامة الغذاء" },
    },
    {
        name: "HACCP",
        description: { en: "Hazard Analysis & Critical Control Points", ar: "تحليل المخاطر ونقاط التحكم الحرجة" },
    },
    {
        name: "SEDEX / SMETA",
        description: { en: "Ethical Trade & Social Compliance Audit", ar: "تدقيق التجارة الأخلاقية والامتثال الاجتماعي" },
    },
];