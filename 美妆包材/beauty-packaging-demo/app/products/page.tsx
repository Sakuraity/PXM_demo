import { Suspense } from 'react'
import ProductsClient from '@/components/products/ProductsClient'

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-stone-400">Loading...</div>}>
      <ProductsClient />
    </Suspense>
  )
}
