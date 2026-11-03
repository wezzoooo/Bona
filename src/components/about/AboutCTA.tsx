import { getLocale, getTranslations } from "next-intl/server";
import { local } from "@/lib/utils";
import { aboutCTA } from "@/data/about";
import CTAButton from "@/components/common/CTAButton";
import SectionContainer from "@/components/common/SectionContainer";
import Reveal from "@/components/common/Reveal";

export default async function AboutCTA() {
    const locale = await getLocale();
    const tNav = await getTranslations("Nav");

    return (
        <section className="bg-abyssal-green">
            <SectionContainer className="!py-16 text-center md:!py-20">
                <Reveal>
                    <h2 className="mx-auto max-w-2xl text-headline-md font-bold text-primary-foreground">
                        {local(aboutCTA.heading, locale)}
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-body-lg text-primary-foreground/75">
                        {local(aboutCTA.subtext, locale)}
                    </p>
                    <div className="mt-8">
                        <CTAButton href="/contact" variant="accent">
                            {tNav("contact")}
                        </CTAButton>
                    </div>
                </Reveal>
            </SectionContainer>
        </section>
    );
}