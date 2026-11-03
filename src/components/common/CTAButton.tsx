// src/components/common/CTAButton.tsx
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "ghost";
type Size = "sm" | "md";

interface CTAButtonProps {
    href?: string;
    onClick?: (e: React.MouseEvent) => void | Promise<void>;
    variant?: Variant;
    size?: Size;
    className?: string;
    children: React.ReactNode;
    type?: "button" | "submit";
}

const variantClasses: Record<Variant, string> = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
    ghost: "border border-primary text-primary hover:bg-primary/5",
};

const sizeClasses: Record<Size, string> = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
};

export default function CTAButton({
    href,
    onClick,
    variant = "primary",
    size = "md",
    className,
    children,
    type = "button",
}: CTAButtonProps) {
    const classes = cn(
        "inline-flex items-center justify-center rounded font-semibold tracking-wide transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
    );

    if (href) {
        const isInternalLink = href.startsWith("/") && !href.startsWith("//");

        if (!isInternalLink) {
            // #hash, mailto:, tel:, http(s):// خارجي
            return (
                <a href={href} onClick={onClick} className={classes}>
                    {children}
                </a>
            );
        }

        return (
            <Link href={href} onClick={onClick} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {children}
        </button>
    );
}