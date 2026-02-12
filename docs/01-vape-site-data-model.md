# 电子烟独立站 — 完整数据模型设计

> 基于 VOOPOO 官网（voopoo.com + shop.voopoo.com）深度研究，按网站页面模块拆解所需数据字段。
> 本文档用于指导 NocoBase 表结构配置。

---

## 一、网站整体页面结构（参考 VOOPOO）

```
首页 (Homepage)
├── Hero Banner 轮播
├── 新品推荐
├── 产品系列入口
├── 品牌故事/技术亮点
├── 新闻/博客
└── Newsletter 订阅

产品系列页 (Series Page)  如 /argus-series
├── 系列 Banner + 系列介绍
├── 重点产品大图展示（带卖点标签）
├── 全系列产品网格列表（带核心参数摘要）
└── 品牌/技术入口

产品详情页 (Product Detail)  如 /argus-series/argus-p3
├── 产品 Hero（名称 + 主图 + 核心卖点标签）
├── 产品视频
├── 卖点详细展示（图文交替，动效丰富）
├── 兼容配件展示
├── 安全保护特性
├── 技术规格参数（设备参数 + 烟弹参数）
├── 包装清单（按版本区分：Standard / US / TPD）
└── 相关产品推荐

商城购买页 (Shop Product)  如 shop.voopoo.com/products/argus-p3
├── 产品图片画廊
├── 产品名称 + 价格
├── SKU 选择（颜色）
├── 产品描述（卖点 + 规格 + 包装清单）
├── 加入购物车 / 立即购买
└── 社交分享

商城首页 (Shop Home)
├── 促销 Banner
├── 新品区
├── 烟弹/配件区
├── 线圈区
├── FAQ
└── 博客

其他页面
├── 品牌故事 (Brand Story)
├── 技术平台 (Platform / GENE Chip / iCOSM / PnP X)
├── 新闻 & 活动 (News & Activity)
├── 博客 (Blog)
├── 合作伙伴 (Partnership)
├── 门店查找 (Store Locator)
├── 下载中心 (Download - 手册/软件)
├── FAQ
├── 防伪验证 (Security Code)
├── 售后服务 (Warranty / After Sales)
└── 联系我们
```

---

## 二、数据表设计

### 2.1 产品系列表 `product_series`

> 对应 VOOPOO 的 ARGUS / DRAG / VINCI / V Series 等系列概念

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| name | String(100) | ✅ | 系列名称，如 "ARGUS Series" |
| slug | String(100) | ✅ | URL 标识，如 "argus-series" |
| tagline | String(200) | ❌ | 系列标语，如 "Spark Your Life" |
| description | Text | ❌ | 系列介绍文案 |
| banner_image | String(500) | ❌ | 系列页顶部 Banner 图 |
| banner_mobile_image | String(500) | ❌ | 移动端 Banner |
| logo_image | String(500) | ❌ | 系列 Logo |
| sort_order | Integer | ❌ | 排序权重 |
| is_active | Boolean | ✅ | 是否启用 |
| seo_title | String(200) | ❌ | SEO 标题 |
| seo_description | Text | ❌ | SEO 描述 |

---

### 2.2 产品分类表 `product_categories`

> 区分产品大类：设备(Device)、烟弹(Cartridge)、线圈(Coil)、配件(Accessory)

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| name | String(100) | ✅ | 分类名称 |
| slug | String(100) | ✅ | URL 标识 |
| parent_id | Integer (FK) | ❌ | 父分类 ID |
| image | String(500) | ❌ | 分类封面图 |
| description | Text | ❌ | 分类描述 |
| sort_order | Integer | ❌ | 排序 |
| is_active | Boolean | ✅ | 是否启用 |

**预置分类**：
- 设备 (Devices)
  - Pod 系统 (Pod Systems)
  - Pod Mod
  - Box Mod
- 烟弹 (Cartridges)
- 线圈 (Coils)
- 配件 (Accessories)

---

### 2.3 产品表 `products`

> 核心商品表，对应每一个独立产品（如 ARGUS P3、DRAG S3）

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| name | String(200) | ✅ | 产品名称，如 "ARGUS P3" |
| slug | String(200) | ✅ | URL 标识，如 "argus-p3" |
| subtitle | String(300) | ❌ | 副标题/一句话卖点，如 "Big Play, Touch Free" |
| series_id | Integer (FK) | ❌ | 所属系列 |
| category_id | Integer (FK) | ✅ | 所属分类 |
| brand | String(100) | ❌ | 品牌名 |
| product_type | Enum | ✅ | device / cartridge / coil / accessory |
| status | Enum | ✅ | draft / published / archived |
| is_new | Boolean | ❌ | 是否新品（用于"New Arrival"标签） |
| is_featured | Boolean | ❌ | 是否推荐 |
| is_bestseller | Boolean | ❌ | 是否畅销 |
| short_description | Text | ❌ | 简短描述（列表页卡片用） |
| description | RichText | ❌ | 详细描述（商城购买页用） |
| hero_tagline | String(200) | ❌ | 详情页 Hero 区标语 |
| video_url | String(500) | ❌ | 产品视频链接 |
| seo_title | String(200) | ❌ | SEO 标题 |
| seo_description | Text | ❌ | SEO 描述 |
| seo_keywords | String(300) | ❌ | SEO 关键词 |
| sort_order | Integer | ❌ | 排序 |
| published_at | DateTime | ❌ | 发布时间 |
| created_at | DateTime | ✅ | 创建时间 |
| updated_at | DateTime | ✅ | 更新时间 |

---

### 2.4 产品 SKU 表 `product_skus`

> VOOPOO 的 SKU 维度主要是：颜色/外观 + 地区版本

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| product_id | Integer (FK) | ✅ | 关联产品 |
| sku_code | String(100) | ✅ | SKU 编码 |
| name | String(200) | ❌ | SKU 名称（如 "ARGUS P3 - Carbon Fiber"） |
| color | String(100) | ❌ | 颜色名称（如 Carbon Fiber, Spark Gold） |
| color_hex | String(7) | ❌ | 颜色色值（用于前端色块展示） |
| color_image | String(500) | ❌ | 颜色缩略图（用于选色器） |
| region_version | Enum | ❌ | standard / us / tpd / crc（地区版本） |
| price | Decimal(10,2) | ✅ | 售价 |
| original_price | Decimal(10,2) | ❌ | 原价（划线价） |
| stock | Integer | ✅ | 库存数量 |
| is_active | Boolean | ✅ | 是否上架 |
| sort_order | Integer | ❌ | 排序 |

---

### 2.5 产品图片表 `product_images`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| product_id | Integer (FK) | ✅ | 关联产品 |
| sku_id | Integer (FK) | ❌ | 关联特定 SKU（颜色对应图） |
| url | String(500) | ✅ | 图片 URL |
| alt_text | String(200) | ❌ | Alt 描述 |
| type | Enum | ✅ | hero / gallery / detail / color_swatch / lifestyle |
| sort_order | Integer | ❌ | 排序 |

---

### 2.6 产品卖点展示表 `product_highlights`

> 对应 VOOPOO 产品详情页中大量的图文卖点区块（如触屏交互、表盘定制、DIY 功率调节等）

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| product_id | Integer (FK) | ✅ | 关联产品 |
| title | String(200) | ✅ | 卖点标题，如 "Innovative Touchscreen Interaction" |
| subtitle | String(300) | ❌ | 卖点副标题 |
| description | Text | ❌ | 卖点详细描述 |
| image | String(500) | ❌ | 卖点配图 |
| video_url | String(500) | ❌ | 卖点视频 |
| icon | String(200) | ❌ | 图标（用于核心参数标签，如电池、功率等） |
| layout | Enum | ❌ | text_left / text_right / full_width / grid（布局方式） |
| sort_order | Integer | ✅ | 排序（决定页面展示顺序） |

---

### 2.7 产品规格参数表 `product_specs`

> VOOPOO 的规格分两组：设备参数(Device Parameters) + 烟弹参数(Cartridge Parameters)

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| product_id | Integer (FK) | ✅ | 关联产品 |
| group_name | String(100) | ✅ | 参数分组，如 "Device Parameters" / "Cartridge Parameters" |
| spec_name | String(100) | ✅ | 参数名 |
| spec_value | String(300) | ✅ | 参数值 |
| sort_order | Integer | ❌ | 排序 |

**电子烟行业典型参数（设备）**：
| 参数名 | 示例值 | 说明 |
|--------|--------|------|
| Material | Zinc Alloy / Leather | 机身材质 |
| Output Power | 5-30 W / 5-60 W | 输出功率范围 |
| Output Voltage | 3.2-4.2 V | 输出电压范围 |
| Resistance Range | 0.4-3.0 Ω | 支持阻值范围 |
| Battery Capacity | 1500 mAh / 3000 mAh | 电池容量 |
| Charging | Type-C 5V/2A | 充电规格 |
| Screen Size | 2.01" TFT / 0.96" TFT | 屏幕尺寸 |
| Dimensions | 51.35×20.7×60.7 mm | 产品尺寸 |
| Weight | 82 g | 重量 |
| Chip | GENE AI 2.0 | 芯片型号 |

**电子烟行业典型参数（烟弹）**：
| 参数名 | 示例值 | 说明 |
|--------|--------|------|
| Cartridge Name | ARGUS SNAP Cartridge | 烟弹名称 |
| Capacity | 2 mL / 5 mL / 15 mL | 烟油容量 |
| Resistance | 0.4 Ω / 0.7 Ω | 线圈阻值 |
| Material | PCTG | 烟弹材质 |
| E-Liquid Filling | Top Filling / Side Filling | 注油方式 |
| Recommended E-liquid | Nicotine ≤50 mg (Nic Salt / Freebase) | 推荐烟油 |
| Airflow | Top Airflow / Stepless | 进气方式 |
| Coil Type | Mesh / Dual Mesh | 线圈类型 |

---

### 2.8 包装清单表 `product_package_lists`

> VOOPOO 按地区版本（Standard/US/TPD）提供不同包装清单

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| product_id | Integer (FK) | ✅ | 关联产品 |
| version | Enum | ✅ | standard / us / tpd / crc |
| items | JSON | ✅ | 包装内容列表，如 [{"name": "ARGUS P3 Device", "qty": 1}, ...] |

---

### 2.9 产品兼容性表 `product_compatibility`

> VOOPOO 强调产品家族兼容性（如 ARGUS POD Family 烟弹互通）

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| product_id | Integer (FK) | ✅ | 主产品（设备） |
| compatible_product_id | Integer (FK) | ✅ | 兼容产品（烟弹/线圈） |
| compatibility_note | String(300) | ❌ | 兼容说明 |

---

### 2.10 产品安全特性表 `product_safety_features`

> 电子烟行业特有：安全保护功能列表

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| product_id | Integer (FK) | ✅ | 关联产品 |
| feature_name | String(200) | ✅ | 如 "Overtime Protection: 5s" |
| icon | String(200) | ❌ | 图标 |
| sort_order | Integer | ❌ | 排序 |

---

### 2.11 技术平台表 `technology_platforms`

> 对应 VOOPOO 的 iCOSM CODE 2.0、PnP X Platform、GENE Chip 等技术品牌

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| name | String(100) | ✅ | 技术名称，如 "iCOSM CODE 2.0" |
| slug | String(100) | ✅ | URL 标识 |
| tagline | String(200) | ❌ | 标语 |
| description | RichText | ❌ | 详细介绍 |
| logo_image | String(500) | ❌ | Logo |
| banner_image | String(500) | ❌ | Banner |
| is_active | Boolean | ✅ | 是否启用 |

---

### 2.12 产品-技术关联表 `product_technologies`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| product_id | Integer (FK) | ✅ | 关联产品 |
| technology_id | Integer (FK) | ✅ | 关联技术 |

---

### 2.13 Banner 轮播表 `banners`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| title | String(200) | ✅ | 标题 |
| subtitle | String(300) | ❌ | 副标题 |
| image_url | String(500) | ✅ | 桌面端图片 |
| mobile_image_url | String(500) | ❌ | 移动端图片 |
| link_url | String(500) | ❌ | 跳转链接 |
| link_text | String(100) | ❌ | 按钮文字，如 "EXPLORE MORE" |
| position | Enum | ✅ | homepage_hero / series_top / promotion |
| sort_order | Integer | ❌ | 排序 |
| is_active | Boolean | ✅ | 是否启用 |
| start_time | DateTime | ❌ | 生效时间 |
| end_time | DateTime | ❌ | 失效时间 |

---

### 2.14 文章/博客表 `articles`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| title | String(300) | ✅ | 标题 |
| slug | String(300) | ✅ | URL 标识 |
| cover_image | String(500) | ❌ | 封面图 |
| summary | Text | ❌ | 摘要 |
| content | RichText | ✅ | 正文 |
| category | Enum | ❌ | news / activity / blog / guide |
| tags | JSON | ❌ | 标签数组 |
| author | String(100) | ❌ | 作者 |
| status | Enum | ✅ | draft / published |
| published_at | DateTime | ❌ | 发布时间 |
| seo_title | String(200) | ❌ | SEO 标题 |
| seo_description | Text | ❌ | SEO 描述 |

---

### 2.15 静态页面表 `pages`

> 品牌故事、合作伙伴、FAQ、售后等页面

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| title | String(200) | ✅ | 页面标题 |
| slug | String(200) | ✅ | URL 路径 |
| content | RichText | ❌ | 页面内容 |
| template | Enum | ❌ | default / brand / faq / contact |
| status | Enum | ✅ | draft / published |
| seo_title | String(200) | ❌ | SEO 标题 |
| seo_description | Text | ❌ | SEO 描述 |

---

### 2.16 站点配置表 `site_settings`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| key | String(100) | ✅ | 配置键 |
| value | Text | ✅ | 配置值 |
| group | String(50) | ❌ | 分组 |

**预置配置项**：

| key | 说明 | 示例值 |
|-----|------|--------|
| site_name | 站点名称 | VOOPOO |
| site_logo | Logo URL | /images/logo.svg |
| site_favicon | Favicon | /favicon.ico |
| site_slogan | 品牌标语 | Spark Your Life |
| footer_text | 页脚文案 | WARNING: This product contains nicotine... |
| contact_email_sales | 销售邮箱 | sales@voopoo.com |
| contact_email_support | 客服邮箱 | support@voopoo.com |
| contact_email_marketing | 市场邮箱 | marketing@voopoo.com |
| contact_phone | 联系电话 | 0086-4009 6000 61 |
| service_hours | 服务时间 | 9:30am-12:00am, 1:30pm-6:00pm, Mon-Fri GMT+8 |
| social_facebook | Facebook | https://facebook.com/... |
| social_instagram | Instagram | https://instagram.com/... |
| social_twitter | Twitter/X | https://x.com/... |
| social_youtube | YouTube | https://youtube.com/... |
| social_tiktok | TikTok | https://tiktok.com/... |
| currency | 默认币种 | USD |
| age_verification | 年龄验证开关 | true |
| age_minimum | 最低年龄 | 21 |
| nicotine_warning | 尼古丁警告文案 | This product contains nicotine... |
| anti_counterfeit_enabled | 防伪验证开关 | true |

---

### 2.17 导航菜单表 `navigation_items`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| label | String(100) | ✅ | 菜单文字 |
| url | String(500) | ✅ | 链接 |
| parent_id | Integer (FK) | ❌ | 父级菜单 |
| position | Enum | ✅ | header / footer_products / footer_discover / footer_support |
| icon | String(200) | ❌ | 图标 |
| image | String(500) | ❌ | 菜单配图（Mega Menu 用） |
| sort_order | Integer | ❌ | 排序 |
| is_active | Boolean | ✅ | 是否启用 |

---

### 2.18 门店定位表 `store_locations`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| name | String(200) | ✅ | 门店名称 |
| country | String(100) | ✅ | 国家 |
| state | String(100) | ❌ | 州/省 |
| city | String(100) | ✅ | 城市 |
| address | String(500) | ✅ | 详细地址 |
| latitude | Decimal(10,7) | ❌ | 纬度 |
| longitude | Decimal(10,7) | ❌ | 经度 |
| phone | String(50) | ❌ | 电话 |
| store_type | Enum | ❌ | authorized_dealer / flagship / online |
| is_active | Boolean | ✅ | 是否启用 |

---

### 2.19 FAQ 表 `faqs`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| question | String(500) | ✅ | 问题 |
| answer | RichText | ✅ | 回答 |
| category | String(100) | ❌ | 分类（如 Payment / Shipping / Warranty） |
| sort_order | Integer | ❌ | 排序 |
| is_active | Boolean | ✅ | 是否启用 |

---

### 2.20 下载资源表 `downloads`

> 对应 VOOPOO 的用户手册、固件软件下载

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| product_id | Integer (FK) | ❌ | 关联产品 |
| title | String(200) | ✅ | 资源标题 |
| type | Enum | ✅ | manual / firmware / software |
| file_url | String(500) | ✅ | 文件下载链接 |
| file_size | String(50) | ❌ | 文件大小 |
| version | String(50) | ❌ | 版本号 |
| is_active | Boolean | ✅ | 是否启用 |

---

### 2.21 用户表 `users`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| email | String(200) | ✅ | 邮箱 |
| password_hash | String(200) | ✅ | 密码哈希 |
| first_name | String(100) | ❌ | 名 |
| last_name | String(100) | ❌ | 姓 |
| phone | String(50) | ❌ | 手机号 |
| avatar | String(500) | ❌ | 头像 |
| birth_date | Date | ❌ | 出生日期（年龄验证） |
| status | Enum | ✅ | active / disabled |
| newsletter_subscribed | Boolean | ❌ | 是否订阅 Newsletter |
| created_at | DateTime | ✅ | 注册时间 |

---

### 2.22 用户地址表 `user_addresses`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| user_id | Integer (FK) | ✅ | 关联用户 |
| receiver_name | String(100) | ✅ | 收件人 |
| phone | String(50) | ✅ | 电话 |
| country | String(100) | ✅ | 国家 |
| state | String(100) | ❌ | 州/省 |
| city | String(100) | ✅ | 城市 |
| address_line1 | String(300) | ✅ | 地址行 1 |
| address_line2 | String(300) | ❌ | 地址行 2 |
| zip_code | String(20) | ✅ | 邮编 |
| is_default | Boolean | ❌ | 是否默认 |

---

### 2.23 订单表 `orders`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| order_no | String(50) | ✅ | 订单编号 |
| user_id | Integer (FK) | ✅ | 下单用户 |
| status | Enum | ✅ | pending / paid / shipped / delivered / cancelled / refunded |
| total_amount | Decimal(10,2) | ✅ | 订单总额 |
| discount_amount | Decimal(10,2) | ❌ | 优惠金额 |
| shipping_fee | Decimal(10,2) | ❌ | 运费 |
| payment_amount | Decimal(10,2) | ✅ | 实付金额 |
| payment_method | String(50) | ❌ | 支付方式（PayPal/Credit Card/Apple Pay 等） |
| shipping_address | JSON | ✅ | 收货地址快照 |
| remark | Text | ❌ | 备注 |
| paid_at | DateTime | ❌ | 支付时间 |
| shipped_at | DateTime | ❌ | 发货时间 |
| delivered_at | DateTime | ❌ | 签收时间 |
| created_at | DateTime | ✅ | 下单时间 |

---

### 2.24 订单明细表 `order_items`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| order_id | Integer (FK) | ✅ | 关联订单 |
| product_id | Integer (FK) | ✅ | 关联产品 |
| sku_id | Integer (FK) | ✅ | 关联 SKU |
| product_name | String(200) | ✅ | 商品名称快照 |
| sku_info | String(300) | ❌ | SKU 信息快照 |
| image_url | String(500) | ❌ | 商品图片快照 |
| price | Decimal(10,2) | ✅ | 单价 |
| quantity | Integer | ✅ | 数量 |
| subtotal | Decimal(10,2) | ✅ | 小计 |

---

### 2.25 物流追踪表 `shipments`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| order_id | Integer (FK) | ✅ | 关联订单 |
| carrier | String(100) | ✅ | 物流公司 |
| tracking_no | String(100) | ✅ | 物流单号 |
| tracking_url | String(500) | ❌ | 追踪链接 |
| status | Enum | ✅ | pending / in_transit / delivered |
| shipped_at | DateTime | ✅ | 发货时间 |

---

### 2.26 产品 3D 资产关联表 `product_3d_assets`

> 对接 PXM Studio，不走 NocoBase 数据流，仅存储关联关系

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| product_id | Integer (FK) | ✅ | 关联产品 |
| asset_type | Enum | ✅ | configurator / viewer |
| studio_scene_id | String(200) | ✅ | PXM Studio 场景 ID |
| embed_url | String(500) | ✅ | 嵌入 URL |
| thumbnail | String(500) | ❌ | 缩略图 |

---

### 2.27 防伪验证记录表 `security_verifications`

> 电子烟行业特有：产品防伪码验证

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| security_code | String(100) | ✅ | 防伪码 |
| product_id | Integer (FK) | ❌ | 关联产品 |
| is_verified | Boolean | ✅ | 是否已验证 |
| verified_at | DateTime | ❌ | 验证时间 |
| verified_ip | String(50) | ❌ | 验证 IP |

---

### 2.28 Newsletter 订阅表 `newsletter_subscribers`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| email | String(200) | ✅ | 邮箱 |
| status | Enum | ✅ | active / unsubscribed |
| subscribed_at | DateTime | ✅ | 订阅时间 |
| unsubscribed_at | DateTime | ❌ | 退订时间 |

---

## 三、数据表总览

| # | 表名 | 模块 | 说明 |
|---|------|------|------|
| 1 | product_series | 商品 | 产品系列 |
| 2 | product_categories | 商品 | 产品分类 |
| 3 | products | 商品 | 产品主表 |
| 4 | product_skus | 商品 | SKU（颜色/版本） |
| 5 | product_images | 商品 | 产品图片 |
| 6 | product_highlights | 商品 | 卖点展示 |
| 7 | product_specs | 商品 | 规格参数 |
| 8 | product_package_lists | 商品 | 包装清单 |
| 9 | product_compatibility | 商品 | 兼容性关系 |
| 10 | product_safety_features | 商品 | 安全特性 |
| 11 | technology_platforms | 商品 | 技术平台 |
| 12 | product_technologies | 商品 | 产品-技术关联 |
| 13 | product_3d_assets | 商品 | 3D 资产关联 |
| 14 | banners | 内容 | 轮播 Banner |
| 15 | articles | 内容 | 文章/博客 |
| 16 | pages | 内容 | 静态页面 |
| 17 | faqs | 内容 | FAQ |
| 18 | downloads | 内容 | 下载资源 |
| 19 | site_settings | 站点 | 全局配置 |
| 20 | navigation_items | 站点 | 导航菜单 |
| 21 | store_locations | 站点 | 门店定位 |
| 22 | security_verifications | 站点 | 防伪验证 |
| 23 | newsletter_subscribers | 站点 | Newsletter |
| 24 | users | 用户 | 用户 |
| 25 | user_addresses | 用户 | 用户地址 |
| 26 | orders | 订单 | 订单 |
| 27 | order_items | 订单 | 订单明细 |
| 28 | shipments | 订单 | 物流追踪 |

**共 28 张表**

---

## 四、PIM 同步字段映射（PIM → NocoBase）

以下字段建议由 PIM 维护，通过定时同步写入 NocoBase：

| NocoBase 表 | 同步字段 | 说明 |
|-------------|----------|------|
| products | name, subtitle, description, short_description, seo_* | 产品基础信息 |
| product_skus | sku_code, color, price, original_price | SKU 信息 |
| product_images | url, alt_text, type | 图片（来自 DAM） |
| product_specs | group_name, spec_name, spec_value | 规格参数 |
| product_highlights | title, subtitle, description, image | 卖点内容 |
| product_package_lists | version, items | 包装清单 |

以下字段由 NocoBase 独立管理（不从 PIM 同步）：

| NocoBase 表 | 说明 |
|-------------|------|
| product_skus.stock | 库存（商城管理） |
| product_skus.is_active | 上下架状态 |
| orders / order_items / shipments | 订单全链路 |
| users / user_addresses | 用户数据 |
| banners / articles / pages | 运营内容 |
| site_settings / navigation_items | 站点配置 |
