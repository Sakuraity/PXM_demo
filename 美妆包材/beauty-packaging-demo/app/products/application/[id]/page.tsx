import { notFound } from 'next/navigation'
import { getCategoryById, getProductsByCategory, categories } from '@/lib/data'
import CategoryBrowseClient from '@/components/products/CategoryBrowseClient'

export function generateStaticParams() {
  return categories
    .filter((c) => c.dimension === 'application')
    .map((c) => ({ id: c.id }))
}

export default async function ApplicationCategoryPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const category = getCategoryById(id)

  if (!category || category.dimension !== 'application') notFound()

  const products = getProductsByCategory(id, 'application')

  return (
    <CategoryBrowseClient
      category={category}
      products={products}
      dimension="application"
    />
  )
}
