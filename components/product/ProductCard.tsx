"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import type { LocalizedProduct } from "@/types/product";

interface ProductCardProps {
  product: LocalizedProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations("Product");
  const locale = useLocale();

  const formattedPrice = new Intl.NumberFormat(
    locale === "ar" ? "ar-SA" : "en-SA",
    { style: "decimal", minimumFractionDigits: 0 }
  ).format(product.basePrice);

  const installmentAmount = Math.ceil(product.basePrice / 4);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden rounded-sm bg-card">
        {/* Product image */}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Second image on hover */}
        {product.images.length > 1 && (
          <Image
            src={product.images[1]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}

        {/* Badges */}
        {product.badges.length > 0 && (
          <div className="absolute top-3 start-3 flex flex-col gap-1.5">
            {product.badges.map((badge) => (
              <Badge
                key={badge}
                className={`text-[10px] font-semibold uppercase tracking-wider ${
                  badge === "bestseller"
                    ? "bg-brand-gold text-brand-green-dark"
                    : badge === "new"
                    ? "bg-emerald-600 text-white"
                    : badge === "limited"
                    ? "bg-red-600 text-white"
                    : ""
                }`}
              >
                {t(badge === "bestseller" ? "bestSeller" : badge)}
              </Badge>
            ))}
          </div>
        )}

        {/* Sold out overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
            <span className="text-lg font-semibold text-foreground">
              {t("soldOut")}
            </span>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="mt-4 space-y-1.5">
        <h3 className="text-sm font-medium text-foreground group-hover:text-brand-gold transition-colors line-clamp-1">
          {product.name}
        </h3>

        <p className="text-sm font-semibold text-brand-gold">
          {formattedPrice} {t("sar")}
        </p>

        {/* BNPL hint */}
        {product.basePrice >= 30 && (
          <p className="text-[10px] text-muted-foreground">
            {t("installments", { amount: installmentAmount })}
          </p>
        )}
      </div>
    </Link>
  );
}
