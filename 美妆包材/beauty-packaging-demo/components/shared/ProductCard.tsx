'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Cuboid } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'zh' | 'en'

  const heroImage = product.images.find((img) => img.type === 'hero') ?? product.images[0]

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        'group block bg-white rounded-2xl border border-stone-100 overflow-hidden hover:border-[#c9a96e]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1',
        className
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-stone-50 aspect-square">
        {heroImage && (
          <img
            src={heroImage.url}
            alt={heroImage.alt[lang]}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="px-2 py-0.5 text-xs font-semibold bg-[#c9a96e] text-white rounded-full">
              {t('products.card.new')}
            </span>
          )}
          {product.isCustomizable && (
            <span className="px-2 py-0.5 text-xs font-medium bg-white/90 text-stone-700 rounded-full border border-stone-200">
              {t('products.card.customizable')}
            </span>
          )}
        </div>
        {/* 3D badge */}
        {product.has3DModel && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-stone-900/80 text-white text-xs rounded-lg backdrop-blur-sm">
            <Cuboid className="w-3 h-3" />
            3D
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-stone-400 font-mono mb-1">{product.modelNumber}</p>
        <h3 className="font-semibold text-stone-900 text-sm leading-snug mb-1 line-clamp-2">
          {product.name[lang]}
        </h3>
        <p className="text-xs text-stone-500 line-clamp-2 mb-4">
          {product.tagline[lang]}
        </p>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-stone-400">{t('products.card.moq')} {product.moq.toLocaleString()}</p>
          </div>
          <span className="flex items-center gap-1 text-xs font-medium text-[#c9a96e] group-hover:gap-2 transition-all">
            {t('products.card.viewDetails')} <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
