import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { 
  MessageCircle, 
  Menu, 
  X, 
  Phone, 
  Home, 
  Heart, 
  Sparkles, 
  Droplets, 
  ChevronRight,
  Globe 
} from "lucide-react";
import { BRAND_INFO } from "../data/siteData";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
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

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t("nav_home"), path: "/", icon: Home },
    { name: t("nav_about"), path: "/about", icon: Heart },
    { name: t("nav_yoga"), path: "/yoga", icon: Sparkles },
    { name: t("nav_honey"), path: "/honey", icon: Droplets },
    { name: t("nav_contact"), path: "/contact", icon: Phone },
  ];

  const whatsappMessage = encodeURIComponent("Namaste Yujamrutha! I would like to enquire about your Yoga classes and Organic Honey.");
  const whatsappUrl = `https://wa.me/${BRAND_INFO.rawPhone}?text=${whatsappMessage}`;

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? "bg-forest/95 backdrop-blur-md shadow-elevated py-2 sm:py-2.5 border-b border-honey/20" 
        : "bg-forest text-cream py-2.5 sm:py-3 border-b border-forest-800"
    }`}>
      {/* Top announcement bar */}
      <div className="bg-forest-950/85 text-cream/80 text-[11px] sm:text-xs py-1 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-honey animate-pulse shrink-0"></span>
            <span className="hidden sm:inline">{t("top_announcement")}</span>
            <span className="sm:hidden font-medium">Western Ghats • {language === "kn" ? "ಯೋಗ ಮತ್ತು ಜೇನುತುಪ್ಪ" : "Yoga & Pure Honey"}</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] shrink-0">
            <a href={`tel:${BRAND_INFO.rawPhone}`} className="hover:text-honey flex items-center gap-1 transition-colors font-medium">
              <Phone className="w-3 h-3 text-honey shrink-0" />
              <span>{BRAND_INFO.phone}</span>
            </a>
            <span className="text-honey/60 hidden md:inline">|</span>
            <span className="font-decorative italic text-honey hidden md:inline">{t("top_tagline")}</span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-1">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group focus:outline-none">
            {/* Traditional Leaf & Lotus Emblem */}
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-honey to-honey-dark p-0.5 shadow-honey transition-transform group-hover:scale-105 shrink-0">
              <div className="w-full h-full bg-forest rounded-full flex items-center justify-center overflow-hidden">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-honey" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 32C12 28 5 22 7 12C11 16 16 23 20 32Z" fill="currentColor" fillOpacity="0.85"/>
                  <path d="M20 32C28 28 35 22 33 12C29 16 24 23 20 32Z" fill="currentColor" fillOpacity="0.85"/>
                  <circle cx="20" cy="9" r="3.2" fill="#FFEAA8"/>
                  <path d="M20 12C20 12 23.5 18 23.5 22C23.5 25 21.5 27 20 27C18.5 27 16.5 25 16.5 22C16.5 18 20 12 20 12Z" fill="#FFEAA8"/>
                </svg>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-baseline gap-1 sm:gap-1.5">
                <span className="font-heading font-bold text-lg sm:text-2xl tracking-wider text-white group-hover:text-honey transition-colors">
                  YUJAMRUTHA
                </span>
                <span className="text-[11px] sm:text-xs text-honey-light/80 font-decorative italic font-medium hidden xs:inline">
                  ({BRAND_INFO.kannadaName})
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-honey text-forest font-semibold shadow-md"
                      : "text-cream/90 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action: Replaced WhatsApp Button with Kannada Language Tab */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* 🌐 Kannada Language Tab Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              title={language === "kn" ? "Switch to English" : "ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ (Switch to Kannada)"}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-honey via-honey-light to-honey hover:from-honey-light hover:to-honey text-forest-950 font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-honey hover:shadow-elevated transition-all duration-300 transform hover:scale-105 active:scale-95 border border-honey/60 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-950 shrink-0" />
              <span className="tracking-wide">
                {language === "kn" ? "English" : "ಕನ್ನಡ"}
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 rounded-xl text-cream hover:text-honey hover:bg-forest-800 transition-colors focus:outline-none focus:ring-2 focus:ring-honey cursor-pointer"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>

    {/* ===================== LUXURY MOBILE SLIDE-OVER DRAWER (PORTAL TO BODY) ===================== */}
    {isOpen && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Frosted Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-forest-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu backdrop"
          />

          {/* Slide-over Panel from Right */}
          <div className="fixed inset-y-0 right-0 w-[84%] max-w-sm h-full bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950 text-cream shadow-2xl flex flex-col justify-between p-5 border-l border-honey/30 z-10 overflow-y-auto">
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-forest-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-honey/20 border border-honey/40 flex items-center justify-center p-1">
                    <svg className="w-full h-full text-honey" viewBox="0 0 40 40" fill="none">
                      <path d="M20 32C12 28 5 22 7 12C11 16 16 23 20 32Z" fill="currentColor"/>
                      <path d="M20 32C28 28 35 22 33 12C29 16 24 23 20 32Z" fill="currentColor"/>
                      <circle cx="20" cy="9" r="3.2" fill="#FFEAA8"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">YUJAMRUTHA</h3>
                    <span className="text-[10px] text-honey font-decorative block">ಯುಜಾಮೃತ • Western Ghats</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-forest-800 text-cream hover:text-honey hover:bg-forest-700 transition-colors border border-forest-700 cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Language Switcher Bar inside Drawer */}
              <div className="my-3">
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-honey/15 border border-honey/40 text-honey-light text-xs font-semibold cursor-pointer active:scale-98"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-honey" />
                    <span>ಭಾಷೆ / Language:</span>
                  </span>
                  <span className="bg-honey text-forest-950 px-2.5 py-0.5 rounded-full font-bold">
                    {language === "kn" ? "Switch to English" : "ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ"}
                  </span>
                </button>
              </div>

              {/* Direct Contact Action Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-3 rounded-xl text-xs font-semibold shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${BRAND_INFO.rawPhone}`}
                  className="flex items-center justify-center gap-1.5 bg-forest-800 hover:bg-forest-700 text-honey border border-honey/30 py-2.5 px-3 rounded-xl text-xs font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-honey" />
                  <span>{language === "kn" ? "ಕರೆ ಮಾಡಿ" : "Call Instructor"}</span>
                </a>
              </div>

              {/* Primary Navigation Links */}
              <div className="space-y-1 my-2">
                {navLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? "bg-honey text-forest-950 font-bold shadow-md"
                            : "text-cream/90 hover:bg-forest-800 hover:text-honey"
                        }`
                      }
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 opacity-90" />
                        <span>{item.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </NavLink>
                  );
                })}
              </div>

              {/* Quick Action Cards inside Drawer */}
              <div className="mt-4 pt-4 border-t border-forest-800/80 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-honey block px-1">
                  {language === "kn" ? "ನೇರ ಸೇವೆಗಳು" : "Direct Services"}
                </span>

                <Link
                  to="/yoga-registration"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-forest-900/90 border border-honey/30 hover:border-honey transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-honey animate-pulse"></span>
                    <div>
                      <p className="text-xs font-bold text-white">
                        {language === "kn" ? "ವಿದ್ಯಾರ್ಥಿ ಯೋಗ ನೋಂದಣಿ" : "Student Yoga Registration"}
                      </p>
                      <p className="text-[10px] text-cream/70">
                        {language === "kn" ? "ಬೆಳಗ್ಗೆ 6:30ರ ಲೈವ್ ಬ್ಯಾಚ್" : "Live batches at 6:30 AM"}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-honey" />
                </Link>

                <Link
                  to="/buy-honey"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-forest-900/90 border border-honey/30 hover:border-honey transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-honey-light"></span>
                    <div>
                      <p className="text-xs font-bold text-white">
                        {language === "kn" ? "ಶುದ್ಧ ಕಾಡು ಜೇನುತುಪ್ಪ ಖರೀದಿಸಿ" : "Buy Raw Forest Honey"}
                      </p>
                      <p className="text-[10px] text-cream/70">Glass jars • 250g, 500g, 1kg</p>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-honey" />
                </Link>
              </div>
            </div>

            {/* Drawer Bottom Signature */}
            <div className="pt-4 border-t border-forest-800 text-[11px] text-cream/60 text-center">
              <p className="font-decorative italic text-honey text-xs mb-1">
                {t("top_tagline")}
              </p>
              <p>Thirthahalli, Western Ghats, Karnataka</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
