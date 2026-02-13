'use client'

import { useState } from 'react'

const products = [
  {
    title: 'Custom PET dropper bottle with glass pipette for skincare serum OEM/ODM packaging',
    image: 'https://www.jarsking.com/wp-content/uploads/2026/01/dropper-bottle-with-dopamine-colors.webp',
    alt: 'dropper bottle with dopamine colors',
    material: 'glass',
  },
  {
    title: '30ml Glass Dropper Bottle Thick-Bottom with Custom Finish',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/09/complete-cosmetic-set-packaging-with-paper-box.webp',
    alt: 'complete cosmetic set packaging with paper box',
    material: 'glass',
  },
  {
    title: 'Luxury 30ml Thick Bottom Glass Packaging Set with Custom Finish',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/09/premium-thick-glass-packaging-for-cosmetic-sets.webp',
    alt: 'premium thick glass packaging for cosmetic sets',
    material: 'glass',
  },
  {
    title: 'Premium Glass Dropper Bottles 20ml & 30ml Thick Bottom',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/09/glass-dropper-bottles-for-essential-oils-and-serums.webp',
    alt: 'glass dropper bottles for essential oils and serums',
    material: 'glass',
  },
  {
    title: 'Premium 25ml & 50ml Glass Roller Bottles with Cap Options',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/09/luxury-glass-roller-bottle-packaging.webp',
    alt: 'luxury glass roller bottle packaging',
    material: 'glass',
  },
  {
    title: 'Custom Glass Roll On Bottles (5ml–100ml)',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/07/safe-roller-bottles-for-aromatherapy.webp',
    alt: 'safe roller bottles for aromatherapy',
    material: 'glass',
  },
  {
    title: 'Replaceable Vacuum Plastic Pump Bottles 15ml 30ml 50ml',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/07/refillable-airless-pump-bottle-for-skincare.webp',
    alt: 'refillable airless pump bottle for skincare',
    material: 'glass',
  },
  {
    title: 'Custom Essential Oil Roll-On Glass Bottles 5ml 10ml',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/07/custom-logo-roll-on-bottles-for-essential-oils.webp',
    alt: 'custom logo roll on bottles for essential oils',
    material: 'glass',
  },
]

const filters = ['All', 'Glass']

export default function EssentialOilProductGrid() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter((p) => p.material === activeFilter.toLowerCase())

  return (
    <section className="w-full bg-[#f9f9f9] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-2">
          Selections from Essential Oil Glass Bottle Manufacturers
        </h2>
        <h2 className="font-montserrat text-2xl md:text-[32px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-4">
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
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
