"use client"

import { useTranslation } from 'react-i18next'

const stats = [
  { prefix: '', value: '30,000', suffix: '+', titleKey: 'allApplications.stats.readyMoldsInStock' },
  { prefix: '', value: '1,500', suffix: '+', titleKey: 'allApplications.stats.brandsServedGlobally' },
  { prefix: '', value: '3', suffixKey: 'allApplications.stats.sampleProductionSuffix', titleKey: 'allApplications.stats.sampleProduction' },
  { prefix: '', value: '15', suffixKey: 'allApplications.stats.bottlesMonthCapacitySuffix', titleKey: 'allApplications.stats.bottlesMonthCapacity' },
  { prefix: 'ISO', value: '9001', suffix: '', titleKey: 'allApplications.stats.certifiedQuality' },
]

export default function StatsCounter() {
  const { t } = useTranslation()

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center text-[69px] font-semibold leading-none text-primary">
                {stat.prefix && <span className="text-right flex-grow whitespace-pre-wrap">{stat.prefix}</span>}
                <span>{stat.value}</span>
                {(stat.suffix || stat.suffixKey) && (
                  <span className="text-left flex-grow whitespace-pre-wrap">
                    {stat.suffixKey ? t(stat.suffixKey) : stat.suffix}
                  </span>
                )}
              </div>
              <div className="text-center text-[19px] font-normal leading-[2.5] text-primary">
                {t(stat.titleKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
