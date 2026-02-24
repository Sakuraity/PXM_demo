'use client'

import { useTranslation } from 'react-i18next'
import { 
  Palette, 
  Calendar, 
  Zap, 
  CheckCircle, 
  Box, 
  Warehouse, 
  Send, 
  Phone, 
  Clock, 
  Leaf 
} from 'lucide-react'

const services = [
  {
    icon: Palette,
    key: 'freeDesign'
  },
  {
    icon: Calendar,
    key: 'prototypeMolding'
  },
  {
    icon: Zap,
    key: 'fastDesign'
  },
  {
    icon: CheckCircle,
    key: 'bulkOrder'
  },
  {
    icon: Box,
    key: 'rendering'
  },
  {
    icon: Warehouse,
    key: 'readyMolds'
  },
  {
    icon: Send,
    key: 'sampleProduction'
  },
  {
    icon: Phone,
    key: 'afterSales'
  },
  {
    icon: Clock,
    key: 'urgentOrder'
  },
  {
    icon: Leaf,
    key: 'ecoFriendly'
  }
]

export default function ServiceAdvantages() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {t(`home.serviceAdvantages.${service.key}.title`, { defaultValue: '' })}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {t(`home.serviceAdvantages.${service.key}.desc`, { defaultValue: '' })}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
