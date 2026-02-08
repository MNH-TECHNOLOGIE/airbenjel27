import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getAllProducts } from "@/lib/catalog";
import { Product } from "@/data/types";
import ProductSelector from "@/components/catalog/ProductSelector";
import ProductAccordion from "@/components/catalog/ProductAccordion";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
  searchParams?: { color?: string | string[]; lockColor?: string | string[] };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produit non trouvé",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images,
    },
  };
}

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const colorParam = Array.isArray(searchParams?.color)
    ? searchParams?.color[0]
    : searchParams?.color;
  const lockColorParam = Array.isArray(searchParams?.lockColor)
    ? searchParams?.lockColor[0]
    : searchParams?.lockColor;
  const lockColor = lockColorParam === "1" || lockColorParam === "true";

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <div className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100">
              {product.images.length > 0 ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-400">
                  <svg
                    className="h-24 w-24"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.slice(0, 4).map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100 border-2 border-gray-200 cursor-pointer hover:border-primary transition-colors"
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 25vw, 12.5vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Product Name */}
            <div>
              <h1 className="text-2xl font-bold text-secondary sm:text-3xl md:text-4xl lg:text-5xl">
                {product.name}
              </h1>
            </div>

            {/* Product Selector (Size, Color, Audience) */}
            <ProductSelector
              product={product}
              forcedColor={colorParam ?? null}
              lockColor={lockColor}
            />

            {/* Description */}
            <div className="pt-4">
              <p className="text-base leading-relaxed text-gray-700">
                {product.description}
              </p>
            </div>

            {/* Product Details Accordion */}
            <div className="pt-4">
              <ProductAccordion
                items={[
                  {
                    title: "Détails du produit",
                    content: (
                      <ul className="space-y-2">
                        <li>
                          <strong>Genre:</strong> {product.gender}
                        </li>
                        <li>
                          <strong>Stock:</strong> {product.stock} disponibles
                        </li>
                        {product.isCustomizable && (
                          <li>
                            <strong>Personnalisable:</strong> Oui
                          </li>
                        )}
                        {product.sizes.length > 0 && (
                          <li>
                            <strong>Tailles disponibles:</strong> {product.sizes.join(", ")}
                          </li>
                        )}
                      </ul>
                    ),
                  },
                  {
                    title: "Conseils d'entretien",
                    content:
                      "Lavez à l'envers à 30 °C. Ne pas utiliser d'eau de Javel. Repasser à basse température. Ne pas sécher en machine.",
                  },
                ]}
              />
            </div>

            {/* Official Product Badge */}
            <div className="flex items-center gap-2 pt-4">
              <input
                type="checkbox"
                checked
                readOnly
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-600">
                Produits officiels AIR BENJEL 27
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
