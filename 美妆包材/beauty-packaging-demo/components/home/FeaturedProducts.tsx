'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/shared/ProductCard'
import { getFeaturedProducts } from '@/lib/data'

const featured = getFeaturedProducts()

export default function FeaturedProducts() {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
              {t('home.featured.title')}
            </h2>
            <p className="text-stone-500 text-lg">
              {t('home.featured.subtitle')}
            </p>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-[#c9a96e] hover:gap-3 transition-all"
          >
            {t('home.featured.viewAll')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#c9a96e]"
          >
            {t('home.featured.viewAll')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
