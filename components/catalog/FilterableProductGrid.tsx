"use client";

import { useEffect, useMemo, useState } from "react";
import { Product } from "@/data/types";
import ProductGrid from "./ProductGrid";

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
      <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex-1">
            <label className="mb-2 block text-sm font-semibold text-secondary">
              Recherche
            </label>
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder={searchPlaceholder}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              type="search"
            />
          </div>
          <button
            type="button"
            onClick={resetFilters}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm font-semibold text-secondary transition-colors hover:border-primary hover:text-primary"
          >
            Reinitialiser
          </button>
        </div>

        {filters.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 text-sm font-semibold text-secondary">Filtres</p>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const isActive = selectedFilters.includes(filter.value);
                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => toggleFilter(filter.value)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                      isActive
                        ? "border-primary bg-primary text-white"
                        : "border-gray-300 text-secondary hover:border-primary hover:text-primary"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-4 text-sm text-gray-600">
          {filteredProducts.length} resultat(s) trouve(s)
        </div>
      </div>

      <ProductGrid products={paginatedProducts} />

      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm text-gray-600">
          Page {safePage} sur {totalPages}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={safePage === 1}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm font-semibold text-secondary transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            Precedent
          </button>
          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            disabled={safePage === totalPages}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm font-semibold text-secondary transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}
