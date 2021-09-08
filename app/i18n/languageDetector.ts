import noop from 'lodash/noop';
import { findBestAvailableLanguage } from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storageKeys } from '@/configs';
import { defaultLanguage, languagesResources } from './languageConfig';

export const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (cb: (detectedLocale: string) => void): Promise<void> => {
    try {
      const persistedLocale = await AsyncStorage.getItem(storageKeys.localeKey);
      if (!persistedLocale) {
        const languageTags = Object.keys(languagesResources);
        const detectedLocale = findBestAvailableLanguage(languageTags);

        return cb(detectedLocale?.languageTag ?? defaultLanguage);
      }

      cb(persistedLocale);
    } catch {
      cb(defaultLanguage);
    }
  },
  init: noop,
  cacheUserLanguage: (locale: string): void => {
    AsyncStorage.setItem(storageKeys.localeKey, locale);
  },
};
