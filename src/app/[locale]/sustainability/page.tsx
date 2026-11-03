// src/app/[locale]/sustainability/page.tsx
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import SustainabilityHero from "@/components/sustainability/SustainabilityHero";
import SustainabilityIntro from "@/components/sustainability/SustainabilityIntro";
import WaterManagementSection from "@/components/sustainability/WaterManagementSection";
import RenewableEnergySection from "@/components/sustainability/RenewableEnergySection";
import SoilRegenerationSection from "@/components/sustainability/SoilRegenerationSection";
import SustainabilityCertifications from "@/components/sustainability/SustainabilityCertifications";
import SustainabilityCTA from "@/components/sustainability/SustainabilityCTA";
import SectionContainer from "@/components/common/SectionContainer";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    return buildMetadata({
        title: "Sustainability",
        description:
            "Bona's commitment to water management, renewable energy, and soil regeneration across Egypt's fertile farmlands.",
        path: "/sustainability",
        locale,
    });
}

export default function SustainabilityPage() {
    return (
        <>
            <SustainabilityHero />
            <SustainabilityIntro />
            <SectionContainer className="grid gap-6 !pt-8 sm:grid-cols-2">
                <WaterManagementSection />
                <RenewableEnergySection />
                <SoilRegenerationSection />
                <SustainabilityCertifications />
            </SectionContainer>
            <SustainabilityCTA />
        </>
    );
}