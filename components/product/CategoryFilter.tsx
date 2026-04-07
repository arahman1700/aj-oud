"use client";

import { useTranslations } from "next-intl";

interface CategoryFilterProps {
  categories: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
}

export function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  const t = useTranslations("Nav");

  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-4 py-2 text-sm rounded-sm border transition-all duration-200 ${
            active === cat.id
              ? "bg-brand-gold text-brand-green-dark border-brand-gold font-semibold"
              : "bg-transparent text-muted-foreground border-border hover:border-brand-gold/50 hover:text-brand-gold"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
