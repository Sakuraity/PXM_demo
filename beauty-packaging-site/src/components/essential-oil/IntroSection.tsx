'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function EssentialOilIntroSection() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1">
          <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] mb-6">
            {t('essentialOil.intro.title')}
          </h2>
          <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed mb-8">
            {t('essentialOil.intro.description')}
          </p>
          <Link
            href="/contact-jarsking/"
            className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
          >
            {t('essentialOil.intro.button')}
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://www.jarsking.com/wp-content/uploads/2023/02/30ml-Essential-Oil-Bottles.jpg"
            alt={t('essentialOil.intro.imageAlt')}
            className="w-full max-w-[500px] h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
