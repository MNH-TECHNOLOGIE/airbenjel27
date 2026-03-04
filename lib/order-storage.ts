import type { CartItem } from "@/lib/cart-context";

export interface OrderCustomerInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
}

export interface StoredOrderItem {
  id: string;
  productId: string;
  productName: string;
  productSlug: string;
  image: string | null;
  quantity: number;
  unitPrice: number;
  size: string | null;
  color: string | null;
  audience: string | null;
  customization?: {
    name: string;
    number: string;
  };
}

export interface StoredOrder {
  id: string;
  createdAt: string;
  customer: OrderCustomerInfo;
  items: StoredOrderItem[];
  totalItems: number;
  totalAmount: number;
}

const ORDERS_STORAGE_KEY = "orders";

function parseOrders(rawValue: string | null): StoredOrder[] {
  if (!rawValue) return [];
  try {
    const parsed = JSON.parse(rawValue);
    return Array.isArray(parsed) ? (parsed as StoredOrder[]) : [];
  } catch {
    return [];
  }
}

export function generateLocalOrderId() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0");
  return `AB27-${timestamp}-${random}`;
}

export function buildStoredOrder(
  id: string,
  customer: OrderCustomerInfo,
  items: CartItem[]
): StoredOrder {
  const storedItems: StoredOrderItem[] = items.map((item) => ({
    id: item.id,
    productId: item.product.id,
    productName: item.product.name,
    productSlug: item.product.slug,
    image: item.product.images[0] ?? null,
    quantity: item.quantity,
    unitPrice: item.product.price,
    size: item.size,
    color: item.color,
    audience: item.audience,
    customization: item.customization,
  }));

  const totalItems = storedItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = storedItems.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  return {
    id,
    createdAt: new Date().toISOString(),
    customer,
    items: storedItems,
    totalItems,
    totalAmount,
  };
}

export function saveOrder(order: StoredOrder) {
  if (typeof window === "undefined") return;
  const existing = parseOrders(localStorage.getItem(ORDERS_STORAGE_KEY));
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([order, ...existing]));
}

export function getOrderById(orderId: string): StoredOrder | null {
  if (typeof window === "undefined") return null;
  const existing = parseOrders(localStorage.getItem(ORDERS_STORAGE_KEY));
  return existing.find((order) => order.id === orderId) ?? null;
}
