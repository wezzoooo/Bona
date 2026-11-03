import { sustainabilityPillars } from "@/data/sustainability";
import SustainabilityPillarCard from "./SustainabilityPillarCard";

export default function WaterManagementSection() {
    return <SustainabilityPillarCard pillar={sustainabilityPillars[0]} delay={0} />;
}