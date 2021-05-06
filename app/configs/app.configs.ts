export enum LanguageTypes {
  ENGLISH = 'en',
  KOREAN = 'ko',
}

interface AppConfig {
  isDevelopment: boolean;
  defaultLang: string;
}

export const appConfigs: AppConfig = {
  isDevelopment: false,
  defaultLang: LanguageTypes.ENGLISH,
};
