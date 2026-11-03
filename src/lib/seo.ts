import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/data/site";

export function buildMetadata({
    title,
    description,
    path = "",
    locale,
    absoluteTitle = false,
}: {
    title: string;
    description: string;
    path?: string;
    locale: string;
    absoluteTitle?: boolean;
}): Metadata {
    const languages = Object.fromEntries(
        routing.locales.map((l) => [l, `/${l}${path}`])
    );

    return {
        title: absoluteTitle ? { absolute: title } : title,
        description,
        alternates: {
            canonical: `/${locale}${path}`,
            languages: {
                ...languages,
                "x-default": `/${routing.defaultLocale}${path}`,
            },
        },
        openGraph: {
            title,
            description,
            url: `/${locale}${path}`,
            siteName: siteConfig.name,
            locale: locale === "ar" ? "ar_EG" : "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}