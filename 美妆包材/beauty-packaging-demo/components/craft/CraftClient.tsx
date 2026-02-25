'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const processKeys = [
  'silkscreen', 'hotStamping', 'electroplating', 'uvTransfer',
  'spraying', 'laser', 'padPrinting', 'shrinkSleeve',
] as const

type ProcessKey = typeof processKeys[number]

const processImages: Record<ProcessKey, string[]> = {
  silkscreen:    ['/craft/silkscreen.jpg',    '/craft/silkscreen-2.jpg',    '/craft/silkscreen-3.jpg'],
  hotStamping:   ['/craft/hotStamping.jpg',   '/craft/hotStamping-2.jpg',   '/craft/hotStamping-3.jpg'],
  electroplating:['/craft/electroplating.jpg','/craft/electroplating-2.jpg','/craft/electroplating-3.jpg'],
  uvTransfer:    ['/craft/uvTransfer.jpg',    '/craft/uvTransfer-2.jpg',    '/craft/uvTransfer-3.jpg'],
  spraying:      ['/craft/spraying.jpg',      '/craft/spraying-2.jpg',      '/craft/spraying-3.jpg'],
  laser:         ['/craft/laser.jpg',         '/craft/laser-2.jpg',         '/craft/laser-3.jpg'],
  padPrinting:   ['/craft/padPrinting.jpg',   '/craft/padPrinting-2.jpg',   '/craft/padPrinting-3.jpg'],
  shrinkSleeve:  ['/craft/shrinkSleeve.jpg',  '/craft/shrinkSleeve-2.jpg',  '/craft/shrinkSleeve-3.jpg'],
}

const comparisonData = [
  { process: 'silkscreen',    effect: 4, durability: 4, moq: 500,  leadTime: 3, bestFor: 'logo/图案' },
  { process: 'hotStamping',   effect: 5, durability: 4, moq: 1000, leadTime: 3, bestFor: '奢华品牌' },
  { process: 'electroplating',effect: 5, durability: 5, moq: 500,  leadTime: 5, bestFor: '金属质感' },
  { process: 'uvTransfer',    effect: 4, durability: 4, moq: 1000, leadTime: 5, bestFor: '特殊纹理' },
  { process: 'spraying',      effect: 4, durability: 4, moq: 500,  leadTime: 3, bestFor: '颜色定制' },
  { process: 'laser',         effect: 5, durability: 5, moq: 200,  leadTime: 2, bestFor: '限量版'   },
  { process: 'padPrinting',   effect: 3, durability: 3, moq: 500,  leadTime: 2, bestFor: '异形瓶体' },
  { process: 'shrinkSleeve',  effect: 4, durability: 3, moq: 1000, leadTime: 5, bestFor: '全身图案' },
]

const comparisonDataEn = [
  { process: 'silkscreen',    effect: 4, durability: 4, moq: 500,  leadTime: 3, bestFor: 'Logo / Artwork'   },
  { process: 'hotStamping',   effect: 5, durability: 4, moq: 1000, leadTime: 3, bestFor: 'Luxury Brands'    },
  { process: 'electroplating',effect: 5, durability: 5, moq: 500,  leadTime: 5, bestFor: 'Metal Finish'     },
  { process: 'uvTransfer',    effect: 4, durability: 4, moq: 1000, leadTime: 5, bestFor: 'Special Texture'  },
  { process: 'spraying',      effect: 4, durability: 4, moq: 500,  leadTime: 3, bestFor: 'Color Custom'     },
  { process: 'laser',         effect: 5, durability: 5, moq: 200,  leadTime: 2, bestFor: 'Limited Edition'  },
  { process: 'padPrinting',   effect: 3, durability: 3, moq: 500,  leadTime: 2, bestFor: 'Irregular Shapes' },
  { process: 'shrinkSleeve',  effect: 4, durability: 3, moq: 1000, leadTime: 5, bestFor: 'Full-body Art'    },
]

export default function CraftClient() {
  const { t, i18n } = useTranslation()
  const isZh = i18n.language === 'zh'
  const tableData = isZh ? comparisonData : comparisonDataEn

  const [active, setActive] = useState<ProcessKey>('silkscreen')
  const [imgIndex, setImgIndex] = useState(0)

  const images = processImages[active]
  const activeData = tableData.find(d => d.process === active)!

  function switchProcess(key: ProcessKey) {
    setActive(key)
    setImgIndex(0)
  }

  function prevImg() {
    setImgIndex(i => (i - 1 + images.length) % images.length)
  }
  function nextImg() {
    setImgIndex(i => (i + 1) % images.length)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ── COMPACT PAGE HEADER ── */}
      <section className="bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-medium mb-3">
              {t('craft.hero.badge')}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-lg">
              {t('craft.hero.title')}
            </h1>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c9a96e] text-stone-900 font-semibold rounded-full text-sm hover:bg-[#b8924f] transition-colors">
              {t('craft.cta.button')} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-600 text-stone-300 font-semibold rounded-full text-sm hover:border-stone-400 hover:text-white transition-colors">
              {t('home.process.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS EXPLORER ── */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section label */}
          <div className="pt-12 pb-6">
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-medium mb-2">
              {t('craft.intro.subtitle')}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">{t('craft.intro.title')}</h2>
          </div>

          {/* ── TAB BAR (like the reference) ── */}
          <div className="border-b border-stone-200 mb-0">
            <div className="flex overflow-x-auto scrollbar-hide">
              {processKeys.map((key) => {
                const isActive = active === key
                return (
                  <button
                    key={key}
                    onClick={() => switchProcess(key)}
                    className={cn(
                      'relative flex-shrink-0 px-6 py-4 text-sm font-medium transition-all duration-200 whitespace-nowrap',
                      isActive
                        ? 'text-white'
                        : 'text-stone-500 hover:text-stone-800'
                    )}
                  >
                    {/* active background pill */}
                    {isActive && (
                      <span className="absolute inset-x-2 inset-y-2 rounded-md bg-stone-900" />
                    )}
                    <span className="relative">{t(`craft.processes.${key}.name`)}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ── CONTENT: left text / right image (ref layout) ── */}
          <div className="py-10 lg:py-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

            {/* LEFT — text */}
            <div className="lg:w-72 xl:w-80 flex-shrink-0">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">
                {t(`craft.processes.${active}.name`)}{isZh ? '工艺' : ''}
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-stone-900 mb-1">
                    {isZh ? '工艺说明' : 'About'}
                  </p>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {t(`craft.processes.${active}.desc`)}
                  </p>
                </div>

                <div className="pt-2">
                  <p className="text-sm font-semibold text-stone-900 mb-1">
                    {isZh ? '工艺规格' : 'Specifications'}
                  </p>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {t(`craft.processes.${active}.specs`)}
                  </p>
                </div>
              </div>

              {/* mini stats */}
              <div className="mt-8 pt-6 border-t border-stone-100 space-y-3">
                {[
                  { label: isZh ? '视觉效果' : 'Visual Effect', value: activeData.effect },
                  { label: isZh ? '工艺耐久' : 'Durability',    value: activeData.durability },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="text-xs text-stone-400 w-16 flex-shrink-0">{label}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <div key={j} className={cn(
                          'w-5 h-1.5 rounded-full transition-colors duration-300',
                          j < value ? 'bg-[#c9a96e]' : 'bg-stone-100'
                        )} />
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-3 pt-1">
                  <span className="text-xs text-stone-400 w-16 flex-shrink-0">
                    {isZh ? '交货期' : 'Lead Time'}
                  </span>
                  <span className="text-sm font-semibold text-stone-700">
                    {activeData.leadTime}{isZh ? ' 天' : ' days'}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — image carousel */}
            <div className="flex-1 relative group">
              {/* image frame */}
              <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden bg-stone-100">
                {/* placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-50" />
                <img
                  key={`${active}-${imgIndex}`}
                  src={images[imgIndex]}
                  alt={t(`craft.processes.${active}.name`)}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
                />
              </div>

              {/* prev / next arrows — like the reference site */}
              <button
                onClick={prevImg}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6
                           w-10 h-10 rounded-full bg-white border border-stone-200 shadow-md
                           flex items-center justify-center text-stone-600
                           hover:border-stone-300 hover:text-stone-900 transition-all duration-200"
                aria-label="previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6
                           w-10 h-10 rounded-full bg-white border border-stone-200 shadow-md
                           flex items-center justify-center text-stone-600
                           hover:border-stone-300 hover:text-stone-900 transition-all duration-200"
                aria-label="next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* dot indicators */}
              <div className="flex gap-2 justify-center mt-5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all duration-200',
                      i === imgIndex ? 'bg-stone-900 w-5' : 'bg-stone-300 hover:bg-stone-400'
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-20 bg-stone-50 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-medium mb-3">
              {t('craft.comparison.subtitle')}
            </p>
            <h2 className="text-3xl font-bold text-stone-900">{t('craft.comparison.title')}</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-100">
                  {(['process', 'effect', 'durability', 'moq', 'leadTime', 'bestFor'] as const).map((col) => (
                    <th key={col} className="px-6 py-4 text-left text-xs font-bold text-stone-400 uppercase tracking-wider whitespace-nowrap">
                      {t(`craft.comparison.headers.${col}`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr
                    key={row.process}
                    onClick={() => switchProcess(row.process as ProcessKey)}
                    className={cn(
                      'border-b border-stone-50 cursor-pointer transition-colors duration-150',
                      active === row.process ? 'bg-stone-900' : 'hover:bg-stone-50'
                    )}
                  >
                    <td className={cn('px-6 py-4 font-semibold', active === row.process ? 'text-white' : 'text-stone-900')}>
                      {t(`craft.processes.${row.process}.name`)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => (
                          <div key={j} className={cn('w-2 h-2 rounded-full',
                            j < row.effect
                              ? (active === row.process ? 'bg-[#c9a96e]' : 'bg-stone-600')
                              : 'bg-stone-100'
                          )} />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => (
                          <div key={j} className={cn('w-2 h-2 rounded-full',
                            j < row.durability
                              ? (active === row.process ? 'bg-[#c9a96e]' : 'bg-stone-600')
                              : 'bg-stone-100'
                          )} />
                        ))}
                      </div>
                    </td>
                    <td className={cn('px-6 py-4 tabular-nums', active === row.process ? 'text-stone-300' : 'text-stone-500')}>{row.moq}</td>
                    <td className={cn('px-6 py-4 tabular-nums', active === row.process ? 'text-stone-300' : 'text-stone-500')}>{row.leadTime}{isZh ? '天' : 'd'}</td>
                    <td className={cn('px-6 py-4', active === row.process ? 'text-[#c9a96e]' : 'text-stone-500')}>{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse 50% 80% at 50% 100%, #c9a96e, transparent)' }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-[#c9a96e]/30 bg-[#c9a96e]/5 mb-8">
            <CheckCircle2 className="w-7 h-7 text-[#c9a96e]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('craft.cta.title')}</h2>
          <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">{t('craft.cta.subtitle')}</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a96e] text-stone-900 font-semibold rounded-full hover:bg-[#b8924f] transition-colors">
            {t('craft.cta.button')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}
