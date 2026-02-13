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
        title="Skincare Packaging Solutions"
        description="Skincare represents the fastest-growing segment in beauty, driven by consumers' increasing sophistication about active ingredients and formulation science."
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
        title="Makeup Packaging Solutions"
        description="Makeup packaging serves dual functions: protecting formulations while delivering brand personality and color cosmetics' inherent sense of play and self-expression."
        products={makeupProducts}
      />

      <ProductCategorySection
        title="Fragrance Packaging Solutions"
        description="Fragrance packaging transcends functionality—it's storytelling through glass, metal, and design. A perfume bottle is art."
        products={fragranceProducts}
      />

      <ProductCategorySection
        title="Personal Care Packaging Solutions"
        description="Personal care packaging prioritizes functionality, durability, and value across high-use, everyday products that withstand humid bathroom environments."
        products={personalCareProducts}
      />

      <SustainabilitySection />
      <MoreCategories />
    </>
  )
}
