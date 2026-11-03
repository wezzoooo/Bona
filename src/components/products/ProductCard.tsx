"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { local } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { productCategories } from "@/data/products";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
    const locale = useLocale();
    const t = useTranslations("Common");
    const tNav = useTranslations("Nav");
    const categoryLabel = productCategories.find((c) => c.key === product.category)?.label;

    return (
        <div className="group flex flex-col overflow-hidden rounded-lg border border-border transition-shadow hover:shadow-lg">
            <Link href={`/products/${product.slug}`} className="relative block h-48 w-full overflow-hidden">
                <Image
                    src={product.image}
                    alt={local(product.name, locale)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </Link>

            <div className="flex flex-1 flex-col p-5">
                {categoryLabel && (
                    <p className="text-label-caps uppercase text-accent">
                        {local(categoryLabel, locale)}
                    </p>
                )}
                <Link href={`/products/${product.slug}`}>
                    <h3 className="mt-1 text-headline-sm font-semibold text-primary hover:underline">
                        {local(product.name, locale)}
                    </h3>
                </Link>
                <p className="mt-2 line-clamp-2 text-sm text-foreground/70">
                    {local(product.shortDescription, locale)}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-4 text-xs">
                    {product.specs.origin && (
                        <SpecMini label={t("origin")} value={local(product.specs.origin, locale)} />
                    )}
                    <SpecMini label={t("season")} value={local(product.specs.harvestSeason, locale)} />
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
                    <Link
                        href={`/products/${product.slug}`}
                        className="text-sm font-semibold text-primary hover:underline"
                    >
                        {t("viewProduct")}
                    </Link>
                    <Link
                        href={`/contact?product=${product.slug}`}
                        className="rounded-md bg-accent px-3 py-1.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
                    >
                        {tNav("requestQuote")}
                    </Link>
                </div>
            </div>
        </div>
    );
}

function SpecMini({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-foreground/40">{label}</p>
            <p className="font-medium text-foreground">{value}</p>
        </div>
    );
}