// 基础类型定义
export interface Product {
  slug: string
  title: string
  description: string
  images: string[]
  category?: string
  specifications?: Record<string, any>
  moq?: number
  priceRange?: string
}

export interface Category {
  slug: string
  title: string
  description: string
  type: 'application' | 'material' | 'packaging-type' | 'function'
  products: string[]
}

export interface MegaMenuSubItem {
  title: string
  url: string
}

export interface MegaMenuSubcategory {
  title: string
  url: string
  items: MegaMenuSubItem[]
}

export interface MegaMenuCategory {
  title: string
  url: string
  default?: boolean
  subcategories: MegaMenuSubcategory[]
}

export interface NavigationItem {
  title: string
  url: string
  children?: NavigationItem[]
  megaMenu?: boolean
  categories?: MegaMenuCategory[]
}

export interface SiteConfig {
  title: string
  description: string
  logo: string
  email: string
  navigation: NavigationItem[]
}

// DIY相关类型
export interface Position3D {
  x: number
  y: number
  z: number
}

export interface DIYConfiguration {
  id: string
  productId: string           // 基于哪个产品
  userId?: string             // 用户ID（可选，未登录也可用）
  
  // 配置选项
  shape: {
    type: 'bottle' | 'jar' | 'tube' | 'box'
    variant: string           // 具体型号
  }
  material: {
    type: 'glass' | 'plastic' | 'acrylic' | 'metal'
    subType?: string          // 如 PETG, PP, HDPE
  }
  finish: {
    type: 'clear' | 'frosted' | 'spray' | 'electroplate' | 'matte'
    color?: string            // HEX色值
  }
  decoration: {
    logo?: {
      url: string
      position: Position3D
      scale: number
    }
    pattern?: {
      url: string
      type: 'wrap' | 'label' | 'print'
    }
  }
  accessories: {
    cap?: string              // 瓶盖型号
    pump?: string             // 泵头型号
    nozzle?: string           // 喷嘴型号
  }
  
  // 3D场景数据
  realiboxSceneId?: string    // Realibox场景ID
  thumbnailUrl?: string       // 预览缩略图
  
  // 元数据
  createdAt: string
  updatedAt: string
  status: 'draft' | 'saved' | 'submitted'
}

// Realibox SDK接口
export interface RealiboxSDK {
  init(container: HTMLElement, sceneId: string): void
  updateShape(shapeType: string): void
  updateMaterial(materialType: string): void
  updateColor(hex: string): void
  updateFinish(finishType: string): void
  applyLogo(imageUrl: string, position: Position3D): void
  updateAccessory(type: string, modelId: string): void
  getSnapshot(): Promise<string>  // 返回base64缩略图
  destroy(): void
}

// 页面数据类型
export interface PageData {
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
