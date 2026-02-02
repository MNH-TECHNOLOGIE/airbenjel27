import Link from "next/link";
import HeroCarousel from "@/components/home/HeroCarousel";
import { getFeaturedProducts, getProductsByCategory } from "@/lib/catalog";
import ProductGrid from "@/components/catalog/ProductGrid";
import ProductCard from "@/components/catalog/ProductCard";

export default function Home() {
  const featuredProducts = getFeaturedProducts().slice(0, 8);
  const featuredKits = getProductsByCategory("kits").slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Banner with Carousel - Pleine page */}
      <HeroCarousel />

      {/* Featured Collections */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-bold tracking-tight text-secondary sm:text-2xl md:text-3xl lg:text-4xl">
              Collections en Vedette
            </h2>
            <p className="mt-2 text-sm text-gray-600 sm:mt-3 sm:text-base md:mt-4 md:text-lg">
              Explorez nos collections sélectionnées
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:mt-10 lg:grid-cols-3">
            {featuredKits.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-6 text-center sm:mt-8">
            <Link
              href="/kits"
              className="btn-secondary inline-block sm:px-6 sm:py-3 sm:text-base"
            >
              Voir tous les maillots
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-accent py-8 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-bold tracking-tight text-secondary sm:text-2xl md:text-3xl lg:text-4xl">
              Produits en Vedette
            </h2>
            <p className="mt-2 text-sm text-gray-600 sm:mt-3 sm:text-base md:mt-4 md:text-lg">
              Nos favoris sélectionnés
            </p>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <ProductGrid products={featuredProducts} />
          </div>
        </div>
      </section>
    </div>
  );
}
