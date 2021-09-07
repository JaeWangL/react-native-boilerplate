import noop from 'lodash/noop';
import { findBestAvailableLanguage } from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appConfigs, storageKeys } from '@/configs';
import { en, ko } from './locales';

export const languagesResources = {
  en,
  ko,
};

const RNLanguageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (cb: (detectedLocale: string) => void): Promise<void> => {
    try {
      const persistedLocale = await AsyncStorage.getItem(storageKeys.localeKey);
      if (!persistedLocale) {
        const languageTags = Object.keys(languagesResources);
        const detectedLocale = findBestAvailableLanguage(languageTags);

        return cb(detectedLocale?.languageTag ?? appConfigs.defaultLang);
      }

      cb(persistedLocale);
    } catch {
      cb(appConfigs.defaultLang);
    }
  },
  init: noop,
  cacheUserLanguage: (locale: string): void => {
    AsyncStorage.setItem(storageKeys.localeKey, locale);
  },
};

export default RNLanguageDetector;
