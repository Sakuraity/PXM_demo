'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, AlertTriangle, ArrowRight, ChevronDown, FileText } from 'lucide-react'
import type { ComplianceRegionDetail } from '@/types'

interface Props {
  regions: ComplianceRegionDetail[]
}

const REGION_COLOR: Record<string, string> = {
  US: '#ffffff',
  EU: '#d4af37',
  UK: '#cccccc',
  AU: '#999999',
  CA: '#cccccc',
  JP: '#888888',
}

const REGION_FLAG: Record<string, string> = {
  US: 'US',
  EU: 'EU',
  UK: 'UK',
  AU: 'AU',
  CA: 'CA',
  JP: 'JP',
}

const ALL_CERTS = ['CE', 'FCC', 'TPD', 'ROHS', 'UN38.3', 'PMTA', 'TGA', 'TRPR']

export default function ComplianceClient({ regions }: Props) {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language === 'zh' ? 'zh' : 'en') as 'zh' | 'en'
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-black pb-24 pt-20">

      {/* Hero */}
      <section className="relative py-24 border-b border-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-8">
              <ShieldCheck className="w-4 h-4 text-[#00ff66]" />
              <span className="text-[10px] font-bold text-[#888] tracking-[0.2em] uppercase">
                {t('compliance.badge')}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              {t('compliance.title')}
            </h1>
            <p className="text-base md:text-lg text-[#888] font-medium max-w-2xl mx-auto">
              {t('compliance.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cert badge strip */}
        <section className="py-16 border-b border-[#1a1a1a]">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-sm font-black text-white uppercase tracking-widest">{t('compliance.globalCerts')}</h2>
            <div className="h-px flex-1 bg-[#1a1a1a]" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {ALL_CERTS.map((cert, idx) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="flex flex-col items-center justify-center p-6 bg-[#050505] border border-[#1a1a1a] hover:border-[#333] transition-colors group"
              >
                <ShieldCheck className="w-5 h-5 text-[#444] mb-3 group-hover:text-[#d4af37] transition-colors" />
                <div className="text-lg font-black text-white tracking-tighter">{cert}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Region accordion */}
        <section className="py-16 border-b border-[#1a1a1a]">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-sm font-black text-white uppercase tracking-widest">{t('compliance.marketByMarket')}</h2>
            <div className="h-px flex-1 bg-[#1a1a1a]" />
          </div>

          <div className="space-y-3">
            {regions.map((region, idx) => {
              const color = REGION_COLOR[region.region] ?? '#ffffff'
              const flag = REGION_FLAG[region.region] ?? region.region
              const isOpen = expanded === region.region

              return (
                <motion.div
                  key={region.region}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  className="bg-[#050505] border border-[#1a1a1a] overflow-hidden"
                  style={isOpen ? { borderColor: `${color}40` } : {}}
                >
                  {/* Header row */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : region.region)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left group hover:bg-[#0a0a0a] transition-colors"
                  >
                    <div className="flex items-center gap-5">
                      <div
                        className="w-12 h-12 bg-black border flex items-center justify-center text-sm font-black flex-shrink-0 transition-colors"
                        style={{ borderColor: isOpen ? color : '#222', color: isOpen ? color : '#666' }}
                      >
                        {flag}
                      </div>
                      <div>
                        <div className="text-base font-black text-white uppercase tracking-tight">{region.name[lang]}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="w-1.5 h-1.5 bg-[#00ff66]" />
                          <span className="text-[10px] font-bold text-[#666] tracking-widest uppercase">{t('compliance.compliant')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      {/* Cert chips */}
                      <div className="hidden md:flex gap-2">
                        {region.certifications.map((c) => (
                          <span
                            key={c}
                            className="px-2 py-1 text-[9px] font-black bg-[#111] tracking-widest uppercase"
                            style={{ color: isOpen ? color : '#666' }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#666] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-8 border-t border-[#1a1a1a]">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            {/* Description */}
                            <div>
                              <div className="text-[10px] font-black text-[#666] uppercase tracking-[0.2em] mb-4">{t('compliance.overview')}</div>
                              <p className="text-sm text-[#a3a3a3] font-medium leading-relaxed">{region.description[lang]}</p>
                            </div>

                            {/* Notes + certs */}
                            <div className="space-y-6">
                              <div>
                                <div className="text-[10px] font-black text-[#666] uppercase tracking-[0.2em] mb-4">{t('compliance.keyRequirements')}</div>
                                <div className="p-4 bg-black border-l-2" style={{ borderColor: color }}>
                                  <p className="text-xs text-[#888] font-medium leading-relaxed uppercase tracking-wide">{region.notes[lang]}</p>
                                </div>
                              </div>

                              <div>
                                <div className="text-[10px] font-black text-[#666] uppercase tracking-[0.2em] mb-3">{t('compliance.certifications')}</div>
                                <div className="flex flex-wrap gap-2">
                                  {region.certifications.map((c) => (
                                    <span
                                      key={c}
                                      className="px-3 py-1.5 text-[10px] font-black bg-white text-black tracking-widest uppercase"
                                    >
                                      {c}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {region.documentUrl && (
                                <a
                                  href={region.documentUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#888] hover:text-white transition-colors group"
                                >
                                  <FileText className="w-4 h-4 group-hover:text-[#d4af37] transition-colors" />
                                  {t('compliance.downloadCert')}
                                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Warning + CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Warning */}
            <div className="flex items-start gap-5 p-8 bg-[#050505] border-l-2 border-[#d4af37]">
              <AlertTriangle className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-black text-white uppercase tracking-widest mb-3">{t('compliance.regulatoryWarning')}</div>
                <p className="text-xs text-[#888] font-medium leading-relaxed uppercase tracking-wide">
                  <strong className="text-white">{t('compliance.warningLabel')}</strong>{' '}
                  {t('compliance.nicotineWarning')}{' '}
                  {t('compliance.ageWarning')}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{t('compliance.needDocs')}</h3>
              <p className="text-sm text-[#888] font-medium leading-relaxed mb-8">
                {t('compliance.docsDesc')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-[#e5e5e5] transition-colors"
                >
                  {t('compliance.contactTeam')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-[#333] text-white font-bold uppercase tracking-widest hover:border-[#888] hover:bg-white/5 transition-colors"
                >
                  {t('compliance.viewProducts')}
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  )
}
