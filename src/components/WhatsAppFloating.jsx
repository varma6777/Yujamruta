import React from "react";
import { MessageCircle } from "lucide-react";
import { BRAND_INFO } from "../data/siteData";
import { useLanguage } from "../context/LanguageContext";

export default function WhatsAppFloating() {
  const { language } = useLanguage();
  const isKn = language === "kn";

  const defaultMsg = encodeURIComponent(
    isKn
      ? "ನಮಸ್ಕಾರ! ನಾನು ಯುಜಾಮೃತ ಯೋಗ ತರಗತಿಗಳು ಮತ್ತು ಶುದ್ಧ ಜೇನುತುಪ್ಪದ ಕುರಿತು ವಿಚಾರಿಸಲು ಬಯಸುತ್ತೇನೆ."
      : "Namaste! I would like to enquire about Yujamrutha Yoga classes and Pure Honey."
  );
  const whatsappUrl = `https://wa.me/${BRAND_INFO.rawPhone}?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col pointer-events-auto">
      {/* Clean Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isKn ? "ನೇರ ವಾಟ್ಸಾಪ್ ಚಾಟ್" : "Direct WhatsApp Chat"}
        title={isKn ? "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಗುರು ಅಭಿನಂದನ್ ಅವರೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ" : "Chat with Master Abhinandan on WhatsApp"}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-honey hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366] relative z-10 transition-transform group-hover:rotate-12" />
      </a>
    </div>
  );
}
