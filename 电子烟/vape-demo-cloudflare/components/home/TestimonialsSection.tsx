'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Testimonial } from '@/types'

interface Props {
  testimonials: Testimonial[]
}

const SERIES_COLOR: Record<string, string> = {
  velo: '#00ff66',
  apex: '#ffaa00',
  flux: '#00f0ff',
  core: '#ff003c',
}

export default function TestimonialsSection({ testimonials }: Props) {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language === 'zh' ? 'zh' : 'en') as 'zh' | 'en'

  if (testimonials.length === 0) return null

  return (
    <section className="py-32 bg-black border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">{t('testimonials.title')}</h2>
            <p className="text-[#888] font-medium max-w-xl mx-auto text-sm md:text-base">{t('testimonials.subtitle')}</p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => {
            const seriesColor = item.series ? (SERIES_COLOR[item.series] ?? '#ffffff') : '#ffffff'
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col p-8 bg-[#050505] border border-[#1a1a1a] hover:border-[#333] transition-colors"
              >
                {/* Stars */}
                <div className="flex gap-1.5 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      fill={i < item.rating ? '#ffffff' : 'transparent'}
                      stroke={i < item.rating ? '#ffffff' : '#333'}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base text-[#a3a3a3] font-medium leading-relaxed flex-1 mb-8">
                  &ldquo;{item.content[lang]}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-6 border-t border-[#1a1a1a]">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    {item.avatar ? (
                      <div className="relative w-10 h-10 flex-shrink-0">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          sizes="40px"
                          className="rounded-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-10 h-10 flex items-center justify-center text-sm font-black flex-shrink-0 rounded-full"
                        style={{ backgroundColor: `${seriesColor}15`, color: seriesColor, border: `1px solid ${seriesColor}40` }}
                      >
                        {item.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="text-sm font-bold text-white uppercase tracking-wider">{item.name}</div>
                      <div className="text-[10px] text-[#666] font-bold tracking-widest uppercase mt-0.5">{item.company} · {item.country}</div>
                    </div>
                  </div>
                  {item.series && (
                    <span
                      className="text-[10px] font-black uppercase px-2 py-1 tracking-widest"
                      style={{ color: seriesColor, backgroundColor: `${seriesColor}15`, border: `1px solid ${seriesColor}30` }}
                    >
                      {item.series}
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
