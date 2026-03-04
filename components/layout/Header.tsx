"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { useCartDrawer } from "@/lib/cart-drawer-context";

const categoryItems = [
  { name: "Maillots", href: "/kits" },
  { name: "V\u00eatements", href: "/apparel" },
  { name: "Accessoires", href: "/accessories" },
  { name: "Sport militaire", href: "/sport-militaire" },
  { name: "Promotion", href: "/promotion" },
  { name: "Catalogue", href: "/collections" },
  { name: "Cadeaux", href: "/gifts" },
  { name: "Arbitre", href: "/arbitre" },
];

const mainItems = [
  { name: "Clubs partenaires", href: "/clubs" },
  { name: "Brand Ambassadeur", href: "/brand" },
  { name: "Olympic 2026", href: "/olympic-2026" },
  { name: "\u00c0 propos", href: "/a-propos" },
];

const mobileMenuId = "mobile-navigation-panel";
const mobileMenuTitleId = "mobile-navigation-title";
const mobileCategoriesId = "mobile-categories-panel";
const desktopCategoriesId = "desktop-categories-panel";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [desktopCategoriesOpen, setDesktopCategoriesOpen] = useState(false);
  const { openCartDrawer } = useCartDrawer();
  const { totalItems } = useCart();
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const desktopCategoriesRef = useRef<HTMLDivElement>(null);
  const desktopCategoriesButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
  const isCategoriesActive = categoryItems.some((item) => isActive(item.href));

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileCategoriesOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        setMobileCategoriesOpen(false);
        return;
      }

      if (desktopCategoriesOpen) {
        setDesktopCategoriesOpen(false);
        desktopCategoriesButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [mobileMenuOpen, desktopCategoriesOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!desktopCategoriesOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopCategoriesRef.current &&
        !desktopCategoriesRef.current.contains(event.target as Node)
      ) {
        setDesktopCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [desktopCategoriesOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      wasOpenRef.current = true;
      closeButtonRef.current?.focus();
      return;
    }

    if (wasOpenRef.current) {
      menuButtonRef.current?.focus();
      wasOpenRef.current = false;
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileCategoriesOpen(false);
    setDesktopCategoriesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen && isCategoriesActive) {
      setMobileCategoriesOpen(true);
    }
  }, [mobileMenuOpen, isCategoriesActive]);

  return (
    <>
      <header className="relative z-50 w-full bg-black transition-all duration-300">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between sm:h-14">
            <Link
              href="/"
              className="flex items-center transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Image
                src="/logo1.png"
                alt="AIR BENJEL 27 Logo"
                width={120}
                height={40}
                className="h-8 w-auto object-contain sm:h-10 md:h-12"
                priority
              />
            </Link>

            <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
              <div
                ref={desktopCategoriesRef}
                className="relative"
                onMouseEnter={() => setDesktopCategoriesOpen(true)}
                onMouseLeave={() => setDesktopCategoriesOpen(false)}
              >
                <button
                  ref={desktopCategoriesButtonRef}
                  type="button"
                  className={`inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    isCategoriesActive ? "text-primary" : "text-white/90 hover:text-white"
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={desktopCategoriesOpen}
                  aria-controls={desktopCategoriesId}
                  onClick={() => setDesktopCategoriesOpen((current) => !current)}
                >
                  {"Cat\u00e9gories"}
                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-150 ${
                      desktopCategoriesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={desktopCategoriesId}
                  className={`absolute left-1/2 top-full z-20 mt-2 w-max min-w-[240px] max-w-[calc(100vw-2rem)] -translate-x-1/2 overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-lg transition-all duration-150 ${
                    desktopCategoriesOpen
                      ? "visible scale-100 opacity-100"
                      : "invisible scale-95 opacity-0"
                  }`}
                >
                  {categoryItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                        isActive(item.href)
                          ? "bg-accent text-primary"
                          : "text-secondary hover:bg-accent hover:text-primary"
                      }`}
                      onClick={() => setDesktopCategoriesOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {mainItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    isActive(item.href) ? "text-primary" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={openCartDrawer}
                className="relative rounded-lg p-2 text-white transition-all hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Panier"
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-white">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </button>

              <button
                ref={menuButtonRef}
                type="button"
                className="rounded-lg p-2 text-white transition-all hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Ouvrir le menu"
                aria-expanded={mobileMenuOpen}
                aria-controls={mobileMenuId}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <div
            id={mobileMenuId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={mobileMenuTitleId}
            className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col bg-white shadow-2xl sm:max-w-sm"
          >
            <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 sm:h-20 sm:px-6">
              <h2
                id={mobileMenuTitleId}
                className="text-lg font-bold tracking-tight text-secondary sm:text-xl"
              >
                Navigation
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeMobileMenu}
                className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Fermer le menu"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8" aria-label="Navigation mobile">
              <ul className="space-y-1">
                <li>
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-4 sm:text-base ${
                      isCategoriesActive
                        ? "bg-accent text-primary"
                        : "text-secondary hover:bg-accent hover:text-primary"
                    }`}
                    aria-expanded={mobileCategoriesOpen}
                    aria-controls={mobileCategoriesId}
                    onClick={() => setMobileCategoriesOpen((current) => !current)}
                  >
                    {"Cat\u00e9gories"}
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        mobileCategoriesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    id={mobileCategoriesId}
                    className={`grid transition-[grid-template-rows,opacity,margin] duration-200 ease-out ${
                      mobileCategoriesOpen
                        ? "mt-1 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-70"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-1 pl-3 pb-1">
                        {categoryItems.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-4 sm:text-base ${
                                isActive(item.href)
                                  ? "bg-accent text-primary"
                                  : "text-secondary hover:bg-accent hover:text-primary"
                              }`}
                              onClick={closeMobileMenu}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

                {mainItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-4 sm:text-base ${
                        isActive(item.href)
                          ? "bg-accent text-primary"
                          : "text-secondary hover:bg-accent hover:text-primary"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
