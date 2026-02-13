import ProductCard from './ProductCard'
import { Product } from '@/types'

interface ProductGridProps {
  products: Product[]
  className?: string
}

export default function ProductGrid({ products, className = '' }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-secondary">No products found.</p>
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  )
}
