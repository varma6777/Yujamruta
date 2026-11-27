import React, { createContext, useContext, useState, useEffect } from "react";
import { UI_TRANSLATIONS } from "../data/uiTranslations";

const LanguageContext = createContext();

export const TRANSLATIONS = UI_TRANSLATIONS;

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem("yujamrutha_lang");
      return saved === "kn" ? "kn" : "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("yujamrutha_lang", language);
    } catch (e) {
      console.warn("Could not save language to localStorage", e);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "kn" : "en"));
  };

  const t = (key) => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: "en",
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: (key) => TRANSLATIONS.en[key] || key
    };
  }
  return context;
}
