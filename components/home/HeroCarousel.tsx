"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";

const heroImages = [
  {
    src: "/hero-5.png",
    alt: "Hero Banner 5",
    title: "Bienvenue chez AIR BENJEL 27",
    subtitle: "Decouvrez notre collection officielle d'equipements sportifs authentiques",
  },
  {
    src: "/hero-6.png",
    alt: "Hero Banner 6",
    title: "Nouvelle Collection",
    subtitle: "Des maillots aux accessoires exclusifs",
  },
  {
    src: "/hero-7_1200x800.jpg",
    alt: "Hero Banner 7",
    title: "Equipementier sportif",
    subtitle: "Conception, fabrication et commercialisation d'articles de sport",
  },
  {
    src: "/airbenjel photo produit/arbites maillot/hero10.png",
    alt: "Arbitres – Maillot officiel AIR BENJEL 27",
    title: "Collection Arbitres",
    subtitle: "Maillot officiel AIR BENJEL 27",
  },
  {
    src: "/club partenaire.jpeg",
    alt: "Clubs partenaires – AIR BENJEL 27",
    title: "Clubs partenaires",
    subtitle: "AIR BENJEL 27 accompagne ses clubs partenaires",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full aspect-[16/10] lg:h-[520px] lg:aspect-auto">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <div className="relative h-full w-full overflow-hidden bg-black">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                quality={80}
                placeholder="empty"
                className="object-contain object-center"
                sizes="(min-width: 1024px) 100vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

              <div className="relative z-10 flex h-full items-end justify-center px-4 pb-6 sm:pb-8">
                <div className="mx-auto w-full max-w-4xl text-center sm:px-6 lg:px-8">
                  <div
                    className={`transition-all duration-1000 ${
                      index === currentIndex ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
                    }`}
                  >
                    <div className="hidden items-center justify-center gap-4 sm:flex sm:gap-6 md:flex-row">
                      <Link
                        href="/collections"
                        className={buttonClasses({
                          variant: "primary",
                          size: "lg",
                          className: "w-full shadow-xl sm:w-auto",
                        })}
                      >
                        Voir la collection
                      </Link>
                      <Link
                        href="/kits"
                        className={buttonClasses({
                          variant: "ghost",
                          size: "lg",
                          className:
                            "w-full border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto",
                        })}
                      >
                        Parcourir les maillots
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 sm:left-4 sm:p-3"
          aria-label="Image precedente"
        >
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-4 sm:p-3"
          aria-label="Image suivante"
        >
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-8">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Aller a l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
