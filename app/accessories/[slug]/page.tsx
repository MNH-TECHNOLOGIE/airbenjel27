import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { accessories } from "@/data/accessories";

interface AccessoryPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return accessories.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: AccessoryPageProps): Metadata {
  const item = accessories.find((entry) => entry.slug === params.slug);
  if (!item) {
    return { title: "Accessoire non trouve" };
  }
  return {
    title: item.name,
    description: "Accessoire officiel AIR BENJEL 27.",
  };
}

export default function AccessoryDetailPage({ params }: AccessoryPageProps) {
  const item = accessories.find((entry) => entry.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <section className="py-10 sm:py-14 md:py-18">
        <div className="mx-auto w-full max-w-5xl px-3 sm:px-4 md:px-6 lg:px-8">
          <Link
            href="/accessories"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary"
          >
            <span aria-hidden="true">←</span>
            Retour aux accessoires
          </Link>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="relative h-72 w-full sm:h-96">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold text-secondary sm:text-3xl">
                {item.name}
              </h1>
              <p className="mt-3 text-base text-gray-600">
                Accessoire officiel AIR BENJEL 27.
              </p>
              <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-600">
                Disponibilite bientot. Contactez-nous pour reserver.
              </div>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="btn-primary inline-block px-6 py-3 text-sm sm:text-base"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}