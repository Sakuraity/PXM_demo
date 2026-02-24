"use client"

import { useTranslation } from 'react-i18next'

export default function HeroBanner() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-[713px] flex items-start bg-cover bg-center"
      style={{ backgroundImage: "url('/images/products/pink-skincare-packaging-scaled.webp')" }}>
      <div className="absolute inset-0 bg-[#663B33] opacity-70"></div>
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4">
        <div className="mt-[6%]">
          <h1 className="text-left text-white text-[75px] font-light capitalize leading-[1.3em] ml-[100px] mb-[30px]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {t('allApplications.hero.titleLine1')} <br />{t('allApplications.hero.titleLine2')}
          </h1>
          <div className="max-w-[1122px] mx-auto">
            <p className="text-left text-white text-lg font-extralight leading-[35px]">
              {t('allApplications.hero.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
