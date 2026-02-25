export interface LocalizedString {
  zh: string
  en: string
}

export interface Category {
  id: string
  slug: string
  dimension: 'application' | 'material' | 'type'
  name: LocalizedString
  description: LocalizedString
  image: string
  icon?: string
  sortOrder: number
  productCount: number
}

export interface PriceTier {
  minQty: number
  maxQty?: number
  unitPrice: number
}

export interface ProductSpecs {
  capacity: number
  capacityOptions?: number[]
  height: number
  diameter: number
  neckSize?: number
  weight: number
  material: string
  innerMaterial?: string
  lidMaterial?: string
  finish: string[]
  color: string[]
  pantoneCustom: boolean
  printing: string[]
  certification?: string[]
}

export interface ProductImage {
  url: string
  alt: LocalizedString
  type: 'hero' | 'gallery' | 'detail' | 'lifestyle'
  sortOrder: number
}

export interface Product {
  id: string
  slug: string
  modelNumber: string
  status: 'published' | 'draft' | 'archived'
  isNew: boolean
  isFeatured: boolean
  isCustomizable: boolean
  name: LocalizedString
  tagline: LocalizedString
  description: LocalizedString
  categories: {
    application: string[]
    material: string
    type: string
  }
  tags: string[]
  specs: ProductSpecs
  moq: number
  pricing: {
    currency: string
    tiers: PriceTier[]
  }
  leadTime: {
    standard: number
    custom: number
  }
  sampleFee: number
  sampleFeeRefundable: boolean
  images: ProductImage[]
  has3DModel: boolean
  model3DUrl?: string
  relatedProducts: string[]
  packagingSuggestions?: LocalizedString
  createdAt: string
  updatedAt: string
}

export interface Material {
  id: string
  slug: string
  name: LocalizedString
  description: LocalizedString
  properties: {
    transparent: boolean
    recyclable: boolean
    lightweight: boolean
    premiumFeel: boolean
    chemicalResistant: boolean
    heatResistant: boolean
  }
  pros: { zh: string[]; en: string[] }
  cons: { zh: string[]; en: string[] }
  typicalUse: LocalizedString
  image: string
  sortOrder: number
}

export type Language = 'zh' | 'en'
