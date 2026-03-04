import type { Metadata } from "next";
import FilterableProductGrid from "@/components/catalog/FilterableProductGrid";
import Section from "@/components/ui/Section";
import { getProductsByCategory } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Vetements",
  description: "Decouvrez notre collection de vetements officiels",
};

export default function ApparelPage() {
  const products = getProductsByCategory("apparel");

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <Section spacingClassName="py-8 sm:py-12 md:py-16">
        <FilterableProductGrid products={products} />
      </Section>
    </div>
  );
}
