import Image from "next/image";
import Reveal from "./Reveal";

export default function PageHero({
    eyebrow,
    title,
    subtitle,
    image,
}: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    image?: string;
}) {
    return (
        <section className="bg-background py-16 md:py-24">
            <div
                className={
                    image
                        ? "mx-auto grid max-w-[var(--container-max)] gap-10 px-4 md:grid-cols-2 md:items-center md:px-6"
                        : "mx-auto max-w-[var(--container-max)] px-4 md:px-6"
                }
            >
                <Reveal>
                    {eyebrow && <p className="text-label-caps uppercase text-accent">{eyebrow}</p>}
                    <h1 className={`mt-2 font-bold text-primary text-headline-md md:text-display-lg ${image ? "" : "max-w-3xl"}`}>
                        {title}
                    </h1>
                    {subtitle && (
                        <p className={`mt-4 text-body-lg text-foreground/70 ${image ? "max-w-md" : "max-w-2xl"}`}>
                            {subtitle}
                        </p>
                    )}
                </Reveal>

                {image && (
                    <Reveal delay={0.1}>
                        <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-96">
                            <Image src={image} alt="" fill className="object-cover" />
                        </div>
                    </Reveal>
                )}
            </div>
        </section>
    );
}