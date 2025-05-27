import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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

i18n.use(initReactI18next).init({
    resources,
    lng: "en", //Default Language
    debug: true,
    fallbackLng: "fr", //Language used if default language not available
    interpolation: {
        escapeValue: false,
    },
    ns: "translation",
    defaultNS: "translation",
});

export default i18n;
