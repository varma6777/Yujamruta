import React from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Sparkles, 
  Heart, 
  Leaf, 
  ShieldCheck 
} from "lucide-react";
import { BRAND_INFO } from "../data/siteData";
import { useLanguage } from "../context/LanguageContext";

// Inline SVG brand icons for 100% reliability
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();
  const isKn = language === "kn";
  const whatsappUrl = `https://wa.me/${BRAND_INFO.rawPhone}?text=${encodeURIComponent(
    isKn ? "ನಮಸ್ಕಾರ ಯುಜಾಮೃತ! ನನಗೆ ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಬೇಕಿದೆ." : "Namaste Yujamrutha! I would like more information."
  )}`;

  return (
    <footer className="bg-forest-950 text-cream relative overflow-hidden border-t-2 border-honey/30">
      {/* Decorative top pattern & subtle gradient glow */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-forest via-honey to-forest"></div>
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-honey/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Col 1: Brand Info & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-honey/20 border border-honey/40 flex items-center justify-center p-1.5 shadow-honey">
                <svg className="w-full h-full text-honey" width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 32C12 28 5 22 7 12C11 16 16 23 20 32Z" fill="currentColor"/>
                  <path d="M20 32C28 28 35 22 33 12C29 16 24 23 20 32Z" fill="currentColor"/>
                  <circle cx="20" cy="9" r="3.2" fill="#FFEAA8"/>
                  <path d="M20 12C20 12 23.5 18 23.5 22C23.5 25 21.5 27 20 27C18.5 27 16.5 25 16.5 22C16.5 18 20 12 20 12Z" fill="#FFEAA8"/>
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold tracking-wider text-white">
                  YUJAMRUTHA
                </h3>
                <span className="text-xs text-honey block font-decorative">
                  {BRAND_INFO.kannadaName} • Western Ghats Purity
                </span>
              </div>
            </div>

            <p className="font-decorative italic text-honey text-base font-medium">
              "{t("top_tagline")}"
            </p>

            <p className="text-cream/70 text-xs sm:text-sm leading-relaxed">
              Synthesizing ancient Yogic Sadhana by SVYASA-certified acharyas with 100% raw, unheated multifloral honey from the pristine Western Ghats of Karnataka.
            </p>

            {/* Traditional Trust Badge */}
            <div className="pt-2 flex items-center gap-2 text-xs text-honey-light/90">
              <ShieldCheck className="w-4 h-4 text-honey" />
              <span>100% Natural • Zero Additives • Ethical Apiary</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-honey border-b border-forest-800 pb-2 mb-4">
              {t("quick_links")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-cream/80 hover:text-honey hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-honey text-xs">›</span> {t("nav_home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream/80 hover:text-honey hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-honey text-xs">›</span> {t("nav_about")}
                </Link>
              </li>
              <li>
                <Link to="/yoga" className="text-cream/80 hover:text-honey hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-honey text-xs">›</span> {t("nav_yoga")}
                </Link>
              </li>
              <li>
                <Link to="/honey" className="text-cream/80 hover:text-honey hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-honey text-xs">›</span> {t("nav_honey")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/80 hover:text-honey hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-honey text-xs">›</span> {t("nav_contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-honey border-b border-forest-800 pb-2 mb-4">
              {t("our_services")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/yoga" className="text-cream/80 hover:text-honey hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-honey text-xs">›</span> {language === "kn" ? "ಆನ್‌ಲೈನ್ ಯೋಗ ತರಗತಿಗಳು" : "Online Yoga Classes"}
                </Link>
              </li>
              <li>
                <Link to="/yoga" className="text-cream/80 hover:text-honey hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-honey text-xs">›</span> {language === "kn" ? "ಯೋಗ ಚಿಕಿತ್ಸೆ ಮತ್ತು ತರಬೇತಿ" : "Yoga Training & Therapy"}
                </Link>
              </li>
              <li>
                <Link to="/buy-honey" className="text-cream/80 hover:text-honey hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-honey text-xs">›</span> {language === "kn" ? "ನೈಸರ್ಗಿಕ ಕಾಡು ಜೇನುತುಪ್ಪ" : "Natural Honey (250g, 500g, 1kg)"}
                </Link>
              </li>
              <li>
                <Link to="/buy-honey" className="text-cream/80 hover:text-honey hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-honey text-xs">›</span> {language === "kn" ? "ಡೋರ್‌ಸ್ಟೆಪ್ ಡೆಲಿವರಿ" : "Doorstep Delivery across India"}
                </Link>
              </li>
              <li>
                <Link to="/yoga-registration" className="text-cream/80 hover:text-honey hover:translate-x-1 inline-flex items-center gap-1.5 transition-all">
                  <span className="text-honey text-xs">›</span> {language === "kn" ? "ವಿದ್ಯಾರ್ಥಿ ನೋಂದಣಿ" : "Student Admission & Coaching"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-honey border-b border-forest-800 pb-2 mb-4">
              {t("get_in_touch")}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-cream/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-honey shrink-0 mt-1" />
                <span className="leading-snug">{BRAND_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-honey shrink-0" />
                <a href={`tel:${BRAND_INFO.rawPhone}`} className="hover:text-honey transition-colors">
                  {BRAND_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-honey shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-honey transition-colors break-all">
                  {BRAND_INFO.email}
                </a>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="pt-2">
              <h5 className="text-xs uppercase tracking-wider text-honey font-semibold mb-3">
                Follow Our Journey
              </h5>
              <div className="flex items-center gap-3">
                <a
                  href={BRAND_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Yujamrutha on Instagram"
                  className="w-9 h-9 rounded-full bg-forest-800 hover:bg-honey text-cream hover:text-forest flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={BRAND_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Yujamrutha on Facebook"
                  className="w-9 h-9 rounded-full bg-forest-800 hover:bg-honey text-cream hover:text-forest flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={BRAND_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch Yujamrutha Yoga on YouTube"
                  className="w-9 h-9 rounded-full bg-forest-800 hover:bg-honey text-cream hover:text-forest flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#1faa53] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Traditional Quote */}
        <div className="mt-12 pt-6 border-t border-forest-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-cream/60 gap-4">
          <p>© {currentYear} YUJAMRUTHA ({BRAND_INFO.kannadaName}). {t("rights_reserved")}</p>
          <div className="flex items-center gap-1.5 text-honey/80 font-decorative italic text-sm">
            <span>सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः</span>
            <span>({t("footer_blessing")})</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
