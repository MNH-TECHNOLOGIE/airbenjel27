import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions et CGV",
  description: "Mentions legales et conditions generales de vente",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <section className="py-10 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-secondary sm:text-3xl">
            Mentions legales et CGV
          </h1>
          <p className="mt-3 text-gray-600">
            Cette page est un placeholder provisoire en attendant la version
            juridique finale.
          </p>

          <div className="mt-8 space-y-6">
            <section className="rounded-lg border border-gray-200 p-5">
              <h2 className="text-lg font-semibold text-secondary">
                Mentions legales
              </h2>
              <p className="mt-2 text-sm text-gray-700">
                Informations editeur, hebergeur, contact legal et politique de
                responsabilite a completer.
              </p>
            </section>

            <section className="rounded-lg border border-gray-200 p-5">
              <h2 className="text-lg font-semibold text-secondary">
                Conditions generales de vente
              </h2>
              <p className="mt-2 text-sm text-gray-700">
                Conditions de commande, paiement, livraison, retours et
                remboursement a completer.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
