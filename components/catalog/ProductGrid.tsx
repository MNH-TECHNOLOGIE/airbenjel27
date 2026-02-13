import { Product } from "@/data/types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const expandedProducts = products.flatMap((product) => {
    if (product.images.length <= 1) {
      return product;
    }

    return product.images.map((image, index) => ({
      ...product,
      id: `${product.id}-image-${index + 1}`,
      images: [image],
    }));
  });

  if (products.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-gray-600">Aucun produit trouvé.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
      {expandedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
