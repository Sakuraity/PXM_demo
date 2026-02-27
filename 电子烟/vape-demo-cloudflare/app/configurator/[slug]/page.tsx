import { getAllProducts } from '@/lib/data'
import { ProductConfiguratorClient } from './ProductConfiguratorClient'

// Generate static params for all products
export function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductConfiguratorPage({ params }: { params: { slug: string } }) {
  return <ProductConfiguratorClient slug={params.slug} />
}
