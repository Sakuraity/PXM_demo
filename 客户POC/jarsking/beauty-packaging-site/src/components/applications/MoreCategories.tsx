'use client'

"use client"

import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const categoriesRow1 = [
  {
    titleKey: 'allApplications.moreCategories.cards.byMaterials.title',
    image: '/images/products/plain-perfume-bottle.webp',
    altKey: 'allApplications.moreCategories.cards.byMaterials.alt',
    link: '/all-materials/',
  },
  {
    titleKey: 'allApplications.moreCategories.cards.byFunctions.title',
    image: '/images/products/plastic-bottles-with-various-dispensers.webp',
    altKey: 'allApplications.moreCategories.cards.byFunctions.alt',
    link: '/functions/',
  },
  {
    titleKey: 'allApplications.moreCategories.cards.byTypes.title',
    image: '/images/products/earthly-tone-skincare-packaging.webp',
    altKey: 'allApplications.moreCategories.cards.byTypes.alt',
    link: '/all-packaging-types/',
  },
]

const categoriesRow2 = [
  {
    titleKey: 'allApplications.moreCategories.cards.collections.title',
    image: '/images/products/dopamine-airless-packaging-for-skincare.webp',
    altKey: 'allApplications.moreCategories.cards.collections.alt',
    link: '/collections/',
  },
  {
    titleKey: 'allApplications.moreCategories.cards.childResistantPackaging.title',
    image: '/images/products/cannabis-packaging-set.png.webp',
    altKey: 'allApplications.moreCategories.cards.childResistantPackaging.alt',
    link: '/cannabis-packaging/',
  },
  {
    titleKey: 'allApplications.moreCategories.cards.boxesBagsSupplies.title',
    image: '/images/products/cannabis-paper-box.webp',
    altKey: 'allApplications.moreCategories.cards.boxesBagsSupplies.alt',
    link: '/boxes-bags-and-supplies/',
  },
]

function CategoryCard({ titleKey, image, altKey, link }: { titleKey: string; image: string; altKey: string; link: string }) {
  const { t } = useTranslation()

  return (
    <div className="text-center">
      <a href={link} className="block group">
        <div className="relative aspect-square overflow-hidden rounded-sm mb-4">
          <Image
            src={image}
            alt={t(altKey)}
            fill
            className="object-cover group-hover:scale-95 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </a>
      <h4 className="text-[20px] font-normal leading-[1.5em]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <a href={link} className="text-primary hover:text-accent transition-colors">
          {t(titleKey)}
        </a>
      </h4>
    </div>
  )
}

export default function MoreCategories() {
  const { t } = useTranslation()

  return (
    <>
      {/* Header Row */}
      <section className="py-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-[40px] font-medium leading-[1.2em] text-primary"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {t('allApplications.moreCategories.title')}
            </h2>
            <a href="#"
              className="inline-block bg-accent text-white text-sm font-medium px-6 py-2 rounded hover:scale-105 transition-transform duration-300 mt-4 md:mt-0"
              style={{ fontFamily: "'Roboto', sans-serif" }}>
              {t('allApplications.moreCategories.needConsultation')}
            </a>
          </div>
        </div>
      </section>

      {/* Categories Row 1 */}
      <section className="pb-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoriesRow1.map((cat, index) => (
              <CategoryCard key={index} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Row 2 */}
      <section className="pb-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoriesRow2.map((cat, index) => (
              <CategoryCard key={index} {...cat} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}