"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useCartStore } from "@/store/cart";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const t = useTranslations("Checkout");
  const ct = useTranslations("Cart");
  const pt = useTranslations("Product");
  const locale = useLocale();
  const { items, totalPrice, clearCart } = useCartStore();
  const [step, setStep] = useState<"info" | "confirmed">("info");
  const [selectedPayment, setSelectedPayment] = useState("mada");
  const [selectedShipping, setSelectedShipping] = useState("aramex");

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-SA", {
      style: "decimal",
      minimumFractionDigits: 0,
    }).format(amount);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setStep("confirmed");
  };

  if (step === "confirmed") {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center space-y-6">
        <CheckCircle2 className="h-16 w-16 text-brand-gold mx-auto" />
        <h1 className="text-3xl font-heading text-brand-gold">
          {t("orderConfirmed")}
        </h1>
        <p className="text-muted-foreground">
          {t("orderNumber")}: <span className="font-mono text-foreground">AJ-{Date.now().toString(36).toUpperCase()}</span>
        </p>
        <p className="text-muted-foreground">{t("thankYou")}</p>
        <p className="text-sm text-muted-foreground">{t("estimatedDelivery")}</p>
        <Link
          href="/products"
          className="inline-block bg-brand-gold text-brand-green-dark px-8 py-3 rounded-sm font-semibold hover:bg-brand-gold-light transition-colors"
        >
          {t("continueShoppingBtn")}
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center space-y-4">
        <p className="text-lg text-muted-foreground">{ct("empty")}</p>
        <Link
          href="/products"
          className="inline-block bg-brand-gold text-brand-green-dark px-6 py-3 rounded-sm font-semibold hover:bg-brand-gold-light transition-colors"
        >
          {ct("continueShopping")}
        </Link>
      </div>
    );
  }

  const paymentMethods = [
    { id: "mada", label: "Mada" },
    { id: "visa", label: "Visa" },
    { id: "mastercard", label: "Mastercard" },
    { id: "apple-pay", label: "Apple Pay" },
    { id: "google-pay", label: "Google Pay" },
    { id: "tabby", label: "Tabby" },
    { id: "tamara", label: "Tamara" },
  ];

  const shippingMethods = [
    { id: "aramex", label: "Aramex", days: "2-3", price: 0 },
    { id: "smsa", label: "SMSA Express", days: "1-2", price: 25 },
  ];

  const shippingCost =
    shippingMethods.find((s) => s.id === selectedShipping)?.price ?? 0;

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-heading text-brand-gold mb-8">
        {t("title")}
      </h1>

      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Customer Info */}
            <section className="space-y-4">
              <h2 className="text-lg font-heading text-foreground">
                {t("customerInfo")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    {t("fullName")}
                  </label>
                  <Input required className="bg-card" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    {t("email")}
                  </label>
                  <Input type="email" required className="bg-card" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    {t("phone")}
                  </label>
                  <Input
                    type="tel"
                    placeholder="+966"
                    required
                    className="bg-card"
                    dir="ltr"
                  />
                </div>
              </div>
            </section>

            <Separator />

            {/* Shipping Address */}
            <section className="space-y-4">
              <h2 className="text-lg font-heading text-foreground">
                {t("shippingAddress")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    {t("city")}
                  </label>
                  <Input required className="bg-card" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    {t("district")}
                  </label>
                  <Input required className="bg-card" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    {t("street")}
                  </label>
                  <Input required className="bg-card" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    {t("postalCode")}
                  </label>
                  <Input className="bg-card" dir="ltr" />
                </div>
              </div>
            </section>

            <Separator />

            {/* Shipping Method */}
            <section className="space-y-4">
              <h2 className="text-lg font-heading text-foreground">
                {t("shippingMethod")}
              </h2>
              <div className="space-y-3">
                {shippingMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center justify-between p-4 border rounded-sm cursor-pointer transition-colors ${
                      selectedShipping === method.id
                        ? "border-brand-gold bg-brand-gold/5"
                        : "border-border hover:border-brand-gold/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        value={method.id}
                        checked={selectedShipping === method.id}
                        onChange={() => setSelectedShipping(method.id)}
                        className="accent-[var(--color-brand-gold)]"
                      />
                      <div>
                        <p className="font-medium text-sm">{method.label}</p>
                        <p className="text-xs text-muted-foreground">
                          {method.days} {locale === "ar" ? "أيام عمل" : "business days"}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-brand-gold">
                      {method.price === 0
                        ? ct("freeShipping")
                        : `${formatPrice(method.price)} ${pt("sar")}`}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            <Separator />

            {/* Payment Method */}
            <section className="space-y-4">
              <h2 className="text-lg font-heading text-foreground">
                {t("paymentMethod")}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center justify-center p-3 border rounded-sm cursor-pointer text-sm transition-colors ${
                      selectedPayment === method.id
                        ? "border-brand-gold bg-brand-gold/5 text-brand-gold font-semibold"
                        : "border-border text-muted-foreground hover:border-brand-gold/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={selectedPayment === method.id}
                      onChange={() => setSelectedPayment(method.id)}
                      className="sr-only"
                    />
                    {method.label}
                  </label>
                ))}
              </div>
            </section>
          </div>

          {/* Order Summary Sidebar */}
          <div className="bg-card border border-border rounded-sm p-6 h-fit sticky top-24">
            <h2 className="text-lg font-heading text-foreground mb-4">
              {ct("subtotal")}
            </h2>
            <Separator className="mb-4" />

            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.sizeId}`}
                  className="flex justify-between text-sm"
                >
                  <span className="text-muted-foreground truncate max-w-[60%]">
                    {item.name} ×{item.quantity}
                  </span>
                  <span>
                    {formatPrice(item.price * item.quantity)} {pt("sar")}
                  </span>
                </div>
              ))}
            </div>

            <Separator className="mb-4" />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{ct("subtotal")}</span>
                <span>{formatPrice(totalPrice())} {pt("sar")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{ct("shipping")}</span>
                <span className={shippingCost === 0 ? "text-brand-gold" : ""}>
                  {shippingCost === 0
                    ? ct("freeShipping")
                    : `${formatPrice(shippingCost)} ${pt("sar")}`}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between text-base font-semibold">
                <span>{ct("total")}</span>
                <span className="text-brand-gold">
                  {formatPrice(totalPrice() + shippingCost)} {pt("sar")}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-gold text-brand-green-dark py-3 mt-6 rounded-sm font-semibold hover:bg-brand-gold-light transition-colors"
            >
              {t("placeOrder")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
