import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { accessories } from "@/data/accessories";

export const metadata: Metadata = {
  title: "Accessoires",
  description: "Accessoires officiels AIR BENJEL 27.",
};

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <section className="py-10 sm:py-14 md:py-18">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-secondary sm:text-3xl md:text-4xl">
              Accessoires
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:text-lg">
              Sélection d&apos;accessoires officiels AIR BENJEL 27
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {accessories.map((item) => (
              <Link
                key={item.slug}
                href={`/accessories/${item.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-44 w-full bg-gray-50">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-semibold text-secondary">{item.name}</p>
                  <p className="mt-1 text-xs text-gray-500">Voir les détails</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
