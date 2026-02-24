'use client'

import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TranslationDebug() {
  const { t, i18n } = useTranslation()
  const { currentLanguage, changeLanguage } = useLanguage()
  
  console.log('Current language:', currentLanguage)
  console.log('i18n language:', i18n.language)
  console.log('Translation test - common.search:', t('common.search'))
  
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <h3 className="font-bold mb-2">Translation Debug</h3>
      <p>Current Language: {currentLanguage}</p>
      <p>i18n Language: {i18n.language}</p>
      <p>Test Translation: {t('common.search')}</p>
      <div className="mt-2 space-x-2">
        <button 
          onClick={() => changeLanguage('en')}
          className="px-2 py-1 bg-blue-500 text-white text-sm rounded"
        >
          EN
        </button>
        <button 
          onClick={() => changeLanguage('zh')}
          className="px-2 py-1 bg-green-500 text-white text-sm rounded"
        >
          ZH
        </button>
      </div>
    </div>
  )
}
