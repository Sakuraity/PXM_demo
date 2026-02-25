'use client'

import { useTranslation } from 'react-i18next'
import { ShieldCheck, Sliders, PackageCheck, Zap } from 'lucide-react'

const advantageIcons = [ShieldCheck, Sliders, PackageCheck, Zap]
const advantageKeys = ['quality', 'custom', 'moq', 'speed'] as const

export default function AdvantagesSection() {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </section>
  )
}
