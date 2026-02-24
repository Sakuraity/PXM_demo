'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const crafts = [
  { key: 'frosting', image: 'https://www.jarsking.com/wp-content/uploads/2024/09/2-1-1024x1024.jpg' },
  { key: 'silkscreen', image: 'https://www.jarsking.com/wp-content/uploads/2024/10/cj40000-1-1024x1024.jpg' },
  { key: 'metallization', image: 'https://www.jarsking.com/wp-content/uploads/2024/10/球形瓶03_1确定-1024x1024.jpg' },
  { key: 'lacquering', image: 'https://www.jarsking.com/wp-content/uploads/2024/09/7-1024x1024.jpg' },
  { key: 'hotStamping', image: 'https://www.jarsking.com/wp-content/uploads/2024/12/hot-stamping-cream-jar-1024x1024.webp' },
  { key: 'iridescence', image: 'https://www.jarsking.com/wp-content/uploads/2024/12/iridescent-jar.webp' },
]

export default function DesignCrafts() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-[#f9f9f9] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-14">
          {t('faceCreamJars.designCrafts.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {crafts.map((craft) => (
            <div key={craft.key} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img
                  src={craft.image}
                  alt={t(`faceCreamJars.designCrafts.items.${craft.key}.title`)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat text-xl md:text-2xl font-normal leading-[1.4] text-[#1E1E1E] mb-2">
                  {t(`faceCreamJars.designCrafts.items.${craft.key}.title`)}
                </h3>
                <p className="text-sm text-[#7A7A7A] font-poppins leading-relaxed">
                  {t(`faceCreamJars.designCrafts.items.${craft.key}.description`)}
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
            {t('faceCreamJars.designCrafts.button')}
          </Link>
        </div>
      </div>
    </section>
  )
}
