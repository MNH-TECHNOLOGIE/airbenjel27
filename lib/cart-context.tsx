"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/types";

export interface CartItem {
  id: string;
  product: Product;
  size: string | null;
  color: string | null;
  audience: string | null;
  quantity: number;
  customization?: {
    name: string;
    number: string;
  };
}

interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    size: string | null,
    color: string | null,
    audience: string | null,
    customization?: { name: string; number: string }
  ) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart);
          setItems(parsedCart);
        } catch (error) {
          console.error("Error loading cart from localStorage:", error);
          localStorage.removeItem("cart");
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    if (typeof window !== "undefined" && isLoaded) {
      try {
        localStorage.setItem("cart", JSON.stringify(items));
      } catch (error) {
        console.error("Error saving cart to localStorage:", error);
      }
    }
  }, [items, isLoaded]);

  const addToCart = (
    product: Product,
    size: string | null,
    color: string | null,
    audience: string | null,
    customization?: { name: string; number: string }
  ) => {
    setItems((prevItems) => {
      // Check if item already exists with same product, size, color, and customization
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.size === size &&
          item.color === color &&
          item.audience === audience &&
          JSON.stringify(item.customization) === JSON.stringify(customization)
      );

      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += 1;
        return newItems;
      } else {
        // Add new item
        const newItem: CartItem = {
          id: `${product.id}-${size || "no-size"}-${color || "no-color"}-${audience || "no-audience"}-${customization ? `-${customization.name}-${customization.number}` : ""}-${Date.now()}`,
          product,
          size,
          color,
          audience,
          quantity: 1,
          customization,
        };
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
