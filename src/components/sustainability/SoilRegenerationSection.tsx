import { sustainabilityPillars } from "@/data/sustainability";
import SustainabilityPillarCard from "./SustainabilityPillarCard";

export default function SoilRegenerationSection() {
    return <SustainabilityPillarCard pillar={sustainabilityPillars[2]} delay={0.2} />;
}