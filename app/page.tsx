import Link from "next/link";
import HeroCarousel from "@/components/home/HeroCarousel";
import { getProductsByCategory } from "@/lib/catalog";
import ProductGrid from "@/components/catalog/ProductGrid";
import ProductCard from "@/components/catalog/ProductCard";

export default function Home() {
  const featuredKits = getProductsByCategory("kits").slice(0, 3);
  const categorySections = [
    {
      title: "Maillots",
      description: "Selection football officielle",
      href: "/kits",
      products: getProductsByCategory("kits").slice(0, 3),
    },
    {
      title: "Vetements",
      description: "Pieces confort pour tous les jours",
      href: "/apparel",
      products: getProductsByCategory("apparel").slice(0, 3),
    },
    {
      title: "Basketball",
      description: "Collection basket",
      href: "/basketball",
      products: getProductsByCategory("basketball").slice(0, 3),
    },
    {
      title: "Sport Militaire",
      description: "Tenues robustes et techniques",
      href: "/sport-militaire",
      products: getProductsByCategory("sport-militaire").slice(0, 3),
    },
    {
      title: "Accessoires",
      description: "Complements et essentiels",
      href: "/accessories",
      products: getProductsByCategory("accessories").slice(0, 3),
    },
    {
      title: "Maison & Lifestyle",
      description: "Decor et confort a la maison",
      href: "/home-lifestyle",
      products: getProductsByCategory("home-lifestyle").slice(0, 3),
    },
    {
      title: "Cadeaux",
      description: "Idees premium a offrir",
      href: "/gifts",
      products: getProductsByCategory("gifts").slice(0, 3),
    },
  ].filter((section) => section.products.length > 0);

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

      {/* Category Highlights */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-12 md:space-y-14">
            {categorySections.map((section) => (
              <div key={section.title}>
                <div className="mb-4 text-center sm:mb-5">
                  <h3 className="text-lg font-semibold text-secondary sm:text-xl">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {section.description}
                  </p>
                  <Link
                    href={section.href}
                    className="mt-2 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    Voir tout
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
                  {section.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
