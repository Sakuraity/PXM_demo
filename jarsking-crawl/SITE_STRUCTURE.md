# Jarsking.com 网站结构梳理

> 基于 https://www.jarsking.com/ 爬取数据整理，共100个页面  
> 整理时间：2026-02-13

---

## 一、全站信息架构总览

```
jarsking.com/
├── 🏠 首页 (Home)
├── 📦 产品中心 (Products)
│   ├── 产品列表页 (按应用场景分类)
│   └── 产品详情页 (38个SKU)
├── 🗂️ 分类导航 (Categories)
│   ├── 按应用场景 (By Applications)
│   ├── 按材料 (By Materials)
│   ├── 按包装类型 (By Packaging Types)
│   ├── 瓶盖与封口 (Closures & Caps)
│   ├── 泵与喷头 (Pumps & Sprayers)
│   ├── 盒袋配件 (Boxes, Bags & Supplies)
│   └── 产品合集 (Collections)
├── 💡 解决方案 (Solutions)
│   ├── 核心服务能力
│   ├── 行业解决方案
│   └── 特殊功能包装
├── 🏢 关于我们 (About)
│   ├── 品牌故事 / 战略伙伴
│   ├── 客户满意度
│   └── 成功案例
├── 📝 内容中心 (Content Hub)
│   ├── 博客文章 (Blog)
│   ├── 案例研究 (Case Studies)
│   └── 展会活动 (Events)
└── 🔧 配件工具 (Accessories)
    ├── 漏斗/勺子/量杯
    └── 刮刀
```

---

## 二、详细页面结构

### 1. 首页 (Home)

| 页面 | URL |
|------|-----|
| 首页 | `/` |

---

### 2. 产品中心 (Products)

#### 2.1 产品列表页 — 按应用场景 (By Applications)

| 页面 | URL |
|------|-----|
| 全部应用场景 (总览) | `/all-applications` |
| 护肤包装 | `/all-applications/skincare-packaging` |
| 面霜罐 | `/all-applications/face-cream-jars` |
| 精油瓶 | `/all-applications/essential-oil-bottles` |
| 乳液瓶 | `/all-applications/body-lotion-bottles` |
| 爽肤水瓶 | `/all-applications/toner-bottles` |
| 洗发水瓶 | `/all-applications/shampoo-bottles` |
| 唇彩管 | `/all-applications/lip-gloss-tubes` |

#### 2.2 产品详情页 (Product Items) — 共38个SKU

**护肤类 (Skincare)**

| 产品 | URL |
|------|-----|
| 亚克力乳液面霜瓶罐套装 | `/product-item/acrylic-lotion-cream-bottle-and-jar-cosmetic-skincare-packaging` |
| 亚克力气压乳液罐 | `/product-item/acrylic-plastic-lotion-press-airless-jar` |
| 定制PP塑料护肤套装 | `/product-item/custom-pp-plastic-skincare-packaging-set` |
| 定制多巴胺护肤套装礼盒 | `/product-item/custom-dopamine-skincare-packaging-set-with-gift-box` |
| 定制玻璃面霜罐 15g-80g | `/product-item/custom-glass-jars-for-face-cream-15g-80g` |
| 定制玻璃瓶罐套装礼盒 | `/product-item/custom-glass-cosmetic-bottle-jar-set-with-gift-box` |
| 定制玻璃气压泵罐(可替换内芯) | `/product-item/custom-glass-airless-pump-jar-replaceable-inner-core` |
| 优雅磨砂玻璃化妆品套装 | `/product-item/elegant-frosted-glass-cosmetic-packaging-set` |
| 环保PET护肤瓶(竹制配件) | `/product-item/eco-friendly-pet-skincare-bottles-with-bamboo-accessories` |
| 个性化护肤容器玻璃面霜罐乳液泵瓶 | `/product-item/personalized-skincare-container-glass-cream-jars-lotion-pump-bottles` |
| 高级玻璃爽肤水瓶 50-100ml | `/product-item/premium-glass-toner-bottles-50ml-80ml-100ml-skincare-packaging` |
| 可回收PET护发护肤包装 | `/product-item/recyclable-pet-packaging-solutions-for-hair-care-skincare` |
| 精华液泵瓶(圆形奢华) | `/product-item/serum-bottle-with-pump-round-empty-luxury` |
| 厚底玻璃乳液泵瓶(奢华护肤) | `/product-item/thick-base-glass-lotion-pump-bottle-for-luxury-skincare-brands` |
| 三角形玻璃罐乳液泵瓶套装 | `/product-item/triangle-shaped-glass-jars-lotion-pump-bottles-cosmetic-packaging` |

**气压瓶类 (Airless)**

| 产品 | URL |
|------|-----|
| 100ml气压可填充泡沫泵瓶 | `/product-item/100ml-airless-refillable-foaming-pump-bottle` |
| 方形多巴胺气压泵瓶 15-50ml | `/product-item/square-dopamine-airless-pump-bottles-15ml-30ml-50ml-replacable` |
| 可持续可填充气压面霜罐(婴儿护理) | `/product-item/sustainable-refillable-airless-pump-face-cream-jar-for-baby-care-brand` |

**身体护理类 (Body Care)**

| 产品 | URL |
|------|-----|
| 50g PE手霜防晒包装瓶 | `/product-item/50g-pe-cosmetic-bottle-custom-hand-cream-sunscreen-packaging` |
| 定制130ml/220ml塑料泡沫泵瓶 | `/product-item/custom-130ml-220ml-plastic-foam-pump-bottles` |
| HDPE洗发水瓶(乳液泵) 300-700ml | `/product-item/hdpe-plastic-shampoo-bottles-with-lotion-pump-300ml-500ml-700ml` |

**彩妆类 (Makeup)**

| 产品 | URL |
|------|-----|
| 彩色塑料唇彩管 4.5ml | `/product-item/new-colorful-plastic-lip-gloss-tube-4-5ml-square-round` |
| 粉色哑光唇彩管 | `/product-item/pink-matte-empty-lig-gloss-tube` |
| 5ml透明眼霜气压注射器 | `/product-item/empty-5ml-clear-eye-cream-cosmetic-airless-syringe` |

**香水类 (Fragrance)**

| 产品 | URL |
|------|-----|
| 100ml定制贝壳形香水玻璃瓶 | `/product-item/100ml-custom-shell-shaped-perfume-glass-bottle` |
| 定制100ml阿拉伯风格方形香水瓶 | `/product-item/custom-100ml-arabic-style-square-glass-fragrance-bottles` |
| 奢华100ml几何香水瓶(含礼盒) | `/product-item/luxury-100ml-geometric-perfume-bottle-with-custom-gift-box` |
| 夜石纹理玻璃香水喷雾瓶 50-100ml | `/product-item/night-stone-textured-glass-perfume-spray-bottle-50ml-100ml` |
| 新设计红酒杯形香水瓶 | `/product-item/new-design-wine-glass-shape-perfume-bottle` |
| 香水玻璃瓶 30-100ml(定制奢华彩色) | `/product-item/perfume-glass-bottles-30ml-50ml-100ml-custom-luxury-colorful` |

**大麻/CBD包装类 (Cannabis & CBD)**

| 产品 | URL |
|------|-----|
| 防儿童开启金属锡盒(预卷) | `/product-item/child-resistant-metal-tin-case-for-pre-rolls` |
| 定制防儿童开启麦拉袋 | `/product-item/custom-child-resistant-mylar-bags-for-cannabis-packaging` |
| 高级双向湿度控制垫片 | `/product-item/premium-2-way-humidity-control-gasket-for-cannabis-packaging` |
| 旋转指缘油笔(大麻浓缩物) | `/product-item/rotary-finger-edge-oil-pen-for-cannabis-concentrates` |
| 储物罐(多用途密封玻璃) | `/product-item/stash-jars-multipurpose-airtight-glass-storage-jar` |
| 透明防儿童开启玻璃罐(放大镜盖) | `/product-item/transparent-child-resistant-glass-jar-with-magnifying-lid` |
| UV浓缩物罐(黑色草本储存) | `/product-item/uv-concentrate-jar-black-herb-cannabis-storage` |

**环保/便携类 (Eco & Convenience)**

| 产品 | URL |
|------|-----|
| 环保定制小袋包装 | `/product-item/eco-friendly-custom-sachet-bags-for-convenience` |

---

### 3. 分类导航 (Categories)

#### 3.1 按材料 (By Materials)

| 页面 | URL |
|------|-----|
| 全部材料 (总览) | `/all-materials` |
| 亚克力化妆品包装 | `/all-materials/acrylic-cosmetic-packaging` |
| PETG化妆品包装 | `/all-materials/petg-cosmetic-packaging` |
| 塑料化妆品瓶 | `/all-materials/plastic-cosmetic-bottles` |

#### 3.2 按包装类型 (By Packaging Types)

| 页面 | URL |
|------|-----|
| 安瓿瓶 | `/all-packaging-types/ampoules-2` |
| 化妆品注射器 | `/all-packaging-types/cosmetic-syringes` |
| 化妆品管 | `/all-packaging-types/cosmetic-tubes` |

#### 3.3 瓶盖与封口 (Closures & Caps)

| 页面 | URL |
|------|-----|
| 金属盖 | `/closures-and-caps/metal-caps` |
| 孔口减速器和筛子 | `/closures-and-caps/orifice-reducers-and-sifters` |
| 防篡改封口 | `/closures-and-caps/tamper-evident-closures` |

#### 3.4 泵与喷头 (Pumps & Sprayers)

| 页面 | URL |
|------|-----|
| 细雾喷雾器 | `/pumps/fine-mist-sprayers` |
| 乳液泵 | `/pumps/lotion-pumps` |

#### 3.5 盒袋配件 (Boxes, Bags & Supplies)

| 页面 | URL |
|------|-----|
| 定制化妆品包装盒 | `/boxes-bags-and-supplies/custom-cosmetic-packaging` |
| 袋装包装 | `/boxes-bags-and-supplies/pouches-packaging` |
| 滑动包装 | `/boxes-bags-and-supplies/sliding-packaging` |
| 天地盖盒 | `/boxes-bags-and-supplies/slip-lid-boxes` |

#### 3.6 产品合集 (Collections)

| 页面 | URL |
|------|-----|
| 化妆品新设计包装合集 | `/collections/cosmetic-new-design-packaging-collection` |
| 可填充化妆品包装合集 | `/collections/refillable-cosmetics-packaging` |

#### 3.7 大麻包装 (Cannabis & CBD)

| 页面 | URL |
|------|-----|
| 大麻和CBD包装 (总览) | `/cannabis-and-cbd-packaging-2` |
| 大麻花罐 | `/cannabis-packaging/cannabis-flower-jars` |

---

### 4. 解决方案 (Solutions)

#### 4.1 核心服务能力

| 页面 | URL | 说明 |
|------|-----|------|
| 一站式包装服务 | `/one-stop-packaging` | 从设计到交付的全流程服务 |
| 自有瓶体模具生产 | `/in-house-bottle-molding` | 自有工厂模具能力 |
| 品牌代工制造 | `/contract-manufacturing-for-brands` | OEM/ODM服务 |
| 可持续发展 | `/sustainability` | 环保理念与实践 |

#### 4.2 行业解决方案

| 页面 | URL | 说明 |
|------|-----|------|
| 名人品牌解决方案 | `/solutions-for-celebrity-brands` | 针对明星/网红品牌 |
| 个人护理包装 | `/personal-care-packaging` | 个护行业方案 |

#### 4.3 特殊功能包装

| 页面 | URL | 说明 |
|------|-----|------|
| 气压瓶 | `/functions/airless-bottles` | 真空/气压包装技术 |
| 防儿童开启瓶 | `/functions/child-resistant-bottles` | 安全包装 |

---

### 5. 关于我们 (About)

| 页面 | URL | 说明 |
|------|-----|------|
| 战略合作伙伴 | `/your-strategic-partner` | 公司定位与优势 |
| 99%客户满意度 | `/99-client-satisfaction` | 客户满意度数据 |
| 成功案例 | `/success-stories` | 客户成功故事列表 |
| 成功案例分类 | `/category/success-stories` | 按分类浏览案例 |

---

### 6. 内容中心 (Content Hub)

#### 6.1 博客文章 (Blog)

| 文章 | URL |
|------|-----|
| 1小时3D包装概念 | `/1hr-3d-packaging-concept` |
| 美妆包装合作的四个阶段 | `/a-four-stage-journey-in-beauty-packaging-cooperation` |
| 极简 vs 极繁包装设计 | `/minimalist-vs-maximalist-packaging-design-i` |
| 日期归档页 (2025/12/23) | `/2025/12/23` |

#### 6.2 案例研究 (Case Studies)

| 文章 | URL |
|------|-----|
| 与美国商业孵化器合作案例 | `/case-study-on-collaborating-with-a-us-business-incubator` |
| 波兰医学美容品牌5年欧洲市场扩展 | `/how-strategic-packaging-design-powered-a-polish-medical-cosmetology-brands-5-year-european-market-expansion` |
| 美国美容行业市场分析 × Cosmoprof | `/us-beauty-industry-market-analysis-x-cosmoprof-las-vegas-2025` |
| 包装案例互动页 | `/packaging-case-study-interactive` |

#### 6.3 展会活动 (Events)

| 文章 | URL |
|------|-----|
| Beautyworld中东2025 (展位8-G24) | `/connecting-with-jarsking-at-booth-8-g24-shaping-the-future-of-beauty-packaging-at-beautyworld-middle-east-2025` |
| Cosmopack亚洲2025 (4大趋势) | `/cosmopack-asia-2025-4-key-trends-to-discover-at-the-jarsking-booth` |

---

### 7. 配件工具 (Accessories)

| 页面 | URL |
|------|-----|
| 漏斗、勺子和量杯 | `/funnels-scoopers-and-beakers` |
| 刮刀 | `/spatulas` |

---

## 三、导航菜单结构建议

基于以上分析，建议的主导航结构如下：

```
┌─────────────────────────────────────────────────────────────────┐
│  LOGO    Products  Categories  Solutions  About  Blog  Contact  │
└─────────────────────────────────────────────────────────────────┘
```

### Products (产品)
直接链接到 `/all-applications`，展示所有产品列表

### Categories (分类) — Mega Menu 下拉
```
┌──────────────────────────────────────────────────────┐
│  By Applications    │  By Materials    │  By Types   │
│  ─────────────────  │  ──────────────  │  ────────── │
│  Skincare           │  Acrylic         │  Ampoules   │
│  Body Lotion        │  PETG            │  Syringes   │
│  Essential Oil      │  Plastic         │  Tubes      │
│  Toner              │                  │             │
│  Shampoo            │  Caps & Pumps    │  Boxes&Bags │
│  Lip Gloss          │  ──────────────  │  ────────── │
│  Face Cream         │  Metal Caps      │  Custom Box │
│                     │  Orifice Reducer │  Pouches    │
│  Collections        │  Tamper Evident  │  Sliding    │
│  ──────────────     │  Mist Sprayers   │  Slip Lid   │
│  New Design         │  Lotion Pumps    │             │
│  Refillable         │                  │  Cannabis   │
│                     │                  │  ────────── │
│                     │                  │  CBD Pack.  │
│                     │                  │  Flower Jar │
└──────────────────────────────────────────────────────┘
```

### Solutions (解决方案)
```
┌────────────────────────────────────┐
│  One-Stop Packaging                │
│  In-House Bottle Molding           │
│  Contract Manufacturing            │
│  Sustainability                    │
│  ─────────────────────             │
│  Celebrity Brands                  │
│  Personal Care                     │
│  ─────────────────────             │
│  Airless Bottles                   │
│  Child-Resistant Bottles           │
└────────────────────────────────────┘
```

### About (关于)
```
┌────────────────────────────────────┐
│  Your Strategic Partner            │
│  99% Client Satisfaction           │
│  Success Stories                   │
└────────────────────────────────────┘
```

### Blog (内容)
```
┌────────────────────────────────────┐
│  Blog Articles                     │
│  Case Studies                      │
│  Events                            │
└────────────────────────────────────┘
```

---

## 四、页面统计

| 分类 | 页面数 | 占比 |
|------|--------|------|
| 产品详情页 (Product Items) | 38 | 38% |
| 产品列表/分类页 | 22 | 22% |
| 解决方案页 | 10 | 10% |
| 博客/案例/活动 | 9 | 9% |
| 关于我们 | 4 | 4% |
| 配件工具 | 2 | 2% |
| 首页 | 1 | 1% |
| 其他(上传资源页等) | 14 | 14% |
| **合计** | **100** | **100%** |

---

## 五、原站存在的结构问题

1. **URL路径不统一** — 部分用 `/all-applications/xxx`，部分用 `/functions/xxx`，部分用 `/cannabis-packaging/xxx`，缺乏统一的路由前缀
2. **分类维度交叉** — 按应用、按材料、按类型、按功能四种维度并存，产品会出现在多个分类下
3. **大麻包装独立** — 大麻包装既有独立的一级路径 `/cannabis-and-cbd-packaging-2`，又有子路径 `/cannabis-packaging/cannabis-flower-jars`，前缀不一致
4. **博客/案例无统一前缀** — 文章直接挂在根路径下(如 `/minimalist-vs-maximalist-packaging-design-i`)，没有 `/blog/` 或 `/case-study/` 前缀
5. **wp-content资源页混入** — 10个 `/wp-content/uploads/` 图片URL被当作页面爬取
6. **日期归档页** — `/2025/12/23` 这种WordPress日期归档页意义不大
7. **重复页面** — `/success-stories` 和 `/category/success-stories` 内容可能重复

---

## 六、优化建议（如果重建站点）

### 推荐的URL结构

```
/                                    → 首页
/products/                           → 产品总览
/products/skincare/                  → 护肤品包装列表
/products/skincare/face-cream-jars   → 具体产品详情
/products/fragrance/                 → 香水包装列表
/products/makeup/                    → 彩妆包装列表
/products/body-care/                 → 身体护理包装列表
/products/cannabis/                  → 大麻包装列表

/categories/materials/               → 按材料分类
/categories/types/                   → 按包装类型分类
/categories/accessories/             → 配件(盖、泵、盒、工具)

/collections/new-design              → 新品合集
/collections/refillable              → 可填充合集

/solutions/                          → 解决方案总览
/solutions/one-stop-packaging        → 一站式服务
/solutions/celebrity-brands          → 名人品牌方案

/about/                              → 关于我们
/about/success-stories               → 成功案例

/blog/                               → 博客列表
/blog/article-slug                   → 博客文章
/case-studies/                       → 案例研究列表
/case-studies/case-slug              → 案例详情
/events/                             → 展会活动
```

### 核心改进点
- **统一路由前缀**：所有产品页以 `/products/` 开头，所有博客以 `/blog/` 开头
- **减少分类维度**：以"应用场景"为主分类，材料/类型作为筛选条件
- **清理冗余页面**：移除wp-content资源页和日期归档页
- **合并重复内容**：统一成功案例入口
