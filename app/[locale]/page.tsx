import { useTranslations } from "next-intl";
import { setRequestLocale, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { categories, products, getLocalizedProduct } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Newsletter } from "@/components/home/Newsletter";
import { AnimatedHero } from "@/components/home/AnimatedHero";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const loc = locale as "ar" | "en";

  const bestSellers = products
    .filter((p) => p.badges.includes("bestseller"))
    .map((p) => getLocalizedProduct(p, loc));

  const newArrivals = products
    .filter((p) => p.badges.includes("new"))
    .map((p) => getLocalizedProduct(p, loc));

  return (
    <>
      <AnimatedHero />
      <CategoriesSection locale={loc} />
      <BestSellersSection products={bestSellers} />
      <BrandStorySection />
      <NewArrivalsSection products={newArrivals} />
      <Newsletter />
    </>
  );
}

function HeroSection() {
  const t = useTranslations("Home");
  const pt = useTranslations("Product");

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background: actual product image */}
      <Image
        src="/images/hero/hero-main.png"
        alt="AJoud Collection"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/logo-light.png"
            alt="AJoud"
            className="mx-auto h-20 md:h-28 w-auto"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-brand-beige mb-6 leading-tight animate-fade-in-up">
          {t("heroTitle")}
        </h1>

        <p className="text-lg md:text-xl text-brand-gold-light mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
          {t("heroSubtitle")}
        </p>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark px-8 py-4 text-lg font-semibold rounded-sm hover:bg-brand-gold-light transition-colors duration-300"
        >
          {t("heroButton")}
        </Link>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-brand-beige/70">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            {pt("authentic")}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            {pt("freeShipping")}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            {pt("delivery")}
          </span>
        </div>
      </div>
    </section>
  );
}

function CategoriesSection({ locale }: { locale: "ar" | "en" }) {
  const t = useTranslations("Home");

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-20">
      <h2 className="text-3xl font-heading text-brand-gold text-center mb-12 animate-fade-in-up">
        {t("featuredTitle")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <Link
            key={cat.id}
            href={`/products?category=${cat.id}` as any}
            className={`group relative aspect-[4/3] overflow-hidden rounded-sm animate-fade-in-up delay-${(index + 1) * 100}`}
          >
            <Image
              src={cat.image}
              alt={cat.name[locale]}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6">
              <h3 className="text-xl font-heading text-white mb-1">
                {cat.name[locale]}
              </h3>
              <p className="text-sm text-white/70">
                {cat.description[locale]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function BestSellersSection({
  products,
}: {
  products: ReturnType<typeof getLocalizedProduct>[];
}) {
  const t = useTranslations("Home");

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-heading text-brand-gold animate-fade-in-up">
          {t("bestSellersTitle")}
        </h2>
        <Link
          href="/products"
          className="text-sm text-muted-foreground hover:text-brand-gold transition-colors"
        >
          {useTranslations("Common")("viewAll")} →
        </Link>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}

function BrandStorySection() {
  const t = useTranslations("Home");

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark to-brand-green" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/brand/logo-light.png"
          alt="AJoud"
          className="mx-auto h-14 w-auto animate-fade-in"
        />
        <h2 className="text-3xl md:text-4xl font-heading text-brand-beige mt-6 mb-6 animate-fade-in-up">
          {t("brandStoryTitle")}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {t("brandStoryText")}
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 border border-brand-gold text-brand-gold px-6 py-3 rounded-sm font-medium hover:bg-brand-gold hover:text-brand-green-dark transition-colors duration-300"
        >
          {t("brandStoryButton")}
        </Link>
      </div>
    </section>
  );
}

function NewArrivalsSection({
  products,
}: {
  products: ReturnType<typeof getLocalizedProduct>[];
}) {
  const t = useTranslations("Home");

  if (products.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-heading text-brand-gold animate-fade-in-up">
          {t("newArrivalsTitle")}
        </h2>
        <Link
          href="/products"
          className="text-sm text-muted-foreground hover:text-brand-gold transition-colors"
        >
          {useTranslations("Common")("viewAll")} →
        </Link>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}

