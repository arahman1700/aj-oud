import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PrivacyPolicyContent />;
}

function PrivacyPolicyContent() {
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
        <span className="text-sm text-foreground">{t("privacyTitle")}</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-heading text-brand-gold mb-4">
          {t("privacyTitle")}
        </h1>
        <div className="w-16 h-px bg-brand-gold/40 mx-auto" />
      </div>

      {/* Content */}
      <div className="space-y-12">
        {/* Data Collection */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-brand-gold text-lg">♦</span>
            </div>
            <div>
              <h2 className="text-xl font-heading text-foreground mb-3">
                {t("privacyDataTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("privacyDataText")}
              </p>
            </div>
          </div>
        </section>

        {/* Third Parties */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-3">
            {t("privacyThirdPartyTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("privacyThirdPartyText")}
          </p>
        </section>

        {/* Payment Security */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-3">
            {t("privacyPaymentTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("privacyPaymentText")}
          </p>
        </section>

        {/* Cookies */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-3">
            {t("privacyCookiesTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("privacyCookiesText")}
          </p>
        </section>

        {/* Contact */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-3">
            {t("privacyContactTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("privacyContactText")}
          </p>
          <p className="mt-3 text-brand-gold text-sm">info@ajoud.sa</p>
        </section>
      </div>
    </div>
  );
}
