import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.join(__dirname, '..')
const crawlDir = path.join(projectRoot, '../jarsking-crawl')
const outputDir = path.join(projectRoot, 'src/data')

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// 类型定义
interface CrawlPageData {
  url: string
  title: string
  meta: {
    description: string
    keywords: string
  }
  images: Array<{
    original_url: string
    local_path: string
    alt: string
    category: string
  }>
}

interface Product {
  slug: string
  title: string
  description: string
  images: string[]
  category?: string
}

interface Category {
  slug: string
  title: string
  description: string
  type: 'application' | 'material' | 'packaging-type' | 'function'
  products: string[]
}

interface NavigationItem {
  title: string
  url: string
  children?: NavigationItem[]
}

// 主处理函数
async function prepareData() {
  console.log('开始处理数据...')

  // 1. 处理产品数据
  const products = await processProducts()
  
  // 2. 处理分类数据
  const categories = await processCategories()
  
  // 3. 处理页面数据
  await processPages()
  
  // 4. 处理导航数据
  const navigation = processNavigation()
  
  // 5. 生成站点配置
  const siteConfig = {
    title: 'Jarsking - Cosmetic Packaging Solutions',
    description: 'Professional cosmetic packaging manufacturer offering glass bottles, plastic jars, tubes, and custom packaging solutions.',
    logo: '/images/icons/logo-300x165.png.webp',
    email: 'info@jarsking.com',
    navigation
  }

  // 写入文件
  fs.writeFileSync(
    path.join(outputDir, 'products.json'),
    JSON.stringify(products, null, 2)
  )
  
  fs.writeFileSync(
    path.join(outputDir, 'categories.json'),
    JSON.stringify(categories, null, 2)
  )
  
  fs.writeFileSync(
    path.join(outputDir, 'site-config.json'),
    JSON.stringify(siteConfig, null, 2)
  )

  console.log('数据处理完成!')
  console.log(`- 处理了 ${products.length} 个产品`)
  console.log(`- 处理了 ${categories.length} 个分类`)
}

// 处理产品数据
async function processProducts(): Promise<Product[]> {
  const products: Product[] = []
  const contentDir = path.join(crawlDir, 'content')
  
  // 读取所有 product-item_*.json 文件
  const files = fs.readdirSync(contentDir).filter(f => 
    f.startsWith('product-item_') && f.endsWith('.json')
  )

  for (const file of files) {
    const filePath = path.join(contentDir, file)
    const data: CrawlPageData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    
    // 提取 slug
    const slug = file.replace('product-item_', '').replace('.json', '')
    
    // 处理图片路径
    const images = data.images
      .filter(img => img.category === 'products')
      .map(img => img.local_path.replace('jarsking-crawl/', '/'))
    
    products.push({
      slug,
      title: data.title,
      description: data.meta.description,
      images
    })
  }

  return products
}

// 处理分类数据
async function processCategories(): Promise<Category[]> {
  const categories: Category[] = []
  const contentDir = path.join(crawlDir, 'content')
  
  // 应用分类
  const appFiles = fs.readdirSync(contentDir).filter(f => 
    f.startsWith('all-applications') && f.endsWith('.json')
  )
  for (const file of appFiles) {
    if (file === 'all-applications.json') continue
    const slug = file.replace('all-applications_', '').replace('.json', '')
    const data: CrawlPageData = JSON.parse(fs.readFileSync(path.join(contentDir, file), 'utf-8'))
    
    categories.push({
      slug,
      title: data.title.replace('Applications - ', ''),
      description: data.meta.description,
      type: 'application',
      products: [] // TODO: 关联产品
    })
  }
  
  // 材质分类
  const materialFiles = fs.readdirSync(contentDir).filter(f => 
    f.startsWith('all-materials_') && f.endsWith('.json')
  )
  for (const file of materialFiles) {
    const slug = file.replace('all-materials_', '').replace('.json', '')
    const data: CrawlPageData = JSON.parse(fs.readFileSync(path.join(contentDir, file), 'utf-8'))
    
    categories.push({
      slug,
      title: data.title.replace('Materials - ', ''),
      description: data.meta.description,
      type: 'material',
      products: []
    })
  }
  
  // 包装类型分类
  const packagingFiles = fs.readdirSync(contentDir).filter(f => 
    f.startsWith('all-packaging-types_') && f.endsWith('.json')
  )
  for (const file of packagingFiles) {
    const slug = file.replace('all-packaging-types_', '').replace('.json', '')
    const data: CrawlPageData = JSON.parse(fs.readFileSync(path.join(contentDir, file), 'utf-8'))
    
    categories.push({
      slug,
      title: data.title.replace('Packaging Types - ', ''),
      description: data.meta.description,
      type: 'packaging-type',
      products: []
    })
  }
  
  return categories
}

// 处理页面数据
async function processPages() {
  const pagesDir = path.join(outputDir, 'pages')
  if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true })
  }
  
  const contentDir = path.join(crawlDir, 'content')
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.json'))
  
  for (const file of files) {
    // 跳过产品文件，已在 products.json 中处理
    if (file.startsWith('product-item_')) continue
    
    const filePath = path.join(contentDir, file)
    const data: CrawlPageData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    
    // 处理图片路径
    const processedData = {
      ...data,
      images: data.images.map(img => ({
        ...img,
        local_path: img.local_path.replace('jarsking-crawl/', '/')
      }))
    }
    
    // 写入页面数据
    const outputFile = path.join(pagesDir, file)
    fs.writeFileSync(outputFile, JSON.stringify(processedData, null, 2))
  }
}

// 处理导航数据
function processNavigation(): NavigationItem[] {
  return [
    {
      title: 'Products',
      url: '#',
      children: [
        {
          title: 'By Application',
          url: '/all-applications',
          children: [
            { title: 'Skincare Packaging', url: '/all-applications/skincare-packaging' },
            { title: 'Lotion Bottles', url: '/all-applications/body-lotion-bottles' },
            { title: 'Essential Oil Bottles', url: '/all-applications/essential-oil-bottles' },
            { title: 'Shampoo Bottles', url: '/all-applications/shampoo-bottles' },
            { title: 'Toner Bottles', url: '/all-applications/toner-bottles' },
            { title: 'Lip Gloss Tubes', url: '/all-applications/lip-gloss-tubes' }
          ]
        },
        {
          title: 'By Material',
          url: '/all-materials',
          children: [
            { title: 'Glass Packaging', url: '/all-materials/glass-cosmetic-packaging' },
            { title: 'Plastic Bottles', url: '/all-materials/plastic-cosmetic-bottles' },
            { title: 'PETG Packaging', url: '/all-materials/petg-cosmetic-packaging' },
            { title: 'Acrylic Packaging', url: '/all-materials/acrylic-cosmetic-packaging' }
          ]
        },
        {
          title: 'By Packaging Type',
          url: '/all-packaging-types',
          children: [
            { title: 'Cosmetic Tubes', url: '/all-packaging-types/cosmetic-tubes' },
            { title: 'Cosmetic Syringes', url: '/all-packaging-types/cosmetic-syringes' },
            { title: 'Ampoules', url: '/all-packaging-types/ampoules' }
          ]
        }
      ]
    },
    {
      title: 'Collections',
      url: '/collections',
      children: [
        { title: 'New Design Collection', url: '/collections/cosmetic-new-design-packaging-collection' },
        { title: 'Refillable Packaging', url: '/collections/refillable-cosmetics-packaging' }
      ]
    },
    {
      title: 'About',
      url: '/your-strategic-partner'
    },
    {
      title: 'Sustainability',
      url: '/sustainability'
    },
    {
      title: 'Success Stories',
      url: '/success-stories'
    },
    {
      title: 'Contact',
      url: '/contact'
    }
  ]
}

// 运行脚本
prepareData().catch(console.error)
