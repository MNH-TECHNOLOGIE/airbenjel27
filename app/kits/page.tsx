import type { Metadata } from "next";
import Link from "next/link";
import FilterableProductGrid from "@/components/catalog/FilterableProductGrid";
import { buttonClasses } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { getProductsByCategory } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Maillots",
  description: "Decouvrez notre collection de maillots officiels",
};

export default function KitsPage() {
  const footballProducts = getProductsByCategory("kits") || [];
  const filters = [
    { label: "Domicile", value: "home-kit" },
    { label: "Exterieur", value: "away-kit" },
    { label: "Third", value: "third-kit" },
    { label: "Edition limitee", value: "limited" },
    { label: "Premium", value: "premium" },
  ];

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <Section spacingClassName="py-8 sm:py-12 md:py-16">
        <div className="scroll-mt-24">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-secondary sm:text-lg">Football</h3>
            <Link
              href="/football"
              className={buttonClasses({
                variant: "ghost",
                size: "sm",
                className: "border border-gray-300",
              })}
            >
              Voir tout
            </Link>
          </div>
          <FilterableProductGrid products={footballProducts} filters={filters} />
        </div>
      </Section>
    </div>
  );
}
