import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import { getLocales } from 'react-native-localize';
import { defaultLanguage, languagesResources } from './languageConfig';
import { languageDetector } from './languageDetector';

// @ts-ignore
i18next.use(languageDetector).use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: defaultLanguage,
  debug: false,
  resources: languagesResources,
});

export const I18n = i18next;
