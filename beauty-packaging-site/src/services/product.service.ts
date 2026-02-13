import { DataSource } from '@/lib/data-source'
import { Product } from '@/types'

export async function getProduct(slug: string): Promise<Product> {
  return DataSource.get<Product>(`/products/${slug}`)
}

export async function getAllProducts(): Promise<Product[]> {
  return DataSource.get<Product[]>('/products')
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return DataSource.query<Product[]>('/categories', { category })
}

export async function searchProducts(query: string): Promise<Product[]> {
  return DataSource.query<Product[]>('/products/search', { q: query })
}

export async function getRelatedProducts(slug: string, limit = 4): Promise<Product[]> {
  const products = await getAllProducts()
  const target = products.find(item => item.slug === slug)
  if (!target) return products.slice(0, limit)

  const tokens = slug.split('-').filter(token => token.length > 2)
  const related = products
    .filter(item => item.slug !== slug)
    .map(item => {
      const haystack = `${item.title} ${item.description}`.toLowerCase()
      const score = tokens.reduce((acc, token) => (haystack.includes(token) ? acc + 1 : acc), 0)
      return { item, score }
    })
    .sort((a, b) => b.score - a.score)
    .map(entry => entry.item)

  return related.slice(0, limit)
}
