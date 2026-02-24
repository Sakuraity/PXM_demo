'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const bottleTypes = [
  { key: 'dropper', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/dropper-bottle-e1730958554179-1024x768.jpg' },
  { key: 'spray', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/spray-bottles-e1730958985134.jpg' },
  { key: 'roller', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/roller-bottle-e1730959139662-1024x768.jpg' },
  { key: 'airless', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/airless-bottle-e1730959083802-1024x768.jpg' },
  { key: 'cannabis', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/child-resistant-dropper-bottle-e1730961993793-1024x768.jpg' },
  { key: 'amber', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/amber-essential-oil-bottle-e1730885367193.jpg' },
]

export default function BottleTypes() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-[#f9f9f9] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-4">
          {t('essentialOil.bottleTypes.title')}
        </h2>
        <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed text-center max-w-4xl mx-auto mb-12">
          {t('essentialOil.bottleTypes.description')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bottleTypes.map((bottle) => (
            <div key={bottle.key} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={bottle.image}
                  alt={t(`essentialOil.bottleTypes.items.${bottle.key}.title`)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat text-xl md:text-2xl font-normal leading-[1.4] text-[#1E1E1E] mb-2">
                  {t(`essentialOil.bottleTypes.items.${bottle.key}.title`)}
                </h3>
                <p className="text-sm text-[#7A7A7A] font-poppins leading-relaxed">
                  {t(`essentialOil.bottleTypes.items.${bottle.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact-jarsking/"
            className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
          >
            {t('essentialOil.bottleTypes.button')}
          </Link>
        </div>
      </div>
    </section>
  )
}
