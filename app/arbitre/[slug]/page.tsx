import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { arbitreProducts } from "@/data/arbitres";
import { buttonClasses } from "@/components/ui/Button";

interface ArbitreDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return arbitreProducts.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: ArbitreDetailPageProps): Metadata {
  const item = arbitreProducts.find((entry) => entry.slug === params.slug);
  if (!item) {
    return { title: "Produit arbitre non trouve" };
  }

  return {
    title: item.name,
    description: item.description,
  };
}

export default function ArbitreDetailPage({ params }: ArbitreDetailPageProps) {
  const item = arbitreProducts.find((entry) => entry.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <section className="py-10 sm:py-14">
        <div className="mx-auto w-full max-w-5xl px-3 sm:px-4 md:px-6 lg:px-8">
          <Link
            href="/arbitre"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary"
          >
            <span aria-hidden="true">←</span>
            Retour a la collection Arbitres
          </Link>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold text-secondary sm:text-3xl">{item.name}</h1>
              <p className="mt-3 text-base text-gray-600">{item.description}</p>
              <p className="mt-4 text-sm font-semibold text-secondary">
                Prix: {item.price.toLocaleString("fr-FR")} MAD
              </p>
              <p className="mt-1 text-sm text-gray-600">Stock: {item.stock}</p>
              <p className="mt-1 text-sm text-gray-600">
                Tailles: {item.sizes.length > 0 ? item.sizes.join(", ") : "—"}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className={buttonClasses({ variant: "primary", size: "md" })}
                >
                  Acheter
                </Link>
                <Link
                  href="/arbitre"
                  className={buttonClasses({
                    variant: "ghost",
                    size: "md",
                    className: "border border-gray-300",
                  })}
                >
                  Voir d&apos;autres produits
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
