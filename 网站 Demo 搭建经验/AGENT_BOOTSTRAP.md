# AGENT_BOOTSTRAP.md - LuxePack 美妆包材展示项目

> 项目类型：B2B美妆包装产品展示网站  
> 技术栈：Next.js 16 + React 19 + Tailwind CSS 4 + TypeScript  
> 目标：让下一个Agent拿到文档就能直接开发同类项目

---

## 一、技术栈与初始化

### 1.1 完整技术栈列表

| 依赖 | 版本 | 用途 |
|------|------|------|
| next | 16.1.6 | React全栈框架 |
| react | 19.2.3 | UI库 |
| react-dom | 19.2.3 | DOM渲染 |
| typescript | ^5 | 类型系统 |
| tailwindcss | ^4 | CSS框架 |
| @tailwindcss/postcss | ^4 | Tailwind v4 PostCSS插件 |
| i18next | ^25.8.13 | 国际化核心 |
| react-i18next | ^16.5.4 | React i18n集成 |
| framer-motion | ^12.34.3 | 动画库（目前使用较少） |
| lucide-react | ^0.575.0 | 图标库 |
| clsx | ^2.1.1 | 条件类名工具 |
| tailwind-merge | ^3.5.0 | Tailwind类名合并 |

### 1.2 初始化步骤

```bash
# 1. 创建Next.js项目（使用Tailwind v4）
npx create-next-app@latest beauty-packaging-demo --typescript --tailwind --eslint --app

# 2. 安装额外依赖
npm install i18next react-i18next framer-motion lucide-react clsx tailwind-merge

# 3. 关键配置
# - 确保使用Tailwind CSS v4（与v3配置语法不同）
# - 配置tsconfig.json路径别名：@/* -> ./*
# - 创建lib/utils.ts导出cn函数
```

### 1.3 踩过的坑

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 语言切换不生效 | Next.js App Router RSC架构下，react-i18next事件订阅失效 | 在`LanguageProvider`中使用`React.Fragment key={language}`强制重渲染 |
| i18n重复初始化 | 热更新时init被调用多次 | 添加`if (!i18n.isInitialized)`保护 |
| Tailwind v4配置差异 | v4不再使用tailwind.config.js | 改用CSS导入方式配置，见globals.css |
| useTranslation在RSC中不可用 | App Router默认服务端组件 | 在需要i18n的组件顶部加`'use client'` |

### 1.4 启动命令

```bash
npm run dev      # 开发模式 localhost:3000
npm run build    # 生产构建
npm run start    # 生产启动
npm run lint     # ESLint检查
```

---

## 二、目录结构说明

```
app/                          # Next.js App Router
├── page.tsx                  # 首页 - 组装6个Section组件
├── layout.tsx                # 根布局 - 注入LanguageProvider
├── globals.css               # 全局样式 + Tailwind v4导入
├── about/page.tsx            # 关于我们页面
├── contact/page.tsx          # 联系我们页面
├── craft/page.tsx            # 工艺展示页面
├── products/
│   ├── page.tsx              # 产品列表页（筛选+搜索）
│   ├── [slug]/page.tsx       # 产品详情页（SSG）
│   ├── application/[id]/page.tsx  # 按应用分类浏览
│   └── material/[id]/page.tsx       # 按材质分类浏览

components/                   # React组件
├── home/                     # 首页专属Section组件
│   ├── HeroSection.tsx       # 首屏Hero区域
│   ├── CategoriesSection.tsx # 产品分类展示
│   ├── FeaturedProducts.tsx  # 精选产品展示
│   ├── AdvantagesSection.tsx # 公司优势卡片
│   ├── ProcessSection.tsx    # 工艺流程时间线
│   └── CtaSection.tsx        # 底部CTA区域
├── layout/                   # 布局组件
│   ├── Navbar.tsx            # 顶部导航（含语言切换）
│   ├── Footer.tsx            # 页脚
│   └── navbar/               # Navbar子组件
│       ├── ProductsDropdown.tsx
│       └── MobileMenu.tsx
├── products/                 # 产品相关组件
│   ├── ProductsClient.tsx    # 产品列表页面逻辑
│   ├── ProductDetailClient.tsx   # 产品详情页面逻辑
│   ├── CategoryBrowseClient.tsx    # 分类浏览页面逻辑
│   ├── detail/               # 产品详情子组件
│   │   ├── ProductBreadcrumb.tsx
│   │   ├── ImageGallery.tsx
│   │   ├── ProductInfo.tsx
│   │   ├── ProductSpecs.tsx
│   │   ├── ProductTags.tsx
│   │   └── RelatedProducts.tsx
│   └── list/                 # 产品列表子组件
│       ├── SearchBar.tsx
│       ├── FilterSidebar.tsx
│       ├── FilterGroup.tsx
│       └── ProductGrid.tsx
├── about/AboutClient.tsx     # 关于我们页面内容
├── contact/ContactClientNew.tsx  # 联系我们表单
├── craft/CraftClient.tsx     # 工艺展示内容
└── shared/
    └── ProductCard.tsx       # 可复用的产品卡片

contexts/
└── LanguageContext.tsx       # 语言切换上下文 + I18nextProvider包装

data/                         # 模拟数据（JSON文件）
├── products.json             # 产品数据（1348行）
├── categories.json           # 分类数据（129行）
└── materials.json            # 材质数据（189行）

lib/                          # 工具函数
├── utils.ts                  # cn()函数：clsx + tailwind-merge
├── i18n.ts                   # i18next初始化配置
└── data.ts                   # 数据访问层（封装JSON数据操作）

locales/                      # 翻译文件
├── zh.json                   # 中文翻译（475行）
└── en.json                   # 英文翻译（475行）

types/
└── index.ts                  # TypeScript类型定义（107行）

public/                       # 静态资源
├── images/
│   ├── categories/           # 分类封面图
│   ├── products/             # 产品图片
│   └── materials/            # 材质图片
├── craft/                    # 工艺展示图片
└── about/                    # 关于我们图片（工厂照片）
```

### 2.1 关键文件职责

| 文件 | 职责 | 注意点 |
|------|------|--------|
| `lib/data.ts` | 数据访问层 | 所有组件从这里导入数据，而非直接读JSON |
| `lib/i18n.ts` | i18next配置 | 用isInitialized保护防止重复初始化 |
| `contexts/LanguageContext.tsx` | 语言状态管理 | 核心技巧：用key={language}强制重渲染 |
| `types/index.ts` | 所有类型定义 | Product/Category/Material/LocalizedString等 |

---

## 三、数据结构

### 3.1 核心数据模型

```typescript
// types/index.ts

// 所有可翻译字段使用此结构
interface LocalizedString {
  zh: string
  en: string
}

// 产品分类
interface Category {
  id: string
  slug: string
  dimension: 'application' | 'material' | 'type'  // 三维分类体系
  name: LocalizedString
  description: LocalizedString
  image: string           // 封面图路径
  icon?: string           // Lucide图标名
  sortOrder: number
  productCount: number    // 关联产品数量
}

// 材质（用于材质说明页）
interface Material {
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
  pros: { zh: string[]; en: string[] }      // 优点列表
  cons: { zh: string[]; en: string[] }      // 缺点列表
  typicalUse: LocalizedString               // 典型用途
  image: string
  sortOrder: number
}

// 产品
interface Product {
  id: string
  slug: string              // URL友好标识
  modelNumber: string       // 型号（如LPK-GJ-001）
  status: 'published' | 'draft' | 'archived'
  isNew: boolean            // 是否新品
  isFeatured: boolean        // 是否精选
  isCustomizable: boolean   // 是否可定制
  name: LocalizedString
  tagline: LocalizedString   // 副标题/卖点
  description: LocalizedString
  categories: {
    application: string[]    // 应用场景（可多选）
    material: string         // 材质（单选）
    type: string            // 包装类型（单选）
  }
  tags: string[]             // 标签（如luxury, double-wall）
  specs: ProductSpecs        // 详细规格
  moq: number                // 最小起订量
  pricing: {
    currency: string
    tiers: PriceTier[]      // 阶梯价格
  }
  leadTime: {
    standard: number         // 标准交期（天）
    custom: number           // 定制交期（天）
  }
  sampleFee: number
  sampleFeeRefundable: boolean
  images: ProductImage[]
  has3DModel: boolean
  model3DUrl?: string
  relatedProducts: string[]   // 关联产品ID数组
  packagingSuggestions?: LocalizedString  // 包装建议
}

// 产品规格详情
interface ProductSpecs {
  capacity: number
  capacityOptions?: number[]   // 可选容量
  height: number
  diameter: number
  neckSize?: number
  weight: number
  material: string
  innerMaterial?: string
  lidMaterial?: string
  finish: string[]             // 表面处理（如Glossy, Frosted）
  color: string[]              // 可选颜色
  pantoneCustom: boolean       // 支持Pantone定制
  printing: string[]           // 印刷工艺
  certification?: string[]     // 认证（如FDA, ISO）
}

interface ProductImage {
  url: string
  alt: LocalizedString
  type: 'hero' | 'gallery' | 'detail' | 'lifestyle'
  sortOrder: number
}

interface PriceTier {
  minQty: number
  maxQty?: number              // null表示无上限制
  unitPrice: number
}
```

### 3.2 模拟数据组织方式

数据存储在 `data/` 目录下的JSON文件中：

- **products.json**: 约40个产品，包含完整的产品信息
- **categories.json**: 12个分类，覆盖3个维度
  - application: skincare, makeup, homecare
  - material: glass, acrylic, pp, pet, hdpe, aluminum
  - type: bottles, jars, tubes, pumps
- **materials.json**: 6种材质的详细介绍

### 3.3 数据在组件间的传递方式

```
数据流：

JSON文件
   ↓
lib/data.ts（数据访问层，导出products/categories/materials数组和查询函数）
   ↓
Server Component（page.tsx）
   ↓
Client Component（通过props传递）
   ↓
子组件（通过props传递）

关键原则：
1. Server Component直接import data.ts中的数据
2. Client Component通过props接收数据（不能直接import JSON）
3. 所有数据转换在data.ts中封装成函数

示例：
// page.tsx (Server Component)
import { getProductBySlug } from '@/lib/data'
export default async function Page({ params }) {
  const product = getProductBySlug(params.slug)
  return <ProductDetailClient product={product} />
}

// ProductDetailClient.tsx (Client Component)
'use client'
export default function ProductDetailClient({ product }: { product: Product }) {
  // 使用props传入的product
}
```

---

## 四、可复用组件清单

### 4.1 通用组件

| 组件 | 路径 | 用途 | Props | 可直接复用？ |
|------|------|------|-------|-------------|
| ProductCard | `components/shared/ProductCard.tsx` | 产品卡片 | `{ product: Product, className?: string }` | ✅ 是 |

### 4.2 产品列表相关

| 组件 | 路径 | 用途 | Props | 可直接复用？ |
|------|------|------|-------|-------------|
| SearchBar | `components/products/list/SearchBar.tsx` | 搜索框 | `{ value: string, onChange: (v: string) => void }` | ✅ 是 |
| FilterSidebar | `components/products/list/FilterSidebar.tsx` | 筛选侧边栏 | 多个筛选状态和回调 | ⚠️ 需调整筛选字段 |
| FilterGroup | `components/products/list/FilterGroup.tsx` | 筛选选项组 | `{ title, options, value, onChange }` | ✅ 是 |
| ProductGrid | `components/products/list/ProductGrid.tsx` | 产品网格 | `{ products: Product[], onClearFilters: () => void }` | ✅ 是 |

### 4.3 产品详情相关

| 组件 | 路径 | 用途 | Props | 可直接复用？ |
|------|------|------|-------|-------------|
| ProductBreadcrumb | `components/products/detail/ProductBreadcrumb.tsx` | 面包屑导航 | `{ product: Product }` | ✅ 是 |
| ImageGallery | `components/products/detail/ImageGallery.tsx` | 图片画廊 | `{ images: ProductImage[], lang: 'zh' \| 'en' }` | ✅ 是 |
| ProductInfo | `components/products/detail/ProductInfo.tsx` | 产品信息区 | `{ product: Product }` | ⚠️ 需调整字段显示 |
| ProductSpecs | `components/products/detail/ProductSpecs.tsx` | 规格表 | `{ specs: ProductSpecs }` | ⚠️ 需调整规格字段 |
| ProductTags | `components/products/detail/ProductTags.tsx` | 标签展示 | `{ tags: string[] }` | ✅ 是 |
| RelatedProducts | `components/products/detail/RelatedProducts.tsx` | 相关产品 | `{ products: Product[] }` | ✅ 是 |

### 4.4 布局组件

| 组件 | 路径 | 用途 | Props | 可直接复用？ |
|------|------|------|-------|-------------|
| Navbar | `components/layout/Navbar.tsx` | 顶部导航 | 无 | ⚠️ 需修改导航项 |
| Footer | `components/layout/Footer.tsx` | 页脚 | 无 | ⚠️ 需修改内容 |
| ProductsDropdown | `components/layout/navbar/ProductsDropdown.tsx` | 产品下拉菜单 | `{ isOpen, onMouseEnter, onMouseLeave, onItemClick }` | ⚠️ 需修改分类项 |
| MobileMenu | `components/layout/navbar/MobileMenu.tsx` | 移动端菜单 | `{ navItems, language, onChangeLanguage, onClose }` | ✅ 是 |

### 4.5 首页Section组件

这些组件高度定制，不适合直接复用，但可作为结构参考：

- HeroSection: 首屏布局，图片网格+文字区+统计数据
- CategoriesSection: 3列分类卡片网格
- FeaturedProducts: 4列产品卡片+标题
- AdvantagesSection: 4列优势卡片
- ProcessSection: 5步流程时间线
- CtaSection: 大背景图CTA区域

---

## 五、核心功能实现方式

### 5.1 国际化（i18n）

**架构**：
```
lib/i18n.ts（配置）
   ↓
contexts/LanguageContext.tsx（Provider包装 + 强制重渲染）
   ↓
layout.tsx（根布局注入）
   ↓
各组件使用 useTranslation()
```

**关键实现点**：

1. **i18next配置** (`lib/i18n.ts`):
   - 直接导入JSON翻译文件
   - 默认语言en，fallbackLng en
   - react配置：`useSuspense: false`, `bindI18n: 'languageChanged loaded'`
   - 用`isInitialized`保护防止重复初始化

2. **强制重渲染技巧** (`LanguageContext.tsx`):
   ```tsx
   <React.Fragment key={language}>
     {children}
   </React.Fragment>
   ```
   语言切换时key变化，React会卸载并重新挂载整个组件树

3. **使用方式**:
   - 客户端组件：`'use client'` + `const { t, i18n } = useTranslation()`
   - 获取当前语言：`const lang = i18n.language as 'zh' | 'en'`
   - 翻译调用：`t('home.hero.title')`
   - 切换语言：`const { changeLanguage } = useLanguage()`

### 5.2 产品筛选与搜索

**实现组件**: `ProductsClient.tsx`

**状态管理**:
```typescript
const [application, setApplication] = useState('')  // 应用筛选
const [material, setMaterial] = useState('')        // 材质筛选
const [type, setType] = useState('')                // 类型筛选
const [onlyNew, setOnlyNew] = useState(false)       // 仅新品
const [searchQuery, setSearchQuery] = useState('')  // 搜索输入
const [debouncedSearch, setDebouncedSearch] = useState('')  // 防抖后搜索
```

**筛选逻辑** (useMemo):
1. 过滤未发布产品
2. 按application筛选（数组包含）
3. 按material筛选（精确匹配）
4. 按type筛选（精确匹配）
5. 按isNew筛选（布尔值）
6. 按搜索词筛选（匹配modelNumber/name/tagline）

**搜索防抖**:
```typescript
useEffect(() => {
  const timer = setTimeout(() => setDebouncedSearch(searchQuery), 300)
  return () => clearTimeout(timer)
}, [searchQuery])
```

**URL参数同步**:
- 通过`useSearchParams`读取初始筛选值
- 筛选变化不写入URL（当前实现），如需可添加

### 5.3 产品详情页

**路由**: `/products/[slug]`

**实现方式**:
1. **SSG静态生成**: `generateStaticParams()`导出所有产品slug
2. **服务端获取数据**: `getProductBySlug(slug)`
3. **传递给Client Component**: `<ProductDetailClient product={product} />`
4. **子组件拆分**:
   - ImageGallery: 图片画廊展示
   - ProductInfo: 产品名称、卖点、操作按钮
   - ProductSpecs: 规格参数表格
   - ProductTags: 标签云
   - RelatedProducts: 关联产品卡片

**图片展示**:
- 使用`product.images`数组
- hero类型的图片优先展示
- 支持多语言alt文本

### 5.4 分类浏览

**两种分类维度**:

1. **按应用** (`/products/application/[id]`):
   - skincare, makeup, homecare
   - 查询：`getProductsByCategory(id, 'application')`
   - 筛选逻辑：`categories.application.includes(id)`

2. **按材质** (`/products/material/[id]`):
   - glass, acrylic, pp, pet, hdpe, aluminum
   - 查询：`getProductsByCategory(id, 'material')`
   - 筛选逻辑：`categories.material === id`

**页面组件**: `CategoryBrowseClient.tsx`
- 接收category和products作为props
- Hero头部展示分类大图和描述
- 产品网格展示

### 5.5 导航栏产品下拉菜单

**组件**: `ProductsDropdown.tsx`

**结构**:
```
三列布局：
├── 按应用（skincare/makeup/homecare）
├── 按材质（glass/acrylic/plastic/pet/hdpe/aluminum）
└── 按类型（bottles/jars/tubes/pumps）
```

**交互**:
- hover触发显示（Navbar控制isOpen状态）
- 点击后关闭菜单（onItemClick回调）
- 跳转到带查询参数的产品页：`/products?application=skincare`

### 5.6 语言切换

**实现位置**: `Navbar.tsx` + `LanguageContext.tsx`

**切换按钮**:
```tsx
<button onClick={() => changeLanguage(language === 'en' ? 'zh' : 'en')}>
  <Globe className="w-4 h-4" />
  <span>{language === 'en' ? '中文' : 'EN'}</span>
</button>
```

**切换逻辑**:
1. 点击按钮调用`changeLanguage(lang)`
2. 更新React state: `setLanguage(lang)`
3. 调用i18next: `i18nInstance.changeLanguage(lang)`
4. React.Fragment key变化触发整树重渲染

---

## 六、注意事项

### 6.1 TODO / FIXME

| 位置 | 内容 | 优先级 |
|------|------|--------|
| `IMAGES_NEEDED.md` | 缺少产品图片文件 | 高 |
| 多处组件 | 3D模型展示功能已标记但未实现 | 中 |
| `Navbar.tsx:49` | 定制服务外链指向Realibox，可能需要替换 | 低 |

### 6.2 实现上的妥协

1. **图片硬编码**: HeroSection中的产品图片是硬编码路径，未从数据中动态读取
   ```tsx
   // HeroSection.tsx:71-99
   <img src="/images/products/product-lpk-gj-001-lifestyle.png" />
   ```

2. **翻译文件结构**: 当前翻译key是扁平化的，对于大型项目建议使用嵌套结构

3. **筛选状态未持久化**: 产品页筛选状态不在URL中，刷新后丢失

4. **移动端菜单硬编码**: `Navbar.tsx`中的`mobileNavItems`是硬编码数组，未从分类数据动态生成

5. **产品价格展示**: 当前只显示MOQ，未展示阶梯价格（pricing.tiers）

6. **图片加载**: 使用的是原生`<img>`标签，未使用Next.js的Image组件（未配置域名）

### 6.3 可能让开发者困惑的地方

1. **Client Component必须用'use client'**: 
   - 使用useTranslation、useState、useEffect的组件必须标记
   - 忘记标记会导致hook错误

2. **数据流向**:
   - Server Component可以直接import data.ts
   - Client Component必须通过props接收数据
   - 错误：在Client Component中直接import JSON会导致 hydration mismatch

3. **i18n初始化时机**:
   - i18n.ts在import时即初始化
   - 如果有热更新问题，检查isInitialized保护

4. **Tailwind v4配置**:
   - 不再需要tailwind.config.js
   - 配置在globals.css中通过@import

5. **语言切换key技巧**:
   - 不理解这个技巧会导致语言切换不生效
   - 必须在LanguageProvider中使用`<React.Fragment key={language}>`

6. **分类维度**:
   - application是多选（数组），material和type是单选（字符串）
   - 查询逻辑不同：application用includes，其他用===

### 6.4 新增页面的标准模板

**Client Component页面模板**:
```tsx
'use client'

import { useTranslation } from 'react-i18next'

export default function PageClient() {
  const { t } = useTranslation()
  
  return (
    <div className="min-h-screen bg-white">
      {/* 内容 */}
    </div>
  )
}
```

**Server Component页面模板**:
```tsx
import { getData } from '@/lib/data'
import PageClient from '@/components/path/PageClient'

export default async function Page() {
  const data = getData()
  return <PageClient initialData={data} />
}
```

### 6.5 样式规范

**颜色系统**:
- 主品牌色: `#c9a96e`（金色）
- 主文字: `stone-900`
- 次要文字: `stone-500`
- 边框: `stone-200`
- 背景灰: `stone-50`, `stone-100`

**间距系统**:
- 页面最大宽度: `max-w-7xl`
- 页面内边距: `px-4 sm:px-6 lg:px-8`
- Section垂直间距: `py-12`, `py-14`, `py-20`

**圆角规范**:
- 卡片: `rounded-2xl`
- 按钮: `rounded-xl`
- 小元素: `rounded-lg`, `rounded-full`

---

## 七、快速参考

### 7.1 常用命令

```bash
# 开发
npm run dev

# 添加新产品
# 1. 编辑 data/products.json
# 2. 添加产品图片到 public/images/products/
# 3. 更新关联分类的productCount

# 添加翻译
# 同时编辑 locales/zh.json 和 locales/en.json
```

### 7.2 文件创建清单

新增功能时需要创建/修改的文件：

1. **新增页面**:
   - `app/newpage/page.tsx`
   - `components/newpage/NewPageClient.tsx`
   - `locales/zh.json`（添加翻译key）
   - `locales/en.json`（添加翻译key）

2. **新增产品**:
   - `data/products.json`
   - `public/images/products/`（添加图片）
   - `data/categories.json`（更新productCount）

3. **新增分类**:
   - `data/categories.json`
   - `locales/zh.json` 和 `en.json`（导航翻译）
   - `components/layout/Navbar.tsx`（更新mobileNavItems）
   - `components/layout/navbar/ProductsDropdown.tsx`（更新下拉菜单）

---

**最后更新**: 2026-02-25  
**维护者**: Cascade Agent
