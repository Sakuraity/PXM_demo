import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import ProductGrid from '@/components/product/ProductGrid'
import { getAllProducts } from '@/services/product.service'

export default async function CollectionsPage() {
  const products = await getAllProducts()
  const newDesignProducts = products.slice(0, 8)
  const refillableProducts = products.filter(p => 
    p.title.toLowerCase().includes('refill') || 
    p.title.toLowerCase().includes('airless')
  ).slice(0, 8)

  const collections = [
    {
      slug: 'cosmetic-new-design-packaging-collection',
      title: 'New Design Collection',
      description: 'Discover our latest innovative packaging designs, featuring cutting-edge aesthetics and functional improvements.',
      products: newDesignProducts,
      featured: true
    },
    {
      slug: 'refillable-cosmetics-packaging',
      title: 'Refillable Packaging',
      description: 'Sustainable packaging solutions designed for the eco-conscious brand. Reduce waste without compromising on luxury.',
      products: refillableProducts,
      featured: true
    }
  ]

  return (
    <div className="min-h-screen">
      <Breadcrumb items={[{ label: 'Collections' }]} />

      {/* Hero */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Curated <span className="text-gradient">Collections</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our carefully curated packaging collections, each designed to meet 
            specific brand needs and market trends.
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16">
        <div className="container-custom space-y-20">
          {collections.map((collection, index) => (
            <div key={collection.slug}>
              <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-2">
                      {collection.title}
                    </h2>
                    <p className="text-secondary max-w-2xl">
                      {collection.description}
                    </p>
                  </div>
                  <Link 
                    href={`/collections/${collection.slug}`}
                    className="btn-primary inline-flex items-center whitespace-nowrap"
                  >
                    View Collection
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
