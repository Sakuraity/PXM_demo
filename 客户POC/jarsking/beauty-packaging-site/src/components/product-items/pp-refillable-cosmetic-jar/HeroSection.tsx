'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const HERO_IMAGES = [
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2026/02/refillable-skincare-jars-playful-pastel-design.webp',
    alt: 'Item 1',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2026/02/replaceable-cream-jar-for-kids.webp',
    alt: 'Item 2',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2026/02/Cosmetic-Jars-Scene-1.webp',
    alt: 'Item 3',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2026/02/metallic-coating-cap-cream-jar-scaled.webp',
    alt: 'Item 4',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2026/02/Cosmetic-Jars-gift-packaging-set.webp',
    alt: 'Item 5',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2026/02/dopamine-color-face-cream-jars.webp',
    alt: 'Item 5',
  },
]

export default function HeroSection() {
  const { t } = useTranslation()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const FEATURES = t('ppRefillableJar.hero.features', { returnObjects: true, defaultValue: [
    'Multi-component jar: cover, disc, inner cup, outer PP bottle.',
    'Replaceable PP inner container supports refill programs and hygiene control.',
    'Well-sealed plastic disc helps prevent leakage during shipping.',
    'Two capacities available: 110g and 240g for product line extensions.',
    'Defined "printing area" for consistent logo and compliance text placement.',
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
    <section className="w-full mt-[80px] lg:mt-[80px] pl-[8%] lg:pl-[8%] pr-0">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Product Info — ~50% width, padding 40px 80px 40px 10px */}
        <div className="lg:w-[50%] py-[40px] pr-[80px] pl-[10px] max-lg:px-[8%] max-lg:py-[8%] flex flex-col justify-center">
          <h1 className="text-[28px] md:text-[45px] lg:text-[65px] font-semibold text-[#7C7C7C] leading-[1.2] lg:leading-[1.2] mb-4">
            {t('ppRefillableJar.hero.title', { defaultValue: 'PP Refillable Cosmetic Jar with Replaceable Inner Cup' })}
          </h1>

          <p className="text-[#887E7E] text-[17px] font-light leading-[31px] my-[10px]">
            {t('ppRefillableJar.hero.description', { defaultValue: "Jarsking's PP refillable cosmetic jar with a replaceable inner cup is built for skincare brands that need cleaner refills, secure sealing, and premium shelf impact. The multi-part structure supports OEM/ODM customization, including injection color matching and branded decoration. Ideal for face cream, body butter, and mask formulas in bulk production." })}
          </p>

          <ul className="space-y-2 my-6">
            {FEATURES.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#E3664B] mt-1 flex-shrink-0">
                  <svg className="w-[14px] h-[14px]" fill="currentColor" viewBox="0 0 512 512">
                    <circle cx="256" cy="256" r="256" />
                  </svg>
                </span>
                <span className="text-[#887E7E] text-[17px] font-light">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact-jarsking/"
              className="text-white px-8 py-3 rounded-[10px] text-base font-medium transition-all flex-1 text-center font-roboto"
              style={{ backgroundImage: 'linear-gradient(174deg, #FC844D 12%, #9A170B 84%)' }}
            >
              {t('ppRefillableJar.hero.meetTeam', { defaultValue: 'Meet Jarsking Team' })}
            </Link>
            <Link
              href="/customize?product=pp-refillable-cosmetic-jar-with-replaceable-inner-cup"
              className="btn-primary flex-1 text-center flex items-center justify-center"
            >
              {t('ppRefillableJar.hero.customize', { defaultValue: 'Customize This Product' })}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right: Image Marquee — ~50% width */}
        <div className="lg:w-[50%] overflow-hidden">
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
