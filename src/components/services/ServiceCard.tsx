// src/components/services/ServiceCard.tsx
import Image from "next/image";
import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { iconMap } from "@/lib/icon-map";
import type { Service } from "@/types";
import Reveal from "@/components/common/Reveal";

export default async function ServiceCard({
    service,
    reverse = false,
}: {
    service: Service;
    reverse?: boolean;
}) {
    const locale = await getLocale();
    const Icon = iconMap[service.icon] ?? iconMap.default;

    return (
        <div
            className={`grid items-center gap-8 py-10 md:grid-cols-2 md:gap-12 md:py-14 ${reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
        >
            <Reveal>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-headline-sm font-semibold text-primary">
                    {local(service.name, locale)}
                </h3>
                <p className="mt-3 max-w-md text-foreground/70">
                    {local(service.description, locale)}
                </p>
            </Reveal>

            <Reveal delay={0.1}>
                <div className="relative h-56 w-full overflow-hidden rounded-lg md:h-72">
                    <Image src={service.image} alt={local(service.name, locale)} fill className="object-cover" />
                </div>
            </Reveal>
        </div>
    );
}