import React, { createContext, useContext, useState, useEffect } from "react";
import { HONEY_PRODUCTS, BRAND_INFO } from "../data/siteData";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("yujamrutha_cart");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("yujamrutha_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Cart storage error:", e);
    }
  }, [cart]);

  const addToCart = (productId, qty = 1) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + qty,
    }));
    setIsOpen(true);
  };

  const updateQuantity = (productId, delta) => {
    setCart((prev) => {
      const current = prev[productId] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return { ...prev, [productId]: next };
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[productId];
      return copy;
    });
  };

  const clearCart = () => setCart({});

  const totalItems = Object.values(cart).reduce((sum, q) => sum + q, 0);

  const cartDetails = Object.entries(cart).map(([id, qty]) => {
    const prod = HONEY_PRODUCTS.find((p) => p.id === id) || {
      id,
      name: "Yujamrutha Honey",
      price: 340,
      weight: "500g",
      image: "/assets/images/honey-500g.jpg",
    };
    return {
      ...prod,
      quantity: qty,
      itemTotal: prod.price * qty,
    };
  });

  const subtotal = cartDetails.reduce((sum, item) => sum + item.itemTotal, 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  // Generate pre-filled WhatsApp checkout URL
  const getWhatsAppCheckoutUrl = () => {
    if (cartDetails.length === 0) return `https://wa.me/${BRAND_INFO.rawPhone}`;
    const itemsList = cartDetails
      .map(
        (item) => `• ${item.name} (${item.weight}) x ${item.quantity} jar(s) = ₹${item.itemTotal}`
      )
      .join("\n");

    const message = 
`*NEW HONEY BASKET ORDER - YUJAMRUTHA*
----------------------------------------
${itemsList}
----------------------------------------
*Estimated Subtotal:* ₹${subtotal}
*Total Jars:* ${totalItems} jar(s)
----------------------------------------
_Namaste Master Abhinandan! I would like to confirm my order and arrange delivery._`;

    return `https://wa.me/${BRAND_INFO.rawPhone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartDetails,
        totalItems,
        subtotal,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getWhatsAppCheckoutUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}