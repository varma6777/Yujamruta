import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Droplets, 
  ShoppingBag, 
  CheckCircle2, 
  MessageCircle, 
  Truck, 
  ShieldCheck, 
  Plus, 
  Minus, 
  Star, 
  Phone, 
  ArrowLeft, 
  AlertCircle, 
  MapPin, 
  User, 
  PackageCheck,
  Heart,
  Trees
} from "lucide-react";
import { BRAND_INFO, getHoneyProducts } from "../data/siteData";
import { TraditionalMandala, FloatingLeaf } from "../components/BotanicalElements";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

export default function BuyHoney() {
  const { addToCart } = useCart();
  const { language, t } = useLanguage();
  const isKn = language === "kn";

  const honeyProducts = getHoneyProducts(language);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Quantities for each card
  const [quantities, setQuantities] = useState({
    "honey-250g": 1,
    "honey-500g": 1,
    "honey-1kg": 1,
  });

  // Fast Order Form State
  const [formData, setFormData] = useState({
    customerName: "",
    mobileNumber: "",
    selectedProduct: isKn ? "ನೈಸರ್ಗಿಕ ಕಾಡು ಜೇನುತುಪ್ಪ – 500 ಗ್ರಾಂ (₹340)" : "Natural Multifloral Honey – 500g (₹340)",
    quantity: 1,
    deliveryAddress: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Adjust card quantity
  const handleQtyChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  // Direct WhatsApp order from product card
  const handleDirectCardOrder = (prod) => {
    const qty = quantities[prod.id] || 1;
    const total = prod.price * qty;
    const msg = isKn 
      ? `*ಹೊಸ ಜೇನುತುಪ್ಪದ ಆರ್ಡರ್ - ಯುಜಾಮೃತ*
----------------------------------------
*ಉತ್ಪನ್ನ:* ${prod.name}
*ತೂಕ / ಗಾತ್ರ:* ${prod.weight}
*ಪ್ರಮಾಣ:* ${qty} ಸೀಸೆ(ಗಳು)
*ಪ್ರತಿ ಸೀಸೆಯ ಬೆಲೆ:* ₹${prod.price}
*ಒಟ್ಟು ಅಂದಾಜು ಮೊತ್ತ:* ₹${total}
----------------------------------------
_ನಮಸ್ಕಾರ! ದಯವಿಟ್ಟು ಲಭ್ಯತೆ, ರವಾನೆ ವಿವರ ಮತ್ತು ಪಾವತಿ ಮಾಹಿತಿಯನ್ನು ಕಳುಹಿಸಿ._`
      : `*NEW HONEY ORDER - YUJAMRUTHA*
----------------------------------------
*Product:* ${prod.name}
*Size / Weight:* ${prod.weight}
*Quantity:* ${qty} jar(s)
*Price per Jar:* ₹${prod.price}
*Estimated Total:* ₹${total}
----------------------------------------
_Namaste! Please confirm availability, shipping details, and payment options._`;

    const url = `https://wa.me/${BRAND_INFO.rawPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  // Select product for the form below
  const handleSelectForForm = (prod) => {
    const qty = quantities[prod.id] || 1;
    setFormData((prev) => ({
      ...prev,
      selectedProduct: `${prod.name} – ${prod.weight} (₹${prod.price})`,
      quantity: qty
    }));

    const formEl = document.getElementById("order-form-section");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validatePhone = (num) => {
    const cleaned = (num || "").replace(/\D/g, "");
    return cleaned.length === 10 || (cleaned.length === 12 && cleaned.startsWith("91"));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.customerName.trim() || formData.customerName.trim().length < 2) {
      newErrors.customerName = isKn ? "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ." : "Please enter your full name.";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = isKn ? "ರವಾನೆ ವಿವರಗಳಿಗೆ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಅಗತ್ಯವಿದೆ." : "Mobile number is required for dispatch.";
    } else if (!validatePhone(formData.mobileNumber)) {
      newErrors.mobileNumber = isKn ? "ದಯವಿಟ್ಟು 10 ಅಂಕಿಗಳ ಮಾನ್ಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ." : "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.deliveryAddress.trim() || formData.deliveryAddress.trim().length < 8) {
      newErrors.deliveryAddress = isKn ? "ದಯವಿಟ್ಟು ಪಿನ್‌ಕೋಡ್ ಸಮೇತ ಪೂರ್ಣ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ." : "Please enter full delivery address including city and pincode.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const orderMsg = isKn 
      ? `*ಹೊಸ ಜೇನುತುಪ್ಪದ ಡೆಲಿವರಿ ಆರ್ಡರ್ - ಯುಜಾಮೃತ*
----------------------------------------
*ಗ್ರಾಹಕರ ಹೆಸರು:* ${formData.customerName.trim()}
*ಸಂಪರ್ಕ ಸಂಖ್ಯೆ:* ${formData.mobileNumber.trim()}
*ಆಯ್ದ ಉತ್ಪನ್ನ:* ${formData.selectedProduct}
*ಪ್ರಮಾಣ:* ${formData.quantity} ಸೀಸೆ(ಗಳು)
*ಡೆಲಿವರಿ ವಿಳಾಸ:*
${formData.deliveryAddress.trim()}
----------------------------------------
_ದಯವಿಟ್ಟು ಆರ್ಡರ್ ದೃಢೀಕರಣ ಮತ್ತು UPI ಕ್ಯೂಆರ್ ಕೋಡ್ ಕಳುಹಿಸಿ._`
      : `*NEW HONEY DELIVERY ORDER - YUJAMRUTHA*
----------------------------------------
*Customer Name:* ${formData.customerName.trim()}
*Contact Number:* ${formData.mobileNumber.trim()}
*Selected Item:* ${formData.selectedProduct}
*Quantity:* ${formData.quantity} Jar(s)
*Delivery Address:*
${formData.deliveryAddress.trim()}
----------------------------------------
_Please send order confirmation, shipping timeline, and payment QR code._`;

    const encoded = encodeURIComponent(orderMsg);
    const whatsappUrl = `https://wa.me/${BRAND_INFO.rawPhone}?text=${encoded}`;

    setIsSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-cream min-h-screen">
      
      {/* ===================== TOP HEADER / BREADCRUMB ===================== */}
      <section className="bg-forest-950 text-cream py-12 border-b-2 border-honey/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-mandala pointer-events-none opacity-20"></div>
        <FloatingLeaf className="top-4 left-6" delay="0s" />
        <FloatingLeaf className="bottom-4 right-8" delay="2s" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-1.5 text-xs text-honey hover:underline font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t("btn_back_to_home")}</span>
            </Link>
            <span className="text-stone-500">/</span>
            <Link 
              to="/honey" 
              className="text-xs text-cream/70 hover:text-honey"
            >
              {t("nav_honey")}
            </Link>
            <span className="text-stone-500">/</span>
            <span className="text-xs text-white font-semibold">{t("nav_buy_honey")}</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey/20 border border-honey/40 text-honey-light text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Droplets className="w-4 h-4 text-honey" />
              <span>{t("buy_hero_badge")}</span>
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">
              {t("buy_hero_title")}
            </h1>

            <p className="font-decorative italic text-lg sm:text-xl md:text-2xl text-honey font-medium mb-3">
              {t("buy_hero_tagline")}
            </p>

            <p className="text-xs sm:text-sm md:text-base text-cream/85 leading-relaxed font-light">
              {t("buy_hero_desc")}
            </p>
          </div>
        </div>
      </section>

      {/* ===================== PRODUCT CARDS SECTION ===================== */}
      <section className="py-10 sm:py-16 bg-cream relative">
        <TraditionalMandala className="absolute top-10 right-10" size={300} />
        <TraditionalMandala className="absolute bottom-10 left-10" size={300} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-honey/15 text-honey-dark text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-honey-dark" />
              <span>{isKn ? "ನಿಮ್ಮ ಜೇನುತುಪ್ಪದ ಅಳತೆ ಆಯ್ಕೆಮಾಡಿ" : "Select Your Honey Package"}</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-forest">
              {isKn ? "ನೈರ್ಮಲ್ಯದ ಗಾಜಿನ ಸೀಸೆಗಳಲ್ಲಿ ತಾಜಾ ಪ್ಯಾಕಿಂಗ್" : "Bottled Fresh in Sanitized Glass Jars"}
            </h2>
            <p className="text-earth-dark/75 text-xs sm:text-sm max-w-2xl mx-auto mt-2">
              {isKn 
                ? "ನಮ್ಮ ಜೇನನ್ನು ಯಾವುದೇ ಬಿಸಿ ಮಾಡದೆ ಶೀತ ವಿಧಾನದಲ್ಲಿ ತೆಗೆಯಲಾಗುತ್ತದೆ. ಇದರಿಂದ ಜೀವಂತ ಕಿಣ್ವಗಳು ಮತ್ತು ಪರಾಗ ನೈಸರ್ಗಿಕವಾಗಿ ಉಳಿಯುತ್ತವೆ."
                : "All our honey is raw, single-filtered, and never subjected to industrial heat treatment, keeping natural enzymes, pollens, and medicinal benefits intact."}
            </p>
          </div>

          {/* 3 Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {honeyProducts.map((prod) => {
              const qty = quantities[prod.id] || 1;
              const isPopular = prod.id === "honey-500g";

              return (
                <div 
                  key={prod.id} 
                  className={`bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1 relative ${
                    isPopular 
                      ? "border-2 border-honey shadow-honey/20 ring-2 ring-honey/30" 
                      : "border border-honey/30"
                  }`}
                >
                  {isPopular && (
                    <div className="bg-gradient-to-r from-honey via-honey-light to-honey text-forest-950 text-xs font-bold py-1.5 text-center uppercase tracking-wider shadow-sm">
                      ★ {isKn ? "ದೈನಂದಿನ ಸಾಧನೆಗೆ ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಆಯ್ಕೆ" : "Most Popular Choice for Daily Sadhana"}
                    </div>
                  )}

                  <div>
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden bg-forest-950">
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "/assets/images/honey-500g.jpg";
                        }}
                      />
                      <div className="absolute top-3 left-3 bg-honey text-forest-950 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {prod.badge}
                      </div>
                      <div className="absolute top-3 right-3 bg-forest-950/85 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-honey/20">
                        {prod.weight}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-1 text-honey mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-honey" />
                        ))}
                        <span className="text-xs text-earth-dark/70 ml-1.5 font-medium">({prod.reviewsCount} {t("reviews_count")})</span>
                      </div>

                      <h3 className="font-heading text-xl font-bold text-forest mb-1">
                        {prod.name}
                      </h3>

                      <p className="text-earth-dark/80 text-xs sm:text-sm leading-relaxed mb-4">
                        {prod.description}
                      </p>

                      {/* Price & Weight Row */}
                      <div className="pt-3 border-t border-stone-100 flex items-baseline justify-between mb-4">
                        <div>
                          <span className="text-xs text-stone-500 block">{isKn ? "ಬೆಲೆ" : "Price"}</span>
                          <span className="font-heading text-3xl font-bold text-forest">₹{prod.price}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-stone-500 block">{isKn ? "ನಿವ್ವಳ ತೂಕ" : "Net Weight"}</span>
                          <span className="font-semibold text-earth-dark text-sm">{prod.weight}</span>
                        </div>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center justify-between p-2 rounded-2xl bg-cream-soft border border-honey/25 mb-4">
                        <span className="text-xs font-semibold text-forest pl-2">{t("honey_field_qty")}:</span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => handleQtyChange(prod.id, -1)}
                            className="w-8 h-8 rounded-xl bg-white border border-stone-200 hover:border-honey text-forest font-bold flex items-center justify-center transition-colors active:scale-95 shadow-sm cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-heading font-bold text-forest text-base w-6 text-center">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleQtyChange(prod.id, 1)}
                            className="w-8 h-8 rounded-xl bg-white border border-stone-200 hover:border-honey text-forest font-bold flex items-center justify-center transition-colors active:scale-95 shadow-sm cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="p-6 pt-0 space-y-2">
                    <button
                      type="button"
                      onClick={() => addToCart(prod.id, qty)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-honey via-honey-light to-honey text-forest-950 hover:text-white hover:from-forest-800 hover:to-forest-900 font-bold py-3 px-4 rounded-2xl shadow-honey transition-all text-sm active:scale-98 cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4 text-forest-950" />
                      <span>{isKn ? `ಬುಟ್ಟಿಗೆ ${qty} ಸೀಸೆ ಸೇರಿಸಿ (₹${prod.price * qty})` : `Add ${qty} Jar${qty > 1 ? "s" : ""} to Basket (₹${prod.price * qty})`}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDirectCardOrder(prod)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-2.5 px-4 rounded-xl shadow-sm transition-all text-xs active:scale-98 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                      <span>{isKn ? "ನೇರ ವಾಟ್ಸಾಪ್ ಆರ್ಡರ್" : "Instant WhatsApp Order"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectForForm(prod)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-forest font-medium py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      <span>{isKn ? "ವಿಳಾಸ ನಮೂದಿಸಿ ಆರ್ಡರ್ ಮಾಡಿ ↓" : "Fill Delivery Address Form ↓"}</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== ORDER FORM SECTION ===================== */}
      <section id="order-form-section" className="py-16 bg-cream-soft border-t border-honey/20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-honey/20 border border-honey/40 text-honey-dark text-xs font-bold uppercase tracking-wider mb-2">
              <Truck className="w-3.5 h-3.5" />
              <span>{t("honey_order_form_badge")}</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest">
              {t("honey_order_form_title")}
            </h2>
            <p className="text-earth-dark/75 text-xs sm:text-sm max-w-xl mx-auto mt-1">
              {t("honey_order_form_subtitle")}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-elevated border-2 border-honey/40">
            {isSubmitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-bold">{isKn ? "ಆರ್ಡರ್ ವಿವರ ಸಿದ್ಧಗೊಂಡಿದೆ!" : "Order details prepared!"}</p>
                  <p className="text-xs mt-0.5">
                    {isKn ? "ವಾಟ್ಸಾಪ್ ಹೊಸ ಟ್ಯಾಬ್‌ನಲ್ಲಿ ತೆರೆದಿದೆ. ದಯವಿಟ್ಟು ಸಂದೇಶ ಕಳುಹಿಸಿ." : "WhatsApp has opened in a new tab. Please send the message to confirm your delivery."}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-2">
                    {t("honey_field_name")}
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    placeholder={t("honey_field_name_ph")}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none bg-stone-50 ${
                      errors.customerName ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-stone-200 focus:border-honey"
                    }`}
                  />
                  {errors.customerName && (
                    <p className="text-xs text-red-600 mt-1">{errors.customerName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-2">
                    {t("honey_field_mobile")}
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder={t("honey_field_mobile_ph")}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none bg-stone-50 ${
                      errors.mobileNumber ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-stone-200 focus:border-honey"
                    }`}
                  />
                  {errors.mobileNumber && (
                    <p className="text-xs text-red-600 mt-1">{errors.mobileNumber}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-forest mb-2">
                  {t("honey_field_address")}
                </label>
                <textarea
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder={t("honey_field_address_ph")}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none bg-stone-50 ${
                    errors.deliveryAddress ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-stone-200 focus:border-honey"
                  }`}
                ></textarea>
                {errors.deliveryAddress && (
                  <p className="text-xs text-red-600 mt-1">{errors.deliveryAddress}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-elevated transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>{t("honey_btn_submit_order")}</span>
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}