"use client";

import { useEffect, useMemo, useState } from "react";
import { Product } from "@/data/types";
import ProductGrid from "./ProductGrid";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/components/ui/cn";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterableProductGridProps {
  products: Product[];
  filters?: FilterOption[];
  itemsPerPage?: number;
  searchPlaceholder?: string;
}

export default function FilterableProductGrid({
  products,
  filters = [],
  itemsPerPage = 12,
  searchPlaceholder = "Rechercher un produit",
}: FilterableProductGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch);

      const matchesFilters =
        selectedFilters.length === 0 ||
        selectedFilters.some((tag) => product.tags.includes(tag));

      return matchesSearch && matchesFilters;
    });
  }, [products, searchTerm, selectedFilters]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedFilters]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  const toggleFilter = (value: string) => {
    setSelectedFilters((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedFilters([]);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-soft">
        <CardHeader className="pb-0">
          <CardTitle className="text-base sm:text-lg">Filtres catalogue</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex-1">
              <label className="mb-2 block text-sm font-semibold text-secondary">
                Recherche
              </label>
              <Input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder={searchPlaceholder}
                type="search"
              />
            </div>
            <Button
              type="button"
              variant="ghost"
              size="md"
              onClick={resetFilters}
              className="border border-gray-300"
            >
              Reinitialiser
            </Button>
          </div>

          {filters.length > 0 && (
            <div className="mt-4">
              <p className="mb-2 text-sm font-semibold text-secondary">Filtres</p>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => {
                  const isActive = selectedFilters.includes(filter.value);
                  return (
                    <Button
                      key={filter.value}
                      type="button"
                      size="sm"
                      variant={isActive ? "primary" : "ghost"}
                      onClick={() => toggleFilter(filter.value)}
                      className={cn("rounded-full", !isActive && "border border-gray-300")}
                    >
                      {filter.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <Badge variant="neutral">{filteredProducts.length}</Badge>
            <span>resultat(s) trouve(s)</span>
          </div>
        </CardContent>
      </Card>

      <ProductGrid products={paginatedProducts} />

      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm text-gray-600">
          Page {safePage} sur {totalPages}
        </p>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={safePage === 1}
            className="border border-gray-300"
          >
            Precedent
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
            disabled={safePage === totalPages}
            className="border border-gray-300"
          >
            Suivant
          </Button>
        </div>
      </div>
    </div>
  );
}

