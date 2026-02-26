'use client'

import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { CheckCircle2, XCircle, Zap, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { VapeProduct } from '@/types'

const SERIES_COLOR: Record<string, string> = {
  velo: '#cccccc',
  apex: '#d4af37',
  flux: '#999999',
  core: '#ffffff',
}

interface Props {
  deviceProducts: VapeProduct[]
  podProducts: VapeProduct[]
}

export default function CompatibilityClient({ deviceProducts, podProducts }: Props) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'zh' ? 'zh' : 'en'
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null)
  const [selectedPod, setSelectedPod] = useState<string | null>(null)

  // Build compatibility matrix from real product data (compatibleWith slugs)
  const compatibilityMatrix = useMemo(() => {
    const matrix: Record<string, string[]> = {}
    deviceProducts.forEach((device) => {
      // A device is compatible with a pod if the pod's slug appears in device.compatibleWith
      // OR if the device's slug appears in the pod's compatibleWith
      const compatPodSlugs = podProducts
        .filter(
          (pod) =>
            device.compatibleWith.includes(pod.slug) ||
            pod.compatibleWith.includes(device.slug)
        )
        .map((pod) => pod.slug)
      matrix[device.slug] = compatPodSlugs
    })
    return matrix
  }, [deviceProducts, podProducts])

  const compatiblePodSlugs = selectedDevice ? compatibilityMatrix[selectedDevice] ?? [] : []
  const compatibleDeviceSlugs = selectedPod
    ? Object.entries(compatibilityMatrix)
        .filter(([, podSlugs]) => podSlugs.includes(selectedPod))
        .map(([deviceSlug]) => deviceSlug)
    : []

  const isDeviceCompatible = (slug: string) => {
    if (!selectedPod) return null
    return compatibleDeviceSlugs.includes(slug)
  }

  const isPodCompatible = (slug: string) => {
    if (!selectedDevice) return null
    return compatiblePodSlugs.includes(slug)
  }

  return (
    <div className="min-h-screen bg-black pb-24 pt-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#333] bg-[#111] mb-6">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[10px] font-bold text-[#888] tracking-[0.2em] uppercase">{t('compatibility.badge')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">{t('compatibility.title')}</h1>
          <p className="text-sm md:text-base text-[#888] font-medium tracking-wide max-w-2xl mx-auto uppercase">{t('compatibility.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Devices column */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-8 border border-[#333] flex items-center justify-center text-[#d4af37] text-sm font-black flex-shrink-0">1</div>
              <div>
                <h2 className="text-lg font-black text-white uppercase tracking-tight">{t('compatibility.deviceStep')}</h2>
                <p className="text-[10px] font-bold text-[#666] tracking-widest uppercase mt-1">{t('compatibility.deviceStepDesc')}</p>
              </div>
            </div>

            <div className="space-y-4">
              {deviceProducts.map((device) => {
                const compat = isDeviceCompatible(device.slug)
                const isSelected = selectedDevice === device.slug
                const sColor = SERIES_COLOR[device.series] ?? '#ffffff'
                const fromPrice = device.pricing.wholesaleTiers[0]?.unitPrice
                return (
                  <button
                    key={device.slug}
                    onClick={() => setSelectedDevice(isSelected ? null : device.slug)}
                    className={`w-full flex items-center justify-between p-6 bg-[#050505] border transition-all text-left group ${
                      compat === false ? 'opacity-40 grayscale' : 'hover:border-[#333]'
                    }`}
                    style={isSelected
                      ? { borderColor: sColor, backgroundColor: '#111' }
                      : compat === true
                      ? { borderColor: '#d4af37', backgroundColor: 'rgba(212,175,55,0.05)' }
                      : { borderColor: '#1a1a1a' }
                    }
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black border border-[#222] flex items-center justify-center flex-shrink-0 group-hover:border-white transition-colors">
                        <span className="text-xl grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">📱</span>
                      </div>
                      <div>
                        <div className="text-sm font-black text-white uppercase tracking-tight mb-1">{device.name[lang]}</div>
                        <div className="text-[10px] font-bold tracking-widest uppercase" style={{ color: sColor }}>
                          {device.series} series
                          {fromPrice && <span className="text-[#666] ml-2">from ${fromPrice.toFixed(2)}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {compat === true && <CheckCircle2 className="w-5 h-5 text-[#d4af37]" />}
                      {compat === false && <XCircle className="w-5 h-5 text-[#444]" />}
                      {isSelected && <div className="w-2.5 h-2.5 bg-white" />}
                    </div>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Pods column */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-8 border border-[#333] flex items-center justify-center text-[#d4af37] text-sm font-black flex-shrink-0">2</div>
              <div>
                <h2 className="text-lg font-black text-white uppercase tracking-tight">{t('compatibility.podStep')}</h2>
                <p className="text-[10px] font-bold text-[#666] tracking-widest uppercase mt-1">{t('compatibility.podStepDesc')}</p>
              </div>
            </div>

            <div className="space-y-4">
              {podProducts.map((pod) => {
                const compat = isPodCompatible(pod.slug)
                const isSelected = selectedPod === pod.slug
                const sColor = SERIES_COLOR[pod.series] ?? '#ffffff'
                const nicotineStrengths = pod.specs.nicotineStrengths
                const nicotineLabel = nicotineStrengths && nicotineStrengths.length > 0
                  ? nicotineStrengths.map((n) => `${n}mg`).join(' / ')
                  : 'Freebase'
                const fromPrice = pod.pricing.wholesaleTiers[0]?.unitPrice
                return (
                  <button
                    key={pod.slug}
                    onClick={() => setSelectedPod(isSelected ? null : pod.slug)}
                    className={`w-full flex items-center justify-between p-6 bg-[#050505] border transition-all text-left group ${
                      compat === false ? 'opacity-40 grayscale' : 'hover:border-[#333]'
                    }`}
                    style={isSelected
                      ? { borderColor: sColor, backgroundColor: '#111' }
                      : compat === true
                      ? { borderColor: '#d4af37', backgroundColor: 'rgba(212,175,55,0.05)' }
                      : { borderColor: '#1a1a1a' }
                    }
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black border border-[#222] flex items-center justify-center flex-shrink-0 group-hover:border-white transition-colors">
                        <span className="text-xl grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">💧</span>
                      </div>
                      <div>
                        <div className="text-sm font-black text-white uppercase tracking-tight mb-1">{pod.name[lang]}</div>
                        <div className="text-[10px] font-bold tracking-widest uppercase text-[#666]">
                          {nicotineLabel}
                          {fromPrice && <span className="ml-2">from ${fromPrice.toFixed(2)}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {compat === true && <CheckCircle2 className="w-5 h-5 text-[#d4af37]" />}
                      {compat === false && <XCircle className="w-5 h-5 text-[#444]" />}
                      {isSelected && <div className="w-2.5 h-2.5 bg-white" />}
                    </div>
                  </button>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Result card */}
        {selectedDevice && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="mt-16 p-10 bg-[#050505] border border-[#1a1a1a]"
          >
            <h3 className="text-lg font-black text-white uppercase tracking-tight mb-8">
              {t('compatibility.compatiblePods')} <span className="text-[#666] ml-2">({compatiblePodSlugs.length})</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {podProducts
                .filter((p) => compatiblePodSlugs.includes(p.slug))
                .map((p) => {
                  const nicotineStrengths = p.specs.nicotineStrengths
                  const nicotineLabel = nicotineStrengths && nicotineStrengths.length > 0
                    ? nicotineStrengths.map((n) => `${n}mg`).join(' / ')
                    : 'Freebase'
                  return (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="flex flex-col p-6 bg-black border border-[#222] hover:border-white transition-colors group"
                    >
                      <div className="text-sm font-black text-white mb-2 line-clamp-2 uppercase tracking-tight">{p.name[lang]}</div>
                      <div className="text-[10px] font-bold text-[#666] uppercase tracking-widest mb-6">{nicotineLabel}</div>
                      <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#d4af37] mt-auto">
                        View <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  )
                })}
              {compatiblePodSlugs.length === 0 && (
                <p className="col-span-full text-sm font-medium text-[#666]">{t('compatibility.noSelection')}</p>
              )}
            </div>
          </motion.div>
        )}

        {/* NEXVAP info banner */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-16 p-8 bg-[#050505] border-l-2 border-[#d4af37]"
        >
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-black border border-[#222] flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-2">Powered by NEXVAP Compatibility Engine</h3>
              <p className="text-xs text-[#888] font-medium leading-relaxed uppercase tracking-wider">
                {t('compatibility.description')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
