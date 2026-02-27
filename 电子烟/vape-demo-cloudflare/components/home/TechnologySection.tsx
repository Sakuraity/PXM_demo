'use client'

import { useTranslation } from 'react-i18next'
import { Zap, Cpu, Shield, Droplets } from 'lucide-react'
import { motion } from 'framer-motion'

const TECH_FEATURES = [
  {
    key: 'nexcore',
    icon: Cpu,
    accentColor: '#d4af37', // 高级金属金
    badge: 'NEXCORE™',
  },
  {
    key: 'fluxpod',
    icon: Droplets,
    accentColor: '#cccccc', // 拉丝银
    badge: 'FLUXPOD™',
  },
  {
    key: 'charging',
    icon: Zap,
    accentColor: '#ffffff', // 纯白
    badge: '45-MIN',
  },
  {
    key: 'safety',
    icon: Shield,
    accentColor: '#999999', // 枪灰
    badge: '12-LAYER',
  },
]

export default function TechnologySection() {
  const { t } = useTranslation()

  return (
    <section className="py-32 bg-[#000000] border-t border-[#1a1a1a] relative overflow-hidden">
      {/* 极简网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#333] bg-[#111] mb-6">
              <Cpu className="w-3.5 h-3.5 text-[#ff003c]" />
              <span className="text-[10px] font-bold text-[#888] tracking-[0.2em] uppercase">{t('technology.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">{t('technology.title')}</h2>
            <p className="text-[#666] max-w-xl mx-auto text-sm md:text-base font-medium">{t('technology.subtitle')}</p>
          </motion.div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_FEATURES.map(({ key, icon: Icon, accentColor, badge }, idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative flex flex-col p-8 bg-[#050505] border border-[#1a1a1a] hover:border-[#333] transition-colors group"
            >
              {/* Top border hover effect */}
              <div
                className="absolute top-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"
                style={{ backgroundColor: accentColor }}
              />

              {/* Icon */}
              <div className="mb-8">
                <Icon className="w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{ color: accentColor }} />
              </div>

              {/* Badge */}
              <div
                className="text-[10px] font-black tracking-[0.2em] mb-3 uppercase"
                style={{ color: accentColor }}
              >
                {badge}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight uppercase">
                {t(`technology.${key}Title`)}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed flex-1 mb-8 font-medium">
                {t(`technology.${key}Desc`)}
              </p>

              {/* Stat */}
              <div className="mt-auto pt-6 border-t border-[#1a1a1a] flex items-baseline gap-2">
                <span className="text-3xl font-black text-white tracking-tighter">{t(`technology.${key}Stat`)}</span>
                <span className="text-[10px] text-[#444] font-bold tracking-widest uppercase">{t(`technology.${key}StatLabel`)}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="/technology"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white group"
          >
            <span className="relative">
              {t('technology.learnMore')}
              <span className="absolute -bottom-1 left-0 w-full h-px bg-[#333] group-hover:bg-white transition-colors" />
            </span>
            <span className="text-[#666] group-hover:text-white transition-colors group-hover:translate-x-1 duration-300">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
