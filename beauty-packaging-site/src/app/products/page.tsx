'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import ProductGrid from '@/components/product/ProductGrid'
import { getAllProducts } from '@/services/product.service'
import type { Product } from '@/types'

export default function ProductsPage() {
  const { t } = useTranslation()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getAllProducts().then(setProducts)
  }, [])

  return (
    <div className="min-h-screen">
      <Breadcrumb items={[{ label: t('products.breadcrumb') }]} />

      <section className="py-12">
        <div className="container-custom">
          <div className="mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-3">
              {t('products.title')}
            </h1>
            <p className="text-secondary">
              {t('products.description')}
            </p>
          </div>

          <ProductGrid products={products} />
        </div>
      </section>
    </div>
  )
}
