import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { local } from "@/lib/utils";
import { iconMap } from "@/lib/icon-map";
import { siteConfig } from "@/data/site";
import type { Product } from "@/types";
import SectionContainer from "@/components/common/SectionContainer";
import CTAButton from "@/components/common/CTAButton";
import Reveal from "@/components/common/Reveal";

export default async function ProductDetails({ product }: { product: Product }) {
    const locale = await getLocale();
    const t = await getTranslations("ProductDetail");
    const tNav = await getTranslations("Nav");

    return (
        <>
            <section className="relative h-72 w-full overflow-hidden md:h-96">
                <Image src={product.image} alt={local(product.name, locale)} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-abyssal-green/90 via-abyssal-green/30 to-transparent" />
                <div className="absolute bottom-0 w-full px-4 pb-8 md:px-6">
                    <div className="mx-auto max-w-[var(--container-max)]">
                        <Reveal>
                            <h1 className="text-display-lg font-bold text-primary-foreground">
                                {local(product.name, locale)}
                            </h1>
                        </Reveal>
                    </div>
                </div>
            </section>

            <SectionContainer className="grid gap-12 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Reveal>
                        <p className="text-body-lg text-foreground/80">
                            {local(product.description ?? product.shortDescription, locale)}
                        </p>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="mt-10 rounded-lg border border-border p-6">
                            <h2 className="text-headline-sm font-semibold text-primary">{t("specsHeading")}</h2>
                            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                                <Spec label={t("origin")} value={local(product.specs.origin, locale)} />
                                {product.specs.varieties && (
                                    <Spec label={t("varieties")} value={local(product.specs.varieties, locale)} />
                                )}
                                <Spec label={t("harvestSeason")} value={local(product.specs.harvestSeason, locale)} />
                                {product.specs.availability && (
                                    <Spec label={t("availability")} value={local(product.specs.availability, locale)} />
                                )}
                                {product.specs.caliberSizes && (
                                    <div className="sm:col-span-2">
                                        <dt className="text-label-caps uppercase text-foreground/50">{t("caliberSizes")}</dt>
                                        <dd className="mt-2 flex flex-wrap gap-2">
                                            {product.specs.caliberSizes.map((size) => (
                                                <span key={size} className="rounded-full bg-muted px-3 py-1 text-sm text-foreground">
                                                    {size}
                                                </span>
                                            ))}
                                        </dd>
                                    </div>
                                )}
                                {product.specs.certifications && (
                                    <div className="sm:col-span-2">
                                        <dt className="text-label-caps uppercase text-foreground/50">{t("certifications")}</dt>
                                        <dd className="mt-2 flex flex-wrap gap-2">
                                            {product.specs.certifications.map((c) => (
                                                <span
                                                    key={c}
                                                    className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                                                >
                                                    {c}
                                                </span>
                                            ))}
                                        </dd>
                                    </div>
                                )}
                            </dl>
                        </div>
                    </Reveal>

                    {product.packagingOptions.length > 0 && (
                        <Reveal delay={0.15}>
                            <div className="mt-10">
                                <h2 className="text-headline-sm font-semibold text-primary">{t("packagingHeading")}</h2>
                                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                    {product.packagingOptions.map((opt) => (
                                        <div key={local(opt.name, locale)} className="rounded-lg bg-muted p-4">
                                            <p className="font-semibold text-foreground">{local(opt.name, locale)}</p>
                                            {opt.description && (
                                                <p className="mt-1 text-sm text-foreground/70">{local(opt.description, locale)}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    )}

                    {product.editorial && (
                        <Reveal delay={0.2}>
                            <div className="mt-10">
                                <h2 className="text-headline-sm font-semibold text-primary">
                                    {local(product.editorial.heading, locale)}
                                </h2>
                                <div className="mt-4 space-y-4 text-foreground/80">
                                    {product.editorial.paragraphs.map((p, i) => (
                                        <p key={i}>{local(p, locale)}</p>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    )}

                    {product.qualityBadges && (
                        <Reveal delay={0.25}>
                            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                                {product.qualityBadges.map((badge) => {
                                    const Icon = iconMap[badge.icon] ?? iconMap.default;
                                    return (
                                        <div
                                            key={badge.icon}
                                            className="flex flex-col items-center gap-2 rounded-lg border border-border p-6 text-center"
                                        >
                                            <Icon className="h-8 w-8 text-accent" />
                                            <p className="text-sm font-medium text-foreground">{local(badge.label, locale)}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </Reveal>
                    )}
                </div>

                <aside className="space-y-6">
                    <div className="rounded-lg bg-primary p-6 text-primary-foreground">
                        <h3 className="text-headline-sm font-semibold">{t("sidebarHeading")}</h3>
                        <p className="mt-2 text-sm text-primary-foreground/80">{t("sidebarSubtext")}</p>
                        <div className="mt-5">
                            <CTAButton href={`/contact?product=${product.slug}`} variant="accent" className="w-full">
                                {tNav("requestQuote")}
                            </CTAButton>
                        </div>
                    </div>

                    <div className="rounded-lg border border-border p-6">
                        <p className="text-label-caps uppercase text-foreground/50">{t("exportDepartment")}</p>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <a href={`mailto:${siteConfig.email}`} className="text-foreground/80 hover:text-primary">
                                    {siteConfig.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-foreground/80 hover:text-primary">
                                    {siteConfig.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                                <span className="text-foreground/80">{local(siteConfig.hqAddress, locale)}</span>
                            </li>
                        </ul>
                    </div>
                </aside>
            </SectionContainer>
        </>
    );
}

function Spec({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <dt className="text-label-caps uppercase text-foreground/50">{label}</dt>
            <dd className="mt-1 font-medium text-foreground">{value}</dd>
        </div>
    );
}