import { Metadata } from "next";
import Image from "next/image";
import { getProductsByCategory } from "@/lib/catalog";
import FilterableProductGrid from "@/components/catalog/FilterableProductGrid";

export const metadata: Metadata = {
  title: "Football",
  description: "Decouvrez notre collection football officielle",
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
      {/* Header Section with Banner */}
      <div className="relative w-full overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
        <Image
          src="/banner 1.png"
          alt="Football"
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
              Football
            </h1>
            <p className="mt-2 text-sm text-white/90 sm:mt-3 sm:text-base md:mt-4 md:text-lg">
              Maillots et equipements officiels
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <FilterableProductGrid products={products} filters={filters} />
        </div>
      </section>
    </div>
  );
}
