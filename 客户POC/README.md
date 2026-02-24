# 客户POC项目

本目录包含面向具体客户的POC（Proof of Concept）项目，用于展示PXM平台在实际业务场景中的应用价值。

## 项目结构

每个客户POC项目都是独立的子目录，包含该项目的完整资料：

### jarsking - 美妆包材行业POC

**项目背景**：美妆包材行业客户独立站复刻与PXM集成演示

**项目内容**：
- `beauty-packaging-site/` - 基于Next.js的独立站前端项目
- `jarsking-crawl/` - 客户网站数据爬取与分析结果
- `jarsking-crawl-backup-*/` - 数据备份文件
- `美妆包材独立站设计.md` - 项目需求与设计方案
- `*.py` - 数据爬取相关脚本
- `*.txt` - 数据导出文件

**项目成果**：
- ✅ 完成客户网站1:1复刻
- ✅ 建立PXM数据链路演示
- ✅ 沉淀美妆包材行业解决方案模板

## POC项目管理规范

### 新建POC项目
1. 在客户POC目录下创建客户名称子目录
2. 包含以下标准内容：
   - 项目设计文档
   - 前端Demo项目
   - 数据分析文件
   - 备份文件

### 文件命名规范
- 前端项目：`{customer-name}-site/`
- 爬虫数据：`{customer-name}-crawl/`
- 备份文件：`{customer-name}-crawl-backup-{YYYYMMDD-HHMMSS}/`
- 设计文档：`{行业}独立站设计.md`

### Git管理
- 使用`git mv`移动文件，保留历史记录
- 每个POC项目独立分支管理
- 重要节点打tag标记
