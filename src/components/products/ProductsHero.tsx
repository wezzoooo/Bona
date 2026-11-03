import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { productsPageIntro } from "@/data/products";
import PageHero from "@/components/common/PageHero";

export default async function ProductsHero() {
    const locale = await getLocale();
    return (
        <PageHero
            title={local(productsPageIntro.heading, locale)}
            subtitle={local(productsPageIntro.subtext, locale)}
        />
    );
}