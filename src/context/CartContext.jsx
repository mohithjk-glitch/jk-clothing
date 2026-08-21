import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'jk_cart_v1';

function readStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// A cart "line" is unique per product + size + color combination.
function lineKey(productId, size, color) {
  return `${productId}__${size}__${color}`;
}

export function CartProvider({ children }) {
  const [lines, setLines] = useState(readStorage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  function addToCart(product, { size, color, quantity = 1 }) {
    setLines((prev) => {
      const key = lineKey(product.id, size, color);
      const existing = prev.find((l) => l.key === key);
      if (existing) {
        return prev.map((l) =>
          l.key === key ? { ...l, quantity: l.quantity + quantity } : l
        );
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          name: product.name,
          image: product.images[0],
          price: product.price,
          originalPrice: product.originalPrice,
          size,
          color,
          quantity,
          stock: product.stock,
        },
      ];
    });
  }

  function updateQuantity(key, quantity) {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => l.key !== key)
        : prev.map((l) => (l.key === key ? { ...l, quantity } : l))
    );
  }

  function removeFromCart(key) {
    setLines((prev) => prev.filter((l) => l.key !== key));
  }

  function clearCart() {
    setLines([]);
  }

  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.price * l.quantity, 0),
    [lines]
  );

  const originalSubtotal = useMemo(
    () => lines.reduce((sum, l) => sum + (l.originalPrice ?? l.price) * l.quantity, 0),
    [lines]
  );

  const discount = Math.max(0, originalSubtotal - subtotal);
  const delivery = lines.length === 0 || subtotal >= 2999 ? 0 : 99;
  const total = subtotal + delivery;

  const value = {
    lines,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    itemCount,
    subtotal,
    discount,
    delivery,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
