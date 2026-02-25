import { notFound } from 'next/navigation'
import { getCategoryById, getProductsByCategory, categories } from '@/lib/data'
import CategoryBrowseClient from '@/components/products/CategoryBrowseClient'

export function generateStaticParams() {
  return categories
    .filter((c) => c.dimension === 'material')
    .map((c) => ({ id: c.id }))
}

export default async function MaterialCategoryPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const category = getCategoryById(id)

  if (!category || category.dimension !== 'material') notFound()

  const products = getProductsByCategory(id, 'material')

  return (
    <CategoryBrowseClient
      category={category}
      products={products}
      dimension="material"
    />
  )
}
