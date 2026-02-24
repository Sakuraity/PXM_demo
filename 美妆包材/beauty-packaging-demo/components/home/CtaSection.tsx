'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Mail } from 'lucide-react'

export default function CtaSection() {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#c9a96e]/10 mb-8">
          <Mail className="w-7 h-7 text-[#c9a96e]" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          {t('home.cta.title')}
        </h2>
        <p className="text-lg text-stone-500 mb-10">
          {t('home.cta.subtitle')}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors text-base"
        >
          {t('home.cta.button')}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
