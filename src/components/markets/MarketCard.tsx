import { getLocale, getTranslations } from "next-intl/server";
import { local } from "@/lib/utils";
import { iconMap } from "@/lib/icon-map";
import type { MarketRegion } from "@/types";
import Reveal from "@/components/common/Reveal";

export default async function MarketCard({
    region,
    delay = 0,
}: {
    region: MarketRegion;
    delay?: number;
}) {
    const locale = await getLocale();
    const t = await getTranslations("MarketsPage");
    const Icon = iconMap[region.icon] ?? iconMap.default;

    return (
        <Reveal delay={delay}>
            <div className="flex h-full flex-col rounded-lg border border-border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-headline-sm font-semibold text-primary">
                    {local(region.name, locale)}
                </h3>
                <p className="mt-2 text-sm text-foreground/70">
                    {local(region.description, locale)}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm">
                    <div>
                        <p className="text-xs text-foreground/50">{t("volume")}</p>
                        <p className="font-semibold text-foreground">{region.volume}</p>
                    </div>
                    <div>
                        <p className="text-xs text-foreground/50">{t("keyCrops")}</p>
                        <p className="font-semibold text-foreground">{local(region.keyCrops, locale)}</p>
                    </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                    {region.countries.map((country) => (
                        <span
                            key={country}
                            className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/70"
                        >
                            {country}
                        </span>
                    ))}
                </div>
            </div>
        </Reveal>
    );
}