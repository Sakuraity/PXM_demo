'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Cpu, Droplets, Package, Wrench, ArrowRight } from 'lucide-react'

const categoryConfig = [
  {
    key: 'devices',
    href: '/products?category=device',
    icon: Cpu,
    gradient: 'from-[#6366f1] to-[#818cf8]',
    bg: 'bg-[#6366f1]/10',
    border: 'border-[#6366f1]/20 hover:border-[#6366f1]/50',
  },
  {
    key: 'pods',
    href: '/products?category=pod',
    icon: Droplets,
    gradient: 'from-[#06b6d4] to-[#22d3ee]',
    bg: 'bg-[#06b6d4]/10',
    border: 'border-[#06b6d4]/20 hover:border-[#06b6d4]/50',
  },
  {
    key: 'kits',
    href: '/products?category=kit',
    icon: Package,
    gradient: 'from-[#8b5cf6] to-[#a78bfa]',
    bg: 'bg-[#8b5cf6]/10',
    border: 'border-[#8b5cf6]/20 hover:border-[#8b5cf6]/50',
  },
  {
    key: 'accessories',
    href: '/products?category=accessory',
    icon: Wrench,
    gradient: 'from-[#f59e0b] to-[#fbbf24]',
    bg: 'bg-[#f59e0b]/10',
    border: 'border-[#f59e0b]/20 hover:border-[#f59e0b]/50',
  },
]

export default function CategoriesSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">{t('categories.title')}</h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">{t('categories.subtitle')}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryConfig.map(({ key, href, icon: Icon, gradient, bg, border }) => (
            <Link
              key={key}
              href={href}
              className={`group relative flex flex-col p-6 bg-[#1e293b] border ${border} rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-5`}>
                <div className={`w-6 h-6 bg-gradient-to-br ${gradient} rounded`} style={{ WebkitMaskImage: 'none' }}>
                  <Icon className={`w-6 h-6 bg-gradient-to-br ${gradient} [background:none]`} style={{ display: 'none' }} />
                </div>
                <Icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {t(`categories.${key}`)}
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed flex-1">
                {t(`categories.${key}Desc`)}
              </p>

              <div className="flex items-center gap-1 mt-5 text-sm font-medium text-[#6366f1] group-hover:gap-2 transition-all">
                {t('categories.viewAll')}
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
