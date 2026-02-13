'use client'

import { useState } from 'react'
import Link from 'next/link'

const products = [
  {
    title: 'PP Refillable Cosmetic Jar with Replaceable Inner Cup',
    slug: 'pp-refillable-cosmetic-jar-with-replaceable-inner-cup',
    image: 'https://www.jarsking.com/wp-content/uploads/2026/02/kitty-design-cream-jar-for-kids.webp',
    alt: 'kitty design cream jar for kids',
    material: 'plastic',
  },
  {
    title: 'Thick-Base Glass Lotion Pump Bottle for Luxury Skincare Brands',
    slug: 'thick-base-glass-lotion-pump-bottle-for-luxury-skincare-brands',
    image: 'https://www.jarsking.com/wp-content/uploads/2026/02/Dragonfruit-Bloom-skincare-bottle-design.webp',
    alt: 'Dragonfruit Bloom skincare bottle design',
    material: 'glass',
  },
  {
    title: 'Custom Glass Airless Pump Jar Replaceable Inner Core',
    slug: 'custom-glass-airless-pump-jar-replaceable-inner-core',
    image: 'https://www.jarsking.com/wp-content/uploads/2026/01/blue-replaceable-cosmetic-jar.webp',
    alt: 'blue replaceable cosmetic jar',
    material: 'glass',
  },
  {
    title: 'Personalized Skincare Container Glass Cream Jars & Lotion Pump Bottles',
    slug: 'personalized-skincare-container-glass-cream-jars-lotion-pump-bottles',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/10/luxury-cosmetic-bottle-packaging.webp',
    alt: 'luxury cosmetic bottle packaging',
    material: 'glass',
  },
  {
    title: 'Sustainable Refillable Airless Pump Face Cream Jar For Baby Care Brand',
    slug: 'sustainable-refillable-airless-pump-face-cream-jar-for-baby-care-brand',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/10/refillable-airless-skincare-jar-supplier.webp',
    alt: 'refillable airless skincare jar supplier',
    material: 'plastic',
  },
  {
    title: 'Luxury Refillable Airless Skincare Bottles & Jars | Glass Outer, PP Inner',
    slug: 'luxury-refillable-airless-skincare-bottles-jars-glass-outer-pp-inner',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/10/custom-airless-pump-bottle-manufacturer.webp',
    alt: 'custom airless pump bottle manufacturer',
    material: 'glass',
  },
  {
    title: 'Premium High-End Beauty Packaging Design for Beauty Brand',
    slug: 'premium-high-end-beauty-packaging-design-for-beauty-brand',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/10/luxury-glass-skincare-packaging.webp',
    alt: 'luxury glass skincare packaging',
    material: 'glass',
  },
  {
    title: 'Custom Glass Skincare Packaging Set Unique Design',
    slug: 'custom-glass-skincare-packaging-set-unique-design',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/09/custom-glass-skincare-packaging-set.webp',
    alt: 'custom glass skincare packaging set',
    material: 'glass',
  },
]

const filters = ['All', 'Glass', 'Plastic']

export default function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter((p) => p.material === activeFilter.toLowerCase())

  return (
    <section className="w-full bg-[#f9f9f9] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-4">
          Material Type
        </h2>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-6 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-montserrat text-lg md:text-[28px] font-normal transition-colors ${
                activeFilter === filter
                  ? 'text-[#61CE70] border-b-2 border-[#61CE70] pb-1'
                  : 'text-[#7A7A7A] hover:text-[#1E1E1E]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <Link
              key={index}
              href={`/products/${product.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group block"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-montserrat text-sm md:text-base font-normal leading-[1.5] text-[#1E1E1E] line-clamp-2">
                  {product.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
