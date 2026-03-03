'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface HeroBannerProps {
  titleLine1: string
  titleLine2?: string
  description: string
  imageSrc: string
  imageAlt: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export default function HeroBanner({
  titleLine1,
  titleLine2,
  description,
  imageSrc,
  imageAlt,
  primaryButtonText,
  primaryButtonLink = '/contact',
  secondaryButtonText,
  secondaryButtonLink = '/products'
}: HeroBannerProps) {
  const { t } = useTranslation()

  return (
    <section className="relative bg-brand-navy text-white overflow-hidden">
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      {/* 视频背景 */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${imageSrc}')`
          }}
        >
          {/* 视频占位 - 实际使用时替换为真实视频 */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white/50 text-sm">{t('hero.videoBackground', { defaultValue: 'Video Background' })}</div>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-20 lg:py-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 内容 */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              {titleLine1}
              {titleLine2 && (
                <>
                  <br />
                  <span className="block text-accent">{titleLine2}</span>
                </>
              )}
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              {description}
              <br className="hidden lg:block" />
              {t('hero.reliablePackagingPartner', { defaultValue: 'Your Reliable Packaging Partner.' })}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={primaryButtonLink} className="btn-primary bg-white text-primary hover:bg-gray-100">
                {primaryButtonText || t('common.actions.exploreProducts', { defaultValue: 'Explore Products' })}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link href={secondaryButtonLink} className="flex items-center justify-center px-6 py-3 border border-white rounded-md hover:bg-white hover:text-primary transition-all">
                <Play className="w-5 h-5 mr-2" />
                {secondaryButtonText || t('hero.watchVideo', { defaultValue: 'Watch Video' })}
              </Link>
            </div>
          </div>
          
          {/* 右侧服务卡片 */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative">
                <Image
                  src="https://www.jarsking.com/wp-content/uploads/2024/12/frost-cosmetic-bottle-set.webp"
                  alt={t('hero.turnkeyServiceAlt', { defaultValue: 'Turnkey Services for Your Brand' })}
                  width={600}
                  height={400}
                  className="w-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {t('hero.turnkeyTitle', { defaultValue: 'Turnkey Services for Your Brand' })}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('hero.turnkeyDesc', { defaultValue: "From design to delivery, tailored to elevate your brand. Whether you're in skincare, cosmetic, makeup, personal care, perfume, and pharmaceutical, we provide high-quality, custom packaging that meets your unique needs. Partner with us for seamless, end-to-end packaging services." })}
                </p>
                <Link href="/about" className="text-primary font-medium hover:underline inline-flex items-center mt-4">
                  {t('common.learnMore', { defaultValue: 'Learn More' })}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
