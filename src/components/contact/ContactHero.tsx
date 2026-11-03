import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { contactHeroContent } from "@/data/contact";
import PageHero from "@/components/common/PageHero";

export default async function ContactHero() {
    const locale = await getLocale();
    return (
        <PageHero
            title={local(contactHeroContent.title, locale)}
            subtitle={local(contactHeroContent.subtitle, locale)}
        />
    );
}