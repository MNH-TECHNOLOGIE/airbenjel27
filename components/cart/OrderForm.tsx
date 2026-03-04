"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import type { CartItem } from "@/lib/cart-context";
import {
  buildStoredOrder,
  generateLocalOrderId,
  saveOrder,
  type OrderCustomerInfo,
} from "@/lib/order-storage";

type OrderFormData = OrderCustomerInfo;
type OrderFormErrors = Partial<Record<keyof OrderFormData, string>>;

interface OrderFormProps {
  items: CartItem[];
  onCancel: () => void;
  onSuccess?: () => void;
}

function validateOrderForm(values: OrderFormData): OrderFormErrors {
  const errors: OrderFormErrors = {};

  if (values.firstName.trim().length < 2) {
    errors.firstName = "Le prenom doit contenir au moins 2 caracteres.";
  }

  if (values.lastName.trim().length < 2) {
    errors.lastName = "Le nom doit contenir au moins 2 caracteres.";
  }

  const phonePattern = /^[0-9+\s().-]{8,20}$/;
  if (!phonePattern.test(values.phone.trim())) {
    errors.phone = "Entrez un numero de telephone valide.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Entrez une adresse email valide.";
  }

  if (values.address.trim().length < 10) {
    errors.address = "L'adresse doit contenir au moins 10 caracteres.";
  }

  return errors;
}

export default function OrderForm({ items, onCancel, onSuccess }: OrderFormProps) {
  const router = useRouter();
  const { clearCart } = useCart();
  const [formData, setFormData] = useState<OrderFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState<OrderFormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (name in errors) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateOrderForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (items.length === 0) {
      setSubmitError("Votre panier est vide. Ajoutez des produits avant de commander.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const customer: OrderCustomerInfo = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim().toLowerCase(),
        address: formData.address.trim(),
      };

      const orderId = generateLocalOrderId();
      const order = buildStoredOrder(orderId, customer, items);

      saveOrder(order);
      clearCart();

      if (onSuccess) {
        onSuccess();
      } else {
        onCancel();
      }

      router.push(`/order-confirmation/${encodeURIComponent(orderId)}`);
    } catch {
      setSubmitError("Impossible d'enregistrer la commande. Veuillez reessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClassName =
    "w-full rounded-md border border-gray-300 px-4 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const errorClassName = "mt-1 text-sm text-red-600";

  return (
    <div className="p-6 sm:p-8">
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
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm font-medium text-secondary"
            >
              Prenom <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
              className={fieldClassName}
              placeholder="Votre prenom"
            />
            {errors.firstName && (
              <p id="firstName-error" className={errorClassName}>
                {errors.firstName}
              </p>
            )}
          </div>

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
              value={formData.lastName}
              onChange={handleChange}
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              className={fieldClassName}
              placeholder="Votre nom"
            />
            {errors.lastName && (
              <p id="lastName-error" className={errorClassName}>
                {errors.lastName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-secondary"
            >
              Numero de telephone <span className="text-primary">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={fieldClassName}
              placeholder="+33 6 12 34 56 78"
            />
            {errors.phone && (
              <p id="phone-error" className={errorClassName}>
                {errors.phone}
              </p>
            )}
          </div>

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
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={fieldClassName}
              placeholder="votre.email@exemple.com"
            />
            {errors.email && (
              <p id="email-error" className={errorClassName}>
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="address"
              className="mb-2 block text-sm font-medium text-secondary"
            >
              Adresse complete <span className="text-primary">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              rows={4}
              value={formData.address}
              onChange={handleChange}
              aria-invalid={Boolean(errors.address)}
              aria-describedby={errors.address ? "address-error" : undefined}
              className={fieldClassName}
              placeholder={"Numero et nom de rue\nCode postal et ville\nPays"}
            />
            {errors.address && (
              <p id="address-error" className={errorClassName}>
                {errors.address}
              </p>
            )}
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="mb-3 text-lg font-semibold text-secondary">Resume de la commande</h3>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="rounded-md bg-white p-3 text-sm">
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-medium text-secondary">{item.product.name}</div>
                    {item.customization && (
                      <span className="flex-shrink-0 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                        Personnalise
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
                    <div className="mt-2 rounded-md border border-green-200 bg-green-50 p-2">
                      <p className="text-xs font-semibold uppercase text-green-800">Produit personnalise</p>
                      <p className="mt-1 text-sm font-bold text-green-900">
                        {item.customization.name.toUpperCase()} • {item.customization.number}
                      </p>
                    </div>
                  )}
                  <div className="mt-1">
                    <span className="text-gray-600">Quantite: {item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {submitError && (
            <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {submitError}
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onCancel}
              className="w-full rounded-md border-2 border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 transition-all duration-300 hover:scale-105 hover:border-gray-400 hover:bg-gray-100 active:scale-95 sm:w-auto"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex-1 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
              {isSubmitting ? "Traitement..." : "Confirmer la commande"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
