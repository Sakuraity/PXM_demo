'use client'

import { useTranslation } from 'react-i18next'

const advantages = [
  { key: 'proven' },
  { key: 'advanced' },
  { key: 'endToEnd' },
  { key: 'quality' },
]

export default function ManufacturingAdvantages() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-[#f9f9f9] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((adv, index) => (
              <div key={adv.key} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#61CE70]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#61CE70] font-montserrat font-semibold text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-montserrat text-lg md:text-xl font-normal leading-[1.4] text-[#1E1E1E]">
                  {t(`lotionBottles.manufacturing.items.${adv.key}`)}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://www.jarsking.com/wp-content/uploads/2025/09/eco-friendly-personal-care-packaging-set.jpg"
            alt="eco-friendly personal care packaging set"
            className="w-full max-w-[500px] h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
