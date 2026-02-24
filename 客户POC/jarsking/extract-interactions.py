#!/usr/bin/env python3
"""
提取交互行为和动画效果
"""

import json
import re
from pathlib import Path

def extract_interactions():
    """从HTML和CSS中提取交互行为"""
    pages_dir = Path("jarsking-crawl/pages")
    interactions_dir = Path("jarsking-crawl/interactions")
    
    interactions = {
        'animations': [],
        'hover_effects': [],
        'transitions': [],
        'form_behaviors': [],
        'modal_behaviors': [],
        'dropdown_menus': [],
        'scroll_effects': []
    }
    
    # 遍历所有HTML文件
    for html_file in pages_dir.glob("*.html"):
        with open(html_file, 'r', encoding='utf-8') as f:
            html_content = f.read()
            
        # 提取data-*属性（通常用于交互）
        data_attributes = re.findall(r'data-([^=]+)="([^"]*)"', html_content)
        for attr, value in data_attributes:
            if 'toggle' in attr or 'modal' in attr or 'dropdown' in attr:
                interactions['modal_behaviors'].append({
                    'element': attr,
                    'action': value,
                    'page': html_file.name
                })
                
        # 提取onclick事件
        onclicks = re.findall(r'onclick="([^"]*)"', html_content)
        for onclick in onclicks:
            interactions['form_behaviors'].append({
                'event': 'onclick',
                'action': onclick,
                'page': html_file.name
            })
            
        # 提取class中的动画相关名称
        class_animations = re.findall(r'class="[^"]*(animate|animation|fade|slide|bounce|zoom|pulse|shake|flip|rotate)[^"]*"', html_content, re.IGNORECASE)
        for class_match in class_animations:
            interactions['animations'].append({
                'type': 'css-animation',
                'class_name': class_match,
                'page': html_file.name
            })
            
    # 从content目录的样式中提取过渡效果
    content_dir = Path("jarsking-crawl/content")
    for json_file in content_dir.glob("*.json"):
        with open(json_file, 'r', encoding='utf-8') as f:
            page_data = json.load(f)
            
        if 'styles' in page_data and 'inline_styles' in page_data['styles']:
            for style in page_data['styles']['inline_styles']:
                # 查找transition属性
                transitions = re.findall(r'transition:\s*([^;]+)', style)
                for transition in transitions:
                    interactions['transitions'].append({
                        'property': transition.strip(),
                        'page': json_file.name
                    })
                    
                # 查找transform属性
                transforms = re.findall(r'transform:\s*([^;]+)', style)
                for transform in transforms:
                    interactions['animations'].append({
                        'type': 'transform',
                        'value': transform.strip(),
                        'page': json_file.name
                    })
                    
                # 查找hover效果
                hovers = re.findall(r':hover\s*{([^}]+)}', style)
                for hover in hovers:
                    interactions['hover_effects'].append({
                        'styles': hover.strip(),
                        'page': json_file.name
                    })
                    
    # 保存交互数据
    with open(interactions_dir / "animations.json", 'w', encoding='utf-8') as f:
        json.dump(interactions['animations'], f, ensure_ascii=False, indent=2)
        
    with open(interactions_dir / "hover-effects.json", 'w', encoding='utf-8') as f:
        json.dump(interactions['hover_effects'], f, ensure_ascii=False, indent=2)
        
    with open(interactions_dir / "transitions.json", 'w', encoding='utf-8') as f:
        json.dump(interactions['transitions'], f, ensure_ascii=False, indent=2)
        
    with open(interactions_dir / "form-behaviors.json", 'w', encoding='utf-8') as f:
        json.dump(interactions['form_behaviors'], f, ensure_ascii=False, indent=2)
        
    with open(interactions_dir / "modal-behaviors.json", 'w', encoding='utf-8') as f:
        json.dump(interactions['modal_behaviors'], f, ensure_ascii=False, indent=2)
        
    with open(interactions_dir / "dropdown-menus.json", 'w', encoding='utf-8') as f:
        json.dump(interactions['dropdown_menus'], f, ensure_ascii=False, indent=2)
        
    with open(interactions_dir / "scroll-effects.json", 'w', encoding='utf-8') as f:
        json.dump(interactions['scroll_effects'], f, ensure_ascii=False, indent=2)
        
    print(f"提取了 {len(interactions['animations'])} 个动画效果")
    print(f"提取了 {len(interactions['hover_effects'])} 个hover效果")
    print(f"提取了 {len(interactions['transitions'])} 个过渡效果")
    print(f"提取了 {len(interactions['form_behaviors'])} 个表单行为")

def generate_interaction_summary():
    """生成交互行为总结报告"""
    interactions_dir = Path("jarsking-crawl/interactions")
    
    summary = {
        'total_animations': 0,
        'total_interactions': 0,
        'common_patterns': [],
        'recommendations': []
    }
    
    # 统计各类交互数量
    for json_file in interactions_dir.glob("*.json"):
        with open(json_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            summary['total_interactions'] += len(data)
            
        if 'animations' in json_file.name:
            summary['total_animations'] += len(data)
            
    # 常见交互模式
    summary['common_patterns'] = [
        {
            'pattern': 'Hover Effects',
            'description': '鼠标悬停时的视觉反馈',
            'usage': '产品卡片、按钮、链接',
            'implementation': 'CSS :hover伪类'
        },
        {
            'pattern': 'Smooth Transitions',
            'description': '状态变化的平滑过渡',
            'usage': '颜色变化、尺寸变化、位置变化',
            'implementation': 'CSS transition属性'
        },
        {
            'pattern': 'Scroll Animations',
            'description': '滚动触发的动画效果',
            'usage': '内容展示、视差滚动',
            'implementation': 'Intersection Observer API'
        }
    ]
    
    # 复刻建议
    summary['recommendations'] = [
        '使用CSS变量实现主题切换',
        '采用transition实现平滑过渡',
        '使用transform实现高性能动画',
        '考虑使用Intersection Observer实现滚动动画',
        '为移动端优化触摸交互'
    ]
    
    # 保存总结
    with open(interactions_dir / "interaction-summary.json", 'w', encoding='utf-8') as f:
        json.dump(summary, f, ensure_ascii=False, indent=2)
        
    # 生成Markdown报告
    md_content = f"""# Jarsking网站交互行为分析报告

## 统计概览
- 总交互数量: {summary['total_interactions']}
- 动画效果数量: {summary['total_animations']}

## 常见交互模式

"""
    for pattern in summary['common_patterns']:
        md_content += f"""### {pattern['pattern']}
- **描述**: {pattern['description']}
- **使用场景**: {pattern['usage']}
- **实现方式**: {pattern['implementation']}

"""
        
    md_content += "## 复刻建议\n\n"
    for i, rec in enumerate(summary['recommendations'], 1):
        md_content += f"{i}. {rec}\n"
        
    with open(interactions_dir / "interaction-summary.md", 'w', encoding='utf-8') as f:
        f.write(md_content)
        
    print("生成交互行为总结报告")

if __name__ == "__main__":
    extract_interactions()
    generate_interaction_summary()
