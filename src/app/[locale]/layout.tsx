import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { manrope, cairo } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import { siteConfig } from "@/data/site";
import { organizationSchema } from "@/lib/schema";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Bona | Premium Egyptian Agricultural Export",
    template: "%s | Bona",
  },
  description:
    "Bona bridges Egyptian agricultural heritage with international corporate standards for premium global trade.",
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${manrope.variable} ${cairo.variable}`}>
      <body>
        <NextIntlClientProvider>
          <Navbar />
          <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema(locale)) }}
          />
          <main>
            {children}
          </main>
          <Footer />
          <WhatsAppFloatingButton />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}