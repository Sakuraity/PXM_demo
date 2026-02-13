import CategoryListingPage from '@/components/common/CategoryListingPage'

export default async function AllMaterialsPage() {
  return (
    <CategoryListingPage
      type="material"
      title="Materials"
      intro="Browse packaging options grouped by material system."
      basePath="/all-materials"
    />
  )
}
