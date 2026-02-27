'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ArrowRight, ChevronRight, Layers } from 'lucide-react'

const DEVICE_POD_PAIRS = [
  {
    device: 'APEX ONE',
    series: 'APEX',
    seriesColor: '#d4af37',
    pods: ['FLUXPOD™ Mango Ice', 'FLUXPOD™ Cool Mint', 'FLUXPOD™ Classic Tobacco'],
  },
  {
    device: 'APEX PRO',
    series: 'APEX',
    seriesColor: '#d4af37',
    pods: ['FLUXPOD™ Lychee Berry', 'FLUXPOD™ Watermelon Frost'],
  },
  {
    device: 'FLUX ONE',
    series: 'FLUX',
    seriesColor: '#999999',
    pods: ['FLUX Coil MTL 1.0Ω', 'FLUX Coil RDL 0.6Ω'],
  },
]

export default function CompatibilitySection() {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-black border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Visual matrix */}
          <div className="bg-[#050505] border border-[#1a1a1a]">
            {/* Panel header */}
            <div className="flex items-center gap-4 px-8 py-6 border-b border-[#1a1a1a]">
              <div className="w-9 h-9 bg-black border border-[#222] flex items-center justify-center">
                <Layers className="w-4 h-4 text-[#d4af37]" />
              </div>
              <div>
                <div className="text-xs font-black text-white uppercase tracking-widest">{t('compatibility.matrixTitle')}</div>
                <div className="text-[10px] font-bold text-[#444] uppercase tracking-widest mt-0.5">{t('compatibility.matrixSubtitle')}</div>
              </div>
            </div>

            {/* Device rows */}
            <div className="divide-y divide-[#111]">
              {DEVICE_POD_PAIRS.map(({ device, series, seriesColor, pods }) => (
                <div key={device} className="px-8 py-6 hover:bg-[#0a0a0a] transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-1 h-1"
                      style={{ background: seriesColor }}
                    />
                    <span className="text-xs font-black text-white uppercase tracking-widest">{device}</span>
                    <span
                      className="text-[9px] font-black uppercase tracking-[0.2em] px-2 py-0.5"
                      style={{ color: seriesColor, border: `1px solid ${seriesColor}40` }}
                    >
                      {series}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-4">
                    {pods.map((pod) => (
                      <span
                        key={pod}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-black border border-[#222] text-[10px] font-bold text-[#888] uppercase tracking-wider hover:border-[#444] hover:text-white transition-colors"
                      >
                        <ChevronRight className="w-2.5 h-2.5 text-[#444]" />
                        {pod}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer stat */}
            <div className="flex items-center justify-between px-8 py-5 border-t border-[#1a1a1a]">
              <span className="text-[10px] font-bold text-[#444] uppercase tracking-widest">{t('compatibility.fullLineup')}</span>
              <Link
                href="/compatibility"
                className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1.5"
              >
                {t('compatibility.checkAll')}
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-[#d4af37]" />
              <span className="text-[10px] font-black text-[#d4af37] tracking-[0.25em] uppercase">
                {t('compatibility.title')}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
              {t('compatibility.visualTitle')}
            </h2>

            <p className="text-[#888] font-medium leading-relaxed mb-10 text-base">
              {t('compatibility.description')}
            </p>

            <div className="space-y-4 mb-12">
              {[
                { labelKey: 'compatibility.feature1Label', descKey: 'compatibility.feature1Desc' },
                { labelKey: 'compatibility.feature2Label', descKey: 'compatibility.feature2Desc' },
                { labelKey: 'compatibility.feature3Label', descKey: 'compatibility.feature3Desc' },
              ].map(({ labelKey, descKey }) => (
                <div key={labelKey} className="flex items-start gap-5">
                  <ChevronRight className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-black text-white uppercase tracking-widest">{t(labelKey)}</div>
                    <div className="text-xs text-[#666] font-medium mt-0.5">{t(descKey)}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/compatibility"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-[#e5e5e5] transition-colors"
            >
              {t('compatibility.checkNow').replace(' →', '')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
