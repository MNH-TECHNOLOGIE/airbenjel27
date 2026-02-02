import { Product } from "@/data/types";
import { products } from "@/data/products";

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categoryId === categorySlug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((product) =>
    product.collectionIds.includes(collectionSlug)
  );
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isFeatured);
}

export function getNewProducts(): Product[] {
  return products.filter((product) => product.isNew);
}


