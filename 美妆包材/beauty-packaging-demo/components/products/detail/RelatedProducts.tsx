'use client'

import { useTranslation } from 'react-i18next'
import ProductCard from '@/components/shared/ProductCard'
import type { Product } from '@/types'

interface Props {
  products: Product[]
}

export default function RelatedProducts({ products }: Props) {
  const { t } = useTranslation()

  if (products.length === 0) return null

  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-900 mb-8">{t('product.related')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
