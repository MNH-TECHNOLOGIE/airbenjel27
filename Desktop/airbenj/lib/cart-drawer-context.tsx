"use client";

import React, { createContext, useContext, useState } from "react";

interface CartDrawerContextType {
  isOpen: boolean;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  showOrderForm: boolean;
  openOrderForm: () => void;
  closeOrderForm: () => void;
}

const CartDrawerContext = createContext<CartDrawerContextType | undefined>(
  undefined
);

export function CartDrawerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const openCartDrawer = () => {
    setIsOpen(true);
    setShowOrderForm(false);
  };

  const closeCartDrawer = () => {
    setIsOpen(false);
    setShowOrderForm(false);
  };

  const openOrderForm = () => {
    setShowOrderForm(true);
  };

  const closeOrderForm = () => {
    setShowOrderForm(false);
  };

  return (
    <CartDrawerContext.Provider
      value={{
        isOpen,
        openCartDrawer,
        closeCartDrawer,
        showOrderForm,
        openOrderForm,
        closeOrderForm,
      }}
    >
      {children}
    </CartDrawerContext.Provider>
  );
}

export function useCartDrawer() {
  const context = useContext(CartDrawerContext);
  if (context === undefined) {
    throw new Error("useCartDrawer must be used within a CartDrawerProvider");
  }
  return context;
}


