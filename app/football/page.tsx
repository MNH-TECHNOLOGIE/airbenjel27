import type { Metadata } from "next";
import FilterableProductGrid from "@/components/catalog/FilterableProductGrid";
import Section from "@/components/ui/Section";
import { getProductsByCategory } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Football",
  description: "Decouvrez notre collection officielle de football",
};

export default function FootballPage() {
  const products = getProductsByCategory("kits") || [];
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
        <FilterableProductGrid products={products} filters={filters} />
      </Section>
    </div>
  );
}
