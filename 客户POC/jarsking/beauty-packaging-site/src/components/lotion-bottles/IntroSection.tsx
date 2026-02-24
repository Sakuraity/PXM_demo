'use client'

import { useTranslation } from 'react-i18next'

export default function LotionIntroSection() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1">
          <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] mb-6">
            {t('lotionBottles.intro.title')}
          </h2>
          <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed">
            {t('lotionBottles.intro.description')}
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://www.jarsking.com/wp-content/uploads/2025/09/airless-body-lotion-bottle.webp"
            alt={t('lotionBottles.intro.imageAlt')}
            className="w-full max-w-[500px] h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
