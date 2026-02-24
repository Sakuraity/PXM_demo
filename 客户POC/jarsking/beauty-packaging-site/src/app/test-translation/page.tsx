'use client'

import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TestTranslation() {
  const { t } = useTranslation()
  const { currentLanguage, changeLanguage } = useLanguage()
  
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Translation Test Page</h1>
      
      <div className="mb-6">
        <p>Current Language: {currentLanguage}</p>
        <button 
          onClick={() => changeLanguage('en')}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          English
        </button>
        <button 
          onClick={() => changeLanguage('zh')}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          中文
        </button>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Common Translations:</h2>
        <p>Search: {t('common.search')}</p>
        <p>Contact & Quote: {t('common.contactQuote')}</p>
        <p>Language: {t('common.language')}</p>
        
        <h2 className="text-xl font-semibold mt-6">Navigation Translations:</h2>
        <p>Products: {t('navigation.products')}</p>
        <p>By Applications: {t('navigation.byapplications')}</p>
        <p>Skincare: {t('navigation.skincare')}</p>
        
        <h2 className="text-xl font-semibold mt-6">Home Page Translations:</h2>
        <p>Hero Title: {t('home.hero.title')}</p>
        <p>Hero Subtitle: {t('home.hero.subtitle')}</p>
      </div>
    </div>
  )
}
