import { notFound } from 'next/navigation'
import CategoryListingPage from '@/components/common/CategoryListingPage'
import { getCategory } from '@/services/category.service'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function MaterialDetailPage({ params }: Props) {
  const { slug } = await params

  try {
    await getCategory(slug)
  } catch {
    notFound()
  }

  return (
    <CategoryListingPage
      type="material"
      title="Materials"
      intro="Browse packaging options grouped by material system."
      basePath="/all-materials"
      slug={slug}
    />
  )
}
