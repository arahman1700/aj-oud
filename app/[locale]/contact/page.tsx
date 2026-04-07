"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { toast } from "sonner";
import { useState } from "react";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const common = useTranslations("Common");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success(t("formSuccess"));
    setFormData({ name: "", email: "", phone: "", message: "" });
  }

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
        <span className="text-sm text-foreground">{t("title")}</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-heading text-brand-gold mb-4">
          {t("title")}
        </h1>
        <p className="text-muted-foreground">{t("subtitle")}</p>
        <div className="w-16 h-px bg-brand-gold/40 mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-xl font-heading text-foreground mb-6">
            {t("infoTitle")}
          </h2>

          {/* WhatsApp */}
          <a
            href="https://wa.me/966591700004"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground group-hover:text-green-400 transition-colors">
                {t("whatsapp")}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                +966 59 170 0004
              </p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/ajoud_sa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group"
          >
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
              <svg className="h-5 w-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground group-hover:text-brand-gold transition-colors">
                {t("instagram")}
              </p>
              <p className="text-sm text-muted-foreground mt-1">@ajoud_sa</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@ajoud.sa"
            className="flex items-start gap-4 group"
          >
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
              <svg className="h-5 w-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground group-hover:text-brand-gold transition-colors">
                {t("email")}
              </p>
              <p className="text-sm text-muted-foreground mt-1">info@ajoud.sa</p>
            </div>
          </a>

          {/* Map Placeholder */}
          <div className="mt-8 border border-border rounded-sm overflow-hidden bg-card">
            <div className="aspect-[16/9] flex items-center justify-center bg-muted/30">
              <div className="text-center">
                <svg className="h-10 w-10 text-brand-gold/40 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-sm text-muted-foreground">
                  {t("mapPlaceholder")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-heading text-foreground mb-6">
            {t("formTitle")}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                {t("formName")}
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                {t("formEmail")}
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground mb-2"
              >
                {t("formPhone")}
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                {t("formMessage")}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-gold transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-gold text-brand-green-dark px-6 py-3 rounded-sm font-semibold hover:bg-brand-gold-light transition-colors duration-300"
            >
              {t("formSubmit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
