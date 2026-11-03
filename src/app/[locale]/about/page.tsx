import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import JourneySection from "@/components/about/JourneySection";
import ManagementTeamSection from "@/components/about/ManagementTeamSection";
import AboutCTA from "@/components/about/AboutCTA";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    return buildMetadata({
        title: "About Us",
        description:
            "Bona's story — three decades bridging Egypt's fertile lands with global agricultural markets.",
        path: "/about",
        locale,
    });
}

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <JourneySection />
            <ManagementTeamSection />
            <AboutCTA />
        </>
    );
}