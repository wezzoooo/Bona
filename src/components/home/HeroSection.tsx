import Image from "next/image";
import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { local } from "@/lib/utils";
import { heroContent } from "@/data/home";
import CTAButton from "@/components/common/CTAButton";
import Reveal from "@/components/common/Reveal";

export default async function HeroSection() {
    const locale = await getLocale();
    const t = await getTranslations("Common");

    return (
        <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-abyssal-green">
            <Image
                src={heroContent.image}
                alt=""
                fill
                priority
                className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abyssal-green via-abyssal-green/40 to-abyssal-green/10" />

            <div className="relative mx-auto max-w-[var(--container-max)] px-4 md:px-6">
                <Reveal>
                    <h1 className="max-w-3xl text-display-lg font-bold text-primary-foreground">
                        {local(heroContent.headlineLine1, locale)}
                        <br />
                        <span className="text-accent">
                            {local(heroContent.headlineLine2, locale)}
                        </span>
                    </h1>
                    <p className="mt-6 max-w-xl text-body-lg text-primary-foreground/80">
                        {local(heroContent.subtext, locale)}
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <CTAButton href="/products" variant="accent">
                            {t("exploreProducts")}
                        </CTAButton>
                        <CTAButton href="/about" variant="ghost" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                            {t("learnMore")}
                        </CTAButton>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}