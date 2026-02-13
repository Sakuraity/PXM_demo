'use client'

import { useRef } from 'react'

const products = [
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/09/unique-glass-cosmetic-containers.webp',
    alt: 'packaging of skin care products',
    href: '/product-item/custom-glass-skincare-packaging-set-unique-design/',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/07/recyclable-skincare-mist-bottle.webp',
    alt: 'Default Title',
    href: '/product-item/recyclable-pet-packaging-solutions-for-hair-care-skincare/',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/09/skincare-packaging-set.webp',
    alt: 'Default Title',
    href: '/product-item/new-cosmetic-packaging-design-collection/',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/08/premium-cosmetic-packaging-solutions-for-startups.webp',
    alt: 'Default Title',
    href: '/product-item/premium-cosmetic-packaging-solutions-for-startups/',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/08/sustainable-cosmetic-packaging-glass-set.webp',
    alt: 'Default Title',
    href: '/product-item/luxury-glass-skincare-packaging-30ml-120ml-pump-bottles-50g-jars/',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/02/Luxury-skincare-packaging.webp',
    alt: 'Default Title',
    href: '/product-item/serum-bottle-with-pump-round-empty-luxury/',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2024/10/square-airless-cosmetic-bottle-for-serum.webp',
    alt: 'Default Title',
    href: '/product-item/15ml-30ml-empty-cosmetic-serum-bottle/',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/03/Vibrant-cosmetic-packaging.webp',
    alt: 'Default Title',
    href: '/product-item/jars-for-skin-hydration-shield-series/',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2023/09/skincare-packaging.jpg',
    alt: 'Default Title',
    href: '/product-item/empty-cosmetic-30ml-glass-lotion-pump-packaging-bottle-2/',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2024/10/亚克力套装多色4_1.jpg',
    alt: 'Default Title',
    href: '/product-item/acrylic-lotion-cream-bottle-and-jar-cosmetic-skincare-packaging/',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2024/10/1-6.jpg',
    alt: 'Default Title',
    href: '/product-item/flat-square-glass-bottle-cosmetic-packaging-set-new-design/',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2024/11/glass-skincare-bottles.jpg',
    alt: 'Default Title',
    href: '/product-item/luxury-glass-cosmetic-jars-and-bottles-packaging-set/',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/09/luxury-skincare-packaging-with-dropper-and-jar.webp',
    alt: 'Default Title',
    href: '/product-item/elegance-beauty-glass-face-cream-container-jar/',
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/04/mens-skincare-packaging.webp',
    alt: 'Default Title',
    href: '/product-item/50g-100ml-200ml-glass-packaging-for-skincare-collection/',
  },
]

export default function NewDesignsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-10">
          New Designs for Skincare Packaging Set
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-colors"
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <a
                key={index}
                href={product.href}
                className="flex-shrink-0 w-[280px] group"
              >
                <div className="w-[280px] h-[280px] overflow-hidden rounded-lg bg-[#f5f5f5]">
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-colors"
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
