"use client";

import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import { useLocale } from "next-intl";
import { local } from "@/lib/utils";
import { marketsStat, marketRegions, egyptCoordinates } from "@/data/markets";
import Reveal from "@/components/common/Reveal";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function MarketsMap() {
    const locale = useLocale();

    return (
        <Reveal>
            <div className="relative overflow-hidden rounded-xl border border-border bg-muted">
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{ center: [25, 15], scale: 130 }}
                    className="h-72 w-full md:h-full"
                >
                    <Geographies geography={GEO_URL}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="var(--color-bone-white)"
                                    stroke="var(--color-border)"
                                    strokeWidth={0.5}
                                    className="outline-none transition-colors hover:fill-secondary/30"
                                />
                            ))
                        }
                    </Geographies>

                    {marketRegions.map((region) => (
                        <Line
                            key={`line-${region.key}`}
                            from={egyptCoordinates}
                            to={region.coordinates}
                            stroke="var(--color-fresh-leaf)"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeDasharray="4 3"
                        />
                    ))}

                    <Marker coordinates={egyptCoordinates}>
                        <circle r={6} fill="var(--color-harvest-gold)" stroke="#fff" strokeWidth={1.5} />
                    </Marker>

                    {marketRegions.map((region) => (
                        <Marker key={region.key} coordinates={region.coordinates}>
                            <circle r={4} fill="var(--color-deep-forest)" stroke="#fff" strokeWidth={1} />
                            <text
                                textAnchor="middle"
                                y={-10}
                                style={{ fontSize: 9, fontWeight: 600, fill: "var(--color-charcoal-text)" }}
                            >
                                {local(region.name, locale)}
                            </text>
                        </Marker>
                    ))}
                </ComposableMap>

                <div className="absolute bottom-4 left-4 rounded-lg bg-background p-4 shadow-lg rtl:left-auto rtl:right-4">
                    <p className="text-headline-sm font-bold text-primary">{marketsStat.value}</p>
                    <p className="text-xs uppercase text-foreground/60">
                        {local(marketsStat.label, locale)}
                    </p>
                </div>
            </div>
        </Reveal>
    );
}