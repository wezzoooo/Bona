"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { local } from "@/lib/utils";
import { products, productCategories } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductsGrid() {
    const locale = useLocale();
    const t = useTranslations("ProductsPage");
    const [activeCategory, setActiveCategory] = useState("all");
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        return products.filter((p) => {
            const matchesCategory = activeCategory === "all" || p.category === activeCategory;
            const matchesQuery = local(p.name, locale)
                .toLowerCase()
                .includes(query.toLowerCase());
            return matchesCategory && matchesQuery;
        });
    }, [activeCategory, query, locale]);

    return (
        <div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-2">
                    {productCategories.map((cat) => (
                        <button
                            key={cat.key}
                            type="button"
                            onClick={() => setActiveCategory(cat.key)}
                            className={
                                activeCategory === cat.key
                                    ? "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                                    : "rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground/70 hover:border-primary"
                            }
                        >
                            {local(cat.label, locale)}
                        </button>
                    ))}
                </div>

                <div className="relative w-full max-w-xs">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40 rtl:left-auto rtl:right-3" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={t("searchPlaceholder")}
                        className="w-full rounded-md border border-input bg-background py-2 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring rtl:pl-3 rtl:pr-9"
                    />
                </div>
            </div>

            {filtered.length > 0 ? (
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {filtered.map((product) => (
                        <ProductCard key={product.slug} product={product} />
                    ))}
                </div>
            ) : (
                <p className="mt-16 text-center text-foreground/60">{t("noResults")}</p>
            )}
        </div>
    );
}