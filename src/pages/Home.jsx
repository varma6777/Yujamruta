import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Leaf,
  Droplets,
  Heart,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Users,
  MessageCircle,
  Sun,
  Calendar,
  Star
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { TraditionalMandala } from "../components/BotanicalElements";
import { BRAND_INFO, getYogaPrograms, getHoneyProducts, getTestimonials } from "../data/siteData";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { language, t } = useLanguage();

  const isKn = language === "kn";
  const whatsappMsg = isKn
    ? "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ವೆಬ್‌ಸೈಟ್ ನೋಡಿದೆ, ಯುಜಾಮೃತ ಯೋಗ ಮತ್ತು ಶುದ್ಧ ಜೇನುತುಪ್ಪದ ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಬೇಕಿದೆ."
    : "Namaste! I visited your website and would like to learn more about Yujamrutha Yoga and Pure Honey.";

  const whatsappUrl = `https://wa.me/${BRAND_INFO.rawPhone}?text=${encodeURIComponent(whatsappMsg)}`;

  const yogaPrograms = getYogaPrograms(language);
  const testimonials = getTestimonials(language);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* ===================== SECTION 1: OFFICIAL HERO BANNER (FULL WIDTH COVER) ===================== */}
      <section className="relative w-full overflow-hidden bg-forest-950 border-b-2 border-honey/40 shadow-elevated">
        <div className="relative w-full">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/assets/images/yujamrutha-hero-mobile.jpg?v=2"
            />
            <img
              src="/assets/images/yujamrutha-hero-banner.jpg"
              alt="Yujamrutha - Yoga, Natural Honey, Holistic Wellness. Balance Your Body. Calm Your Mind. Transform Your Life."
              className="w-full h-auto object-cover object-center block"
            />
          </picture>

          {/* Desktop Clickable Hotspots overlay matching the buttons on the artwork */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {/* Yoga Registration Clickable Area - Direct to Registration Page */}
            <Link
              to="/yoga-registration"
              title={t("nav_registration")}
              className="pointer-events-auto absolute left-[17%] bottom-[9%] w-[30%] h-[15%] rounded-full cursor-pointer transition-transform duration-150 active:scale-98"
              aria-label={t("nav_registration")}
            ></Link>

            {/* Buy Honey Clickable Area - Direct to Buy Honey Page */}
            <Link
              to="/buy-honey"
              title={t("nav_buy_honey")}
              className="pointer-events-auto absolute left-[53%] bottom-[9%] w-[30%] h-[15%] rounded-full cursor-pointer transition-transform duration-150 active:scale-98"
              aria-label={t("nav_buy_honey")}
            ></Link>
          </div>

          {/* Mobile Clickable Hotspots overlay matching "Join Yoga" and "By Honey" on mobile artwork */}
          <div className="absolute inset-0 pointer-events-none md:hidden block">
            <Link
              to="/yoga-registration"
              title={t("nav_registration")}
              className="pointer-events-auto absolute left-[16%] top-[61%] w-[32%] h-[8%] rounded-full cursor-pointer active:scale-95"
              aria-label={t("nav_registration")}
            ></Link>
            <Link
              to="/buy-honey"
              title={t("nav_buy_honey")}
              className="pointer-events-auto absolute left-[54%] top-[61%] w-[33.5%] h-[8%] rounded-full cursor-pointer active:scale-95"
              aria-label={t("nav_buy_honey")}
            ></Link>
          </div>
        </div>
      </section>

      {/* ===================== TWO PRIMARY SERVICE CARDS ===================== */}
      <section className="pt-8 pb-14 sm:pt-12 sm:pb-20 bg-cream-soft relative">
        <TraditionalMandala className="absolute top-10 left-10" size={300} />
        <TraditionalMandala className="absolute bottom-10 right-10" size={300} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge={t("home_badge_dual")}
            sanskrit={t("home_sanskrit_pillars")}
            title={t("home_title_pillars")}
            subtitle={t("home_subtitle_pillars")}
          />

          {/* Brand Meaning Spotlight Banner */}
          <div className="mb-8 sm:mb-10 max-w-4xl mx-auto bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-cream p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-honey/50 shadow-elevated text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-mandala opacity-20 pointer-events-none"></div>
            <div className="relative z-10 space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-honey/20 border border-honey/40 text-honey-light text-[11px] sm:text-xs font-bold uppercase tracking-widest">
                {t("home_banner_essence")}
              </span>
              <h3 className="font-heading text-xl sm:text-3xl md:text-4xl font-bold text-white">
                <span className="text-honey-light">{isKn ? "ಯುಜ್" : "YUJ"}</span> {isKn ? "ಎಂದರೆ ಯೋಗ" : "means Yoga"} &bull;{" "}
                <span className="text-honey">{isKn ? "ಅಮೃತ" : "AMRUTHA"}</span> {isKn ? "ಎಂದರೆ ಜೇನುತುಪ್ಪ" : "means Honey"}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-cream/90 max-w-2xl mx-auto leading-relaxed font-light pt-1">
                <strong className="text-honey-light font-semibold">YUJ (ಯುಜ್):</strong> {t("home_banner_yuj_desc")}<br className="hidden sm:inline" />
                <strong className="text-honey font-semibold">AMRUTHA (ಅಮೃತ):</strong> {t("home_banner_amrutha_desc")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-6 sm:mt-8">

            {/* CARD 1: YUJAMRUTHA YOGA */}
            <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 border border-forest/10 flex flex-col group transform hover:-translate-y-1">
              <div className="relative h-60 sm:h-80 overflow-hidden bg-forest-900">
                <img
                  src="/assets/images/abhinandhan.jpg"
                  alt="Yoga meditation in a natural environment - Master Abhinandan"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/images/hero-clean.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-forest/90 backdrop-blur-md text-honey text-xs font-semibold px-3.5 py-1.5 rounded-full border border-honey/30">
                  {t("home_card1_badge")}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-honey text-xs font-bold uppercase tracking-wider bg-forest/80 px-2.5 py-0.5 rounded-full inline-block mb-1">
                    {t("home_card1_sub")}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    {isKn ? "ಯುಜಾಮೃತ ಯೋಗ" : "YUJAMRUTHA YOGA"}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-earth-dark/85 text-base sm:text-lg leading-relaxed mb-6">
                    {t("home_card1_quote")}
                  </p>
                  <ul className="space-y-2.5 mb-8 text-sm text-forest/90">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-honey shrink-0" />
                      <span>{t("home_card1_f1")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-honey shrink-0" />
                      <span>{t("home_card1_f2")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-honey shrink-0" />
                      <span>{t("home_card1_f3")}</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/yoga"
                  className="inline-flex items-center justify-center gap-2 w-full bg-forest hover:bg-forest-800 text-white font-medium py-3.5 px-6 rounded-2xl shadow-md transition-all duration-300 group-hover:shadow-lg"
                >
                  <span>{t("home_card1_btn")}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* CARD 2: YUJAMRUTHA HONEY */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 border border-honey/20 flex flex-col group transform hover:-translate-y-1">
              <div className="relative h-72 sm:h-80 overflow-hidden bg-earth-dark">
                <img
                  src="/assets/images/multifloral-honey.jpg"
                  alt="Golden organic honey flowing from a wooden honey dipper"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/images/honeycomb_honey.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-earth-dark/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-honey text-forest-950 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm">
                  {t("home_card2_badge")}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-honey text-xs font-bold uppercase tracking-wider bg-forest-950/80 px-2.5 py-0.5 rounded-full inline-block mb-1">
                    {t("home_card2_sub")}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    {isKn ? "ಯುಜಾಮೃತ ಜೇನುತುಪ್ಪ" : "YUJAMRUTHA HONEY"}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-earth-dark/85 text-base sm:text-lg leading-relaxed mb-6">
                    {t("home_card2_quote")}
                  </p>
                  <ul className="space-y-2.5 mb-8 text-sm text-forest/90">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-honey shrink-0" />
                      <span>{t("home_card2_f1")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-honey shrink-0" />
                      <span>{t("home_card2_f2")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-honey shrink-0" />
                      <span>{t("home_card2_f3")}</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/honey"
                  className="inline-flex items-center justify-center gap-2 w-full bg-honey hover:bg-honey-dark text-forest-950 hover:text-white font-semibold py-3.5 px-6 rounded-2xl shadow-honey transition-all duration-300 group-hover:shadow-lg"
                >
                  <span>{t("home_card2_btn")}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== ABOUT YUJAMRUTHA TEASER ===================== */}
      <section className="py-20 bg-forest text-cream relative overflow-hidden">
        <div className="absolute -right-20 top-0 w-96 h-96 bg-honey/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Visual on Left */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-honey/30 shadow-2xl">
                <img
                  src="/assets/images/apiary-landscape.jpg"
                  alt="Western Ghats lush hills and apiary environment"
                  className="w-full h-[420px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/images/hero-clean.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-forest-950/90 backdrop-blur-md p-4 rounded-2xl border border-honey/20">
                  <p className="font-decorative italic text-honey text-sm">{t("home_origin_apiary_label")}</p>
                  <p className="text-white text-xs mt-1">{t("home_origin_apiary_loc")}</p>
                </div>
              </div>
            </div>

            {/* Content on Right */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey/20 text-honey-light text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("home_origin_badge")}</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {t("home_origin_title")}
              </h2>

              <p className="text-cream/80 text-base sm:text-lg leading-relaxed">
                {t("home_origin_p1")}
              </p>

              <p className="text-cream/70 text-sm sm:text-base leading-relaxed">
                {t("home_origin_p2")}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-honey text-forest-950 hover:bg-honey-light font-semibold px-6 py-3 rounded-full shadow-honey transition-all"
                >
                  <span>{t("home_origin_btn_story")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-forest-800 hover:bg-forest-700 text-cream px-6 py-3 rounded-full border border-forest-600 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-honey" />
                  <span>{t("home_origin_btn_talk")}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="py-20 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t("home_why_badge")}
            sanskrit={t("home_why_sanskrit")}
            title={t("home_why_title")}
            subtitle={t("home_why_subtitle")}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl border border-honey/20 shadow-soft hover:shadow-elevated transition-all">
              <div className="w-14 h-14 rounded-2xl bg-forest-100 flex items-center justify-center text-forest mb-6">
                <Award className="w-7 h-7 text-forest" />
              </div>
              <h3 className="font-heading text-xl font-bold text-forest mb-2">{t("home_why_c1_title")}</h3>
              <p className="text-earth-dark/80 text-sm leading-relaxed">
                {t("home_why_c1_desc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-honey/20 shadow-soft hover:shadow-elevated transition-all">
              <div className="w-14 h-14 rounded-2xl bg-honey/15 flex items-center justify-center text-honey-dark mb-6">
                <Droplets className="w-7 h-7 text-honey" />
              </div>
              <h3 className="font-heading text-xl font-bold text-forest mb-2">{t("home_why_c2_title")}</h3>
              <p className="text-earth-dark/80 text-sm leading-relaxed">
                {t("home_why_c2_desc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-honey/20 shadow-soft hover:shadow-elevated transition-all">
              <div className="w-14 h-14 rounded-2xl bg-natural-soft flex items-center justify-center text-natural mb-6">
                <Sun className="w-7 h-7 text-natural" />
              </div>
              <h3 className="font-heading text-xl font-bold text-forest mb-2">{t("home_why_c3_title")}</h3>
              <p className="text-earth-dark/80 text-sm leading-relaxed">
                {t("home_why_c3_desc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-honey/20 shadow-soft hover:shadow-elevated transition-all">
              <div className="w-14 h-14 rounded-2xl bg-forest-100 flex items-center justify-center text-forest mb-6">
                <Leaf className="w-7 h-7 text-forest" />
              </div>
              <h3 className="font-heading text-xl font-bold text-forest mb-2">{t("home_why_c4_title")}</h3>
              <p className="text-earth-dark/80 text-sm leading-relaxed">
                {t("home_why_c4_desc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-honey/20 shadow-soft hover:shadow-elevated transition-all">
              <div className="w-14 h-14 rounded-2xl bg-honey/15 flex items-center justify-center text-honey-dark mb-6">
                <ShieldCheck className="w-7 h-7 text-honey" />
              </div>
              <h3 className="font-heading text-xl font-bold text-forest mb-2">{t("home_why_c5_title")}</h3>
              <p className="text-earth-dark/80 text-sm leading-relaxed">
                {t("home_why_c5_desc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-honey/20 shadow-soft hover:shadow-elevated transition-all">
              <div className="w-14 h-14 rounded-2xl bg-natural-soft flex items-center justify-center text-natural mb-6">
                <Users className="w-7 h-7 text-natural" />
              </div>
              <h3 className="font-heading text-xl font-bold text-forest mb-2">{t("home_why_c6_title")}</h3>
              <p className="text-earth-dark/80 text-sm leading-relaxed">
                {t("home_why_c6_desc")}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== FEATURED YOGA PROGRAMS PREVIEW ===================== */}
      <section className="py-20 bg-forest-950 text-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            theme="light"
            badge={t("home_yoga_preview_badge")}
            sanskrit={t("home_yoga_preview_sanskrit")}
            title={t("home_yoga_preview_title")}
            subtitle={t("home_yoga_preview_subtitle")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {yogaPrograms.slice(0, 4).map((prog) => (
              <div
                key={prog.id}
                className="bg-forest-900/80 rounded-2xl p-6 border border-forest-700/60 hover:border-honey/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-honey/20 text-honey-light border border-honey/30">
                      {prog.badge}
                    </span>
                    <span className="text-xs text-cream/60">{prog.duration}</span>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-white group-hover:text-honey transition-colors mb-1">
                    {prog.title}
                  </h4>
                  <p className="text-xs text-honey-light/80 font-decorative italic mb-3">
                    {prog.sanskrit}
                  </p>
                  <p className="text-cream/70 text-xs sm:text-sm leading-relaxed mb-4">
                    {prog.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-forest-800 flex items-center justify-between text-xs text-cream/70">
                  <span className="font-medium text-honey-light">{prog.focus}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/yoga"
              className="inline-flex items-center gap-2 bg-honey text-forest-950 hover:bg-honey-light font-semibold px-8 py-3.5 rounded-full shadow-honey transition-all"
            >
              <span>{t("home_yoga_preview_cta")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>



      {/* ===================== OUR COMMITMENT TO NATURE ===================== */}
      <section className="py-20 bg-forest text-cream relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeader
            theme="light"
            badge={t("home_nature_badge")}
            sanskrit={t("home_nature_sanskrit")}
            title={t("home_nature_title")}
            subtitle={t("home_nature_subtitle")}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-8">
            <div className="bg-forest-900/60 p-6 rounded-2xl border border-forest-700/50">
              <Leaf className="w-8 h-8 text-honey mb-4" />
              <h4 className="font-heading text-lg font-bold text-white mb-2">{t("home_nature_c1_title")}</h4>
              <p className="text-cream/80 text-xs sm:text-sm leading-relaxed">
                {t("home_nature_c1_desc")}
              </p>
            </div>

            <div className="bg-forest-900/60 p-6 rounded-2xl border border-forest-700/50">
              <ShieldCheck className="w-8 h-8 text-honey mb-4" />
              <h4 className="font-heading text-lg font-bold text-white mb-2">{t("home_nature_c2_title")}</h4>
              <p className="text-cream/80 text-xs sm:text-sm leading-relaxed">
                {t("home_nature_c2_desc")}
              </p>
            </div>

            <div className="bg-forest-900/60 p-6 rounded-2xl border border-forest-700/50">
              <Sun className="w-8 h-8 text-honey mb-4" />
              <h4 className="font-heading text-lg font-bold text-white mb-2">{t("home_nature_c3_title")}</h4>
              <p className="text-cream/80 text-xs sm:text-sm leading-relaxed">
                {t("home_nature_c3_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CUSTOMER TESTIMONIALS ===================== */}
      <section className="py-20 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t("home_testimonials_badge")}
            sanskrit={t("home_testimonials_sanskrit")}
            title={t("home_testimonials_title")}
            subtitle={t("home_testimonials_subtitle")}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((tItem, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-honey/20 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-honey mb-4">
                    {[...Array(tItem.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-honey" />
                    ))}
                  </div>
                  <p className="text-earth-dark/85 text-sm sm:text-base leading-relaxed italic mb-6">
                    "{tItem.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100">
                  <h4 className="font-heading font-bold text-forest text-base">{tItem.name}</h4>
                  <p className="text-xs text-earth-light">{tItem.role}</p>
                  <span className="inline-block mt-2 text-[11px] font-medium text-honey-dark bg-honey/10 px-2.5 py-0.5 rounded-full">
                    {tItem.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CALL TO ACTION SECTION ===================== */}
      <section className="py-20 bg-forest-950 text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-mandala pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-honey/20 border border-honey/40 flex items-center justify-center mx-auto mb-6 text-honey shadow-honey">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t("home_cta_title")}
          </h2>

          <p className="font-decorative italic text-honey text-xl sm:text-2xl mb-6">
            {t("home_cta_tagline")}
          </p>

          <p className="text-cream/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-light">
            {t("home_cta_desc")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/yoga"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-honey text-forest-950 hover:bg-honey-light font-bold px-8 py-4 rounded-full shadow-honey transition-all"
            >
              <span>{t("home_cta_btn_yoga")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>{t("home_cta_btn_wa")}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
