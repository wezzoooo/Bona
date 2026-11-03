// src/components/sustainability/SustainabilityCertifications.tsx
import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { sustainabilityCertificationsIntro } from "@/data/sustainability";
import { certifications } from "@/data/certifications";
import Reveal from "@/components/common/Reveal";

export default async function SustainabilityCertifications() {
    const locale = await getLocale();

    return (
        <Reveal delay={0.3}>
            <div className="flex h-full flex-col justify-center rounded-lg bg-abyssal-green p-6 text-primary-foreground">
                <h3 className="text-headline-sm font-semibold">
                    {local(sustainabilityCertificationsIntro.heading, locale)}
                </h3>
                <p className="mt-2 text-sm text-primary-foreground/70">
                    {local(sustainabilityCertificationsIntro.subtext, locale)}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                    {certifications.map((cert) => (
                        <span
                            key={cert.name}
                            className="rounded-md border border-primary-foreground/20 px-3 py-2 text-center text-xs font-semibold"
                        >
                            {cert.name}
                        </span>
                    ))}
                </div>
            </div>
        </Reveal>
    );
}