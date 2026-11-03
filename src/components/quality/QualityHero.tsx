import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { qualityHeroContent } from "@/data/quality";
import PageHero from "@/components/common/PageHero";

export default async function QualityHero() {
    const locale = await getLocale();
    return (
        <PageHero
            title={local(qualityHeroContent.title, locale)}
            subtitle={local(qualityHeroContent.subtitle, locale)}
        />
    );
}