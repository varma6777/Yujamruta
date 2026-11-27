import React, { useState } from "react";
import { 
  Sparkles, 
  Droplets, 
  Leaf, 
  ShieldCheck, 
  Trees, 
  PackageCheck, 
  Truck, 
  CheckCircle2, 
  MessageCircle, 
  Plus, 
  Minus, 
  Star, 
  ShoppingBag,
  Sun,
  Heart
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { FloatingLeaf, TraditionalMandala } from "../components/BotanicalElements";
import { BRAND_INFO, getHoneyProducts, getHoneySourcingSteps } from "../data/siteData";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

export default function Honey() {
  const { addToCart } = useCart();
  const { language, t } = useLanguage();
  const isKn = language === "kn";

  const honeyProducts = getHoneyProducts(language);
  const sourcingSteps = getHoneySourcingSteps(language);

  // Order Form State
  const [orderForm, setOrderForm] = useState({
    customerName: "",
    mobileNumber: "",
    selectedProduct: isKn ? "ನೈಸರ್ಗಿಕ ಕಾಡು ಜೇನುತುಪ್ಪ – 500 ಗ್ರಾಂ (₹340)" : "Natural Multifloral Honey – 500g (₹340)",
    quantity: 1,
    deliveryAddress: "",
  });

  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderError, setOrderError] = useState("");

  const handleOrderChange = (e) => {
    setOrderForm({
      ...orderForm,
      [e.target.name]: e.target.value
    });
    setOrderError("");
  };

  const handleQuantityAdjust = (delta) => {
    setOrderForm((prev) => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + delta)
    }));
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    if (!orderForm.customerName.trim() || !orderForm.mobileNumber.trim() || !orderForm.deliveryAddress.trim()) {
      setOrderError(isKn ? "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರು, ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಮತ್ತು ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ." : "Please fill out your Name, Mobile Number, and Delivery Address.");
      return;
    }

    const orderMsg = isKn
      ? `*ಹೊಸ ಜೇನುತುಪ್ಪದ ಆರ್ಡರ್ - ಯುಜಾಮೃತ*
----------------------------------------
*ಗ್ರಾಹಕರ ಹೆಸರು:* ${orderForm.customerName}
*ಮೊಬೈಲ್ ಸಂಖ್ಯೆ:* ${orderForm.mobileNumber}
*ಉತ್ಪನ್ನ:* ${orderForm.selectedProduct}
*ಪ್ರಮಾಣ:* ${orderForm.quantity} ಸೀಸೆ(ಗಳು)
*ಡೆಲಿವರಿ ವಿಳಾಸ:* ${orderForm.deliveryAddress}
----------------------------------------
_ದಯವಿಟ್ಟು ರವಾನೆ ಶುಲ್ಕ ಮತ್ತು ಒಟ್ಟು ಮೊತ್ತವನ್ನು ದೃಢೀಕರಿಸಿ._`
      : `*NEW HONEY ORDER - YUJAMRUTHA*
----------------------------------------
*Customer Name:* ${orderForm.customerName}
*Mobile Number:* ${orderForm.mobileNumber}
*Product:* ${orderForm.selectedProduct}
*Quantity:* ${orderForm.quantity} jar(s)
*Delivery Address:* ${orderForm.deliveryAddress}
----------------------------------------
_Please confirm total with shipping charges and payment details._`;

    const encoded = encodeURIComponent(orderMsg);
    const whatsappUrl = `https://wa.me/${BRAND_INFO.rawPhone}?text=${encoded}`;

    setOrderSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-cream min-h-screen">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[52vh] sm:min-h-[62vh] flex items-center justify-center bg-forest-950 text-cream overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/honey_hero_nature.jpg" 
            alt="Raw organic forest honey dripping from wooden dipper onto wild honeycomb in Western Ghats nature" 
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
            onError={(e) => {
              e.currentTarget.src = "/assets/images/wild_forest_honey.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/65 to-forest-950/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-forest-950/50 via-transparent to-forest-950/70 pointer-events-none"></div>
          <div className="absolute inset-0 bg-mandala pointer-events-none opacity-20"></div>
        </div>

        <FloatingLeaf className="top-10 left-10" delay="0s" />
        <FloatingLeaf className="bottom-14 right-14" delay="2s" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-950/90 border border-amber-400/50 text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 shadow-lg backdrop-blur-md">
            <Droplets className="w-4 h-4 text-amber-300" />
            <span>{t("honey_hero_badge")}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-300 drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] mb-3 sm:mb-4 leading-tight">
            {t("honey_hero_title")}
          </h1>

          <p className="font-decorative italic text-xl sm:text-2xl md:text-3xl text-white font-medium mb-4 sm:mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {t("honey_hero_tagline")}
          </p>

          <p className="text-xs sm:text-base md:text-xl text-cream-soft font-normal leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {t("honey_hero_desc")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-honey to-honey-amber hover:from-honey-light hover:to-honey text-forest-950 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-honey transition-all text-sm"
            >
              <ShoppingBag className="w-5 h-5 text-forest-950" />
              <span>{t("honey_btn_view_jars")}</span>
            </a>
            <a
              href="#order-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-forest-800 hover:bg-forest-700 text-white font-semibold px-6 py-3.5 sm:py-4 rounded-full border border-forest-600 transition-all text-sm"
            >
              <span>{t("honey_btn_order_wa")}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== SECTION A: ABOUT OUR HONEY ===================== */}
      <section className="py-12 sm:py-20 bg-cream-soft relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Visual */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated border-2 border-honey/30 relative">
                <img 
                  src="/assets/images/raw_honeycomb.jpg" 
                  alt="Raw golden honeycomb harvested in Thirthahalli" 
                  className="w-full h-[260px] sm:h-[400px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/images/multifloral-honey.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-forest-950/85 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-honey/20 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-honey font-semibold">
                    {isKn ? "ಕೋಟಿಕೊಪ್ಪ ಜೇನು ಕೃಷಿ • ತೀರ್ಥಹಳ್ಳಿ" : "Kotikoppa Apiary • Thirthahalli"}
                  </span>
                  <p className="font-heading text-sm sm:text-lg font-bold mt-0.5">
                    {isKn ? "ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ಅಪ್ಪಟ ಕಾಡು ಜೇನು" : "Western Ghats Multifloral Harvest"}
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey/15 border border-honey/30 text-honey-dark text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("honey_about_badge")}</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight">
                {t("honey_about_title")}
              </h2>

              <p className="text-earth-dark/85 text-base sm:text-lg leading-relaxed">
                {t("honey_about_p1")}
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border-l-4 border-honey shadow-sm space-y-1">
                <p className="font-heading font-bold text-forest text-base sm:text-lg">
                  {isKn ? "ಬಿಸಿ ಮಾಡದ ಕಚ್ಚಾ ಜೇನುತುಪ್ಪದ ಮಹತ್ವ" : "Cold Extracted vs Supermarket Honey"}
                </p>
                <p className="text-xs sm:text-sm text-earth-dark/80 leading-relaxed">
                  {t("honey_about_p2")}
                </p>
              </div>

              <p className="text-earth-dark/80 text-sm sm:text-base leading-relaxed">
                {t("honey_about_p3")}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== SECTION B: OUR HONEY PRODUCTS ===================== */}
      <section id="products" className="py-20 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t("honey_products_badge")}
            sanskrit="मधुमयम् जीवनम्"
            title={t("honey_products_title")}
            subtitle={t("honey_products_subtitle")}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {honeyProducts.map((prod) => {
              const orderMsg = isKn
                ? `ನಮಸ್ಕಾರ ಯುಜಾಮೃತ! ನಾನು ${prod.name} (${prod.weight}) ₹${prod.price} ಆರ್ಡರ್ ಮಾಡಲು ಬಯಸುತ್ತೇನೆ.`
                : `Namaste Yujamrutha! I would like to order: ${prod.name} - ${prod.weight} for ₹${prod.price}.`;
              const whatsappOrder = `https://wa.me/${BRAND_INFO.rawPhone}?text=${encodeURIComponent(orderMsg)}`;

              return (
                <div 
                  key={prod.id} 
                  className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 border border-honey/30 flex flex-col group transform hover:-translate-y-1"
                >
                  <div className="relative h-72 overflow-hidden bg-forest-950">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/images/honey-500g.jpg";
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-honey text-forest-950 text-xs font-bold px-3.5 py-1 rounded-full shadow-md">
                      {prod.badge}
                    </div>
                    <div className="absolute top-4 right-4 bg-forest/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {prod.weight}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-honey mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-honey" />
                        ))}
                        <span className="text-xs text-earth-dark/70 ml-1.5 font-medium">({prod.reviewsCount} {t("reviews_count")})</span>
                      </div>

                      <h3 className="font-heading text-2xl font-bold text-forest mb-2">
                        {prod.name}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-honey-dark font-semibold mb-3">
                        {isKn ? `ತೂಕ: ${prod.weight} • ಶುದ್ಧ ಗಾಜಿನ ಸೀಸೆ` : `Net Weight: ${prod.weight} • Pure Glass Jar`}
                      </p>

                      <p className="text-earth-dark/80 text-sm leading-relaxed mb-6">
                        {prod.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {prod.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-forest/90 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-honey shrink-0"></span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <span className="text-xs text-stone-400 line-through">₹{prod.originalPrice}</span>
                        <div className="font-heading text-3xl font-bold text-forest">
                          ₹{prod.price}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => addToCart(prod.id, 1)}
                          className="inline-flex items-center gap-1.5 bg-forest hover:bg-forest-800 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
                          title="Add to Honey Basket"
                        >
                          <ShoppingBag className="w-4 h-4 text-honey" />
                          <span>{t("btn_add_to_cart")}</span>
                        </button>
                        <a
                          href={whatsappOrder}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
                        >
                          <MessageCircle className="w-4 h-4 fill-white" />
                          <span>{t("btn_order_now")}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== SECTION C: SOURCING STEPS ===================== */}
      <section className="py-20 bg-cream-soft relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t("honey_process_badge")}
            sanskrit={t("honey_process_sanskrit")}
            title={t("honey_process_title")}
            subtitle={t("honey_process_subtitle")}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
            {sourcingSteps.map((s, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-3xl border border-honey/20 shadow-soft flex flex-col justify-between relative group hover:shadow-elevated transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-3xl font-extrabold text-honey/40 group-hover:text-honey transition-colors">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center text-forest">
                      <Sparkles className="w-4 h-4 text-honey" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-forest mb-1">
                    {s.title}
                  </h3>

                  <p className="text-xs uppercase tracking-wider text-honey-dark font-medium mb-3">
                    {s.subtitle}
                  </p>

                  <p className="text-earth-dark/80 text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 text-[11px] text-stone-400">
                  {isKn ? `ಹಂತ ${index + 1} / 5` : `Step ${index + 1} of 5`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION D: ORDER SECTION ===================== */}
      <section id="order-section" className="py-20 bg-cream relative">
        <TraditionalMandala className="absolute top-10 left-10" size={280} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge={t("honey_order_form_badge")}
            sanskrit="सत्यं शुचि च पावनम्"
            title={t("honey_order_form_title")}
            subtitle={t("honey_order_form_subtitle")}
          />

          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-elevated border-2 border-honey/40">
            {orderSubmitted && (
              <div className="mb-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold">{isKn ? "ಆರ್ಡರ್ ವಿವರಗಳು ಸಿದ್ಧಗೊಂಡಿವೆ!" : "Order details prepared!"}</p>
                  <p className="text-xs mt-0.5">
                    {isKn ? "ವಾಟ್ಸಾಪ್ ಹೊಸ ಟ್ಯಾಬ್‌ನಲ್ಲಿ ತೆರೆದಿದೆ. ದಯವಿಟ್ಟು ಸಂದೇಶ ಕಳುಹಿಸಿ ಆರ್ಡರ್ ಪೂರ್ಣಗೊಳಿಸಿ." : "WhatsApp has opened in a new tab. Please press Send in WhatsApp to share your order."}
                  </p>
                </div>
              </div>
            )}

            {orderError && (
              <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm">
                {orderError}
              </div>
            )}

            <form onSubmit={handleOrderSubmit} className="space-y-6">
              
              {/* Row 1: Customer Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">
                    {t("honey_field_name")}
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={orderForm.customerName}
                    onChange={handleOrderChange}
                    placeholder={t("honey_field_name_ph")}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 text-sm bg-stone-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">
                    {t("honey_field_mobile")}
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={orderForm.mobileNumber}
                    onChange={handleOrderChange}
                    placeholder={t("honey_field_mobile_ph")}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 text-sm bg-stone-50"
                  />
                </div>
              </div>

              {/* Row 2: Product Selection & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">
                    {t("honey_field_product")}
                  </label>
                  <select
                    name="selectedProduct"
                    value={orderForm.selectedProduct}
                    onChange={handleOrderChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 text-sm bg-stone-50"
                  >
                    <option value={isKn ? "ನೈಸರ್ಗಿಕ ಕಾಡು ಜೇನುತುಪ್ಪ – 250 ಗ್ರಾಂ (₹180)" : "Natural Multifloral Honey – 250g (₹180)"}>
                      {isKn ? "ನೈಸರ್ಗಿಕ ಕಾಡು ಜೇನುತುಪ್ಪ – 250 ಗ್ರಾಂ (₹180)" : "Natural Multifloral Honey – 250g (₹180)"}
                    </option>
                    <option value={isKn ? "ನೈಸರ್ಗಿಕ ಕಾಡು ಜೇನುತುಪ್ಪ – 500 ಗ್ರಾಂ (₹340)" : "Natural Multifloral Honey – 500g (₹340)"}>
                      {isKn ? "ನೈಸರ್ಗಿಕ ಕಾಡು ಜೇನುತುಪ್ಪ – 500 ಗ್ರಾಂ (₹340) [ಜನಪ್ರಿಯ]" : "Natural Multifloral Honey – 500g (₹340) [Bestseller]"}
                    </option>
                    <option value={isKn ? "ನೈಸರ್ಗಿಕ ಕಾಡು ಜೇನುತುಪ್ಪ – 1 ಕೆಜಿ (₹650)" : "Natural Multifloral Honey – 1kg (₹650)"}>
                      {isKn ? "ನೈಸರ್ಗಿಕ ಕಾಡು ಜೇನುತುಪ್ಪ – 1 ಕೆಜಿ (₹650) [ಶ್ರೇಷ್ಠ ಮೌಲ್ಯ]" : "Natural Multifloral Honey – 1kg (₹650) [Best Value]"}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">
                    {t("honey_field_qty")}
                  </label>
                  <div className="flex items-center border border-stone-200 rounded-xl bg-stone-50 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => handleQuantityAdjust(-1)}
                      className="px-3.5 py-3 hover:bg-stone-200 text-forest font-bold transition-colors cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input
                      type="number"
                      name="quantity"
                      value={orderForm.quantity}
                      readOnly
                      className="w-full text-center bg-transparent text-sm font-bold text-forest focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => handleQuantityAdjust(1)}
                      className="px-3.5 py-3 hover:bg-stone-200 text-forest font-bold transition-colors cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Row 3: Delivery Address */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">
                  {t("honey_field_address")}
                </label>
                <textarea
                  name="deliveryAddress"
                  value={orderForm.deliveryAddress}
                  onChange={handleOrderChange}
                  rows="3"
                  placeholder={t("honey_field_address_ph")}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-honey focus:ring-2 focus:ring-honey/20 text-sm bg-stone-50"
                ></textarea>
              </div>

              {/* Direct Order on WhatsApp Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-elevated hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>{t("honey_btn_submit_order")}</span>
              </button>

              <div className="p-3.5 rounded-xl bg-forest-50 border border-forest-100 text-center text-xs text-forest/90">
                🔒 {isKn 
                  ? "ಸುರಕ್ಷಿತ ಮತ್ತು ನೇರ: ತೀರ್ಥಹಳ್ಳಿಯ ನಮ್ಮ ಜೇನು ಕೃಷಿಯಿಂದ ನೇರವಾಗಿ ರವಾನಿಸಲಾಗುತ್ತದೆ. ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ದೃಢೀಕರಣದ ನಂತರ UPI ಮೂಲಕ ಪಾವತಿಸಬಹುದು."
                  : "Safe & Transparent: Orders are verified and dispatched directly from our apiary. Payment is completed securely via UPI after WhatsApp confirmation."}
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
