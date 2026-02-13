import Breadcrumb from '@/components/layout/Breadcrumb'
import ProductGrid from '@/components/product/ProductGrid'
import { getAllProducts } from '@/services/product.service'

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <div className="min-h-screen">
      <Breadcrumb items={[{ label: 'Products' }]} />

      <section className="py-12">
        <div className="container-custom">
          <div className="mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-3">
              All Cosmetic Packaging Products
            </h1>
            <p className="text-secondary">
              Browse our full collection from jarsking-crawl data source.
            </p>
          </div>

          <ProductGrid products={products} />
        </div>
      </section>
    </div>
  )
}
