'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Zap, ShieldCheck } from 'lucide-react'

const SERIES_LINKS = [
  { slug: 'velo', label: 'VELO Series', color: '#cccccc' },
  { slug: 'apex', label: 'APEX Series', color: '#d4af37' },
  { slug: 'flux', label: 'FLUX Series', color: '#999999' },
  { slug: 'core', label: 'CORE Series', color: '#ffffff' },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-black border-t border-[#1a1a1a] text-[#888]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8 group inline-flex">
              <div className="w-10 h-10 bg-white flex items-center justify-center transition-transform duration-500 group-hover:scale-95">
                <Zap className="w-5 h-5 text-black" fill="currentColor" />
              </div>
              <span className="text-xl font-black text-white uppercase tracking-widest">
                NEX<span className="text-[#888]">VAP</span>
              </span>
            </Link>
            <p className="text-sm text-[#666] leading-relaxed mb-8 max-w-sm font-medium">
              {t('footer.brand_desc')}
            </p>
            <div className="space-y-4 text-xs font-bold tracking-widest uppercase">
              <div className="flex items-center gap-3 group cursor-pointer">
                <Mail className="w-4 h-4 text-[#444] group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">{t('footer.emailValue')}</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <Phone className="w-4 h-4 text-[#444] group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">{t('footer.phoneValue')}</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <MapPin className="w-4 h-4 text-[#444] group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">{t('footer.addressValue')}</span>
              </div>
            </div>
          </div>

          {/* Series */}
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-8">
              {t('footer.series')}
            </h4>
            <ul className="space-y-4 text-xs font-bold tracking-wider uppercase">
              {SERIES_LINKS.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/series/${s.slug}`}
                    className="flex items-center gap-3 text-[#666] hover:text-white transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#333] group-hover:bg-white transition-colors" />
                    {s.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/products" className="text-[#666] hover:text-white transition-colors">
                  {t('footer.all_products')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-8">
              {t('footer.services')}
            </h4>
            <ul className="space-y-4 text-xs font-bold tracking-wider uppercase">
              <li><Link href="/contact" className="text-[#666] hover:text-white transition-colors">{t('footer.wholesale')}</Link></li>
              <li><Link href="/contact" className="text-[#666] hover:text-white transition-colors">{t('footer.oem_odm')}</Link></li>
              <li><Link href="/contact" className="text-[#666] hover:text-white transition-colors">{t('footer.sampling')}</Link></li>
              <li><Link href="/compliance" className="text-[#666] hover:text-white transition-colors">{t('footer.compliance')}</Link></li>
              <li><Link href="/technology" className="text-[#666] hover:text-white transition-colors">{t('footer.technology')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-8">
              {t('footer.company')}
            </h4>
            <ul className="space-y-4 text-xs font-bold tracking-wider uppercase mb-8">
              <li><Link href="/about" className="text-[#666] hover:text-white transition-colors">{t('footer.about')}</Link></li>
              <li><Link href="/contact" className="text-[#666] hover:text-white transition-colors">{t('footer.contact')}</Link></li>
            </ul>
            {/* Compliance badges */}
            <div className="flex flex-wrap gap-2">
              {['CE', 'FCC', 'TPD', 'ROHS', 'UN38.3'].map((cert) => (
                <span
                  key={cert}
                  className="px-2 py-1 text-[9px] font-black bg-[#111] text-[#666] tracking-widest"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Age Warning */}
        <div className="mb-8 p-6 bg-[#050505] border border-[#1a1a1a]">
          <p className="text-[10px] text-[#444] text-center leading-relaxed font-bold tracking-widest uppercase">
            <strong className="text-[#666] mr-2">WARNING:</strong>
            {t('footer.age_warning')}
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] font-bold tracking-widest text-[#444] uppercase">
            {t('footer.copyright')}
          </span>
          <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#666] uppercase bg-[#111] px-3 py-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            {t('footer.b2b_only')}
          </span>
        </div>
      </div>
    </footer>
  )
}
