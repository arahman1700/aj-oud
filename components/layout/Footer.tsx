"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Separator } from "@/components/ui/separator";
import { assetPath } from "@/lib/basePath";
import {
  MadaIcon,
  VisaIcon,
  MastercardIcon,
  ApplePayIcon,
  GooglePayIcon,
  TabbyIcon,
  TamaraIcon,
  AramexIcon,
  SMSAIcon,
} from "@/components/icons/PaymentIcons";
import {
  InstagramIcon,
  WhatsAppIcon,
  TwitterXIcon,
  TikTokIcon,
  SnapchatIcon,
} from "@/components/icons/SocialIcons";

export function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Nav");

  return (
    <footer className="bg-brand-green-dark border-t border-border">
      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath("/images/brand/logo-light.png")}
                alt="AJoud"
                className="h-10 w-auto"
              />
              <span className="text-xl font-heading text-brand-gold tracking-[0.25em] uppercase">
                AJOUD
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {t("aboutText")}
            </p>
            {/* Social */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com/ajoud_sa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-gold transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/966591700004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/ajoud_sa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-gold transition-colors"
                aria-label="X (Twitter)"
              >
                <TwitterXIcon className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@ajoud_sa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-gold transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href="https://snapchat.com/add/ajoud_sa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#FFFC00] transition-colors"
                aria-label="Snapchat"
              >
                <SnapchatIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-brand-gold transition-colors"
                >
                  {nav("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-muted-foreground hover:text-brand-gold transition-colors"
                >
                  {nav("products")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-brand-gold transition-colors"
                >
                  {nav("about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4">
              {t("customerService")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/policies/shipping"
                  className="text-sm text-muted-foreground hover:text-brand-gold transition-colors"
                >
                  {t("shippingPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/returns"
                  className="text-sm text-muted-foreground hover:text-brand-gold transition-colors"
                >
                  {t("returnPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/privacy"
                  className="text-sm text-muted-foreground hover:text-brand-gold transition-colors"
                >
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/terms"
                  className="text-sm text-muted-foreground hover:text-brand-gold transition-colors"
                >
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-brand-gold transition-colors"
                >
                  {nav("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment & Shipping */}
          <div>
            <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4">
              {t("paymentMethods")}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              <MadaIcon className="h-7 w-auto" />
              <VisaIcon className="h-7 w-auto" />
              <MastercardIcon className="h-7 w-auto" />
              <ApplePayIcon className="h-7 w-auto" />
              <GooglePayIcon className="h-7 w-auto" />
              <TabbyIcon className="h-7 w-auto" />
              <TamaraIcon className="h-7 w-auto" />
            </div>

            {/* Shipping Partners */}
            <div className="mt-6">
              <p className="text-xs text-muted-foreground mb-2">
                {t("shippingPartners")}
              </p>
              <div className="flex gap-1.5">
                <AramexIcon className="h-7 w-auto" />
                <SMSAIcon className="h-7 w-auto" />
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-border/50" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} AJoud. {t("rights")}.
          </p>
          <p className="flex items-center gap-1">
            <span className="text-brand-gold">&#9830;</span>
            Made in Saudi Arabia
          </p>
        </div>
      </div>
    </footer>
  );
}
