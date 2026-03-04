"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getOrderById, type StoredOrder } from "@/lib/order-storage";

function formatOrderDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}

export default function OrderConfirmationPage() {
  const params = useParams<{ id: string }>();
  const orderId = useMemo(
    () => decodeURIComponent(Array.isArray(params?.id) ? params.id[0] : params?.id ?? ""),
    [params?.id]
  );
  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!orderId) {
      setOrder(null);
      setIsLoading(false);
      return;
    }

    const storedOrder = getOrderById(orderId);
    setOrder(storedOrder);
    setIsLoading(false);
  }, [orderId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white pt-12 sm:pt-14">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-base text-gray-600">Chargement de votre confirmation...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-white pt-12 sm:pt-14">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-secondary">Commande introuvable</h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Cette confirmation n&apos;est plus disponible dans votre navigateur.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/cart" className="btn-primary text-center">
              Retour au panier
            </Link>
            <Link href="/" className="btn-outline-secondary text-center">
              Retour a l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-12 sm:pt-14">
      <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="rounded-xl border border-green-200 bg-green-50 p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Confirmation de commande
          </p>
          <h1 className="mt-2 text-2xl font-bold text-secondary sm:text-3xl">
            Merci, votre pre-commande est enregistree.
          </h1>
          <p className="mt-3 text-sm text-gray-700 sm:text-base">
            Numero de commande: <span className="font-semibold text-secondary">{order.id}</span>
          </p>
          <p className="text-sm text-gray-700 sm:text-base">
            Date: <span className="font-semibold text-secondary">{formatOrderDate(order.createdAt)}</span>
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <section className="rounded-xl border border-gray-200 bg-white p-5 lg:col-span-2">
            <h2 className="text-xl font-semibold text-secondary">Resume du panier</h2>
            <div className="mt-4 space-y-3">
              {order.items.map((item) => (
                <article key={item.id} className="rounded-lg border border-gray-200 p-3 sm:p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                    <div className="relative h-20 w-full overflow-hidden rounded-lg bg-gray-100 sm:h-20 sm:w-20">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.productName}
                          fill
                          className="object-contain"
                          sizes="80px"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-sm text-gray-400">
                          Image
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <p className="font-semibold text-secondary">{item.productName}</p>
                        <p className="text-sm font-semibold text-secondary">x{item.quantity}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">
                        {item.size && <span>Taille: {item.size}</span>}
                        {item.size && item.audience && <span> • </span>}
                        {item.audience && <span>Public: {item.audience}</span>}
                        {(item.size || item.audience) && item.color && <span> • </span>}
                        {item.color && <span>Couleur: {item.color}</span>}
                      </p>
                      {item.customization && (
                        <p className="mt-1 text-sm font-medium text-green-700">
                          Personnalise: {item.customization.name.toUpperCase()} • {item.customization.number}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-lg font-semibold text-secondary">Infos client</h2>
            <div className="mt-3 space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-semibold text-secondary">Nom:</span>{" "}
                {order.customer.firstName} {order.customer.lastName}
              </p>
              <p>
                <span className="font-semibold text-secondary">Telephone:</span>{" "}
                {order.customer.phone}
              </p>
              <p>
                <span className="font-semibold text-secondary">Email:</span>{" "}
                {order.customer.email}
              </p>
              <p>
                <span className="font-semibold text-secondary">Adresse:</span>{" "}
                {order.customer.address}
              </p>
            </div>

            <div className="mt-5 rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm text-gray-600">
                Articles: <span className="font-semibold text-secondary">{order.totalItems}</span>
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Total estime:{" "}
                <span className="font-semibold text-secondary">{order.totalAmount.toLocaleString("fr-FR")} MAD</span>
              </p>
            </div>

            <div className="mt-5 space-y-3">
              <Link href="/collections" className="btn-primary block text-center">
                Continuer les achats
              </Link>
              <Link href="/" className="btn-outline-secondary block text-center">
                Retour a l&apos;accueil
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
