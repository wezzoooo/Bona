import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { servicesPageIntro } from "@/data/services";
import PageHero from "@/components/common/PageHero";

export default async function ServicesHero() {
    const locale = await getLocale();
    return (
        <PageHero
            title={local(servicesPageIntro.heading, locale)}
            subtitle={local(servicesPageIntro.subtext, locale)}
        />
    );
}