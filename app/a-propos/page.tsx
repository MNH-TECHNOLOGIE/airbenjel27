import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "AIR BENJEL 27 - Équipementier sportif et fournisseur officiel des produits dérivés de l'équipe nationale de Guinée équatoriale (NZALANG NACIONAL). Spécialisé dans la conception, la fabrication et la commercialisation d'articles de sport.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-12 sm:pt-14">
      {/* Hero Section - Modern & Clean */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-primary py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-block rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-semibold text-white">À propos de nous</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              AIR BENJEL 27
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl">
              Une marque africaine d&apos;authentiques vêtements de sport, basée à Casablanca, au Maroc.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <div className="flex max-w-3xl items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-sm font-semibold leading-relaxed text-white">
                  {"Fournisseur officiel des produits dérivés de l'équipe nationale de Guinée équatoriale"}
                </span>
              </div>
              <div className="text-sm text-white/80">NZALANG NACIONAL</div>
            </div>
          </div>
        </div>
      </section>

      {/* Biographie Section - Modern Card Design */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary sm:text-4xl md:text-5xl">
              Biographie
            </h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
          </div>

          {/* Founders Card - Modern Layout */}
          <div className="mb-16 overflow-hidden rounded-2xl bg-white shadow-xl transition-shadow hover:shadow-2xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-96 bg-gradient-to-br from-primary/10 to-secondary/10 md:h-auto">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative h-80 w-80 overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="/image (30).png"
                      alt="Fondateurs de AIR BENJEL 27 - Jean Francis BELINGA BENJEL et Samuel BENJEL E. BELINGA"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="mb-4 inline-block w-fit rounded-full bg-primary/10 px-4 py-1.5">
                  <span className="text-sm font-semibold text-primary">Fondateurs</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-secondary sm:text-3xl">
                  Une famille passionnée de football
                </h3>
                <div className="mb-6 space-y-2">
                  <p className="text-lg font-semibold text-gray-900">
                    Jean Francis BELINGA BENJEL
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    Samuel BENJEL E. BELINGA
                  </p>
                </div>
                <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                  Fondée en 2025, AIR BENJEL 27 a pour mission de promouvoir l&apos;individualité et l&apos;originalité grâce à des technologies et des designs de pointe pour les clubs et athlètes.
                </p>
              </div>
            </div>
          </div>

          {/* CEO Photos Section */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-secondary sm:text-3xl">
                Direction générale
              </h3>
              <p className="mt-2 text-base text-gray-600 sm:text-lg">
                Les dirigeants d&apos;AIR BENJEL 27
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  name: "Jean Francis BELINGA BENJEL",
                  role: "CEO & Fondateur",
                  image: "/1.jpeg",
                },
              ].map((leader) => (
                <article
                  key={leader.name}
                  className="overflow-hidden rounded-[28px] border border-white/70 bg-white/80 shadow-[0_20px_50px_rgba(43,45,66,0.12)] backdrop-blur-sm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-5 sm:p-7">
                      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-gray-100 p-2 shadow-lg">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          width={736}
                          height={1600}
                          className="h-auto w-full rounded-xl object-contain"
                          sizes="(max-width: 768px) 100vw, 360px"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
                      <div className="mb-4 inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5">
                        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                          Direction générale
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-500">AIR BENJEL 27</p>
                      <p className="mt-3 text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
                        {leader.name}
                      </p>
                      <p className="mt-2 text-base font-medium text-gray-600">{leader.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-secondary">Notre Mission</h3>
              <p className="leading-relaxed text-gray-600">
                Rendre accessibles les vêtements de sport de haute qualité, tout en offrant une large gamme de services personnalisés, notamment des designs uniques et la production de produits dérivés, grâce à des technologies innovantes et des installations ultramodernes.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-secondary">Notre Vision</h3>
              <p className="leading-relaxed text-gray-600">
                Produire et fournir une gamme de vêtements pour les athlètes professionnels, les fédérations sportives, ainsi que les clubs amateurs et toutes autres organisations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Création Story Section - Timeline Style */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary sm:text-4xl md:text-5xl">
              Création d&apos;AIR BENJEL 27
            </h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {/* Story Card 1 */}
              <div className="relative rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 shadow-lg">
                <div className="absolute -left-4 top-8 h-8 w-8 rounded-full bg-primary sm:-left-6"></div>
                <h3 className="mb-4 text-xl font-bold text-secondary sm:text-2xl">
                  Une révolution panafricaine
                </h3>
                <p className="leading-relaxed text-gray-700">
                  <strong>Jean Francis BELINGA BENJEL</strong> et <strong>Samuel BENJEL E. BELINGA</strong> ont révolutionné l&apos;industrie du vêtement de sport en Afrique du Nord, du Centre et de l&apos;Ouest. La famille a identifié un manque sur le marché des répliques de maillots de haute qualité destinées aux clubs sportifs, fédérations et associations sportives.
                </p>
              </div>

              {/* Story Card 2 */}
              <div className="relative rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 shadow-lg">
                <div className="absolute -left-4 top-8 h-8 w-8 rounded-full bg-secondary sm:-left-6"></div>
                <h3 className="mb-4 text-xl font-bold text-secondary sm:text-2xl">
                  La naissance d&apos;une marque
                </h3>
                <p className="leading-relaxed text-gray-700">
                  C&apos;est ainsi que la famille a décidé de répondre à ce besoin en créant sa propre marque, <strong>AIR BENJEL 27</strong>, en 2025, avec l&apos;ambition de proposer des vêtements non seulement esthétiques, mais aussi fonctionnels et durables.
                </p>
              </div>

              {/* Story Card 3 */}
              <div className="relative rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 shadow-lg">
                <div className="absolute -left-4 top-8 h-8 w-8 rounded-full bg-primary sm:-left-6"></div>
                <h3 className="mb-4 text-xl font-bold text-secondary sm:text-2xl">
                  Comprendre les besoins
                </h3>
                <p className="leading-relaxed text-gray-700">
                  Dès le départ, les fondateurs ont pris conscience des difficultés rencontrées par les fans de football pour se procurer des répliques de maillots de leurs équipes favorites, en raison de la disponibilité limitée, de la mauvaise qualité et du manque d&apos;options de personnalisation.
                </p>
              </div>

              {/* Story Card 4 */}
              <div className="relative rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 shadow-lg">
                <div className="absolute -left-4 top-8 h-8 w-8 rounded-full bg-secondary sm:-left-6"></div>
                <h3 className="mb-4 text-xl font-bold text-secondary sm:text-2xl">
                  Innovation et durabilité
                </h3>
                <p className="leading-relaxed text-gray-700">
                  La marque se distingue par l&apos;utilisation de matériaux écologiques et novateurs, conçus pour améliorer les performances physiques. Cette frustration a conduit le père et le fils à réfléchir à la création d&apos;une marque de sport locale qui puisse répondre aux besoins spécifiques des passionnés de sport africains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Psaume 27 Section - Elegant Design */}
      <section className="bg-gradient-to-br from-secondary to-primary py-16 sm:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-lg sm:p-12">
            <div className="mb-6 text-center">
              <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5">
                <span className="text-sm font-semibold text-white">Inspiration</span>
              </div>
              <h3 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
                (27) tiré du Psaume 27,1
              </h3>
            </div>
            <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
              <p className="text-center text-lg italic leading-relaxed text-white sm:text-xl">
                L&apos;Éternel est ma lumière et mon salut :<br />
                <span className="font-semibold">De qui aurai-je peur ?</span>
                <br /><br />
                L&apos;Éternel est le soutien de ma vie :<br />
                <span className="font-semibold">Qui devrais-je redouter ?</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partenariat Section - Highlight */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 p-8 shadow-xl sm:p-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px,1fr] md:items-center">
              <div className="flex items-center justify-center md:justify-start">
                <div className="relative aspect-[4/3] w-40 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm sm:w-48 md:w-52">
                  <Image
                    src="/club partenaire.jpeg"
                    alt="Club partenaire AIR BENJEL 27"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 192px, 208px"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-block w-fit rounded-full bg-primary px-4 py-1.5">
                  <span className="text-sm font-semibold text-white">Partenariat officiel</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-secondary sm:text-3xl">
                  NZALANG NACIONAL
                </h3>
                <p className="mb-4 text-lg font-semibold text-primary">
                  Équipe nationale de Guinée équatoriale
                </p>
                <p className="leading-relaxed text-gray-700">
                  Nous sommes fiers d&apos;être le fournisseur officiel de l&apos;équipe nationale de Guinée équatoriale, en fournissant des équipements et produits dérivés de qualité supérieure pour soutenir les performances de nos athlètes sur la scène internationale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section - Modern Grid */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary sm:text-4xl md:text-5xl">
              Nos activités
            </h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
            <p className="mt-4 text-lg text-gray-600">
              Des services complets pour répondre à tous vos besoins sportifs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "📋", title: "Conception et fabrication", desc: "Articles de sport de qualité supérieure répondant aux standards internationaux" },
              { icon: "🛒", title: "Commercialisation", desc: "Équipements, articles et accessoires de sport et de mode" },
              { icon: "🏗️", title: "Construction de sites sportifs", desc: "Aménagement selon les normes internationales" },
              { icon: "💼", title: "Consulting sportif", desc: "Conseil et accompagnement pour professionnels et organisations" },
              { icon: "🌐", title: "Négoce international", desc: "Import et export d'équipements sportifs à l'échelle mondiale" },
              { icon: "📈", title: "Marketing & services", desc: "Représentation commerciale et prestations de services" },
            ].map((activity, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4 text-4xl">{activity.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-secondary">{activity.title}</h3>
                <p className="text-gray-600">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary to-primary py-16 sm:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Intéressé par nos services ?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Contactez-nous pour discuter de vos besoins en équipements sportifs
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-secondary transition-all hover:scale-105 hover:shadow-xl"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </div>
  );
}
