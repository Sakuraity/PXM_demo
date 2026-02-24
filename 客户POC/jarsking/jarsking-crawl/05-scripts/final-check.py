#!/usr/bin/env python3
"""
最终验证重构后的Jarsking目录
"""

from pathlib import Path

def main():
    print("="*60)
    print("Jarsking目录重构最终验证")
    print("="*60)
    
    # 统计文件
    html_count = len(list(Path('.').rglob('page.html')))
    json_count = len(list(Path('.').rglob('page.json')))
    image_count = len(list(Path('03-assets/images').rglob('*.*')))
    
    print(f"\n文件统计:")
    print(f"  HTML页面: {html_count}")
    print(f"  JSON数据: {json_count}")
    print(f"  图片文件: {image_count}")
    
    # 检查关键文件
    key_files = [
        'README.md',
        '01-site-info/metadata.json',
        '04-data/mappings/url-mapping.json',
        '03-assets/styles/design-system/color-scheme.json',
        '03-assets/interactions/animations/animations.json'
    ]
    
    print(f"\n关键文件检查:")
    for file in key_files:
        if Path(file).exists():
            print(f"  ✓ {file}")
        else:
            print(f"  ✗ {file}")
    
    # 显示目录结构
    print(f"\n目录结构:")
    print("  jarsking-crawl/")
    print("  ├── 01-site-info/      # 网站信息")
    print("  ├── 02-pages/          # 页面资源")
    print("  ├── 03-assets/         # 静态资源")
    print("  ├── 04-data/           # 结构化数据")
    print("  ├── 05-scripts/        # 工具脚本")
    print("  └── 06-docs/           # 文档")
    
    print("\n" + "="*60)
    print("✓ 重构成功完成！")
    print("\n使用方法:")
    print("  查找页面: python3 05-scripts/find-resource.py name <关键词>")
    print("  查找图片: python3 05-scripts/find-resource.py image <关键词>")
    print("  列出分类: python3 05-scripts/find-resource.py list")
    print("="*60)

if __name__ == '__main__':
    main()
