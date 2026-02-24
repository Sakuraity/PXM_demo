"use client"

import { useTranslation } from 'react-i18next'

const categories = [
  { key: 'personalCare', href: '/personal-care-packaging', img: 'https://www.jarsking.com/wp-content/uploads/2025/07/sustainable-PET-packaging-for-hair-oil.webp' },
  { key: 'cosmetics', href: '/all-applications/skincare-packaging', img: 'https://www.jarsking.com/wp-content/uploads/2025/02/custom-cosmetic-containers.webp' },
  { key: 'makeup', href: '/all-applications/makeup-packaging', img: 'https://www.jarsking.com/wp-content/uploads/2025/03/Private-label-lip-gloss-packaging.webp' },
  { key: 'perfume', href: '/perfume-packaging', img: 'https://www.jarsking.com/wp-content/uploads/2025/08/10ml-50ml-100ml-perfume-bottle-packaging.webp' },
  { key: 'pharmaceutical', href: '/cannabis-packaging', img: 'https://www.jarsking.com/wp-content/uploads/2024/11/Luxury-Cannabis-Packaging.jpg' },
  { key: 'essentialOil', href: '/all-applications/essential-oil-bottles', img: 'https://www.jarsking.com/wp-content/uploads/2025/09/Essential-oil-bottle-packaging.webp' },
]

export default function PackagingSolutions() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">
            {t('home.packagingSolutions.title')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('home.packagingSolutions.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {categories.map((cat) => (
            <a key={cat.key} href={cat.href} className="group block">
              <div className="overflow-hidden rounded-lg mb-3">
                <img
                  src={cat.img}
                  alt={t(`home.packagingSolutions.categories.${cat.key}.name`)}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a2e] mb-1">{t(`home.packagingSolutions.categories.${cat.key}.name`)}</h3>
              <p className="text-sm text-gray-500">{t(`home.packagingSolutions.categories.${cat.key}.desc`)}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
