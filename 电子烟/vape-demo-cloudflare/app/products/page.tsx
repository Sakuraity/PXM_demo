import ProductsClient from '@/components/products/ProductsClient'
import { getAllProducts } from '@/lib/data'

export const metadata = {
  title: 'Products — NEXVAP',
  description: 'Browse our complete lineup of NEXVAP devices, pods, kits and accessories.',
}

export default function ProductsPage() {
  const products = getAllProducts()
  return <ProductsClient products={products} />
}
