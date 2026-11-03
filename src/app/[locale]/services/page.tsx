import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesCTA from "@/components/services/ServicesCTA";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    return buildMetadata({
        title: "Services",
        description:
            "Comprehensive agricultural export solutions from Bona — sourcing, logistics, quality control, and custom packaging.",
        path: "/services",
        locale,
    });
}

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServicesGrid />
            <ServicesCTA />
        </>
    );
}