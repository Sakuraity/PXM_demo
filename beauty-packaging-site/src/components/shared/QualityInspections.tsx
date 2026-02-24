'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function QualityInspections() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-[#f5f5f0] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-8">
          {t('shared.qualityInspections.title')}
        </h2>
        <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed max-w-4xl mx-auto text-center mb-10">
          {t('shared.qualityInspections.description')}
        </p>
        <div className="text-center">
          <Link
            href="/contact-jarsking/"
            className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
          >
            {t('shared.qualityInspections.button')}
          </Link>
        </div>
      </div>
    </section>
  )
}
