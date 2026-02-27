import productsData from '@/data/products.json'
import seriesData from '@/data/series.json'
import categoriesData from '@/data/categories.json'
import complianceData from '@/data/compliance.json'
import testimonialsData from '@/data/testimonials.json'
import type {
  VapeProduct,
  VapeSeries,
  VapeCategory,
  ComplianceRegionDetail,
  Testimonial,
  SeriesSlug,
  ProductCategory,
  ComplianceRegion,
} from '@/types'

export const products = productsData as VapeProduct[]
export const allSeries = seriesData as VapeSeries[]
export const categories = categoriesData as VapeCategory[]
export const complianceRegions = complianceData as ComplianceRegionDetail[]
export const testimonials = testimonialsData as Testimonial[]

// ─── Products ─────────────────────────────────────────────────────────────────

export function getAllProducts(): VapeProduct[] {
  return products.filter((p) => p.status === 'published')
}

export function getFeaturedProducts(): VapeProduct[] {
  return products.filter((p) => p.status === 'published' && p.isFeatured)
}

export function getNewProducts(): VapeProduct[] {
  return products.filter((p) => p.status === 'published' && p.isNew)
}

export function getProductBySlug(slug: string): VapeProduct | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsBySeries(series: SeriesSlug): VapeProduct[] {
  return products.filter((p) => p.status === 'published' && p.series === series)
}

export function getProductsByCategory(category: ProductCategory): VapeProduct[] {
  return products.filter((p) => p.status === 'published' && p.category === category)
}

export function getRelatedProducts(product: VapeProduct): VapeProduct[] {
  return product.relatedProducts
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is VapeProduct => p !== undefined && p.status === 'published')
}

export function getCompatibleProducts(product: VapeProduct): VapeProduct[] {
  return product.compatibleWith
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is VapeProduct => p !== undefined && p.status === 'published')
}

export function getAllProductSlugs(): string[] {
  return products
    .filter((p) => p.status === 'published')
    .map((p) => p.slug)
}

export function searchProducts(query: string): VapeProduct[] {
  const q = query.toLowerCase()
  return products.filter(
    (p) =>
      p.status === 'published' &&
      (p.name.en.toLowerCase().includes(q) ||
        p.name.zh.toLowerCase().includes(q) ||
        p.modelNumber.toLowerCase().includes(q) ||
        p.tagline.en.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)))
  )
}

export function filterProducts(opts: {
  series?: SeriesSlug | ''
  category?: ProductCategory | ''
  onlyNew?: boolean
  onlyFeatured?: boolean
  region?: ComplianceRegion | ''
  query?: string
}): VapeProduct[] {
  let result = products.filter((p) => p.status === 'published')

  if (opts.series) {
    result = result.filter((p) => p.series === opts.series)
  }
  if (opts.category) {
    result = result.filter((p) => p.category === opts.category)
  }
  if (opts.onlyNew) {
    result = result.filter((p) => p.isNew)
  }
  if (opts.onlyFeatured) {
    result = result.filter((p) => p.isFeatured)
  }
  if (opts.region) {
    result = result.filter((p) => p.compliance.regions.includes(opts.region as ComplianceRegion))
  }
  if (opts.query) {
    const q = opts.query.toLowerCase()
    result = result.filter(
      (p) =>
        p.name.en.toLowerCase().includes(q) ||
        p.name.zh.toLowerCase().includes(q) ||
        p.modelNumber.toLowerCase().includes(q) ||
        p.tagline.en.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    )
  }

  return result
}

// ─── Series ───────────────────────────────────────────────────────────────────

export function getAllSeries(): VapeSeries[] {
  return [...allSeries].sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getSeriesBySlug(slug: SeriesSlug): VapeSeries | undefined {
  return allSeries.find((s) => s.slug === slug)
}

// ─── Categories ───────────────────────────────────────────────────────────────

export function getAllCategories(): VapeCategory[] {
  return [...categories].sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getCategoriesByType(type: 'product-type' | 'series'): VapeCategory[] {
  return categories
    .filter((c) => c.type === type)
    .sort((a, b) => a.sortOrder - b.sortOrder)
}

// ─── Compliance ───────────────────────────────────────────────────────────────

export function getAllComplianceRegions(): ComplianceRegionDetail[] {
  return complianceRegions
}

export function getComplianceByRegion(region: ComplianceRegion): ComplianceRegionDetail | undefined {
  return complianceRegions.find((c) => c.region === region)
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export function getAllTestimonials(): Testimonial[] {
  return testimonials
}

export function getTestimonialsBySeries(series: SeriesSlug): Testimonial[] {
  return testimonials.filter((t) => t.series === series)
}
