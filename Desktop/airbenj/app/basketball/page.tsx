import { Metadata } from "next";
import Image from "next/image";
import { getProductsByCategory } from "@/lib/catalog";
import FilterableProductGrid from "@/components/catalog/FilterableProductGrid";

export const metadata: Metadata = {
  title: "Basketball",
  description: "Decouvrez notre collection basketball officielle",
};

export default function BasketballPage() {
  const products = getProductsByCategory("basketball") || [];
  const filters = [
    { label: "Sweat-shirt", value: "sweatshirt" },
    { label: "Pantalon", value: "pants" },
    { label: "T-shirt", value: "tshirt" },
  ];

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      {/* Header Section with Banner */}
      <div className="relative h-[180px] w-full overflow-hidden sm:h-[220px] md:h-[250px] lg:h-[300px]">
        <Image
          src="/banner 2.png"
          alt="Basketball"
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
              Basketball
            </h1>
            <p className="mt-2 text-sm text-white/90 sm:mt-3 sm:text-base md:mt-4 md:text-lg">
              Collection basket officielle
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
