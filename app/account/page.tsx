import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mon compte",
  description: "Espace compte AIR BENJEL 27.",
};

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <section className="py-10 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-secondary sm:text-3xl">
            Mon compte
          </h1>
          <p className="mt-3 text-gray-600">
            Cette section est en cours de mise en place.
          </p>
        </div>
      </section>
    </div>
  );
}
