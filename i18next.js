import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './src/assets/locales/en/common.json';
import translationFr from './src/assets/locales/fr/common.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: translationEn,
    },
    fr: {
      translation: translationFr,
    },
  },
  interpolation: {
    espaceValue: false,
    formatSeparator: ',',
  },
});

export default i18n;
