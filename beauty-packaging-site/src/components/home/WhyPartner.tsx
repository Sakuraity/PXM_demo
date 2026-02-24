'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const accordionItems1 = [
  { key: 'globalSupplyNetwork', img: 'https://www.jarsking.com/wp-content/uploads/2024/11/Hot-Stamping-Process-1.png' },
  { key: 'rd', img: 'https://www.jarsking.com/wp-content/uploads/2024/12/Jarsking-designers.webp' },
  { key: 'customDesignExpertise', img: 'https://www.jarsking.com/wp-content/uploads/2024/11/Jarsking-designer-scaled.jpg' },
]

const accordionItems2 = [
  { key: 'manufacturingExcellence', img: 'https://www.jarsking.com/wp-content/uploads/2023/07/Cosmetic-Packaging-Factory-06.jpg' },
  { key: 'strictQualityControl', img: 'https://www.jarsking.com/wp-content/uploads/2024/11/100-grid-test-scaled.jpg' },
  { key: 'fastTurnaroundTimes', img: 'https://www.jarsking.com/wp-content/uploads/2024/12/packing.png' },
]

function ImageAccordion({ items }: { items: { key: string; img: string }[] }) {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)

  return (
    <div className="flex h-[350px] rounded-lg overflow-hidden mb-6">
      {items.map((item, i) => (
        <div
          key={i}
          className={`relative transition-all duration-500 cursor-pointer overflow-hidden ${active === i ? 'flex-[3]' : 'flex-1'}`}
          onMouseEnter={() => setActive(i)}
          style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors" />
          <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-opacity duration-300 ${active === i ? 'opacity-100' : 'opacity-70'}`}>
            <h2 className="text-xl font-bold mb-2">{t(`home.whyPartner.accordion.${item.key}.title`)}</h2>
            {active === i && <p className="text-sm leading-relaxed line-clamp-3">{t(`home.whyPartner.accordion.${item.key}.desc`)}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function WhyPartner() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">
            {t('home.whyPartner.title')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('home.whyPartner.subtitle')}
          </p>
        </div>
        <ImageAccordion items={accordionItems1} />
        <ImageAccordion items={accordionItems2} />
      </div>
    </section>
  )
}
