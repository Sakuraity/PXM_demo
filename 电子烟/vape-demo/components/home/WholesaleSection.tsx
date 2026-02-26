'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Package, Clock, Headphones, Tag } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WholesaleSection() {
  const { t } = useTranslation()

  const benefits = [
    { text: t('wholesale.benefit1') },
    { text: t('wholesale.benefit2') },
    { text: t('wholesale.benefit3') },
    { text: t('wholesale.benefit4') },
  ]

  const stats = [
    { icon: Package, label: t('wholesale.moqLabel'), value: t('wholesale.moqValue') },
    { icon: Clock, label: t('wholesale.deliveryLabel'), value: t('wholesale.deliveryValue') },
    { icon: Headphones, label: t('wholesale.supportLabel'), value: t('wholesale.supportValue') },
    { icon: Tag, label: t('wholesale.skusLabel'), value: t('wholesale.skusValue') },
  ]

  return (
    <section className="py-32 bg-[#000000] relative overflow-hidden border-t border-[#1a1a1a]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#333] bg-[#111] mb-8">
              <span className="w-1.5 h-1.5 bg-white" />
              <span className="text-[10px] font-bold text-[#888] tracking-[0.2em] uppercase">{t('wholesale.badge')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-6">{t('wholesale.title')}</h2>
            <p className="text-[#888] font-medium leading-relaxed mb-12 max-w-lg text-lg">{t('wholesale.subtitle')}</p>

            {/* Benefits */}
            <ul className="space-y-6 mb-12">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded bg-[#111] border border-[#333] flex items-center justify-center flex-shrink-0 group-hover:border-white group-hover:bg-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-[#666] group-hover:bg-black transition-colors duration-300" />
                  </div>
                  <span className="text-base font-bold text-[#a3a3a3] group-hover:text-white transition-colors duration-300 uppercase tracking-wide">{b.text}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-[#e5e5e5] transition-colors"
            >
              {t('wholesale.cta')}
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </motion.div>

          {/* Right — Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#050505] border border-[#1a1a1a] p-10 lg:p-12">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">{t('wholesale.programTitle')}</h3>
              <p className="text-[#666] font-medium mb-10">{t('wholesale.programSubtitle')}</p>

              <div className="space-y-0">
                {stats.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center justify-between py-6 border-b border-[#1a1a1a] last:border-0 group hover:border-[#333] transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black border border-[#222] flex items-center justify-center group-hover:border-white transition-colors">
                        <Icon className="w-5 h-5 text-[#666] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-bold text-[#888] uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
                    </div>
                    <span className="text-xl font-black text-white">{value}</span>
                  </div>
                ))}
              </div>

              {/* Partner count */}
              <div className="mt-10 p-8 bg-black border border-[#222] text-center group hover:border-white transition-colors">
                <div className="text-5xl font-black text-white mb-2 tracking-tighter group-hover:scale-105 transition-transform duration-500">500+</div>
                <div className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] group-hover:text-white transition-colors">{t('wholesale.partnersLabel')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
