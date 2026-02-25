'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ArrowLeft } from 'lucide-react'
import ProductCard from '@/components/shared/ProductCard'
import type { Category, Product } from '@/types'

interface Props {
  category: Category
  products: Product[]
  dimension: 'application' | 'material'
}

export default function CategoryBrowseClient({ category, products, dimension }: Props) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'zh' | 'en'

  const backHref = '/products'
  const backLabel = t('products.title')
  const productCountLabel = products.length === 1
    ? t('products.productCountSingle', { count: products.length })
    : t('products.productCount', { count: products.length })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero header */}
      <div
        className="relative bg-stone-900 text-white py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${category.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-stone-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>
          <p className="text-[#c9a96e] text-sm font-medium uppercase tracking-widest mb-2">
            {dimension === 'application'
              ? t('products.filters.application')
              : t('products.filters.material')}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{category.name[lang]}</h1>
          <p className="text-stone-300 text-lg max-w-2xl">{category.description[lang]}</p>
          <p className="mt-4 text-stone-400 text-sm">{productCountLabel}</p>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-stone-400">
            <p className="text-lg">
              {t('products.search.noResults')}
            </p>
            <Link href="/products" className="mt-4 text-sm text-[#c9a96e] hover:underline">
              {backLabel}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
