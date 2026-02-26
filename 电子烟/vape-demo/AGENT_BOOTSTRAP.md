# VapePro Demo — Agent Bootstrap

## 项目定位
电子烟出海公司 B2B 前端 Demo，用于向境外批发商/分销商展示产品阵容、合规认证和兼容性系统。

## 技术栈
- **框架**: Next.js 16 (App Router) + React 19 + TypeScript
- **样式**: Tailwind CSS v4
- **国际化**: i18next + react-i18next（中/英双语）
- **图标**: Lucide React
- **动画**: Framer Motion（已安装，按需使用）
- **工具**: clsx + tailwind-merge (`cn()` in `lib/utils.ts`)

## 设计系统
| 变量 | 值 | 用途 |
|------|-----|------|
| `--background` | `#0f172a` | 页面背景 |
| `--card` | `#1e293b` | 卡片背景 |
| `--card-border` | `#334155` | 卡片边框 |
| `--accent` | `#6366f1` | 主强调色（indigo） |
| `--accent-cyan` | `#06b6d4` | 次强调色（cyan） |
| `--muted` | `#94a3b8` | 次级文字 |

## 目录结构
```
vape-demo/
├── app/
│   ├── layout.tsx            # 根布局（LanguageProvider + Navbar + Footer）
│   ├── page.tsx              # 首页（7个Section）
│   ├── products/
│   │   ├── page.tsx          # 产品列表页
│   │   └── [slug]/page.tsx   # 产品详情页
│   ├── compatibility/page.tsx # 兼容性查询页
│   ├── about/page.tsx        # 关于我们
│   └── contact/page.tsx      # 联系我们
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # 顶部导航（含语言切换）
│   │   └── Footer.tsx        # 底部（含年龄警告、合规标志）
│   ├── home/
│   │   ├── AgeVerifyModal.tsx     # 年龄验证弹窗（sessionStorage）
│   │   ├── HeroSection.tsx        # 主视觉 Banner
│   │   ├── CategoriesSection.tsx  # 产品分类卡片
│   │   ├── FeaturedSection.tsx    # 精选产品（内嵌4条mock数据）
│   │   ├── CompatibilitySection.tsx # 兼容性亮点
│   │   ├── ComplianceSection.tsx  # 全球合规认证
│   │   └── WholesaleSection.tsx   # B2B 批发入口
│   ├── products/
│   │   ├── ProductsClient.tsx     # 产品列表（含筛选/搜索，内嵌15条mock）
│   │   └── ProductDetailClient.tsx # 产品详情（规格/兼容/合规，内嵌3条mock）
│   ├── compatibility/
│   │   └── CompatibilityClient.tsx # 兼容性查询工具（5设备×5烟弹矩阵）
│   ├── about/
│   │   └── AboutClient.tsx        # 关于我们页
│   └── contact/
│       └── ContactClient.tsx      # 联系表单
├── contexts/
│   └── LanguageContext.tsx   # 语言 Context + I18nextProvider
├── data/
│   └── categories.json       # 产品分类数据（8条）
├── lib/
│   ├── i18n.ts               # i18next 初始化
│   └── utils.ts              # cn() 工具函数
├── locales/
│   ├── en.json               # 英文翻译
│   └── zh.json               # 中文翻译
└── types/
    └── index.ts              # TypeScript 类型定义
```

## 语言切换（重要）
**已知方案**：`LanguageContext.tsx` 使用 `React.Fragment key={language}` 包裹 children，强制卸载/重挂载组件树以触发重渲染。不要改变这个模式。

```tsx
// LanguageContext.tsx — 核心模式
<I18nextProvider i18n={i18nInstance}>
  <LanguageContext.Provider value={{ language, changeLanguage }}>
    <React.Fragment key={language}>
      {children}
    </React.Fragment>
  </LanguageContext.Provider>
</I18nextProvider>
```

## Mock 数据策略
由于 `write_to_file` token 限制，产品数据**内嵌在组件中**而非 JSON 文件：
- `ProductsClient.tsx` — 15条产品（含各类别/系列）
- `ProductDetailClient.tsx` — 3条详细产品（Nova X1, Nova X2 Pro, Pulse S1）
- `FeaturedSection.tsx` — 4条精选产品
- `CompatibilityClient.tsx` — 5设备 × 5烟弹兼容矩阵

如需替换为真实 JSON，将数据移至 `data/products.json` 并用 `import productsData from '@/data/products.json'` 引入。

## 图片占位策略
所有产品/场景图片均为占位符，路径规范：
```
/images/products/{slug}/hero.jpg        # 主图 1200×1200px
/images/products/{slug}/gallery-{n}.jpg # 画廊图
/images/products/{slug}/detail-{n}.jpg  # 细节图
/images/products/{slug}/lifestyle-{n}.jpg # 生活场景图
/images/categories/{slug}.webp          # 分类图
/images/series/{name}.webp              # 系列图
```

## 图片生成 Prompt 规范
详见 `/Users/realibox/.windsurf/plans/vape-demo-plan-4628f8.md` — 第九节"图片规划"。

## 待办事项
- [ ] **products.json** — 15条完整产品数据（待脚本生成或分批追加）
- [ ] **图片资源** — 收到用户提供的AI生成图后，放入 `/public/images/` 目录
- [ ] **ProductDetailClient** — 目前只有3条详情，可按需扩展更多slug
- [ ] **Framer Motion动效** — 可为Section入场添加 `motion.div` 动效
- [ ] **响应式验证** — 在移动端测试各页面布局

## 踩坑记录

### 1. @theme lint 警告
`app/globals.css` 中 `@theme` 是 Tailwind v4 新语法，某些 CSS linter 会报 `Unknown at rule @theme`，**可忽略**，运行时正常。

### 2. TS "Cannot find module" 误报
新建文件后 TypeScript 语言服务有缓存延迟，IDE 短暂报 `Cannot find module`，**重启 TS 服务或等待即可**，编译/运行正常。

### 3. react-i18next 语言切换
详见语言切换章节，**必须用 `React.Fragment key={language}` 方案**，否则切换后部分组件不更新。

### 4. Next.js App Router 'use client'
所有使用 `useState`/`useEffect`/`useTranslation` 的组件必须加 `'use client'`。服务端页面组件（`page.tsx`）本身不加，只在 Client 组件文件顶部加。
