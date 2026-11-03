// src/components/services/ServicesGrid.tsx
import { services } from "@/data/services";
import SectionContainer from "@/components/common/SectionContainer";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
    return (
        <SectionContainer>
            <div className="divide-y divide-border">
                {services.map((service, i) => (
                    <ServiceCard key={service.slug} service={service} reverse={i % 2 === 1} />
                ))}
            </div>
        </SectionContainer>
    );
}