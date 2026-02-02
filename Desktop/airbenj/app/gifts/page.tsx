import { Metadata } from "next";
import { getProductsByCategory } from "@/lib/catalog";
import ProductGrid from "@/components/catalog/ProductGrid";

export const metadata: Metadata = {
  title: "Cadeaux",
  description: "Trouvez le cadeau parfait pour les fans",
};

export default function GiftsPage() {
  const products = getProductsByCategory("gifts");

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      {/* Header Section */}
      <div className="bg-secondary py-12 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Cadeaux
          </h1>
          <p className="mt-3 text-base text-white/90 sm:mt-4 sm:text-lg">
            Idées cadeaux pour tous les fans
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductGrid products={products} />
        </div>
      </section>
    </div>
  );
}

