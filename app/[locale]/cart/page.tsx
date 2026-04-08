"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { Separator } from "@/components/ui/separator";
import { assetPath } from "@/lib/basePath";

export default function CartPage() {
  const t = useTranslations("Cart");
  const pt = useTranslations("Product");
  const locale = useLocale();
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-SA", {
      style: "decimal",
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <h1 className="text-3xl font-heading text-brand-gold mb-8">
        {t("title")}
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-20 space-y-4">
          <p className="text-lg text-muted-foreground">{t("empty")}</p>
          <Link
            href="/products"
            className="inline-block bg-brand-gold text-brand-green-dark px-6 py-3 rounded-sm font-semibold hover:bg-brand-gold-light transition-colors"
          >
            {t("continueShopping")}
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.productId}-${item.sizeId}`}
                className="flex gap-4 p-4 bg-card rounded-sm border border-border"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-sm overflow-hidden shrink-0">
                  <Image
                    src={assetPath(item.image)}
                    alt={item.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{item.name}</h3>
                  <p className="text-brand-gold mt-1">
                    {formatPrice(item.price)} {pt("sar")}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.sizeId,
                            item.quantity - 1
                          )
                        }
                        className="w-8 h-8 flex items-center justify-center border border-border rounded-sm hover:bg-muted"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.sizeId,
                            item.quantity + 1
                          )
                        }
                        className="w-8 h-8 flex items-center justify-center border border-border rounded-sm hover:bg-muted"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.productId, item.sizeId)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-card border border-border rounded-sm p-6 h-fit sticky top-24">
            <h2 className="text-lg font-heading text-foreground mb-4">
              {t("subtotal")}
            </h2>
            <Separator className="mb-4" />
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t("subtotal")}</span>
                <span className="font-medium">
                  {formatPrice(totalPrice())} {pt("sar")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t("shipping")}</span>
                <span className="text-brand-gold">{t("freeShipping")}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-base font-semibold">
                <span>{t("total")}</span>
                <span className="text-brand-gold">
                  {formatPrice(totalPrice())} {pt("sar")}
                </span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="block w-full text-center bg-brand-gold text-brand-green-dark py-3 mt-6 rounded-sm font-semibold hover:bg-brand-gold-light transition-colors"
            >
              {t("checkout")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
