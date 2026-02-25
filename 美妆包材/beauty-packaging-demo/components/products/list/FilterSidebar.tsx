'use client'

import { SlidersHorizontal, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import FilterGroup from './FilterGroup'
import { getCategoriesByDimension } from '@/lib/data'

const appCategories = getCategoriesByDimension('application')
const matCategories = getCategoriesByDimension('material')
const typeCategories = getCategoriesByDimension('type')

interface Props {
  application: string
  material: string
  type: string
  onlyNew: boolean
  hasFilters: boolean
  lang: 'zh' | 'en'
  onApplicationChange: (v: string) => void
  onMaterialChange: (v: string) => void
  onTypeChange: (v: string) => void
  onOnlyNewChange: (v: boolean) => void
  onClearFilters: () => void
}

export default function FilterSidebar({
  application,
  material,
  type,
  onlyNew,
  hasFilters,
  lang,
  onApplicationChange,
  onMaterialChange,
  onTypeChange,
  onOnlyNewChange,
  onClearFilters,
}: Props) {
  const { t } = useTranslation()

  return (
    <aside className="lg:w-56 flex-shrink-0">
      <div className="sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-stone-700">
            <SlidersHorizontal className="w-4 h-4" />
            {t('products.filtersTitle')}
          </h2>
          {hasFilters && (
            <button
              onClick={onClearFilters}
              className="text-xs text-[#c9a96e] hover:underline flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              {t('products.filters.clear')}
            </button>
          )}
        </div>

        <FilterGroup
          label={t('products.filters.application')}
          items={appCategories.map((c) => ({ id: c.id, label: c.name[lang] }))}
          value={application}
          onChange={onApplicationChange}
        />

        <FilterGroup
          label={t('products.filters.material')}
          items={matCategories.map((c) => ({ id: c.id, label: c.name[lang] }))}
          value={material}
          onChange={onMaterialChange}
        />

        <FilterGroup
          label={t('products.filters.type')}
          items={typeCategories.map((c) => ({ id: c.id, label: c.name[lang] }))}
          value={type}
          onChange={onTypeChange}
        />

        <div className="pt-4 border-t border-stone-100">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={onlyNew}
              onChange={(e) => onOnlyNewChange(e.target.checked)}
              className="w-4 h-4 rounded border-stone-300 text-[#c9a96e] accent-[#c9a96e]"
            />
            <span className="text-sm text-stone-700">{t('products.filters.new')}</span>
          </label>
        </div>
      </div>
    </aside>
  )
}
