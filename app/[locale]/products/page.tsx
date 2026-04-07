"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { products, categories, getLocalizedProduct, getProductsByCategory } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CategoryFilter } from "@/components/product/CategoryFilter";

export default function ProductsPage() {
  const t = useTranslations("Nav");
  const pt = useTranslations("Home");
  const locale = useLocale() as "ar" | "en";
  const [activeCategory, setActiveCategory] = useState("all");

  const filterCategories = [
    { id: "all", label: locale === "ar" ? "الكل" : "All" },
    ...categories.map((c) => ({ id: c.id, label: c.name[locale] })),
    { id: "best-sellers", label: t("bestSellers") },
    { id: "new-arrivals", label: t("newArrivals") },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : getProductsByCategory(activeCategory);

  const localizedProducts = filteredProducts.map((p) =>
    getLocalizedProduct(p, locale)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-heading text-brand-gold mb-4">
          {t("products")}
        </h1>
        <div className="h-px bg-gradient-to-r from-brand-gold/60 via-brand-gold/20 to-transparent max-w-xs" />
      </div>

      {/* Category Filter */}
      <div className="mb-10">
        <CategoryFilter
          categories={filterCategories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      {/* Product Grid */}
      <ProductGrid products={localizedProducts} />

      {/* Results count */}
      <div className="mt-8 text-sm text-muted-foreground text-center">
        {localizedProducts.length}{" "}
        {locale === "ar" ? "منتج" : "products"}
      </div>
    </div>
  );
}
