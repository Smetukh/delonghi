import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './src/assets/locales/en/common.json';
import translationDe from './src/assets/locales/de/common.json';
import translationIt from './src/assets/locales/it/common.json';
import { FALLBACK_LANGUAGE, LANGUAGE_LIST } from './src/constants';

const getLanguage = () => {
  const language = (
    window.DLG?.config.currentLanguageIsocode || FALLBACK_LANGUAGE
  ).slice(0, 2); // transform iso language code
  return LANGUAGE_LIST.includes(language) ? language : FALLBACK_LANGUAGE;
};

i18n.use(initReactI18next).init({
  fallbackLng: getLanguage(),
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
