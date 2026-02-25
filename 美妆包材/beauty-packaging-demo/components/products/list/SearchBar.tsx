'use client'

import { Search, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface Props {
  value: string
  onChange: (v: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  const { t } = useTranslation()

  return (
    <div className="mb-8">
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t('products.search.placeholder')}
          className="w-full pl-10 pr-10 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/20 focus:border-[#c9a96e] transition-colors"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  )
}
