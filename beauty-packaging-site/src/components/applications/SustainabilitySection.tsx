'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const galleryImages = [
  { src: '/images/products/sustainable-packaging.jpg.webp', altKey: 'allApplications.sustainability.gallery.sustainablePackaging' },
  { src: '/images/products/bamboo-cosmetic-packaging-wholesale.webp', altKey: 'allApplications.sustainability.gallery.bambooCosmeticPackagingWholesale' },
  { src: '/images/products/square-airless-cosmetic-bottle-for-serum.webp', altKey: 'allApplications.sustainability.gallery.squareAirlessCosmeticBottleForSerum' },
  { src: '/images/products/PETG-replaceable-liner-cream-container.webp', altKey: 'allApplications.sustainability.gallery.petgReplaceableLinerCreamContainer' },
  { src: '/images/products/aluminum-spray-bottles.webp', altKey: 'allApplications.sustainability.gallery.aluminumSprayBottles' },
  { src: '/images/products/refillable-skincare-jar-wholesale-manufacturer.webp', altKey: 'allApplications.sustainability.gallery.refillableSkincareJarWholesaleManufacturer' },
  { src: '/images/products/airless-shampoo-bottle.webp', altKey: 'allApplications.sustainability.gallery.airlessShampooBottle' },
  { src: '/images/products/calcium-carbonate-lotion-bottle-with-pump.webp', altKey: 'allApplications.sustainability.gallery.calciumCarbonateLotionBottleWithPump' },
  { src: '/images/products/aluminum-tubes.webp', altKey: 'allApplications.sustainability.gallery.aluminumTubes' },
  { src: '/images/products/PCR-skincare-set.webp', altKey: 'allApplications.sustainability.gallery.pcrSkincareSet' },
  { src: '/images/products/cj60000.webp', altKey: 'allApplications.sustainability.gallery.faceCreamGlassJarWithBambooLid' },
  { src: '/images/products/airless-jar.webp', altKey: 'allApplications.sustainability.gallery.airlessJar' },
]

const toggleItems = [
  {
    titleKey: 'allApplications.sustainability.toggleItems.glass.title',
    contentKey: 'allApplications.sustainability.toggleItems.glass.content',
  },
  {
    titleKey: 'allApplications.sustainability.toggleItems.pcrPlastic.title',
    contentKey: 'allApplications.sustainability.toggleItems.pcrPlastic.content',
  },
  {
    titleKey: 'allApplications.sustainability.toggleItems.aluminum.title',
    contentKey: 'allApplications.sustainability.toggleItems.aluminum.content',
  },
  {
    titleKey: 'allApplications.sustainability.toggleItems.lightweighting.title',
    contentKey: 'allApplications.sustainability.toggleItems.lightweighting.content',
  },
  {
    titleKey: 'allApplications.sustainability.toggleItems.airlessPumpSystem.title',
    contentKey: 'allApplications.sustainability.toggleItems.airlessPumpSystem.content',
  },
  {
    titleKey: 'allApplications.sustainability.toggleItems.refillableSystems.title',
    contentKey: 'allApplications.sustainability.toggleItems.refillableSystems.content',
  },
]

export default function SustainabilitySection() {
  const { t } = useTranslation()
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
                    alt={t(img.altKey)}
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
              {t('allApplications.sustainability.title')}
            </h2>
            <p className="text-text text-base leading-relaxed mb-8">
              {t('allApplications.sustainability.description')}
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
                    <span>{t(item.titleKey)}</span>
                    <span className="text-lg ml-4 flex-shrink-0">
                      {openIndex === index ? '▲' : '▶'}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="pb-4 text-text text-sm leading-relaxed">
                      {t(item.contentKey)}
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
