import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TermsContent />;
}

function TermsContent() {
  const t = useTranslations("Policies");
  const common = useTranslations("Common");

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
      {/* Breadcrumb */}
      <nav className="mb-10">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-brand-gold transition-colors"
        >
          {common("backToHome")}
        </Link>
        <span className="text-muted-foreground mx-2">/</span>
        <span className="text-sm text-foreground">{t("termsTitle")}</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-heading text-brand-gold mb-4">
          {t("termsTitle")}
        </h1>
        <div className="w-16 h-px bg-brand-gold/40 mx-auto" />
      </div>

      {/* Content */}
      <div className="space-y-12">
        {/* Use of Website */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-brand-gold text-lg">♦</span>
            </div>
            <div>
              <h2 className="text-xl font-heading text-foreground mb-3">
                {t("termsUseTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("termsUseText")}
              </p>
            </div>
          </div>
        </section>

        {/* Product Descriptions */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-3">
            {t("termsProductsTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("termsProductsText")}
          </p>
        </section>

        {/* Pricing */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-3">
            {t("termsPricingTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("termsPricingText")}
          </p>
        </section>

        {/* Order Cancellation */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-3">
            {t("termsCancellationTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("termsCancellationText")}
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-3">
            {t("termsLiabilityTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("termsLiabilityText")}
          </p>
        </section>
      </div>
    </div>
  );
}
