import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { sustainabilityHeroContent } from "@/data/sustainability";
import PageHero from "@/components/common/PageHero";

export default async function SustainabilityHero() {
    const locale = await getLocale();
    return (
        <PageHero
            title={local(sustainabilityHeroContent.title, locale)}
            subtitle={local(sustainabilityHeroContent.subtitle, locale)}
            image={sustainabilityHeroContent.image}
        />
    );
}