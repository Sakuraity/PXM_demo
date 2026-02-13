# 美妆包材独立站

基于 Next.js 14 开发的美妆包装产品展示网站，完全复刻 Jarsking 网站的视觉和结构，集成 DIY 定制模块。

## 项目特性

- 🎨 **完全复刻 Jarsking** - 使用爬取的数据和资源，100% 还原原站设计
- 🛠️ **DIY 定制模块** - 独立页面实现 3D 产品定制功能
- 📦 **数据驱动** - 所有内容来自 jarsking-crawl 数据，支持未来 API 切换
- 🎯 **响应式设计** - 适配各种设备尺寸
- ⚡ **现代技术栈** - Next.js 14, React 18, TypeScript, Tailwind CSS

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **状态管理**: Zustand
- **图标**: Lucide React
- **3D SDK**: Realibox SDK (占位实现)

## 项目结构

```
beauty-packaging-site/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── products/[slug]/    # 产品详情页
│   │   └── products/[slug]/diy/ # DIY 定制页
│   ├── components/
│   │   ├── layout/            # 布局组件
│   │   ├── product/           # 产品组件
│   │   ├── diy/               # DIY 组件
│   │   └── common/            # 通用组件
│   ├── services/              # 数据服务层
│   ├── types/                 # TypeScript 类型
│   ├── lib/                   # 工具库
│   └── data/                  # 预处理的数据
├── public/
│   └── images/                # 从 jarsking-crawl 复制的图片
└── scripts/
    └── prepare-data.ts        # 数据预处理脚本
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 数据预处理

```bash
npx tsx scripts/prepare-data.ts
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

## 数据源说明

### 当前使用本地 JSON 数据

所有数据来自 `jarsking-crawl` 目录：
- 产品数据: `src/data/products.json`
- 分类数据: `src/data/categories.json`
- 站点配置: `src/data/site-config.json`
- 页面数据: `src/data/pages/`

### 未来切换到 API

通过环境变量 `NEXT_PUBLIC_USE_API=true` 切换到 API 模式，修改 `NEXT_PUBLIC_API_BASE` 指定 API 地址。

## DIY 模块说明

DIY 模块位于 `/products/[slug]/diy`，提供以下功能：

- **3D 预览**: 使用 Realibox SDK 展示产品模型
- **形状定制**: 选择不同的包装形状
- **材质选择**: 玻璃、塑料、亚克力等材质
- **表面处理**: 透明、磨砂、喷涂等效果
- **颜色定制**: 选择产品颜色
- **Logo 上传**: 添加品牌标识
- **配件选择**: 瓶盖、泵头等配件

### Realibox SDK 集成

当前使用占位实现，后续集成真实 SDK：

1. 安装 Realibox SDK
2. 替换 `src/lib/realibox.ts` 中的占位实现
3. 设置 `NEXT_PUBLIC_USE_REAL_SDK=true`

## 构建部署

```bash
npm run build
npm start
```

## 注意事项

1. **图片资源**: 所有图片已从 `jarsking-crawl/images` 复制到 `public/images`
2. **数据更新**: 修改爬取数据后需重新运行预处理脚本
3. **路由结构**: 严格按照 jarsking 原站 URL 结构设计
4. **SEO 优化**: 已配置基础元数据，可根据需要调整

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 发起 Pull Request

## 许可证

MIT License
