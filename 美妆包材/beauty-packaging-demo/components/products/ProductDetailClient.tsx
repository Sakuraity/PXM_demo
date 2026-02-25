'use client'

import { useTranslation } from 'react-i18next'
import { getRelatedProducts } from '@/lib/data'
import ProductBreadcrumb from '@/components/products/detail/ProductBreadcrumb'
import ImageGallery from '@/components/products/detail/ImageGallery'
import ProductInfo from '@/components/products/detail/ProductInfo'
import ProductSpecs from '@/components/products/detail/ProductSpecs'
import ProductTags from '@/components/products/detail/ProductTags'
import RelatedProducts from '@/components/products/detail/RelatedProducts'
import type { Product } from '@/types'

export default function ProductDetailClient({ product }: { product: Product }) {
  const { i18n } = useTranslation()
  const lang = i18n.language as 'zh' | 'en'

  const relatedProducts = getRelatedProducts(product.relatedProducts).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <ProductBreadcrumb product={product} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ImageGallery images={product.images} lang={lang} />
          <ProductInfo product={product} />
        </div>

        <ProductSpecs specs={product.specs} />
        <ProductTags tags={product.tags} />
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  )
}
