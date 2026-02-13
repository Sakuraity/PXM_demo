#!/usr/bin/env python3
"""
提取CSS样式信息并整理设计规范
"""

import json
import os
import re
from pathlib import Path
from collections import defaultdict

def extract_css_variables():
    """从所有页面的样式中提取CSS变量"""
    content_dir = Path("jarsking-crawl/content")
    styles_dir = Path("jarsking-crawl/styles")
    
    # 收集所有CSS变量
    all_variables = defaultdict(set)
    color_scheme = {
        'primary': [],
        'secondary': [],
        'accent': [],
        'neutral': [],
        'semantic': []
    }
    typography = {
        'font_families': set(),
        'font_sizes': set(),
        'font_weights': set(),
        'line_heights': set()
    }
    spacing = set()
    
    # 遍历所有页面数据
    for json_file in content_dir.glob("*.json"):
        with open(json_file, 'r', encoding='utf-8') as f:
            page_data = json.load(f)
            
        # 提取CSS变量
        if 'styles' in page_data and 'css_variables' in page_data['styles']:
            for var_name, var_value in page_data['styles']['css_variables'].items():
                all_variables[var_name].add(var_value)
                
                # 分类颜色变量
                if 'color' in var_name:
                    if 'primary' in var_name:
                        color_scheme['primary'].append({'name': var_name, 'value': var_value})
                    elif 'secondary' in var_name:
                        color_scheme['secondary'].append({'name': var_name, 'value': var_value})
                    elif 'accent' in var_name:
                        color_scheme['accent'].append({'name': var_name, 'value': var_value})
                    elif 'neutral' in var_name or 'gray' in var_name or 'grey' in var_name:
                        color_scheme['neutral'].append({'name': var_name, 'value': var_value})
                    else:
                        color_scheme['semantic'].append({'name': var_name, 'value': var_value})
                        
                # 提取字体信息
                elif 'font' in var_name:
                    if 'family' in var_name:
                        typography['font_families'].add(var_value)
                    elif 'size' in var_name:
                        typography['font_sizes'].add(var_value)
                    elif 'weight' in var_name:
                        typography['font_weights'].add(var_value)
                        
                # 提取行高
                elif 'line-height' in var_name:
                    typography['line_heights'].add(var_value)
                    
                # 提取间距
                elif 'spacing' in var_name or 'gap' in var_name or 'padding' in var_name or 'margin' in var_name:
                    spacing.add(var_value)
    
    # 去重并转换为列表
    css_variables = {k: list(v)[0] for k, v in all_variables.items() if v}
    
    for key in typography:
        if isinstance(typography[key], set):
            typography[key] = sorted(list(typography[key]))
            
    spacing = sorted(list(spacing))
    
    # 保存CSS变量
    with open(styles_dir / "css-variables.json", 'w', encoding='utf-8') as f:
        json.dump(css_variables, f, ensure_ascii=False, indent=2)
        
    # 保存配色方案
    with open(styles_dir / "color-scheme.json", 'w', encoding='utf-8') as f:
        json.dump(color_scheme, f, ensure_ascii=False, indent=2)
        
    # 保存字体规范
    with open(styles_dir / "typography.json", 'w', encoding='utf-8') as f:
        json.dump(typography, f, ensure_ascii=False, indent=2)
        
    # 保存间距系统
    with open(styles_dir / "spacing.json", 'w', encoding='utf-8') as f:
        json.dump({'spacing_values': spacing}, f, ensure_ascii=False, indent=2)
        
    print(f"提取了 {len(css_variables)} 个CSS变量")
    print(f"提取了 {sum(len(v) for v in color_scheme.values())} 个颜色变量")
    print(f"提取了 {len(typography['font_families'])} 个字体系列")
    print(f"提取了 {len(typography['font_sizes'])} 个字体大小")
    print(f"提取了 {len(spacing)} 个间距值")

def extract_component_styles():
    """提取组件样式信息"""
    content_dir = Path("jarsking-crawl/content")
    styles_dir = Path("jarsking-crawl/styles")
    
    components = {
        'buttons': [],
        'cards': [],
        'navigation': [],
        'forms': [],
        'footers': []
    }
    
    # 分析HTML中的class名称
    for json_file in content_dir.glob("*.json"):
        with open(json_file, 'r', encoding='utf-8') as f:
            page_data = json.load(f)
            
        # 从图片和文本内容中提取class信息
        if 'images' in page_data:
            for img in page_data['images']:
                if 'class' in img and img['class']:
                    # 分析按钮相关的class
                    if any('btn' in c.lower() or 'button' in c.lower() for c in img['class']):
                        components['buttons'].extend(img['class'])
                        
        if 'text_content' in page_data:
            # 分析标题和段落的class
            for heading in page_data['text_content'].get('headings', []):
                if 'class' in heading and heading['class']:
                    if any('nav' in c.lower() for c in heading['class']):
                        components['navigation'].extend(heading['class'])
                        
            for paragraph in page_data['text_content'].get('paragraphs', []):
                if 'class' in paragraph and paragraph['class']:
                    if any('card' in c.lower() for c in paragraph['class']):
                        components['cards'].extend(paragraph['class'])
                    elif any('form' in c.lower() for c in paragraph['class']):
                        components['forms'].extend(paragraph['class'])
                    elif any('footer' in c.lower() for c in paragraph['class']):
                        components['footers'].extend(paragraph['class'])
    
    # 去重
    for key in components:
        components[key] = sorted(list(set(components[key])))
        
    # 保存组件样式
    with open(styles_dir / "component-styles.json", 'w', encoding='utf-8') as f:
        json.dump(components, f, ensure_ascii=False, indent=2)
        
    print(f"提取了组件样式信息")

def generate_design_tokens():
    """生成设计令牌文档"""
    styles_dir = Path("jarsking-crawl/styles")
    
    # 读取所有样式文件
    design_tokens = {
        'brand': {
            'primary_colors': {},
            'secondary_colors': {},
            'neutral_colors': {}
        },
        'typography': {
            'font_families': {},
            'font_sizes': {},
            'font_weights': {},
            'line_heights': {}
        },
        'spacing': {},
        'border_radius': {},
        'shadows': {},
        'animations': {}
    }
    
    # 从CSS变量中提取设计令牌
    if (styles_dir / "css-variables.json").exists():
        with open(styles_dir / "css-variables.json", 'r', encoding='utf-8') as f:
            css_vars = json.load(f)
            
        for var_name, var_value in css_vars.items():
            # 颜色令牌
            if 'color' in var_name:
                if 'primary' in var_name:
                    design_tokens['brand']['primary_colors'][var_name] = var_value
                elif 'secondary' in var_name:
                    design_tokens['brand']['secondary_colors'][var_name] = var_value
                elif 'neutral' in var_name or 'gray' in var_name:
                    design_tokens['brand']['neutral_colors'][var_name] = var_value
                    
            # 字体令牌
            elif 'font' in var_name:
                if 'family' in var_name:
                    design_tokens['typography']['font_families'][var_name] = var_value
                elif 'size' in var_name:
                    design_tokens['typography']['font_sizes'][var_name] = var_value
                elif 'weight' in var_name:
                    design_tokens['typography']['font_weights'][var_name] = var_value
                    
            # 间距令牌
            elif 'spacing' in var_name:
                design_tokens['spacing'][var_name] = var_value
                
            # 圆角令牌
            elif 'radius' in var_name:
                design_tokens['border_radius'][var_name] = var_value
                
            # 阴影令牌
            elif 'shadow' in var_name:
                design_tokens['shadows'][var_name] = var_value
                
            # 动画令牌
            elif 'animation' in var_name or 'transition' in var_name:
                design_tokens['animations'][var_name] = var_value
    
    # 保存设计令牌
    with open(styles_dir / "design-tokens.json", 'w', encoding='utf-8') as f:
        json.dump(design_tokens, f, ensure_ascii=False, indent=2)
        
    # 生成CSS变量文件
    css_content = ":root {\n"
    for category in design_tokens:
        for subcategory in design_tokens[category]:
            if isinstance(design_tokens[category][subcategory], dict):
                for token_name, token_value in design_tokens[category][subcategory].items():
                    css_content += f"  {token_name}: {token_value};\n"
            else:
                css_content += f"  {subcategory}: {design_tokens[category][subcategory]};\n"
    css_content += "}\n"
    
    with open(styles_dir / "variables.css", 'w', encoding='utf-8') as f:
        f.write(css_content)
        
    print("生成设计令牌文档完成")

if __name__ == "__main__":
    extract_css_variables()
    extract_component_styles()
    generate_design_tokens()
