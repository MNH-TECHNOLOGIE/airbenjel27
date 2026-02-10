import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Accessoires - Bientôt disponible",
  description: "Nos accessoires arrivent bientôt. Restez connectés.",
};

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      {/* Header Section with Banner */}
      <div className="relative h-[180px] w-full overflow-hidden sm:h-[220px] md:h-[250px] lg:h-[300px]">
        <Image
          src="/banner 3.png"
          alt="Accessoires"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto w-full max-w-7xl px-3 text-center sm:px-4 md:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Accessoires
            </h1>
            <p className="mt-2 text-sm text-white/90 sm:mt-3 sm:text-base md:mt-4 md:text-lg">
              Bientôt disponible
            </p>
          </div>
        </div>
      </div>

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
              Nos accessoires officiels arrivent bientôt. Nous préparons une
              sélection premium pour compléter votre style.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm">
                Qualité officielle
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm">
                Designs exclusifs
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm">
                Disponibilité limitée
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
