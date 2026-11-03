import type { Metadata } from "next";
import ProductsHero from "@/components/products/ProductsHero";
import ProductsGrid from "@/components/products/ProductsGrid";
import SectionContainer from "@/components/common/SectionContainer";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";


export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    return buildMetadata({
        title: "Products",
        description: "Discover Bona's premium selection of Egyptian agricultural products.",
        path: "/products",
        locale,
    });
}

export default function ProductsPage() {
    return (
        <>
            <ProductsHero />
            <SectionContainer>
                <ProductsGrid />
            </SectionContainer>
        </>
    );
}