import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './src/assets/locales/en/common.json';
import translationDe from './src/assets/locales/de/common.json';
import translationIt from './src/assets/locales/it/common.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: translationEn,
    },
    it: {
      translation: translationIt,
    },
    de: {
      translation: translationDe,
    },
  },
  interpolation: {
    espaceValue: false,
    formatSeparator: ',',
  },
});

export default i18n;
