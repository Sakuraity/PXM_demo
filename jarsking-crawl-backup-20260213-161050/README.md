# Jarsking网站爬取资源包

本目录包含了从 https://www.jarsking.com/ 爬取的所有网站资源，用于复刻网站参考。

## 目录结构说明

### 📁 /images/
所有图片资源，按类别分类：
- **products/** - 产品图片（主图、细节图、场景图）
- **banners/** - Banner和横幅图片
- **icons/** - 图标和Logo文件
- **backgrounds/** - 背景图片
- **logos/** - 品牌标识

共下载了 **1,313** 张图片

### 📁 /pages/
所有页面的HTML结构文件（共100个页面）
- `index.html` - 首页
- 其他页面按URL路径命名保存

### 📁 /content/
页面的结构化内容数据（JSON格式）
- 每个页面的文本内容、标题、段落、列表等
- 图片信息和元数据
- 页面标题和Meta信息

### 📁 /styles/
设计规范和样式信息
- `css-variables.json` - 所有CSS变量（178个）
- `color-scheme.json` - 配色方案（5,058个颜色变量）
- `typography.json` - 字体规范
- `spacing.json` - 间距系统
- `design-tokens.json` - 设计令牌
- `variables.css` - CSS变量文件
- `component-styles.json` - 组件样式

### 📁 /interactions/
交互行为和动画效果
- `animations.json` - 动画效果（27,907个）
- `hover-effects.json` - Hover效果（5,214个）
- `transitions.json` - 过渡效果（22,954个）
- `form-behaviors.json` - 表单行为
- `modal-behaviors.json` - 模态框行为
- `dropdown-menus.json` - 下拉菜单
- `scroll-effects.json` - 滚动效果
- `interaction-summary.md` - 交互行为分析报告

### 📄 site-structure.md
网站整体结构说明文档

## 使用指南

### 1. 查看网站结构
```bash
cat site-structure.md
```

### 2. 查看设计规范
```bash
# 查看配色方案
cat styles/color-scheme.json

# 查看字体规范
cat styles/typography.json

# 查看CSS变量
cat styles/variables.css
```

### 3. 查看页面内容
```bash
# 查看首页内容
cat content/index.json

# 查看特定页面
cat content/about.json
```

### 4. 查看交互效果
```bash
cat interactions/interaction-summary.md
```

## 技术规格

### 设计系统
- **主色调**: 从CSS变量中提取的完整配色方案
- **字体**: 4种字体系列，6种字体大小
- **间距**: 19种标准间距值
- **组件**: 按钮、卡片、导航、表单等组件样式

### 交互特性
- 大量使用CSS过渡和动画
- Hover效果丰富
- 响应式设计
- 平滑滚动效果

### 页面类型
- 产品展示页
- 分类页面
- 内容页面（关于我们、新闻等）
- 联系页面

## 复刻建议

1. **使用CSS变量**
   - 直接使用 `styles/variables.css` 中的变量
   - 便于主题切换和维护

2. **参考设计令牌**
   - 使用 `styles/design-tokens.json` 建立设计系统
   - 保持视觉一致性

3. **实现交互效果**
   - 参考 `interactions/` 目录中的效果
   - 使用CSS transition和transform实现高性能动画

4. **图片资源**
   - 所有图片已下载到本地
   - 注意图片路径的替换

## 注意事项

- 所有资源仅供学习和参考使用
- 请遵守相关法律法规
- 商业使用前请获得授权

## 爬取信息
- 爬取时间: 2026-02-13 11:15:02
- 爬取工具: Python + BeautifulSoup + Requests
- 总页面数: 100
- 总图片数: 1,313
