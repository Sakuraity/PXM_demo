'use client'

import Link from 'next/link'
import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import type { Language } from '@/types'

interface NavItem {
  label: string
  href: string
}

interface Props {
  navItems: NavItem[]
  language: Language
  onChangeLanguage: (lang: Language) => void
  onClose: () => void
}

export default function MobileMenu({ navItems, language, onChangeLanguage, onClose }: Props) {
  const { t } = useTranslation()

  return (
    <div className="md:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-4">
      <Link href="/products" className="block text-sm font-medium text-stone-700 py-2" onClick={onClose}>
        {t('nav.products')}
      </Link>
      <div className="pl-3 space-y-2 border-l border-stone-200">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block text-sm text-stone-600 py-1"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Link href="/contact" className="block text-sm font-medium text-stone-700 py-2" onClick={onClose}>
        {t('nav.contact')}
      </Link>
      <div className="flex items-center justify-between pt-2 border-t border-stone-200">
        <button
          onClick={() => onChangeLanguage(language === 'en' ? 'zh' : 'en')}
          className={cn('flex items-center gap-1.5 text-sm text-stone-500')}
        >
          <Globe className="w-4 h-4" />
          {language === 'en' ? '中文' : 'EN'}
        </button>
        <Link
          href="/contact"
          className="px-4 py-2 text-sm font-medium bg-stone-900 text-white rounded-lg"
          onClick={onClose}
        >
          {t('nav.getQuote')}
        </Link>
      </div>
    </div>
  )
}
