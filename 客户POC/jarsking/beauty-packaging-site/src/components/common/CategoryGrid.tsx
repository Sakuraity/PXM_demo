'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Category } from '@/types'
import { ArrowRight } from 'lucide-react'

interface CategoryGridProps {
  categories: Category[]
  title?: string
  description?: string
}

export default function CategoryGrid({ 
  categories, 
  title = "Explore by Category",
  description = "Find the perfect packaging solution for your specific needs"
}: CategoryGridProps) {
  // 分类图标映射
  const categoryIcons: Record<string, string> = {
    'skincare-packaging': '/images/products/skincare-collection-1024x768.webp',
    'body-lotion-bottles': '/images/products/essential-oil-bottle.webp',
    'essential-oil-bottles': '/images/products/essential-oil-bottle.webp',
    'shampoo-bottles': '/images/products/personal-care-set-1024x768.webp',
    'toner-bottles': '/images/products/essential-oil-bottle.webp',
    'lip-gloss-tubes': '/images/products/new-design-bottle-e1730775751520-1024x768.jpg',
    'glass-cosmetic-packaging': '/images/products/Violet-Glass-Bottles-01.jpg.webp',
    'plastic-cosmetic-bottles': '/images/products/personal-care-set-1024x768.webp',
    'petg-cosmetic-packaging': '/images/products/personal-care-set-1024x768.webp',
    'acrylic-cosmetic-packaging': '/images/products/cream-jar-e1730775980312-1024x768.jpg',
    'cosmetic-tubes': '/images/products/new-design-bottle-e1730775751520-1024x768.jpg',
    'cosmetic-syringes': '/images/products/syringe-e1730776314879.jpg',
    'ampoules': '/images/products/ampoule-1.jpg',
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const imageUrl = categoryIcons[category.slug] || '/images/placeholder.png'
            
            return (
              <Link
                key={category.slug}
                href={`/all-${category.type}s/${category.slug}`}
                className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-text mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <span className="flex items-center text-accent font-medium group-hover:translate-x-1 transition-transform">
                    Explore Collection
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
