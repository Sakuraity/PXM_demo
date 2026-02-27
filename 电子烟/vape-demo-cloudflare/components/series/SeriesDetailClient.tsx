'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight, Package } from 'lucide-react'
import type { VapeSeries, VapeProduct } from '@/types'

interface Props {
  series: VapeSeries
  products: VapeProduct[]
}

const SERIES_COLOR: Record<string, string> = {
  velo: '#cccccc',
  apex: '#d4af37',
  flux: '#999999',
  core: '#ffffff',
}

export default function SeriesDetailClient({ series, products }: Props) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'zh' ? 'zh' : 'en'
  const accentColor = SERIES_COLOR[series.slug] ?? '#d4af37'

  return (
    <div className="min-h-screen bg-black pb-24 pt-20">

      {/* Hero */}
      <section className="relative py-24 border-b border-[#1a1a1a] overflow-hidden">
        {series.heroImage && (
          <Image
            src={series.heroImage}
            alt={series.name[lang]}
            fill
            sizes="100vw"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            priority
          />
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${accentColor}08 0%, transparent 60%)` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-12">
            <Link href="/" className="text-[10px] font-bold text-[#666] hover:text-white transition-colors uppercase tracking-widest">
              {t('nav.home')}
            </Link>
            <ChevronRight className="w-3 h-3 text-[#444]" />
            <Link href="/products" className="text-[10px] font-bold text-[#666] hover:text-white transition-colors uppercase tracking-widest">
              {t('nav.products')}
            </Link>
            <ChevronRight className="w-3 h-3 text-[#444]" />
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: accentColor }}>
              {series.name[lang]}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5" style={{ background: accentColor }} />
              <span className="text-[10px] font-black tracking-[0.25em] uppercase" style={{ color: accentColor }}>
                {series.tagline[lang]}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              {series.slug.toUpperCase()}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <p className="text-base md:text-lg text-[#888] font-medium leading-relaxed max-w-xl">
                {series.description[lang]}
              </p>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-[#e5e5e5] transition-colors"
                >
                  {t('series.allProducts')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-[#333] text-white font-bold uppercase tracking-widest hover:border-[#888] hover:bg-white/5 transition-colors"
                >
                  {t('series.wholesaleInquiry')}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Key Features */}
        <section className="py-16 border-b border-[#1a1a1a]">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-sm font-black text-white uppercase tracking-widest">{t('series.keyFeatures')}</h2>
            <div className="h-px flex-1 bg-[#1a1a1a]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {series.keyFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-start gap-4 p-6 bg-[#050505] border border-[#1a1a1a] hover:border-[#333] transition-colors group"
              >
                <div
                  className="w-1.5 h-1.5 flex-shrink-0 mt-1.5"
                  style={{ background: accentColor }}
                />
                <span className="text-sm font-bold text-[#a3a3a3] group-hover:text-white transition-colors uppercase tracking-wide leading-relaxed">
                  {feature[lang]}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="flex items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-black text-white uppercase tracking-widest">
                {series.name[lang]} {t('series.productsIn')}
              </h2>
              <div className="h-px w-24 bg-[#1a1a1a]" />
              <span className="text-[10px] font-bold text-[#666] tracking-widest">{products.length} SKUs</span>
            </div>
            <Link
              href={`/products?series=${series.slug}`}
              className="text-[10px] font-black uppercase tracking-widest text-[#666] hover:text-white transition-colors flex items-center gap-2"
            >
              {t('series.filterInProducts')}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <Package className="w-12 h-12 text-[#333] mb-6" />
              <div className="text-sm font-black text-[#666] uppercase tracking-widest">{t('series.noProducts')}</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="block bg-[#050505] border border-[#1a1a1a] hover:border-[#333] transition-all duration-300 group"
                  >
                    {/* Image */}
                    <div className="relative aspect-square bg-[#0a0a0a] overflow-hidden">
                      {(() => {
                        const heroImg = product.images.find(img => img.type === 'hero')
                        return heroImg ? (
                          <Image
                            src={heroImg.url}
                            alt={heroImg.alt[lang]}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[10px] font-black text-[#333] uppercase tracking-widest">
                              {product.modelNumber}
                            </span>
                          </div>
                        )
                      })()}
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {product.isNew && (
                          <span className="px-2 py-1 bg-white text-black text-[9px] font-black tracking-widest uppercase">
                            {t('products.new')}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-5">
                      <div
                        className="text-[9px] font-black uppercase tracking-[0.2em] mb-2"
                        style={{ color: accentColor }}
                      >
                        {t(`products.category.${product.category}`)}
                      </div>
                      <h3 className="text-sm font-black text-white uppercase tracking-tight mb-1 group-hover:text-[#e5e5e5] transition-colors">
                        {product.name[lang]}
                      </h3>
                      <p className="text-[11px] text-[#666] font-medium mb-4 line-clamp-2 leading-relaxed">
                        {product.tagline[lang]}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[10px] font-bold text-[#444] uppercase tracking-widest">{t('featured.wholesaleFrom')}</div>
                          <div className="text-sm font-black text-white tracking-tight">
                            ${product.pricing.wholesaleTiers[0]?.unitPrice.toFixed(2)}
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-black text-[#666] group-hover:text-white transition-colors uppercase tracking-widest">
                          {t('series.details')}
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* CTA Banner */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 border-t border-[#1a1a1a] text-center"
        >
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
            {t('series.wholesaleTitle', { name: series.name[lang] })}
          </h2>
          <p className="text-[#888] font-medium mb-10 max-w-lg mx-auto text-sm">
            {t('series.wholesaleSubtitle')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-[#e5e5e5] transition-colors"
          >
            {t('series.getQuote')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.section>

      </div>
    </div>
  )
}
