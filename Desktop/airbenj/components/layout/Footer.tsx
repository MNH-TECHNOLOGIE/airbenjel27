import Link from "next/link";

const shopLinks = [
  { name: "Football", href: "/football" },
  { name: "Basketball", href: "/basketball" },
  { name: "Maillots", href: "/kits" },
  { name: "Vêtements", href: "/apparel" },
  { name: "Accessoires", href: "/accessories" },
  { name: "Maison & Lifestyle", href: "/home-lifestyle" },
  { name: "Collections", href: "/collections" },
  { name: "Cadeaux", href: "/gifts" },
];

const helpLinks = [
  { name: "Comment acheter", href: "/help/how-to-buy" },
  { name: "Modes de paiement", href: "/help/payment-methods" },
  { name: "Livraison", href: "/help/shipping" },
  { name: "Retours", href: "/help/returns" },
  { name: "Contact", href: "/contact" },
];

const aboutLinks = [
  { name: "À propos", href: "/about" },
  { name: "Magasins", href: "/stores" },
  { name: "Conditions générales", href: "/legal/terms" },
  { name: "Politique de confidentialité", href: "/legal/privacy" },
  { name: "Cookies", href: "/legal/cookies" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 md:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {/* Shop Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Boutique
            </h3>
            <ul className="mt-4 space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Aide
            </h3>
            <ul className="mt-4 space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
              À propos
            </h3>
            <ul className="mt-4 space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Inscrivez-vous pour recevoir nos dernières offres et nouveautés.
            </p>
            <form className="mt-4">
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:px-4"
                />
                <button
                  type="submit"
                  className="btn-primary w-full text-sm sm:w-auto"
                >
                  S&apos;abonner
                </button>
              </div>
            </form>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-primary"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-primary"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-6 sm:mt-12 sm:pt-8">
          <p className="text-center text-xs text-gray-600 sm:text-sm">
            © {new Date().getFullYear()} AIR BENJEL 27. Tous droits réservés.
          </p>
          <p className="mt-2 text-center text-xs text-gray-500">
            Équipementier sportif - Conception, fabrication & commercialisation
          </p>
        </div>
      </div>
    </footer>
  );
}
