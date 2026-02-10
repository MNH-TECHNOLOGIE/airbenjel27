import { Metadata } from "next";
import Link from "next/link";
import { getProductsByCategory } from "@/lib/catalog";
import FilterableProductGrid from "@/components/catalog/FilterableProductGrid";

export const metadata: Metadata = {
  title: "Maillots",
  description: "D�couvrez notre collection de maillots officiels",
};

export default function KitsPage() {
  const footballProducts = getProductsByCategory("kits") || [];
  const filters = [
    { label: "Domicile", value: "home-kit" },
    { label: "Ext�rieur", value: "away-kit" },
    { label: "Third", value: "third-kit" },
    { label: "�dition limit�e", value: "limited" },
    { label: "Premium", value: "premium" },
  ];

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">

      {/* Products Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="scroll-mt-24">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-secondary sm:text-lg">
                Football
              </h3>
              <Link
                href="/football"
                className="text-sm font-semibold text-primary hover:underline"
              >
                Voir tout
              </Link>
            </div>
            <FilterableProductGrid products={footballProducts} filters={filters} />
          </div>
        </div>
      </section>
    </div>
  );
}
