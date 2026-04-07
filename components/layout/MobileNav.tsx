"use client";

import { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { X, User, Package, Search, Droplets, TreePine, Gift } from "lucide-react";
import { products, getLocalizedProduct } from "@/data/products";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

const categoryIcons: Record<string, React.ReactNode> = {
  musk: <Droplets className="h-4 w-4" />,
  oud: <TreePine className="h-4 w-4" />,
  "gift-sets": <Gift className="h-4 w-4" />,
};

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  const t = useTranslations("Nav");
  const pt = useTranslations("Product");
  const locale = useLocale() as "ar" | "en";
  const [searchQuery, setSearchQuery] = useState("");

  const localizedProducts = useMemo(
    () => products.map((p) => getLocalizedProduct(p, locale)),
    [locale]
  );

  const searchResults = useMemo(() => {
    if (searchQuery.length < 2) return [];
    const lower = searchQuery.toLowerCase();
    return localizedProducts
      .filter(
        (p) =>
          p.name.toLowerCase().includes(lower) ||
          p.description.toLowerCase().includes(lower)
      )
      .slice(0, 5);
  }, [searchQuery, localizedProducts]);

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-SA", {
      style: "decimal",
      minimumFractionDigits: 0,
    }).format(amount);

  const categories = [
    { id: "musk", href: "/products?category=musk" as const, label: t("musk") },
    { id: "oud", href: "/products?category=oud" as const, label: t("oud") },
    { id: "gift-sets", href: "/products?category=gift-sets" as const, label: t("giftSets") },
  ];

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-80 bg-background border-border flex flex-col">
        <SheetHeader className="text-start">
          <SheetTitle className="text-2xl font-heading text-brand-gold tracking-widest">
            AJOUD
          </SheetTitle>
        </SheetHeader>

        {/* Search Input */}
        <div className="relative mt-2">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full bg-muted/50 border border-border rounded-sm ps-10 pe-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-brand-gold/50 transition-colors"
          />
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mt-2 border border-border rounded-sm bg-card overflow-hidden">
            {searchResults.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                onClick={() => {
                  setSearchQuery("");
                  onClose();
                }}
                className="flex items-center gap-3 px-3 py-2 hover:bg-muted/50 transition-colors"
              >
                <div className="relative w-10 h-10 rounded-sm overflow-hidden bg-card shrink-0">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground truncate">
                    {product.name}
                  </p>
                  <p className="text-xs text-brand-gold">
                    {formatPrice(product.basePrice)} {pt("sar")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        <Separator className="my-3 bg-border" />

        {/* Categories with Icons */}
        <div className="mb-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-4 mb-2">
            {t("categories")}
          </p>
          <div className="flex flex-col gap-0.5">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                onClick={onClose}
                className="flex items-center gap-3 text-foreground hover:text-brand-gold hover:bg-muted px-4 py-2.5 rounded-sm transition-colors text-sm"
              >
                <span className="text-brand-gold/70">
                  {categoryIcons[cat.id]}
                </span>
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-3 bg-border" />

        {/* Main Navigation Links */}
        <nav className="flex flex-col gap-0.5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              onClick={onClose}
              className="text-foreground hover:text-brand-gold hover:bg-muted px-4 py-3 rounded-sm transition-colors text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Separator className="my-3 bg-border" />

        {/* Account Links */}
        <div className="flex flex-col gap-0.5">
          <Link
            href="/account/login"
            onClick={onClose}
            className="flex items-center gap-3 text-muted-foreground hover:text-brand-gold hover:bg-muted px-4 py-3 rounded-sm transition-colors"
          >
            <User className="h-4 w-4" />
            {t("login")}
          </Link>
          <Link
            href="/account/orders"
            onClick={onClose}
            className="flex items-center gap-3 text-muted-foreground hover:text-brand-gold hover:bg-muted px-4 py-3 rounded-sm transition-colors"
          >
            <Package className="h-4 w-4" />
            {t("orders")}
          </Link>
        </div>

        {/* Social Links + WhatsApp */}
        <div className="mt-auto pt-4">
          <Separator className="mb-4 bg-border" />

          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-4 mb-3">
            {t("followUs")}
          </p>

          <div className="flex items-center gap-3 px-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ajoud.sa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-sm bg-muted/50 text-muted-foreground hover:text-brand-gold hover:bg-muted transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/966591700004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-sm bg-muted/50 text-muted-foreground hover:text-green-400 hover:bg-muted transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
