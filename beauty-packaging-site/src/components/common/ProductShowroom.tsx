'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const products = [
  {
    name: '2-Way Humidity Control Gasket',
    src: '/wp-content/uploads/2025/09/terpene-preservation-cannabis-jars.webp',
    href: '/product-item/premium-2-way-humidity-control-gasket-for-cannabis-packaging/'
  },
  {
    name: 'Airless Refillable Skincare Packaging',
    src: '/wp-content/uploads/2024/10/dopamine-airless-container-for-cosmetics.webp',
    href: '/product-item/15ml-30ml-empty-cosmetic-bottle/'
  },
  {
    name: '100ml Geometric Perfume Bottle',
    src: '/wp-content/uploads/2025/08/custom-perfume-bottle-with-gold-cap.webp',
    href: '/product-item/luxury-100ml-geometric-perfume-bottle-with-custom-gift-box/'
  },
  {
    name: 'Luxury Glass Fragrance Bottles',
    src: '/wp-content/uploads/2025/08/gradient-color-glass-perfume-bottles-wholesale.webp',
    href: '/product-item/luxury-glass-fragrance-bottles-10ml-50ml-100ml-with-custom-gift-box/'
  },
  {
    name: 'Clean Beauty Packaging',
    src: '/wp-content/uploads/2025/08/clean-beauty-packaging-for-luxury-skincare-brands.webp',
    href: '/product-item/custom-clean-beauty-packaging-manufacturer/'
  },
  {
    name: 'Cosmetic Packaging Solutions',
    src: '/wp-content/uploads/2025/08/luxury-glass-skincare-packaging-supplier.webp',
    href: '/product-item/premium-cosmetic-packaging-solutions-for-startups'
  },
  {
    name: 'Glass Dropper Bottle Set',
    src: '/wp-content/uploads/2025/09/complete-cosmetic-set-packaging-with-paper-box.webp',
    href: '/product-item/30ml-glass-dropper-bottle-thick-bottom-with-custom-finish/'
  },
  {
    name: 'Glass Roller Bottles',
    src: '/wp-content/uploads/2025/09/25ml-glass-roller-bottle-for-perfume.webp',
    href: '/product-item/premium-25ml-50ml-glass-roller-bottles-with-cap-options/'
  },
  {
    name: 'Skincare Packaging Sets For Man',
    src: '/wp-content/uploads/2025/07/gradient-blue-cosmetic-bottle-supplier.webp',
    href: '/product-item/luxury-custom-skincare-packaging-sets-for-man/'
  },
  {
    name: 'Flat Square Glass Bottle',
    src: '/wp-content/uploads/2025/03/skincare-collection.webp',
    href: '/product-item/flat-square-glass-bottle-cosmetic-packaging-set-new-design/'
  },
  {
    name: 'Serum Bottle',
    src: '/wp-content/uploads/2025/02/Skincare-bottle-manufacturer.webp',
    href: '/product-item/serum-bottle-with-pump-round-empty-luxury/'
  },
  {
    name: 'Luxury Glass Skincare Packaging',
    src: '/wp-content/uploads/2025/08/cosmetic-packaging-supplier-clean-beauty-brands.webp',
    href: '/product-item/luxury-glass-skincare-packaging-30ml-120ml-pump-bottles-50g-jars/'
  },
  {
    name: 'Luxury Custom Glass Skincare',
    src: '/wp-content/uploads/2025/02/Custom-Skincare-Packaging.webp',
    href: '/product-item/custom-luxury-glass-skincare-packaging-set/'
  },
  {
    name: 'HDPE Plastic Shampoo Bottles',
    src: '/wp-content/uploads/2025/08/Square-plastic-shampoo-container-500ml.webp',
    href: '/product-item/hdpe-plastic-shampoo-bottles-with-lotion-pump-300ml-500ml-700ml/'
  },
  {
    name: 'HDPE Dome Bottles',
    src: '/wp-content/uploads/2025/09/Custom-HDPE-dome-bottle.webp',
    href: '/product-item/custom-hdpe-dome-bottles-with-disc-top-flip-cap-100ml-250ml/'
  },
  {
    name: 'Custom Dopamine Skincare',
    src: '/wp-content/uploads/2025/03/Dopamine-skincare-packaging.webp',
    href: '/product-item/custom-dopamine-skincare-packaging-set-with-gift-box/'
  },
  {
    name: 'Triangle Skin Care Set',
    src: '/wp-content/uploads/2025/03/triangular-shape-cosmetic-set.webp',
    href: '/product-item/triangle-shaped-glass-jars-lotion-pump-bottles-cosmetic-packaging/'
  },
  {
    name: 'Skin Care Packaging Suppliers',
    src: '/wp-content/uploads/2025/03/Cosmetic-packaging-supplier.webp',
    href: '/product-item/new-cosmetic-packaging-design-collection/'
  },
  {
    name: 'Custom Skincare Packaging',
    src: '/wp-content/uploads/2024/12/skincare-frosting-set.webp',
    href: '/product-item/cosmetic-packaging-luxury-kit/'
  },
  {
    name: 'PETG Cosmetic Packaging',
    src: '/wp-content/uploads/2025/02/Lotion-pump-bottle.webp',
    href: '/product-item/recyclable-petg-bottleeco-friendly-cosmetic-packaging/'
  }
]

export default function ProductShowroom() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
          New Designs Showroom
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
                      alt={product.name}
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
                      alt={product.name}
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
