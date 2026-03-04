import { Metadata } from "next";
import ProductGrid from "@/components/catalog/ProductGrid";
import { arbitreProducts } from "@/data/arbitres";

export const metadata: Metadata = {
  title: "Arbitre",
  description: "Collection arbitres AIR BENJEL 27.",
};

export default function ArbitrePage() {
  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <section className="py-10 sm:py-14 md:py-18">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-secondary sm:text-3xl md:text-4xl">
              Collection Arbitres
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:text-lg">
              Tenues officielles d&apos;arbitre avec les memes details produits que le catalogue.
            </p>
          </div>
          <ProductGrid products={arbitreProducts} />
        </div>
      </section>
    </div>
  );
}
