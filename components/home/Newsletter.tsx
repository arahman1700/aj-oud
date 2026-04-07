"use client";

import { useTranslations } from "next-intl";
import { toast } from "sonner";

export function Newsletter() {
  const t = useTranslations("Home");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("newsletterSuccess"));
  };

  return (
    <section className="max-w-2xl mx-auto px-4 md:px-6 py-20 text-center">
      <h2 className="text-2xl font-heading text-brand-gold mb-3">
        {t("newsletterTitle")}
      </h2>
      <p className="text-muted-foreground mb-6">{t("newsletterText")}</p>
      <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder={t("newsletterPlaceholder")}
          className="flex-1 bg-card border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-gold"
        />
        <button
          type="submit"
          className="bg-brand-gold text-brand-green-dark px-6 py-2.5 rounded-sm font-semibold text-sm hover:bg-brand-gold-light transition-colors whitespace-nowrap"
        >
          {t("newsletterButton")}
        </button>
      </form>
    </section>
  );
}
