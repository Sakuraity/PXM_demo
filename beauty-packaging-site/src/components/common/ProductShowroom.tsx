'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const products = [
  {
    key: 'humidityControlGasket',
    src: '/wp-content/uploads/2025/09/terpene-preservation-cannabis-jars.webp',
    href: '/product-item/premium-2-way-humidity-control-gasket-for-cannabis-packaging/'
  },
  {
    key: 'airlessRefillable',
    src: '/wp-content/uploads/2024/10/dopamine-airless-container-for-cosmetics.webp',
    href: '/product-item/dopamine-airless-packaging-for-skincare/'
  },
  {
    key: 'ecoDeodorant',
    src: '/wp-content/uploads/2025/07/recycled-deodorant-stick-packaging.webp',
    href: '/product-item/eco-friendly-deodorant-containers/'
  },
  {
    key: 'amberGlassSpray',
    src: '/wp-content/uploads/2025/07/amber-glass-spray-bottle.webp',
    href: '/product-item/wholesale-15ml-50ml-100ml-amber-glass-spray-bottles/'
  },
  {
    key: 'aluminumSprayBottles',
    src: '/wp-content/uploads/2025/08/Aluminum-perfume-bottle.webp',
    href: '/product-item/wholesale-30ml-50ml-100ml-aluminum-spray-bottles-for-perfume/'
  },
  {
    key: 'aluminumTubes',
    src: '/wp-content/uploads/2025/07/aluminum-tubes-for-cosmetics.webp',
    href: '/product-item/wholesale-10ml-to-100ml-aluminum-tubes-for-cosmetics-skincare/'
  },
  {
    key: 'cosmeticPackagingSolutions',
    src: '/wp-content/uploads/2025/08/luxury-glass-skincare-packaging-supplier.webp',
    href: '/product-item/premium-cosmetic-packaging-solutions-for-startups'
  },
  {
    key: 'glassDropperBottleSet',
    src: '/wp-content/uploads/2025/09/complete-cosmetic-set-packaging-with-paper-box.webp',
    href: '/product-item/30ml-glass-dropper-bottle-thick-bottom-with-custom-finish/'
  },
  {
    key: 'glassRollerBottles',
    src: '/wp-content/uploads/2025/09/25ml-glass-roller-bottle-for-perfume.webp',
    href: '/product-item/premium-25ml-50ml-glass-roller-bottles-with-cap-options/'
  },
  {
    key: 'skincarePackagingSetsForMan',
    src: '/wp-content/uploads/2025/07/gradient-blue-cosmetic-bottle-supplier.webp',
    href: '/product-item/luxury-custom-skincare-packaging-sets-for-man/'
  },
  {
    key: 'flatSquareGlassBottle',
    src: '/wp-content/uploads/2025/03/skincare-collection.webp',
    href: '/product-item/flat-square-glass-bottle-cosmetic-packaging-set-new-design/'
  },
  {
    key: 'serumBottle',
    src: '/wp-content/uploads/2025/02/Skincare-bottle-manufacturer.webp',
    href: '/product-item/serum-bottle-with-pump-round-empty-luxury/'
  },
  {
    key: 'luxuryGlassSkincarePackaging',
    src: '/wp-content/uploads/2025/08/cosmetic-packaging-supplier-clean-beauty-brands.webp',
    href: '/product-item/luxury-glass-skincare-packaging-30ml-120ml-pump-bottles-50g-jars/'
  },
  {
    key: 'luxuryCustomGlassSkincare',
    src: '/wp-content/uploads/2025/02/Custom-Skincare-Packaging.webp',
    href: '/product-item/custom-luxury-glass-skincare-packaging-set/'
  },
  {
    key: 'hdpePlasticShampooBottles',
    src: '/wp-content/uploads/2025/08/Square-plastic-shampoo-container-500ml.webp',
    href: '/product-item/hdpe-plastic-shampoo-bottles-with-lotion-pump-300ml-500ml-700ml/'
  },
  {
    key: 'hdpeDomeBottles',
    src: '/wp-content/uploads/2025/09/Custom-HDPE-dome-bottle.webp',
    href: '/product-item/custom-hdpe-dome-bottles-with-disc-top-flip-cap-100ml-250ml/'
  },
  {
    key: 'customDopamineSkincare',
    src: '/wp-content/uploads/2025/03/Dopamine-skincare-packaging.webp',
    href: '/product-item/custom-dopamine-skincare-packaging-set-with-gift-box/'
  },
  {
    key: 'triangleSkinCareSet',
    src: '/wp-content/uploads/2025/03/triangular-shape-cosmetic-set.webp',
    href: '/product-item/triangle-shaped-glass-jars-lotion-pump-bottles-cosmetic-packaging/'
  },
  {
    key: 'skinCarePackagingSuppliers',
    src: '/wp-content/uploads/2025/03/Cosmetic-packaging-supplier.webp',
    href: '/product-item/new-cosmetic-packaging-design-collection/'
  },
  {
    key: 'customSkincarePackaging',
    src: '/wp-content/uploads/2024/12/skincare-frosting-set.webp',
    href: '/product-item/cosmetic-packaging-luxury-kit/'
  },
  {
    key: 'petgCosmeticPackaging',
    src: '/wp-content/uploads/2025/02/Lotion-pump-bottle.webp',
    href: '/product-item/recyclable-petg-bottleeco-friendly-cosmetic-packaging/'
  }
]

export default function ProductShowroom() {
  const [isPaused, setIsPaused] = useState(false)
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
          {t('home.productShowroom.title', { defaultValue: 'New Designs Showroom' })}
        </h2>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex space-x-6">
            {/* First set */}
            <div className={`flex space-x-6 ${isPaused ? '' : 'animate-marquee'}`}>
              {products.map((product, index) => (
                <a
                  key={`first-${index}`}
                  href={product.href}
                  className="flex-shrink-0 group"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={product.src}
                      alt={t(`home.productShowroom.products.${product.key}.name`, { defaultValue: '' })}
                      width={300}
                      height={300}
                      className="w-48 h-48 md:w-64 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Duplicate for seamless loop */}
            <div className={`flex space-x-6 ${isPaused ? '' : 'animate-marquee'}`}>
              {products.map((product, index) => (
                <a
                  key={`second-${index}`}
                  href={product.href}
                  className="flex-shrink-0 group"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={product.src}
                      alt={t(`home.productShowroom.products.${product.key}.name`, { defaultValue: '' })}
                      width={300}
                      height={300}
                      className="w-48 h-48 md:w-64 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
