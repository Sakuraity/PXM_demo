import { DataSource } from '@/lib/data-source'
import { Category } from '@/types'
import { getAllProducts } from './product.service'

export async function getAllCategories(): Promise<Category[]> {
  return DataSource.get<Category[]>('/categories')
}

export async function getCategory(slug: string): Promise<Category> {
  const categories = await getAllCategories()
  const category = categories.find(c => c.slug === slug)
  if (!category) {
    throw new Error(`分类不存在: ${slug}`)
  }
  return category
}

export async function getCategoriesByType(type: Category['type']): Promise<Category[]> {
  const categories = await getAllCategories()
  return categories.filter(c => c.type === type)
}

export async function getProductsForCategory(slug: string) {
  const [category, products] = await Promise.all([
    getCategory(slug),
    getAllProducts(),
  ])

  if (category.products?.length) {
    return products.filter(product => category.products.includes(product.slug))
  }

  const tokens = slug.split('-').filter(token => token.length > 2)
  const matched = products.filter(product => {
    const haystack = `${product.title} ${product.description}`.toLowerCase()
    return tokens.some(token => haystack.includes(token.toLowerCase()))
  })

  return matched.length > 0 ? matched : products.slice(0, 12)
}
