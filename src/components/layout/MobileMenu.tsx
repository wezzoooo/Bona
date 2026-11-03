// src/components/layout/MobileMenu.tsx
"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { mainNav } from "@/data/navigation";
import CTAButton from "@/components/common/CTAButton";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "../common/Logo";

export default function MobileMenu({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const t = useTranslations("Nav");
    const pathname = usePathname();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="fixed inset-0 z-60 bg-primary lg:hidden"
                >
                    <div className="flex h-20 items-center justify-end px-4">
                        <div className="px-6">
                            <Logo theme="white" />
                        </div>
                        <button type="button" aria-label="Close menu" onClick={onClose}>
                            <X className="h-7 w-7 text-primary-foreground" />
                        </button>
                    </div>

                    <motion.nav
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
                        className="flex flex-col items-start gap-6 px-6 py-8"
                    >
                        {mainNav.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={onClose}
                                    className={
                                        isActive
                                            ? "text-2xl font-semibold text-accent"
                                            : "text-2xl font-semibold text-primary-foreground transition-colors hover:text-accent"
                                    }
                                >
                                    {t(item.labelKey)}
                                </Link>
                            );
                        })}
                    </motion.nav>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex flex-col gap-6 px-6"
                    >
                        <LanguageSwitcher variant="onDark" />
                        <CTAButton href="/contact" variant="accent" onClick={onClose}>
                            {t("requestQuote")}
                        </CTAButton>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}