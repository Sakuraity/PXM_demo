import HeroBanner from '@/components/applications/HeroBanner'
import StatsCounter from '@/components/applications/StatsCounter'
import WhyMatters from '@/components/applications/WhyMatters'
import ProductCategorySection from '@/components/applications/ProductCategorySection'
import ProductCard from '@/components/applications/ProductCard'
import SustainabilitySection from '@/components/applications/SustainabilitySection'
import MoreCategories from '@/components/applications/MoreCategories'
import {
  skincareProducts,
  skincareProducts2,
  makeupProducts,
  fragranceProducts,
  personalCareProducts,
} from '@/components/applications/productsData'

export default function AllApplicationsPage() {
  return (
    <>
      <HeroBanner />
      <StatsCounter />
      <WhyMatters />

      <ProductCategorySection
        titleKey="allApplications.categories.skincare.title"
        descriptionKey="allApplications.categories.skincare.description"
        products={skincareProducts}
      />
      {/* Skincare Row 2 - additional products without repeating title */}
      <section className="w-full bg-white pb-4">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {skincareProducts2.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <ProductCategorySection
        titleKey="allApplications.categories.makeup.title"
        descriptionKey="allApplications.categories.makeup.description"
        products={makeupProducts}
      />

      <ProductCategorySection
        titleKey="allApplications.categories.fragrance.title"
        descriptionKey="allApplications.categories.fragrance.description"
        products={fragranceProducts}
      />

      <ProductCategorySection
        titleKey="allApplications.categories.personalCare.title"
        descriptionKey="allApplications.categories.personalCare.description"
        products={personalCareProducts}
      />

      <SustainabilitySection />
      <MoreCategories />
    </>
  )
}
