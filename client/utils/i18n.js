
import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

// Could be anything that returns default preferred language
import { getLocales } from "expo-localization";


i18n.use(initReactI18next) // Initialize react-i18next
  .init({
    compatibilityJSON: 'v3',
    lng: getLocales()[0].languageCode,
    fallbackLng: 'es', // Fallback language
    resources: {
      es: {
        translation: es, // Spanish translations
      },
      en: {
        translation: en, // English translations
      },
    },
  });

export default i18n;

