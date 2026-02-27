'use client'

import React, { useState, useEffect, useMemo, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Box, Layers, ArrowRight, Share2, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { getAllProducts } from '@/lib/data'
import type { VapeProduct, SeriesSlug } from '@/types'

const SERIES_LIST: { slug: SeriesSlug | 'all'; labelKey: string; color: string }[] = [
  { slug: 'all', labelKey: 'configurator.filters.allSeries', color: '#333333' },
  { slug: 'velo', labelKey: 'VELO', color: '#cccccc' },
  { slug: 'apex', labelKey: 'APEX', color: '#d4af37' },
  { slug: 'flux', labelKey: 'FLUX', color: '#999999' },
  { slug: 'core', labelKey: 'CORE', color: '#ffffff' },
]

const MATERIALS = [
  { id: 'matte', nameKey: 'matte' },
  { id: 'glossy', nameKey: 'glossy' },
  { id: 'metallic', nameKey: 'metallic' },
]

function ConfiguratorContent() {
  const { t, i18n } = useTranslation()
  const searchParams = useSearchParams()
  const currentLanguage = i18n.language
  
  const allProducts = useMemo(() => getAllProducts().filter(p => p.status === 'published'), [])
  
  const [activeSeries, setActiveSeries] = useState<SeriesSlug | 'all'>('all')
  const [activeProduct, setActiveProduct] = useState<VapeProduct | null>(null)
  const [activeColor, setActiveColor] = useState<string>('')
  const [activeMaterial, setActiveMaterial] = useState<string>('matte')
  const [copied, setCopied] = useState(false)
  const [mobileTab, setMobileTab] = useState<'products' | 'config'>('products')

  // Initialize from URL or default
  useEffect(() => {
    const seriesParam = searchParams.get('series') as SeriesSlug
    const productParam = searchParams.get('product')
    
    let initialSeries: SeriesSlug | 'all' = 'all'
    if (seriesParam && SERIES_LIST.some(s => s.slug === seriesParam)) {
      initialSeries = seriesParam
      setActiveSeries(seriesParam)
    }

    let initialProduct = allProducts[0]
    if (productParam) {
      const found = allProducts.find(p => p.slug === productParam)
      if (found) {
        initialProduct = found
        setActiveSeries(found.series)
      }
    } else if (initialSeries !== 'all') {
      initialProduct = allProducts.find(p => p.series === initialSeries) || allProducts[0]
    }

    setActiveProduct(initialProduct)
    if (initialProduct?.specs?.colors?.length) {
      setActiveColor(initialProduct.specs.colors[0])
    }
  }, [searchParams, allProducts])

  // Filter products by series
  const filteredProducts = useMemo(() => {
    if (activeSeries === 'all') return allProducts
    return allProducts.filter(p => p.series === activeSeries)
  }, [allProducts, activeSeries])

  // Handle series change
  const handleSeriesChange = (slug: SeriesSlug | 'all') => {
    setActiveSeries(slug)
    const newProducts = slug === 'all' ? allProducts : allProducts.filter(p => p.series === slug)
    if (newProducts.length > 0) {
      handleProductChange(newProducts[0])
    }
  }

  // Handle product change
  const handleProductChange = (product: VapeProduct) => {
    setActiveProduct(product)
    if (product.specs?.colors?.length) {
      // Try to keep the same color if it exists in the new product, else pick the first
      if (!product.specs.colors.includes(activeColor)) {
        setActiveColor(product.specs.colors[0])
      }
    } else {
      setActiveColor('')
    }
    setMobileTab('config')
  }

  const copyLink = () => {
    if (!activeProduct) return
    const params = new URLSearchParams({
      product: activeProduct.slug,
      color: activeColor,
      material: activeMaterial,
    })
    const url = `${window.location.origin}/configurator?${params.toString()}`
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getHeroImage = (product: VapeProduct) => {
    return product.images.find(img => img.type === 'hero')?.url || product.images[0]?.url
  }

  const seriesColor = activeProduct ? SERIES_LIST.find(s => s.slug === activeProduct.series)?.color || '#fff' : '#fff'

  if (!activeProduct) return <div className="min-h-screen bg-black" />

  return (
    <React.Fragment key={currentLanguage}>
      <div className="h-[calc(100vh-56px)] mt-14 bg-[#050505] overflow-hidden flex flex-col lg:flex-row relative">
        
        {/* --- Left Panel: Product Selector --- */}
        <div className={`w-full lg:w-80 flex-shrink-0 bg-[#0a0a0a] border-r border-[#1a1a1a] flex flex-col z-20 transition-transform duration-300 ${
          mobileTab === 'products' ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 absolute lg:relative h-full'
        }`}>
          {/* Series Tabs */}
          <div className="p-5 border-b border-[#1a1a1a]">
            <h2 className="text-[10px] font-black text-[#666] uppercase tracking-[0.2em] mb-4">
              {t('configurator.filters.series')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {SERIES_LIST.map(s => (
                <button
                  key={s.slug}
                  onClick={() => handleSeriesChange(s.slug)}
                  className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors border ${
                    activeSeries === s.slug 
                      ? 'bg-white text-black border-white' 
                      : 'bg-transparent text-[#666] border-[#222] hover:border-[#444] hover:text-white'
                  }`}
                >
                  {s.slug === 'all' ? t(s.labelKey) : s.labelKey}
                </button>
              ))}
            </div>
          </div>

          {/* Product List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
            {filteredProducts.map(product => (
              <button
                key={product.id}
                onClick={() => handleProductChange(product)}
                className={`w-full flex items-center gap-4 p-3 text-left transition-all border ${
                  activeProduct.id === product.id
                    ? 'bg-[#111] border-[#333]'
                    : 'bg-transparent border-transparent hover:bg-[#111]/50'
                }`}
              >
                <div className="w-12 h-12 relative bg-black border border-[#1a1a1a] flex-shrink-0 flex items-center justify-center p-1">
                  <Image 
                    src={getHeroImage(product)} 
                    alt={product.name[i18n.language as 'zh'|'en']} 
                    fill
                    sizes="48px"
                    className="object-contain p-1" 
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: SERIES_LIST.find(s => s.slug === product.series)?.color }} />
                    <span className="text-[9px] font-bold text-[#666] uppercase tracking-wider">{product.series}</span>
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-wide line-clamp-1 ${
                    activeProduct.id === product.id ? 'text-white' : 'text-[#888]'
                  }`}>
                    {product.name[i18n.language as 'zh'|'en']}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* --- Center: 3D Stage --- */}
        <div className="flex-1 relative flex flex-col z-0 min-h-[40vh] lg:min-h-full">
          {/* Stage Background */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 opacity-[0.15] transition-colors duration-1000"
              style={{ background: `radial-gradient(circle at 50% 50%, ${seriesColor}, transparent 65%)` }}
            />
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(${seriesColor}22 1px, transparent 1px), linear-gradient(90deg, ${seriesColor}22 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                backgroundPosition: 'center center'
              }}
            />
            
            {/* Product Image Viewer */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeProduct.id}-${activeColor}-${activeMaterial}`}
                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotateY: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 w-full h-full p-8 lg:p-24 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={getHeroImage(activeProduct)}
                    alt={activeProduct.name[i18n.language as 'zh'|'en']}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain drop-shadow-2xl"
                    style={{
                      filter: activeMaterial === 'metallic' 
                        ? 'contrast(1.15) brightness(1.05)' 
                        : activeMaterial === 'glossy'
                        ? 'contrast(1.05) saturate(1.1) brightness(1.1)'
                        : 'contrast(0.95) saturate(0.9)',
                    }}
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Top Indicators */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <div className="px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 text-white text-[9px] font-black uppercase tracking-[0.2em]">
              {t('configurator.filters.previewBadge')}
            </div>
            <div className="px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 text-[#888] text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeColor === 'white' ? '#eee' : activeColor.toLowerCase().replace(' ', '') }} />
              {activeColor || 'Standard'}
            </div>
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] text-[#666] uppercase tracking-wider bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
            <Layers className="w-3 h-3" />
            {t('configurator.viewer.rotateHint')}
          </div>
        </div>

        {/* --- Right Panel: CMF Configurator --- */}
        <div className={`w-full lg:w-96 flex-shrink-0 bg-[#0a0a0a] border-l border-[#1a1a1a] flex flex-col z-20 transition-transform duration-300 ${
          mobileTab === 'config' ? 'translate-x-0' : 'translate-x-full lg:translate-x-0 absolute right-0 lg:relative h-full'
        }`}>
          <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
            
            {/* Mobile Back Button */}
            <button 
              className="lg:hidden flex items-center gap-2 text-[10px] text-[#888] uppercase tracking-wider mb-6 font-bold"
              onClick={() => setMobileTab('products')}
            >
              <ChevronLeft className="w-3 h-3" />
              {t('configurator.detail.actions.backToList')}
            </button>

            {/* Product Header */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2" style={{ backgroundColor: seriesColor }} />
                <span className="text-[10px] font-black text-[#666] uppercase tracking-[0.2em]">
                  {activeProduct.series} {t('configurator.productCard.seriesLabel', { series: '' })}
                </span>
              </div>
              <h1 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-2">
                {activeProduct.name[i18n.language as 'zh'|'en']}
              </h1>
              <p className="text-xs text-[#888]">{activeProduct.modelNumber}</p>
            </div>

            {/* Colors */}
            {activeProduct.specs.colors && activeProduct.specs.colors.length > 0 && (
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">
                    {t('configurator.detail.colorSection')}
                  </h3>
                  <span className="text-[10px] text-[#666] uppercase">{activeColor}</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {activeProduct.specs.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setActiveColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center p-0.5 ${
                        activeColor === color ? 'border-white scale-110' : 'border-transparent hover:scale-105 hover:border-[#333]'
                      }`}
                      title={color}
                    >
                      {/* Simple color parsing simulation */}
                      <span 
                        className="w-full h-full rounded-full border border-black/20 shadow-inner"
                        style={{ 
                          backgroundColor: color.toLowerCase().includes('black') ? '#1a1a1a' : 
                                           color.toLowerCase().includes('white') ? '#f5f5f5' :
                                           color.toLowerCase().includes('blue') ? '#1e3a8a' :
                                           color.toLowerCase().includes('red') ? '#991b1b' :
                                           color.toLowerCase().includes('green') ? '#166534' :
                                           color.toLowerCase().includes('gold') ? '#d4af37' : '#888'
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Materials */}
            <div className="mb-10">
              <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-4">
                {t('configurator.detail.materialSection')}
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {MATERIALS.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setActiveMaterial(mat.id)}
                    className={`p-3 border text-center transition-all ${
                      activeMaterial === mat.id
                        ? 'border-white bg-[#1a1a1a]'
                        : 'border-[#222] bg-black hover:border-[#444]'
                    }`}
                  >
                    <div 
                      className="w-full h-8 mb-2 rounded-sm"
                      style={{
                        background: mat.id === 'matte' 
                          ? 'linear-gradient(135deg, #222 0%, #333 100%)'
                          : mat.id === 'glossy'
                          ? 'linear-gradient(135deg, #444 0%, #888 40%, #fff 50%, #888 60%, #444 100%)'
                          : 'linear-gradient(135deg, #444 0%, #999 50%, #444 100%)',
                      }}
                    />
                    <span className={`text-[9px] font-bold uppercase tracking-wider ${
                      activeMaterial === mat.id ? 'text-white' : 'text-[#666]'
                    }`}>
                      {t(`configurator.detail.materials.${mat.id}`)}
                    </span>
                  </button>
                ))}
              </div>
              <p className="mt-3 text-[10px] text-[#555] leading-relaxed">
                {t(`configurator.detail.tooltip.${activeMaterial}Desc`)}
              </p>
            </div>

            {/* Summary */}
            <div className="pt-6 border-t border-[#1a1a1a] space-y-4 mb-10">
              <div className="flex justify-between items-end">
                <span className="text-[10px] text-[#666] uppercase tracking-wider">
                  {t('configurator.detail.selected.priceEstimate')}
                </span>
                <span className="text-xl font-black text-white leading-none">
                  ${activeProduct.pricing.wholesaleTiers[0]?.unitPrice.toFixed(2)}
                  <span className="text-xs text-[#666] font-bold ml-1">/unit</span>
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-[#666] uppercase tracking-wider">
                  {t('configurator.detail.selected.moq')}
                </span>
                <span className="text-xs font-bold text-white uppercase">
                  {activeProduct.moq.toLocaleString()} {t('productDetail.units')}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 mt-auto">
              <Link
                href={`/contact?product=${activeProduct.slug}&color=${encodeURIComponent(activeColor)}&material=${activeMaterial}`}
                className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-[#e5e5e5] transition-colors"
              >
                {t('configurator.detail.actions.getQuote')}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              
              <button
                onClick={copyLink}
                className="flex items-center justify-center gap-2 w-full py-4 bg-transparent border border-[#333] text-white text-[10px] font-bold uppercase tracking-widest hover:border-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-500" />
                    {t('configurator.share.copySuccess')}
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    {t('configurator.detail.actions.shareConfig')}
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default function ConfiguratorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <ConfiguratorContent />
    </Suspense>
  )
}
