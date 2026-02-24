'use client'

import { useTranslation } from 'react-i18next'

const guides = [
  { key: 'premium', image: 'https://www.jarsking.com/wp-content/uploads/2023/06/Custom-Essential-Oil-Bottles-03-1024x683.jpg' },
  { key: 'environment', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/bamboo-essential-oil-bottle-e1730960862878.jpg' },
  { key: 'design', image: 'https://www.jarsking.com/wp-content/uploads/2023/05/Dropper-bottle-with-box.jpg' },
  { key: 'performance', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/dropper-bottle-new-design-e1730961822655-1024x768.jpg' },
]

export default function MarketableGuides() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-14">
          {t('essentialOil.marketableGuides.title')}
        </h2>

        <div className="space-y-16">
          {guides.map((guide, index) => (
            <div
              key={guide.key}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-10 md:gap-16`}
            >
              <div className="flex-1">
                <h3 className="font-montserrat text-2xl md:text-[28px] font-normal leading-[1.4] text-[#1E1E1E] mb-4">
                  {t(`essentialOil.marketableGuides.items.${guide.key}.title`)}
                </h3>
                <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed">
                  {t(`essentialOil.marketableGuides.items.${guide.key}.description`)}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src={guide.image}
                  alt={t(`essentialOil.marketableGuides.items.${guide.key}.title`)}
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
