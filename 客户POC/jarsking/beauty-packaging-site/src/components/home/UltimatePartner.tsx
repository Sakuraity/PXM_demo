'use client'

import { useState } from 'react'
import { ChevronRight, ChevronUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const toggleItems = [
  { key: 'globalReach' },
  { key: 'craftsmanship' },
  { key: 'strengths' },
  { key: 'whyChoose' },
]

export default function UltimatePartner() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h6 className="text-sm font-bold text-[#c8a97e] mb-4 tracking-wider">JARSKING</h6>
            <img
              src="https://www.jarsking.com/wp-content/uploads/2025/01/perfume-bottle-manufacturer.jpg"
              alt="perfume bottle manufacturer"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">{t('home.ultimatePartner.title')}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('home.ultimatePartner.description')}
            </p>

            <div className="space-y-0 border-t border-gray-200">
              {toggleItems.map((item, i) => (
                <div key={i} className="border-b border-gray-200">
                  <button
                    className="w-full flex items-center justify-between py-4 text-left font-semibold text-[#1a1a2e] hover:text-[#c8a97e] transition-colors"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span>{t(`home.ultimatePartner.toggles.${item.key}.title`)}</span>
                    {openIndex === i ? <ChevronUp className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                  {openIndex === i && (
                    <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                      {t(`home.ultimatePartner.toggles.${item.key}.content`)}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-6 font-bold text-[#1a1a2e]">
              {t('home.ultimatePartner.closing')}
            </p>
            <div className="mt-4 text-center">
              <a
                href="/contact-jarsking"
                className="inline-block px-6 py-3 bg-[#c8a97e] text-white rounded hover:bg-[#b89a6f] transition-colors text-sm font-medium"
              >
                {t('home.ultimatePartner.button')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
