import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translation files
import enTranslations from '@/locales/en.json'
import zhTranslations from '@/locales/zh.json'

const resources = {
  en: {
    translation: enTranslations
  },
  zh: {
    translation: zhTranslations
  }
}

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en',
      supportedLngs: ['en', 'zh'],
      debug: process.env.NODE_ENV === 'development',
      
      interpolation: {
        escapeValue: false
      },

      react: {
        useSuspense: false,
        bindI18n: 'languageChanged loaded',
        bindI18nStore: 'added removed',
      }
    })
}

export default i18n
