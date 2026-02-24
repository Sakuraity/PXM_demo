import { notFound } from 'next/navigation'
import CategoryListingPage from '@/components/common/CategoryListingPage'
import { getCategory } from '@/services/category.service'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function PackagingTypeDetailPage({ params }: Props) {
  const { slug } = await params

  try {
    await getCategory(slug)
  } catch {
    notFound()
  }

  return (
    <CategoryListingPage
      type="packaging-type"
      title="Packaging Types"
      intro="Find jars, bottles, tubes and other packaging form factors."
      basePath="/all-packaging-types"
      slug={slug}
    />
  )
}
