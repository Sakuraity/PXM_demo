'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { ShieldCheck, Zap, Lightbulb, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  { key: 'value1', icon: Lightbulb },
  { key: 'value2', icon: ShieldCheck },
  { key: 'value3', icon: Zap },
  { key: 'value4', icon: Leaf },
]

const stats = [
  { key: 'founded', valueKey: 'foundedValue' },
  { key: 'employees', valueKey: 'employeesValue' },
  { key: 'countries', valueKey: 'countriesValue' },
  { key: 'products', valueKey: 'productsValue' },
]

const certs = ['CE', 'FCC', 'TPD', 'ROHS', 'UN38.3', 'ISO 9001']

export default function AboutClient() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-black border-b border-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,rgba(0,0,0,1)_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">{t('about.title')}</h1>
            <p className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto font-medium tracking-wide uppercase">{t('about.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <section className="py-20 border-b border-[#1a1a1a]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ key, valueKey }, idx) => (
              <motion.div 
                key={key} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="text-center p-8 bg-[#050505] border border-[#1a1a1a] hover:border-[#333] transition-colors"
              >
                <div className="text-5xl font-black text-white mb-2 tracking-tighter">{t(`about.stats.${valueKey}`)}</div>
                <div className="text-[10px] text-[#666] font-bold uppercase tracking-widest">{t(`about.stats.${key}`)}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission & Story */}
        <section className="py-24 border-b border-[#1a1a1a]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 bg-[#d4af37]" />
                <h2 className="text-sm font-black text-white uppercase tracking-widest">{t('about.mission')}</h2>
              </div>
              <p className="text-xl md:text-2xl text-[#888] leading-relaxed font-medium">{t('about.missionText')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 bg-[#d4af37]" />
                <h2 className="text-sm font-black text-white uppercase tracking-widest">{t('about.story')}</h2>
              </div>
              <p className="text-base text-[#666] leading-relaxed">{t('about.storyText')}</p>
            </motion.div>
          </div>
        </section>

        {/* Factory */}
        <section className="py-24 border-b border-[#1a1a1a]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Factory Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="aspect-video bg-[#050505] border border-[#1a1a1a] relative overflow-hidden group"
            >
              <Image
                src="/images/about/factory.jpg"
                alt={t('about.factory')}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">{t('about.factory')}</h2>
              <p className="text-[#888] leading-relaxed mb-10 font-medium">{t('about.factoryText')}</p>

              {/* Factory highlights */}
              <div className="space-y-4">
                {[
                  { icon: '🏗️', textKey: 'about.factoryHighlight1' },
                  { icon: '🤖', textKey: 'about.factoryHighlight2' },
                  { icon: '🧪', textKey: 'about.factoryHighlight3' },
                  { icon: '✅', textKey: 'about.factoryHighlight4' },
                ].map(({ icon, textKey }) => (
                  <div key={textKey} className="flex items-center gap-4 p-4 bg-[#050505] border border-[#1a1a1a] hover:border-[#333] transition-colors group">
                    <span className="text-xl grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">{icon}</span>
                    <span className="text-xs font-bold text-[#888] uppercase tracking-wider group-hover:text-white transition-colors">{t(textKey)}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications */}
        <section id="compliance" className="py-24 border-b border-[#1a1a1a]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-12 text-center">{t('about.certTitle')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {certs.map((cert, idx) => (
                <motion.div 
                  key={cert} 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center justify-center p-8 bg-[#050505] border border-[#1a1a1a] hover:border-[#333] transition-colors group"
                >
                  <ShieldCheck className="w-8 h-8 text-[#444] mb-4 group-hover:text-[#d4af37] transition-colors" />
                  <span className="text-sm font-black text-[#888] tracking-widest group-hover:text-white transition-colors">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Values */}
        <section className="pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-12 text-center">{t('about.values')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map(({ key, icon: Icon }, idx) => (
                <motion.div 
                  key={key} 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="p-8 bg-[#050505] border border-[#1a1a1a] hover:border-[#333] transition-colors group"
                >
                  <div className="w-12 h-12 bg-black border border-[#222] flex items-center justify-center mb-6 group-hover:border-white transition-colors">
                    <Icon className="w-5 h-5 text-[#666] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-wide mb-3">{t(`about.${key}Title`)}</h3>
                  <p className="text-sm text-[#666] leading-relaxed font-medium">{t(`about.${key}Text`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
