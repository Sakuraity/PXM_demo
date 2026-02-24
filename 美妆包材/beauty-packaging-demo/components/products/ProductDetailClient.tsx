'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ChevronRight, Cuboid, CheckCircle, ArrowRight, Package } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getRelatedProducts } from '@/lib/data'
import ProductCard from '@/components/shared/ProductCard'
import type { Product } from '@/types'

export default function ProductDetailClient({ product }: { product: Product }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'zh' | 'en'
  const [activeImage, setActiveImage] = useState(0)

  const relatedProducts = getRelatedProducts(product.relatedProducts).slice(0, 3)
  const minPrice = Math.min(...product.pricing.tiers.map((t) => t.unitPrice))

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-stone-100 bg-stone-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 text-sm text-stone-500">
          <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/products" className="hover:text-stone-900 transition-colors">{t('nav.products')}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-stone-900 font-medium truncate max-w-xs">{product.name[lang]}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section: images + info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden bg-stone-50 aspect-square mb-3">
              {product.images[activeImage] && (
                <img
                  src={product.images[activeImage].url}
                  alt={product.images[activeImage].alt[lang]}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      'w-16 h-16 rounded-xl overflow-hidden border-2 transition-colors',
                      i === activeImage ? 'border-[#c9a96e]' : 'border-stone-100 hover:border-stone-300'
                    )}
                  >
                    <img src={img.url} alt={img.alt[lang]} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.isNew && (
                <span className="px-2.5 py-1 text-xs font-semibold bg-[#c9a96e] text-white rounded-full">
                  {t('products.card.new')}
                </span>
              )}
              {product.isCustomizable && (
                <span className="px-2.5 py-1 text-xs font-medium border border-stone-300 text-stone-600 rounded-full">
                  {t('products.card.customizable')}
                </span>
              )}
            </div>

            <p className="text-xs text-stone-400 font-mono mb-1">{product.modelNumber}</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
              {product.name[lang]}
            </h1>
            <p className="text-stone-500 leading-relaxed mb-6">{product.description[lang]}</p>

            {/* Price */}
            <div className="bg-stone-50 rounded-2xl p-5 mb-6">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-stone-900">${minPrice.toFixed(2)}</span>
                <span className="text-sm text-stone-400">{t('product.perUnit')}</span>
                <span className="text-sm text-stone-400">· {t('product.moq')} {product.moq.toLocaleString()}</span>
              </div>
              {/* Price tiers */}
              <div className="grid grid-cols-3 gap-2">
                {product.pricing.tiers.map((tier, i) => (
                  <div key={i} className="text-center bg-white rounded-xl py-2 px-1 border border-stone-100">
                    <div className="text-xs text-stone-400 mb-0.5">
                      {tier.minQty.toLocaleString()}{tier.maxQty ? `–${tier.maxQty.toLocaleString()}` : '+'}
                    </div>
                    <div className="text-sm font-semibold text-stone-900">${tier.unitPrice.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead time & sample */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div className="flex items-start gap-2">
                <Package className="w-4 h-4 text-[#c9a96e] mt-0.5" />
                <div>
                  <p className="font-medium text-stone-700">{t('product.leadTime')}</p>
                  <p className="text-stone-500">{t('product.standard')}: {product.leadTime.standard}{t('product.days')}</p>
                  <p className="text-stone-500">{t('product.custom')}: {product.leadTime.custom}{t('product.days')}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#c9a96e] mt-0.5" />
                <div>
                  <p className="font-medium text-stone-700">{t('product.sampleFee')}</p>
                  <p className="text-stone-500">${product.sampleFee} USD</p>
                  {product.sampleFeeRefundable && (
                    <p className="text-xs text-green-600">{t('product.refundable')}</p>
                  )}
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors"
              >
                {t('product.getQuote')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 border border-stone-300 text-stone-700 font-medium rounded-xl hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
              >
                {t('product.requestSample')}
              </Link>
            </div>

            {/* 3D model link */}
            {product.has3DModel && product.model3DUrl && (
              <a
                href={product.model3DUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#c9a96e]/40 text-[#c9a96e] text-sm font-medium hover:bg-[#c9a96e]/5 transition-colors"
              >
                <Cuboid className="w-4 h-4" />
                {t('product.has3D')}
              </a>
            )}
          </div>
        </div>

        {/* Specs section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Dimensions & materials */}
          <div className="bg-stone-50 rounded-2xl p-8">
            <h2 className="text-lg font-bold text-stone-900 mb-6">{t('product.specs')}</h2>
            <dl className="space-y-3">
              {[
                { key: t('product.capacity'), value: `${product.specs.capacity}ml${product.specs.capacityOptions ? ` (${product.specs.capacityOptions.join('/')}ml)` : ''}` },
                { key: t('product.height'), value: `${product.specs.height}mm` },
                { key: t('product.diameter'), value: `${product.specs.diameter}mm` },
                { key: t('product.weight'), value: `${product.specs.weight}g` },
                { key: t('product.material'), value: product.specs.material },
                ...(product.specs.lidMaterial ? [{ key: t('product.lidMaterial'), value: product.specs.lidMaterial }] : []),
                { key: t('product.pantone'), value: product.specs.pantoneCustom ? t('product.yes') : t('product.no') },
              ].map(({ key, value }) => (
                <div key={key} className="flex justify-between text-sm border-b border-stone-200 pb-3 last:border-0">
                  <dt className="text-stone-500">{key}</dt>
                  <dd className="font-medium text-stone-900 text-right max-w-[55%]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Customization options */}
          <div className="space-y-6">
            {/* Finishes */}
            <div className="bg-stone-50 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-stone-700 mb-3">{t('product.finish')}</h3>
              <div className="flex flex-wrap gap-2">
                {product.specs.finish.map((f) => (
                  <span key={f} className="px-3 py-1 text-xs bg-white border border-stone-200 rounded-full text-stone-600">{f}</span>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="bg-stone-50 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-stone-700 mb-3">{t('product.color')}</h3>
              <div className="flex flex-wrap gap-2">
                {product.specs.color.map((c) => (
                  <span key={c} className="px-3 py-1 text-xs bg-white border border-stone-200 rounded-full text-stone-600">{c}</span>
                ))}
              </div>
            </div>

            {/* Printing */}
            <div className="bg-stone-50 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-stone-700 mb-3">{t('product.printing')}</h3>
              <div className="flex flex-wrap gap-2">
                {product.specs.printing.map((p) => (
                  <span key={p} className="px-3 py-1 text-xs bg-white border border-stone-200 rounded-full text-stone-600">{p}</span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            {product.specs.certification && (
              <div className="bg-stone-50 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-stone-700 mb-3">{t('product.certification')}</h3>
                <div className="flex flex-wrap gap-2">
                  {product.specs.certification.map((c) => (
                    <span key={c} className="px-3 py-1 text-xs bg-[#c9a96e]/10 border border-[#c9a96e]/30 rounded-full text-[#c9a96e] font-medium">{c}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="mb-16">
            <h3 className="text-sm font-semibold text-stone-500 mb-3">{t('product.tags')}</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs bg-stone-100 text-stone-600 rounded-full">#{tag}</span>
              ))}
            </div>
          </div>
        )}

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-8">{t('product.related')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
