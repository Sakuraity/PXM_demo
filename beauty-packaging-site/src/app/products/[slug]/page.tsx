import { notFound } from 'next/navigation'
import ProductBreadcrumb from '@/components/product/ProductBreadcrumb'
import ProductGallery from '@/components/product/ProductGallery'
import ProductTabs from '@/components/product/ProductTabs'
import ProductSpecs from '@/components/product/ProductSpecs'
import ProductGrid from '@/components/product/ProductGrid'
import ProductDetailContent from '@/components/product/ProductDetailContent'
import ProductRelatedHeading from '@/components/product/ProductRelatedHeading'
import { getProduct, getRelatedProducts } from '@/services'
import SustainableRefillableAirlessPumpPage from '@/components/product-items/sustainable-refillable-airless-pump'
import ThickBaseGlassLotionPumpPage from '@/components/product-items/thick-base-glass-lotion-pump'
import PPRefillableCosmeticJarPage from '@/components/product-items/pp-refillable-cosmetic-jar'

const CUSTOM_PAGES: Record<string, React.ComponentType> = {
  'sustainable-refillable-airless-pump-face-cream-jar-for-baby-care-brand': SustainableRefillableAirlessPumpPage,
  'thick-base-glass-lotion-pump-bottle-for-luxury-skincare-brands': ThickBaseGlassLotionPumpPage,
  'pp-refillable-cosmetic-jar-with-replaceable-inner-cup': PPRefillableCosmeticJarPage,
}

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params

  const CustomPage = CUSTOM_PAGES[slug]
  if (CustomPage) {
    return <CustomPage />
  }

  const [product, relatedProducts] = await Promise.all([
    getProduct(slug),
    getRelatedProducts(slug, 4),
  ])
  
  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* 面包屑导航 */}
      <ProductBreadcrumb productTitle={product.title} />

      {/* 产品详情 */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 左侧：图库 */}
            <ProductGallery images={product.images} title={product.title} />

            {/* 右侧：产品信息 */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                  {product.title}
                </h1>
                <p className="text-lg text-secondary leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* 操作按钮 + 联系信息（客户端组件，支持 i18n） */}
              <ProductDetailContent productSlug={product.slug} />
            </div>
          </div>

          {/* Tab 区块 */}
          <ProductTabs
            description={product.description}
            specsContent={
              <ProductSpecs
                specifications={product.specifications}
                priceRange={product.priceRange}
                moq={product.moq}
              />
            }
          />
        </div>
      </section>

      {/* 相关产品 */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <ProductRelatedHeading />
          <ProductGrid products={relatedProducts} />
        </div>
      </section>
    </div>
  )
}
