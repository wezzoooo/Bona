import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { stats } from "@/data/home";
import SectionContainer from "@/components/common/SectionContainer";
import Reveal from "@/components/common/Reveal";

export default async function StatsSection() {
    const locale = await getLocale();

    return (
        <SectionContainer className="!py-12 md:!py-16">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {stats.map((stat, i) => (
                    <Reveal key={stat.value} delay={i * 0.1}>
                        <div className="text-center">
                            <p className="text-headline-md font-bold text-primary">
                                {stat.value}
                            </p>
                            <p className="mt-1 text-label-caps uppercase text-foreground/60">
                                {local(stat.label, locale)}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </SectionContainer>
    );
}