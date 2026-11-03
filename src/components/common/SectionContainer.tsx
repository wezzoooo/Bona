import { cn } from "@/lib/utils";

export default function SectionContainer({
    children,
    className,
    as: Tag = "section",
}: {
    children: React.ReactNode;
    className?: string;
    as?: "section" | "div";
}) {
    return (
        <Tag
            className={cn(
                "mx-auto max-w-[var(--container-max)] px-4 py-[var(--section-padding-mobile)] md:px-6 md:py-[var(--section-padding)]",
                className
            )}
        >
            {children}
        </Tag>
    );
}