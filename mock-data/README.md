# Cascade Vapor 模拟数据说明

该目录存放 Cascade Vapor 电子烟独立站 demo 所需的完整模拟数据。所有数据均为原创设定，按数据模型文档的 28 张核心表进行组织，方便导入 NocoBase 或其他数据平台进行演示与联调。

## 目录结构总览

```
mock-data/
├── 01-product-series.json        # 产品系列数据（4 系列）
├── 02-product-categories.json    # 产品分类数据
├── 03-products/                  # 14 款产品核心数据
│   ├── nova-series/
│   ├── strike-series/
│   ├── flo-series/
│   └── evo-series/
├── 04-product-skus.json          # SKU 数据（设备颜色 / 烟弹口味）
├── 05-product-images.json        # 产品图片占位信息
├── 06-product-highlights.json    # 产品卖点图文模块
├── 07-product-specs.json         # 产品规格参数（设备 / 烟弹）
├── 08-product-package-lists.json # 包装清单（Standard / US / TPD）
├── 09-product-compatibility.json # 兼容性关系
├── 10-product-safety-features.json # 安全特性
├── 11-technology-platforms.json  # 技术平台
├── 12-product-technologies.json  # 产品-技术关联
├── 13-product-3d-assets.json     # 3D 资产（旗舰款）
├── 14-banners.json               # Banner 配置
├── 15-articles.json              # 新闻 / 博客文章 2 篇
├── 16-pages.json                 # 静态页面（品牌、技术、售后等）
├── 17-faqs.json                  # FAQ（10 条）
├── 18-downloads.json             # 下载资源（手册 / 固件）
├── 19-site-settings.json         # 站点配置项
├── 20-navigation-items.json      # 导航菜单
├── 21-store-locations.json       # 门店定位（15 家）
├── 22-security-verifications.json # 防伪验证记录示例
├── 23-newsletter-subscribers.json # Newsletter 订阅示例
├── 24-users.json                 # 用户示例数据
├── 25-user-addresses.json        # 用户地址
├── 26-orders.json                # 订单示例
├── 27-order-items.json           # 订单明细
└── 28-shipments.json             # 物流信息
```

## 数据生成原则
- **原创性**：所有品牌、产品、技术名称与描述均为虚构，用于演示。
- **行业符合性**：遵循电子烟常见的规格字段（功率、阻值、烟油容量、尼古丁浓度等）。
- **精简易用**：重点字段均提供示例，方便前后端开发与数据导入验证。
- **地区适配**：包装清单按照 Standard / US / TPD 三个版本提供内容差异，体现合规要求。
- **口味 SKU**：烟弹类产品的 SKU 使用口味 + 尼古丁浓度维度；设备类按颜色区分。

## 使用建议
1. 导入 NocoBase 或其他后端数据平台进行接口 / 前端联调。
2. 前端可通过 Mock API 或静态 JSON 读取方式快速渲染页面。
3. 可根据业务需求继续拓展更多内容（如评论、优惠券、活动等）。

若需补充更多数据或调整字段，请在本目录中继续新增相应 JSON 文件或字段。
