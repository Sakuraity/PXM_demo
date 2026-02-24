import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import zh from '@/locales/zh.json'
import en from '@/locales/en.json'

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        zh: { translation: zh },
        en: { translation: en },
      },
      lng: 'en',
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      react: {
        useSuspense: false,
        bindI18n: 'languageChanged loaded',
        bindI18nStore: 'added removed',
      },
    })
}

export default i18n
