# 美妆包材Demo数据模型设计

> 基于美妆包材行业特点，设计完整的数据库模型，支撑B2B定制化业务

---

## 一、数据模型总览

### 1.1 核心实体关系图

```mermaid
erDiagram
    %% 产品相关
    CATEGORIES ||--o{ PRODUCTS : contains
    PRODUCTS ||--o{ PRODUCT_SKUS : has
    PRODUCTS ||--o{ PRODUCT_IMAGES : has
    PRODUCTS ||--o{ PRODUCT_SPECS : has
    PRODUCTS ||--o{ PRODUCT_MATERIALS : uses
    PRODUCTS ||--o{ DIY_OPTIONS : supports
    PRODUCTS ||--o{ 3D_MODELS : has
    
    %% 材质相关
    MATERIALS ||--o{ PRODUCT_MATERIALS : used_in
    MATERIALS ||--o{ MATERIAL_PROPERTIES : has
    MATERIALS ||--o{ DIY_OPTIONS : available_for
    
    %% DIY相关
    DIY_PROJECTS ||--o{ PROJECT_ITEMS : includes
    DIY_PROJECTS ||--o{ PROJECT_IMAGES : has
    DIY_OPTIONS ||--o{ PROJECT_ITEMS : used_in
    
    %% 客户相关
    CUSTOMERS ||--o{ INQUIRIES : creates
    CUSTOMERS ||--o{ DIY_PROJECTS : owns
    CUSTOMERS ||--o{ ORDERS : places
    CUSTOMERS ||--o{ SAMPLE_ORDERS : requests
    
    %% 订单相关
    INQUIRIES ||--o{ INQUIRY_ITEMS : contains
    INQUIRIES ||--o{ QUOTATIONS : generates
    QUOTATIONS ||--o{ ORDERS : converts_to
    ORDERS ||--o{ ORDER_ITEMS : contains
    ORDERS ||--o{ PRODUCTION_ORDERS : triggers
    
    %% 供应链相关
    SUPPLIERS ||--o{ MATERIALS : supplies
    SUPPLIERS ||--o{ PRODUCTION_ORDERS : fulfills
    PRODUCTION_ORDERS ||--o{ PRODUCTION_STEPS : includes
    PRODUCTION_ORDERS ||--o{ QC_RECORDS : inspected_by
```

### 1.2 数据表分组

| 模块 | 表数量 | 说明 |
|------|--------|------|
| 产品管理 | 12 | 产品、分类、SKU、图片等 |
| DIY定制 | 8 | 定制选项、项目、方案等 |
| 客户管理 | 6 | 客户、询价、订单等 |
| 供应链 | 7 | 供应商、生产、质检等 |
| 系统管理 | 5 | 配置、权限、日志等 |
| **总计** | **38** | **完整数据模型** |

---

## 二、产品管理模块

### 2.1 产品分类表 `product_categories`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| name | String(100) | ✅ | 分类名称 |
| slug | String(100) | ✅ | URL标识 |
| parent_id | Integer (FK) | ❌ | 父分类ID |
| level | Integer | ✅ | 层级深度 |
| image | String(500) | ❌ | 分类封面图 |
| description | Text | ❌ | 分类描述 |
| sort_order | Integer | ❌ | 排序 |
| is_active | Boolean | ✅ | 是否启用 |
| seo_title | String(200) | ❌ | SEO标题 |
| seo_description | Text | ❌ | SEO描述 |

### 2.2 产品主表 `products`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| name | String(200) | ✅ | 产品名称 |
| slug | String(200) | ✅ | URL标识 |
| category_id | Integer (FK) | ✅ | 所属分类 |
| series | String(100) | ❌ | 产品系列 |
| model_number | String(100) | ✅ | 产品型号 |
| status | Enum | ✅ | draft/published/archived |
| is_new | Boolean | ❌ | 是否新品 |
| is_featured | Boolean | ❌ | 是否推荐 |
| is_customizable | Boolean | ✅ | 是否可定制 |
| short_description | Text | ❌ | 简短描述 |
| description | RichText | ❌ | 详细描述 |
| tags | JSON | ❌ | 标签数组 |
| moq | Integer | ✅ | 最小起订量 |
| lead_time | Integer | ✅ | 交货期(天) |
| sort_order | Integer | ❌ | 排序 |
| created_at | DateTime | ✅ | 创建时间 |
| updated_at | DateTime | ✅ | 更新时间 |

### 2.3 产品SKU表 `product_skus`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| product_id | Integer (FK) | ✅ | 关联产品 |
| sku_code | String(100) | ✅ | SKU编码 |
| name | String(200) | ❌ | SKU名称 |
| capacity | Integer | ❌ | 容量(ml) |
| color | String(100) | ❌ | 颜色 |
| color_hex | String(7) | ❌ | 颜色色值 |
| material | String(100) | ❌ | 主材质 |
| price | Decimal(10,2) | ✅ | 基础价格 |
| cost | Decimal(10,2) | ❌ | 成本价 |
| weight | Decimal(8,2) | ❌ | 重量(g) |
| dimensions | JSON | ❌ | 尺寸{长,宽,高} |
| is_active | Boolean | ✅ | 是否启用 |
| sort_order | Integer | ❌ | 排序 |

### 2.4 产品图片表 `product_images`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| product_id | Integer (FK) | ✅ | 关联产品 |
| sku_id | Integer (FK) | ❌ | 关联SKU |
| url | String(500) | ✅ | 图片URL |
| alt_text | String(200) | ❌ | 描述文字 |
| type | Enum | ✅ | hero/gallery/detail/lifestyle/3d |
| sort_order | Integer | ❌ | 排序 |
| created_at | DateTime | ✅ | 创建时间 |

### 2.5 产品规格表 `product_specs`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| product_id | Integer (FK) | ✅ | 关联产品 |
| group_name | String(100) | ✅ | 参数分组 |
| spec_name | String(100) | ✅ | 参数名 |
| spec_value | String(300) | ✅ | 参数值 |
| unit | String(20) | ❌ | 单位 |
| sort_order | Integer | ❌ | 排序 |

### 2.6 材质表 `materials`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| name | String(100) | ✅ | 材质名称 |
| code | String(50) | ✅ | 材质编码 |
| type | Enum | ✅ | glass/plastic/metal/composite |
| description | Text | ❌ | 材质描述 |
| properties | JSON | ❌ | 材质属性 |
| is_recyclable | Boolean | ✅ | 是否可回收 |
| is_food_grade | Boolean | ✅ | 食品级 |
| cost_factor | Decimal(5,2) | ❌ | 成本系数 |
| image | String(500) | ❌ | 材质图片 |
| is_active | Boolean | ✅ | 是否启用 |

### 2.7 3D模型表 `3d_models`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| product_id | Integer (FK) | ✅ | 关联产品 |
| model_type | Enum | ✅ | configurator/viewer/animation |
| studio_id | String(100) | ✅ | PXM Studio ID |
| model_url | String(500) | ✅ | 模型文件URL |
| thumbnail | String(500) | ❌ | 缩略图 |
| config_options | JSON | ❌ | 可配置项 |
| created_at | DateTime | ✅ | 创建时间 |

---

## 三、DIY定制模块

### 3.1 定制选项表 `diy_options`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| product_id | Integer (FK) | ✅ | 关联产品 |
| option_type | Enum | ✅ | color/material/printing/logo/shape |
| option_name | String(100) | ✅ | 选项名称 |
| option_values | JSON | ✅ | 可选值列表 |
| default_value | String(100) | ❌ | 默认值 |
| is_required | Boolean | ✅ | 是否必选 |
| extra_cost | Decimal(8,2) | ❌ | 额外费用 |
| sort_order | Integer | ❌ | 排序 |

### 3.2 DIY项目表 `diy_projects`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| project_code | String(50) | ✅ | 项目编号 |
| customer_id | Integer (FK) | ❌ | 所属客户 |
| product_id | Integer (FK) | ✅ | 基础产品 |
| name | String(200) | ✅ | 项目名称 |
| description | Text | ❌ | 项目描述 |
| configuration | JSON | ✅ | 定制配置 |
| preview_images | JSON | ❌ | 预览图数组 |
| 3d_scene_data | JSON | ❌ | 3D场景数据 |
| status | Enum | ✅ | draft/submitted/quoted/ordered/produced |
| created_at | DateTime | ✅ | 创建时间 |
| updated_at | DateTime | ✅ | 更新时间 |

### 3.3 项目明细表 `project_items`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| project_id | Integer (FK) | ✅ | 关联项目 |
| option_type | Enum | ✅ | 选项类型 |
| option_value | String(200) | ✅ | 选项值 |
| extra_cost | Decimal(8,2) | ❌ | 额外费用 |
| notes | Text | ❌ | 备注 |

---

## 四、客户管理模块

### 4.1 客户表 `customers`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| company_name | String(200) | ✅ | 公司名称 |
| contact_name | String(100) | ✅ | 联系人 |
| email | String(200) | ✅ | 邮箱 |
| phone | String(50) | ✅ | 电话 |
| country | String(100) | ✅ | 国家 |
| industry | String(100) | ❌ | 行业 |
| customer_type | Enum | ✅ | brand/odm/trader/designer |
| level | Enum | ✅ | normal/vip/strategic |
| status | Enum | ✅ | active/inactive/blacklisted |
| source | String(100) | ❌ | 获客来源 |
| sales_rep_id | Integer (FK) | ❌ | 负责销售 |
| created_at | DateTime | ✅ | 创建时间 |

### 4.2 询价表 `inquiries`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| inquiry_no | String(50) | ✅ | 询价编号 |
| customer_id | Integer (FK) | ✅ | 客户ID |
| subject | String(200) | ✅ | 询价主题 |
| description | Text | ✅ | 需求描述 |
| target_price | Decimal(10,2) | ❌ | 目标价格 |
| quantity | Integer | ✅ | 目标数量 |
| deadline | Date | ❌ | 期望交期 |
| status | Enum | ✅ | new/processing/quoted/closed |
| assigned_to | Integer (FK) | ❌ | 负责人 |
| created_at | DateTime | ✅ | 创建时间 |

### 4.3 询价明细表 `inquiry_items`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| inquiry_id | Integer (FK) | ✅ | 关联询价 |
| product_id | Integer (FK) | ✅ | 产品ID |
| quantity | Integer | ✅ | 数量 |
| requirements | Text | ❌ | 特殊要求 |
| attached_files | JSON | ❌ | 附件列表 |

### 4.4 报价单表 `quotations`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| quote_no | String(50) | ✅ | 报价单号 |
| inquiry_id | Integer (FK) | ❌ | 关联询价 |
| customer_id | Integer (FK) | ✅ | 客户ID |
| valid_until | Date | ✅ | 有效期至 |
| total_amount | Decimal(12,2) | ✅ | 总金额 |
| currency | String(10) | ✅ | 币种 |
| payment_terms | String(200) | ❌ | 付款条件 |
| delivery_terms | String(200) | ❌ | 交货条件 |
| status | Enum | ✅ | draft/sent/accepted/expired |
| created_at | DateTime | ✅ | 创建时间 |

### 4.5 报价明细表 `quotation_items`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| quotation_id | Integer (FK) | ✅ | 关联报价单 |
| product_id | Integer (FK) | ✅ | 产品ID |
| description | String(500) | ✅ | 项目描述 |
| quantity | Integer | ✅ | 数量 |
| unit_price | Decimal(10,2) | ✅ | 单价 |
| discount | Decimal(5,2) | ❌ | 折扣率 |
| total | Decimal(12,2) | ✅ | 小计 |
| lead_time | Integer | ✅ | 交期 |

### 4.6 订单表 `orders`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| order_no | String(50) | ✅ | 订单编号 |
| quotation_id | Integer (FK) | ❌ | 来源报价单 |
| customer_id | Integer (FK) | ✅ | 客户ID |
| order_date | Date | ✅ | 下单日期 |
| delivery_date | Date | ✅ | 交货日期 |
| total_amount | Decimal(12,2) | ✅ | 订单总额 |
| paid_amount | Decimal(12,2) | ❌ | 已付金额 |
| status | Enum | ✅ | pending/paid/production/shipped/delivered/cancelled |
| payment_status | Enum | ✅ | unpaid/partial/paid/refunded |
| production_status | Enum | ✅ | pending/scheduled/in_progress/completed |
| notes | Text | ❌ | 订单备注 |
| created_at | DateTime | ✅ | 创建时间 |

---

## 五、供应链模块

### 5.1 供应商表 `suppliers`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| name | String(200) | ✅ | 供应商名称 |
| code | String(50) | ✅ | 供应商编码 |
| type | Enum | ✅ | material/process/logistics |
| contact_person | String(100) | ✅ | 联系人 |
| phone | String(50) | ✅ | 电话 |
| email | String(200) | ✅ | 邮箱 |
| address | Text | ❌ | 地址 |
| rating | Integer | ❌ | 评级(1-5) |
| status | Enum | ✅ | active/inactive/blacklisted |
| created_at | DateTime | ✅ | 创建时间 |

### 5.2 生产订单表 `production_orders`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| production_no | String(50) | ✅ | 生产编号 |
| order_id | Integer (FK) | ✅ | 关联订单 |
| product_id | Integer (FK) | ✅ | 产品ID |
| quantity | Integer | ✅ | 生产数量 |
| start_date | Date | ✅ | 开始日期 |
| end_date | Date | ✅ | 完成日期 |
| status | Enum | ✅ | pending/scheduled/in_progress/completed/qa_passed |
| assigned_to | Integer (FK) | ❌ | 分配给供应商 |
| progress | Integer | ❌ | 进度百分比 |
| created_at | DateTime | ✅ | 创建时间 |

### 5.3 生产工序表 `production_steps`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| production_id | Integer (FK) | ✅ | 生产订单 |
| step_name | String(100) | ✅ | 工序名称 |
| step_order | Integer | ✅ | 工序顺序 |
| estimated_hours | Decimal(5,1) | ❌ | 预计工时 |
| actual_hours | Decimal(5,1) | ❌ | 实际工时 |
| status | Enum | ✅ | pending/in_progress/completed |
| completed_at | DateTime | ❌ | 完成时间 |
| notes | Text | ❌ | 工序备注 |

### 5.4 质检记录表 `qc_records`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| production_id | Integer (FK) | ✅ | 生产订单 |
| inspection_type | Enum | ✅ | incoming/in_process/final |
| inspector | String(100) | ✅ | 检验员 |
| inspection_date | DateTime | ✅ | 检验日期 |
| result | Enum | ✅ | pass/fail/rework |
| defect_count | Integer | ❌ | 缺陷数 |
| defect_details | JSON | ❌ | 缺陷详情 |
| photos | JSON | ❌ | 检验照片 |
| created_at | DateTime | ✅ | 创建时间 |

---

## 六、系统管理模块

### 6.1 站点配置表 `site_settings`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| key | String(100) | ✅ | 配置键 |
| value | Text | ✅ | 配置值 |
| group | String(50) | ❌ | 配置分组 |
| type | Enum | ✅ | string/number/boolean/json |
| description | String(200) | ❌ | 描述 |

### 6.2 导航菜单表 `navigation_items`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| label | String(100) | ✅ | 菜单文字 |
| url | String(500) | ✅ | 链接地址 |
| parent_id | Integer (FK) | ❌ | 父级菜单 |
| position | Enum | ✅ | header/footer |
| sort_order | Integer | ❌ | 排序 |
| is_active | Boolean | ✅ | 是否启用 |

### 6.3 用户表 `users`

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | Integer (PK) | ✅ | 自增主键 |
| username | String(100) | ✅ | 用户名 |
| email | String(200) | ✅ | 邮箱 |
| password_hash | String(200) | ✅ | 密码哈希 |
| role | Enum | ✅ | admin/sales/customer |
| status | Enum | ✅ | active/inactive |
| last_login | DateTime | ❌ | 最后登录 |
| created_at | DateTime | ✅ | 创建时间 |

---

## 七、索引设计

### 7.1 主要索引

```sql
-- 产品相关索引
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_skus_product ON product_skus(product_id);
CREATE INDEX idx_skus_code ON product_skus(sku_code);

-- DIY相关索引
CREATE INDEX idx_projects_customer ON diy_projects(customer_id);
CREATE INDEX idx_projects_status ON diy_projects(status);
CREATE INDEX idx_project_items_project ON project_items(project_id);

-- 订单相关索引
CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_inquiries_customer ON inquiries(customer_id);

-- 供应链索引
CREATE INDEX idx_production_order ON production_orders(order_id);
CREATE INDEX idx_production_status ON production_orders(status);
CREATE INDEX idx_qc_production ON qc_records(production_id);
```

---

## 八、数据同步策略

### 8.1 PXM同步字段

| 表名 | 同步字段 | 说明 |
|------|----------|------|
| products | name, description, specs | 基础产品信息 |
| product_skus | sku_code, price | SKU信息 |
| materials | properties | 材质属性 |
| 3d_models | studio_id, config_options | 3D模型配置 |

### 8.2 同步频率
- **实时同步**：库存状态、订单状态
- **小时同步**：产品信息、价格信息
- **日同步**：客户信息、历史数据

---

## 九、数据安全

### 9.1 敏感数据加密
- 客户联系信息
- 价格成本信息
- 订单财务数据

### 9.2 访问控制
- 角色权限管理
- 数据访问审计
- API接口鉴权

### 9.3 备份策略
- 每日全量备份
- 实时增量备份
- 异地容灾备份
