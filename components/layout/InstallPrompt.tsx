"use client";

import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";
import { useLocale } from "next-intl";
import { assetPath } from "@/lib/basePath";

export function InstallPrompt() {
  const locale = useLocale();
  const [show, setShow] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);

  useEffect(() => {
    // Check if already installed or dismissed
    if (window.matchMedia("(display-mode: standalone)").matches) return;
    if (sessionStorage.getItem("ajoud-install-dismissed")) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Show iOS install hint after 3 seconds
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !(window as any).MSStream;
    if (isIOS) {
      const timer = setTimeout(() => setShow(true), 3000);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("beforeinstallprompt", handler);
      };
    }

    // Show Android/Chrome install after 2 seconds
    const timer = setTimeout(() => {
      if (!deferredPrompt) setShow(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, [deferredPrompt]);

  const handleInstall = async () => {
    if (deferredPrompt && "prompt" in deferredPrompt) {
      (deferredPrompt as any).prompt();
    }
    setShow(false);
  };

  const handleDismiss = () => {
    setShow(false);
    sessionStorage.setItem("ajoud-install-dismissed", "true");
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-0 md:bottom-6 md:start-6 md:end-auto md:max-w-sm animate-fade-in-up">
      <div className="bg-card border border-brand-gold/20 rounded-lg shadow-2xl p-4 flex items-start gap-3">
        {/* App icon */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath("/images/brand/icon-192.png")}
          alt="AJoud"
          className="w-12 h-12 rounded-xl shrink-0"
        />

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">
            {locale === "ar" ? "حمّل تطبيق أجود" : "Install AJoud App"}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {locale === "ar"
              ? "تصفح أسرع وتجربة أفضل"
              : "Browse faster with a better experience"}
          </p>

          <button
            onClick={handleInstall}
            className="mt-2 inline-flex items-center gap-1.5 bg-brand-gold text-brand-green-dark text-xs font-semibold px-4 py-1.5 rounded-sm hover:bg-brand-gold-light transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            {locale === "ar" ? "تحميل" : "Install"}
          </button>
        </div>

        <button
          onClick={handleDismiss}
          className="text-muted-foreground hover:text-foreground p-1 shrink-0"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
