'use client'

import { useTranslation } from 'react-i18next'
import ProductCard from '@/components/shared/ProductCard'
import type { Product } from '@/types'

interface Props {
  products: Product[]
  onClearFilters: () => void
}

export default function ProductGrid({ products, onClearFilters }: Props) {
  const { t } = useTranslation()

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-stone-500">
          {products.length === 1
            ? t('products.productCountSingle', { count: products.length })
            : t('products.productCount', { count: products.length })}
        </p>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-stone-400">
          <p className="text-lg">{t('products.search.noResults')}</p>
          <button onClick={onClearFilters} className="mt-4 text-sm text-[#c9a96e] hover:underline">
            {t('products.filters.clear')}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
