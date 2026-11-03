import { getLocale, getTranslations } from "next-intl/server";
import { local } from "@/lib/utils";
import { marketsCTA } from "@/data/markets";
import CTAButton from "@/components/common/CTAButton";
import SectionContainer from "@/components/common/SectionContainer";
import Reveal from "@/components/common/Reveal";

export default async function MarketsCTA() {
    const locale = await getLocale();
    const tNav = await getTranslations("Nav");

    return (
        <section className="bg-abyssal-green">
            <SectionContainer className="!py-16 text-center md:!py-20">
                <Reveal>
                    <h2 className="mx-auto max-w-2xl text-headline-md font-bold text-primary-foreground">
                        {local(marketsCTA.heading, locale)}
                    </h2>
                    <div className="mt-8">
                        <CTAButton href="/contact" variant="accent">
                            {tNav("requestQuote")}
                        </CTAButton>
                    </div>
                </Reveal>
            </SectionContainer>
        </section>
    );
}