'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export default function HeroBanner() {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden">
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      {/* 视频背景 */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/wp-content/uploads/2023/02/Group-95.jpg')`
          }}
        >
          {/* 视频占位 - 实际使用时替换为真实视频 */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white/50 text-sm">Video Background</div>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-20 lg:py-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 内容 */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Pack the Ordinary into
              <span className="block text-accent">Extraordinary</span>
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Jarsking Packaging is a premier full-service designer and manufacturer of packaging solutions, catering to both small and large production needs. We deliver innovative, high-quality, and cost-effective packaging with precision and consistency.
              <br className="hidden lg:block" />
              Your Reliable Packaging Partner.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/all-applications" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <button className="flex items-center justify-center px-6 py-3 border border-white rounded-md hover:bg-white hover:text-primary transition-all">
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </button>
            </div>
          </div>
          
          {/* 右侧服务卡片 */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative">
                <Image
                  src="/wp-content/uploads/2024/12/frost-cosmetic-bottle-set.webp"
                  alt="Turnkey Services"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Turnkey Services for Your Brand
                </h3>
                <p className="text-text leading-relaxed">
                  From design to delivery, tailored to elevate your brand. Whether you're in skincare, cosmetic, makeup, personal care, perfume, and pharmaceutical, we provide high-quality, custom packaging that meets your unique needs. Partner with us for seamless, end-to-end packaging services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
