"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Minus, Plus, X } from "lucide-react";
import { useCartStore } from "@/store/cart";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

interface CartDrawerProps {
  children: React.ReactNode;
}

export function CartDrawer({ children }: CartDrawerProps) {
  const t = useTranslations("Cart");
  const locale = useLocale();
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-SA", {
      style: "decimal",
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent
        side={locale === "ar" ? "left" : "right"}
        className="w-full sm:w-96 bg-background border-border flex flex-col"
      >
        <SheetHeader>
          <SheetTitle className="text-xl font-heading text-brand-gold">
            {t("title")}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <p className="text-muted-foreground">{t("empty")}</p>
            <Link
              href="/products"
              className="text-sm text-brand-gold hover:underline"
            >
              {t("continueShopping")}
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.sizeId}`}
                  className="flex gap-3"
                >
                  <div className="relative w-16 h-16 rounded-sm overflow-hidden shrink-0 bg-card">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {item.name}
                    </p>
                    <p className="text-sm text-brand-gold mt-0.5">
                      {formatPrice(item.price)}{" "}
                      {locale === "ar" ? "ر.س" : "SAR"}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.sizeId,
                            item.quantity - 1
                          )
                        }
                        className="w-6 h-6 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-foreground"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm min-w-[1.5rem] text-center">
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
                        className="w-6 h-6 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-foreground"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.productId, item.sizeId)}
                    className="text-muted-foreground hover:text-destructive transition-colors p-1 self-start"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("subtotal")}</span>
                <span className="font-semibold text-foreground">
                  {formatPrice(totalPrice())}{" "}
                  {locale === "ar" ? "ر.س" : "SAR"}
                </span>
              </div>

              <Link
                href="/checkout"
                className="block w-full text-center bg-brand-gold text-brand-green-dark py-3 rounded-sm font-semibold hover:bg-brand-gold-light transition-colors"
              >
                {t("checkout")}
              </Link>

              <Link
                href="/products"
                className="block text-center text-sm text-muted-foreground hover:text-brand-gold transition-colors"
              >
                {t("continueShopping")}
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
