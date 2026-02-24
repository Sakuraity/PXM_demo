'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const crafts = [
  { key: 'frosting', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/frosting-design-e1730884894274.jpg' },
  { key: 'silkscreen', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/essential-oil-bottle-silkscreen-printing-e1730884335100.jpg' },
  { key: 'metallization', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/electroplating-bottle-e1730693054715.jpg' },
  { key: 'lacquering', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/color-coating-bottle-e1730703419252.jpg' },
  { key: 'hotStamping', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/hot-stamping-logo-e1730704252612-1024x768.jpg' },
  { key: 'tinting', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/amber-essential-oil-bottle-e1730885367193.jpg' },
]

export default function EssentialOilDesignCrafts() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-4">
          {t('essentialOil.designCrafts.title')}
        </h2>
        <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed text-center max-w-4xl mx-auto mb-12">
          {t('essentialOil.designCrafts.description')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {crafts.map((craft) => (
            <div key={craft.key} className="bg-[#f9f9f9] rounded-xl overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={craft.image}
                  alt={t(`essentialOil.designCrafts.items.${craft.key}.title`)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat text-xl md:text-2xl font-normal leading-[1.4] text-[#1E1E1E] mb-2">
                  {t(`essentialOil.designCrafts.items.${craft.key}.title`)}
                </h3>
                <p className="text-sm text-[#7A7A7A] font-poppins leading-relaxed">
                  {t(`essentialOil.designCrafts.items.${craft.key}.description`)}
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
            {t('essentialOil.designCrafts.button')}
          </Link>
        </div>
      </div>
    </section>
  )
}
