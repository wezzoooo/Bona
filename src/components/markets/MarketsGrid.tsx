// src/components/markets/MarketsGrid.tsx
import { marketRegions } from "@/data/markets";
import SectionContainer from "@/components/common/SectionContainer";
import MarketsMap from "./MarketsMap";
import MarketCard from "./MarketCard";

export default function MarketsGrid() {
    return (
        <SectionContainer className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <MarketsMap />
            <div className="space-y-4">
                {marketRegions.map((region, i) => (
                    <MarketCard key={region.key} region={region} delay={i * 0.1} />
                ))}
            </div>
        </SectionContainer>
    );
}