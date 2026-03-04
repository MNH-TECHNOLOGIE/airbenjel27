import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recherche",
  description: "Rechercher dans le catalogue AIR BENJEL 27.",
};

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <section className="py-10 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-secondary sm:text-3xl">
            Recherche
          </h1>
          <p className="mt-3 text-gray-600">
            La recherche avancée arrive bientôt.
          </p>
        </div>
      </section>
    </div>
  );
}
