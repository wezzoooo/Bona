import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { certificationsIntro } from "@/data/quality";
import { certifications } from "@/data/certifications";
import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

export default async function CertificationsSection() {
    const locale = await getLocale();

    return (
        <SectionContainer>
            <SectionHeading
                title={local(certificationsIntro.heading, locale)}
                subtitle={local(certificationsIntro.subtext, locale)}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {certifications.map((cert, i) => (
                    <Reveal key={cert.name} delay={i * 0.08}>
                        <div className="rounded-lg border border-border p-5 text-center">
                            <p className="font-bold text-primary">{cert.name}</p>
                            <p className="mt-1 text-xs text-foreground/60">
                                {local(cert.description, locale)}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </SectionContainer>
    );
}