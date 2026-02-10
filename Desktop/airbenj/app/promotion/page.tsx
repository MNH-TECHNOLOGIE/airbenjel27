import { Metadata } from "next";
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


