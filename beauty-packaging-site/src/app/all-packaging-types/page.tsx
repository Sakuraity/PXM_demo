import CategoryListingPage from '@/components/common/CategoryListingPage'

export default async function AllPackagingTypesPage() {
  return (
    <CategoryListingPage
      type="packaging-type"
      title="Packaging Types"
      intro="Find jars, bottles, tubes and other packaging form factors."
      basePath="/all-packaging-types"
    />
  )
}
