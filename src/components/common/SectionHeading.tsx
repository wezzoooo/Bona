import { cn } from "@/lib/utils";

export default function SectionHeading({
    title,
    subtitle,
    align = "left",
    className,
}: {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
}) {
    return (
        <div className={cn(align === "center" && "text-center", className)}>
            <h2 className="text-headline-md font-bold text-primary">{title}</h2>
            {subtitle && (
                <p className="mt-3 max-w-2xl text-body-lg text-foreground/70">
                    {subtitle}
                </p>
            )}
        </div>
    );
}