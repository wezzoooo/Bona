import { siteConfig } from "@/data/site";
import type { Product, Localized } from "@/types";

function pick(field: Localized, locale: string) {
    return locale === "ar" ? field.ar : field.en;
}

export function organizationSchema(locale: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        url: siteConfig.domain,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        sameAs: [siteConfig.socials.linkedin],
        address: {
            "@type": "PostalAddress",
            streetAddress: pick(siteConfig.hqAddress, locale),
            addressCountry: "EG",
        },
    };
}

export function productSchema(product: Product, locale: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: pick(product.name, locale),
        description: pick(product.shortDescription, locale),
        image: product.image,
        brand: { "@type": "Brand", name: siteConfig.name },
    };
}