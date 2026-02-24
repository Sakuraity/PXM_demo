'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ShieldCheck, Sliders, PackageCheck, Zap, Search, Settings2, FileText, Truck } from 'lucide-react'

const advantageIcons = [ShieldCheck, Sliders, PackageCheck, Zap]
const advantageKeys = ['quality', 'custom', 'moq', 'speed'] as const

const processIcons = [Search, Settings2, FileText, Truck]
const processKeys = ['browse', 'configure', 'quote', 'deliver'] as const

export default function AdvantagesSection() {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Advantages */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            {t('home.advantages.title')}
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            {t('home.advantages.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantageKeys.map((key, i) => {
            const Icon = advantageIcons[i]
            return (
              <div key={key} className="group text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-stone-50 border border-stone-100 group-hover:bg-[#c9a96e]/10 group-hover:border-[#c9a96e]/30 transition-colors mb-5">
                  <Icon className="w-6 h-6 text-stone-400 group-hover:text-[#c9a96e] transition-colors" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  {t(`home.advantages.items.${key}.title`)}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {t(`home.advantages.items.${key}.desc`)}
                </p>
              </div>
            )
          })}
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              {t('home.process.title')}
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              {t('home.process.subtitle')}
            </p>
          </div>

          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-stone-200" aria-hidden="true" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {processKeys.map((key, i) => {
                const Icon = processIcons[i]
                return (
                  <div key={key} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-stone-900 flex items-center justify-center mb-5 shadow-lg">
                        <Icon className="w-8 h-8 text-[#c9a96e]" />
                      </div>
                      <span className="text-xs font-bold text-[#c9a96e] tracking-widest uppercase mb-1">
                        {t(`home.process.steps.${key}.num`)}
                      </span>
                      <h3 className="font-bold text-stone-900 text-lg mb-2">
                        {t(`home.process.steps.${key}.title`)}
                      </h3>
                      <p className="text-sm text-stone-500 leading-relaxed">
                        {t(`home.process.steps.${key}.desc`)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-stone-900 text-white text-sm font-semibold hover:bg-stone-700 transition-colors"
            >
              {t('home.process.cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
