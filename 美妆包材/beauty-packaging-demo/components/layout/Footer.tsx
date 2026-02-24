'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-white mb-3">
              Luxe<span className="text-[#c9a96e]">Pack</span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed mb-6">
              {t('brand.tagline')}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-stone-400">
                <Mail className="w-4 h-4 text-[#c9a96e]" />
                <span>hello@luxepack.com</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <Phone className="w-4 h-4 text-[#c9a96e]" />
                <span>+86 755 1234 5678</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <MapPin className="w-4 h-4 text-[#c9a96e]" />
                <span>Guangzhou, China</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('footer.products')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?application=skincare" className="hover:text-[#c9a96e] transition-colors">{t('footer.skincare')}</Link></li>
              <li><Link href="/products?application=makeup" className="hover:text-[#c9a96e] transition-colors">{t('footer.makeup')}</Link></li>
              <li><Link href="/products?application=homecare" className="hover:text-[#c9a96e] transition-colors">{t('footer.homecare')}</Link></li>
              <li><Link href="/products?material=glass" className="hover:text-[#c9a96e] transition-colors">{t('nav.glass')}</Link></li>
              <li><Link href="/products?material=acrylic" className="hover:text-[#c9a96e] transition-colors">{t('nav.acrylic')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-[#c9a96e] transition-colors">{t('footer.customization')}</Link></li>
              <li><Link href="/contact" className="hover:text-[#c9a96e] transition-colors">{t('footer.sampling')}</Link></li>
              <li><Link href="/contact" className="hover:text-[#c9a96e] transition-colors">{t('footer.oem')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('footer.company')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[#c9a96e] transition-colors">{t('footer.about')}</Link></li>
              <li><Link href="/contact" className="hover:text-[#c9a96e] transition-colors">{t('footer.contact')}</Link></li>
              <li><Link href="/about" className="hover:text-[#c9a96e] transition-colors">{t('footer.sustainability')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <span>{t('footer.copyright')}</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c9a96e]" />
            {t('footer.isoLabel')}
          </span>
        </div>
      </div>
    </footer>
  )
}
