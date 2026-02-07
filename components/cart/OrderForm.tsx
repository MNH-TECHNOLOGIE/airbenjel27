"use client";

import { useState, FormEvent } from "react";
import { useCart } from "@/lib/cart-context";
import type { CartItem } from "@/lib/cart-context";

interface OrderFormProps {
  items: CartItem[];
  onCancel: () => void;
}

export default function OrderForm({ items, onCancel }: OrderFormProps) {
  const { clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Clear cart and show success message
    clearCart();
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Close form after 3 seconds and redirect
    setTimeout(() => {
      onCancel();
      window.location.href = "/";
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-green-100 p-4">
            <svg
              className="h-12 w-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h2 className="mb-2 text-2xl font-bold text-secondary">
          Commande confirmée !
        </h2>
        <p className="mb-6 text-gray-600">
          Merci pour votre commande. Nous vous contacterons bientôt pour confirmer les détails.
        </p>
        <a
          href="/"
          className="btn-primary inline-block"
        >
          Retour à l&apos;accueil
        </a>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-8">
      {/* Header with close button */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
          Informations de commande
        </h2>
        <button
          onClick={onCancel}
          className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-secondary"
          aria-label="Fermer"
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

      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm font-medium text-secondary"
            >
              Prénom <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Votre prénom"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-sm font-medium text-secondary"
            >
              Nom <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Votre nom"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-secondary"
            >
              Numéro de téléphone <span className="text-primary">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="+33 6 12 34 56 78"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-secondary"
            >
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="votre.email@exemple.com"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="mb-2 block text-sm font-medium text-secondary"
            >
              Adresse complète <span className="text-primary">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              required
              rows={4}
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Numéro et nom de rue&#10;Code postal et ville&#10;Pays"
            />
          </div>

          {/* Order Summary */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="mb-3 text-lg font-semibold text-secondary">
              Résumé de la commande
            </h3>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="rounded-md bg-white p-3 text-sm">
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-medium text-secondary">{item.product.name}</div>
                    {item.customization && (
                      <span className="flex-shrink-0 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                        Personnalisé
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-gray-600">
                    {item.size && <span>Taille: {item.size}</span>}
                    {item.size && item.audience && <span> • </span>}
                    {item.audience && <span>Public: {item.audience}</span>}
                    {(item.size || item.audience) && item.color && <span> • </span>}
                    {item.color && <span>Couleur: {item.color}</span>}
                  </div>
                  {item.customization && (
                    <div className="mt-2 rounded-md bg-green-50 border border-green-200 p-2">
                      <p className="text-xs font-semibold text-green-800 uppercase">Produit personnalisé</p>
                      <p className="mt-1 text-sm font-bold text-green-900">
                        {item.customization.name.toUpperCase()} • {item.customization.number}
                      </p>
                    </div>
                  )}
                  <div className="mt-1">
                    <span className="text-gray-600">Quantité: {item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onCancel}
              className="w-full rounded-md border-2 border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 transition-all duration-300 hover:border-gray-400 hover:bg-gray-100 hover:scale-105 active:scale-95 sm:w-auto"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? "Traitement..." : "Confirmer la commande"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
