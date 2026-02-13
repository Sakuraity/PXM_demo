import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import ProductGrid from '@/components/product/ProductGrid'
import { getAllProducts } from '@/services/product.service'

interface CollectionPageProps {
  params: Promise<{ slug: string }>
}

export default async function CollectionDetailPage({ params }: CollectionPageProps) {
  const { slug } = await params
  const products = await getAllProducts()
  
  // 支持的 collection slug
  const validCollections = [
    'cosmetic-new-design-packaging-collection',
    'refillable-cosmetics-packaging'
  ]
  
  if (!validCollections.includes(slug)) {
    notFound()
  }

  const isNewDesign = slug === 'cosmetic-new-design-packaging-collection'
  const isRefillable = slug === 'refillable-cosmetics-packaging'

  const collectionData = {
    title: isNewDesign ? 'New Design Collection' : 'Refillable Packaging Collection',
    description: isNewDesign 
      ? 'Discover our latest innovative packaging designs featuring cutting-edge aesthetics and functional improvements that set your brand apart.'
      : 'Sustainable packaging solutions designed for the eco-conscious brand. Reduce waste without compromising on luxury and functionality.',
    products: isNewDesign 
      ? products.slice(0, 12)
      : products.filter(p => 
          p.title.toLowerCase().includes('refill') || 
          p.title.toLowerCase().includes('airless') ||
          p.title.toLowerCase().includes('replace')
        ).slice(0, 12)
  }

  const breadcrumbItems = [
    { label: 'Collections', href: '/collections' },
    { label: collectionData.title }
  ]

  return (
    <div className="min-h-screen">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className={`py-16 ${isRefillable ? 'bg-gradient-to-br from-green-50 to-emerald-100' : 'bg-brand-navy text-white'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-4xl lg:text-5xl font-bold mb-6 ${isRefillable ? 'text-primary' : ''}`}>
                {isNewDesign && <span className="text-gradient">New Design</span>}
                {isRefillable && <span className="text-accent">Refillable</span>}
                <br />
                {isNewDesign && 'Collection'}
                {isRefillable && 'Packaging'}
              </h1>
              <p className={`text-lg leading-relaxed mb-8 ${isRefillable ? 'text-secondary' : 'text-gray-300'}`}>
                {collectionData.description}
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Request Custom Design
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className={`aspect-square rounded-2xl p-8 ${isRefillable ? 'bg-gradient-to-br from-accent/20 to-green-200' : 'bg-gradient-to-br from-accent/20 to-brand-orange/20'}`}>
                <div className="w-full h-full bg-white/10 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Products in this Collection
            </h2>
            <p className="text-secondary">
              {collectionData.products.length} products available
            </p>
          </div>

          <ProductGrid products={collectionData.products} />
        </div>
      </section>

      {/* Features */}
      {isRefillable && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Why Choose Refillable?
              </h2>
              <p className="text-secondary">
                Benefits for your brand and the planet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Reduce Waste',
                  description: 'Up to 70% less packaging waste compared to traditional single-use containers.'
                },
                {
                  title: 'Cost Savings',
                  description: 'Lower long-term costs for both brands and consumers with reusable outer packaging.'
                },
                {
                  title: 'Brand Loyalty',
                  description: 'Consumers appreciate sustainable choices, building stronger brand relationships.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                  <p className="text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isNewDesign && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Design Innovation
              </h2>
              <p className="text-secondary">
                What makes our new designs stand out
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Modern Aesthetics',
                  description: 'Contemporary designs that appeal to today\'s discerning consumers.'
                },
                {
                  title: 'Enhanced Functionality',
                  description: 'Improved user experience with ergonomic and practical features.'
                },
                {
                  title: 'Premium Materials',
                  description: 'High-quality glass, acrylic, and innovative material combinations.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                  <p className="text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
