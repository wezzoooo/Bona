import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { local } from "@/lib/utils";
import { productsPreviewIntro, productsPreview } from "@/data/home";
import { Link } from "@/i18n/navigation";
import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

export default async function ProductsPreviewSection() {
    const locale = await getLocale();
    const t = await getTranslations("Common");

    return (
        <SectionContainer>
            <div className="flex flex-wrap items-end justify-between gap-4">
                <SectionHeading
                    title={local(productsPreviewIntro.heading, locale)}
                    subtitle={local(productsPreviewIntro.subtext, locale)}
                />
                <Link
                    href="/products"
                    className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                    {t("viewAll")}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
                {productsPreview.map((product, i) => (
                    <Reveal key={product.id} delay={i * 0.1}>
                        <div className="group overflow-hidden rounded-lg border border-border">
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={local(product.name, locale)}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-abyssal-green/80 via-abyssal-green/10 to-transparent" />
                                <div className="absolute bottom-0 p-6 text-primary-foreground">
                                    <p className="text-headline-sm font-semibold">
                                        {local(product.name, locale)}
                                    </p>
                                    <p className="mt-1 max-w-md text-sm text-primary-foreground/80">
                                        {local(product.description, locale)}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 divide-x divide-border rtl:divide-x-reverse">
                                {product.metadata.origin && (
                                    <MetaCell
                                        label={t("origin")}
                                        value={local(product.metadata.origin, locale)}
                                    />
                                )}
                                <MetaCell
                                    label={t("season")}
                                    value={local(product.metadata.season, locale)}
                                />
                                <MetaCell
                                    label={t("packaging")}
                                    value={local(product.metadata.packaging, locale)}
                                />
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </SectionContainer>
    );
}

function MetaCell({ label, value }: { label: string; value: string }) {
    return (
        <div className="p-4">
            <p className="text-label-caps uppercase text-foreground/50">{label}</p>
            <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
        </div>
    );
}