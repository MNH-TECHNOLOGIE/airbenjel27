import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arbitre",
  description: "Collection d'arbitre AIR BENJEL 27.",
};

export default function ArbitePage() {
  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      {/* Sections */}
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
              <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
                Bientot disponible
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
