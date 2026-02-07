"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import OrderForm from "@/components/cart/OrderForm";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalItems } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-12 sm:pt-14">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <svg
              className="mx-auto h-24 w-24 text-gray-300"
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
            <h1 className="mt-6 text-3xl font-bold text-secondary">Votre panier est vide</h1>
            <p className="mt-2 text-gray-600">Commencez à ajouter des produits à votre panier</p>
            <Link
              href="/kits"
              className="btn-primary mt-6 inline-block"
            >
              Commencer les achats
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <div className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-12 lg:px-8 lg:py-16">
        <h1 className="mb-6 text-2xl font-bold text-secondary sm:mb-8 sm:text-3xl md:text-4xl">Panier</h1>

        {showOrderForm ? (
          <OrderForm
            items={items}
            onCancel={() => setShowOrderForm(false)}
          />
        ) : (
          <>
            {/* Cart Items */}
            <div className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-3 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
                >
                  {/* Product Image */}
                  <div className="relative h-24 w-full flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-24 sm:w-24">
                    {item.product.images.length > 0 ? (
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 128px, 96px"
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
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="text-lg font-semibold text-secondary hover:text-primary sm:text-xl"
                      >
                        {item.product.name}
                      </Link>
                      {item.customization && (
                        <span className="flex-shrink-0 rounded-full bg-primary px-2.5 py-1 text-xs font-bold uppercase text-white">
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
                      <div className="mt-2 rounded-md bg-green-50 border-2 border-green-200 p-3">
                        <p className="text-xs font-semibold text-green-800 uppercase">Produit Personnalisé</p>
                        <p className="mt-1 text-base font-bold text-green-900">
                          {item.customization.name.toUpperCase()} • {item.customization.number}
                        </p>
                      </div>
                    )}
                    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      {/* Quantity Selector */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-600 sm:text-base">Quantité:</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="rounded-md border-2 border-gray-300 px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-105 active:scale-95 sm:px-4"
                          >
                            -
                          </button>
                          <span className="w-12 text-center text-base font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="rounded-md border-2 border-gray-300 px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-105 active:scale-95 sm:px-4"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-end">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-primary"
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
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-4 text-xl font-bold text-secondary">R?sum? de la commande</h2>
              <p className="text-base text-gray-600">
                Articles dans votre panier: {" "}
                <span className="font-medium text-secondary">{totalItems}</span>
              </p>
            </div>

            {/* Order Button */}
              <button
                onClick={() => setShowOrderForm(true)}
                className="btn-primary mt-6 w-full sm:text-lg"
              >
                Commander
              </button>

              {/* Continue Shopping */}
              <Link
                href="/kits"
                className="btn-outline-secondary mt-4 block w-full text-center"
              >
                Continuer les achats
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
