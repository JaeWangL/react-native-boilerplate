import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import { getLocales } from 'react-native-localize';
import { appConfigs } from '@/configs';
import * as resources from './locales';

i18next.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: appConfigs.defaultLang,
  debug: false,
  resources: resources.default,
});

export const I18n = i18next;
