import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Heart,
  Eye,
  Target,
  Compass,
  Leaf,
  Droplets,
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Trees,
  Sun
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import CertifiedInstructorSection from "../components/CertifiedInstructorSection";
import { FloatingLeaf, TraditionalMandala } from "../components/BotanicalElements";
import { BRAND_INFO } from "../data/siteData";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { language, t } = useLanguage();
  const isKn = language === "kn";

  const whatsappMsg = isKn
    ? "ನಮಸ್ಕಾರ! ನಾನು ಯುಜಾಮೃತದ ತತ್ವಗಳು ಮತ್ತು ಯೋಗ-ಜೇನುತುಪ್ಪದ ವಿವರಗಳ ಕುರಿತು ತಿಳಿಯಲು ಬಯಸುತ್ತೇನೆ."
    : "Namaste! I would like to know more about the story and philosophy of Yujamrutha.";
  const whatsappUrl = `https://wa.me/${BRAND_INFO.rawPhone}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="bg-cream min-h-screen">
      {/* ===================== HERO / HEADER SECTION ===================== */}
      <section className="relative min-h-[50vh] sm:min-h-[58vh] flex items-center justify-center bg-forest-950 text-cream overflow-hidden py-16 sm:py-24 lg:py-28">
        {/* Layer 1: Photographic Western Ghats Rainforest Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/wild_forest_honey.jpg"
            alt="Pristine Western Ghats ancient rainforest canopy with morning sunbeams"
            className="w-full h-full object-cover object-center filter brightness-65 contrast-105"
            onError={(e) => {
              e.currentTarget.src = "/assets/images/apiary-landscape.jpg";
            }}
          />
          {/* Layer 2: Deep Forest Gradient Overlay for High Contrast & Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/95 via-forest-950/85 to-forest-950/98"></div>
          {/* Layer 3: Central Soft Contrast Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-forest-950/60 via-transparent to-forest-950/80 pointer-events-none"></div>
          {/* Layer 4: Traditional Sacred Mandala Watermark */}
          <div className="absolute inset-0 bg-mandala pointer-events-none opacity-20"></div>
        </div>

        {/* Decorative Floating Leaves & Sacred Mandalas */}
        <FloatingLeaf className="top-12 left-10 z-10" delay="0s" />
        <FloatingLeaf className="bottom-12 right-14 z-10" delay="2.5s" />
        <TraditionalMandala className="absolute -top-16 -right-16 opacity-15 text-honey pointer-events-none z-0" size={320} />
        <TraditionalMandala className="absolute -bottom-16 -left-16 opacity-15 text-honey pointer-events-none z-0" size={320} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-forest-950/90 border border-amber-400/50 text-amber-300 text-[11px] sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-5 shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{t("about_hero_badge")}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-300 drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] mb-3 sm:mb-4 leading-tight">
            {t("about_hero_title")}
          </h1>

          <p className="font-decorative italic text-xl sm:text-2xl md:text-3xl text-white font-medium mb-4 sm:mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {t("about_hero_tagline")}
          </p>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4 sm:mb-6"></div>

          <p className="text-sm sm:text-base md:text-xl text-cream-soft font-normal leading-relaxed max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {t("about_hero_desc")}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-amber-300 bg-forest-950/90 border border-amber-400/40 px-4 py-2 rounded-full font-semibold shadow-md backdrop-blur-md">
              <Leaf className="w-3.5 h-3.5 text-natural-light" /> {t("about_hero_yuj")}
            </span>
            <span className="text-amber-400/60 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-amber-300 bg-forest-950/90 border border-amber-400/40 px-4 py-2 rounded-full font-semibold shadow-md backdrop-blur-md">
              <Droplets className="w-3.5 h-3.5 text-amber-300" /> {t("about_hero_amrutha")}
            </span>
          </div>
        </div>
      </section>

      {/* ===================== SPLIT LAYOUT SECTIONS ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16 sm:space-y-24">

        {/* SECTION 1: OUR STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated border-2 border-honey/30">
              <img
                src="/assets/images/apiary-landscape.jpg"
                alt="Western Ghats lush hills and Kotikoppa apiary landscape"
                className="w-full h-[260px] sm:h-[380px] lg:h-[440px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/assets/images/hero-clean.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-forest-950/85 backdrop-blur-md p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-honey/30 text-white">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-honey font-semibold">
                  {isKn ? "ಕೋಟಿಕೊಪ್ಪ, ಅರಗ • ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು" : "Kotikoppa, Araga • Western Ghats"}
                </span>
                <p className="font-heading text-sm sm:text-lg font-bold mt-0.5">
                  {isKn ? "ಪ್ರಾಚೀನ ಸಾಧನೆ ಮತ್ತು ಶುದ್ಧ ಜೇನಿನ ಸಂಗಮ" : "Where Ancient Sadhana Meets Pure Honey"}
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest text-xs font-semibold uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 text-natural" />
              <span>{t("about_s1_badge")}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest leading-tight">
              {t("about_s1_title")}
            </h2>

            <p className="text-earth-dark/85 text-base sm:text-lg leading-relaxed">
              {t("about_s1_p1")}
            </p>

            <div className="p-4 rounded-2xl bg-honey/15 border-l-4 border-honey my-2">
              <p className="font-heading font-bold text-forest text-base sm:text-lg">
                {t("about_s1_box_title")}
              </p>
              <p className="text-xs sm:text-sm text-earth-dark/90 mt-1">
                {t("about_s1_box_desc")}
              </p>
            </div>

            <p className="text-earth-dark/80 text-sm sm:text-base leading-relaxed">
              {t("about_s1_p2")}
            </p>

            <p className="text-earth-dark/80 text-sm sm:text-base leading-relaxed">
              {t("about_s1_p3")}
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-white border border-honey/30 shadow-sm flex items-center gap-3">
                <Sun className="w-5 h-5 text-honey shrink-0" />
                <span className="text-xs sm:text-sm text-forest font-medium">
                  {t("about_s1_p4")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 & 3: OUR VISION & MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Vision */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-honey/30 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-honey/15 text-honey-dark flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-honey" />
              </div>

              <div className="text-xs uppercase tracking-wider text-honey-dark font-semibold mb-2">
                {isKn ? "2. ನಮ್ಮ ದೃಷ್ಟಿಕೋನ" : "2. Our Vision"}
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-forest mb-4">
                {t("about_vision_title")}
              </h3>

              <p className="text-earth-dark/85 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                {t("about_vision_quote")}
              </p>

              <ul className="space-y-3 text-sm text-earth-dark/80">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-honey shrink-0 mt-0.5" />
                  <span>{t("about_vision_p1")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-honey shrink-0 mt-0.5" />
                  <span>{t("about_vision_p2")}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-forest/20 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-forest-100 text-forest flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-forest" />
              </div>

              <div className="text-xs uppercase tracking-wider text-natural font-semibold mb-2">
                {isKn ? "3. ನಮ್ಮ ಧ್ಯೇಯೋದ್ದೇಶ" : "3. Our Mission"}
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-forest mb-4">
                {t("about_mission_title")}
              </h3>

              <p className="text-earth-dark/85 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                {t("about_mission_quote")}
              </p>

              <ul className="space-y-3 text-sm text-earth-dark/80">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-natural shrink-0 mt-0.5" />
                  <span>{t("about_mission_p1")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-natural shrink-0 mt-0.5" />
                  <span>{t("about_mission_p2")}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* SECTION 4: OUR VALUES */}
        <div className="bg-forest-950 text-cream rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <TraditionalMandala className="absolute -top-10 -right-10 opacity-10" size={260} />

          <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-wider text-honey font-semibold">{t("about_s3_badge")}</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-1 mb-4">
              {t("about_s3_title")}
            </h2>
            <p className="text-cream/80 text-sm sm:text-base">
              {isKn ? "ಯಮ ಮತ್ತು ನಿಯಮಗಳ (ಸತ್ಯ, ಅಹಿಂಸಾ, ಶೌಚ, ಸೇವಾ) ಸಾರ್ವಕಾಲಿಕ ಮೌಲ್ಯಗಳು." : "Guided by classical ethics of Yama & Niyama (Satya, Ahimsa, Saucha, Seva) applied to modern health."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="bg-forest-900/60 p-6 rounded-2xl border border-forest-700/60">
              <div className="text-honey text-xl font-heading font-bold mb-2">{t("about_p1_title")}</div>
              <p className="text-cream/70 text-xs sm:text-sm leading-relaxed">
                {t("about_p1_desc")}
              </p>
            </div>

            <div className="bg-forest-900/60 p-6 rounded-2xl border border-forest-700/60">
              <div className="text-honey text-xl font-heading font-bold mb-2">{t("about_p2_title")}</div>
              <p className="text-cream/70 text-xs sm:text-sm leading-relaxed">
                {t("about_p2_desc")}
              </p>
            </div>

            <div className="bg-forest-900/60 p-6 rounded-2xl border border-forest-700/60">
              <div className="text-honey text-xl font-heading font-bold mb-2">{t("about_p3_title")}</div>
              <p className="text-cream/70 text-xs sm:text-sm leading-relaxed">
                {t("about_p3_desc")}
              </p>
            </div>

            <div className="bg-forest-900/60 p-6 rounded-2xl border border-forest-700/60">
              <div className="text-honey text-xl font-heading font-bold mb-2">{t("about_p4_title")}</div>
              <p className="text-cream/70 text-xs sm:text-sm leading-relaxed">
                {t("about_p4_desc")}
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5: YOGA AND NATURAL WELLNESS RITUAL */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 text-forest text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-natural" />
              <span>{t("about_s4_badge")}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest leading-tight">
              {t("about_s4_title")}
            </h2>

            <p className="text-earth-dark/85 text-base sm:text-lg leading-relaxed">
              {isKn 
                ? "ಆಯುರ್ವೇದದಲ್ಲಿ, ಬೆಳಗಿನ ಯೋಗ ಸಾಧನೆ ಮತ್ತು ಶುದ್ಧ ಜೇನಿನ ಸೇವನೆಯನ್ನು ದೇಹದ ಚೈತನ್ಯ ಮತ್ತು ರೋಗಮುಕ್ತಿಗೆ ಶ್ರೇಷ್ಠ ಅಮೃತವೆಂದು ಪರಿಗಣಿಸಲಾಗಿದೆ."
                : "In Ayurveda, the combination of mindful morning movement and raw honey is revered as a catalyst for metabolic vitality and cellular detox."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Left: 3 Step Cards */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 sm:p-6 rounded-3xl bg-white border border-honey/25 shadow-soft hover:shadow-elevated transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-honey/15 flex items-center justify-center text-honey-dark shrink-0">
                  <Sun className="w-6 h-6 text-honey" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h4 className="font-heading font-bold text-forest text-base sm:text-lg">{t("about_step1_title")}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-honey/15 text-honey-dark uppercase tracking-wider">
                      {t("about_step1_badge")}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-earth-dark/80 leading-relaxed">
                    {t("about_step1_desc")}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-3xl bg-white border border-honey/25 shadow-soft hover:shadow-elevated transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-honey/15 flex items-center justify-center text-honey-dark shrink-0">
                  <Droplets className="w-6 h-6 text-honey" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h4 className="font-heading font-bold text-forest text-base sm:text-lg">{t("about_step2_title")}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-honey/15 text-honey-dark uppercase tracking-wider">
                      {t("about_step2_badge")}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-earth-dark/80 leading-relaxed">
                    {t("about_step2_desc")}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-3xl bg-white border border-honey/25 shadow-soft hover:shadow-elevated transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-natural-soft flex items-center justify-center text-natural shrink-0">
                  <ShieldCheck className="w-6 h-6 text-natural" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h4 className="font-heading font-bold text-forest text-base sm:text-lg">{t("about_step3_title")}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-natural-soft text-natural uppercase tracking-wider">
                      {t("about_step3_badge")}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-earth-dark/80 leading-relaxed">
                    {t("about_step3_desc")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Full Championship Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border-2 border-honey/40 shadow-elevated bg-forest-950 w-full max-w-sm group">
                <div className="p-2 sm:p-3 bg-forest-950 flex items-center justify-center">
                  <img
                    src="/assets/images/abhinandhan-championship-full.jpg"
                    alt="Master Abhinandan K K - All India Inter University Yogasana Championship 2024"
                    className="w-full h-auto max-h-[480px] object-contain rounded-2xl block mx-auto transition-transform duration-300 group-hover:scale-102"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/abhinandhan.jpg";
                    }}
                  />
                </div>
                <div className="p-4 bg-gradient-to-t from-forest-950 via-forest-900 to-forest-950 border-t border-honey/25 text-cream">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] uppercase tracking-wider text-honey font-bold bg-honey/15 px-2.5 py-0.5 rounded-full border border-honey/30">
                      {isKn ? "ಎಸ್-ವ್ಯಾಸ ಪ್ರಮಾಣೀಕೃತ ಯೋಗ ಶಿಕ್ಷಕರು" : "SVYASA Certified Instructor"}
                    </span>
                    <span className="text-[11px] text-cream/70 font-mono">2024</span>
                  </div>
                  <p className="font-heading text-base font-bold text-white mt-1">
                    {isKn ? "ಅಭಿನಂದನ್ ಕೆ ಕೆ • ರಾಷ್ಟ್ರೀಯ ಯೋಗ ಸ್ಪರ್ಧಿ" : "Abhinandan K K • Championship Competitor"}
                  </p>
                  <p className="text-xs text-cream/80 mt-0.5">
                    {isKn ? "ಅಖಿಲ ಭಾರತ ಅಂತರ ವಿಶ್ವವಿದ್ಯಾಲಯ ಯೋಗಾಸನ ಸ್ಪರ್ಧೆ" : "All India Inter University Yogasana (M & W) Championship"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ===================== CERTIFIED INSTRUCTOR SECTION ===================== */}
      <CertifiedInstructorSection />

      {/* ===================== SECTION 6: OUR COMMITMENT TO NATURE ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated border-2 border-forest/30">
              <img
                src="/assets/images/beekeeping_inspection.jpg"
                alt="Beekeeping inspection and honeycomb care in pristine nature"
                className="w-full h-[260px] sm:h-[380px] lg:h-[420px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/assets/images/raw_honeycomb.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-forest-950/85 backdrop-blur-md p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-forest-500/40 text-white">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-honey font-semibold">
                  {isKn ? "ಪರಿಸರ ಜಾಗೃತಿಯ ಜೇನು ಕೃಷಿ" : "Eco-Conscious Beekeeping"}
                </span>
                <p className="font-heading text-sm sm:text-lg font-bold mt-0.5">
                  {isKn ? "ತೀರ್ಥಹಳ್ಳಿಯ ಜೇನುನೊಣಗಳ ಸಂರಕ್ಷಣೆ" : "Protecting the Pollinators of Thirthahalli"}
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-natural-soft text-natural text-xs font-semibold uppercase tracking-wider">
              <Trees className="w-3.5 h-3.5 text-natural" />
              <span>{t("about_s6_badge")}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest leading-tight">
              {t("about_s6_title")}
            </h2>

            <p className="text-earth-dark/85 text-base sm:text-lg leading-relaxed">
              {isKn 
                ? "ಆರೋಗ್ಯಕರ ಜೇನುನೊಣಗಳಿಲ್ಲದೆ ಭೂಮಿಯ ಸಸ್ಯ ಸಂಪತ್ತು ವೃದ್ಧಿಯಾಗಲು ಸಾಧ್ಯವಿಲ್ಲ. ನಮ್ಮ ಸಂಗ್ರಹ ವಿಧಾನವು ಸಂಪೂರ್ಣ ಪರಿಸರ ಸ್ನೇಹಿಯಾಗಿದೆ:"
                : "Without healthy honeybees, our planet's flowering vegetation cannot reproduce. Our harvesting model is strictly eco-conscious:"}
            </p>

            <div className="space-y-3 text-sm text-earth-dark/85">
              <div className="p-3.5 rounded-xl bg-white border border-forest/10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-natural shrink-0"></span>
                <span>{t("about_eco_p1")}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-forest/10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-natural shrink-0"></span>
                <span>{t("about_eco_p2")}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-forest/10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-natural shrink-0"></span>
                <span>{t("about_eco_p3")}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/yoga"
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-800 text-white font-medium px-6 py-3 rounded-full transition-all"
              >
                <span>{t("home_card1_btn")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/honey"
                className="inline-flex items-center gap-2 bg-honey hover:bg-honey-dark text-forest-950 hover:text-white font-semibold px-6 py-3 rounded-full transition-all"
              >
                <span>{t("home_card2_btn")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* ===================== BOTTOM CTA ===================== */}
      <section className="py-16 bg-forest text-cream text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h3 className="font-heading text-3xl font-bold text-white mb-3">
            {isKn ? "ನೈಸರ್ಗಿಕ ಜೀವನಶೈಲಿಗೆ ಸೇರಲು ಸಿದ್ಧರಿದ್ದೀರಾ?" : "Ready to Experience Natural Transformation?"}
          </h3>
          <p className="text-cream/80 text-base mb-8">
            {isKn 
              ? "ನೇರವಾಗಿ ಗುರು ಅಭಿನಂದನ್ ಕೆ ಕೆ ಅವರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಕ್ಷೇಮ ಪಯಣವನ್ನು ಇಂದೇ ಆರಂಭಿಸಿ."
              : "Connect directly with Master Abhinandan K K and start your wellness journey today."}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all"
          >
            <Sparkles className="w-5 h-5 text-honey-light" />
            <span>{isKn ? "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ನೇರವಾಗಿ ಚಾಟ್ ಮಾಡಿ" : "Chat on WhatsApp Directly"}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
