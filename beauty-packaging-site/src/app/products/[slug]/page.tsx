import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Download, Mail, Phone } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import ProductGallery from '@/components/product/ProductGallery'
import ProductTabs from '@/components/product/ProductTabs'
import ProductSpecs from '@/components/product/ProductSpecs'
import ProductGrid from '@/components/product/ProductGrid'
import { getProduct, getRelatedProducts } from '@/services'

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const [product, relatedProducts] = await Promise.all([
    getProduct(slug),
    getRelatedProducts(slug, 4),
  ])
  
  if (!product) {
    notFound()
  }

  const breadcrumbItems = [
    { label: 'Products', href: '/all-applications' },
    { label: product.title }
  ]

  return (
    <div className="min-h-screen">
      {/* 面包屑导航 */}
      <Breadcrumb items={breadcrumbItems} />

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

              {/* 操作按钮 */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={`/products/${product.slug}/diy`}
                  className="btn-primary flex items-center justify-center"
                >
                  Customize This Product
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                
                <button className="btn-secondary flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Spec Sheet
                </button>
              </div>

              {/* 联系信息 */}
              <div className="bg-accent/10 rounded-lg p-6 mt-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Need Help?</h3>
                <p className="text-sm text-secondary mb-4">
                  Our team is ready to assist with your packaging requirements
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="mailto:info@jarsking.com" className="flex items-center text-accent hover:underline">
                    <Mail className="w-4 h-4 mr-2" />
                    info@jarsking.com
                  </a>
                  <a href="tel:+86123456789" className="flex items-center text-accent hover:underline">
                    <Phone className="w-4 h-4 mr-2" />
                    +86 123 456 789
                  </a>
                </div>
              </div>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Related Products
            </h2>
            <p className="text-lg text-secondary">
              Explore similar packaging solutions
            </p>
          </div>

          <ProductGrid products={relatedProducts} />
        </div>
      </section>
    </div>
  )
}
