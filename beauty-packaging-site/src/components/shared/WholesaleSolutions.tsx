'use client'

import { useTranslation } from 'react-i18next'

const images = [
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2024/04/各种不同的模具.webp',
    alt: 'cosmetic packaging mold',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2024/04/多条产线并排.webp',
    alt: 'cosmetic packaging production line',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2024/04/冷却工序.webp',
    alt: 'cosmetic bottles',
  },
]

export default function WholesaleSolutions() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-8">
          {t('shared.wholesaleSolutions.title')}
        </h2>
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed mb-4">
            {t('shared.wholesaleSolutions.description1')}
          </p>
          <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed">
            {t('shared.wholesaleSolutions.description2')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
