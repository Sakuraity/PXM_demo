# 四行业数据模型通用性对比分析

> 对比电子烟、美妆包材、轮毂改装配件、3C/设备制造四个行业的数据模型差异，
> 明确哪些是通用字段（可复用），哪些是行业特有字段（需扩展）。
> 目标：指导 NocoBase 表结构设计时，最大化通用性，最小化行业定制成本。

---

## 一、结论总览

### 通用程度评估

| 模块 | 通用程度 | 说明 |
|------|----------|------|
| 站点配置 | ⭐⭐⭐⭐⭐ 100% | 四行业完全一致 |
| 导航菜单 | ⭐⭐⭐⭐⭐ 100% | 四行业完全一致 |
| 用户管理 | ⭐⭐⭐⭐⭐ 100% | 四行业完全一致 |
| 订单管理 | ⭐⭐⭐⭐⭐ 100% | 四行业完全一致 |
| 物流追踪 | ⭐⭐⭐⭐⭐ 100% | 四行业完全一致 |
| Banner/轮播 | ⭐⭐⭐⭐⭐ 100% | 四行业完全一致 |
| 文章/博客 | ⭐⭐⭐⭐⭐ 100% | 四行业完全一致 |
| 静态页面 | ⭐⭐⭐⭐⭐ 100% | 四行业完全一致 |
| FAQ | ⭐⭐⭐⭐⭐ 100% | 四行业完全一致 |
| Newsletter | ⭐⭐⭐⭐⭐ 100% | 四行业完全一致 |
| 3D 资产关联 | ⭐⭐⭐⭐⭐ 100% | 四行业完全一致（对接 Studio） |
| 产品主表 | ⭐⭐⭐⭐ 90% | 核心字段一致，个别字段行业特有 |
| 产品分类 | ⭐⭐⭐⭐ 90% | 结构一致，分类内容不同 |
| 产品系列 | ⭐⭐⭐⭐ 85% | 结构一致，部分行业无系列概念 |
| 产品图片 | ⭐⭐⭐⭐ 85% | 结构一致，图片类型有差异 |
| 产品卖点展示 | ⭐⭐⭐⭐ 85% | 结构一致，内容完全不同 |
| 产品 SKU | ⭐⭐⭐ 70% | 核心字段一致，SKU 维度差异大 |
| 产品规格参数 | ⭐⭐⭐ 60% | 结构一致（KV 模式），参数项完全不同 |
| 行业特有表 | ⭐ 0% | 每个行业有独特的业务表 |

### 核心结论

> **28 张表中，有 18 张（64%）可以四行业完全复用，无需任何修改。**
> **剩余 10 张表的表结构也基本一致，差异主要体现在：**
> 1. SKU 的变体维度不同（颜色/口味/尺寸/规格）
> 2. 规格参数的具体参数项不同（但都用 KV 结构，无需改表）
> 3. 每个行业有 2-3 张特有业务表

---

## 二、通用表（四行业完全一致，无需修改）

以下 18 张表的字段定义在四个行业中完全相同：

| # | 表名 | 说明 |
|---|------|------|
| 1 | site_settings | 站点全局配置 |
| 2 | navigation_items | 导航菜单 |
| 3 | banners | Banner 轮播 |
| 4 | articles | 文章/博客 |
| 5 | pages | 静态页面 |
| 6 | faqs | FAQ |
| 7 | newsletter_subscribers | Newsletter 订阅 |
| 8 | users | 用户 |
| 9 | user_addresses | 用户地址 |
| 10 | orders | 订单 |
| 11 | order_items | 订单明细 |
| 12 | shipments | 物流追踪 |
| 13 | product_categories | 产品分类（结构通用，内容不同） |
| 14 | product_images | 产品图片 |
| 15 | product_highlights | 产品卖点展示 |
| 16 | product_3d_assets | 3D 资产关联 |
| 17 | store_locations | 门店定位 |
| 18 | product_technologies / technology_platforms | 技术平台（可选，非所有行业需要） |

---

## 三、需要行业适配的表（结构通用，内容/枚举值不同）

### 3.1 产品主表 `products`

**通用字段（四行业一致）**：
- id, name, slug, subtitle, series_id, category_id, brand, status
- is_new, is_featured, is_bestseller
- short_description, description, hero_tagline, video_url
- seo_title, seo_description, seo_keywords
- sort_order, published_at, created_at, updated_at

**行业差异字段**：

| 字段 | 电子烟 | 美妆包材 | 轮毂改装配件 | 3C/设备制造 |
|------|--------|----------|-------------|-------------|
| product_type (枚举) | device / cartridge / coil / accessory | packaging / bottle / tube / cap / pump / jar | wheel / spacer / bolt / cap / adapter | device / module / component / accessory |

> **建议**：`product_type` 字段保留，枚举值按行业配置即可，不需要改表结构。

---

### 3.2 产品系列表 `product_series`

| 行业 | 是否需要系列概念 | 示例 |
|------|-----------------|------|
| 电子烟 | ✅ 强需求 | ARGUS Series, DRAG Series, VINCI Series |
| 美妆包材 | ⚠️ 可选 | 按材质系列（玻璃系列、亚克力系列）或按用途（护肤系列、彩妆系列） |
| 轮毂改装配件 | ✅ 强需求 | 按轮毂品牌/系列（如 Flow Forming, Forged, Multi-Piece） |
| 3C/设备制造 | ✅ 强需求 | 按产品线（如 Pro 系列、Lite 系列） |

> **建议**：保留 `product_series` 表，四行业通用。

---

### 3.3 产品 SKU 表 `product_skus`

**通用字段（四行业一致）**：
- id, product_id, sku_code, name, price, original_price, stock, is_active, sort_order

**行业特有 SKU 维度**：

| SKU 维度 | 电子烟 | 美妆包材 | 轮毂改装配件 | 3C/设备制造 |
|----------|--------|----------|-------------|-------------|
| **颜色** | ✅ 核心维度 | ✅ 核心维度 | ✅ 核心维度（涂装） | ✅ 核心维度 |
| **地区版本** | ✅ Standard/US/TPD/CRC | ❌ | ❌ | ⚠️ 可能有（国际版/国行版） |
| **容量/规格** | ❌ | ✅ 15ml/30ml/50ml/100ml | ❌ | ❌ |
| **材质** | ❌ | ✅ 玻璃/亚克力/PP/PET | ❌ | ❌ |
| **尺寸** | ❌ | ❌ | ✅ 17"/18"/19"/20" | ⚠️ 可能有 |
| **适配车型** | ❌ | ❌ | ✅ BMW/Benz/Audi... | ❌ |
| **孔距(PCD)** | ❌ | ❌ | ✅ 5×112/5×120... | ❌ |
| **ET值(偏距)** | ❌ | ❌ | ✅ ET35/ET45... | ❌ |
| **存储/内存** | ❌ | ❌ | ❌ | ✅ 128GB/256GB/512GB |
| **配置** | ❌ | ❌ | ❌ | ✅ 标准版/Pro版 |

> **建议方案**：采用「通用字段 + 动态属性」模式

```
product_skus 表（通用字段）:
  - id, product_id, sku_code, name
  - price, original_price, stock, is_active, sort_order
  - color, color_hex, color_image  ← 颜色是四行业通用的 SKU 维度

product_sku_attributes 表（动态扩展）:
  - id, sku_id, attribute_name, attribute_value
  
  电子烟: region_version = "US"
  美妆包材: capacity = "30ml", material = "Glass"
  轮毂: size = "18\"", pcd = "5×112", et = "ET35", fitment = "BMW 3 Series"
  3C: storage = "256GB", ram = "8GB"
```

---

### 3.4 产品规格参数表 `product_specs`

> 表结构完全通用（KV 模式），参数项按行业不同。

**四行业典型参数对比**：

| 电子烟 | 美妆包材 | 轮毂改装配件 | 3C/设备制造 |
|--------|----------|-------------|-------------|
| Output Power (5-30W) | Material (Glass/Acrylic) | Diameter (18") | Processor (A17 Pro) |
| Battery Capacity (1500mAh) | Capacity (30ml) | Width (8.5J) | Display (6.7" OLED) |
| Resistance Range (0.4-3.0Ω) | Wall Thickness (2mm) | PCD (5×112) | Battery (4500mAh) |
| Charging (Type-C 5V/2A) | Neck Finish (24/410) | ET/Offset (ET35) | RAM (8GB) |
| Screen Size (2.01" TFT) | Decoration (Frosted/Spray) | Center Bore (66.6mm) | Storage (256GB) |
| Chip (GENE AI 2.0) | MOQ (10,000 pcs) | Weight (9.5kg) | Camera (48MP) |
| Dimensions (51×21×61mm) | Lead Time (30 days) | Load Rating (725kg) | Weight (187g) |
| Weight (82g) | Color Options (Pantone) | Material (6061-T6 Aluminum) | Dimensions (147×71×7.8mm) |
| Cartridge Capacity (2mL) | Compatibility (Pump/Dropper) | Finish (Brushed/Polished) | Connectivity (5G/WiFi 6E) |
| Coil Resistance (0.4Ω) | Certification (FDA/EU) | Certification (TÜV/JWL) | Certification (FCC/CE) |

> **建议**：`product_specs` 表无需修改，用 `group_name` + `spec_name` + `spec_value` 的 KV 结构即可覆盖所有行业。PIM 中按行业模板预定义参数项。

---

## 四、行业特有表

### 4.1 电子烟行业特有

| 表名 | 说明 | 其他行业是否需要 |
|------|------|-----------------|
| product_compatibility | 设备-烟弹兼容性 | 轮毂（车型适配）可复用结构 |
| product_safety_features | 安全保护特性 | 3C（安全认证）可复用结构 |
| product_package_lists | 按地区版本的包装清单 | 其他行业通常只有一个版本 |
| security_verifications | 防伪验证 | 其他行业一般不需要 |
| downloads | 手册/固件下载 | 3C 行业也需要 |

### 4.2 美妆包材行业特有

| 表名 | 说明 | 其他行业是否需要 |
|------|------|-----------------|
| product_customization_options | 定制选项（印刷、喷涂、电镀等） | ❌ |
| product_moq_pricing | 阶梯价格（按 MOQ 定价） | ❌ 其他行业固定价格 |
| product_certifications | 认证信息（FDA、EU 1223/2009 等） | 轮毂/3C 可复用 |
| sample_requests | 样品申请 | ❌ |
| material_library | 材质库（玻璃/亚克力/PP 等材质属性） | ❌ |

### 4.3 轮毂改装配件行业特有

| 表名 | 说明 | 其他行业是否需要 |
|------|------|-----------------|
| vehicle_fitments | 车型适配数据库 | ❌ |
| vehicle_makes | 汽车品牌 | ❌ |
| vehicle_models | 车型 | ❌ |
| product_fitment_map | 产品-车型适配关系 | ❌ |
| gallery_showcase | 实车安装效果图 | ❌ |

### 4.4 3C/设备制造行业特有

| 表名 | 说明 | 其他行业是否需要 |
|------|------|-----------------|
| product_comparisons | 产品对比（参数对比表） | 电子烟也可用 |
| firmware_updates | 固件更新 | 电子烟也可用 |
| product_certifications | 认证信息（FCC、CE、CCC 等） | 可复用 |
| support_tickets | 技术支持工单 | 可复用 |
| product_accessories_bundles | 配件套装 | 可复用 |

---

## 五、SKU 维度深度对比

### 5.1 各行业 SKU 选择器 UI 对比

```
电子烟（参考 VOOPOO shop）:
┌─────────────────────────────┐
│ Color: [Carbon Fiber] [Gold] [Silver] [Blue]  ← 色块选择器
│ Price: $38.99                                  
│ [Add to Cart]                                  
└─────────────────────────────┘

美妆包材:
┌─────────────────────────────┐
│ Material: [Glass ▼]                            ← 下拉选择
│ Capacity: [15ml] [30ml] [50ml] [100ml]         ← 按钮组
│ Color: [Clear] [Frosted] [Amber]               ← 色块选择器
│ Decoration: [None] [Silk Screen] [Hot Stamp]   ← 按钮组
│ MOQ: 10,000 pcs
│ Unit Price: $0.35
│ [Request Quote]                                ← 非直接购买
└─────────────────────────────┘

轮毂改装配件:
┌─────────────────────────────┐
│ Size: [17"] [18"] [19"] [20"]                  ← 按钮组
│ PCD: [5×112] [5×120] [5×114.3]                 ← 按钮组
│ ET: [ET35] [ET45]                              ← 按钮组
│ Finish: [Brushed Silver] [Gloss Black]         ← 色块+文字
│ Price: $289.00 / wheel
│ [Add to Cart] [Check Fitment]                  ← 有适配检查
└─────────────────────────────┘

3C/设备制造:
┌─────────────────────────────┐
│ Configuration: [Standard] [Pro] [Pro Max]      ← 按钮组
│ Storage: [128GB] [256GB] [512GB] [1TB]         ← 按钮组
│ Color: [Black] [Silver] [Blue]                 ← 色块选择器
│ Price: $999.00
│ [Buy Now] [Add to Cart]
└─────────────────────────────┘
```

### 5.2 SKU 维度数量对比

| 行业 | SKU 维度数 | 核心维度 | SKU 组合复杂度 |
|------|-----------|----------|---------------|
| 电子烟 | 1-2 | 颜色 + 地区版本 | 低（通常 5-10 个 SKU） |
| 美妆包材 | 3-5 | 材质 + 容量 + 颜色 + 装饰 | 高（可达数百个组合） |
| 轮毂改装配件 | 3-4 | 尺寸 + PCD + ET + 涂装 | 高（可达数十个组合） |
| 3C/设备制造 | 2-3 | 配置 + 存储 + 颜色 | 中（通常 10-20 个 SKU） |

---

## 六、站点配置差异项

虽然 `site_settings` 表结构通用，但配置项内容有行业差异：

| 配置项 | 电子烟 | 美妆包材 | 轮毂改装 | 3C/设备 |
|--------|--------|----------|----------|---------|
| age_verification | ✅ 必须（21+） | ❌ | ❌ | ❌ |
| nicotine_warning | ✅ 必须 | ❌ | ❌ | ❌ |
| anti_counterfeit | ✅ 常见 | ❌ | ❌ | ✅ 可选 |
| moq_enabled | ❌ | ✅ 必须 | ❌ | ❌ |
| fitment_checker | ❌ | ❌ | ✅ 必须 | ❌ |
| quote_request | ❌ | ✅ 常见 | ⚠️ 可选 | ⚠️ 可选 |
| trade_show_calendar | ❌ | ✅ 常见 | ✅ 常见 | ✅ 常见 |
| warranty_policy | ✅ | ❌ | ✅ | ✅ |
| return_policy | ✅ | ⚠️ 样品不退 | ✅ | ✅ |

---

## 七、前端页面差异

| 页面 | 电子烟 | 美妆包材 | 轮毂改装 | 3C/设备 |
|------|--------|----------|----------|---------|
| 年龄验证弹窗 | ✅ 必须 | ❌ | ❌ | ❌ |
| 产品详情-卖点长页 | ✅ 动效丰富 | ⚠️ 较简洁 | ✅ 动效丰富 | ✅ 动效丰富（参考 Apple） |
| 产品详情-规格参数 | ✅ 设备+烟弹双组 | ✅ 材质+尺寸 | ✅ 轮毂参数 | ✅ 硬件参数 |
| 产品详情-兼容性 | ✅ 烟弹互通 | ❌ | ✅ 车型适配 | ✅ 配件兼容 |
| 产品详情-安全特性 | ✅ 7 重保护 | ❌ | ❌ | ⚠️ 安全认证 |
| 产品详情-包装清单 | ✅ 多版本 | ❌ | ✅ 单版本 | ✅ 单版本 |
| 3D 配置器 | ⚠️ 可选 | ✅ 定制预览 | ✅ 轮毂+车型预览 | ⚠️ 可选 |
| 车型适配查询 | ❌ | ❌ | ✅ 必须 | ❌ |
| 询价/报价系统 | ❌ | ✅ 必须 | ⚠️ 可选 | ⚠️ 可选 |
| 产品对比 | ⚠️ 可选 | ❌ | ✅ 常见 | ✅ 常见 |
| 门店查找 | ✅ | ⚠️ 可选 | ✅ | ✅ |
| 防伪验证 | ✅ | ❌ | ❌ | ⚠️ 可选 |
| 下载中心 | ✅ 手册/固件 | ❌ | ❌ | ✅ 驱动/手册 |
| 技术平台页 | ✅ 芯片/雾化 | ❌ | ⚠️ 锻造工艺 | ✅ 芯片/算法 |

---

## 八、推荐的数据架构策略

### 方案：通用基础表 + 行业扩展属性表

```
┌─────────────────────────────────────────────┐
│              通用基础表（18 张）               │
│  site_settings, navigation, banners,         │
│  articles, pages, faqs, newsletter,          │
│  users, user_addresses, orders,              │
│  order_items, shipments, store_locations,     │
│  product_categories, product_images,          │
│  product_highlights, product_3d_assets,       │
│  technology_platforms                         │
├─────────────────────────────────────────────┤
│         行业通用但内容不同的表（5 张）          │
│  product_series, products, product_skus,      │
│  product_specs, product_technologies          │
├─────────────────────────────────────────────┤
│            行业扩展属性表（1 张）              │
│  product_sku_attributes (KV 动态扩展)         │
├─────────────────────────────────────────────┤
│            行业特有表（按需创建）              │
│  电子烟: product_compatibility,               │
│         product_safety_features,              │
│         product_package_lists,                │
│         security_verifications, downloads     │
│  美妆:  product_customization_options,        │
│         product_moq_pricing,                  │
│         sample_requests, material_library     │
│  轮毂:  vehicle_fitments, vehicle_makes,      │
│         vehicle_models, gallery_showcase      │
│  3C:    product_comparisons,                  │
│         firmware_updates, support_tickets     │
└─────────────────────────────────────────────┘
```

### 核心原则

1. **表结构尽量通用**：用 KV 模式（如 product_specs、product_sku_attributes）处理行业差异
2. **枚举值按行业配置**：product_type、region_version 等枚举值在 PIM 行业模板中定义
3. **行业特有表按需创建**：只有业务逻辑确实不同时才新建表
4. **PIM 控制数据定义**：所有行业差异化的参数项、SKU 维度、分类体系都由 PIM 行业模板管理

---

## 九、实施建议

### 第一步：先做电子烟（当前）
- 按 `01-vape-site-data-model.md` 在 NocoBase 建好 28 张表
- 完成 PIM → NocoBase 数据同步
- 搭建电子烟独立站前端

### 第二步：扩展到其他行业
- 复用 18 张通用表（零修改）
- 复用 5 张内容不同的表（改枚举值/配置）
- 新增 `product_sku_attributes` 表（处理 SKU 维度差异）
- 按行业新增 2-4 张特有表
- PIM 中创建对应行业模板

### 预估工作量

| 行业 | NocoBase 新增表 | NocoBase 修改 | 前端新增页面 | 总工作量 |
|------|----------------|--------------|-------------|---------|
| 电子烟（首个） | 28 张 | - | 全部 | 100%（基准） |
| 美妆包材（第二个） | 4-5 张 | 枚举值调整 | 询价系统、定制预览 | ~35% |
| 轮毂改装（第三个） | 4 张 | 枚举值调整 | 车型适配查询 | ~35% |
| 3C/设备（第四个） | 3 张 | 枚举值调整 | 产品对比、下载中心（可复用电子烟） | ~25% |
