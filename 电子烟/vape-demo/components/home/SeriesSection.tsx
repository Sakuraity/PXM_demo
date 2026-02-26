'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { VapeSeries } from '@/types'

interface Props {
  series: VapeSeries[]
}

const SERIES_COLORS: Record<string, string> = {
  velo: '#cccccc',
  apex: '#d4af37',
  flux: '#999999',
  core: '#ffffff',
}

export default function SeriesSection({ series }: Props) {
  const { t } = useTranslation()

  return (
    <section className="py-32 bg-[#050505] border-t border-[#1a1a1a]">
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
              <span className="w-1.5 h-1.5 bg-white" />
              <span className="text-[10px] font-bold text-[#888] tracking-[0.2em] uppercase">{t('series.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">{t('series.title')}</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#888] max-w-md text-sm md:text-base font-medium">{t('series.subtitle')}</p>
          </motion.div>
        </div>

        {/* Series grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {series.map((s, idx) => {
            const accentColor = SERIES_COLORS[s.slug] ?? '#ffffff'
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link
                  href={`/series/${s.slug}`}
                  className="group relative flex h-[400px] md:h-[500px] bg-[#0a0a0a] overflow-hidden"
                >
                  {/* 背景大图占位 / Hover 放大 */}
                  <div className="absolute inset-0 bg-[#0f0f0f] transition-transform duration-700 ease-out group-hover:scale-105">
                    {/* Placeholder for actual photography */}
                    <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 80% 20%, ${accentColor}40 0%, transparent 50%)` }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[120px] font-black text-[#1a1a1a] tracking-tighter opacity-50 select-none">
                        {s.slug.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* 黑色遮罩，确保文字可读性 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                  {/* 边框高亮 */}
                  <div className="absolute inset-0 border border-[#262626] group-hover:border-[#404040] transition-colors duration-500 z-20" />
                  <div className="absolute top-0 left-0 w-full h-[2px] z-20" style={{ backgroundColor: accentColor }} />

                  {/* 内容层 */}
                  <div className="relative z-30 flex flex-col justify-end p-8 md:p-10 w-full h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-black uppercase tracking-widest" style={{ color: accentColor }}>
                        {s.name.en} SERIES
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#404040]" />
                      <span className="text-[#888] text-xs font-bold tracking-wider">{s.productCount} {t('series.products')}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-lg leading-tight">
                      {s.tagline.en}
                    </h3>

                    {/* Key features */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                      {s.keyFeatures.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                          <span className="text-xs text-[#a3a3a3] font-medium tracking-wide uppercase">{f.en}</span>
                        </div>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-colors" style={{ color: accentColor }}>
                      <span className="relative">
                        {t('series.explore')}
                        <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: accentColor }} />
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
