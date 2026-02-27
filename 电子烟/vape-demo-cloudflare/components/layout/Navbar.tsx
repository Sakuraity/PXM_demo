'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Menu, X, ChevronDown, Globe, Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const SERIES = [
  { slug: 'velo', label: 'VELO', color: '#cccccc', desc: 'Disposables' },
  { slug: 'apex', label: 'APEX', color: '#d4af37', desc: 'Flagship Pod Mod' },
  { slug: 'flux', label: 'FLUX', color: '#999999', desc: 'Open System' },
  { slug: 'core', label: 'CORE', color: '#ffffff', desc: 'Box Mod' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const { language, changeLanguage } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [seriesOpen, setSeriesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t('nav.products'), href: '/products' },
    { label: t('nav.technology'), href: '/technology' },
    { label: t('nav.configurator'), href: '/configurator' },
    { label: t('nav.compliance'), href: '/compliance' },
    { label: t('nav.about'), href: '/about' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-[#1a1a1a] shadow-2xl shadow-black/50 py-2'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white flex items-center justify-center transition-transform duration-500 group-hover:scale-95">
              <Zap className="w-5 h-5 text-black" fill="currentColor" />
            </div>
            <span className="text-xl font-black tracking-widest text-white uppercase">
              NEX<span className="text-[#888]">VAP</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Series dropdown */}
            <div className="relative group/nav h-full flex items-center" onMouseEnter={() => setSeriesOpen(true)} onMouseLeave={() => setSeriesOpen(false)}>
              <button className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-[#a3a3a3] hover:text-white transition-colors h-14">
                {t('nav.series')}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${seriesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-300 origin-top ${seriesOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                <div className="w-64 bg-[#0a0a0a] border border-[#1a1a1a] p-2 shadow-2xl">
                  {SERIES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/series/${s.slug}`}
                      className="flex items-center gap-4 px-4 py-4 hover:bg-[#111] transition-colors group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color }} />
                      <div>
                        <span className="block text-xs font-bold text-white uppercase tracking-widest mb-1 group-hover/item:text-[#d4af37] transition-colors">{s.label}</span>
                        <span className="block text-[10px] text-[#666] tracking-wider uppercase">{s.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#a3a3a3] hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => changeLanguage(language === 'en' ? 'zh' : 'en')}
              className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#888] hover:text-white transition-colors uppercase"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? '中文' : 'EN'}</span>
            </button>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-white text-black text-[11px] font-black tracking-widest uppercase hover:bg-[#e5e5e5] transition-colors"
            >
              {t('nav.getQuote')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white hover:text-[#d4af37] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-[#1a1a1a] transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-[500px] border-t' : 'max-h-0'}`}>
        <nav className="px-6 py-8 flex flex-col gap-6">
          <div className="text-[10px] font-black text-[#666] uppercase tracking-[0.2em]">
            {t('nav.series')}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {SERIES.map((s) => (
              <Link
                key={s.slug}
                href={`/series/${s.slug}`}
                className="flex items-center gap-3 p-3 bg-[#111] hover:bg-[#1a1a1a] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <span className="w-1.5 h-1.5" style={{ backgroundColor: s.color }} />
                <span className="text-xs font-bold text-white uppercase tracking-widest">{s.label}</span>
              </Link>
            ))}
          </div>
          
          <div className="h-px bg-[#1a1a1a] my-2" />
          
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold tracking-widest text-[#a3a3a3] hover:text-white uppercase transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="h-px bg-[#1a1a1a] my-2" />

          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                changeLanguage(language === 'en' ? 'zh' : 'en')
                setMobileOpen(false)
              }}
              className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#888] hover:text-white uppercase transition-colors"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? '中文' : 'ENGLISH'}
            </button>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-black text-[10px] font-black tracking-widest uppercase text-center"
              onClick={() => setMobileOpen(false)}
            >
              {t('nav.getQuote')}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
