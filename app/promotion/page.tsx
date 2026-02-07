import { Metadata } from "next";
import Image from "next/image";
import { getAllProducts } from "@/lib/catalog";
import ProductGrid from "@/components/catalog/ProductGrid";

export const metadata: Metadata = {
  title: "Promotions",
  description: "Découvrez nos promotions et offres spéciales",
};

export default function PromotionPage() {
  // Filter products that are featured or new (as promotional items)
  const allProducts = getAllProducts();
  const promotionalProducts = allProducts.filter(
    (product) => product.isFeatured || product.isNew
  );

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      {/* Header Section with Banner */}
      <div className="relative w-full overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
        <Image
          src="/banner 1.png"
          alt="Promotions"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto w-full max-w-7xl px-3 text-center sm:px-4 md:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Promotions
            </h1>
            <p className="mt-2 text-sm text-white/90 sm:mt-3 sm:text-base md:mt-4 md:text-lg">
              Découvrez nos offres spéciales et promotions exclusives
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          {promotionalProducts.length > 0 ? (
            <ProductGrid products={promotionalProducts} />
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-600">Aucune promotion disponible pour le moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}


