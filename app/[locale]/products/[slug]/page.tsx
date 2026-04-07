import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getProduct, getAllProductSlugs, getLocalizedProduct, getProductsByCategory } from "@/data/products";
import { ProductDetail } from "@/components/product/ProductDetail";
import { ProductGrid } from "@/components/product/ProductGrid";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllProductSlugs().flatMap((slug) => [
    { locale: "ar", slug },
    { locale: "en", slug },
  ]);
}

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const product = getProduct(slug);
  if (!product) notFound();

  const localized = getLocalizedProduct(product, locale as "ar" | "en");

  // Related products from same category
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)
    .map((p) => getLocalizedProduct(p, locale as "ar" | "en"));

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <ProductDetail product={localized} locale={locale as "ar" | "en"} />

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-20 md:mt-28">
          <h2 className="text-2xl font-heading text-brand-gold mb-8">
            {locale === "ar" ? "قد يعجبك أيضاً" : "You May Also Like"}
          </h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
