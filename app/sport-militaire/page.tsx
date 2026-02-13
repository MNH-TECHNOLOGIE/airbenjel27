import { Metadata } from "next";
import { getProductsByCategory } from "@/lib/catalog";
import ProductGrid from "@/components/catalog/ProductGrid";

export const metadata: Metadata = {
  title: "Sport Militaire",
  description:
    "Collection Sport Militaire AIR BENJEL 27: tenues techniques, résistantes et confortables.",
};

export default function SportMilitairePage() {
  const products = getProductsByCategory("sport-militaire") || [];
  const priorityNames = [
    "Airbenjel Sport Militaire 5",
    "Airbenjel Sport Militaire 6",
    "Airbenjel Sport Militaire 7",
    "Airbenjel Sport Militaire 8",
    "Airbenjel Sport Militaire 9",
  ];
  const priorityMap = new Map(priorityNames.map((name, index) => [name, index]));
  const sortedProducts = products
    .map((product, index) => ({ product, index }))
    .sort((a, b) => {
      const aPriority = priorityMap.has(a.product.name)
        ? priorityMap.get(a.product.name)!
        : Number.POSITIVE_INFINITY;
      const bPriority = priorityMap.has(b.product.name)
        ? priorityMap.get(b.product.name)!
        : Number.POSITIVE_INFINITY;
      if (aPriority !== bPriority) return aPriority - bPriority;
      return a.index - b.index;
    })
    .map(({ product }) => product);

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      {/* Products Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-secondary sm:text-3xl md:text-4xl">
              Collection Sport Militaire
            </h2>
            <p className="mt-3 text-base text-gray-600 sm:text-lg">
              Sélection de pièces robustes pour la performance et la mobilité.
            </p>
          </div>

          <ProductGrid products={sortedProducts} />
        </div>
      </section>
    </div>
  );
}
