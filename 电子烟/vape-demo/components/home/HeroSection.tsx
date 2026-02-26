'use client'

import Link from 'next/link'
import { ArrowRight, Zap, Droplet, Battery } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const stats = [
    { value: '5ms', label: 'IGNITION', icon: Zap },
    { value: '8000', label: 'PUFFS', icon: Droplet },
    { value: '850mAh', label: 'POWER', icon: Battery },
  ]

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* 沉浸式背景大图/视频占位 - 改为冷色调高级感光源 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,rgba(0,0,0,1)_60%)]" />
        {/* 这里未来可以放产品暗光渲染图 */}
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* 超大标题 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-[#222] bg-black/50 backdrop-blur-md mb-10 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-[#a3a3a3] tracking-[0.25em] uppercase">NEXCORE™ CHIP INSIDE</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[140px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-4">
              BEYOND
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#ccc] to-[#666]">LIMITS</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg text-[#888] font-medium tracking-[0.1em] uppercase max-w-2xl mx-auto mb-14"
          >
            The Ultimate Vaping Experience Engineered for Professionals
          </motion.p>

          {/* 操作按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-24"
          >
            <Link
              href="/products"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-white text-black font-black uppercase tracking-[0.15em] overflow-hidden transition-all hover:bg-[#e5e5e5] rounded-sm"
            >
              <span className="relative z-10 flex items-center gap-3">
                Discover Core
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 border border-[#333] text-white font-bold uppercase tracking-[0.15em] hover:border-[#888] hover:bg-white/5 transition-all rounded-sm"
            >
              Wholesale
            </Link>
          </motion.div>

          {/* 硬件参数条 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 md:gap-32 pt-14 border-t border-[#1a1a1a]"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="flex flex-col items-center group">
                  <Icon className="w-5 h-5 text-[#888] mb-4 opacity-80 group-hover:text-[#d4af37] group-hover:opacity-100 transition-colors duration-300" />
                  <div className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2 transition-transform duration-300 group-hover:scale-105">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs text-[#555] font-bold tracking-[0.25em]">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
