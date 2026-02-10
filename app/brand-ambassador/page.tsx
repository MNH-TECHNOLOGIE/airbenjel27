import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brand Ambassador",
  description: "Devenez brand ambassador officiel AIR BENJEL 27.",
};

export default function BrandAmbassadorPage() {
  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      {/* Header Section with Banner */}
      <div className="relative h-[180px] w-full overflow-hidden sm:h-[220px] md:h-[250px] lg:h-[300px]">
        <Image
          src="/banner 1.png"
          alt="Brand Ambassador"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto w-full max-w-7xl px-3 text-center sm:px-4 md:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Brand Ambassador
            </h1>
            <p className="mt-2 text-sm text-white/90 sm:mt-3 sm:text-base md:mt-4 md:text-lg">
              Devenez ambassadeur officiel AIR BENJEL 27
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-10 sm:py-14 md:py-18">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
              Rejoignez le programme officiel
            </h2>
            <p className="mt-3 text-base text-gray-600 sm:text-lg">
              Partagez la passion, representez la marque et participez a la
              croissance de la communaute AIR BENJEL 27.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-secondary sm:text-lg">
                Visibilite
              </h3>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Mettez en avant votre image avec nos campagnes et contenus.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-secondary sm:text-lg">
                Produits exclusifs
              </h3>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Acces prioritaire aux sorties et collections speciales.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-secondary sm:text-lg">
                Evenements
              </h3>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Invitations aux evenements et activations de la marque.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:mt-12 sm:p-8">
            <h3 className="text-xl font-bold text-secondary sm:text-2xl">
              Comment postuler
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-white p-4 text-sm text-gray-700 shadow-sm">
                1. Envoyez votre profil et vos reseaux.
              </div>
              <div className="rounded-xl bg-white p-4 text-sm text-gray-700 shadow-sm">
                2. Expliquez votre motivation et vos objectifs.
              </div>
              <div className="rounded-xl bg-white p-4 text-sm text-gray-700 shadow-sm">
                3. Nous vous recontactons rapidement.
              </div>
            </div>
            <div className="mt-6">
              <a
                href="/contact"
                className="btn-primary inline-block px-6 py-3 text-sm sm:text-base"
              >
                Postuler
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
