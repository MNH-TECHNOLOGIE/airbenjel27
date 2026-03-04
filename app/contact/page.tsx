import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AIR BENJEL 27",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <section className="py-10 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-secondary sm:text-3xl">
            Contact
          </h1>
          <p className="mt-3 text-gray-600">
            Cette page est un placeholder provisoire. Ecrivez-nous pour toute
            demande commerciale, partenariat ou support client.
          </p>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
            Email: contact@airbenjel27.com
            <br />
            Telephone: +212 000 000 000
          </div>
        </div>
      </section>
    </div>
  );
}
