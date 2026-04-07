export type CategoryId = "musk" | "oud" | "gift-sets" | "bakhoor" | "oils" | "home";

export interface ProductSize {
  id: string;
  label: { ar: string; en: string };
  price: number;
}

export interface FragranceNote {
  ar: string;
  en: string;
}

export interface Product {
  id: string;
  slug: string;
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  story: { ar: string; en: string };
  category: CategoryId;
  images: string[];
  sizes: ProductSize[];
  fragranceNotes: {
    top: FragranceNote[];
    heart: FragranceNote[];
    base: FragranceNote[];
  };
  badges: ("new" | "bestseller" | "limited")[];
  inStock: boolean;
}

export interface Category {
  id: CategoryId;
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  image: string;
}

export interface LocalizedProduct {
  id: string;
  slug: string;
  name: string;
  description: string;
  story: string;
  category: CategoryId;
  images: string[];
  sizes: { id: string; label: string; price: number }[];
  fragranceNotes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  badges: ("new" | "bestseller" | "limited")[];
  inStock: boolean;
  basePrice: number;
}
