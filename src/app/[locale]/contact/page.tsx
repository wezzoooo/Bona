import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { getProductBySlug } from "@/data/products";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import SectionContainer from "@/components/common/SectionContainer";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    return buildMetadata({
        title: "Contact",
        description: "Get in touch with Bona's export team for quotes, partnerships, and inquiries.",
        path: "/contact",
        locale,
    });
}

export default async function ContactPage({
    searchParams,
}: {
    searchParams: Promise<{ product?: string }>;
}) {
    const { product: productSlug } = await searchParams;
    const locale = await getLocale();
    const product = productSlug ? getProductBySlug(productSlug) : undefined;
    const initialProductName = product ? local(product.name, locale) : undefined;

    return (
        <>
            <ContactHero />
            <SectionContainer className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
                <ContactInfo />
                <ContactForm initialProductName={initialProductName} />
            </SectionContainer>
        </>
    );
}