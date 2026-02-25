'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import ProductsDropdown from '@/components/layout/navbar/ProductsDropdown'
import MobileMenu from '@/components/layout/navbar/MobileMenu'

export default function Navbar() {
  const { t } = useTranslation()
  const { language, changeLanguage } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const mobileNavItems = [
    { label: t('nav.skincare'), href: '/products?application=skincare' },
    { label: t('nav.makeup'), href: '/products?application=makeup' },
    { label: t('nav.homecare'), href: '/products?application=homecare' },
    { label: t('nav.glass'), href: '/products?material=glass' },
    { label: t('nav.acrylic'), href: '/products?material=acrylic' },
    { label: t('nav.plastic'), href: '/products?material=plastic' },
    { label: t('nav.bottles'), href: '/products?type=bottles' },
    { label: t('nav.jars'), href: '/products?type=jars' },
    { label: t('nav.pumps'), href: '/products?type=pumps' },
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
            <ProductsDropdown
              isOpen={productsOpen}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              onItemClick={() => setProductsOpen(false)}
            />
            <Link
              href="https://packvisual.realibox.com/app/mockup_share/projects/2474184800847527955"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors"
            >
              {t('nav.customization')}
            </Link>
            <Link href="/craft" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">
              {t('nav.craft')}
            </Link>
            <Link href="/about" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">
              {t('nav.about')}
            </Link>
            <Link href="/contact" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4">
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

      {mobileOpen && (
        <MobileMenu
          navItems={mobileNavItems}
          language={language}
          onChangeLanguage={changeLanguage}
          onClose={() => setMobileOpen(false)}
        />
      )}
    </header>
  )
}
