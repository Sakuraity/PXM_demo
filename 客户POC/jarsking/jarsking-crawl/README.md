# Jarsking网站爬取资源包（重构版）

本目录包含了从 https://www.jarsking.com/ 爬取的所有网站资源，已经过重新组织，便于开发和维护。

## 目录结构

### 📁 01-site-info/
网站基础信息和元数据

### 📁 02-pages/
所有页面资源，按类型分类组织
- `home/` - 首页
- `products/` - 产品页面
- `categories/` - 分类页面
- `collections/` - 产品合集
- `solutions/` - 解决方案
- `about/` - 关于我们
- `resources/` - 资源页面
- `blog/` - 博客文章
- `events/` - 活动展会
- `case-studies/` - 案例研究
- `special/` - 特殊页面

### 📁 03-assets/
静态资源
- `images/` - 图片资源（1312张）
- `styles/` - 样式文件
- `interactions/` - 交互效果

### 📁 04-data/
结构化数据和映射关系

### 📁 05-scripts/
处理和维护脚本

### 📁 06-docs/
文档和指南

## 使用说明

### 查找页面
每个页面都有独立的目录，包含：
- `page.html` - 页面HTML文件
- `page.json` - 页面数据

### 查找资源
- 图片：`03-assets/images/`
- 样式：`03-assets/styles/`
- 交互：`03-assets/interactions/`

### URL映射
查看 `04-data/mappings/url-mapping.json` 了解原始URL与新文件路径的对应关系。

## 迁移信息

- 迁移时间：2026-02-13 16:12:29
- 原始文件数：215个
- 总图片数：1312张
- 页面总数：100个

## 注意事项

所有资源仅供学习和参考使用，请遵守相关法律法规。
