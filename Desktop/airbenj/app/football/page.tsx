import { Metadata } from "next";
import { getProductsByCategory } from "@/lib/catalog";
import FilterableProductGrid from "@/components/catalog/FilterableProductGrid";

export const metadata: Metadata = {
  title: "Football",
  description: "Decouvrez notre collection officielle de football",
};

export default function FootballPage() {
  const products = getProductsByCategory("kits") || [];
  const filters = [
    { label: "Domicile", value: "home-kit" },
    { label: "Exterieur", value: "away-kit" },
    { label: "Third", value: "third-kit" },
    { label: "Edition limitee", value: "limited" },
    { label: "Premium", value: "premium" },
  ];

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <section className="py-8 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <FilterableProductGrid products={products} filters={filters} />
        </div>
      </section>
    </div>
  );
}
