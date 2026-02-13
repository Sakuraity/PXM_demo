'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const HERO_IMAGES = [
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2026/02/Cacao-Husk-color-cosmetic-packaging.webp',
    alt: 'Item 1',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2026/02/Dried-Petal-skincare-packaging-set.webp',
    alt: 'Item 2',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2026/02/matcha-color-cosmetic-bottles.webp',
    alt: 'Item 3',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2026/02/coral-color-cosmetics.webp',
    alt: 'Item 4',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2026/02/coral-color-jar.webp',
    alt: 'Item 5',
  },
]

const FEATURES = [
  'Thick-base hard glass body for premium weight and durability.',
  'Safety-designed lotion pump enables smooth discharge and easy extrusion.',
  'Injection-molded outer cover supports customized color matching.',
  'Clean, modern silhouette built for luxury shelf impact.',
  'Suitable for bulk production, decoration, and private-label branding.',
]

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

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
            Thick-Base Glass Lotion Pump Bottle for Luxury Skincare Brands
          </h1>

          <p className="text-[#7A7A7A] text-base leading-relaxed mb-8 font-poppins">
            Custom thick-base glass lotion pump bottle system for luxury skincare and personal care brands, manufactured by Jarsking for OEM/ODM programs. It combines a durable glass body with a safety-designed lotion pump for smooth dispensing and an injection-molded outer cover available in customized colors. Ideal for premium serums, lotions, and treatment products.
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
              Meet Jarsking Team
            </Link>
            <Link
              href="/products/thick-base-glass-lotion-pump-bottle-for-luxury-skincare-brands/diy"
              className="bg-[#1E1E1E] text-white px-8 py-3 rounded text-base font-medium hover:bg-[#333] transition-colors flex-1 text-center font-roboto flex items-center justify-center gap-2"
            >
              Customize This Product
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
