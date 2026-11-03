// src/components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import CTAButton from "@/components/common/CTAButton";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import Logo from "../common/Logo";

export default function Navbar() {
    const t = useTranslations("Nav");
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
                <div className="mx-auto flex h-20 max-w-[var(--container-max)] items-center justify-between px-4 md:px-6">
                    <Link href="/">
                        <Logo className="h-16"/>
                    </Link>

                    <nav className="hidden items-center gap-8 lg:flex">
                        {mainNav.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={
                                        isActive
                                            ? "text-sm font-medium text-secondary"
                                            : "text-sm font-medium text-foreground/80 transition-colors hover:text-secondary"
                                    }
                                >
                                    {t(item.labelKey)}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="hidden items-center gap-4 lg:flex">
                        <LanguageSwitcher />
                        <CTAButton href="/contact" variant="accent" size="sm">
                            {t("requestQuote")}
                        </CTAButton>
                    </div>

                    <button
                        type="button"
                        aria-label="Toggle menu"
                        className="flex items-center justify-center lg:hidden"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu className="h-6 w-6 text-primary" />
                    </button>
                </div>
            </header>

            <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}