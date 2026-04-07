import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("Common");

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/brand/logo-light.png"
          alt="AJoud"
          className="mx-auto h-16 w-auto mb-8"
        />

        {/* 404 number */}
        <h1 className="text-8xl font-heading text-brand-gold mb-4 animate-fade-in-up">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-heading text-foreground mb-3 animate-fade-in-up delay-100">
          {t("notFoundTitle")}
        </h2>

        {/* Description */}
        <p className="text-muted-foreground mb-8 animate-fade-in-up delay-200">
          {t("notFoundText")}
        </p>

        {/* Back to home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark px-8 py-3.5 rounded-sm font-semibold hover:bg-brand-gold-light transition-colors duration-300 animate-fade-in-up delay-300"
        >
          {t("backToHome")}
        </Link>
      </div>
    </section>
  );
}
