'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { SlidersHorizontal, X } from 'lucide-react'
import ProductCard from '@/components/shared/ProductCard'
import { products, getCategoriesByDimension } from '@/lib/data'
import { cn } from '@/lib/utils'

const appCategories = getCategoriesByDimension('application')
const matCategories = getCategoriesByDimension('material')
const typeCategories = getCategoriesByDimension('type')

export default function ProductsClient() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'zh' | 'en'
  const searchParams = useSearchParams()

  const [application, setApplication] = useState(searchParams.get('application') ?? '')
  const [material, setMaterial] = useState(searchParams.get('material') ?? '')
  const [type, setType] = useState(searchParams.get('type') ?? '')
  const [onlyNew, setOnlyNew] = useState(false)

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (p.status !== 'published') return false
      if (application && p.categories.application !== application) return false
      if (material && p.categories.material !== material) return false
      if (type && p.categories.type !== type) return false
      if (onlyNew && !p.isNew) return false
      return true
    })
  }, [application, material, type, onlyNew])

  const hasFilters = application || material || type || onlyNew

  function clearFilters() {
    setApplication('')
    setMaterial('')
    setType('')
    setOnlyNew(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-stone-50 border-b border-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-2">
            {t('products.title')}
          </h1>
          <p className="text-stone-500">{t('products.subtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-stone-700">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </h2>
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-[#c9a96e] hover:underline flex items-center gap-1"
                  >
                    <X className="w-3 h-3" />
                    {t('products.filters.clear')}
                  </button>
                )}
              </div>

              {/* Application filter */}
              <FilterGroup
                label={t('products.filters.application')}
                items={appCategories.map((c) => ({ id: c.id, label: c.name[lang] }))}
                value={application}
                onChange={setApplication}
              />

              {/* Material filter */}
              <FilterGroup
                label={t('products.filters.material')}
                items={matCategories.map((c) => ({ id: c.id, label: c.name[lang] }))}
                value={material}
                onChange={setMaterial}
              />

              {/* Type filter */}
              <FilterGroup
                label={t('products.filters.type')}
                items={typeCategories.map((c) => ({ id: c.id, label: c.name[lang] }))}
                value={type}
                onChange={setType}
              />

              {/* New arrivals toggle */}
              <div className="pt-4 border-t border-stone-100">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={onlyNew}
                    onChange={(e) => setOnlyNew(e.target.checked)}
                    className="w-4 h-4 rounded border-stone-300 text-[#c9a96e] accent-[#c9a96e]"
                  />
                  <span className="text-sm text-stone-700">{t('products.filters.new')}</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-stone-500">
                {filtered.length} products
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-stone-400">
                <p className="text-lg">{t('products.empty')}</p>
                <button onClick={clearFilters} className="mt-4 text-sm text-[#c9a96e] hover:underline">
                  {t('products.filters.clear')}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterGroup({
  label,
  items,
  value,
  onChange,
}: {
  label: string
  items: { id: string; label: string }[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">{label}</p>
      <div className="space-y-1">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onChange(value === item.id ? '' : item.id)}
            className={cn(
              'w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors',
              value === item.id
                ? 'bg-stone-900 text-white'
                : 'text-stone-600 hover:bg-stone-100'
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
