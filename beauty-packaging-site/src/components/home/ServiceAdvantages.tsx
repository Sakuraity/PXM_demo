'use client'

import { Palette, Calendar, Zap, CheckCircle, Box, Warehouse, Send, Phone, Clock, Leaf } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const services = [
  { icon: Palette, titleKey: 'serviceAdvantages.freeDesign.title', descKey: 'serviceAdvantages.freeDesign.desc' },
  { icon: Zap, titleKey: 'serviceAdvantages.fastDesign.title', descKey: 'serviceAdvantages.fastDesign.desc' },
  { icon: Box, titleKey: 'serviceAdvantages.rendering.title', descKey: 'serviceAdvantages.rendering.desc' },
  { icon: Send, titleKey: 'serviceAdvantages.sampleProduction.title', descKey: 'serviceAdvantages.sampleProduction.desc' },
  { icon: Clock, titleKey: 'serviceAdvantages.urgentOrder.title', descKey: 'serviceAdvantages.urgentOrder.desc' },
  { icon: Calendar, titleKey: 'serviceAdvantages.prototypeMolding.title', descKey: 'serviceAdvantages.prototypeMolding.desc' },
  { icon: CheckCircle, titleKey: 'serviceAdvantages.bulkOrder.title', descKey: 'serviceAdvantages.bulkOrder.desc' },
  { icon: Warehouse, titleKey: 'serviceAdvantages.readyMolds.title', descKey: 'serviceAdvantages.readyMolds.desc' },
  { icon: Phone, titleKey: 'serviceAdvantages.afterSales.title', descKey: 'serviceAdvantages.afterSales.desc' },
  { icon: Leaf, titleKey: 'serviceAdvantages.ecoFriendly.title', descKey: 'serviceAdvantages.ecoFriendly.desc' },
]

export default function ServiceAdvantages() {
  const { t } = useTranslation()
  
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="text-center group">
                <div className="w-14 h-14 bg-[#c8a97e] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-sm font-bold text-[#1a1a2e] mb-2 leading-tight">{t(`home.${s.titleKey}`)}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{t(`home.${s.descKey}`)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
