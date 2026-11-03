// src/components/layout/LanguageSwitcher.tsx
"use client";

import { routing } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

const localeLabels: Record<string, string> = {
    en: "EN",
    ar: "AR",
};

export default function LanguageSwitcher({
    variant = "onLight",
}: {
    variant?: "onLight" | "onDark";
}) {
    const pathname = usePathname();
    const activeLocale = useLocale();

    return (
        <div className="flex items-center gap-1 text-sm font-semibold">
            {routing.locales.map((loc, index) => (
                <span key={loc} className="flex items-center gap-1">
                    <Link
                        href={pathname}
                        locale={loc}
                        scroll={false}
                        replace
                        className={cn(
                            "transition-colors",
                            activeLocale === loc
                                ? variant === "onDark"
                                    ? "text-accent"
                                    : "text-primary"
                                : variant === "onDark"
                                    ? "text-primary-foreground/60 hover:text-primary-foreground"
                                    : "text-foreground/50 hover:text-foreground"
                        )}
                    >
                        {localeLabels[loc]}
                    </Link>
                    {index < routing.locales.length - 1 && (
                        <span
                            className={
                                variant === "onDark"
                                    ? "text-primary-foreground/40"
                                    : "text-foreground/30"
                            }
                        >
                            |
                        </span>
                    )}
                </span>
            ))}
        </div>
    );
}