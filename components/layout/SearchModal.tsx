"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { products, getLocalizedProduct } from "@/data/products";
import { assetPath } from "@/lib/basePath";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const t = useTranslations("Nav");
  const pt = useTranslations("Product");
  const locale = useLocale() as "ar" | "en";
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setQuery("");
      // Small delay to wait for dialog animation
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const localizedProducts = useMemo(
    () => products.map((p) => getLocalizedProduct(p, locale)),
    [locale]
  );

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const lowerQuery = query.toLowerCase();
    return localizedProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
    );
  }, [query, localizedProducts]);

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-SA", {
      style: "decimal",
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <Dialog open={open} onOpenChange={(val) => !val && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-xl max-h-[80vh] flex flex-col bg-background border border-border rounded-sm p-0"
      >
        <DialogTitle className="sr-only">{t("searchTitle")}</DialogTitle>

        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="h-5 w-5 text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
          />
          {query.length > 0 ? (
            <button
              onClick={() => setQuery("")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              ESC
            </button>
          )}
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto">
          {query.length >= 2 && results.length === 0 && (
            <div className="py-12 text-center text-muted-foreground">
              <Search className="h-10 w-10 mx-auto mb-3 opacity-30" />
              <p>{t("searchNoResults")}</p>
            </div>
          )}

          {results.length > 0 && (
            <ul className="divide-y divide-border">
              {results.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-4 px-4 py-3 hover:bg-muted/50 transition-colors"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-14 h-14 rounded-sm overflow-hidden bg-card shrink-0">
                      <Image
                        src={assetPath(product.images[0])}
                        alt={product.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {product.name}
                      </p>
                      <p className="text-sm text-brand-gold font-semibold">
                        {formatPrice(product.basePrice)} {pt("sar")}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {query.length < 2 && (
            <div className="py-12 text-center text-muted-foreground">
              <Search className="h-10 w-10 mx-auto mb-3 opacity-20" />
              <p className="text-sm">{t("searchPlaceholder")}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
