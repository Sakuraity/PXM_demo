'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 via-white to-amber-50 min-h-[88vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50/60 to-transparent" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#c9a96e]/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-stone-200/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text content */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c9a96e]/10 border border-[#c9a96e]/30 text-[#c9a96e] text-sm font-medium mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            {t('home.hero.badge')}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
            {t('home.hero.title')}
          </h1>

          <p className="text-lg text-stone-500 leading-relaxed mb-10 max-w-xl">
            {t('home.hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors"
            >
              {t('home.hero.cta')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-stone-300 text-stone-700 font-medium rounded-xl hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
            >
              {t('home.hero.ctaSecondary')}
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-4 gap-6 pt-10 border-t border-stone-200">
            {[
              { value: t('home.stats.products'), label: t('home.stats.productsLabel') },
              { value: t('home.stats.brands'), label: t('home.stats.brandsLabel') },
              { value: t('home.stats.experience'), label: t('home.stats.experienceLabel') },
              { value: t('home.stats.countries'), label: t('home.stats.countriesLabel') },
            ].map((stat) => (
              <div key={stat.value}>
                <div className="text-xl font-bold text-stone-900">{stat.value}</div>
                <div className="text-xs text-stone-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product image grid */}
        <div className="hidden lg:grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden bg-stone-100 aspect-[3/4]">
              <img
                src="https://www.jarsking.com/wp-content/uploads/2025/10/luxury-glass-skincare-packaging.webp"
                alt="Luxury glass face cream jar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-amber-50 aspect-square">
              <img
                src="https://www.jarsking.com/wp-content/uploads/2025/09/high-end-cosmetic-packaging-glass-dropper-bottle.webp"
                alt="Dropper serum bottle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="rounded-2xl overflow-hidden bg-stone-50 aspect-square">
              <img
                src="https://www.jarsking.com/wp-content/uploads/2025/10/refillable-airless-skincare-jar-supplier.webp"
                alt="Acrylic face cream jar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-stone-100 aspect-[3/4]">
              <img
                src="https://www.jarsking.com/wp-content/uploads/2025/08/premium-cosmetic-packaging-solutions-for-startups.webp"
                alt="Premium packaging set"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
