import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Arbitre",
  description: "Collection d'arbitre AIR BENJEL 27.",
};

export default function ArbitePage() {
  const maillotItems = [
    {
      color: "Jaune",
      image: "/airbenjel photo produit/arbites maillot/jaune (1).png",
    },
    {
      color: "Noir",
      image: "/airbenjel photo produit/arbites maillot/noir.png",
    },
    {
      color: "Orange",
      image: "/airbenjel photo produit/arbites maillot/orange.png",
    },
    {
      color: "Rose",
      image: "/airbenjel photo produit/arbites maillot/rose.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <section className="py-10 sm:py-14 md:py-18">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
              <h2 className="text-xl font-bold text-secondary sm:text-2xl">
                Maillot Arbitre Pro
              </h2>
              <p className="mt-3 text-base text-gray-600">
                Decouvrez la tenue officielle d&apos;arbitre concue pour la performance
                et le confort.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {maillotItems.map((item) => (
                  <div
                    key={item.image}
                    className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                  >
                    <div className="relative h-40 w-full bg-gray-50">
                      <Image
                        src={item.image}
                        alt={`Maillot Arbitre Pro ${item.color}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-sm font-semibold text-secondary">
                        Maillot Arbitre Pro
                      </p>
                      <p className="mt-1 text-xs text-gray-500">{item.color}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
              <h2 className="text-xl font-bold text-secondary sm:text-2xl">
                Survetement Arbitres
              </h2>
              <p className="mt-3 text-base text-gray-600">
                Ensemble complet d&apos;arbitre pour l&apos;avant et l&apos;apres match.
              </p>
              <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
                Bientot disponible
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
