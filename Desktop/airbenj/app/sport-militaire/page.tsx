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

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      {/* Header Section */}
      <div className="relative h-[180px] w-full overflow-hidden sm:h-[220px] md:h-[250px] lg:h-[300px]">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-dark to-black" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto w-full max-w-7xl px-3 text-center sm:px-4 md:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              SPORT MILITAIRE
            </h1>
            <p className="mt-2 text-sm text-white/90 sm:mt-3 sm:text-base md:mt-4 md:text-lg">
              Tenues techniques, résistantes et confortables pour l'effort
            </p>
          </div>
        </div>
      </div>

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

          <ProductGrid products={products} />
        </div>
      </section>
    </div>
  );
}
