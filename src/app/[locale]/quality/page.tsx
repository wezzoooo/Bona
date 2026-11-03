import type { Metadata } from "next";
import QualityHero from "@/components/quality/QualityHero";
import QualityProcessSection from "@/components/quality/QualityProcessSection";
import CertificationsSection from "@/components/quality/CertificationsSection";
import QualityCTA from "@/components/quality/QualityCTA";
import { getLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    return buildMetadata({
        title: "Quality",
        description:
            "Bona's 12-step quality protocol and international certifications — GlobalG.A.P., BRCGS, ISO 22000, HACCP, SEDEX/SMETA.",
        path: "/quality",
        locale,
    });
}

export default function QualityPage() {
    return (
        <>
            <QualityHero />
            <QualityProcessSection />
            <CertificationsSection />
            <QualityCTA />
        </>
    );
}