'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const { t } = useTranslation()
  const { language, changeLanguage } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const productNav = [
    {
      group: t('nav.byApplication'),
      items: [
        { label: t('nav.skincare'), href: '/products?application=skincare' },
        { label: t('nav.makeup'), href: '/products?application=makeup' },
        { label: t('nav.homecare'), href: '/products?application=homecare' },
      ],
    },
    {
      group: t('nav.byMaterial'),
      items: [
        { label: t('nav.glass'), href: '/products?material=glass' },
        { label: t('nav.acrylic'), href: '/products?material=acrylic' },
        { label: t('nav.plastic'), href: '/products?material=plastic' },
      ],
    },
    {
      group: t('nav.byType'),
      items: [
        { label: t('nav.bottles'), href: '/products?type=bottles' },
        { label: t('nav.jars'), href: '/products?type=jars' },
        { label: t('nav.pumps'), href: '/products?type=pumps' },
      ],
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-stone-900">
              Luxe<span className="text-[#c9a96e]">Pack</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors py-5">
                {t('nav.products')}
                <ChevronDown className="w-4 h-4" />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 w-[520px] bg-white border border-stone-200 shadow-xl rounded-xl p-6 grid grid-cols-3 gap-6">
                  {productNav.map((group) => (
                    <div key={group.group}>
                      <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                        {group.group}
                      </p>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="text-sm text-stone-700 hover:text-[#c9a96e] transition-colors"
                              onClick={() => setProductsOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/products" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">
              {t('nav.customization')}
            </Link>
            <Link href="/contact" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">
              {t('nav.about')}
            </Link>
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language toggle */}
            <button
              onClick={() => changeLanguage(language === 'en' ? 'zh' : 'en')}
              className="flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? '中文' : 'EN'}</span>
            </button>

            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
            >
              {t('nav.getQuote')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-stone-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-4">
          <Link href="/products" className="block text-sm font-medium text-stone-700 py-2" onClick={() => setMobileOpen(false)}>
            {t('nav.products')}
          </Link>
          <div className="pl-3 space-y-2 border-l border-stone-200">
            {productNav.flatMap((g) => g.items).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-stone-600 py-1"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="block text-sm font-medium text-stone-700 py-2" onClick={() => setMobileOpen(false)}>
            {t('nav.contact')}
          </Link>
          <div className="flex items-center justify-between pt-2 border-t border-stone-200">
            <button
              onClick={() => changeLanguage(language === 'en' ? 'zh' : 'en')}
              className={cn("flex items-center gap-1.5 text-sm text-stone-500")}
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? '中文' : 'EN'}
            </button>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium bg-stone-900 text-white rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              {t('nav.getQuote')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
