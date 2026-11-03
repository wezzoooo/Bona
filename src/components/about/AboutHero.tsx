import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { aboutHeroContent } from "@/data/about";
import PageHero from "@/components/common/PageHero";

export default async function AboutHero() {
    const locale = await getLocale();
    return (
        <PageHero
            title={local(aboutHeroContent.title, locale)}
            subtitle={local(aboutHeroContent.subtitle, locale)}
            image={aboutHeroContent.image}
        />
    );
}