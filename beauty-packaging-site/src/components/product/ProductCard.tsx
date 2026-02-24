'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  const { t } = useTranslation()
  const imageUrl = product.images[0] || '/images/placeholder.png'

  return (
    <div className={`card ${className}`}>
      <Link href={`/products/${product.slug}`} className="block group">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={product.title}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-800"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
            {product.title}
          </h3>
          
          <p className="text-sm text-text line-clamp-3 mb-4">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-secondary">
              {product.category || t('productDetail.defaultCategory')}
            </span>
            
            <span className="flex items-center text-accent group-hover:translate-x-1 transition-transform">
              {t('productDetail.viewDetails')}
              <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
