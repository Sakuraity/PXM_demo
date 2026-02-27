'use client'

import React, { createContext, useContext, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nInstance from '@/lib/i18n'
import type { Language } from '@/types'

interface LanguageContextValue {
  language: Language
  changeLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  changeLanguage: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    i18nInstance.changeLanguage(lang)
  }

  return (
    <I18nextProvider i18n={i18nInstance}>
      <LanguageContext.Provider value={{ language, changeLanguage }}>
        <React.Fragment key={language}>
          {children}
        </React.Fragment>
      </LanguageContext.Provider>
    </I18nextProvider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
