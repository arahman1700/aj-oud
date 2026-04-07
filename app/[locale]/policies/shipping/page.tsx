import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ShippingPolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ShippingPolicyContent />;
}

function ShippingPolicyContent() {
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
        <span className="text-sm text-foreground">{t("shippingTitle")}</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-heading text-brand-gold mb-4">
          {t("shippingTitle")}
        </h1>
        <div className="w-16 h-px bg-brand-gold/40 mx-auto" />
      </div>

      {/* Content */}
      <div className="space-y-12">
        {/* Free Shipping */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-brand-gold text-lg">♦</span>
            </div>
            <div>
              <h2 className="text-xl font-heading text-foreground mb-3">
                {t("shippingFreeTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("shippingFreeText")}
              </p>
            </div>
          </div>
        </section>

        {/* Carriers */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-6">
            {t("shippingCarriersTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-border/50 rounded-sm">
              <h3 className="font-semibold text-brand-gold mb-2">Aramex</h3>
              <p className="text-muted-foreground text-sm">
                {t("shippingAramex")}
              </p>
            </div>
            <div className="p-6 border border-border/50 rounded-sm">
              <h3 className="font-semibold text-brand-gold mb-2">SMSA Express</h3>
              <p className="text-muted-foreground text-sm">
                {t("shippingSMSA")}
              </p>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-3">
            {t("shippingCoverageTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("shippingCoverageText")}
          </p>
        </section>

        {/* International */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-3">
            {t("shippingInternationalTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("shippingInternationalText")}
          </p>
        </section>

        {/* Tracking */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-3">
            {t("shippingTrackingTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("shippingTrackingText")}
          </p>
        </section>
      </div>
    </div>
  );
}
