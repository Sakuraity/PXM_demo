'use client'

import { useState } from 'react'

const galleryImages = [
  { src: '/images/products/sustainable-packaging.jpg.webp', alt: 'sustainable packaging' },
  { src: '/images/products/bamboo-cosmetic-packaging-wholesale.webp', alt: 'bamboo cosmetic packaging wholesale' },
  { src: '/images/products/square-airless-cosmetic-bottle-for-serum.webp', alt: 'square airless cosmetic bottle for serum' },
  { src: '/images/products/PETG-replaceable-liner-cream-container.webp', alt: 'PETG replaceable liner cream container' },
  { src: '/images/products/aluminum-spray-bottles.webp', alt: 'aluminum spray bottles' },
  { src: '/images/products/refillable-skincare-jar-wholesale-manufacturer.webp', alt: 'refillable skincare jar wholesale manufacturer' },
  { src: '/images/products/airless-shampoo-bottle.webp', alt: 'airless shampoo bottle' },
  { src: '/images/products/calcium-carbonate-lotion-bottle-with-pump.webp', alt: 'calcium carbonate lotion bottle with pump' },
  { src: '/images/products/aluminum-tubes.webp', alt: 'aluminum tubes' },
  { src: '/images/products/PCR-skincare-set.webp', alt: 'PCR skincare set' },
  { src: '/images/products/cj60000.webp', alt: 'Face Cream Glass Jar with Bamboo Lid' },
  { src: '/images/products/airless-jar.webp', alt: 'airless jar' },
]

const toggleItems = [
  {
    title: 'Glass: Original Sustainable Choice',
    content: 'Infinitely recyclable without quality degradation. Chemically inert with no leaching. Premium perception justifies higher price points. Available across skincare, fragrance, and specialty treatments.',
  },
  {
    title: 'PCR Plastic: Post-Consumer Recycled',
    content: 'Reduces virgin plastic demand by up to 100%. Lower carbon footprint (30-70% less than virgin). Available in 30%, 50%, or 100% PCR content across all major formats.',
  },
  {
    title: 'Aluminum: Premium & Practical',
    content: '100% recyclable indefinitely without quality loss. Highest recycling rate among packaging materials (75% global avg). Excellent barrier properties. Available for luxury creams and deodorants.',
  },
  {
    title: 'Lightweighting & Material Reduction',
    content: 'Advanced engineering reduces material usage 20-30% without compromising protection. Lower transportation emissions, reduced raw material extraction, cost savings passed to customers.',
  },
  {
    title: 'Airless Pump System',
    content: 'Airless pump systems use vacuum technology to dispense product without air exposure, eliminating the need for chemical preservatives while protecting sensitive natural formulations from oxidation and contamination. These sustainable mechanisms maximize product lifespan, reduce waste with 95%+ evacuation rates, and support clean beauty goals through preservative-free, hygienic application from first use to last drop.',
  },
  {
    title: 'Refillable Systems',
    content: 'The most sustainable packaging is used multiple times. Reduce waste by 80%+ with durable outer containers and replaceable inner cartridges. Available across jars, bottles, compacts, and tubes.',
  },
]

export default function SustainabilitySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-0">
          {/* Left - Image Gallery */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-3 gap-[10px]">
              {galleryImages.map((img, index) => (
                <div key={index} className="relative aspect-square overflow-hidden group cursor-pointer">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content & Toggle */}
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-[40px] font-medium leading-[1.2em] text-primary mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Sustainability Across All Applications
            </h2>
            <p className="text-text text-base leading-relaxed mb-8">
              Environmental responsibility is no longer optional—it&apos;s a business imperative. Jarsking integrates eco-friendly solutions across every application category.
            </p>

            {/* Toggle / Accordion */}
            <div className="border-t border-[#d5d8dc]">
              {toggleItems.map((item, index) => (
                <div key={index} className="border-b border-[#d5d8dc]">
                  <button
                    className="w-full flex items-center justify-between py-4 px-0 text-left font-bold text-primary text-base hover:text-accent transition-colors"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span>{item.title}</span>
                    <span className="text-lg ml-4 flex-shrink-0">
                      {openIndex === index ? '▲' : '▶'}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="pb-4 text-text text-sm leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
