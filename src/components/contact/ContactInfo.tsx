import { Mail, Phone, MessageCircle } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { local } from "@/lib/utils";
import { offices } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { iconMap } from "@/lib/icon-map";
import Reveal from "@/components/common/Reveal";

export default async function ContactInfo() {
    const locale = await getLocale();
    const t = await getTranslations("ContactPage");

    return (
        <div className="space-y-6">
            <h2 className="text-headline-sm font-semibold text-primary">{t("ourOffices")}</h2>

            {offices.map((office, i) => {
                const Icon = iconMap[office.icon] ?? iconMap.default;
                return (
                    <Reveal key={office.key} delay={i * 0.1}>
                        <div className="rounded-lg border border-border p-5">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                                    <Icon className="h-5 w-5 text-primary" />
                                </div>
                                <p className="font-semibold text-primary">{local(office.name, locale)}</p>
                            </div>
                            <p className="mt-3 text-sm text-foreground/70">{local(office.address, locale)}</p>
                            <div className="mt-3 space-y-1 text-sm">
                                <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-foreground/80 hover:text-primary">
                                    <Phone className="h-4 w-4" /> {office.phone}
                                </a>
                                <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-foreground/80 hover:text-primary">
                                    <Mail className="h-4 w-4" /> {office.email}
                                </a>
                            </div>
                        </div>
                    </Reveal>
                );
            })}

        </div >
    );
}