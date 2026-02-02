"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/types";
import { useCart } from "@/lib/cart-context";
import { useCartDrawer } from "@/lib/cart-drawer-context";
import CustomizationModal from "./CustomizationModal";

interface ProductSelectorProps {
  product: Product;
  onAddToCart?: (size: string | null, color: string | null, audience?: string) => void;
}

export default function ProductSelector({
  product,
  onAddToCart,
}: ProductSelectorProps) {
  const { addToCart } = useCart();
  const { openCartDrawer } = useCartDrawer();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.colors && product.colors.length > 0 ? product.colors[0] : null
  );
  const [selectedAudience, setSelectedAudience] = useState<string>("Hommes");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showCustomizationModal, setShowCustomizationModal] = useState(false);
  const [customization, setCustomization] = useState<{ name: string; number: string } | undefined>(undefined);

  const handleAddToCart = () => {
    // Reset error message
    setErrorMessage(null);

    // Check if size is required
    if (product.sizes.length > 0 && !selectedSize) {
      setErrorMessage("Veuillez sélectionner une taille");
      return;
    }
    
    // Check if color is required
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      setErrorMessage("Veuillez sélectionner une couleur");
      return;
    }
    
    try {
      // Use cart context (with or without customization)
      addToCart(product, selectedSize, selectedColor, customization);
      
      // Open cart drawer
      openCartDrawer();
      
      // Call custom callback if provided
      if (onAddToCart) {
        onAddToCart(selectedSize, selectedColor, selectedAudience);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      setErrorMessage("Erreur lors de l'ajout au panier. Veuillez réessayer.");
    }
  };

  const handleCustomizationConfirm = (name: string, number: string) => {
    setCustomization({ name, number });
  };

  // Mapping des noms de couleurs vers des codes couleur hex
  const colorMap: Record<string, string> = {
    Rouge: "#FF4E45",
    Bleu: "#0066CC",
    Noir: "#000000",
    Blanc: "#FFFFFF",
    Vert: "#00AA44",
    Jaune: "#FFD700",
    Gris: "#808080",
    Rose: "#FF69B4",
    Orange: "#FF8C00",
    Violet: "#8A2BE2",
  };

  // Déterminer si une couleur est claire (pour ajuster le style de la bordure)
  const isLightColor = (color: string): boolean => {
    const lightColors = ["Blanc", "Jaune", "Rose"];
    return lightColors.includes(color);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Color Selector */}
      {product.colors && product.colors.length > 0 && (
        <div>
          <label className="mb-3 block text-base font-semibold text-secondary">
            Couleur
          </label>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {product.colors.map((color) => {
              const colorCode = colorMap[color] || "#CCCCCC";
              const isSelected = selectedColor === color;
              const isLight = isLightColor(color);
              return (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all sm:h-12 sm:w-12 ${
                    isSelected
                      ? `border-primary ring-2 ring-primary ring-offset-2 ${isLight ? "ring-offset-gray-200" : ""}`
                      : isLight
                      ? "border-gray-400 hover:border-primary"
                      : "border-gray-300 hover:border-primary"
                  }`}
                  style={{
                    backgroundColor: colorCode,
                  }}
                  aria-label={`Sélectionner la couleur ${color}`}
                  title={color}
                >
                  {isSelected && (
                    <svg
                      className={`h-6 w-6 drop-shadow-lg ${
                        isLight ? "text-gray-800" : "text-white"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Size Selector */}
      {product.sizes.length > 0 && (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <label className="block text-base font-semibold text-secondary">
              Taille
            </label>
            <Link
              href="#size-guide"
              className="text-sm text-primary hover:underline"
            >
              Guide des tailles
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {product.sizes.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-md border-2 px-4 py-2 text-sm font-semibold transition-all duration-300 sm:px-6 sm:py-3 sm:text-base ${
                    isSelected
                      ? "border-primary bg-primary text-white shadow-lg"
                      : "border-gray-300 bg-white text-secondary hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Audience Selection Tabs */}
      <div>
        <label className="mb-3 block text-base font-semibold text-secondary">
          Public
        </label>
          <div className="flex gap-2">
            {["Hommes", "Femmes", "Enfants"].map((audience) => {
              const isSelected = selectedAudience === audience;
              return (
                <button
                  key={audience}
                  onClick={() => setSelectedAudience(audience)}
                  className={`flex-1 rounded-md border-2 px-3 py-2 text-xs font-semibold transition-all duration-300 sm:px-4 sm:py-2.5 sm:text-sm ${
                  isSelected
                    ? "border-primary bg-primary text-white"
                    : "border-gray-300 bg-white text-secondary hover:border-primary"
                }`}
              >
                {audience}
              </button>
            );
          })}
        </div>
      </div>

      {/* Customization Info */}
      {product.isCustomizable && customization && (
        <div className="rounded-md bg-green-50 border-2 border-green-200 p-3">
          <p className="text-sm font-medium text-green-800">
            ✓ Personnalisé: <strong>{customization.number}</strong> - <strong>{customization.name.toUpperCase()}</strong>
          </p>
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="rounded-md bg-red-50 border-2 border-red-200 p-3">
          <p className="text-sm font-medium text-red-800">{errorMessage}</p>
        </div>
      )}

      {/* Customize Button (if customizable) */}
      {product.isCustomizable && (
        <div>
          <button
            onClick={() => setShowCustomizationModal(true)}
            className="w-full rounded-md border-2 border-primary bg-transparent px-4 py-3 text-sm font-bold uppercase tracking-wide text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105 active:scale-95 shadow-lg sm:px-6 sm:py-4 sm:text-base"
          >
            Personnaliser
          </button>
        </div>
      )}

      {/* Add to Cart Button */}
      <div>
        <button
          onClick={handleAddToCart}
          className="w-full rounded-md bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-primary-dark hover:scale-105 active:scale-95 shadow-lg sm:px-6 sm:py-4 sm:text-base"
        >
          Ajouter au panier
        </button>
      </div>

      {/* Customization Modal */}
      <CustomizationModal
        isOpen={showCustomizationModal}
        onClose={() => setShowCustomizationModal(false)}
        onConfirm={handleCustomizationConfirm}
        initialName={customization?.name || ""}
        initialNumber={customization?.number || ""}
        selectedColor={selectedColor || undefined}
      />
    </div>
  );
}
