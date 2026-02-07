"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { useCartDrawer } from "@/lib/cart-drawer-context";

const navItems = [
  {
    name: "Maillots",
    href: "/kits",
    children: [
      { name: "Football", href: "/football" },
      { name: "Basketball", href: "/basketball" },
    ],
  },
  { name: "Vêtements", href: "/apparel" },
  { name: "Accessoires", href: "/accessories" },
  { name: "Clubs partenaires", href: "/clubs-partenaires" },
  { name: "Sport militaire", href: "/sport-militaire" },
  { name: "Promotion", href: "/promotion" },
  { name: "Catalogue", href: "/collections" },
  { name: "Cadeaux", href: "/gifts" },
  { name: "À propos", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCartDrawer } = useCartDrawer();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="relative z-50 w-full bg-black transition-all duration-300">
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between sm:h-14">
            {/* Logo */}
            <div className="flex items-center">
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
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-4 md:gap-6 lg:flex">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className={`relative ${item.children ? "group" : ""}`}
                >
                  <Link
                    href={item.href}
                    className="text-xs font-medium text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:text-sm"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="absolute left-0 top-full mt-2 hidden min-w-[180px] rounded-md border border-gray-200 bg-white py-2 shadow-lg group-hover:block group-focus-within:block">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-secondary transition-colors hover:bg-accent hover:text-primary"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
              {/* Search Icon */}
              <Link
                href="/search"
                className="hidden rounded-lg p-2 text-white transition-all hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:block"
                aria-label="Rechercher"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </Link>

              {/* Account Icon */}
              <Link
                href="/account"
                className="hidden rounded-lg p-2 text-white transition-all hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:block"
                aria-label="Mon compte"
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>

              {/* Cart Icon */}
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
                {/* Cart Badge */}
                {totalItems > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-white">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="rounded-lg p-2 text-white transition-all hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Ouvrir le menu"
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

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col bg-white shadow-2xl sm:max-w-sm">
            <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 sm:h-20 sm:px-6">
              <Link
                href="/"
                className="text-lg font-bold tracking-tight text-secondary sm:text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                AIR BENJEL 27
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
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
            <nav className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8">
              <ul className="space-y-1 sm:space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-secondary transition-colors hover:bg-accent hover:text-primary sm:px-4 sm:py-3 sm:text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="mt-1 flex flex-col gap-1 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-accent hover:text-primary sm:text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-1 border-t border-gray-200 pt-6 sm:mt-8 sm:space-y-2 sm:pt-8">
                <Link
                  href="/search"
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-secondary transition-colors hover:bg-accent sm:gap-3 sm:px-4 sm:py-3 sm:text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Rechercher
                </Link>
                <Link
                  href="/account"
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-secondary transition-colors hover:bg-accent sm:gap-3 sm:px-4 sm:py-3 sm:text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Mon compte
                </Link>
              </div>
            </nav>
          </div>
          </div>
        )}
      </>
    );
  }
