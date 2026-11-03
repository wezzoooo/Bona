import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { sustainabilityIntro } from "@/data/sustainability";
import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

export default async function SustainabilityIntro() {
    const locale = await getLocale();
    return (
        <SectionContainer className="!pb-0">
            <Reveal>
                <SectionHeading
                    title={local(sustainabilityIntro.heading, locale)}
                    subtitle={local(sustainabilityIntro.subtext, locale)}
                />
            </Reveal>
        </SectionContainer>
    );
}