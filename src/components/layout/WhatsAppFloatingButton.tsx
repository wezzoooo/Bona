// src/components/layout/WhatsAppFloatingButton.tsx
"use client";

import { MessageCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { siteConfig } from "@/data/site";

export default function WhatsAppFloatingButton() {
    const locale = useLocale();
    const t = useTranslations("WhatsAppFloat");

    const phone = siteConfig.whatsapp.replace(/[^0-9]/g, "");
    const text = encodeURIComponent(t("greeting"));

    return (

        <a href={`https://wa.me/${phone}?text=${text}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("ariaLabel")}
            dir={locale === "ar" ? "rtl" : "ltr"}
            className="fixed bottom-10 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        >
            <MessageCircle className="h-7 w-7" />
        </a>
    );
}
