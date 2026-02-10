import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Ambassador - Bientôt disponible",
  description: "Le programme Brand Ambassador arrive bientôt.",
};

export default function BrandAmbassadorPage() {
  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">

      {/* Coming Soon Section */}
      <section className="py-10 sm:py-14 md:py-18">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-gray-50 p-6 text-center shadow-lg sm:p-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-16 sm:w-16">
              <svg
                className="h-7 w-7 sm:h-8 sm:w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6l4 2M4 12a8 8 0 1116 0 8 8 0 01-16 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
              Bientôt disponible
            </h2>
            <p className="mt-3 text-base text-gray-600 sm:text-lg">
              Le programme Brand Ambassador arrive bientôt. Restez connectés pour
              rejoindre l&apos;équipe officielle AIR BENJEL 27.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm">
                Visibilité
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm">
                Avantages exclusifs
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm">
                Communauté officielle
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/contact"
                className="btn-primary inline-block px-6 py-3 text-sm sm:text-base"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
