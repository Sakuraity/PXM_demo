import Breadcrumb from '@/components/layout/Breadcrumb'
import ProductGrid from '@/components/product/ProductGrid'
import { getCategoriesByType, getProductsForCategory } from '@/services/category.service'

interface CategoryListingPageProps {
  type: 'application' | 'material' | 'packaging-type'
  title: string
  intro: string
  basePath: string
  slug?: string
}

export default async function CategoryListingPage({
  type,
  title,
  intro,
  basePath,
  slug,
}: CategoryListingPageProps) {
  const categories = await getCategoriesByType(type)

  if (!slug) {
    return (
      <div className="min-h-screen">
        <Breadcrumb items={[{ label: title }]} />
        <section className="py-12">
          <div className="container-custom">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-3">{title}</h1>
            <p className="text-secondary mb-8">{intro}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map(category => (
                <a
                  key={category.slug}
                  href={`${basePath}/${category.slug}`}
                  className="card p-6 block"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">{category.title}</h3>
                  <p className="text-sm text-secondary line-clamp-3">{category.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  const current = categories.find(item => item.slug === slug)
  const products = await getProductsForCategory(slug)

  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { label: title, href: basePath },
          { label: current?.title || slug },
        ]}
      />
      <section className="py-12">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-3">
            {current?.title || slug}
          </h1>
          <p className="text-secondary mb-8">
            {current?.description || 'Category products'}
          </p>

          <ProductGrid products={products} />
        </div>
      </section>
    </div>
  )
}
