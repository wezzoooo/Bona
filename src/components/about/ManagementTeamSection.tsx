// src/components/about/ManagementTeamSection.tsx
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { getLocale } from "next-intl/server";
import { local } from "@/lib/utils";
import { managementTeamHeading, managementTeam } from "@/data/about";
import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

export default async function ManagementTeamSection() {
    const locale = await getLocale();

    return (
        <section className="bg-muted">
            <SectionContainer>
                <SectionHeading
                    title={local(managementTeamHeading.heading, locale)}
                    subtitle={local(managementTeamHeading.subtext, locale)}
                    align="center"
                />

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {managementTeam.map((member, i) => (
                        <Reveal key={member.name} delay={i * 0.1}>
                            <div className="rounded-lg bg-background p-6 text-center">
                                <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p className="mt-4 font-semibold text-primary">{member.name}</p>
                                <p className="text-sm text-accent">{local(member.role, locale)}</p>
                                <p className="mt-3 text-sm text-foreground/70">{local(member.bio, locale)}</p>

                                <div className="mt-4 flex justify-center gap-4 border-t border-border pt-4">

                                    <a
                                        href={`mailto:${member.email}`}
                                        aria-label={`Email ${member.name}`}
                                        className="text-foreground/50 hover:text-primary"
                                    >
                                        <Mail className="h-4 w-4" />
                                    </a>

                                    <a href={`tel:${member.phone.replace(/\s/g, "")}`}
                                    aria-label={`Call ${member.name}`}
                                    className="text-foreground/50 hover:text-primary"
                                    >
                                        <Phone className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </SectionContainer>
        </section>
    );
}