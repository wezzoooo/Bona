// src/components/layout/Footer.tsx
import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { footerNav, type NavItem } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import Logo from "../common/Logo";

export default function Footer() {
    const t = useTranslations("Footer");
    const tNav = useTranslations("Nav");
    const year = new Date().getFullYear();

    return (
        <footer className="bg-abyssal-green text-primary-foreground">
            <div className="mx-auto max-w-[var(--container-max)] px-4 py-16 md:px-6">
                <div className="grid gap-12 md:grid-cols-4">
                    <div>
                        <Logo theme="white" />                        <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
                            {t("tagline")}
                        </p>
                    </div>

                    <FooterColumn
                        title={t("companyHeading")}
                        items={footerNav.company}
                        getLabel={(key) => tNav(key)}
                    />
                    <FooterColumn
                        title={t("businessHeading")}
                        items={footerNav.business}
                        getLabel={(key) => tNav(key)}
                    />

                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50">
                            {t("connectHeading")}
                        </p>
                        <ul className="mt-4 space-y-3 text-sm">
                            {footerNav.connect.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-primary-foreground/80 hover:text-primary-foreground"
                                    >
                                        {tNav(item.labelKey)}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <a href={`mailto:${siteConfig.email}`}
                            aria-label="Email"
                            className="mt-4 inline-flex"
                        >
                            <Mail className="h-5 w-5 text-primary-foreground/70 hover:text-primary-foreground" />
                        </a>
                    </div>
                </div>

                <div className="mt-16 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50">
                    {t("copyright", { year })}
                </div>
            </div>
        </footer >
    );
}

function FooterColumn({
    title,
    items,
    getLabel,
}: {
    title: string;
    items: NavItem[];
    getLabel: (key: string) => string;
}) {
    return (
        <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50">
                {title}
            </p>
            <ul className="mt-4 space-y-3 text-sm">
                {items.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className="text-primary-foreground/80 hover:text-primary-foreground"
                        >
                            {getLabel(item.labelKey)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}