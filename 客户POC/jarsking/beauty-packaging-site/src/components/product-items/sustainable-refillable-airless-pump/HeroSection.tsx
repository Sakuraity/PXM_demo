'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const HERO_IMAGES = [
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/10/sustainable-luxury-cosmetic-packaging-manufacturer.webp',
    alt: 'Item 1',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/10/skincare-packaging-supplier-eco-friendly.webp',
    alt: 'Item 2',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/10/safety-wear-resistant-cosmetic-jar.webp',
    alt: 'Item 3',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/10/refillable-skincare-packaging-for-sustainable-brands.webp',
    alt: 'Item 4',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/10/refillable-airless-pump-jar-30g-50g.webp',
    alt: 'Item 5',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/10/eco-conscious-skincare-packaging-solutions.webp',
    alt: 'Default Title',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/10/recyclable-cosmetic-jar-with-airless-design.webp',
    alt: 'Default Title',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/10/airless-skincare-bottle-manufacturer.webp',
    alt: 'Default Title',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/10/as-outer-pp-inner-refillable-jar.webp',
    alt: 'Default Title',
  },
]

export default function HeroSection() {
  const { t } = useTranslation()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const FEATURES = t('sustainableAirless.hero.features', { returnObjects: true, defaultValue: [
    'Engineered for long-term use with scratch-resistant, impact-protected finishes.',
    'Minimalist luxury with sustainable materials — available in 30g / 50g jar.',
    'Durable outer shell with replaceable PP inner container — easy to refill, easy to recycle.',
    'Prevents oxidation, ensures product hygiene, and enhances shelf life for clean beauty formulations.',
  ] }) as string[]

  useEffect(() => {
    const el = scrollRef.current
    if (!el || isHovered) return

    let animationId: number
    let position = 0
    const speed = 0.5

    const animate = () => {
      position += speed
      if (position >= el.scrollWidth / 2) {
        position = 0
      }
      el.scrollLeft = position
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isHovered])

  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Product Info */}
        <div className="lg:w-1/2 px-[8%] py-12 lg:py-20 flex flex-col justify-center bg-white">
          <h1 className="text-3xl lg:text-[40px] font-semibold text-[#1E1E1E] leading-[1.2] mb-6 font-montserrat">
            {t('sustainableAirless.hero.title', { defaultValue: 'Sustainable Refillable Airless Pump Face Cream Jar For Baby Care Brand' })}
          </h1>

          <p className="text-[#7A7A7A] text-base leading-relaxed mb-8 font-poppins">
            {t('sustainableAirless.hero.description', { defaultValue: "Jarsking introduces a new era of sustainable skincare packaging — the Refillable Airless Pump & Jar Collection. Designed for modern clean beauty brands, this line balances eco responsibility with luxury appeal. The airless system prevents contamination, preserving sensitive skincare formulations like serums, creams, and emulsions. Perfect for brands pursuing sustainability with style, Jarsking's refillable airless series is customizable with solid coatings, metallic collars, and eco-certified finishes — ensuring your packaging looks as refined as your formula feels." })}
          </p>

          <ul className="space-y-4 mb-8">
            {FEATURES.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#61CE70] mt-1.5 flex-shrink-0">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 512 512">
                    <circle cx="256" cy="256" r="256" />
                  </svg>
                </span>
                <span className="text-[#7A7A7A] text-base font-poppins">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <Link
              href="/contact-jarsking/"
              className="bg-[#61CE70] text-white px-8 py-3 rounded text-base font-medium hover:bg-[#4fb85d] transition-colors flex-1 text-center font-roboto"
            >
              {t('sustainableAirless.hero.meetTeam', { defaultValue: 'Meet Jarsking Team' })}
            </Link>
            <Link
              href="/customize?product=sustainable-refillable-airless-pump-face-cream-jar-for-baby-care-brand"
              className="btn-primary flex-1 text-center flex items-center justify-center"
            >
              {t('sustainableAirless.hero.customize', { defaultValue: 'Customize This Product' })}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right: Image Marquee */}
        <div className="lg:w-1/2 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex items-center overflow-hidden h-[500px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex gap-5 flex-shrink-0">
              {[...HERO_IMAGES, ...HERO_IMAGES].map((image, index) => (
                <div key={index} className="flex-shrink-0 w-[300px] h-[500px] relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
