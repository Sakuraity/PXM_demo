import ProductDetailClient from '@/components/products/ProductDetailClient'
import { getProductBySlug, getRelatedProducts, getAllProductSlugs } from '@/lib/data'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const related = getRelatedProducts(product)
  return <ProductDetailClient product={product} relatedProducts={related} />
}
