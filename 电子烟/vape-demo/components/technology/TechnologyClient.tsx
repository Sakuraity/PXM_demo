'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cpu, Zap, Shield, Droplets, ArrowRight, ChevronRight } from 'lucide-react'

const NEXCORE_SPECS = [
  { label: 'Response Time', value: '5ms', sub: 'ultra-fast ignition' },
  { label: 'Chip Process', value: '28nm', sub: 'precision fabrication' },
  { label: 'Sampling Rate', value: '1000Hz', sub: 'real-time monitoring' },
  { label: 'Temp Accuracy', value: '±1°C', sub: 'precision control' },
  { label: 'Safety Layers', value: '12', sub: 'hardware + firmware' },
  { label: 'Charge Speed', value: '45min', sub: 'full charge via USB-C' },
]

const FLUXPOD_SPECS = [
  { label: 'Attachment', value: 'Magnetic', sub: 'one-click secure fit' },
  { label: 'Leak Rate', value: '0%', sub: 'zero-leak design' },
  { label: 'Fill Type', value: 'Side-fill', sub: 'no-spill port' },
  { label: 'Coil Type', value: 'Ceramic Mesh', sub: 'flavor-sealed' },
  { label: 'Capacity', value: '2–4mL', sub: 'market dependent' },
  { label: 'Resistance', value: '0.6–1.2Ω', sub: 'MTL & RDL options' },
]

const SAFETY_LAYERS = [
  { label: 'Short Circuit', desc: 'Instant cutoff on any short circuit event' },
  { label: 'Over-Temperature', desc: 'Thermal monitoring with auto shutoff' },
  { label: 'Over-Voltage', desc: 'Input and output voltage protection' },
  { label: 'Low Voltage Cutoff', desc: 'Cell protection at battery depletion' },
  { label: 'Over-Discharge', desc: 'Prevents deep discharge cell damage' },
  { label: 'Over-Charge', desc: 'Smart charge termination at 100%' },
  { label: 'Timeout Protection', desc: '8-second auto-cutoff on continuous draw' },
  { label: 'Atomizer Detection', desc: 'Coil resistance verification on attach' },
  { label: 'Temperature Control', desc: 'Wire-type TC for Ni, Ti, SS316L' },
  { label: 'Dry Burn Guard', desc: 'E-liquid sensor prevents coil burning' },
  { label: 'Child Lock', desc: '5-click activation lockout' },
  { label: 'Firmware Integrity', desc: 'Signed firmware prevents tampering' },
]

export default function TechnologyClient() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-black pb-24 pt-20">

      {/* Hero */}
      <section className="relative py-24 border-b border-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#333] bg-[#111] mb-8">
              <Cpu className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[10px] font-bold text-[#888] tracking-[0.2em] uppercase">
                {t('technology.badge')}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              {t('technology.title')}
            </h1>
            <p className="text-base md:text-lg text-[#888] font-medium max-w-2xl mx-auto tracking-wide">
              {t('technology.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* NEXCORE™ Section */}
        <section className="py-24 border-b border-[#1a1a1a]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 bg-[#d4af37]" />
                <span className="text-[10px] font-black text-[#d4af37] tracking-[0.25em] uppercase">Platform 01</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                NEXCORE™<br />Chip
              </h2>
              <p className="text-[#888] font-medium leading-relaxed mb-10 text-base">
                {t('technology.nexcoreDesc')}
              </p>

              {/* Key stat */}
              <div className="inline-flex items-baseline gap-3 p-6 bg-[#050505] border border-[#1a1a1a] mb-10">
                <span className="text-6xl font-black text-white tracking-tighter">5ms</span>
                <span className="text-xs font-bold text-[#666] uppercase tracking-widest">Response Time</span>
              </div>

              <div className="space-y-3">
                {[
                  'Intelligent coil resistance detection',
                  'Precision temperature control (TC)',
                  'Smart battery cell management',
                  '12-layer safety protection suite',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <ChevronRight className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                    <span className="text-sm font-bold text-[#a3a3a3] uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Spec table */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#050505] border border-[#1a1a1a] p-8">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#1a1a1a]">
                  <div className="w-10 h-10 bg-black border border-[#222] flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white uppercase tracking-widest">NEXCORE™</div>
                    <div className="text-[10px] font-bold text-[#666] tracking-widest uppercase">Chip Specifications</div>
                  </div>
                </div>
                <div className="space-y-0">
                  {NEXCORE_SPECS.map(({ label, value, sub }) => (
                    <div key={label} className="flex items-center justify-between py-5 border-b border-[#1a1a1a] last:border-0 group hover:border-[#333] transition-colors">
                      <div>
                        <div className="text-xs font-black text-[#888] uppercase tracking-widest group-hover:text-white transition-colors">{label}</div>
                        <div className="text-[10px] text-[#444] font-bold uppercase tracking-wider mt-0.5">{sub}</div>
                      </div>
                      <div className="text-2xl font-black text-white tracking-tighter">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FLUXPOD™ Section */}
        <section className="py-24 border-b border-[#1a1a1a]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Spec table — left on this section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-[#050505] border border-[#1a1a1a] p-8">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#1a1a1a]">
                  <div className="w-10 h-10 bg-black border border-[#222] flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-[#cccccc]" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white uppercase tracking-widest">FLUXPOD™</div>
                    <div className="text-[10px] font-bold text-[#666] tracking-widest uppercase">Pod Platform Specs</div>
                  </div>
                </div>
                <div className="space-y-0">
                  {FLUXPOD_SPECS.map(({ label, value, sub }) => (
                    <div key={label} className="flex items-center justify-between py-5 border-b border-[#1a1a1a] last:border-0 group hover:border-[#333] transition-colors">
                      <div>
                        <div className="text-xs font-black text-[#888] uppercase tracking-widest group-hover:text-white transition-colors">{label}</div>
                        <div className="text-[10px] text-[#444] font-bold uppercase tracking-wider mt-0.5">{sub}</div>
                      </div>
                      <div className="text-2xl font-black text-white tracking-tighter">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 bg-[#cccccc]" />
                <span className="text-[10px] font-black text-[#cccccc] tracking-[0.25em] uppercase">Platform 02</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                FLUXPOD™<br />Platform
              </h2>
              <p className="text-[#888] font-medium leading-relaxed mb-10 text-base">
                {t('technology.fluxpodDesc')}
              </p>

              {/* Key stat */}
              <div className="inline-flex items-baseline gap-3 p-6 bg-[#050505] border border-[#1a1a1a] mb-10">
                <span className="text-6xl font-black text-white tracking-tighter">0%</span>
                <span className="text-xs font-bold text-[#666] uppercase tracking-widest">Leak Incidents</span>
              </div>

              <div className="space-y-3">
                {[
                  'One-click magnetic attachment',
                  'Side-fill refill port, no-spill',
                  'Flavor-sealed ceramic mesh coil',
                  'Compatible with APEX & FLUX series',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <ChevronRight className="w-4 h-4 text-[#cccccc] flex-shrink-0" />
                    <span className="text-sm font-bold text-[#a3a3a3] uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 12-Layer Safety */}
        <section className="py-24 border-b border-[#1a1a1a]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Shield className="w-4 h-4 text-[#ffffff]" />
              <span className="text-[10px] font-bold text-[#888] tracking-[0.2em] uppercase">Safety Architecture</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              12-Layer Protection
            </h2>
            <p className="text-[#666] max-w-xl mx-auto text-sm font-medium">
              {t('technology.safetyDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SAFETY_LAYERS.map(({ label, desc }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-start gap-5 p-6 bg-[#050505] border border-[#1a1a1a] hover:border-[#333] transition-colors group"
              >
                <div className="w-8 h-8 bg-black border border-[#222] flex items-center justify-center flex-shrink-0 text-xs font-black text-[#666] group-hover:text-[#d4af37] group-hover:border-[#d4af37] transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="text-sm font-black text-white uppercase tracking-wide mb-1 group-hover:text-white transition-colors">{label}</div>
                  <div className="text-[11px] text-[#666] font-medium leading-relaxed">{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Fast Charge */}
        <section className="py-24 border-b border-[#1a1a1a]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 bg-white" />
                <span className="text-[10px] font-black text-white tracking-[0.25em] uppercase">USB-C Fast Charge</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                {t('technology.chargingTitle')}
              </h2>
              <p className="text-[#888] font-medium leading-relaxed mb-10">
                {t('technology.chargingDesc')}
              </p>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-5xl font-black text-white tracking-tighter mb-2">45min</div>
                  <div className="text-[10px] font-bold text-[#666] uppercase tracking-widest">Full Charge</div>
                </div>
                <div className="w-px bg-[#1a1a1a]" />
                <div className="text-center">
                  <div className="text-5xl font-black text-white tracking-tighter mb-2">USB-C</div>
                  <div className="text-[10px] font-bold text-[#666] uppercase tracking-widest">Standard Port</div>
                </div>
              </div>
            </motion.div>

            {/* Visual charge bar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#050505] border border-[#1a1a1a] p-10"
            >
              <div className="text-[10px] font-black text-[#666] uppercase tracking-[0.2em] mb-8">Charging Timeline</div>
              {[
                { time: '0 min', pct: 0, label: 'Start Charging' },
                { time: '15 min', pct: 40, label: '40% — Fast Phase' },
                { time: '30 min', pct: 80, label: '80% — Taper Phase' },
                { time: '45 min', pct: 100, label: '100% — Complete' },
              ].map(({ time, pct, label }) => (
                <div key={time} className="flex items-center gap-6 mb-6 last:mb-0">
                  <div className="w-16 text-[10px] font-bold text-[#444] uppercase tracking-wider flex-shrink-0">{time}</div>
                  <div className="flex-1">
                    <div className="h-1.5 bg-[#111] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-white"
                      />
                    </div>
                  </div>
                  <div className="w-32 text-[10px] font-bold text-[#666] tracking-wider flex-shrink-0">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-6">
            Experience NEXCORE™ Technology
          </h2>
          <p className="text-[#888] font-medium mb-12 max-w-lg mx-auto">
            Every NEXVAP product is built on our proprietary platforms. Explore the lineup and find your series.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-[#e5e5e5] transition-colors"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 border border-[#333] text-white font-bold uppercase tracking-widest hover:border-[#888] hover:bg-white/5 transition-colors"
            >
              Wholesale Inquiry
            </Link>
          </div>
        </motion.section>

      </div>
    </div>
  )
}
