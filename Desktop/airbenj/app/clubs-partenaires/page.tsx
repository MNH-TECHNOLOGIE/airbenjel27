import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clubs Partenaires",
  description:
    "Découvrez les clubs partenaires d'AIR BENJEL 27 - Nos collaborations avec les équipes sportives.",
};

export default function ClubsPartenairesPage() {
  const partnerProducts = [
    {
      name: "Airbenjel Polo 1",
      slug: "airbenjel-polo-1",
      image:
        "/airbenjel photo produit/club partenaire/WhatsApp Image 2026-02-04 at 17.02.14.jpeg",
    },
    {
      name: "Airbenjel Short 1",
      slug: "airbenjel-short-1",
      image:
        "/airbenjel photo produit/club partenaire/WhatsApp Image 2026-02-04 at 17.02.14d.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      {/* Header Section with Banner */}
      <div className="relative h-[180px] w-full overflow-hidden sm:h-[220px] md:h-[250px] lg:h-[300px]">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary-dark"></div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto w-full max-w-7xl px-3 text-center sm:px-4 md:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Clubs Partenaires
            </h1>
            <p className="mt-2 text-sm text-white/90 sm:mt-3 sm:text-base md:mt-4 md:text-lg">
              Nos collaborations avec les équipes sportives
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-secondary sm:text-3xl md:text-4xl">
              Nos Partenariats
            </h2>
            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              AIR BENJEL 27 est fier de collaborer avec des clubs sportifs,
              fédérations et associations à travers l'Afrique.
            </p>
          </div>

          {/* NZALANG NACIONAL Section */}
          <div className="mb-12 rounded-lg border-2 border-primary/20 bg-primary/5 p-6 sm:p-8">
            <div className="text-center sm:text-left">
              <div className="mb-4 flex items-center justify-center gap-3 sm:justify-start">
                <div className="relative h-8 w-12 overflow-hidden rounded-sm shadow-sm sm:h-9 sm:w-14">
                  <Image
                    src="/flags/flag-guinee-equatoriale.svg"
                    alt="Drapeau de la Guinée équatoriale"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <span className="text-sm font-semibold text-secondary">
                  Guinée équatoriale
                </span>
              </div>
              <h3 className="text-xl font-bold text-secondary sm:text-2xl">
                NZALANG NACIONAL
              </h3>
              <p className="mt-2 text-base font-semibold text-primary sm:text-lg">
                Équipe nationale de Guinée équatoriale
              </p>
              <p className="mt-2 text-base text-gray-700 sm:text-lg">
                Nous sommes fiers d&apos;être le fournisseur officiel des produits
                dérivés de l&apos;équipe nationale de Guinée équatoriale. Nos
                équipements et produits dérivés sont de qualité supérieure.
              </p>
            </div>
          </div>

          {/* Partner Products Section */}
          <div className="mb-12">
            <h3 className="mb-4 text-center text-xl font-bold text-secondary sm:text-2xl">
              Produits Partenaires
            </h3>
            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-2">
              {partnerProducts.map((card) => (
                <div
                  key={card.slug}
                  className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                >
                  <div className="relative aspect-square w-full bg-gray-100">
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 260px, 320px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-4">
                    <p className="text-sm font-semibold text-secondary sm:text-base">
                      {card.name}
                    </p>
                    <div className="mt-auto flex gap-2">
                      <Link
                        href={`/products/${card.slug}`}
                        className="btn-outline-secondary flex-1 text-center text-xs sm:text-sm"
                      >
                        Détails
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Partnerships */}
          <div className="rounded-lg bg-accent px-6 py-8 sm:px-8 sm:py-10">
            <h3 className="mb-4 text-center text-xl font-bold text-secondary sm:text-2xl">
              Rejoignez nos partenaires
            </h3>
            <p className="mb-6 text-center text-base text-gray-700 sm:text-lg">
              AIR BENJEL 27 recherche des partenariats avec des clubs sportifs,
              fédérations et associations à travers l'Afrique.
            </p>
            <div className="mx-auto max-w-2xl">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <h4 className="mb-2 font-semibold text-secondary">Clubs Sportifs</h4>
                  <p className="text-sm text-gray-600">
                    Équipements et produits dérivés pour vos équipes
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <h4 className="mb-2 font-semibold text-secondary">Fédérations</h4>
                  <p className="text-sm text-gray-600">
                    Solutions complètes pour vos compétitions
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <h4 className="mb-2 font-semibold text-secondary">Associations</h4>
                  <p className="text-sm text-gray-600">
                    Partenariats sur mesure pour vos événements
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <h4 className="mb-2 font-semibold text-secondary">Organisations</h4>
                  <p className="text-sm text-gray-600">
                    Accompagnement dans tous vos projets sportifs
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a
                href="/contact"
                className="btn-primary inline-block sm:px-8 sm:py-3 sm:text-base"
              >
                Devenir Partenaire
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
