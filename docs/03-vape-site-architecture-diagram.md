# 电子烟独立站 — 架构可视化图

> 通过图表形式展示电子烟独立站的整体架构，包括：数据流架构、页面结构、表关系、PIM 集成等。
> 帮助快速理解系统全貌。

---

## 一、整体系统架构图

```mermaid
graph TB
    subgraph "PXM 核心平台"
        PIM[产品信息管理 PIM]
        DAM[数字资产管理 DAM]
        Studio[Studio 3D]
        PIM --> |行业模板| PIM
    end
    
    subgraph "NocoBase 后台系统"
        subgraph "数据层"
            Products[商品管理]
            Content[内容管理]
            Order[订单管理]
            User[用户管理]
            Site[站点配置]
        end
        
        subgraph "API 层"
            API[REST API]
        end
    end
    
    subgraph "前端独立站"
        subgraph "页面层"
            Home[首页]
            Series[系列页]
            Detail[产品详情页]
            Shop[商城页]
            Other[其他页面]
        end
        
        subgraph "组件层"
            Components[共享组件库]
        end
    end
    
    PIM --> |定时同步 API| Products
    DAM --> |图片资源| Products
    Studio --> |3D 配置器| Detail
    
    Products --> API
    Content --> API
    Order --> API
    User --> API
    Site --> API
    
    API --> Home
    API --> Series
    API --> Detail
    API --> Shop
    API --> Other
    
    Components --> Home
    Components --> Series
    Components --> Detail
    Components --> Shop
    
    classDef pim fill:#e1f5fe
    classDef nocobase fill:#f3e5f5
    classDef frontend fill:#e8f5e9
    classDef api fill:#fff3e0
    
    class PIM,DAM,Studio pim
    class Products,Content,Order,User,Site nocobase
    class API api
    class Home,Series,Detail,Shop,Other,Components frontend
```

---

## 二、数据表关系图

```mermaid
erDiagram
    %% 产品核心表
    product_series ||--o{ products : "has many"
    product_categories ||--o{ products : "belongs to"
    products ||--o{ product_skus : "has many"
    products ||--o{ product_images : "has many"
    products ||--o{ product_highlights : "has many"
    products ||--o{ product_specs : "has many"
    products ||--o{ product_package_lists : "has many"
    products ||--o{ product_compatibility : "has many"
    products ||--o{ product_safety_features : "has many"
    products ||--o{ product_3d_assets : "has many"
    
    %% SKU 扩展
    product_skus ||--o{ product_sku_attributes : "has many"
    product_skus ||--o{ order_items : "has many"
    
    %% 技术平台
    technology_platforms ||--o{ product_technologies : "has many"
    products ||--o{ product_technologies : "has many"
    
    %% 订单相关
    orders ||--o{ order_items : "has many"
    orders ||--o{ shipments : "has many"
    users ||--o{ orders : "has many"
    users ||--o{ user_addresses : "has many"
    
    %% 内容相关
    banners ||--o{ banners : "self"
    articles ||--o{ articles : "self"
    navigation_items ||--o{ navigation_items : "self"
    
    %% 产品兼容性（双向）
    product_compatibility {
        int product_id FK
        int compatible_product_id FK
    }
    
    %% 表字段示例（核心表）
    products {
        int id PK
        string name
        string slug
        string subtitle
        int series_id FK
        int category_id FK
        enum product_type
        enum status
        text description
        text short_description
        string hero_tagline
        string video_url
        boolean is_new
        boolean is_featured
        datetime created_at
    }
    
    product_skus {
        int id PK
        int product_id FK
        string sku_code
        string color
        enum region_version
        decimal price
        decimal original_price
        int stock
        boolean is_active
    }
    
    product_specs {
        int id PK
        int product_id FK
        string group_name
        string spec_name
        string spec_value
    }
    
    product_highlights {
        int id PK
        int product_id FK
        string title
        string subtitle
        text description
        string image
        enum layout
        int sort_order
    }
```

---

## 三、页面结构与数据映射图

```mermaid
graph TD
    subgraph "首页 Homepage"
        A1[Hero Banner] --> B1[banners]
        A2[新品推荐] --> B2[products + product_skus]
        A3[产品系列入口] --> B3[product_series]
        A4[品牌故事] --> B4[pages]
        A5[新闻博客] --> B5[articles]
        A6[Newsletter] --> B6[newsletter_subscribers]
    end
    
    subgraph "产品系列页 Series Page"
        B1[系列 Banner] --> C1[banners]
        B2[系列介绍] --> C2[product_series]
        B3[重点产品] --> C3[products + product_images]
        B4[全部产品] --> C4[products + product_skus]
        B5[技术入口] --> C5[technology_platforms]
    end
    
    subgraph "产品详情页 Product Detail"
        C1[产品 Hero] --> D1[products + product_images]
        C2[产品视频] --> D2[products.video_url]
        C3[卖点展示] --> D3[product_highlights]
        C4[兼容配件] --> D4[product_compatibility]
        C5[安全特性] --> D5[product_safety_features]
        C6[规格参数] --> D6[product_specs]
        C7[包装清单] --> D7[product_package_lists]
        C8[3D 配置器] --> D8[product_3d_assets]
        C9[相关推荐] --> D9[products]
    end
    
    subgraph "商城购买页 Shop Product"
        E1[图片画廊] --> F1[product_images]
        E2[价格显示] --> F2[product_skus]
        E3[SKU 选择] --> F3[product_skus]
        E4[产品描述] --> F4[products + product_specs + product_package_lists]
        E5[加入购物车] --> F5[order_items]
        E6[社交分享] --> F6[site_settings]
    end
    
    subgraph "商城首页 Shop Home"
        G1[促销 Banner] --> H1[banners]
        G2[新品区] --> H2[products]
        G3[烟弹配件] --> H3[products]
        G4[FAQ] --> H4[faqs]
        G5[博客] --> H5[articles]
    end
    
    classDef page fill:#e3f2fd
    classDef data fill:#f1f8e9
    
    class A1,A2,A3,A4,A5,A6,B1,B2,B3,B4,B5,C1,C2,C3,C4,C5,D1,D2,D3,D4,D5,D6,D7,D8,D9,E1,E2,E3,E4,E5,E6,G1,G2,G3,G4,G5 page
    class B1,B2,B3,B4,B5,B6,C1,C2,C3,C4,C5,D1,D2,D3,D4,D5,D6,D7,D8,E1,E2,E3,E4,F1,F2,F3,F4,F5,F6,G1,G2,G3,G4,G5,H1,H2,H3,H4,H5 data
```

---

## 四、数据流程图（PIM → NocoBase → 前端）

```mermaid
sequenceDiagram
    participant PIM as PIM 系统
    participant NB as NocoBase
    participant API as NocoBase API
    participant FE as 前端独立站
    participant User as 用户
    
    Note over PIM,User: 数据同步流程（定时任务）
    PIM->>NB: 1. 同步产品基础信息
    PIM->>NB: 2. 同步 SKU 信息
    PIM->>NB: 3. 同步图片资源（来自 DAM）
    PIM->>NB: 4. 同步规格参数
    PIM->>NB: 5. 同步卖点内容
    PIM->>NB: 6. 同步包装清单
    
    Note over PIM,User: 用户访问流程
    User->>FE: 访问产品列表页
    FE->>API: GET /api/products
    API->>NB: 查询 products + product_skus
    NB-->>API: 返回产品数据
    API-->>FE: JSON 响应
    FE-->>User: 渲染产品列表
    
    User->>FE: 点击产品详情
    FE->>API: GET /api/products/:id
    API->>NB: 查询完整产品信息
    NB-->>API: products + specs + highlights + images
    API-->>FE: 完整产品数据
    FE-->>User: 渲染详情页
    
    Note over PIM,User: 3D 配置器流程（直连 Studio）
    FE->>User: 点击 3D 配置
    FE->>Studio: iframe 嵌入配置器
    Studio-->>User: 3D 交互界面
    
    Note over PIM,User: 订单流程
    User->>FE: 选择 SKU 加入购物车
    FE->>API: POST /api/cart
    API->>NB: 创建/更新购物车
    
    User->>FE: 提交订单
    FE->>API: POST /api/orders
    API->>NB: 创建订单
    NB-->>API: 订单信息
    API-->>FE: 订单确认
    FE-->>User: 订单成功
```

---

## 五、SKU 选择流程图（电子烟行业）

```mermaid
flowchart TD
    Start([用户访问产品页]) --> LoadProduct[加载产品信息]
    LoadProduct --> CheckSKUs{是否有多个 SKU?}
    
    CheckSKUs -->|否| ShowSinglePrice[显示单一价格]
    CheckSKUs -->|是| ShowColorSelector[显示颜色选择器]
    
    ShowColorSelector --> SelectColor[用户选择颜色]
    SelectColor --> CheckRegion{是否有地区版本?}
    
    CheckRegion -->|否| UpdatePrice[更新价格显示]
    CheckRegion -->|是| ShowRegionSelector[显示地区选择器]
    
    ShowRegionSelector --> SelectRegion[用户选择地区]
    SelectRegion --> UpdatePrice
    
    UpdatePrice --> CheckStock{库存是否充足?}
    CheckStock -->|否| DisableButton[禁用购买按钮]
    CheckStock -->|是| EnableButton[启用购买按钮]
    
    EnableButton --> AddToCart[加入购物车]
    DisableButton --> OutOfStock[显示缺货提示]
    
    classDef decision fill:#fff9c4
    classDef action fill:#e8f5e9
    classDef state fill:#e3f2fd
    
    class CheckSKUs,CheckRegion,CheckStock decision
    class ShowColorSelector,ShowRegionSelector,UpdatePrice,EnableButton,DisableButton,AddToCart action
    class Start,LoadProduct,SelectColor,SelectRegion,ShowSinglePrice,OutOfStock state
```

---

## 六、页面组件层次图

```mermaid
graph TD
    subgraph "App"
        Layout[Layout 组件]
        Header[Header]
        Footer[Footer]
        Navigation[Navigation]
        
        Layout --> Header
        Layout --> Main
        Layout --> Footer
        Header --> Navigation
    end
    
    subgraph "页面组件"
        Home[HomePage]
        Series[SeriesPage]
        Detail[ProductDetailPage]
        Shop[ShopPage]
        
        Main --> Home
        Main --> Series
        Main --> Detail
        Main --> Shop
    end
    
    subgraph "公共组件"
        HeroBanner[HeroBanner]
        ProductGrid[ProductGrid]
        ProductCard[ProductCard]
        SpecTable[SpecTable]
        ImageGallery[ImageGallery]
        HighlightSection[HighlightSection]
        
        Home --> HeroBanner
        Home --> ProductGrid
        Series --> ProductGrid
        Detail --> ImageGallery
        Detail --> SpecTable
        Detail --> HighlightSection
        ProductGrid --> ProductCard
    end
    
    subgraph "电子烟特有组件"
        AgeVerification[AgeVerificationModal]
        SafetyFeatures[SafetyFeaturesList]
        Compatibility[CompatibilityMatrix]
        PackageList[PackageListByRegion]
        NicotineWarning[NicotineWarningBanner]
        
        Detail --> SafetyFeatures
        Detail --> Compatibility
        Detail --> PackageList
        Layout --> NicotineWarning
        Layout --> AgeVerification
    end
```

---

## 七、NocoBase 模块划分图

```mermaid
mindmap
  root((NocoBase))
    商品管理
      产品系列
      产品分类
      产品管理
      SKU 管理
      产品图片
      卖点展示
      规格参数
      包装清单
      兼容性管理
      安全特性
      技术平台
      3D 资产
    内容管理
      Banner 轮播
      文章博客
      静态页面
      FAQ
      下载中心
    订单管理
      订单
      订单明细
      物流追踪
      购物车
    用户管理
      用户
      用户地址
      用户偏好
    站点配置
      全局设置
      导航菜单
      门店定位
      防伪验证
      Newsletter
```

---

## 八、部署架构图

```mermaid
graph TB
    subgraph "生产环境"
        subgraph "CDN"
            CDN[静态资源 CDN]
            DAM[DAM 资源]
        end
        
        subgraph "Web 服务器"
            Nginx[Nginx 反向代理]
            Web1[Next.js 服务器 1]
            Web2[Next.js 服务器 2]
        end
        
        subgraph "应用服务器"
            NB1[NocoBase 服务器 1]
            NB2[NocoBase 服务器 2]
            DB[(PostgreSQL)]
            Redis[(Redis 缓存)]
        end
        
        subgraph "PXM 系统"
            PIM_API[PIM API]
            Studio_API[Studio API]
        end
    end
    
    User[用户] --> CDN
    User --> Nginx
    Nginx --> Web1
    Nginx --> Web2
    
    Web1 --> NB1
    Web2 --> NB2
    NB1 --> DB
    NB2 --> DB
    NB1 --> Redis
    NB2 --> Redis
    
    NB1 --> PIM_API
    NB2 --> PIM_API
    
    Web1 --> Studio_API
    Web2 --> Studio_API
    
    CDN --> DAM
    
    classDef user fill:#ffecb3
    classDef cdn fill:#e1f5fe
    classDef web fill:#e8f5e9
    classDef app fill:#f3e5f5
    classDef db fill:#fff3e0
    classDef pxm fill:#ffebee
    
    class User user
    class CDN,DAM cdn
    class Nginx,Web1,Web2 web
    class NB1,NB2,Redis app
    class DB db
    class PIM_API,Studio_API pxm
```

---

## 九、关键数据流说明

### 1. 产品数据流
```
PIM（定义产品） 
  ↓ 定时同步
NocoBase（存储 + API）
  ↓ REST API
前端（渲染页面）
```

### 2. 图片资源流
```
DAM（存储图片）
  ↓ URL 引用
NocoBase（存储 URL）
  ↓ 调用
前端（展示图片）
  ↓ CDN 加速
用户浏览器
```

### 3. 3D 配置器流
```
Studio（3D 场景）
  ↓ 嵌入 URL
前端（iframe 展示）
  ↓ 用户交互
Studio（实时渲染）
```

### 4. 订单数据流
```
用户（下单）
  ↓ API 调用
NocoBase（创建订单）
  ↓ 库存扣减
NocoBase（更新库存）
  ↓ 订单确认
用户（支付）
```

---

## 十、性能优化要点

1. **静态资源 CDN**：产品图片、视频、3D 资源全部走 CDN
2. **API 缓存**：产品列表、分类等常用数据 Redis 缓存
3. **ISR 策略**：Next.js 增量静态生成，产品页预渲染
4. **图片优化**：WebP 格式、响应式图片、懒加载
5. **3D 资源按需加载**：用户点击再加载 3D 配置器

---

## 十一、安全考虑

1. **年龄验证**：首页强制年龄验证弹窗
2. **尼古丁警告**：全站底部固定警告
3. **地区限制**：根据 IP 显示对应地区版本
4. **防伪查询**：独立防伪验证模块
5. **数据加密**：用户信息、订单数据加密存储

---

这份架构图文档从多个维度展示了电子烟独立站的整体结构，应该能帮你更清晰地理解系统全貌。有什么需要进一步说明的地方吗？
