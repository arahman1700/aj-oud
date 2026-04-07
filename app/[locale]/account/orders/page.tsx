"use client";

import { useTranslations } from "next-intl";
import { Package } from "lucide-react";

export default function OrdersPage() {
  const t = useTranslations("Account");

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-heading text-brand-gold mb-8">
        {t("orderHistory")}
      </h1>

      <div className="text-center py-20 space-y-4">
        <Package className="h-12 w-12 text-muted-foreground mx-auto" />
        <p className="text-muted-foreground">{t("noOrders")}</p>
      </div>
    </div>
  );
}
