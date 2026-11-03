// src/data/site.ts
import type { Localized } from "@/types";

export const siteConfig = {
  name: "Bona",
  legalName: "Bona Agricultural Export",
  domain: "https://bonaexport.com",
  email: "info@bonaexport.com",
  phone: "+20 2 1234 5678",
  whatsapp: "+201000000000",
  socials: {
    linkedin: "https://linkedin.com/company/bona-export",
  },
  // ⚠️ عنوان placeholder — من تصميم Stitch، محتاج تأكيد
  hqAddress: {
    en: "Agricultural Export Zone, Alexandria, Egypt",
    ar: "المنطقة الحرة للتصدير الزراعي، الإسكندرية، مصر",
  } as Localized,
};