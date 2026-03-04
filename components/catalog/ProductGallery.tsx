"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

function clampIndex(value: number, length: number) {
  if (length === 0) return 0;
  return Math.max(0, Math.min(value, length - 1));
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const galleryImages = useMemo(
    () => (images.length > 0 ? images : ["/placeholder-product.jpg"]),
    [images]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const wasLightboxOpenRef = useRef(false);
  const dialogId = useId();

  useEffect(() => {
    setActiveIndex((current) => clampIndex(current, galleryImages.length));
  }, [galleryImages.length]);

  useEffect(() => {
    if (!isLightboxOpen) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
        return;
      }

      if (galleryImages.length <= 1) return;

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % galleryImages.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === 0 ? galleryImages.length - 1 : current - 1
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [galleryImages.length, isLightboxOpen]);

  useEffect(() => {
    if (wasLightboxOpenRef.current && !isLightboxOpen) {
      openButtonRef.current?.focus();
    }
    wasLightboxOpenRef.current = isLightboxOpen;
  }, [isLightboxOpen]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <button
          ref={openButtonRef}
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={isLightboxOpen}
          aria-controls={dialogId}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Image
            src={galleryImages[activeIndex]}
            alt={productName}
            fill
            className="object-contain object-center"
            quality={85}
            priority={activeIndex === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </button>

        {galleryImages.length > 1 && (
          <div
            className="flex gap-3 overflow-x-auto pb-1"
            aria-label="Miniatures du produit"
          >
            {galleryImages.map((image, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Afficher l'image ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 bg-gray-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:h-24 sm:w-24 ${
                    isActive
                      ? "border-primary"
                      : "border-gray-200 hover:border-primary/60"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${productName} ${index + 1}`}
                    fill
                    className="object-contain"
                    quality={70}
                    sizes="96px"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            id={dialogId}
            role="dialog"
            aria-modal="true"
            aria-label={`Zoom image de ${productName}`}
            className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative mx-auto h-[78vh] w-full">
              <Image
                src={galleryImages[activeIndex]}
                alt={`${productName} zoom ${activeIndex + 1}`}
                fill
                quality={90}
                className="object-contain"
                sizes="100vw"
              />
            </div>

            <div className="flex items-center justify-between gap-2">
              {galleryImages.length > 1 ? (
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((current) =>
                      current === 0 ? galleryImages.length - 1 : current - 1
                    )
                  }
                  className="rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Precedent
                </button>
              ) : (
                <span />
              )}

              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Fermer
              </button>

              {galleryImages.length > 1 ? (
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((current) => (current + 1) % galleryImages.length)
                  }
                  className="rounded-lg border border-white/40 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Suivant
                </button>
              ) : (
                <span />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
