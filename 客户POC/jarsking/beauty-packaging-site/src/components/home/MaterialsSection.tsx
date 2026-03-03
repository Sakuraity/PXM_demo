'use client'

"use client"

import { useTranslation } from 'react-i18next'

const glassProducts = [
  { key: 'cosmeticSet', img: 'https://www.jarsking.com/wp-content/uploads/2024/10/1-4.jpg', href: '/boxes-bags-and-supplies/custom-cosmetic-packaging/' },
  { key: 'storageJar', img: 'https://www.jarsking.com/wp-content/uploads/2024/12/cannabis-packaging-set.png', href: '/cannabis-packaging/cannabis-flower-jars/' },
  { key: 'dropperBottle', img: 'https://www.jarsking.com/wp-content/uploads/2025/09/glass-dropper-bottle.webp', href: '/all-applications/essential-oil-bottles/' },
  { key: 'perfumeBottle', img: 'https://www.jarsking.com/wp-content/uploads/2025/07/100ml-glass-bottle-for-oud-perfume.webp', href: '/all-applications/perfume-bottles/' },
]

const plasticProducts = [
  { key: 'shampooBottle', img: 'https://www.jarsking.com/wp-content/uploads/2025/07/refillable-serum-and-lotion-packaging.webp', href: '/all-applications/shampoo-bottles/' },
  { key: 'pcrBottle', img: 'https://www.jarsking.com/wp-content/uploads/2025/09/PCR-eco-friendly-packaging.jpg', href: '/all-materials/pcr-cosmetic-packaging/' },
  { key: 'airlessBottle', img: 'https://www.jarsking.com/wp-content/uploads/2024/10/square-airless-cosmetic-bottle-for-serum.webp', href: '/functions/airless-bottles/' },
  { key: 'sprayBottle', img: 'https://www.jarsking.com/wp-content/uploads/2025/01/15ml-mist-spray-bottle.webp', href: '/all-applications/spray-bottles/' },
]

function MaterialRow({ titleKey, descriptionKey, products }: { titleKey: string; descriptionKey: string; products: typeof glassProducts }) {
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{t(titleKey)}</h3>
        <p className="text-sm text-gray-500">{t(descriptionKey)}</p>
      </div>
      {products.map((p) => (
        <a key={p.key} href={p.href} className="group relative overflow-hidden rounded-lg aspect-square">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${p.img})` }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-4">
            <span className="text-white font-semibold text-sm">{t(`home.materialsSection.products.${p.key}`)}</span>
          </div>
        </a>
      ))}
    </div>
  )
}

export default function MaterialsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] text-center mb-12">
          {t('home.materialsSection.title')}
        </h2>
        <MaterialRow
          titleKey="home.materialsSection.glass.title"
          descriptionKey="home.materialsSection.glass.description"
          products={glassProducts}
        />
        <MaterialRow
          titleKey="home.materialsSection.plastic.title"
          descriptionKey="home.materialsSection.plastic.description"
          products={plasticProducts}
        />
      </div>
    </section>
  )
}