'use client'

import { useTranslation } from 'react-i18next'

const steps = [
  { key: 'concept', image: 'https://www.jarsking.com/wp-content/uploads/2023/02/Mask-group-29.jpg', href: '/concept/' },
  { key: 'molding', image: 'https://www.jarsking.com/wp-content/uploads/2023/02/Mask-group-30.jpg', href: '/in-house-bottle-molding/' },
  { key: 'manufacturing', image: 'https://www.jarsking.com/wp-content/uploads/2023/02/Mask-group-7.jpg', href: '/turnkey-manufacturing/' },
]

export default function FullCycleSolution() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-14">
          {t('shared.fullCycleSolution.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <a key={step.key} href={step.href} className="group block">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={step.image}
                  alt={t(`shared.fullCycleSolution.steps.${step.key}`)}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-montserrat text-xl font-normal leading-[1.5] text-[#1E1E1E] mt-4 text-center">
                {t(`shared.fullCycleSolution.steps.${step.key}`)}
              </h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
