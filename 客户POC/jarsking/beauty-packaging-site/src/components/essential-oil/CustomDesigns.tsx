'use client'

import { useTranslation } from 'react-i18next'

const designs = [
  { key: 'diverse', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/Jarsking-designer-1024x683.jpg' },
  { key: 'creative', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/Jarsking-design-team-1024x683.jpg' },
  { key: 'rapid', image: 'https://www.jarsking.com/wp-content/uploads/2024/11/Jarsking-design-1024x683.jpg' },
]

export default function CustomDesigns() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-[#f5f5f0] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-14">
          {t('essentialOil.customDesigns.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designs.map((design) => (
            <div key={design.key} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={design.image}
                  alt={t(`essentialOil.customDesigns.items.${design.key}.title`)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat text-xl md:text-2xl font-normal leading-[1.4] text-[#1E1E1E] mb-2">
                  {t(`essentialOil.customDesigns.items.${design.key}.title`)}
                </h3>
                <p className="text-sm text-[#7A7A7A] font-poppins leading-relaxed">
                  {t(`essentialOil.customDesigns.items.${design.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
