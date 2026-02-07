"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageSrc = product.images[0] || "/placeholder-product.jpg";
  const defaultColor = product.colors && product.colors.length > 0 ? product.colors[0] : null;
  const buyHref = defaultColor
    ? `/products/${product.slug}?color=${encodeURIComponent(defaultColor)}&lockColor=1`
    : `/products/${product.slug}`;
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (!showImage) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowImage(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showImage]);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setShowImage(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            setShowImage(true);
          }
        }}
        className="group relative flex flex-col overflow-hidden rounded-lg bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-1"
        aria-label={`Afficher la photo de ${product.name}`}
      >
        {/* Image Container - Fill card with a clean crop */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-200">
          {product.images.length > 0 ? (
            <Image
              src={imageSrc}
              alt={product.name}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400">
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}

          {/* Badges */}
          <div className="absolute left-2 top-2 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="rounded-full bg-primary px-2 py-1 text-xs font-semibold text-white">
                Nouveau
              </span>
            )}
            {product.isFeatured && (
              <span className="rounded-full bg-secondary px-2 py-1 text-xs font-semibold text-white">
                Vedette
              </span>
            )}
          </div>
        </div>

        {/* Product Info Box - White box at bottom like player cards */}
        <div className="relative bg-white px-3 py-3 sm:px-4 sm:py-4">
          {/* Product Name */}
          <div className="mb-2 sm:mb-3">
            <h3 className="text-base font-bold text-secondary leading-tight sm:text-lg">
              {product.name}
            </h3>
            {product.sizes.length > 0 && (
              <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                {product.sizes.length} tailles disponibles
              </p>
            )}
          </div>

          {/* Buy Now Button - Style like player cards */}
          <div className="flex">
            <Link
              href={buyHref}
              onClick={(event) => event.stopPropagation()}
              className="w-full rounded-md bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-primary-dark hover:scale-105 active:scale-95 shadow-md sm:w-auto sm:px-5 sm:py-2.5"
            >
              Acheter
            </Link>
          </div>
        </div>
      </div>

      {showImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowImage(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-white p-2"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={imageSrc}
              alt={product.name}
              className="block h-auto w-auto max-h-[86vh] max-w-[86vw] object-contain"
            />
            <button
              type="button"
              onClick={() => setShowImage(false)}
              className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
