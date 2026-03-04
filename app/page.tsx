import Link from "next/link";
import HeroCarousel from "@/components/home/HeroCarousel";
import BannerSection from "@/components/home/BannerSection";
import SectionHeader from "@/components/home/SectionHeader";
import ProductGrid from "@/components/catalog/ProductGrid";
import { getAllProducts, getNewProducts, getProductsByCategory } from "@/lib/catalog";
import { buttonClasses } from "@/components/ui/Button";
import { Product } from "@/data/types";
import { expandProductsForGrid } from "@/lib/product-card-display";

const HOME_PRODUCT_LIMIT = 3;
const CATEGORY_PREVIEW_LIMIT = 3;

function withoutBasketball(products: Product[]) {
  return products.filter((product) => product.categoryId !== "basketball");
}

function getSectionProducts(products: Product[], limit = HOME_PRODUCT_LIMIT) {
  return expandProductsForGrid(withoutBasketball(products)).slice(0, limit);
}

export default function Home() {
  const newArrivals = getSectionProducts(getNewProducts());
  const collectionsSelection = getSectionProducts(getProductsByCategory("kits"));
  const promotionSelection = getSectionProducts(
    getAllProducts().filter(
      (product) =>
        product.collectionIds.includes("limited-edition") ||
        product.tags.includes("limited") ||
        product.tags.includes("special")
    )
  );

  const categorySections = [
    {
      title: "Maillots",
      description: "Selection officielle de football",
      href: "/kits",
      products: getSectionProducts(getProductsByCategory("kits"), CATEGORY_PREVIEW_LIMIT),
    },
    {
      title: "Vetements",
      description: "Pieces confortables pour tous les jours",
      href: "/apparel",
      products: getSectionProducts(getProductsByCategory("apparel"), CATEGORY_PREVIEW_LIMIT),
    },
    {
      title: "Sport Militaire",
      description: "Tenues robustes et techniques",
      href: "/sport-militaire",
      products: getSectionProducts(
        getProductsByCategory("sport-militaire"),
        CATEGORY_PREVIEW_LIMIT
      ),
    },
    {
      title: "Accessoires",
      description: "Complements et essentiels",
      href: "/accessories",
      products: getSectionProducts(
        getProductsByCategory("accessories"),
        CATEGORY_PREVIEW_LIMIT
      ),
    },
    {
      title: "Maison & Lifestyle",
      description: "Decor et confort a la maison",
      href: "/home-lifestyle",
      products: getSectionProducts(
        getProductsByCategory("home-lifestyle"),
        CATEGORY_PREVIEW_LIMIT
      ),
    },
    {
      title: "Cadeaux",
      description: "Idees premium a offrir",
      href: "/gifts",
      products: getSectionProducts(getProductsByCategory("gifts"), CATEGORY_PREVIEW_LIMIT),
    },
  ].filter((section) => section.products.length > 0);

  return (
    <div className="flex flex-col bg-white">
      {/* A) Hero (unchanged) */}
      <HeroCarousel />

      {/* B) Nouveautes */}
      <section className="border-t border-gray-100 py-12 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Nouveautes"
            title="Nouveautes AIR BENJEL 27"
            description="Les pieces les plus recentes de notre collection officielle."
            action={
              <Link
                href="/collections"
                className={buttonClasses({ variant: "ghost", className: "border border-gray-300" })}
              >
                Voir la collection
              </Link>
            }
          />
          <ProductGrid products={newArrivals} />
        </div>
      </section>

      {/* C) Banner 1 */}
      <BannerSection src="/baner1.png" alt="Banniere promotionnelle AIR BENJEL 27" href="/kits" />

      {/* D) Nos Collections */}
      <section className="border-t border-gray-100 bg-gray-50/40 py-12 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Collections"
            title="Notre collection"
            description="Une selection premium inspiree des meilleurs looks sport."
            action={
              <Link
                href="/kits"
                className={buttonClasses({ variant: "secondary", size: "lg" })}
              >
                Voir tous les maillots
              </Link>
            }
          />

          <div className="mb-8 flex flex-wrap gap-2 border-b border-gray-100 pb-6">
            <Link
              href="/kits"
              className={buttonClasses({
                variant: "ghost",
                size: "sm",
                className: "rounded-full border border-gray-300",
              })}
            >
              Maillots
            </Link>
            <Link
              href="/apparel"
              className={buttonClasses({
                variant: "ghost",
                size: "sm",
                className: "rounded-full border border-gray-300",
              })}
            >
              Vetements
            </Link>
            <Link
              href="/promotion"
              className={buttonClasses({
                variant: "ghost",
                size: "sm",
                className: "rounded-full border border-gray-300",
              })}
            >
              Edition limitee
            </Link>
          </div>

          <ProductGrid products={collectionsSelection} />
        </div>
      </section>

      {/* E) Banner 2 */}
      <BannerSection src="/baner2.png" alt="Banniere collection AIR BENJEL 27" href="/collections" />

      {/* F) Promotion */}
      <section className="border-t border-gray-100 py-12 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Selection du moment"
            title="Promotion & editions limitees"
            description="Les pieces exclusives a ne pas manquer cette saison."
            action={
              <Link
                href="/promotion"
                className={buttonClasses({ variant: "ghost", className: "border border-gray-300" })}
              >
                Voir les promotions
              </Link>
            }
          />
          <ProductGrid products={promotionSelection} />
        </div>
      </section>

      {/* G) Banner 3 */}
      <BannerSection src="/baner3.png" alt="Banniere finale AIR BENJEL 27" href="/collections" />

      {/* H) Section finale */}
      <section className="border-t border-gray-100 bg-gray-50/30 py-12 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Univers"
            title="Explorer nos categories"
            description="Retrouvez toutes nos gammes avec la meme qualite premium."
          />

          <div className="space-y-12 sm:space-y-14">
            {categorySections.map((section, index) => (
              <article
                key={section.title}
                className={index < categorySections.length - 1 ? "border-b border-gray-100 pb-10" : ""}
              >
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-secondary">{section.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{section.description}</p>
                  </div>
                  <Link
                    href={section.href}
                    className={buttonClasses({
                      variant: "ghost",
                      size: "sm",
                      className: "border border-gray-300",
                    })}
                  >
                    Voir tout
                  </Link>
                </div>
                <ProductGrid products={section.products} />
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-gray-200 bg-white px-6 py-8 text-center shadow-soft sm:px-10">
            <h3 className="text-2xl font-bold text-secondary">Decouvrir tout le catalogue</h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
              Parcourez toutes les categories AIR BENJEL 27 et trouvez votre prochaine tenue.
            </p>
            <Link
              href="/collections"
              className={buttonClasses({ variant: "primary", size: "lg", className: "mt-5" })}
            >
              Ouvrir le catalogue
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
