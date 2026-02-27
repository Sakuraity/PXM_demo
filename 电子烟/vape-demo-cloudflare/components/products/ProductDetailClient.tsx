'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ShieldCheck, CheckCircle2, ArrowRight, Package, Zap, Box, ExternalLink, Clock, Layers } from 'lucide-react'
import { motion } from 'framer-motion'
import type { VapeProduct } from '@/types'

interface Props {
  product: VapeProduct
  relatedProducts: VapeProduct[]
}

const SERIES_COLOR: Record<string, string> = {
  velo: '#cccccc',
  apex: '#d4af37',
  flux: '#999999',
  core: '#ffffff',
}

function buildSpecRows(specs: VapeProduct['specs'], t: any): { label: string; value: string }[] {
  const rows: { label: string; value: string }[] = []
  if (specs.batteryCapacity) rows.push({ label: t('productDetail.battery'), value: `${specs.batteryCapacity}mAh` })
  if (specs.eJuiceCapacity) rows.push({ label: t('productDetail.capacity'), value: `${specs.eJuiceCapacity}mL` })
  if (specs.cartridgeCapacity) rows.push({ label: t('productDetail.cartridgeCapacity'), value: `${specs.cartridgeCapacity}mL` })
  if (specs.puffs) rows.push({ label: t('productDetail.puffs'), value: `${specs.puffs.toLocaleString()}` })
  if (specs.nicotineStrengths && specs.nicotineStrengths.length > 0) rows.push({ label: t('productDetail.nicotine'), value: specs.nicotineStrengths.map(n => `${n}mg`).join(' / ') })
  if (specs.wattageRange) rows.push({ label: t('productDetail.wattage'), value: specs.wattageRange })
  if (specs.resistance) rows.push({ label: t('productDetail.resistance'), value: `${specs.resistance}Ω` })
  if (specs.chargingPort) rows.push({ label: t('productDetail.charging'), value: `${specs.chargingPort}${specs.chargingTime ? ` / ${specs.chargingTime}` : ''}` })
  if (specs.dimensions) rows.push({ label: t('productDetail.dimensions'), value: specs.dimensions })
  if (specs.weight) rows.push({ label: t('productDetail.weight'), value: `${specs.weight}g` })
  if (specs.coilType) rows.push({ label: t('productDetail.coil'), value: specs.coilType })
  if (specs.airflowControl !== undefined) rows.push({ label: t('productDetail.airflow'), value: specs.airflowControl ? t('productDetail.adjustable') : t('productDetail.fixed') })
  if (specs.displayScreen !== undefined) rows.push({ label: t('productDetail.display'), value: specs.displayScreen ? t('productDetail.yes') : t('productDetail.no') })
  if (specs.isRefillable !== undefined) rows.push({ label: t('productDetail.refillable'), value: specs.isRefillable ? t('productDetail.yes') : t('productDetail.no') })
  return rows
}

export default function ProductDetailClient({ product, relatedProducts }: Props) {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language === 'zh' ? 'zh' : 'en') as 'zh' | 'en'
  const seriesColor = SERIES_COLOR[product.series] ?? '#ffffff'
  const specRows = buildSpecRows(product.specs, t)
  const [selectedColor, setSelectedColor] = useState<string>(product.specs.colors?.[0] ?? '')
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  return (
    <div className="min-h-screen bg-black pt-20 pb-24">
      <div className="h-[1px] w-full bg-[#1a1a1a]" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#666] uppercase mb-12"
        >
          <Link href="/products" className="hover:text-white transition-colors">{t('nav.products')}</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/products?series=${product.series}`} className="hover:text-white transition-colors capitalize">{product.series}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">{product.name[lang]}</span>
        </motion.nav>

        {/* ── Hero: Image + Info ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left: Image gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main image */}
            <div
              className="relative aspect-[4/5] bg-[#050505] border border-[#1a1a1a] flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 opacity-[0.07]" style={{ background: `radial-gradient(circle at 50% 40%, ${seriesColor}, transparent 65%)` }} />
              {product.images[activeImageIndex] ? (
                <Image
                  src={product.images[activeImageIndex].url}
                  alt={product.images[activeImageIndex].alt[lang]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div
                    className="w-36 h-36 flex items-center justify-center text-5xl font-black border-2"
                    style={{ color: seriesColor, borderColor: `${seriesColor}33` }}
                  >
                    {product.modelNumber}
                  </div>
                  {selectedColor && (
                    <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: `${seriesColor}99` }}>
                      {selectedColor}
                    </span>
                  )}
                </div>
              )}
              {product.isNew && (
                <div className="absolute top-5 left-5 px-3 py-1 bg-white text-black text-[9px] font-black tracking-[0.2em] uppercase">
                  {t('products.new')}
                </div>
              )}
              {product.isFeatured && (
                <div className="absolute top-5 right-5 px-3 py-1 bg-[#d4af37] text-black text-[9px] font-black tracking-[0.2em] uppercase">
                  {t('products.featured')}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`relative aspect-square bg-[#050505] border overflow-hidden transition-colors ${activeImageIndex === i ? 'border-white' : 'border-[#1a1a1a] hover:border-[#333]'}`}
                >
                  <Image
                    src={img.url}
                    alt={img.alt[lang]}
                    fill
                    sizes="(max-width: 1024px) 25vw, 12vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Product info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-start pt-2"
          >
            {/* Series label */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2 h-2 flex-shrink-0" style={{ backgroundColor: seriesColor }} />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#888]">
                {product.series} {t('productDetail.seriesSuffix')} · {product.modelNumber}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-3">
              {product.name[lang]}
            </h1>
            <p className="text-sm text-[#888] font-medium leading-relaxed mb-5 max-w-md">
              {product.tagline[lang]}
            </p>
            <p className="text-xs text-[#555] leading-relaxed mb-8 max-w-md">
              {product.description[lang]}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {product.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-[#111] border border-[#222] text-[10px] font-bold text-[#777] uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            {/* Color selector */}
            {product.specs.colors && product.specs.colors.length > 0 && (
              <div className="mb-8">
                <div className="text-[10px] font-black text-[#666] uppercase tracking-[0.2em] mb-3">
                  {t('productDetail.selectColor')} — <span className="text-white">{selectedColor}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.specs.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider border transition-colors ${selectedColor === color ? 'border-white text-white bg-[#111]' : 'border-[#222] text-[#555] hover:border-[#444] hover:text-[#888]'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Nicotine selector */}
            {product.specs.nicotineStrengths && product.specs.nicotineStrengths.length > 0 && (
              <div className="mb-8">
                <div className="text-[10px] font-black text-[#666] uppercase tracking-[0.2em] mb-3">
                  {t('productDetail.selectNicotine')}
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.specs.nicotineStrengths.map((n) => (
                    <span key={n} className="px-4 py-2 bg-[#111] border border-[#222] text-[10px] font-bold text-[#888] uppercase tracking-wider">
                      {n}mg/mL
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing box */}
            <div className="p-6 bg-[#050505] border border-[#1a1a1a] mb-6">
              {/* Tier table */}
              <div className="mb-6">
                <div className="text-[10px] text-[#555] font-black uppercase tracking-[0.2em] mb-3">{t('productDetail.wholesaleFrom')}</div>
                <div className="space-y-0">
                  {product.pricing.wholesaleTiers.map((tier, i) => (
                    <div key={i} className={`flex items-center justify-between py-3 border-b border-[#111] last:border-0 ${i === 0 ? 'text-white' : 'text-[#666]'}`}>
                      <span className="text-[10px] font-bold tracking-wider uppercase">
                        {tier.minQty.toLocaleString()}{tier.maxQty ? `–${tier.maxQty.toLocaleString()}` : '+'} {t('productDetail.units')}
                      </span>
                      <span className={`font-black ${i === 0 ? 'text-xl' : 'text-sm'}`}>
                        ${tier.unitPrice.toFixed(2)}
                        <span className={`text-[9px] font-bold tracking-wider ml-1 ${i === 0 ? 'text-[#666]' : 'text-[#444]'}`}>/unit</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MOQ + Lead time */}
              <div className="flex gap-6 mb-6 pt-4 border-t border-[#111]">
                <div>
                  <div className="text-[9px] text-[#555] font-black uppercase tracking-[0.2em] mb-1">{t('productDetail.moq')}</div>
                  <div className="text-lg font-black text-white">{product.moq.toLocaleString()} <span className="text-xs text-[#555]">{t('productDetail.units')}</span></div>
                </div>
                <div>
                  <div className="text-[9px] text-[#555] font-black uppercase tracking-[0.2em] mb-1">{t('productDetail.leadTime')}</div>
                  <div className="text-sm font-black text-white">
                    {t('productDetail.standardDelivery', { days: product.leadTime.standard })}
                  </div>
                  <div className="text-[10px] text-[#555] font-bold">
                    {t('productDetail.customDelivery', { days: product.leadTime.custom })}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3">
                <Link
                  href="/contact"
                  className="flex-1 py-4 bg-white hover:bg-[#e5e5e5] text-black font-black uppercase tracking-widest text-center transition-colors text-[10px]"
                >
                  {t('productDetail.contactWholesale')}
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 py-4 bg-transparent border border-[#333] hover:border-white text-white font-bold uppercase tracking-widest text-center transition-colors text-[10px]"
                >
                  {t('productDetail.requestSample')}
                </Link>
              </div>
            </div>

            {/* Cert badges */}
            <div className="flex flex-wrap gap-2">
              {product.compliance.certifications.map(c => (
                <span key={c} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0a0a0a] border border-[#1a1a1a] text-[#666] text-[9px] font-bold tracking-widest uppercase">
                  <ShieldCheck className="w-2.5 h-2.5 text-[#d4af37]" /> {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── 3D Viewer ── */}
        {product.viewer3dUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-24"
          >
            <a
              href={product.viewer3dUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-5 border border-[#1a1a1a] bg-[#050505] hover:border-[#333] transition-colors group w-full sm:w-auto sm:inline-flex"
            >
              <Box className="w-5 h-5 flex-shrink-0" style={{ color: seriesColor }} />
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white">{t('productDetail.threeDView')}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#444] group-hover:text-white transition-colors ml-auto sm:ml-4" />
            </a>
          </motion.div>
        )}

        {/* ── Specs / Compatibility / Compliance ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {/* Specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
            className="bg-[#050505] border border-[#1a1a1a] p-8"
          >
            <h2 className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-7 flex items-center gap-3">
              <Zap className="w-4 h-4 text-[#d4af37]" />
              {t('productDetail.specs')}
            </h2>
            {specRows.length > 0 ? (
              <div>
                {specRows.map(({ label, value }) => (
                  <div key={label} className="flex justify-between py-3.5 border-b border-[#111] last:border-0">
                    <span className="text-[10px] text-[#555] font-bold uppercase tracking-wider">{label}</span>
                    <span className="text-[10px] text-white font-black text-right max-w-[55%]">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-[#444]">—</p>
            )}
          </motion.div>

          {/* Compatibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-[#050505] border border-[#1a1a1a] p-8"
          >
            <h2 className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-7 flex items-center gap-3">
              <Package className="w-4 h-4 text-[#d4af37]" />
              {t('productDetail.compatibility')}
            </h2>
            {product.compatibleWith.length > 0 ? (
              <div className="space-y-2">
                {product.compatibleWith.map(slug => (
                  <Link
                    key={slug}
                    href={`/products/${slug}`}
                    className="flex items-center gap-3 p-4 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#333] transition-colors group"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#333] flex-shrink-0 group-hover:text-white transition-colors" />
                    <span className="text-[10px] font-bold text-[#666] group-hover:text-white uppercase tracking-widest transition-colors">{slug.replace(/-/g, ' ')}</span>
                    <ArrowRight className="w-3 h-3 text-[#333] ml-auto group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-[10px] font-medium text-[#444]">{t('productDetail.noCompatible')}</p>
            )}
            <Link href="/compatibility" className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#555] hover:text-white transition-colors">
              <ExternalLink className="w-3 h-3" />
              {t('productDetail.fullCompatibilityCheck')}
            </Link>
          </motion.div>

          {/* Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="bg-[#050505] border border-[#1a1a1a] p-8"
          >
            <h2 className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-7 flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              {t('productDetail.compliance')}
            </h2>
            <div className="mb-6">
              <div className="text-[9px] text-[#555] font-black uppercase tracking-[0.2em] mb-3">{t('productDetail.certifiedRegions')}</div>
              <div className="flex flex-wrap gap-1.5">
                {product.compliance.regions.map(r => (
                  <span key={r} className="px-2.5 py-1 text-[9px] font-bold bg-[#0a0a0a] border border-[#1a1a1a] text-[#777] uppercase tracking-widest">
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <div className="text-[9px] text-[#555] font-black uppercase tracking-[0.2em] mb-3">{t('productDetail.certifications')}</div>
              <div className="flex flex-wrap gap-1.5">
                {product.compliance.certifications.map(c => (
                  <span key={c} className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest bg-white text-black">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-[#0a0a0a] border-l-2 border-[#d4af37]">
              <p className="text-[9px] text-[#666] font-bold leading-relaxed uppercase tracking-wider">
                <strong className="text-[#aaa] mr-1">WARNING:</strong>
                {t('productDetail.nicotineWarning')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Order section ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-24 p-8 lg:p-12 border border-[#1a1a1a] bg-[#050505]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-4 h-4" style={{ color: seriesColor }} />
                <h2 className="text-[11px] font-black text-white uppercase tracking-[0.2em]">{t('productDetail.wholesalePricingTitle')}</h2>
              </div>
              <div className="overflow-hidden border border-[#1a1a1a]">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[#1a1a1a]">
                      <th className="px-5 py-3 text-[9px] font-black text-[#555] uppercase tracking-[0.2em]">{t('productDetail.tableQty')}</th>
                      <th className="px-5 py-3 text-[9px] font-black text-[#555] uppercase tracking-[0.2em]">{t('productDetail.tableUnitPrice')}</th>
                      <th className="px-5 py-3 text-[9px] font-black text-[#555] uppercase tracking-[0.2em]">{t('productDetail.tableSavings')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.pricing.wholesaleTiers.map((tier, i) => {
                      const basePrice = product.pricing.wholesaleTiers[0]?.unitPrice ?? tier.unitPrice
                      const saving = i === 0 ? 0 : Math.round((1 - tier.unitPrice / basePrice) * 100)
                      return (
                        <tr key={i} className={`border-b border-[#0d0d0d] last:border-0 ${i === 0 ? 'bg-[#0d0d0d]' : ''}`}>
                          <td className="px-5 py-4 text-[11px] font-bold text-[#888]">
                            {tier.minQty.toLocaleString()}{tier.maxQty ? `–${tier.maxQty.toLocaleString()}` : '+'}
                          </td>
                          <td className="px-5 py-4">
                            <span className={`font-black ${i === 0 ? 'text-white text-base' : 'text-[#aaa] text-sm'}`}>${tier.unitPrice.toFixed(2)}</span>
                            <span className="text-[9px] text-[#444] ml-1">/unit</span>
                          </td>
                          <td className="px-5 py-4">
                            {saving > 0 ? (
                              <span className="px-2 py-0.5 bg-[#d4af3722] text-[#d4af37] text-[9px] font-black tracking-wider">
                                {t('productDetail.save')} {saving}%
                              </span>
                            ) : (
                              <span className="text-[9px] text-[#333]">{t('productDetail.base')}</span>
                            )}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-4 h-4" style={{ color: seriesColor }} />
                <h2 className="text-[11px] font-black text-white uppercase tracking-[0.2em]">{t('productDetail.leadTimeTitle')}</h2>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-4 border-b border-[#111]">
                  <span className="text-[10px] text-[#555] font-bold uppercase tracking-wider">{t('productDetail.moq')}</span>
                  <span className="text-sm font-black text-white">{product.moq.toLocaleString()} {t('productDetail.units')}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-[#111]">
                  <span className="text-[10px] text-[#555] font-bold uppercase tracking-wider">{t('productDetail.standardLeadTime')}</span>
                  <span className="text-sm font-black text-white">{product.leadTime.standard} {t('productDetail.days')}</span>
                </div>
                <div className="flex justify-between py-4 border-b border-[#111]">
                  <span className="text-[10px] text-[#555] font-bold uppercase tracking-wider">{t('productDetail.customOEM')}</span>
                  <span className="text-sm font-black text-white">{product.leadTime.custom} {t('productDetail.days')}</span>
                </div>
                <div className="flex justify-between py-4">
                  <span className="text-[10px] text-[#555] font-bold uppercase tracking-wider">{t('productDetail.retailPriceMSRP')}</span>
                  <span className="text-sm font-black text-[#888]">${product.pricing.retailPrice.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="w-full py-4 bg-white hover:bg-[#e8e8e8] text-black font-black uppercase tracking-[0.2em] text-center transition-colors text-[10px]"
                >
                  {t('productDetail.contactWholesale')}
                </Link>
                <Link
                  href="/contact"
                  className="w-full py-4 border border-[#222] hover:border-white text-[#888] hover:text-white font-bold uppercase tracking-[0.2em] text-center transition-colors text-[10px]"
                >
                  {t('productDetail.requestSample')}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Related Products ── */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="pt-16 border-t border-[#1a1a1a]"
          >
            <h2 className="text-xl font-black text-white uppercase tracking-tight mb-8">{t('productDetail.relatedProducts')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.slice(0, 4).map(r => {
                const rColor = SERIES_COLOR[r.series] ?? '#ffffff'
                const rPrice = r.pricing.wholesaleTiers[0]?.unitPrice ?? 0
                return (
                  <Link
                    key={r.id}
                    href={`/products/${r.slug}`}
                    className="group p-6 bg-[#050505] border border-[#1a1a1a] hover:border-[#333] transition-colors"
                  >
                    <div className="aspect-square bg-[#0a0a0a] mb-5 flex items-center justify-center overflow-hidden">
                      <div
                        className="w-14 h-14 flex items-center justify-center text-xs font-black border transition-transform duration-500 group-hover:scale-110"
                        style={{ color: rColor, borderColor: `${rColor}33` }}
                      >
                        {r.modelNumber.split('-').pop()}
                      </div>
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] mb-1.5 text-[#555]">{r.series} {t('productDetail.seriesSuffix')}</div>
                    <div className="text-sm font-black text-white mb-4 line-clamp-1 uppercase tracking-tight">{r.name[lang]}</div>
                    <div className="text-[9px] font-bold text-[#444] tracking-widest uppercase">
                      {t('productDetail.from')} <span className="text-[#aaa] text-sm font-black ml-1">${rPrice.toFixed(2)}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
