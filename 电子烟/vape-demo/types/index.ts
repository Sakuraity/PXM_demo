export interface LocalizedString {
  zh: string
  en: string
}

export type ProductCategory = 'device' | 'pod' | 'kit' | 'accessory'
export type ProductStatus = 'published' | 'draft' | 'archived'
export type SeriesSlug = 'velo' | 'apex' | 'flux' | 'core'
export type ComplianceRegion = 'US' | 'EU' | 'UK' | 'AU' | 'CA' | 'JP'
export type Certification = 'CE' | 'FCC' | 'FDA-PMTA' | 'TPD' | 'TRPR' | 'TGA' | 'ROHS' | 'UN38.3'

export interface ProductImage {
  url: string
  alt: LocalizedString
  type: 'hero' | 'gallery' | 'detail' | 'lifestyle'
  sortOrder: number
}

export interface PriceTier {
  minQty: number
  maxQty?: number
  unitPrice: number
}

export interface VapeSpecs {
  batteryCapacity?: number        // mAh
  eJuiceCapacity?: number         // mL
  cartridgeCapacity?: number      // mL，烟弹/雾化仓容量
  puffs?: number                  // 一次性产品口数
  nicotineStrengths?: number[]    // mg/mL
  resistance?: number             // Ω
  wattageRange?: string           // 如 "5-80W"
  chargingPort?: 'USB-C' | 'Micro-USB'
  chargingTime?: string           // 如 "45min"
  dimensions?: string             // 如 "105×26×14mm"
  weight?: number                 // g
  colors?: string[]
  coilType?: string
  airflowControl?: boolean
  displayScreen?: boolean
  isWaterproof?: boolean
  isRefillable?: boolean          // 是否可填充
  compatibleSeries?: SeriesSlug[] // 烟弹兼容的系列
}

export interface ComplianceInfo {
  regions: ComplianceRegion[]
  certifications: Certification[]
  nicotineWarning: boolean
  ageRestricted: boolean
  tpdCompliant?: boolean
  pmtaSubmitted?: boolean
}

export interface VapeProduct {
  id: string
  slug: string
  modelNumber: string
  status: ProductStatus
  isNew: boolean
  isFeatured: boolean
  isDisposable: boolean
  name: LocalizedString
  tagline: LocalizedString
  description: LocalizedString
  category: ProductCategory
  series: SeriesSlug
  tags: string[]
  specs: VapeSpecs
  compatibleWith: string[]        // 兼容产品 slug 数组
  compliance: ComplianceInfo
  pricing: {
    currency: 'USD'
    retailPrice: number
    wholesaleTiers: PriceTier[]
  }
  moq: number
  leadTime: {
    standard: number
    custom: number
  }
  images: ProductImage[]
  relatedProducts: string[]
  certDocumentUrl?: string        // 合规证书下载链接（占位）
  viewer3dUrl?: string            // 3D 查看器 SDK 嵌入链接（iframe src）
}

export interface VapeCategory {
  id: string
  slug: string
  name: LocalizedString
  description: LocalizedString
  image: string
  icon?: string
  sortOrder: number
  productCount: number
  type: 'product-type' | 'series'
}

export interface VapeSeries {
  slug: SeriesSlug
  name: LocalizedString
  tagline: LocalizedString
  description: LocalizedString
  heroImage: string
  accentColor: string             // 系列主题色，如 '#34d399'
  keyFeatures: LocalizedString[]
  productCount: number
  sortOrder: number
}

export interface ComplianceRegionDetail {
  region: ComplianceRegion
  name: LocalizedString
  description: LocalizedString
  certifications: Certification[]
  notes: LocalizedString
  documentUrl?: string            // 证书下载（占位）
}

export interface Testimonial {
  id: string
  name: string
  company: string
  country: string
  avatar: string
  rating: number
  content: LocalizedString
  series: SeriesSlug
}

export type Language = 'en' | 'zh'
