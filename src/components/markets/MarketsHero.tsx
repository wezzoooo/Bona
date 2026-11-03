// src/components/markets/MarketsHero.tsx
import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { marketsHeroContent } from "@/data/markets";
import PageHero from "@/components/common/PageHero";

export default async function MarketsHero() {
    const locale = await getLocale();
    return (
        <PageHero
            title={local(marketsHeroContent.title, locale)}
            subtitle={local(marketsHeroContent.subtitle, locale)}
        />
    );
}