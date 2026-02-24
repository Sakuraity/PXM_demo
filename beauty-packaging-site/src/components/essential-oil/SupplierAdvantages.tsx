'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const advantages = [
  { key: 'materials', image: 'https://www.jarsking.com/wp-content/uploads/2023/05/30ml-Essential-Oil-Bottle.jpg' },
  { key: 'caps', image: 'https://www.jarsking.com/wp-content/uploads/2023/05/40.jpg' },
  { key: 'precision', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/essential-oil-bottle-caps-720x1024.jpg' },
  { key: 'harmony', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/essential-oil-bottle-design-e1730883497389.jpg' },
]

export default function SupplierAdvantages() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-14">
          {t('essentialOil.supplierAdvantages.title')}
        </h2>

        <div className="space-y-16">
          {advantages.map((item, index) => (
            <div
              key={item.key}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-10 md:gap-16`}
            >
              <div className="flex-1">
                <h3 className="font-montserrat text-2xl md:text-[28px] font-normal leading-[1.4] text-[#1E1E1E] mb-4">
                  {t(`essentialOil.supplierAdvantages.items.${item.key}.title`)}
                </h3>
                <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed mb-6">
                  {t(`essentialOil.supplierAdvantages.items.${item.key}.description`)}
                </p>
                <Link
                  href="/contact-jarsking/"
                  className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
                >
                  {t(`essentialOil.supplierAdvantages.items.${item.key}.button`)}
                </Link>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src={item.image}
                  alt={t(`essentialOil.supplierAdvantages.items.${item.key}.title`)}
                  className="w-full max-w-[450px] h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
