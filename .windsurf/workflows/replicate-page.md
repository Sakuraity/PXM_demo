---
description: 基于爬取的HTML页面进行1:1前端复刻的标准工作流
---

# 1:1 网站页面复刻工作流

## 前置条件
- 目标页面的完整 HTML 已爬取并存放在 `jarsking-crawl/pages/` 目录下
- 前端项目 `beauty-packaging-site` 已初始化（Next.js + TailwindCSS）

---

## 第一步：完整分析目标页面结构

**目标：生成一份完整的"页面蓝图"，覆盖页面中的每一个区块。**

1. 用脚本提取目标 HTML 文件的所有关键信息：
   - 所有 `<section>` 区块的 data-id（确定区块数量和顺序）
   - 所有 `<h1>` ~ `<h6>` 标题文字（确定信息层级）
   - 所有 icon-box / card 的标题和描述
   - 所有图片 URL 和 alt 文字
   - 所有链接 href
   - 轮播/滚动区域的所有子项
   - 折叠面板/FAQ 的所有问答对
   - 客户评价的完整文字、姓名、职位、头像

2. 按从上到下的顺序，编号列出所有区块，形成结构化清单：

```
区块1: Hero Banner
  - 标题: "Pack the Ordinary into Extraordinary"
  - 副标题: "Jarsking Packaging is a premier..."
  - 右侧卡片标题: "Turnkey Services for Your Brand"
  - 背景图: url(...)
  - 卡片图片: url(...)

区块2: 认证轮播
  - 项目: ISO, BSCI, REACH, RoHS, CRF, MSDS, RAL
  - 图片URL: [逐个列出]

区块3: ...
```

3. 逐行阅读 HTML 文件（分段读取，每次 300-500 行），确保不遗漏任何区块。

**严格约束：**
- 必须完整读完整个 HTML 文件，不能只看前半部分
- 区块清单必须包含页面中的每一个 section
- 所有文字必须从 HTML 中逐字提取，禁止改写或概括

---

## 第二步：组件拆分规划

**目标：将页面蓝图中的每个区块映射为一个独立的 React 组件。**

1. 每个区块 = 一个组件文件，放在 `src/components/home/` 目录下（首页）或对应的页面目录下
2. 列出所有组件文件名和对应区块：

```
src/components/home/HeroBanner.tsx      ← 区块1
src/components/home/CertificationCarousel.tsx ← 区块2
src/components/home/ServiceAdvantages.tsx     ← 区块3
...
```

3. 页面文件 `page.tsx` 只做组件组装，按顺序 import 和排列所有组件

---

## 第三步：逐组件实现

**目标：基于页面蓝图中的精确数据，逐个创建组件。**

对每个组件，按以下模板实现：

1. **数据准备**：将该区块的所有文字、图片URL、链接地址整理为组件内的常量数组/对象
2. **布局还原**：分析原始 HTML 的布局结构（几列、几行、左右排列、轮播方向等），用 TailwindCSS 还原
3. **交互实现**：如有轮播、折叠面板、hover 效果等交互，添加 'use client' 和对应的 state 逻辑

**每个组件的实现规则：**
- 文字内容必须与爬取数据完全一致，逐字复制
- 图片使用爬取 HTML 中的原始 URL（jarsking.com 域名的绝对路径）
- 链接地址保持原始 href（相对路径即可）
- 子项数量必须与原始 HTML 完全一致（10个就是10个，不能减少）
- 布局的列数、行数、排列方式必须与原始 HTML 一致

---

## 第四步：页面组装

1. 在 `page.tsx` 中按顺序 import 所有组件
2. 确保组件顺序与原始页面从上到下的区块顺序一致
3. 不在 page.tsx 中写任何业务逻辑或内联内容

---

## 第五步：验证

1. 启动 dev server，确认编译无错误
2. 在浏览器中打开页面，从上到下逐区块对比：
   - 标题文字是否一致
   - 子项数量是否一致
   - 图片是否正确加载
   - 布局排列是否正确
3. 如有差异，回到第一步核对爬取的 HTML 内容

---

## 常见错误及避免方法

| 错误类型 | 原因 | 避免方法 |
|---------|------|---------|
| 标题文字不对 | 凭印象编写而非从HTML提取 | 必须从HTML中复制粘贴 |
| 区块数量不够 | 只看了部分HTML | 必须读完整个文件 |
| 内容被改写 | AI倾向于理解后重写 | 在prompt中明确要求"逐字复制" |
| 子项数量减少 | AI倾向于精简 | 明确要求"数量必须一致" |
| 布局结构偏差 | 没分析原始HTML的列数 | 先确认 col-20/col-33/col-50 等类名 |

---

## 复刻其他页面时的使用方法

当需要复刻新页面时，执行以下命令：

```
/replicate-page
```

然后提供：
1. 目标 HTML 文件路径（如 `jarsking-crawl/pages/about.html`）
2. 目标前端页面路径（如 `src/app/about/page.tsx`）
3. 组件目录（如 `src/components/about/`）

工作流会自动按上述5个步骤执行。
