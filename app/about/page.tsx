import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "AIR BENJEL 27 - Équipementier sportif et fournisseur officiel des produits dérivés de l'équipe nationale de Guinée Équatoriale (NZALANG NACIONAL) 🇬🇶. Spécialisé dans la conception, fabrication et commercialisation d'articles de sport.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-secondary to-secondary-dark py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              AIR BENJEL 27
            </h1>
            <p className="mt-4 text-xl text-white/90 sm:text-2xl">
              Équipementier Sportif
            </p>
            {/* Badge Partenaire Officiel */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-6 py-3 backdrop-blur-sm">
              <span className="text-2xl">🇬🇶</span>
              <span className="text-sm font-semibold text-white sm:text-base">
                Fournisseur Officiel - NZALANG NACIONAL
              </span>
            </div>
            <p className="mt-3 text-sm text-white/80 sm:text-base">
              Équipe Nationale de Guinée Équatoriale
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Company Description */}
        <section className="mb-12 sm:mb-16">
          <div className="prose prose-lg mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-secondary sm:text-4xl">
              Qui sommes-nous ?
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-700 sm:text-lg">
              <strong>AIR BENJEL 27</strong> est un équipementier sportif de référence,
              spécialisé dans la conception, la fabrication et la commercialisation
              d&apos;articles de sport de haute qualité. Notre engagement est de fournir
              des équipements, articles et accessoires de sport qui répondent aux besoins
              des athlètes professionnels comme des amateurs passionnés.
            </p>
            
            {/* Partenariat Officiel */}
            <div className="mt-8 rounded-lg border-2 border-primary/20 bg-primary/5 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="text-4xl">🇬🇶</span>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-secondary sm:text-2xl">
                    Partenaire Officiel
                  </h3>
                  <p className="mb-3 text-base font-semibold text-primary sm:text-lg">
                    Fournisseur officiel des produits dérivés de l&apos;équipe nationale de Guinée Équatoriale
                  </p>
                  <p className="mb-2 text-base text-gray-700">
                    <strong>NZALANG NACIONAL</strong> 🇬🇶
                  </p>
                  <p className="text-sm text-gray-600 sm:text-base">
                    Nous sommes fiers d&apos;être le fournisseur officiel de l&apos;équipe nationale
                    de Guinée Équatoriale, fournissant des équipements et produits dérivés de
                    qualité supérieure pour soutenir les performances de nos athlètes sur la
                    scène internationale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Activities */}
        <section className="mb-12 sm:mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-secondary sm:text-4xl">
            Nos Activités Principales
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-secondary">
                Conception & Fabrication
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Conception et fabrication d&apos;articles de sport de qualité supérieure,
                répondant aux standards internationaux.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-secondary">
                Commercialisation
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Commercialisation d&apos;équipements, articles et accessoires de sport,
                ainsi que de vêtements et accessoires de mode.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-secondary">
                Construction de Sites Sportifs
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Construction et aménagement de sites sportifs selon les normes
                internationales.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-secondary">
                Consulting de Sport
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Services de conseil et d&apos;accompagnement pour les professionnels du
                sport et les organisations sportives.
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-secondary">
                Négoce International
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Import et export d&apos;équipements sportifs à l&apos;échelle internationale,
                avec un réseau de partenaires de confiance.
              </p>
            </div>

            {/* Card 6 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-secondary">
                Marketing & Services
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Représentation commerciale, marketing et prestations de services pour
                accompagner vos projets sportifs.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="rounded-lg bg-accent px-6 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-secondary sm:text-4xl">
              Notre Engagement
            </h2>
            <p className="mb-6 text-base leading-7 text-gray-700 sm:text-lg">
              Chez <strong>AIR BENJEL 27</strong>, nous nous engageons à fournir des
              produits et services de la plus haute qualité. Notre expertise couvre
              l&apos;ensemble de la chaîne de valeur, de la conception à la
              commercialisation, en passant par la fabrication et le consulting. Nous
              sommes fiers de contribuer au développement du sport à travers nos
              équipements innovants et nos services professionnels.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 text-3xl">🏆</div>
                <h3 className="mb-2 text-lg font-semibold text-secondary">
                  Qualité Premium
                </h3>
                <p className="text-sm text-gray-600">
                  Standards internationaux pour tous nos produits
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 text-3xl">🌍</div>
                <h3 className="mb-2 text-lg font-semibold text-secondary">
                  Portée Internationale
                </h3>
                <p className="text-sm text-gray-600">
                  Présence mondiale avec import-export
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 text-3xl">🤝</div>
                <h3 className="mb-2 text-lg font-semibold text-secondary">
                  Partenariats Stratégiques
                </h3>
                <p className="text-sm text-gray-600">
                  Collaboration avec équipes nationales et clubs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="my-12 sm:my-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-secondary sm:text-4xl">
              Notre Expertise
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-semibold text-secondary">
                  🏗️ Infrastructure Sportive
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  Conception et construction de sites sportifs selon les normes
                  internationales. Nous réalisons des projets complets d&apos;infrastructure
                  sportive pour répondre aux besoins des professionnels et des amateurs.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-semibold text-secondary">
                  👕 Vêtements & Accessoires
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  Conception et fabrication de vêtements de sport et accessoires de mode.
                  Nos produits allient performance, confort et style pour répondre à tous
                  les besoins.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-semibold text-secondary">
                  🎯 Consulting Sportif
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  Services de conseil et d&apos;accompagnement pour les organisations
                  sportives, clubs et fédérations. Notre expertise couvre la stratégie,
                  le marketing et le développement sportif.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-semibold text-secondary">
                  🌐 Commerce International
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  Import et export d&apos;équipements sportifs à l&apos;échelle mondiale.
                  Nous disposons d&apos;un réseau de partenaires de confiance pour faciliter
                  vos échanges internationaux.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="my-12 rounded-lg bg-secondary px-6 py-12 text-white sm:px-8 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">
              Informations Complémentaires
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 text-xl font-semibold">📋 Activités</h3>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>• Conception & Fabrication</li>
                  <li>• Commercialisation</li>
                  <li>• Construction de Sites Sportifs</li>
                  <li>• Consulting de Sport</li>
                  <li>• Négoce International</li>
                  <li>• Représentation Commerciale</li>
                  <li>• Marketing & Services</li>
                  <li>• Import - Export</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold">🎯 Domaines d&apos;Expertise</h3>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>• Équipements Sportifs</li>
                  <li>• Articles & Accessoires</li>
                  <li>• Vêtements de Sport</li>
                  <li>• Accessoires de Mode</li>
                  <li>• Infrastructure Sportive</li>
                  <li>• Produits Dérivés</li>
                  <li>• Commerce Général</li>
                  <li>• Prestations de Services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-12 text-center sm:mt-16">
          <h2 className="mb-4 text-2xl font-bold text-secondary sm:text-3xl">
            Intéressé par nos services ?
          </h2>
          <p className="mb-6 text-gray-600">
            Contactez-nous pour discuter de vos besoins en équipements sportifs
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block sm:px-10 sm:py-4 sm:text-lg"
          >
            Nous contacter
          </a>
        </section>
      </div>
    </div>
  );
}

