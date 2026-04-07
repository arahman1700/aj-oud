"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function RegisterPage() {
  const t = useTranslations("Account");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("register"));
  };

  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <h1 className="text-3xl font-heading text-brand-gold text-center mb-8">
        {t("register")}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-muted-foreground mb-1.5 block">
            {useTranslations("Checkout")("fullName")}
          </label>
          <Input required className="bg-card" />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1.5 block">
            {t("email")}
          </label>
          <Input type="email" required className="bg-card" />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1.5 block">
            {t("password")}
          </label>
          <Input type="password" required className="bg-card" />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1.5 block">
            {t("confirmPassword")}
          </label>
          <Input type="password" required className="bg-card" />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-gold text-brand-green-dark py-3 rounded-sm font-semibold hover:bg-brand-gold-light transition-colors"
        >
          {t("register")}
        </button>

        <p className="text-center text-sm text-muted-foreground">
          {t("hasAccount")}{" "}
          <Link
            href="/account/login"
            className="text-brand-gold hover:underline"
          >
            {t("login")}
          </Link>
        </p>
      </form>
    </div>
  );
}
