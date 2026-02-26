'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ShieldCheck, ArrowRight, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'

const CERTIFICATIONS = [
  { name: 'CE', region: 'European Union', color: '#ffffff' },
  { name: 'FCC', region: 'United States', color: '#ffffff' },
  { name: 'TPD', region: 'EU / UK', color: '#ffffff' },
  { name: 'ROHS', region: 'Global', color: '#ffffff' },
  { name: 'UN38.3', region: 'Battery Safety', color: '#ffffff' },
  { name: 'PMTA', region: 'United States', color: '#d4af37' },
]

const MARKETS = [
  { code: 'US', name: 'United States', flag: 'US', certs: ['FCC', 'PMTA'] },
  { code: 'EU', name: 'European Union', flag: 'EU', certs: ['CE', 'TPD', 'ROHS'] },
  { code: 'UK', name: 'United Kingdom', flag: 'UK', certs: ['CE', 'TPD'] },
  { code: 'AU', name: 'Australia', flag: 'AU', certs: ['CE', 'TGA'] },
  { code: 'CA', name: 'Canada', flag: 'CA', certs: ['FCC', 'TVPA'] },
  { code: 'JP', name: 'Japan', flag: 'JP', certs: ['CE', 'ROHS'] },
]

export default function ComplianceSection() {
  const { t } = useTranslation()

  return (
    <section className="py-32 bg-[#050505] border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#00ff66]" />
              <span className="text-[10px] font-bold text-[#888] tracking-[0.2em] uppercase">{t('compliance.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">{t('compliance.title')}</h2>
            <p className="text-[#666] max-w-2xl mx-auto text-sm md:text-base font-medium">{t('compliance.subtitle')}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-sm font-black text-white uppercase tracking-widest">
                {t('compliance.certifications')}
              </h3>
              <div className="h-px flex-1 bg-[#1a1a1a]" />
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name}
                  className="flex flex-col items-center justify-center p-6 bg-black border border-[#1a1a1a] hover:border-[#333] transition-colors group"
                >
                  <div className="text-3xl font-black mb-2 tracking-tighter transition-colors" style={{ color: cert.color }}>
                    {cert.name}
                  </div>
                  <div className="text-[10px] text-[#666] text-center font-bold tracking-widest uppercase group-hover:text-[#888] transition-colors">{cert.region}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Markets */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-sm font-black text-white uppercase tracking-widest">
                {t('compliance.regions')}
              </h3>
              <div className="h-px flex-1 bg-[#1a1a1a]" />
            </div>

            <div className="space-y-3">
              {MARKETS.map((market) => (
                <div
                  key={market.code}
                  className="flex items-center justify-between p-4 bg-black border border-[#1a1a1a] hover:border-[#333] transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#111] flex items-center justify-center text-[#444] font-black text-sm tracking-widest group-hover:text-white transition-colors">
                      {market.flag}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white uppercase tracking-wider">{market.name}</div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-1.5 h-1.5 bg-[#00ff66]" />
                        <span className="text-[10px] font-bold text-[#666] tracking-widest uppercase">{t('compliance.compliant')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {market.certs.map((c) => (
                      <span
                        key={c}
                        className="px-2 py-1 text-[10px] font-black bg-[#111] text-[#888] tracking-widest"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Warning + CTA row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1 flex items-start gap-4 max-w-3xl">
            <AlertTriangle className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
            <p className="text-xs text-[#666] leading-relaxed font-medium uppercase tracking-wide">
              <strong className="text-white">WARNING:</strong> {t('compliance.nicotineWarning')}
              <span className="ml-2 block mt-1 sm:inline sm:mt-0">{t('compliance.ageWarning')}</span>
            </p>
          </div>
          <Link
            href="/compliance"
            className="flex-shrink-0 inline-flex items-center justify-center px-8 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-[#e5e5e5] transition-colors"
          >
            {t('compliance.viewFull')} <ArrowRight className="w-4 h-4 ml-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
