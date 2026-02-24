"use client"

import { useTranslation } from 'react-i18next'

export default function SustainableFuture() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">
            {t('home.sustainableFuture.title')}
          </h2>
          <p className="text-gray-600">{t('home.sustainableFuture.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {t('home.sustainableFuture.sections.materialSourcing.description')}
            </p>
            <a href="/all-materials/eco-friendly-cosmetic-packaging/" className="block relative h-[300px] rounded-lg overflow-hidden group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: 'url(https://www.jarsking.com/wp-content/uploads/2024/12/glass-1024x683.webp)' }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold">{t('home.sustainableFuture.sections.materialSourcing.title')}</h2>
              </div>
            </a>
          </div>

          <div>
            <a href="/collections/refillable-cosmetics-packaging/" className="block relative h-[300px] rounded-lg overflow-hidden group mb-4">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: 'url(https://www.jarsking.com/wp-content/uploads/2025/09/bamboo-cap-cosmetic-bottles-for-organic-brands-1024x1024.webp)' }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold">{t('home.sustainableFuture.sections.structureEngineering.title')}</h2>
              </div>
            </a>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('home.sustainableFuture.sections.structureEngineering.description')}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {t('home.sustainableFuture.sections.esg.description')}
            </p>
            <a href="/sustainability/" className="block relative h-[300px] rounded-lg overflow-hidden group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: 'url(https://www.jarsking.com/wp-content/uploads/2025/04/ESG-1024x1024.webp)' }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold">{t('home.sustainableFuture.sections.esg.title')}</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
