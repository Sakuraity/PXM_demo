'use client'

import { useEffect } from 'react'
import i18n from '@/lib/i18n'

export default function I18nInitializer() {
  useEffect(() => {
    // i18n is already initialized in the lib file
    // This component ensures it runs only on the client side
  }, [])
  
  return null
}
