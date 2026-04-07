import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ReturnPolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ReturnPolicyContent />;
}

function ReturnPolicyContent() {
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
        <span className="text-sm text-foreground">{t("returnsTitle")}</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-heading text-brand-gold mb-4">
          {t("returnsTitle")}
        </h1>
        <div className="w-16 h-px bg-brand-gold/40 mx-auto" />
      </div>

      {/* Content */}
      <div className="space-y-12">
        {/* Return Window */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-brand-gold text-lg">♦</span>
            </div>
            <div>
              <h2 className="text-xl font-heading text-foreground mb-3">
                {t("returnsWindowTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("returnsWindowText")}
              </p>
            </div>
          </div>
        </section>

        {/* Condition */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-3">
            {t("returnsConditionTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("returnsConditionText")}
          </p>
        </section>

        {/* Refund */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-3">
            {t("returnsRefundTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("returnsRefundText")}
          </p>
        </section>

        {/* Exchange */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-3">
            {t("returnsExchangeTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("returnsExchangeText")}
          </p>
        </section>

        {/* How to Return */}
        <section className="border border-border rounded-sm p-8 bg-card">
          <h2 className="text-xl font-heading text-foreground mb-3">
            {t("returnsHowTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("returnsHowText")}
          </p>
          <a
            href="https://wa.me/966591700004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
          >
            WhatsApp: +966 59 170 0004
          </a>
        </section>
      </div>
    </div>
  );
}
