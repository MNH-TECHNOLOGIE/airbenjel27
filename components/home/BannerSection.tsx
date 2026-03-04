import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface BannerSectionProps {
  src: string;
  alt: string;
  href?: string;
  children?: ReactNode;
}

function BannerContent({ src, alt, children }: Omit<BannerSectionProps, "href">) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-lg shadow-black/5">
      <div className="relative aspect-[16/9] w-full md:aspect-[21/8] lg:aspect-[21/7]">
        <Image
          src={src}
          alt=""
          fill
          quality={55}
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="scale-105 object-cover object-center blur-md opacity-30"
          aria-hidden="true"
        />
        <Image
          src={src}
          alt={alt}
          fill
          quality={80}
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-contain object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-secondary/10" />
      </div>
      {children && (
        <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 sm:px-6 sm:pb-6">
          {children}
        </div>
      )}
    </div>
  );
}

export default function BannerSection({ src, alt, href, children }: BannerSectionProps) {
  return (
    <section className="border-y border-gray-100/80 bg-white py-10 sm:py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {href ? (
          <Link href={href} className="group block">
            <BannerContent src={src} alt={alt}>
              {children}
            </BannerContent>
          </Link>
        ) : (
          <BannerContent src={src} alt={alt}>
            {children}
          </BannerContent>
        )}
      </div>
    </section>
  );
}
