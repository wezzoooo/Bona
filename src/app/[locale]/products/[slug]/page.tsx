import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { products, getProductBySlug } from "@/data/products";
import { local } from "@/lib/utils";
import ProductDetails from "@/components/products/ProductDetails";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        products.map((p) => ({ locale, slug: p.slug }))
    );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const locale = await getLocale();
  return buildMetadata({
    title: local(product.name, locale),
    description: local(product.shortDescription, locale),
    path: `/products/${slug}`,
    locale,
  });
}

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) notFound();

    return <ProductDetails product={product} />;
}