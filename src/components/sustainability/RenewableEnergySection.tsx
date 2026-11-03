import { sustainabilityPillars } from "@/data/sustainability";
import SustainabilityPillarCard from "./SustainabilityPillarCard";

export default function RenewableEnergySection() {
    return <SustainabilityPillarCard pillar={sustainabilityPillars[1]} delay={0.1} />;
}