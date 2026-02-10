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
      {/* Products Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductGrid products={products} />
        </div>
      </section>
    </div>
  );
}
