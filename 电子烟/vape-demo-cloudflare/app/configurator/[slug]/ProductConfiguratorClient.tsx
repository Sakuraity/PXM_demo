'use client'

import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { Box, ChevronLeft, ChevronRight, Share2, Copy, Check, ArrowRight, Layers } from 'lucide-react'
import { motion } from 'framer-motion'
import { getProductBySlug } from '@/lib/data'
import type { VapeProduct } from '@/types'

const SERIES_COLORS: Record<string, string> = {
  velo: '#cccccc',
  apex: '#d4af37',
  flux: '#999999',
  core: '#ffffff',
}

const MATERIALS = [
  { id: 'matte', nameKey: 'matte', roughness: 0.8, metalness: 0.1 },
  { id: 'glossy', nameKey: 'glossy', roughness: 0.2, metalness: 0.3 },
  { id: 'metallic', nameKey: 'metallic', roughness: 0.3, metalness: 0.8 },
]

interface ProductConfiguratorClientProps {
  slug: string
}

export function ProductConfiguratorClient({ slug }: ProductConfiguratorClientProps) {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language
  
  const [product, setProduct] = useState<VapeProduct | null>(null)
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [selectedMaterial, setSelectedMaterial] = useState<string>('matte')
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const p = getProductBySlug(slug)
    if (p) {
      setProduct(p)
      setSelectedColor(p.specs.colors?.[0] || '')
    }
  }, [slug])

  // Generate share URL
  const generateShareUrl = () => {
    if (!product) return ''
    const params = new URLSearchParams({
      color: selectedColor,
      material: selectedMaterial,
    })
    return `${window.location.origin}/configurator/${product.slug}?${params.toString()}`
  }

  // Copy link to clipboard
  const copyLink = () => {
    const url = generateShareUrl()
    if (url) {
      navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Get hero image
  const getHeroImage = () => {
    if (!product) return ''
    return product.images.find(img => img.type === 'hero')?.url || product.images[0]?.url
  }

  // Get series color
  const seriesColor = product ? SERIES_COLORS[product.series] || '#fff' : '#fff'

  if (!mounted || !product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-[#666] text-sm">{t('configurator.viewer.loading')}</div>
      </div>
    )
  }

  return (
    <React.Fragment key={currentLanguage}>
      <div className="min-h-screen bg-black pt-20 pb-24">
        {/* Header */}
        <div className="border-b border-[#1a1a1a]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#666] uppercase mb-4">
                <Link href="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/configurator" className="hover:text-white transition-colors">
                  {t('configurator.pageTitle')}
                </Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white">{product.modelNumber}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Link
                  href="/configurator"
                  className="flex items-center gap-2 text-[10px] font-bold text-[#666] hover:text-white uppercase tracking-wider transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  {t('configurator.detail.actions.backToList')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: 3D Viewer */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-[#050505] border border-[#1a1a1a] aspect-[4/3] relative overflow-hidden"
              >
                {/* 3D Background Effect */}
                <div 
                  className="absolute inset-0 opacity-[0.15]"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${seriesColor}, transparent 60%)`
                  }}
                />
                
                {/* Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `
                      linear-gradient(${seriesColor}22 1px, transparent 1px),
                      linear-gradient(90deg, ${seriesColor}22 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                  }}
                />

                {/* Product Image */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <motion.img
                    key={`${product.id}-${selectedColor}-${selectedMaterial}`}
                    initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    src={getHeroImage()}
                    alt={product.name[i18n.language as 'en' | 'zh']}
                    className="max-h-full max-w-full object-contain drop-shadow-2xl"
                    style={{
                      filter: selectedMaterial === 'metallic' 
                        ? 'contrast(1.1) brightness(1.05)' 
                        : selectedMaterial === 'glossy'
                        ? 'contrast(1.05) saturate(1.1)'
                        : 'contrast(0.95) saturate(0.95)',
                    }}
                  />
                </div>

                {/* 3D Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-[9px] font-black uppercase tracking-[0.2em] backdrop-blur-sm">
                  {t('configurator.filters.configuratorBadge')}
                </div>

                {/* Rotate Hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] text-[#666] uppercase tracking-wider">
                  <Layers className="w-3 h-3" />
                  {t('configurator.viewer.rotateHint')}
                </div>

                {/* Material Indicator */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider">
                  {t(`configurator.detail.materials.${selectedMaterial}`)}
                </div>
              </motion.div>

              {/* Quick Info */}
              <div className="mt-6 p-6 bg-[#0a0a0a] border border-[#1a1a1a]">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span 
                        className="w-2 h-2"
                        style={{ backgroundColor: seriesColor }}
                      />
                      <span className="text-[10px] font-black text-[#666] uppercase tracking-[0.2em]">
                        {product.series} {t('configurator.productCard.seriesLabel', { series: '' })}
                      </span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">
                      {product.name[i18n.language as 'en' | 'zh']}
                    </h1>
                    <p className="text-sm text-[#888] mb-4">{product.tagline[i18n.language as 'en' | 'zh']}</p>
                    <p className="text-xs text-[#666] leading-relaxed max-w-xl">
                      {product.description[i18n.language as 'en' | 'zh']}
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-[10px] text-[#666] uppercase tracking-wider mb-1">
                      {t('configurator.detail.selected.priceEstimate')}
                    </div>
                    <div className="text-2xl font-black text-white">
                      ${product.pricing.wholesaleTiers[0]?.unitPrice.toFixed(2)}
                      <span className="text-sm text-[#666] font-normal">/unit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Configuration Panel */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#0a0a0a] border border-[#1a1a1a] p-6 sticky top-24"
              >
                <h2 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <Box className="w-4 h-4 text-[#d4af37]" />
                  {t('configurator.detail.configSummary')}
                </h2>

                {/* Color Selection */}
                <div className="mb-8">
                  <h3 className="text-[10px] font-bold text-[#666] uppercase tracking-wider mb-4">
                    {t('configurator.detail.colorSection')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.colors?.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-2 text-[10px] font-bold uppercase tracking-wider border transition-all ${
                          selectedColor === color
                            ? 'border-white text-white bg-[#1a1a1a]'
                            : 'border-[#222] text-[#666] hover:border-[#444] hover:text-[#888]'
                        }`}
                        title={color}
                      >
                        {color.length > 15 ? color.slice(0, 15) + '...' : color}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 text-[10px] text-[#888]">
                    {t('configurator.detail.selected.color')}: <span className="text-white">{selectedColor}</span>
                  </div>
                </div>

                {/* Material Selection */}
                <div className="mb-8">
                  <h3 className="text-[10px] font-bold text-[#666] uppercase tracking-wider mb-4">
                    {t('configurator.detail.materialSection')}
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {MATERIALS.map((mat) => (
                      <button
                        key={mat.id}
                        onClick={() => setSelectedMaterial(mat.id)}
                        className={`p-3 border text-center transition-all ${
                          selectedMaterial === mat.id
                            ? 'border-white bg-[#1a1a1a]'
                            : 'border-[#222] hover:border-[#444]'
                        }`}
                        title={t(`configurator.detail.tooltip.${mat.id}Desc`)}
                      >
                        <div 
                          className="w-full h-8 mb-2 rounded-sm"
                          style={{
                            background: mat.id === 'matte' 
                              ? 'linear-gradient(135deg, #333 0%, #444 100%)'
                              : mat.id === 'glossy'
                              ? 'linear-gradient(135deg, #555 0%, #777 50%, #555 100%)'
                              : 'linear-gradient(135deg, #666 0%, #999 50%, #666 100%)',
                          }}
                        />
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${
                          selectedMaterial === mat.id ? 'text-white' : 'text-[#666]'
                        }`}>
                          {t(`configurator.detail.materials.${mat.id}`)}
                        </span>
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-[10px] text-[#555]">
                    {t(`configurator.detail.tooltip.${selectedMaterial}Desc`)}
                  </p>
                </div>

                {/* Summary */}
                <div className="pt-6 border-t border-[#1a1a1a] space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-[10px] text-[#666] uppercase tracking-wider">
                      {t('configurator.detail.selected.moq')}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {product.moq.toLocaleString()} {t('productDetail.units')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] text-[#666] uppercase tracking-wider">
                      {t('configurator.detail.selected.leadTime')}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {product.leadTime.standard} {t('productDetail.days')}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Link
                    href={`/contact?product=${product.slug}&color=${encodeURIComponent(selectedColor)}&material=${selectedMaterial}`}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-[#e5e5e5] transition-colors"
                  >
                    {t('configurator.detail.actions.getQuote')}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  
                  <button
                    onClick={copyLink}
                    className="flex items-center justify-center gap-2 w-full py-4 border border-[#333] text-white text-[10px] font-bold uppercase tracking-widest hover:border-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-green-500" />
                        {t('configurator.share.copySuccess')}
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3 h-3" />
                        {t('configurator.detail.actions.shareConfig')}
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
