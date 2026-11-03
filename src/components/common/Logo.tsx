// src/components/common/Logo.tsx
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Logo({
  variant = "full",
  theme = "color",
  className,
}: {
  /** "full" = أيقونة + اسم، "icon" = أيقونة بس */
  variant?: "full" | "icon";
  /** "color" = أخضر (للخلفيات الفاتحة)، "white" = أبيض (للخلفيات الغامقة) */
  theme?: "color" | "white";
  className?: string;
}) {
  const src =
    variant === "icon"
      ? theme === "white"
        ? "/logo/bona-icon-white.svg"
        : "/logo/bona-icon.svg"
      : theme === "white"
      ? "/logo/bona-logo-white.svg"
      : "/logo/bona-logo.svg";

  const defaultSize = variant === "icon" ? "h-9 w-9" : "h-10 w-auto";

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={siteConfig.name} className={cn(defaultSize, className)} />;
}