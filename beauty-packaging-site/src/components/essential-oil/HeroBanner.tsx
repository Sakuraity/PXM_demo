'use client'

import { useTranslation } from 'react-i18next'

export default function EssentialOilHeroBanner() {
  const { t } = useTranslation()
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[#1E1E1E] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
          <p className="text-sm text-[#61CE70] font-poppins tracking-widest uppercase mb-4">
            {t('essentialOil.hero.customService')}
          </p>
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-[60px] font-semibold leading-[1.2] text-white">
            {t('essentialOil.hero.title')}
          </h1>
        </div>
      </section>
      {/* Breadcrumb */}
      <section className="w-full bg-white py-3 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <nav className="text-sm text-[#7A7A7A] font-poppins">
            <a href="/" className="hover:text-[#61CE70] transition-colors">{t('essentialOil.hero.breadcrumbHome')}</a>
            <span className="mx-2">/</span>
            <a href="/all-applications" className="hover:text-[#61CE70] transition-colors">{t('essentialOil.hero.breadcrumbAll')}</a>
            <span className="mx-2">/</span>
            <span className="text-[#1E1E1E]">{t('essentialOil.hero.breadcrumbCurrent')}</span>
          </nav>
        </div>
      </section>
    </>
  )
}
