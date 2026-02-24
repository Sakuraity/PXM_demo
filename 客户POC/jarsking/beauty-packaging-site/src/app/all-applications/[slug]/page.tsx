import { notFound } from 'next/navigation'
import CategoryListingPage from '@/components/common/CategoryListingPage'
import { getCategory } from '@/services/category.service'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ApplicationDetailPage({ params }: Props) {
  const { slug } = await params

  try {
    await getCategory(slug)
  } catch {
    notFound()
  }

  return (
    <CategoryListingPage
      type="application"
      title="Applications"
      intro="Explore packaging by application use cases from jarsking structure."
      basePath="/all-applications"
      slug={slug}
    />
  )
}
