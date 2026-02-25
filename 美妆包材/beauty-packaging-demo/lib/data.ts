import type { Product, Category, Material } from '@/types'
import productsData from '@/data/products.json'
import categoriesData from '@/data/categories.json'
import materialsData from '@/data/materials.json'

export const products = productsData as Product[]
export const categories = categoriesData as Category[]
export const materials = materialsData as Material[]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured && p.status === 'published')
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew && p.status === 'published')
}

export function getProductsByCategory(categoryId: string, dimension: 'application' | 'material' | 'type'): Product[] {
  return products.filter((p) => {
    if (p.status !== 'published') return false
    if (dimension === 'application') {
      return (p.categories.application as string[]).includes(categoryId)
    }
    return p.categories[dimension] === categoryId
  })
}

export function getCategoriesByDimension(dimension: 'application' | 'material' | 'type'): Category[] {
  return categories
    .filter((c) => c.dimension === dimension)
    .sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id)
}

export function getRelatedProducts(ids: string[]): Product[] {
  return products.filter((p) => ids.includes(p.id) && p.status === 'published')
}

export function filterProducts(filters: {
  application?: string
  material?: string
  type?: string
  isNew?: boolean
  isCustomizable?: boolean
}): Product[] {
  return products.filter((p) => {
    if (p.status !== 'published') return false
    if (filters.application && !(p.categories.application as string[]).includes(filters.application)) return false
    if (filters.material && p.categories.material !== filters.material) return false
    if (filters.type && p.categories.type !== filters.type) return false
    if (filters.isNew !== undefined && p.isNew !== filters.isNew) return false
    if (filters.isCustomizable !== undefined && p.isCustomizable !== filters.isCustomizable) return false
    return true
  })
}
