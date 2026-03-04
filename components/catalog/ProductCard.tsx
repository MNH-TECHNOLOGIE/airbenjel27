"use client";

import {
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/types";
import { Card } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { useCart } from "@/lib/cart-context";
import { useCartDrawer } from "@/lib/cart-drawer-context";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { openCartDrawer } = useCartDrawer();
  const imageList = product.images.length > 0 ? product.images : ["/placeholder-product.jpg"];
  const primaryImage = imageList[0];
  const defaultColor = product.colors && product.colors.length > 0 ? product.colors[0] : null;
  const defaultSize = product.sizes.length > 0 ? product.sizes[0] : null;
  const hasVariantStock =
    product.variants && product.variants.length > 0
      ? product.variants.some((variant) => variant.stock > 0)
      : true;
  const canAddToCart = product.stock > 0 && hasVariantStock;
  const buyHref = product.categoryId === "arbitre"
    ? `/arbitre/${product.slug}`
    : defaultColor
      ? `/products/${product.slug}?color=${encodeURIComponent(defaultColor)}&lockColor=1`
      : `/products/${product.slug}`;
  const [showImage, setShowImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const modalScrollerRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setActiveIndex(0);
    setShowImage(true);
  };

  useEffect(() => {
    if (!showImage) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowImage(false);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => Math.min(current + 1, imageList.length - 1));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => Math.max(current - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showImage, imageList.length]);

  useEffect(() => {
    if (!showImage) return;
    const scroller = modalScrollerRef.current;
    if (!scroller) return;
    scroller.scrollTo({
      left: activeIndex * scroller.clientWidth,
      behavior: "smooth",
    });
  }, [activeIndex, showImage]);

  const handleModalScroll = () => {
    const scroller = modalScrollerRef.current;
    if (!scroller) return;
    const nextIndex = Math.round(scroller.scrollLeft / scroller.clientWidth);
    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  };

  const handleQuickAdd = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (!canAddToCart) {
      return;
    }

    // Use first available options for quick add from catalogue cards.
    addToCart(product, defaultSize, defaultColor, "Homme");
    openCartDrawer();
  };

  const stopCardKeyboardOpen = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.stopPropagation();
    }
  };

  return (
    <>
      <Card
        role="button"
        tabIndex={0}
        onClick={openModal}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            openModal();
          }
        }}
        className="group relative flex h-full flex-col overflow-hidden border border-neutral-200 bg-white shadow-lg shadow-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10"
        aria-label={`Afficher la photo de ${product.name}`}
      >
        {/* Media */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={primaryImage}
              alt={product.name}
              fill
              quality={80}
              placeholder="empty"
              className="object-contain object-center p-2 transition-transform duration-200 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>

          {/* Badges */}
          <div className="absolute left-2 top-2 flex flex-wrap items-center gap-1.5 sm:left-3 sm:top-3">
            {product.isNew && <Badge variant="primary">Nouveau</Badge>}
            {product.isFeatured && <Badge variant="secondary">Vedette</Badge>}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col px-3 py-3 sm:px-4 sm:py-4">
          <div className="mb-3">
            <h3 className="line-clamp-2 text-base font-extrabold leading-tight text-secondary sm:text-lg">
              {product.name}
            </h3>
            <div className="mt-1.5 space-y-0.5 text-[10px] text-gray-500 sm:text-xs">
              {product.sizes.length > 0 && (
                <p>
                  {product.sizes.length} tailles disponibles
                </p>
              )}
              <p>
                {canAddToCart ? `Stock: ${product.stock}` : "Stock indisponible"}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-auto flex items-center gap-3">
            <Link
              href={buyHref}
              onClick={(event) => event.stopPropagation()}
              onKeyDown={stopCardKeyboardOpen}
              className={buttonClasses({
                variant: "primary",
                size: "sm",
                fullWidth: false,
                className:
                  "h-11 flex-1 uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
              })}
            >
              Acheter
            </Link>
            <button
              type="button"
              onClick={handleQuickAdd}
              onKeyDown={stopCardKeyboardOpen}
              disabled={!canAddToCart}
              className={buttonClasses({
                variant: "ghost",
                size: "sm",
                fullWidth: false,
                className:
                  "btn-glow-icon h-11 w-11 shrink-0 border border-gray-300 bg-white p-0 hover:border-primary/50 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50",
              })}
              aria-label="Ajouter au panier"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 5h12M9 19a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2"
                />
              </svg>
            </button>
          </div>
          {!canAddToCart && (
            <p className="mt-2 text-xs font-medium text-red-600">Indisponible</p>
          )}
        </div>
      </Card>

      {showImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowImage(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[92vh] w-full max-w-[92vw] rounded-lg bg-white p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              ref={modalScrollerRef}
              onScroll={handleModalScroll}
              className="flex max-h-[88vh] w-full snap-x snap-mandatory overflow-x-auto scroll-smooth touch-pan-x"
            >
              {imageList.map((src, index) => (
                <div
                  key={`${product.id}-modal-${index}`}
                  className="relative flex h-[88vh] w-[88vw] flex-shrink-0 snap-center items-center justify-center"
                >
                  <Image
                    src={src}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    quality={85}
                    placeholder="empty"
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 72vw, 60vw"
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setShowImage(false)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-xs font-semibold text-white"
              aria-label="Fermer"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
