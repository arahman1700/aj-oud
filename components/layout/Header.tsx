"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";

export function Header() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const totalItems = useCartStore((s) => s.totalItems);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/products" as const, label: t("products") },
    { href: "/products?category=musk" as const, label: t("musk") },
    { href: "/products?category=oud" as const, label: t("oud") },
    { href: "/products?category=best-sellers" as const, label: t("bestSellers") },
    { href: "/about" as const, label: t("about") },
  ];

  return (
    <>
      {/* Announcement Bar — like Blue Oud */}
      <div className="bg-brand-gold text-brand-green-dark text-center py-2 text-xs font-medium tracking-wide">
        {locale === "ar"
          ? "شحن مجاني للطلبات فوق 200 ر.س | توصيل خلال 2-5 أيام عمل"
          : "Free shipping on orders over 200 SAR | Delivery within 2-5 business days"}
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-background border-b border-border/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Top row: Language switcher + Logo + Actions (like Oud Al Hashmi) */}
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-foreground hover:text-brand-gold transition-colors"
              aria-label={t("menu")}
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Desktop Nav - Left side */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-brand-gold transition-colors duration-200 tracking-wide uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Logo — Centered (like both reference sites) */}
            <Link href="/" className="flex flex-col items-center gap-1">
              <Image
                src="/images/brand/logo.png"
                alt="AJoud"
                width={44}
                height={56}
                className="h-10 md:h-14 w-auto"
                style={{ filter: "brightness(0) invert(1) sepia(.15) saturate(.4) brightness(1.6)" }}
                priority
              />
              <span className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-brand-gold font-medium">
                AJOUD
              </span>
            </Link>

            {/* Desktop Nav - Right side + Actions */}
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6">
                {navLinks.slice(3).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-brand-gold transition-colors duration-200 tracking-wide uppercase"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="hidden md:block w-px h-5 bg-border/50" />

              <LanguageSwitcher />

              <button
                className="text-muted-foreground hover:text-brand-gold transition-colors p-1.5"
                aria-label={t("search")}
              >
                <Search className="h-4.5 w-4.5" />
              </button>

              <Link
                href="/account/login"
                className="hidden md:block text-muted-foreground hover:text-brand-gold transition-colors p-1.5"
                aria-label={t("account")}
              >
                <User className="h-4.5 w-4.5" />
              </Link>

              <Link
                href="/cart"
                className="relative text-muted-foreground hover:text-brand-gold transition-colors p-1.5"
                aria-label={t("cart")}
              >
                <ShoppingBag className="h-4.5 w-4.5" />
                {mounted && totalItems() > 0 && (
                  <span className="absolute -top-0.5 -end-0.5 bg-brand-gold text-brand-green-dark text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                    {totalItems()}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNav
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          links={navLinks}
        />
      </header>
    </>
  );
}
