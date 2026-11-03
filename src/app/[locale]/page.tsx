import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProductsPreviewSection from "@/components/home/ProductsPreviewSection";
import HomeCTASection from "@/components/home/HomeCTASection";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    return buildMetadata({
        title: "Bona | Premium Egyptian Agricultural Export",
        description:
            "Bona bridges Egyptian agricultural heritage with international corporate standards for premium global trade.",
        path: "",
        locale,
        absoluteTitle: true,
    });
}

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <ProductsPreviewSection />
            <HomeCTASection />
        </>
    );
}