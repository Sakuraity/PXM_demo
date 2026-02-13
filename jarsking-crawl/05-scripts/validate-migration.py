#!/usr/bin/env python3
"""
验证Jarsking爬取目录迁移的完整性
"""

import os
import json
from pathlib import Path

# 配置
SOURCE_DIR = Path('jarsking-crawl-temp')  # 原始目录（已不存在）
TARGET_DIR = Path('.')  # 当前目录即jarsking-crawl

def validate_file_counts():
    """验证文件数量"""
    print("验证文件数量...")
    
    # 原始文件统计
    original_html = len(list(SOURCE_DIR.glob('pages/*.html')))
    original_json = len(list(SOURCE_DIR.glob('content/*.json')))
    original_images = len(list(SOURCE_DIR.glob('images/**/*.*')))

    # 新目录文件统计
    new_html = len(list(TARGET_DIR.rglob('page.html')))
    new_json = len(list(TARGET_DIR.rglob('page.json'))) + len(list(TARGET_DIR.glob('04-data/**/*.json')))
    new_images = len(list(TARGET_DIR.glob('03-assets/images/**/*.*')))
    
    print(f"  HTML文件: 原始 {original_html}, 新 {new_html} {'✓' if original_html == new_html else '✗'}")
    print(f"  JSON文件: 原始 {original_json}, 新 {new_json} {'✓' if original_json <= new_json else '✗'}")
    print(f"  图片文件: 原始 {original_images}, 新 {new_images} {'✓' if original_images == new_images else '✗'}")
    
    return original_html == new_html and original_json <= new_json and original_images == new_images

def validate_page_structure():
    """验证页面结构"""
    print("\n验证页面结构...")
    
    # 检查每个页面目录是否包含page.html和page.json
    page_dirs = [d for d in TARGET_DIR.glob('02-pages/**/*/') if d.is_dir() and (d / 'page.html').exists()]
    
    missing_files = []
    for page_dir in page_dirs:
        html_file = page_dir / 'page.html'
        json_file = page_dir / 'page.json'
        
        if not html_file.exists():
            missing_files.append(f"{page_dir}/page.html")
        if not json_file.exists():
            missing_files.append(f"{page_dir}/page.json")
    
    # 统计实际的页面目录数
    actual_page_dirs = len([d for d in TARGET_DIR.glob('02-pages/**/*/') if d.is_dir()])
    
    if missing_files:
        print(f"  ✗ 发现 {len(missing_files)} 个缺失文件")
        for file in missing_files[:5]:  # 只显示前5个
            print(f"    - {file}")
        if len(missing_files) > 5:
            print(f"    ... 还有 {len(missing_files) - 5} 个文件")
        return False
    else:
        print(f"  ✓ 所有 {len(page_dirs)} 个页面目录结构正确（共{actual_page_dirs}个目录）")
        return True

def validate_assets():
    """验证资源文件"""
    print("\n验证资源文件...")
    
    # 检查样式文件
    required_styles = [
        '03-assets/styles/design-system/design-tokens.json',
        '03-assets/styles/design-system/color-scheme.json',
        '03-assets/styles/design-system/typography.json',
        '03-assets/styles/design-system/spacing.json',
        '03-assets/styles/design-system/variables.css',
        '03-assets/styles/components/component-styles.json',
        '03-assets/styles/utilities/css-variables.json'
    ]
    
    missing_styles = []
    for style_file in required_styles:
        if not (TARGET_DIR / style_file).exists():
            missing_styles.append(style_file)
    
    if missing_styles:
        print(f"  ✗ 缺失样式文件: {len(missing_styles)}")
        return False
    else:
        print(f"  ✓ 所有样式文件已迁移")
    
    # 检查交互文件
    required_interactions = [
        '03-assets/interactions/animations/animations.json',
        '03-assets/interactions/effects/hover-effects.json',
        '03-assets/interactions/effects/transitions.json',
        '03-assets/interactions/docs/interaction-summary.json'
    ]
    
    missing_interactions = []
    for interaction_file in required_interactions:
        if not (TARGET_DIR / interaction_file).exists():
            missing_interactions.append(interaction_file)
    
    if missing_interactions:
        print(f"  ✗ 缺失交互文件: {len(missing_interactions)}")
        return False
    else:
        print(f"  ✓ 所有交互文件已迁移")
    
    return True

def validate_metadata():
    """验证元数据"""
    print("\n验证元数据...")
    
    metadata_file = TARGET_DIR / '01-site-info/metadata.json'
    if not metadata_file.exists():
        print("  ✗ metadata.json 不存在")
        return False
    
    with open(metadata_file, 'r', encoding='utf-8') as f:
        metadata = json.load(f)
    
    required_fields = ['source', 'migration_date', 'total_pages', 'total_images']
    missing_fields = [field for field in required_fields if field not in metadata]
    
    if missing_fields:
        print(f"  ✗ metadata.json 缺失字段: {missing_fields}")
        return False
    else:
        print(f"  ✓ metadata.json 完整")
    
    # 检查URL映射表
    url_mapping_file = TARGET_DIR / '04-data/mappings/url-mapping.json'
    if not url_mapping_file.exists():
        print("  ✗ url-mapping.json 不存在")
        return False
    
    with open(url_mapping_file, 'r', encoding='utf-8') as f:
        url_mapping = json.load(f)
    
    if len(url_mapping) != 100:
        print(f"  ✗ URL映射表条目数不正确: {len(url_mapping)} (应为100)")
        return False
    else:
        print(f"  ✓ URL映射表包含100个条目")
    
    return True

def generate_report():
    """生成验证报告"""
    print("\n生成验证报告...")
    
    report = {
        "validation_date": Path().resolve().as_posix(),
        "source_directory": str(SOURCE_DIR),
        "target_directory": str(TARGET_DIR),
        "checks": {
            "file_counts": validate_file_counts(),
            "page_structure": validate_page_structure(),
            "assets": validate_assets(),
            "metadata": validate_metadata()
        }
    }
    
    # 保存报告
    report_file = TARGET_DIR / '04-data/analytics/validation-report.json'
    with open(report_file, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    
    print(f"  ✓ 验证报告已保存到 {report_file}")
    
    # 总体结果
    all_passed = all(report["checks"].values())
    print("\n" + "="*60)
    if all_passed:
        print("✓ 所有验证通过！迁移成功完成。")
    else:
        print("✗ 部分验证失败，请检查上述问题。")
    print("="*60)
    
    return all_passed

def main():
    """主函数"""
    print("="*60)
    print("Jarsking爬取目录迁移验证")
    print("="*60)
    
    if not TARGET_DIR.exists():
        print(f"错误：目标目录 {TARGET_DIR} 不存在！")
        return
    
    generate_report()

if __name__ == '__main__':
    main()
