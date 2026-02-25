'use client'

import { useTranslation } from 'react-i18next'

interface Props {
  tags: string[]
}

export default function ProductTags({ tags }: Props) {
  const { t } = useTranslation()

  if (tags.length === 0) return null

  return (
    <div className="mb-16">
      <h3 className="text-sm font-semibold text-stone-500 mb-3">{t('product.tags')}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs bg-stone-100 text-stone-600 rounded-full">#{tag}</span>
        ))}
      </div>
    </div>
  )
}
