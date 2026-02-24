"use client"

import { useTranslation } from 'react-i18next'

const reasons = [
  {
    titleKey: 'allApplications.whyMatters.reasons.formulationCompatibility.title',
    descriptionKey: 'allApplications.whyMatters.reasons.formulationCompatibility.description',
  },
  {
    titleKey: 'allApplications.whyMatters.reasons.applicationMethod.title',
    descriptionKey: 'allApplications.whyMatters.reasons.applicationMethod.description',
  },
  {
    titleKey: 'allApplications.whyMatters.reasons.brandDifferentiation.title',
    descriptionKey: 'allApplications.whyMatters.reasons.brandDifferentiation.description',
  },
  {
    titleKey: 'allApplications.whyMatters.reasons.regulatoryCompliance.title',
    descriptionKey: 'allApplications.whyMatters.reasons.regulatoryCompliance.description',
  },
]

export default function WhyMatters() {
  const { t } = useTranslation()

  return (
    <section className="relative w-full bg-[#f5f0ed]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-1/2 px-8 lg:px-16 py-16 flex flex-col justify-center">
            <div className="w-full h-px bg-[#B7B7B7] mb-8"></div>
            <div className="w-px h-12 bg-[#B7B7B7] mb-8"></div>
            <h2 className="text-[40px] font-medium leading-[1.2em] text-primary mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {t('allApplications.whyMatters.title')}
            </h2>
            <div className="w-full h-px bg-[#B7B7B7] mb-6"></div>
            <p className="text-text text-base leading-relaxed mb-8">
              {t('allApplications.whyMatters.description')}
            </p>
            <div className="text-right mb-8">
              <a href="/contact-jarsking/"
                className="inline-block bg-accent text-white text-sm font-medium px-6 py-2 rounded hover:scale-105 transition-transform duration-300"
                style={{ fontFamily: "'Roboto', sans-serif" }}>
                {t('allApplications.whyMatters.needHelp')}
              </a>
            </div>
            <div className="w-px h-12 bg-[#B7B7B7] mb-4"></div>
            <div className="w-full h-px bg-[#B7B7B7]"></div>
          </div>

          {/* Right Column - 2x2 Grid */}
          <div className="lg:w-1/2 p-4">
            <div className="grid grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="relative bg-[#e8e0da] rounded-sm p-8 min-h-[280px] flex flex-col justify-start overflow-hidden group">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-[28px] font-normal leading-[1.4em] text-primary mb-4 whitespace-pre-line"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {t(reason.titleKey)}
                    </h3>
                    <p className="text-text text-sm leading-relaxed">
                      {t(reason.descriptionKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
