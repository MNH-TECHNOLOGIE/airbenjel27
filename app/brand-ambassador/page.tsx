import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brand Ambassador - Bouchra Karboubi",
  description:
    "Biographie de Bouchra Karboubi, arbitre internationale marocaine de football.",
};

export default function BrandAmbassadorPage() {
  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <section className="py-8 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-8">
            <h1 className="text-2xl font-bold text-secondary sm:text-3xl">
              BOUCHRA KARBOUBI
            </h1>
            <p className="mt-2 text-base font-semibold text-primary sm:text-lg">
              Arbitre internationale marocaine de football
            </p>
            <p className="mt-2 text-base text-gray-700 sm:text-lg">
              La trajectoire inspirante d&apos;une pionni&egrave;re qui a r&eacute;volutionn&eacute;
              l&apos;arbitrage f&eacute;minin en Afrique.
            </p>

            <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/bouchra.jpeg"
                  alt="Photo officielle de M. Jean Francis BELINGA BENJEL et Bouchra Karboubi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 260px"
                />
              </div>
              <p className="mt-3 text-center text-sm font-semibold text-secondary sm:text-base">
                M. Jean Francis BELINGA BENJEL et Bouchra Karboubi
              </p>
            </div>

            <div className="mt-8 space-y-4 text-sm text-gray-800 sm:text-base">
              <p>
                N&eacute;e le 15 mai 1987 &agrave; Taza, dans le nord-est du Maroc,
                Bouchra Karboubi est la derni&egrave;re d&apos;une fratrie de cinq enfants.
                Dans la vie active, elle est &eacute;galement inspectrice principale de police.
                Femme pleinement &eacute;panouie et m&egrave;re d&apos;une petite fille de 7 ans,
                elle jongle avec brio entre responsabilit&eacute;s professionnelles et vie familiale.
              </p>
              <p>
                Passionn&eacute;e de football d&egrave;s son plus jeune &acirc;ge,
                elle jouait dans une &eacute;quipe locale avant de s&apos;int&eacute;resser
                &agrave; l&apos;arbitrage, &agrave; l&apos;ouverture d&apos;une &eacute;cole d&eacute;di&eacute;e
                dans sa ville en 2001. Ni les pr&eacute;jug&eacute;s, ni la pression familiale,
                ni les r&eacute;ticences initiales de son entourage ne l&apos;ont dissuad&eacute;e
                de poursuivre son r&ecirc;ve de devenir arbitre de football.
                Pers&eacute;v&eacute;rante, elle quitte sa ville natale pour Mekn&egrave;s,
                voisine de F&egrave;s, afin de parachever sa formation.
              </p>
              <p>
                Son r&ecirc;ve commence &agrave; se concr&eacute;tiser en 2007,
                lorsque le Maroc cr&eacute;e un championnat national f&eacute;minin de football.
                &Agrave; 19 ans, elle est plong&eacute;e dans le grand bain et commence &agrave; arbitrer
                en premi&egrave;re et en deuxi&egrave;me divisions f&eacute;minines marocaines.
                Sur le terrain, elle incarne l&apos;autorit&eacute;, l&apos;assurance et
                une confiance en soi in&eacute;branlable. En 2016, Karboubi est retenue
                sur la liste des arbitres internationaux de la F&eacute;d&eacute;ration
                Internationale de Football Association (FIFA), ce qui lui ouvre
                les portes des comp&eacute;titions internationales.
              </p>
              <p>
                En 2018, la pionni&egrave;re participe &agrave; l&apos;arbitrage de sa premi&egrave;re
                comp&eacute;tition continentale, avec un match du tournoi final de la
                Coupe d&apos;Afrique des Nations f&eacute;minine, organis&eacute;e au Ghana,
                opposant la Zambie &agrave; la Guin&eacute;e &eacute;quatoriale.
                En 2020, elle devient la deuxi&egrave;me femme &agrave; diriger un match
                de premi&egrave;re division du championnat masculin au Maroc (Botola Pro1),
                apr&egrave;s Khadija Rezzag en 2004. Elle est ensuite d&eacute;sign&eacute;e membre
                du staff arbitral lors de la finale de la CAN 2022, en f&eacute;vrier,
                entre le S&eacute;n&eacute;gal et l&apos;&Eacute;gypte, au Cameroun,
                et arbitre &eacute;galement la finale de la Coupe du Tr&ocirc;ne.
              </p>
              <p>
                Au terme d&apos;une s&eacute;lection extr&ecirc;mement rigoureuse,
                la native de Taza est retenue parmi les arbitres de la CAN 2023.
                &Agrave; cette occasion, le 22 janvier 2024, elle devient la premi&egrave;re femme
                nord-africaine et du monde arabe &agrave; diriger une rencontre de CAN masculine,
                en &eacute;tant au sifflet du match Guin&eacute;e-Bissau - Nigeria,
                comptant pour la 3e journ&eacute;e de la phase de groupes.
                Elle est ensuite 4e arbitre lors de la finale opposant
                la C&ocirc;te d&apos;Ivoire au Nigeria. Elle participe aussi &agrave; d&apos;autres
                tournois majeurs, dont la Coupe du monde f&eacute;minine de la FIFA 2023,
                en Australie et en Nouvelle-Z&eacute;lande.
                Elle a offici&eacute; comme arbitre assistante vid&eacute;o (VAR)
                lors de la CAN masculine 2021 au Cameroun et aux Jeux olympiques de Paris 2024,
                o&ugrave; elle a arbitr&eacute; une demi-finale.
              </p>
              <p>
                &Agrave; titre de r&eacute;compense pour ses brillantes prestations,
                elle a notamment &eacute;t&eacute; :
                meilleure arbitre f&eacute;minine d&apos;Afrique lors des CAF Awards 2024
                &agrave; Marrakech ; class&eacute;e 5e meilleure arbitre f&eacute;minine au monde
                selon le classement IFFHS 2024 ; laur&eacute;ate du prix Mohammed bin Rashid
                Al Maktoum de la cr&eacute;ativit&eacute; en tant que meilleure arbitre arabe.
              </p>
              <p>
                Dans le cadre de la 7e journ&eacute;e des &eacute;liminatoires de la Coupe du monde
                2026 (Etats-Unis, Canada, Mexique), elle a dirig&eacute; avec maestria
                la rencontre C&ocirc;te d&apos;Ivoire - Burundi du 5 septembre 2025,
                au stade F&eacute;lix Houphou&euml;t-Boigny d&apos;Abidjan.
                Bouchra Karboubi a ainsi &eacute;tabli un nouveau record,
                en devenant la premi&egrave;re arbitre africaine &agrave; officier un match
                de qualification pour une Coupe du monde masculine.
              </p>
              <p>
                Elle est en lice pour la Coupe du monde 2026 et la Coupe du monde
                f&eacute;minine 2027, et r&ecirc;ve d&apos;en arbitrer la finale.
                Pour elle : &laquo; Ce serait une cons&eacute;cration. &raquo;
                Fid&egrave;le aux valeurs d&apos;int&eacute;grit&eacute;, de reconnaissance
                et de d&eacute;termination qu&apos;elle incarne, la Marocaine s&apos;est confi&eacute;e
                en ces termes : &laquo; Mon ambition est d&apos;honorer la confiance
                que la CAF nous accorde, de repr&eacute;senter dignement ma f&eacute;d&eacute;ration,
                mon pays et ma conf&eacute;d&eacute;ration, et de continuer &agrave; montrer
                que les femmes ont toute leur place dans l&apos;arbitrage au plus haut niveau. &raquo;
              </p>
              <p>
                Bouchra Karboubi est largement reconnue non seulement pour ses
                comp&eacute;tences techniques, mais aussi pour avoir bris&eacute;
                des barri&egrave;res culturelles et professionnelles dans un domaine
                traditionnellement domin&eacute; par les hommes,
                particuli&egrave;rement dans le monde arabe et en Afrique.
                Son parcours &eacute;logieux est souvent cit&eacute; comme une source
                d&apos;inspiration pour les jeunes arbitres, en particulier les femmes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
