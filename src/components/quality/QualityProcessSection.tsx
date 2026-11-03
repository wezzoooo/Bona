import { CheckCircle2 } from "lucide-react";
import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { iconMap } from "@/lib/icon-map";
import { protocolHeading, qualitySteps, inspectionChecklist } from "@/data/quality";
import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

export default async function QualityProcessSection() {
    const locale = await getLocale();

    return (
        <>
            <SectionContainer>
                <SectionHeading
                    title={local(protocolHeading.heading, locale)}
                    subtitle={local(protocolHeading.subtext, locale)}
                />

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {qualitySteps.map((step, i) => {
                        const Icon = iconMap[step.icon] ?? iconMap.default;
                        return (
                            <Reveal key={step.number} delay={(i % 4) * 0.08}>
                                <div className="relative rounded-lg border border-border p-5">
                                    <span className="text-xs font-bold text-accent">{step.number}</span>
                                    <div className="mt-2 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                                        <Icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <p className="mt-3 font-semibold text-primary">{local(step.title, locale)}</p>
                                    <p className="mt-1 text-sm text-foreground/70">{local(step.description, locale)}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </SectionContainer>

            <section className="bg-muted">
                <SectionContainer>
                    <SectionHeading
                        title={local(inspectionChecklist.heading, locale)}
                        subtitle={local(inspectionChecklist.subtext, locale)}
                    />
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {inspectionChecklist.items.map((item) => (
                            <div key={local(item, locale)} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
                                <span className="text-foreground/80">{local(item, locale)}</span>
                            </div>
                        ))}
                    </div>
                </SectionContainer>
            </section>
        </>
    );
}