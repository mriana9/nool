import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTrans from './locales/en/translation.json';
import arTrans from './locales/ar/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTrans },
      ar: { translation: arTrans }
    },
    lng: "ar", 
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;