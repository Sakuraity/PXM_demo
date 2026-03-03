'use client'

"use client"

import ProductCard, { ProductCardProps } from './ProductCard'
import { useTranslation } from 'react-i18next'

interface ProductCategorySectionProps {
  titleKey: string
  descriptionKey: string
  products: ProductCardProps[]
}

export default function ProductCategorySection({ titleKey, descriptionKey, products }: ProductCategorySectionProps) {
  const { t } = useTranslation()

  return (
    <>
      {/* Category Title Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 text-center">
          <h2 className="text-[40px] font-medium leading-[1.2em] text-primary mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {t(titleKey)}
          </h2>
          <p className="text-text text-base leading-relaxed max-w-3xl mx-auto">
            {t(descriptionKey)}
          </p>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="w-full bg-white pb-4">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}