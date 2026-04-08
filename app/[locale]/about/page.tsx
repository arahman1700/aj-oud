import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { assetPath } from "@/lib/basePath";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations("About");

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-5xl md:text-7xl font-heading text-brand-gold tracking-widest">
          AJOUD
        </span>
        <h1 className="text-3xl md:text-4xl font-heading text-foreground mt-6 mb-4">
          {t("title")}
        </h1>
        <p className="text-lg text-brand-gold-light">{t("subtitle")}</p>
      </div>

      {/* Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
          <Image
            src={assetPath("/images/brand/brand-photo.jpeg")}
            alt="AJoud"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed text-lg">
            {t("story")}
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="text-center mb-20">
        <h2 className="text-2xl font-heading text-brand-gold mb-6">
          {t("mission")}
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {t("missionText")}
        </p>
      </div>

      {/* Values */}
      <div>
        <h2 className="text-2xl font-heading text-brand-gold text-center mb-10">
          {t("values")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(["quality", "authenticity", "craftsmanship"] as const).map(
            (value) => (
              <div
                key={value}
                className="text-center p-8 border border-border rounded-sm bg-card"
              >
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-gold text-xl">♦</span>
                </div>
                <h3 className="font-heading text-foreground text-lg">
                  {t(value)}
                </h3>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
