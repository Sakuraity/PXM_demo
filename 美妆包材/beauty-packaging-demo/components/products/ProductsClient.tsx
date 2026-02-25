'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { products } from '@/lib/data'
import SearchBar from '@/components/products/list/SearchBar'
import FilterSidebar from '@/components/products/list/FilterSidebar'
import ProductGrid from '@/components/products/list/ProductGrid'

export default function ProductsClient() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'zh' | 'en'
  const searchParams = useSearchParams()

  const [application, setApplication] = useState(searchParams.get('application') ?? '')
  const [material, setMaterial] = useState(searchParams.get('material') ?? '')
  const [type, setType] = useState(searchParams.get('type') ?? '')
  const [onlyNew, setOnlyNew] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (p.status !== 'published') return false
      if (application && !(p.categories.application as string[]).includes(application)) return false
      if (material && p.categories.material !== material) return false
      if (type && p.categories.type !== type) return false
      if (onlyNew && !p.isNew) return false

      if (debouncedSearch) {
        const query = debouncedSearch.toLowerCase()
        const matchesModel = p.modelNumber.toLowerCase().includes(query)
        const matchesName = p.name[lang].toLowerCase().includes(query)
        const matchesTagline = p.tagline[lang].toLowerCase().includes(query)
        if (!matchesModel && !matchesName && !matchesTagline) return false
      }

      return true
    })
  }, [application, material, type, onlyNew, debouncedSearch, lang])

  const hasFilters = !!(application || material || type || onlyNew || searchQuery)

  function clearFilters() {
    setApplication('')
    setMaterial('')
    setType('')
    setOnlyNew(false)
    setSearchQuery('')
    setDebouncedSearch('')
  }

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchQuery), 300)
    return () => clearTimeout(timer)
  }, [searchQuery])

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
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <div className="flex flex-col lg:flex-row gap-10">
          <FilterSidebar
            application={application}
            material={material}
            type={type}
            onlyNew={onlyNew}
            hasFilters={hasFilters}
            lang={lang}
            onApplicationChange={setApplication}
            onMaterialChange={setMaterial}
            onTypeChange={setType}
            onOnlyNewChange={setOnlyNew}
            onClearFilters={clearFilters}
          />
          <ProductGrid products={filtered} onClearFilters={clearFilters} />
        </div>
      </div>
    </div>
  )
}
