"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ShoppingBag, Truck, Shield, Gift } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MadaIcon,
  VisaIcon,
  MastercardIcon,
  ApplePayIcon,
  TabbyIcon,
  TamaraIcon,
} from "@/components/icons/PaymentIcons";
import { toast } from "sonner";
import { assetPath } from "@/lib/basePath";
import type { LocalizedProduct } from "@/types/product";

interface ProductDetailProps {
  product: LocalizedProduct;
  locale: "ar" | "en";
}

export function ProductDetail({ product, locale }: ProductDetailProps) {
  const t = useTranslations("Product");
  const ct = useTranslations("Cart");
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const addToCartRef = useRef<HTMLButtonElement>(null);
  const addItem = useCartStore((s) => s.addItem);

  // Show sticky bar when main add-to-cart button scrolls out of view (mobile only)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyBar(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const currentRef = addToCartRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const currentSize = product.sizes[selectedSize];

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-SA", {
      style: "decimal",
      minimumFractionDigits: 0,
    }).format(amount);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        productId: product.id,
        sizeId: currentSize.id,
        name: `${product.name} - ${currentSize.label}`,
        price: currentSize.price,
        image: product.images[0],
      });
    }
    toast.success(ct("itemAdded"), {
      description: `${product.name} - ${currentSize.label}`,
    });
  };

  const installmentAmount = Math.ceil(currentSize.price / 4);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      {/* Image Gallery — shows first on mobile (natural DOM order = single column) */}
      <div className="space-y-4">
        <div className="relative aspect-square overflow-hidden rounded-sm bg-card">
          <Image
            src={assetPath(product.images[selectedImage])}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Badges */}
          {product.badges.length > 0 && (
            <div className="absolute top-4 start-4 flex flex-col gap-2">
              {product.badges.map((badge) => (
                <Badge
                  key={badge}
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    badge === "bestseller"
                      ? "bg-brand-gold text-brand-green-dark"
                      : badge === "new"
                      ? "bg-emerald-600 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {t(badge === "bestseller" ? "bestSeller" : badge)}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {product.images.length > 1 && (
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`relative w-20 h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                  i === selectedImage
                    ? "border-brand-gold"
                    : "border-border hover:border-brand-gold/50"
                }`}
              >
                <Image
                  src={assetPath(img)}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-3">
            {product.name}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price */}
        <div className="space-y-2">
          <p className="text-3xl font-bold text-brand-gold">
            {formatPrice(currentSize.price)} {t("sar")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("installments", { amount: installmentAmount })}
          </p>
        </div>

        <Separator className="bg-border" />

        {/* Size Selector */}
        {product.sizes.length > 1 && (
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              {t("size")}
            </label>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size, i) => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(i)}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-sm border text-xs sm:text-sm transition-all ${
                    i === selectedSize
                      ? "bg-brand-gold text-brand-green-dark border-brand-gold font-semibold"
                      : "bg-transparent text-foreground border-border hover:border-brand-gold/50"
                  }`}
                >
                  {size.label} — {formatPrice(size.price)} {t("sar")}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity + Add to Cart */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-border rounded-sm">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              −
            </button>
            <span className="px-4 py-2.5 text-sm font-medium min-w-[3rem] text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              +
            </button>
          </div>

          <button
            ref={addToCartRef}
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex-1 flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark py-3 px-6 rounded-sm font-semibold hover:bg-brand-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingBag className="h-5 w-5" />
            {product.inStock ? t("addToCart") : t("outOfStock")}
          </button>
        </div>

        <Separator className="bg-border" />

        {/* Trust Signals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <Truck className="h-4 w-4 text-brand-gold shrink-0" />
            {t("delivery")}
          </div>
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-brand-gold shrink-0" />
            {t("authentic")}
          </div>
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <Gift className="h-4 w-4 text-brand-gold shrink-0" />
            {t("giftWrap")}
          </div>
        </div>

        {/* Payment method icons */}
        <div className="flex flex-wrap items-center gap-2">
          <MadaIcon className="h-7 w-auto rounded-sm border border-border/50" />
          <VisaIcon className="h-7 w-auto rounded-sm border border-border/50" />
          <MastercardIcon className="h-7 w-auto rounded-sm border border-border/50" />
          <ApplePayIcon className="h-7 w-auto rounded-sm border border-border/50" />
          <TabbyIcon className="h-7 w-auto rounded-sm border border-border/50" />
          <TamaraIcon className="h-7 w-auto rounded-sm border border-border/50" />
        </div>

        <Separator className="bg-border" />

        {/* Fragrance Notes */}
        <div className="space-y-4">
          <h3 className="text-lg font-heading text-foreground">
            {t("fragranceNotes")}
          </h3>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {(["top", "heart", "base"] as const).map((tier) => (
              <div key={tier} className="text-center space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                  {t(`${tier}Notes`)}
                </p>
                <div className="space-y-1">
                  {product.fragranceNotes[tier].map((note) => (
                    <p key={note} className="text-sm text-muted-foreground">
                      {note}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Story */}
        <div className="space-y-3 pt-2">
          <h3 className="text-lg font-heading text-foreground">
            {t("theStory")}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {product.story}
          </p>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div
        className={`fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 transition-transform duration-300 lg:hidden ${
          showStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between gap-4 max-w-lg mx-auto">
          <div className="shrink-0">
            <p className="text-lg font-bold text-brand-gold">
              {formatPrice(currentSize.price)} {t("sar")}
            </p>
            <p className="text-xs text-muted-foreground">
              {currentSize.label}
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex-1 flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark py-3 px-5 rounded-sm font-semibold hover:bg-brand-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingBag className="h-4 w-4" />
            {product.inStock ? t("addToCart") : t("outOfStock")}
          </button>
        </div>
      </div>
    </div>
  );
}
