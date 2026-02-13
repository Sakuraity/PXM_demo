// 数据源适配器 - 现在读取JSON，未来切换到API
const USE_API = process.env.NEXT_PUBLIC_USE_API === 'true'
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://api.example.com'

// 直接导入数据文件
import productsData from '@/data/products.json'
import categoriesData from '@/data/categories.json'
import siteConfigData from '@/data/site-config.json'

export const DataSource = {
  async get<T>(path: string): Promise<T> {
    if (USE_API) {
      // 未来：从API获取数据
      const response = await fetch(`${API_BASE}${path}`)
      if (!response.ok) {
        throw new Error(`API请求失败: ${response.statusText}`)
      }
      return response.json()
    }
    
    // 现阶段：从导入的数据中获取
    try {
      if (path === '/products') {
        return productsData as T
      }
      if (path === '/categories') {
        return categoriesData as T
      }
      if (path === '/site-config') {
        return siteConfigData as T
      }
      
      // 处理页面数据
      if (path.startsWith('/pages/')) {
        const pageName = path.replace('/pages/', '')
        const module = await import(`@/data/pages/${pageName}.json`)
        return module.default as T
      }
      
      // 处理单个产品
      if (path.startsWith('/products/')) {
        const slug = path.replace('/products/', '')
        const products = productsData as any[]
        const product = products.find(p => p.slug === slug)
        if (!product) {
          throw new Error(`产品不存在: ${slug}`)
        }
        return product as T
      }
      
      throw new Error(`未知数据路径: ${path}`)
    } catch (error) {
      console.error(`读取数据失败: ${path}`, error)
      throw new Error(`数据不存在: ${path}`)
    }
  },

  async query<T>(path: string, params?: Record<string, any>): Promise<T> {
    const queryString = params ? new URLSearchParams(params).toString() : ''
    const fullPath = queryString ? `${path}?${queryString}` : path
    
    return this.get<T>(fullPath)
  },

  async post<T>(path: string, data?: any): Promise<T> {
    if (USE_API) {
      const response = await fetch(`${API_BASE}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined,
      })
      
      if (!response.ok) {
        throw new Error(`API请求失败: ${response.statusText}`)
      }
      
      return response.json()
    }
    
    // 现阶段：模拟POST请求，使用localStorage
    console.log('模拟POST请求:', path, data)
    return { success: true, data } as T
  }
}
