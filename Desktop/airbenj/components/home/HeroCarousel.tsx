"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  {
    src: "/hero.jpg",
    alt: "Hero Banner 1",
    title: "Bienvenue chez AIR BENJEL 27",
    subtitle: "Découvrez notre collection officielle d'équipements sportifs authentiques",
  },
  {
    src: "/hero-2.jpg",
    alt: "Hero Banner 2",
    title: "Nouvelle Collection",
    subtitle: "Des maillots aux accessoires exclusifs",
  },
  {
    src: "/hero-3.jpg",
    alt: "Hero Banner 3",
    title: "Équipementier Sportif",
    subtitle: "Conception, fabrication et commercialisation d'articles de sport",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

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
      {/* Carousel Container - Pleine page comme Palmador */}
      <div className="relative h-[70vh] w-full sm:h-[80vh] lg:h-screen">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 z-10 scale-100"
                : "opacity-0 z-0 scale-105"
            }`}
          >
            {/* Container principal - Pleine page */}
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                quality={100}
                unoptimized={true}
                className={`transition-transform duration-[10000ms] ease-out ${
                  index === currentIndex ? "scale-100" : "scale-110"
                }`}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                sizes="100vw"
              />
              {/* Overlay sombre pour lisibilité du texte et navbar */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
              
              {/* Content centré comme Palmador */}
              <div className="relative z-10 flex h-full items-center justify-center px-4">
                <div className="mx-auto w-full max-w-4xl text-center sm:px-6 lg:px-8">
                  <div
                    className={`transition-all duration-1000 ${
                      index === currentIndex
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[-30px] opacity-0"
                    }`}
                  >
                    {/* Titre principal */}
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                      {image.title}
                    </h1>
                    <p className="mt-4 text-base leading-7 text-white/90 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl lg:text-2xl">
                      {image.subtitle}
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-6">
                      <Link
                        href="/collections"
                        className="btn-primary w-full shadow-xl sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                      >
                        Voir la Collection
                      </Link>
                      <Link
                        href="/kits"
                        className="w-full rounded-md border-2 border-white bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                      >
                        Parcourir les Maillots
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows - Style simple comme Palmador */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 sm:left-4 sm:p-3"
          aria-label="Image précédente"
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

        {/* Dots Indicator - Style simple comme Palmador */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-8">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

