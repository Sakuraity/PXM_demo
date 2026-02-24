'use client'

import { useState } from 'react'
import { ChevronRight, ChevronUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const faqs = [
  { key: 'moq' },
  { key: 'belowMoq' },
  { key: 'leadTime' },
  { key: 'recyclable' },
  { key: 'sampleProof' },
]

export default function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] text-center mb-10">
          {t('home.faq.title')}
        </h2>
        <div className="max-w-3xl mx-auto space-y-0 border-t border-gray-200">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                className="w-full flex items-center justify-between py-4 text-left font-semibold text-[#1a1a2e] hover:text-[#c8a97e] transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{t(`home.faq.items.${faq.key}.q`)}</span>
                {openIndex === i ? <ChevronUp className="w-4 h-4 flex-shrink-0 ml-4" /> : <ChevronRight className="w-4 h-4 flex-shrink-0 ml-4" />}
              </button>
              {openIndex === i && (
                <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                  {t(`home.faq.items.${faq.key}.a`)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
