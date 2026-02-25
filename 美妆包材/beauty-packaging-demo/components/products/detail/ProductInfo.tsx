'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Cuboid, CheckCircle, ArrowRight, Package } from 'lucide-react'
import type { Product } from '@/types'

interface Props {
  product: Product
}

export default function ProductInfo({ product }: Props) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'zh' | 'en'

  return (
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

      {/* MOQ Info */}
      <div className="bg-stone-50 rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-stone-900">{t('product.moq')} {product.moq.toLocaleString()}</span>
        </div>
        <p className="text-sm text-stone-500">{t('product.contactForPricing')}</p>
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
            <p className="text-stone-500">{t('product.contactForSample')}</p>
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
  )
}
