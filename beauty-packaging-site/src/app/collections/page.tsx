'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import ProductGrid from '@/components/product/ProductGrid'
import { getAllProducts } from '@/services/product.service'
import { useEffect, useState } from 'react'
import type { Product } from '@/types'

export default function CollectionsPage() {
  const { t } = useTranslation()
  const [newDesignProducts, setNewDesignProducts] = useState<Product[]>([])
  const [refillableProducts, setRefillableProducts] = useState<Product[]>([])

  useEffect(() => {
    getAllProducts().then(products => {
      setNewDesignProducts(products.slice(0, 8))
      setRefillableProducts(
        products.filter(p =>
          p.title.toLowerCase().includes('refill') ||
          p.title.toLowerCase().includes('airless')
        ).slice(0, 8)
      )
    })
  }, [])

  const collections = [
    {
      slug: 'cosmetic-new-design-packaging-collection',
      titleKey: 'collections.items.newDesign.title',
      descriptionKey: 'collections.items.newDesign.description',
      products: newDesignProducts,
    },
    {
      slug: 'refillable-cosmetics-packaging',
      titleKey: 'collections.items.refillable.title',
      descriptionKey: 'collections.items.refillable.description',
      products: refillableProducts,
    }
  ]

  return (
    <div className="min-h-screen">
      <Breadcrumb items={[{ label: t('collections.breadcrumb') }]} />

      {/* Hero */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('collections.hero.title')} <span className="text-gradient">{t('collections.hero.titleHighlight')}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('collections.hero.description')}
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16">
        <div className="container-custom space-y-20">
          {collections.map((collection) => (
            <div key={collection.slug}>
              <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-2">
                      {t(collection.titleKey)}
                    </h2>
                    <p className="text-secondary max-w-2xl">
                      {t(collection.descriptionKey)}
                    </p>
                  </div>
                  <Link
                    href={`/collections/${collection.slug}`}
                    className="btn-primary inline-flex items-center whitespace-nowrap"
                  >
                    {t('collections.viewCollection')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>

              <ProductGrid products={collection.products} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
