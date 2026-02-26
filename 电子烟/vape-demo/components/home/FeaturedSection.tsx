'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { VapeProduct } from '@/types'

interface Props {
  products: VapeProduct[]
}

const SERIES_COLOR: Record<string, string> = {
  velo: '#cccccc',
  apex: '#d4af37',
  flux: '#999999',
  core: '#ffffff',
}

export default function FeaturedSection({ products }: Props) {
  const { t } = useTranslation()

  const displayed = products.slice(0, 4)

  return (
    <section className="py-32 bg-black border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#d4af37]" />
              <span className="text-[10px] font-bold text-[#888] tracking-[0.2em] uppercase">BEST SELLERS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">{t('featured.title')}</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#888] max-w-md text-sm md:text-base font-medium mb-6 md:mb-0">{t('featured.subtitle')}</p>
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-2 text-sm font-bold tracking-widest text-white uppercase hover:text-[#d4af37] transition-colors"
            >
              <span className="relative">
                {t('featured.viewAll')}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayed.map((p, idx) => {
            const seriesColor = SERIES_COLOR[p.series] ?? '#ffffff'
            const heroImage = p.images.find((img) => img.type === 'hero')
            const wholesalePrice = p.pricing.wholesaleTiers[0]?.unitPrice ?? 0

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link
                  href={`/products/${p.slug}`}
                  className="group flex flex-col h-full bg-[#050505] border border-[#1a1a1a] hover:border-[#333] transition-colors duration-300"
                >
                  {/* Image placeholder */}
                  <div className="relative aspect-[4/5] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                      style={{ background: `radial-gradient(circle at center, ${seriesColor}, transparent 70%)` }}
                    />
                    
                    {/* 产品图占位 */}
                    <div className="flex flex-col items-center gap-3 z-10 transition-transform duration-500 group-hover:scale-110">
                      <div
                        className="w-16 h-16 flex items-center justify-center text-sm font-black"
                        style={{ color: seriesColor, border: `2px solid ${seriesColor}40` }}
                      >
                        {p.modelNumber}
                      </div>
                      <span className="text-[#333] text-[10px] font-bold tracking-widest uppercase">
                        {heroImage?.url.split('/').pop() ?? 'hero.jpg'}
                      </span>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {p.isNew && (
                        <span className="px-2 py-1 text-[10px] font-black bg-white text-black tracking-widest uppercase">
                          {t('featured.new')}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1 border-t border-[#1a1a1a]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5" style={{ backgroundColor: seriesColor }} />
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#888]">
                        {p.series} SERIES
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-black text-white mb-2 line-clamp-1 uppercase tracking-tight group-hover:text-white transition-colors">
                      {p.name.en}
                    </h3>
                    <p className="text-sm text-[#666] font-medium mb-8 line-clamp-2">
                      {p.tagline.en}
                    </p>

                    <div className="mt-auto pt-6 border-t border-[#1a1a1a]">
                      <div className="flex items-end justify-between mb-4">
                        <div>
                          <div className="text-[10px] font-bold text-[#666] tracking-widest uppercase mb-1">{t('featured.wholesaleFrom')}</div>
                          <div className="text-2xl font-black text-white leading-none">${wholesalePrice.toFixed(2)}</div>
                        </div>
                        <div className="text-[10px] font-bold text-[#444] tracking-widest uppercase text-right">
                          MOQ<br/>{p.moq}
                        </div>
                      </div>

                      <div className="flex items-center justify-between group-hover:text-white transition-colors">
                        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: seriesColor }}>
                          {t('featured.viewDetails')}
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

        {/* Mobile View all */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 border border-[#333] text-white font-bold uppercase tracking-widest w-full active:bg-[#111]"
          >
            {t('featured.viewAll')} <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
