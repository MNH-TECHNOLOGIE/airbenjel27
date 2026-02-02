export type Gender = "men" | "women" | "kids" | "unisex";

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export interface Variant {
  id: string;
  size?: Size;
  color?: string;
  price: number;
  stock: number;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  description?: string;
  image?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  categoryId: string;
  collectionIds: string[];
  tags: string[];
  gender: Gender;
  sizes: Size[];
  colors?: string[]; // Couleurs disponibles pour le produit
  variants?: Variant[];
  isNew: boolean;
  isFeatured: boolean;
  isCustomizable: boolean;
  stock: number;
}

