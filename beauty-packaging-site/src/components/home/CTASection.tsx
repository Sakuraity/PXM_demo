"use client"

import { useTranslation } from 'react-i18next'

export default function CTASection() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hiring Banner */}
      <section className="bg-[#1a1a2e] text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                <a href="/jarsking-talents/" className="hover:text-[#c8a97e] transition-colors">
                  {t('home.ctaSection.hiringTitle')}
                </a>
              </h2>
            </div>
            <div className="text-right">
              <a
                href="/contact-jarsking/"
                className="inline-block px-8 py-4 bg-[#c8a97e] text-white rounded hover:bg-[#b89a6f] transition-colors font-medium"
              >
                {t('home.ctaSection.hiringButton')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MOQ Info */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            {t('home.ctaSection.moqText')}
          </p>
        </div>
      </section>
    </>
  )
}
