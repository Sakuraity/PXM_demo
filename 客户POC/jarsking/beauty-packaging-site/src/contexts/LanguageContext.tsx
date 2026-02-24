'use client'

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nInstance from '@/lib/i18n'

export type Language = 'en' | 'zh'

interface LanguageContextType {
  currentLanguage: Language
  changeLanguage: (lang: Language) => void
  isLanguageLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [isLanguageLoading, setIsLanguageLoading] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en')
  
  const changeLanguage = useCallback(async (lang: Language) => {
    setIsLanguageLoading(true)
    try {
      await i18nInstance.changeLanguage(lang)
      setCurrentLanguage(lang)
      if (typeof window !== 'undefined') {
        localStorage.setItem('i18nextLng', lang)
        document.documentElement.lang = lang
      }
    } catch (error) {
      console.error('Failed to change language:', error)
    } finally {
      setIsLanguageLoading(false)
    }
  }, [])

  // Restore persisted language only after hydration to avoid SSR/CSR mismatch
  useEffect(() => {
    const saved = localStorage.getItem('i18nextLng')
    const nextLang: Language = saved === 'en' || saved === 'zh' ? saved : 'en'

    if (nextLang !== i18nInstance.language) {
      i18nInstance.changeLanguage(nextLang)
    }
    setCurrentLanguage(nextLang)
  }, [])
  
  // Listen to i18n language changes
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      if (lng === 'en' || lng === 'zh') {
        setCurrentLanguage(lng as Language)
      }
    }
    
    i18nInstance.on('languageChanged', handleLanguageChanged)
    return () => {
      i18nInstance.off('languageChanged', handleLanguageChanged)
    }
  }, [])
  
  // Set document lang
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = currentLanguage
    }
  }, [currentLanguage])
  
  const value: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    isLanguageLoading
  }
  
  return (
    <I18nextProvider i18n={i18nInstance}>
      <LanguageContext.Provider value={value}>
        <React.Fragment key={currentLanguage}>
          {children}
        </React.Fragment>
      </LanguageContext.Provider>
    </I18nextProvider>
  )
}
