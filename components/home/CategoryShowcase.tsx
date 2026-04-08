"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { assetPath } from "@/lib/basePath";
import { categories } from "@/data/products";

const categoryImages: Record<string, string> = {
  musk: "/images/products/musk-collection.jpg",
  oud: "/images/products/oud-golden-tray.png",
  bakhoor: "/images/products/bakhoor-scene.jpg",
  oils: "/images/products/oud-decanter-2.png",
  home: "/images/products/bakhoor-smoke.png",
  "gift-sets": "/images/products/blue-musk-box.png",
};

function CategoryCard({
  category,
  index,
  locale,
}: {
  category: (typeof categories)[number];
  index: number;
  locale: "ar" | "en";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("Home");

  const imageSrc = categoryImages[category.id] || category.image;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative overflow-hidden rounded-sm aspect-[3/4] md:aspect-[4/3]"
    >
      <Link
        href={`/products?category=${category.id}` as any}
        className="block relative w-full h-full"
      >
        {/* Background image */}
        <Image
          src={assetPath(imageSrc)}
          alt={category.name[locale]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500" />

        {/* Gold border on hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-gold/40 transition-colors duration-500 rounded-sm" />

        {/* Content pinned to bottom */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-heading text-brand-beige mb-2">
              {category.name[locale]}
            </h3>
            <p className="text-sm md:text-base text-brand-beige/70 mb-4 max-w-md">
              {category.description[locale]}
            </p>
            <span className="inline-flex items-center gap-2 text-brand-gold text-sm font-medium group-hover:gap-3 transition-all duration-300">
              {t("heroButton")}
              <svg
                className="w-4 h-4 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

export function CategoryShowcase() {
  const t = useTranslations("Home");
  const locale = useLocale() as "ar" | "en";
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-4 md:px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-heading text-brand-gold mb-3">
          {t("featuredTitle")}
        </h2>
        <div className="w-20 h-px bg-brand-gold/40 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat, index) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            index={index}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
