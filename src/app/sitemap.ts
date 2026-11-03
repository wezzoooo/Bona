import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/data/site";
import { products } from "@/data/products";

const staticPaths = [
    "",
    "/products",
    "/services",
    "/about",
    "/quality",
    "/sustainability",
    "/markets",
    "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const productPaths = products.map((p) => `/products/${p.slug}`);
    const allPaths = [...staticPaths, ...productPaths];

    return allPaths.map((path) => ({
        url: `${siteConfig.domain}/${routing.defaultLocale}${path}`,
        lastModified: new Date(),
        alternates: {
            languages: Object.fromEntries(
                routing.locales.map((l) => [l, `${siteConfig.domain}/${l}${path}`])
            ),
        },
    }));
}