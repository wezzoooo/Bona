import Image from "next/image";
import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { iconMap } from "@/lib/icon-map";
import type { SustainabilityPillar } from "@/types";
import Reveal from "@/components/common/Reveal";

export default async function SustainabilityPillarCard({
    pillar,
    delay = 0,
}: {
    pillar: SustainabilityPillar;
    delay?: number;
}) {
    const locale = await getLocale();
    const Icon = iconMap[pillar.icon] ?? iconMap.default;

    return (
        <Reveal delay={delay}>
            <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border">
                <div className="p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary/10">
                        <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="mt-3 text-headline-sm font-semibold text-primary">
                        {local(pillar.title, locale)}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/70">
                        {local(pillar.description, locale)}
                    </p>
                </div>
                <div className="relative mt-auto h-40 w-full">
                    <Image src={pillar.image} alt="" fill className="object-cover" />
                </div>
            </div>
        </Reveal>
    );
}