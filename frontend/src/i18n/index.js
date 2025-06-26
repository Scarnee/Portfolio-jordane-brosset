import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationsInFr from "../locales/fr/translation.json";
import translationsInEn from "../locales/en/translation.json";
import translationsInEs from "../locales/es/translation.json";

// Translations

const resources = {
  en: {
    translation: translationsInEn,
  },
  fr: {
    translation: translationsInFr,
  },
  es: {
    translation: translationsInEs,
  },
};

i18n
  .use(LanguageDetector) // Ajoute le détecteur AVANT initReactI18next
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr", // Langue par défaut si non trouvée
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    ns: "translation",
    defaultNS: "translation",
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
