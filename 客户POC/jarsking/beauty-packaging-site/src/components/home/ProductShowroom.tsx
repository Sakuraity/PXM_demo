'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

const products = [
  { name: '2-Way Humidity Control Gasket', src: 'https://www.jarsking.com/wp-content/uploads/2025/09/terpene-preservation-cannabis-jars.webp', href: '/product-item/premium-2-way-humidity-control-gasket-for-cannabis-packaging/' },
  { name: 'Airless Refillable Skincare', src: 'https://www.jarsking.com/wp-content/uploads/2024/10/dopamine-airless-container-for-cosmetics.webp', href: '/product-item/15ml-30ml-empty-cosmetic-bottle/' },
  { name: '100ml Geometric Perfume Bottle', src: 'https://www.jarsking.com/wp-content/uploads/2025/08/custom-perfume-bottle-with-gold-cap.webp', href: '/product-item/luxury-100ml-geometric-perfume-bottle-with-custom-gift-box/' },
  { name: 'Luxury Glass Fragrance Bottles', src: 'https://www.jarsking.com/wp-content/uploads/2025/08/gradient-color-glass-perfume-bottles-wholesale.webp', href: '/product-item/luxury-glass-fragrance-bottles-10ml-50ml-100ml-with-custom-gift-box/' },
  { name: 'Clean Beauty Packaging', src: 'https://www.jarsking.com/wp-content/uploads/2025/08/clean-beauty-packaging-for-luxury-skincare-brands.webp', href: '/product-item/custom-clean-beauty-packaging-manufacturer/' },
  { name: 'Cosmetic Packaging Solutions', src: 'https://www.jarsking.com/wp-content/uploads/2025/08/luxury-glass-skincare-packaging-supplier.webp', href: '/product-item/premium-cosmetic-packaging-solutions-for-startups' },
  { name: 'Glass Dropper Bottle Set', src: 'https://www.jarsking.com/wp-content/uploads/2025/09/complete-cosmetic-set-packaging-with-paper-box.webp', href: '/product-item/30ml-glass-dropper-bottle-thick-bottom-with-custom-finish/' },
  { name: 'Glass Roller Bottles', src: 'https://www.jarsking.com/wp-content/uploads/2025/09/25ml-glass-roller-bottle-for-perfume.webp', href: '/product-item/premium-25ml-50ml-glass-roller-bottles-with-cap-options/' },
  { name: 'Skincare Packaging Sets For Man', src: 'https://www.jarsking.com/wp-content/uploads/2025/07/gradient-blue-cosmetic-bottle-supplier.webp', href: '/product-item/luxury-custom-skincare-packaging-sets-for-man/' },
  { name: 'Flat Square Glass Bottle', src: 'https://www.jarsking.com/wp-content/uploads/2025/03/skincare-collection.webp', href: '/product-item/flat-square-glass-bottle-cosmetic-packaging-set-new-design/' },
  { name: 'Serum Bottle', src: 'https://www.jarsking.com/wp-content/uploads/2025/02/Skincare-bottle-manufacturer.webp', href: '/product-item/serum-bottle-with-pump-round-empty-luxury/' },
  { name: 'Luxury Glass Skincare Packaging', src: 'https://www.jarsking.com/wp-content/uploads/2025/08/cosmetic-packaging-supplier-clean-beauty-brands.webp', href: '/product-item/luxury-glass-skincare-packaging-30ml-120ml-pump-bottles-50g-jars/' },
  { name: 'Custom Skincare Packaging', src: 'https://www.jarsking.com/wp-content/uploads/2025/02/Custom-Skincare-Packaging.webp', href: '/product-item/custom-luxury-glass-skincare-packaging-set/' },
  { name: 'HDPE Plastic Shampoo Bottles', src: 'https://www.jarsking.com/wp-content/uploads/2025/08/Square-plastic-shampoo-container-500ml.webp', href: '/product-item/hdpe-plastic-shampoo-bottles-with-lotion-pump-300ml-500ml-700ml/' },
  { name: 'HDPE Dome Bottles', src: 'https://www.jarsking.com/wp-content/uploads/2025/09/Custom-HDPE-dome-bottle.webp', href: '/product-item/custom-hdpe-dome-bottles-with-disc-top-flip-cap-100ml-250ml/' },
  { name: 'Custom Dopamine Skincare', src: 'https://www.jarsking.com/wp-content/uploads/2025/03/Dopamine-skincare-packaging.webp', href: '/product-item/custom-dopamine-skincare-packaging-set-with-gift-box/' },
  { name: 'Triangle Skin Care Set', src: 'https://www.jarsking.com/wp-content/uploads/2025/03/triangular-shape-cosmetic-set.webp', href: '/product-item/triangle-shaped-glass-jars-lotion-pump-bottles-cosmetic-packaging/' },
  { name: 'Cosmetic Packaging Supplier', src: 'https://www.jarsking.com/wp-content/uploads/2025/03/Cosmetic-packaging-supplier.webp', href: '/product-item/new-cosmetic-packaging-design-collection/' },
  { name: 'Skincare Frosting Set', src: 'https://www.jarsking.com/wp-content/uploads/2024/12/skincare-frosting-set.webp', href: '/product-item/cosmetic-packaging-luxury-kit/' },
  { name: 'PETG Cosmetic Packaging', src: 'https://www.jarsking.com/wp-content/uploads/2025/02/Lotion-pump-bottle.webp', href: '/product-item/recyclable-petg-bottleeco-friendly-cosmetic-packaging/' },
  { name: 'Irregular Design Cosmetic', src: 'https://www.jarsking.com/wp-content/uploads/2024/11/cosmetics-packaging-companies.jpg', href: '/product-item/pet-bottle-packaging-for-skincare-cosmetic/' },
]

export default function ProductShowroom() {
  const { t } = useTranslation()
  const [paused, setPaused] = useState(false)

  return (
    <section className="py-12 bg-[#f5f0eb]">
      <div className="max-w-[1200px] mx-auto px-4 mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] text-center">{t('home.productShowroom.title')}</h2>
        <p className="text-center text-gray-600 mt-4">{t('home.productShowroom.subtitle')}</p>
      </div>
      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={`flex gap-5 ${paused ? '' : 'animate-[marquee_40s_linear_infinite]'}`} style={{ width: 'max-content' }}>
          {[...products, ...products].map((p, i) => (
            <Link key={i} href={p.href} className="flex-shrink-0 block group">
              <div className="w-[280px] h-[280px] rounded-lg overflow-hidden">
                <img
                  src={p.src}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
