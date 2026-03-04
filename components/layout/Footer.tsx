import Link from "next/link";

const categoryLinks = [
  { name: "Maillots", href: "/kits" },
  { name: "Vêtements", href: "/apparel" },
  { name: "Accessoires", href: "/accessories" },
  { name: "Sport militaire", href: "/sport-militaire" },
  { name: "Promotion", href: "/promotion" },
  { name: "Catalogue", href: "/collections" },
  { name: "Cadeaux", href: "/gifts" },
  { name: "Arbitre", href: "/arbitre" },
];

const mainLinks = [
  { name: "Clubs partenaires", href: "/clubs" },
  { name: "Brand Ambassadeur", href: "/brand" },
  { name: "Olympic 2026", href: "/olympic-2026" },
  { name: "À propos", href: "/a-propos" },
];

const infoLinks = [
  { name: "Contact", href: "/contact" },
  { name: "Mentions légales et CGV", href: "/legal" },
  { name: "Panier", href: "/cart" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white" aria-label="Pied de page">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <section aria-labelledby="footer-categories">
            <h2
              id="footer-categories"
              className="text-sm font-semibold uppercase tracking-wider text-secondary"
            >
              Catégories
            </h2>
            <ul className="mt-4 space-y-3">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-navigation">
            <h2
              id="footer-navigation"
              className="text-sm font-semibold uppercase tracking-wider text-secondary"
            >
              Navigation
            </h2>
            <ul className="mt-4 space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-information">
            <h2
              id="footer-information"
              className="text-sm font-semibold uppercase tracking-wider text-secondary"
            >
              Information
            </h2>
            <ul className="mt-4 space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-newsletter">
            <h2
              id="footer-newsletter"
              className="text-sm font-semibold uppercase tracking-wider text-secondary"
            >
              Newsletter
            </h2>
            <p className="mt-4 text-sm text-gray-600">
              Inscrivez-vous pour recevoir nos offres et nouveautés.
            </p>
            <form className="mt-4">
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-4"
                />
                <button
                  type="submit"
                  className="btn-primary w-full text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
                >
                  S&apos;abonner
                </button>
              </div>
            </form>
          </section>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 sm:mt-12 sm:pt-8">
          <p className="text-center text-xs text-gray-600 sm:text-sm">
            © {new Date().getFullYear()} AIR BENJEL 27. Tous droits réservés.
          </p>
          <p className="mt-2 text-center text-xs text-gray-500">
            Équipementier sportif - Conception, fabrication et commercialisation
          </p>
        </div>
      </div>
    </footer>
  );
}
