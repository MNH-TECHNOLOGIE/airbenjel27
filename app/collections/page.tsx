import { Metadata } from "next";
import { getAllProducts } from "@/lib/catalog";
import FilterableProductGrid from "@/components/catalog/FilterableProductGrid";

export const metadata: Metadata = {
  title: "Collections",
  description: "Découvrez toutes nos collections",
};

export default function CollectionsPage() {
  const products = getAllProducts();

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">

      {/* Products Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <FilterableProductGrid products={products} />
        </div>
      </section>
    </div>
  );
}

