"use client";

import { useState, useEffect } from "react";

interface CustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (name: string, number: string) => void;
  initialName?: string;
  initialNumber?: string;
  selectedColor?: string;
}

export default function CustomizationModal({
  isOpen,
  onClose,
  onConfirm,
  initialName = "",
  initialNumber = "",
  selectedColor,
}: CustomizationModalProps) {
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

  const shirtColor = selectedColor && colorMap[selectedColor] ? colorMap[selectedColor] : "#FFFFFF";
  const isLightColor = shirtColor === "#FFFFFF" || shirtColor === "#FFD700" || shirtColor === "#FF69B4";
  const textColor = isLightColor ? "#2B2D42" : "#FFFFFF";
  const [name, setName] = useState(initialName);
  const [number, setNumber] = useState(initialNumber);
  const [errors, setErrors] = useState<{ name?: string; number?: string }>({});

  useEffect(() => {
    if (isOpen) {
      setName(initialName);
      setNumber(initialNumber);
      setErrors({});
    }
  }, [isOpen, initialName, initialNumber]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; number?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Le nom est requis";
    } else if (name.trim().length > 20) {
      newErrors.name = "Le nom ne peut pas dépasser 20 caractères";
    }

    if (!number.trim()) {
      newErrors.number = "Le numéro est requis";
    } else if (!/^\d+$/.test(number.trim())) {
      newErrors.number = "Le numéro doit être un nombre";
    } else if (parseInt(number.trim()) < 1 || parseInt(number.trim()) > 99) {
      newErrors.number = "Le numéro doit être entre 1 et 99";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onConfirm(name.trim(), number.trim());
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
        <div className="relative w-full max-w-md rounded-lg bg-white shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 sm:px-6 sm:py-4">
            <h2 className="text-lg font-bold text-secondary sm:text-xl">Personnaliser votre t-shirt</h2>
            <button
              onClick={onClose}
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-4 py-3 sm:px-6 sm:py-4">
            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="custom-name" className="mb-2 block text-sm font-semibold text-secondary">
                  Nom à imprimer <span className="text-red-500">*</span>
                </label>
                <input
                  id="custom-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="Ex: BENJEL"
                  maxLength={20}
                  className={`w-full rounded-md border-2 px-4 py-3 text-base transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.name
                      ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:border-primary"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Maximum 20 caractères
                </p>
              </div>

              {/* Number Input */}
              <div>
                <label htmlFor="custom-number" className="mb-2 block text-sm font-semibold text-secondary">
                  Numéro à imprimer <span className="text-red-500">*</span>
                </label>
                <input
                  id="custom-number"
                  type="text"
                  value={number}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 2);
                    setNumber(value);
                    if (errors.number) setErrors({ ...errors, number: undefined });
                  }}
                  placeholder="Ex: 27"
                  maxLength={2}
                  className={`w-full rounded-md border-2 px-4 py-3 text-base transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.number
                      ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:border-primary"
                  }`}
                />
                {errors.number && (
                  <p className="mt-1 text-sm text-red-600">{errors.number}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Entre 1 et 99
                </p>
              </div>
            </div>

            {/* Preview */}
            {(name.trim() || number.trim()) && (
              <div className="mt-6 rounded-lg border-2 border-gray-200 bg-gray-50 p-4">
                <p className="mb-4 text-sm font-semibold text-gray-700">Aperçu:</p>
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[180px] overflow-hidden rounded-lg shadow-xl sm:max-w-[220px]">
                  {/* T-shirt SVG - Realistic Design */}
                  <svg
                    viewBox="0 0 240 320"
                    className="h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* T-shirt body - More realistic shape */}
                    <path
                      d="M 70 35 L 70 65 L 50 90 L 50 290 L 190 290 L 190 90 L 170 65 L 170 35 L 145 35 L 135 50 L 105 50 L 95 35 Z"
                      fill={shirtColor}
                      stroke={isLightColor ? "#d1d5db" : "#1a1a1a"}
                      strokeWidth="2.5"
                    />
                    
                    {/* Neckline - More realistic rounded collar */}
                    <ellipse
                      cx="120"
                      cy="42"
                      rx="28"
                      ry="14"
                      fill={shirtColor}
                      stroke={isLightColor ? "#d1d5db" : "#1a1a1a"}
                      strokeWidth="2"
                    />
                    <path
                      d="M 92 42 Q 120 50 148 42"
                      fill="none"
                      stroke={isLightColor ? "#d1d5db" : "#1a1a1a"}
                      strokeWidth="2"
                    />
                    
                    {/* Left sleeve - More realistic */}
                    <path
                      d="M 50 90 L 35 110 L 35 190 L 50 210 L 50 90"
                      fill={shirtColor}
                      stroke={isLightColor ? "#d1d5db" : "#1a1a1a"}
                      strokeWidth="2.5"
                    />
                    <ellipse
                      cx="42.5"
                      cy="200"
                      rx="7"
                      ry="10"
                      fill={shirtColor}
                      stroke={isLightColor ? "#d1d5db" : "#1a1a1a"}
                      strokeWidth="2"
                    />
                    
                    {/* Right sleeve - More realistic */}
                    <path
                      d="M 190 90 L 205 110 L 205 190 L 190 210 L 190 90"
                      fill={shirtColor}
                      stroke={isLightColor ? "#d1d5db" : "#1a1a1a"}
                      strokeWidth="2.5"
                    />
                    <ellipse
                      cx="197.5"
                      cy="200"
                      rx="7"
                      ry="10"
                      fill={shirtColor}
                      stroke={isLightColor ? "#d1d5db" : "#1a1a1a"}
                      strokeWidth="2"
                    />
                    
                    {/* Seams - More realistic */}
                    <path
                      d="M 120 90 Q 120 100 120 110 Q 120 120 120 130"
                      fill="none"
                      stroke={isLightColor ? "#e5e7eb" : "#2a2a2a"}
                      strokeWidth="1"
                      strokeDasharray="3,2"
                      opacity="0.4"
                    />
                    
                    {/* Shoulder seams */}
                    <path
                      d="M 70 65 Q 90 70 110 65"
                      fill="none"
                      stroke={isLightColor ? "#e5e7eb" : "#2a2a2a"}
                      strokeWidth="1"
                      opacity="0.3"
                    />
                    <path
                      d="M 130 65 Q 150 70 170 65"
                      fill="none"
                      stroke={isLightColor ? "#e5e7eb" : "#2a2a2a"}
                      strokeWidth="1"
                      opacity="0.3"
                    />
                    
                    {/* Name on front - Large and bold at top */}
                    {name.trim() && (
                      <text
                        x="120"
                        y="108"
                        fontSize="22"
                        fontWeight="900"
                        fill={textColor}
                        textAnchor="middle"
                        fontFamily="Arial, sans-serif"
                        letterSpacing="1.2"
                        stroke={isLightColor ? "#000000" : "#FFFFFF"}
                        strokeWidth="1"
                        paintOrder="stroke fill"
                      >
                        {name.length > 10 ? name.substring(0, 10).toUpperCase() : name.toUpperCase()}
                      </text>
                    )}
                    
                    {/* Number on front - Below name, smaller */}
                    {number.trim() && (
                      <text
                        x="120"
                        y="185"
                        fontSize="38"
                        fontWeight="900"
                        fill={textColor}
                        textAnchor="middle"
                        fontFamily="Arial, sans-serif"
                        stroke={isLightColor ? "#000000" : "#FFFFFF"}
                        strokeWidth="2"
                        paintOrder="stroke fill"
                      >
                        {number}
                      </text>
                    )}
                    
                    {/* Bottom hem */}
                    <path
                      d="M 50 290 Q 120 295 190 290"
                      fill="none"
                      stroke={isLightColor ? "#d1d5db" : "#1a1a1a"}
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                {/* Text preview below */}
                <div className="mt-3 flex items-center justify-center gap-2 rounded bg-white p-2 text-center">
                  {name && (
                    <>
                      <span className="text-sm font-semibold text-secondary uppercase">
                        {name}
                      </span>
                      <span className="text-gray-400">•</span>
                    </>
                  )}
                  <span className="text-lg font-bold text-secondary">
                    {number || "?"}
                  </span>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:gap-3">
              <button
                type="button"
                onClick={onClose}
                className="btn-outline-secondary flex-1"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="btn-primary flex-1"
              >
                Confirmer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

