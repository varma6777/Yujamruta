import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ShoppingBag, 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Droplets 
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

export default function CartDrawer() {
  const { 
    cartDetails, 
    totalItems, 
    subtotal, 
    isOpen, 
    closeCart, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    getWhatsAppCheckoutUrl 
  } = useCart();

  const { language, t } = useLanguage();
  const isKn = language === "kn";

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCart]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-forest-950/75 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md bg-forest-900 border-l-2 border-honey/40 text-cream flex flex-col shadow-2xl relative">
          
          {/* Header */}
          <div className="p-5 border-b border-forest-800 flex items-center justify-between bg-forest-950/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-honey/20 border border-honey/40 flex items-center justify-center text-honey">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white">{t("cart_header_title")}</h3>
                <p className="text-xs text-honey font-medium">
                  {totalItems === 0 
                    ? (isKn ? "ಬುಟ್ಟಿ ಖಾಲಿಯಾಗಿದೆ" : "Basket is empty") 
                    : (isKn ? `${totalItems} ಸೀಸೆ(ಗಳು) ಆಯ್ಕೆಯಾಗಿದೆ` : `${totalItems} jar(s) selected`)}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeCart}
              className="p-2 rounded-xl text-cream/70 hover:text-white hover:bg-forest-800 transition-colors border border-transparent hover:border-forest-700 cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartDetails.length === 0 ? (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-forest-800 border-2 border-honey/30 flex items-center justify-center text-honey mx-auto">
                  <Droplets className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-lg">{t("cart_empty_title")}</h4>
                  <p className="text-xs text-cream/70 mt-1 max-w-xs mx-auto">
                    {t("cart_empty_desc")}
                  </p>
                </div>
                <Link
                  to="/buy-honey"
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-honey to-honey-light text-forest-950 font-bold px-5 py-2.5 rounded-full text-xs shadow-honey hover:shadow-elevated transition-all"
                >
                  <span>{t("cart_btn_explore")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {cartDetails.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-forest-950/70 border border-honey/25 flex items-center gap-3 hover:border-honey/50 transition-colors"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover bg-forest-900 border border-honey/20 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-bold text-white text-sm truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-honey font-medium">
                        {item.weight} • ₹{item.price} {isKn ? "ಪ್ರತಿ ಸೀಸೆಗೆ" : "each"}
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2 bg-forest-900 border border-forest-700 rounded-lg p-0.5">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded flex items-center justify-center hover:bg-forest-800 text-cream transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-heading font-bold text-xs text-honey w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded flex items-center justify-center hover:bg-forest-800 text-cream transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Total & Remove */}
                        <div className="flex items-center gap-3">
                          <span className="font-heading font-bold text-white text-sm">
                            ₹{item.itemTotal}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-stone-400 hover:text-red-400 transition-colors p-1 cursor-pointer"
                            aria-label="Remove item"
                            title="Remove from basket"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-[11px] text-stone-400 hover:text-red-300 underline cursor-pointer"
                  >
                    {t("cart_clear")}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartDetails.length > 0 && (
            <div className="p-5 border-t border-forest-800 bg-forest-950/95 space-y-3.5">
              <div className="flex items-center justify-between text-xs text-cream/80">
                <span>{isKn ? "ಒಟ್ಟು ಸೀಸೆಗಳು:" : "Total Items:"}</span>
                <span className="font-semibold text-white">{totalItems} {isKn ? "ಸೀಸೆಗಳು" : "jar(s)"}</span>
              </div>

              <div className="flex items-baseline justify-between border-t border-forest-800 pt-2">
                <div>
                  <span className="text-xs uppercase tracking-wider text-honey font-bold">{t("cart_subtotal")}</span>
                  <p className="text-[10px] text-cream/60">{t("cart_shipping_note")}</p>
                </div>
                <span className="font-heading text-2xl font-bold text-white">
                  ₹{subtotal}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-forest-900 border border-honey/20 text-[11px] text-honey-light flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-honey shrink-0" />
                <span>{isKn ? "100% ಶುದ್ಧ ಕಾಡು ಜೇನುತುಪ್ಪ • ಸ್ವಚ್ಛ ಗಾಜಿನ ಸೀಸೆಗಳು" : "100% Raw Forest Honey • Sanitized Glass Jars"}</span>
              </div>

              {/* WhatsApp Checkout Button */}
              <a
                href={getWhatsAppCheckoutUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-4 rounded-2xl shadow-lg transition-all text-sm active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>{isKn ? `ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಆರ್ಡರ್ ಮಾಡಿ (₹${subtotal})` : `Order via WhatsApp (₹${subtotal})`}</span>
              </a>

              <Link
                to="/buy-honey"
                onClick={closeCart}
                className="block text-center text-xs text-honey hover:underline font-medium pt-1"
              >
                {isKn ? "ಜೇನುತುಪ್ಪದ ಸಂಪೂರ್ಣ ಅಂಗಡಿ ನೋಡಿ →" : "Or View Full Honey Storefront →"}
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}