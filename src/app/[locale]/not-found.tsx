import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import CTAButton from "@/components/common/CTAButton";

export default async function NotFound() {
    const t = await getTranslations("NotFound");

    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
            <p className="text-display-lg font-bold text-accent">404</p>
            <h1 className="mt-4 text-headline-md font-bold text-primary">{t("title")}</h1>
            <p className="mt-3 max-w-md text-foreground/70">{t("description")}</p>
            <div className="mt-8">
                <CTAButton href="/" variant="primary">
                    {t("backHome")}
                </CTAButton>
            </div>
        </div>
    );
}

