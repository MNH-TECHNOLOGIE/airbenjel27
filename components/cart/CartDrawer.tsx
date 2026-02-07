"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useCartDrawer } from "@/lib/cart-drawer-context";
import OrderForm from "@/components/cart/OrderForm";

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity } = useCart();
  const { isOpen, closeCartDrawer, showOrderForm, openOrderForm, closeOrderForm } = useCartDrawer();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={closeCartDrawer}
        aria-hidden="true"
      />
      
      {/* Order Form Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeOrderForm}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg bg-white shadow-2xl">
            <OrderForm
              items={items}
              onCancel={closeOrderForm}
            />
          </div>
        </div>
      )}
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-full flex-col bg-white shadow-2xl sm:max-w-md">
        {/* Header */}
        <div className="flex h-14 items-center justify-between border-b border-gray-200 px-4 sm:h-16 sm:px-6">
          <h2 className="text-lg font-bold text-secondary sm:text-xl">Panier</h2>
          <button
            onClick={closeCartDrawer}
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-secondary"
            aria-label="Fermer le panier"
          >
            <svg
              className="h-6 w-6"
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

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-3 sm:px-6 sm:py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <svg
                className="mb-4 h-16 w-16 text-gray-300"
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
              <p className="text-lg font-medium text-gray-600">Votre panier est vide</p>
            <Link
              href="/kits"
              onClick={closeCartDrawer}
              className="btn-primary mt-4 inline-block px-6 py-2 text-sm"
            >
              Commencer les achats
            </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 rounded-lg border border-gray-200 p-3 sm:gap-4 sm:p-4"
                >
                  {/* Product Image */}
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-20 sm:w-20">
                    {item.product.images.length > 0 ? (
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-400">
                        <svg
                          className="h-8 w-8"
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
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/products/${item.product.slug}`}
                        onClick={closeCartDrawer}
                        className="font-semibold text-secondary hover:text-primary"
                      >
                        {item.product.name}
                      </Link>
                      {item.customization && (
                        <span className="flex-shrink-0 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                          Personnalisé
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      {item.size && <span>Taille: {item.size}</span>}
                      {item.size && item.color && <span> • </span>}
                      {item.color && <span>Couleur: {item.color}</span>}
                    </div>
                    {item.customization && (
                      <div className="mt-2 rounded-md bg-green-50 border border-green-200 p-2">
                        <p className="text-xs font-semibold text-green-800 uppercase">Produit Personnalisé</p>
                        <p className="mt-1 text-sm font-bold text-green-900">
                          {item.customization.name.toUpperCase()} • {item.customization.number}
                        </p>
                      </div>
                    )}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="rounded-md border-2 border-gray-300 px-2 py-1 text-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-105 active:scale-95"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="rounded-md border-2 border-gray-300 px-2 py-1 text-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-105 active:scale-95"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex-shrink-0 text-gray-400 hover:text-primary"
                    aria-label="Retirer du panier"
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 bg-gray-50 p-4 sm:p-6">
            <div className="space-y-3">
              <button
                onClick={openOrderForm}
                className="btn-primary block w-full text-center"
              >
                Acheter
              </button>
              <Link
                href="/cart"
                onClick={closeCartDrawer}
                className="btn-outline-secondary block w-full text-center"
              >
                Voir le panier
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
