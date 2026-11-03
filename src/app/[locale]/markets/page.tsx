import type { Metadata } from "next";
import MarketsHero from "@/components/markets/MarketsHero";
import MarketsGrid from "@/components/markets/MarketsGrid";
import MarketsCTA from "@/components/markets/MarketsCTA";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    return buildMetadata({
        title: "Global Markets",
        description:
            "Bona exports premium Egyptian produce to the European Union, GCC, and Asia — 45,000+ metric tons annually.",
        path: "/markets",
        locale,
    });
}

export default function MarketsPage() {
    return (
        <>
            <MarketsHero />
            <MarketsGrid />
            <MarketsCTA />
        </>
    );
}