"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cart";
import { toast } from "sonner";
import { assetPath } from "@/lib/basePath";
import type { LocalizedProduct } from "@/types/product";

interface ProductCardProps {
  product: LocalizedProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations("Product");
  const ct = useTranslations("Cart");
  const locale = useLocale();
  const addItem = useCartStore((s) => s.addItem);

  const formattedPrice = new Intl.NumberFormat(
    locale === "ar" ? "ar-SA" : "en-SA",
    { style: "decimal", minimumFractionDigits: 0 }
  ).format(product.basePrice);

  const installmentAmount = Math.ceil(product.basePrice / 4);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    addItem({
      productId: product.id,
      sizeId: product.sizes[0].id,
      name: `${product.name} - ${product.sizes[0].label}`,
      price: product.sizes[0].price,
      image: product.images[0],
    });
    toast.success(ct("itemAdded"), { description: product.name });
  };

  return (
    <div className="group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(188,156,96,0.15)]">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-sm bg-card">
          {/* Product image */}
          <Image
            src={assetPath(product.images[0])}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Second image on hover — like Oud Al Hashmi */}
          {product.images.length > 1 && (
            <Image
              src={assetPath(product.images[1])}
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

          {/* Gold gradient line at bottom on hover */}
          <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

          {/* Quick add button — appears on hover like Oud Al Hashmi */}
          {product.inStock && (
            <button
              onClick={handleAddToCart}
              className="absolute bottom-0 inset-x-0 bg-brand-gold/95 text-brand-green-dark py-2.5 text-sm font-semibold flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
              <ShoppingBag className="h-4 w-4" />
              {t("addToCart")}
            </button>
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
      </Link>

      {/* Product info */}
      <div className="mt-4 space-y-1.5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-sm font-medium text-foreground group-hover:text-brand-gold transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm font-semibold text-brand-gold">
          {formattedPrice} {t("sar")}
        </p>

        {/* BNPL hint — like Blue Oud's installment display */}
        {product.basePrice >= 30 && (
          <p className="text-[10px] text-muted-foreground">
            {t("installments", { amount: installmentAmount })}
          </p>
        )}
      </div>
    </div>
  );
}
