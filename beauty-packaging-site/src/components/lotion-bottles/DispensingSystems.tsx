'use client'

import { useTranslation } from 'react-i18next'

const systems = [
  { key: 'lotionPumps', image: 'https://www.jarsking.com/wp-content/uploads/2023/04/Lotion-Pumps.jpg' },
  { key: 'airlessPumps', image: 'https://www.jarsking.com/wp-content/uploads/2025/05/airless-lotion-bottle-components.webp' },
  { key: 'discTop', image: 'https://www.jarsking.com/wp-content/uploads/2025/06/disc-top-caps.webp' },
  { key: 'flipTop', image: 'https://www.jarsking.com/wp-content/uploads/2025/06/flip-top-cap.webp' },
]

export default function DispensingSystems() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-4">
          {t('lotionBottles.dispensing.title')}
        </h2>
        <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed text-center max-w-4xl mx-auto mb-12">
          {t('lotionBottles.dispensing.description')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {systems.map((system) => (
            <div
              key={system.key}
              className="relative aspect-[3/4] rounded-xl overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${system.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="font-montserrat text-xl md:text-2xl font-medium leading-[1.2] text-white">
                  {t(`lotionBottles.dispensing.items.${system.key}`)}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
