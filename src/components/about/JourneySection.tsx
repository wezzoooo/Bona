import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { journeyHeading, journey } from "@/data/about";
import SectionContainer from "@/components/common/SectionContainer";
import Reveal from "@/components/common/Reveal";

export default async function JourneySection() {
    const locale = await getLocale();

    return (
        <SectionContainer>
            <h2 className="text-headline-md font-bold text-primary">
                {local(journeyHeading, locale)}
            </h2>

            <div className="mt-10 grid gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
                {journey.map((item, i) => (
                    <Reveal key={local(item.year, locale)} delay={i * 0.1}>
                        <div className="border-l-2 border-accent pl-4 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4">
                            <p className="text-headline-sm font-bold text-accent">
                                {local(item.year, locale)}
                            </p>
                            <p className="mt-2 font-semibold text-primary">
                                {local(item.title, locale)}
                            </p>
                            <p className="mt-2 text-sm text-foreground/70">
                                {local(item.description, locale)}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </SectionContainer>
    );
}