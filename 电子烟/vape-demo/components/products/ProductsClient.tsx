'use client'

import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { Search, SlidersHorizontal, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { VapeProduct, SeriesSlug, ProductCategory } from '@/types'

interface Props {
  products: VapeProduct[]
}

type CategoryFilter = 'all' | ProductCategory
type SortOption = 'newest' | 'price-asc' | 'price-desc'

const SERIES_COLOR: Record<string, string> = {
  velo: '#cccccc',
  apex: '#d4af37',
  flux: '#999999',
  core: '#ffffff',
}

const SERIES_OPTIONS: SeriesSlug[] = ['velo', 'apex', 'flux', 'core']

export default function ProductsClient({ products }: Props) {
  const { t } = useTranslation()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<CategoryFilter>('all')
  const [series, setSeries] = useState<SeriesSlug | 'all'>('all')
  const [sort, setSort] = useState<SortOption>('newest')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let result = products

    if (search) {
      const q = search.toLowerCase()
      result = result.filter(p =>
        p.name.en.toLowerCase().includes(q) ||
        p.name.zh.includes(q) ||
        p.modelNumber.toLowerCase().includes(q)
      )
    }

    if (category !== 'all') {
      result = result.filter(p => p.category === category)
    }

    if (series !== 'all') {
      result = result.filter(p => p.series === series)
    }

    return result.sort((a, b) => {
      if (sort === 'price-asc') return a.pricing.wholesaleTiers[0].unitPrice - b.pricing.wholesaleTiers[0].unitPrice
      if (sort === 'price-desc') return b.pricing.wholesaleTiers[0].unitPrice - a.pricing.wholesaleTiers[0].unitPrice
      return 0
    })
  }, [products, search, category, series, sort])

  const categoryTabs: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: t('products.allCategories') },
    { key: 'device', label: t('nav.devices') },
    { key: 'pod', label: t('nav.pods') },
    { key: 'kit', label: t('nav.kits') },
    { key: 'accessory', label: t('nav.accessories') },
  ]

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">{t('products.title')}</h1>
            <p className="text-[#888] text-sm md:text-base font-medium tracking-wide">{t('products.subtitle')}</p>
          </div>
        </motion.div>

        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666] group-focus-within:text-white transition-colors" />
            <input
              type="text"
              placeholder={t('products.searchPlaceholder')}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#050505] border border-[#1a1a1a] text-white placeholder:text-[#444] focus:outline-none focus:border-[#d4af37] text-sm font-bold tracking-widest uppercase transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex gap-4">
            {/* Sort */}
            <select
              value={sort}
              onChange={e => setSort(e.target.value as SortOption)}
              className="px-6 py-4 bg-[#050505] border border-[#1a1a1a] text-xs font-bold tracking-widest uppercase text-[#888] focus:outline-none focus:border-[#d4af37] cursor-pointer appearance-none transition-colors"
            >
              <option value="newest">{t('products.sortNewest')}</option>
              <option value="price-asc">{t('products.sortPriceAsc')}</option>
              <option value="price-desc">{t('products.sortPriceDesc')}</option>
            </select>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-3 px-6 py-4 border text-xs font-bold tracking-widest uppercase transition-colors ${showFilters ? 'bg-[#111] border-[#333] text-white' : 'bg-[#050505] border-[#1a1a1a] text-[#888] hover:text-white'}`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">{t('products.filters')}</span>
            </button>
          </div>
        </div>

        {/* Expanded Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="p-6 bg-[#050505] border border-[#1a1a1a] mb-8">
                <div className="text-[10px] font-black text-[#444] tracking-[0.2em] uppercase mb-4">
                  {t('products.filterBySeries')}
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSeries('all')}
                    className={`px-4 py-2 text-xs font-bold tracking-widest transition-colors uppercase border ${series === 'all' ? 'bg-white text-black border-white' : 'bg-black text-[#666] border-[#1a1a1a] hover:text-white'}`}
                  >
                    {t('products.allSeries')}
                  </button>
                  {SERIES_OPTIONS.map(s => {
                    const color = SERIES_COLOR[s]
                    const isActive = series === s
                    return (
                      <button
                        key={s}
                        onClick={() => setSeries(s)}
                        className="px-4 py-2 text-xs font-bold tracking-widest transition-all uppercase border"
                        style={isActive
                          ? { backgroundColor: `${color}15`, color, borderColor: color }
                          : { backgroundColor: 'black', color: '#666', borderColor: '#1a1a1a' }
                        }
                      >
                        {s}
                      </button>
                    )
                  })}
                  {series !== 'all' && (
                    <button onClick={() => setSeries('all')} className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[#444] hover:text-white ml-auto">
                      <X className="w-3 h-3" /> {t('products.clearFilters')}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category tabs */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-4 scrollbar-hide">
          {categoryTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setCategory(tab.key)}
              className={`flex-shrink-0 px-6 py-3 text-xs font-black tracking-widest uppercase transition-colors border ${category === tab.key ? 'bg-white text-black border-white' : 'bg-transparent text-[#666] border-[#1a1a1a] hover:text-white hover:border-[#333]'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <div className="mb-6 text-[10px] font-bold tracking-widest uppercase text-[#444]">
          {t('products.showing', { count: filtered.length })}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-32 bg-[#050505] border border-[#1a1a1a]"
          >
            <div className="text-4xl mb-6 opacity-50">🔍</div>
            <h3 className="text-xl font-black text-white mb-2 uppercase tracking-widest">{t('products.noResults')}</h3>
            <p className="text-[#666] font-medium text-sm">{t('products.noResultsHint')}</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, idx) => {
              const seriesColor = SERIES_COLOR[p.series] ?? '#ffffff'
              const wholesalePrice = p.pricing.wholesaleTiers[0]?.unitPrice ?? 0
              const heroImage = p.images.find(img => img.type === 'hero')

              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={`/products/${p.slug}`}
                    className="group flex flex-col h-full bg-[#050505] border border-[#1a1a1a] hover:border-[#333] transition-colors duration-300"
                  >
                    {/* Image Area */}
                    <div className="relative aspect-[4/5] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                        style={{ background: `radial-gradient(circle at center, ${seriesColor}, transparent 70%)` }}
                      />
                      <div className="flex flex-col items-center gap-3 z-10 transition-transform duration-700 group-hover:scale-110">
                        <div
                          className="w-16 h-16 flex items-center justify-center text-sm font-black border"
                          style={{ color: seriesColor, borderColor: `${seriesColor}40` }}
                        >
                          {p.modelNumber.split('-').pop()}
                        </div>
                        <span className="text-[#333] text-[10px] font-bold tracking-widest uppercase">
                          {heroImage?.url.split('/').pop() ?? 'hero.jpg'}
                        </span>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {p.isNew && (
                          <span className="px-2 py-1 text-[9px] font-black bg-white text-black uppercase tracking-widest">
                            {t('products.new')}
                          </span>
                        )}
                        {p.isDisposable && (
                          <span className="px-2 py-1 text-[9px] font-black bg-[#111] border border-[#333] text-white uppercase tracking-widest">
                            {t('products.disposable')}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Info Area */}
                    <div className="p-6 flex flex-col flex-1 border-t border-[#1a1a1a]">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5" style={{ backgroundColor: seriesColor }} />
                        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#666]">
                          {p.series} · {p.category}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight line-clamp-1 group-hover:text-white transition-colors">{p.name.en}</h3>
                      <p className="text-xs text-[#666] mb-8 line-clamp-2 font-medium leading-relaxed">{p.tagline.en}</p>

                      <div className="mt-auto pt-5 border-t border-[#1a1a1a]">
                        <div className="flex items-end justify-between mb-4">
                          <div>
                            <span className="block text-[9px] font-bold text-[#444] uppercase tracking-widest mb-1">{t('featured.wholesaleFrom')}</span>
                            <span className="text-xl font-black text-white leading-none">${wholesalePrice.toFixed(2)}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between group-hover:text-white transition-colors">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: seriesColor }}>
                            {t('products.viewDetails')}
                          </span>
                          <ArrowRight className="w-4 h-4" style={{ color: seriesColor }} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
