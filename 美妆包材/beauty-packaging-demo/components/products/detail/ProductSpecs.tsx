'use client'

import { useTranslation } from 'react-i18next'
import type { Product } from '@/types'

interface Props {
  specs: Product['specs']
}

export default function ProductSpecs({ specs }: Props) {
  const { t } = useTranslation()

  const tv = (category: string, value: string): string =>
    t(`product.values.${category}.${value}`, { defaultValue: value })

  const specRows = [
    { key: t('product.capacity'), value: `${specs.capacity}ml${specs.capacityOptions ? ` (${specs.capacityOptions.join('/')}ml)` : ''}` },
    { key: t('product.height'), value: `${specs.height}mm` },
    { key: t('product.diameter'), value: `${specs.diameter}mm` },
    { key: t('product.weight'), value: `${specs.weight}g` },
    { key: t('product.material'), value: tv('material', specs.material) },
    ...(specs.lidMaterial ? [{ key: t('product.lidMaterial'), value: tv('lidMaterial', specs.lidMaterial) }] : []),
    { key: t('product.pantone'), value: specs.pantoneCustom ? t('product.yes') : t('product.no') },
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-16">
      {/* Dimensions & materials */}
      <div className="bg-stone-50 rounded-2xl p-8">
        <h2 className="text-lg font-bold text-stone-900 mb-6">{t('product.specs')}</h2>
        <dl className="space-y-3">
          {specRows.map(({ key, value }) => (
            <div key={key} className="flex justify-between text-sm border-b border-stone-200 pb-3 last:border-0">
              <dt className="text-stone-500">{key}</dt>
              <dd className="font-medium text-stone-900 text-right max-w-[55%]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Customization options */}
      <div className="space-y-6">
        <div className="bg-stone-50 rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-stone-700 mb-3">{t('product.finish')}</h3>
          <div className="flex flex-wrap gap-2">
            {specs.finish.map((f) => (
              <span key={f} className="px-3 py-1 text-xs bg-white border border-stone-200 rounded-full text-stone-600">{tv('finish', f)}</span>
            ))}
          </div>
        </div>

        <div className="bg-stone-50 rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-stone-700 mb-3">{t('product.color')}</h3>
          <div className="flex flex-wrap gap-2">
            {specs.color.map((c) => (
              <span key={c} className="px-3 py-1 text-xs bg-white border border-stone-200 rounded-full text-stone-600">{tv('color', c)}</span>
            ))}
          </div>
        </div>

        <div className="bg-stone-50 rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-stone-700 mb-3">{t('product.printing')}</h3>
          <div className="flex flex-wrap gap-2">
            {specs.printing.map((p) => (
              <span key={p} className="px-3 py-1 text-xs bg-white border border-stone-200 rounded-full text-stone-600">{tv('printing', p)}</span>
            ))}
          </div>
        </div>

        {specs.certification && (
          <div className="bg-stone-50 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-stone-700 mb-3">{t('product.certification')}</h3>
            <div className="flex flex-wrap gap-2">
              {specs.certification.map((c) => (
                <span key={c} className="px-3 py-1 text-xs bg-[#c9a96e]/10 border border-[#c9a96e]/30 rounded-full text-[#c9a96e] font-medium">{tv('certification', c)}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
