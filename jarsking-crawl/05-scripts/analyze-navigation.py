#!/usr/bin/env python3
"""
分析Jarsking网站的导航栏结构
"""

import json
import re
from pathlib import Path

def analyze_navigation():
    """分析导航栏结构"""
    print("="*60)
    print("Jarsking导航栏结构分析")
    print("="*60)
    
    # 读取首页HTML
    home_html = Path('02-pages/home/index/page.html').read_text(encoding='utf-8', errors='ignore')
    
    # 提取主导航菜单
    print("\n1. 主导航菜单:")
    print("-"*40)
    
    # 查找主导航链接
    main_nav_pattern = r'<a[^>]*class="[^"]*menu-item[^"]*"[^>]*>(.*?)</a>'
    main_nav_matches = re.findall(main_nav_pattern, home_html, re.DOTALL)
    
    # 清理并显示导航项
    nav_items = []
    for match in main_nav_matches:
        # 提取文本内容
        text = re.sub(r'<[^>]+>', '', match).strip()
        if text and text not in nav_items:
            nav_items.append(text)
    
    for item in nav_items:
        print(f"  - {item}")
    
    # 提取Categories下拉菜单
    print("\n2. Categories下拉菜单结构:")
    print("-"*40)
    
    # 查找By Applications部分
    skincare_pattern = r'Skincare.*?</ul>'
    skincare_match = re.search(skincare_pattern, home_html, re.DOTALL)
    
    if skincare_match:
        print("\n  Skincare分类:")
        # 提取链接
        links = re.findall(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', skincare_match.group())
        for href, text in links:
            text = re.sub(r'<[^>]+>', '', text).strip()
            if text and text != "Skincare":
                print(f"    - {text}: {href}")
    
    # 查找Makeup部分
    makeup_pattern = r'Makeup.*?</ul>'
    makeup_match = re.search(makeup_pattern, home_html, re.DOTALL)
    
    if makeup_match:
        print("\n  Makeup分类:")
        links = re.findall(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', makeup_match.group())
        for href, text in links:
            text = re.sub(r'<[^>]+>', '', text).strip()
            if text and text != "Makeup":
                print(f"    - {text}: {href}")
    
    # 查找Fragrance部分
    fragrance_pattern = r'Fragrance.*?</ul>'
    fragrance_match = re.search(fragrance_pattern, home_html, re.DOTALL)
    
    if fragrance_match:
        print("\n  Fragrance分类:")
        links = re.findall(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', fragrance_match.group())
        for href, text in links:
            text = re.sub(r'<[^>]+>', '', text).strip()
            if text and text != "Fragrance":
                print(f"    - {text}: {href}")
    
    # 查找Personal Care部分
    personal_care_pattern = r'Personal Care.*?</ul>'
    personal_care_match = re.search(personal_care_pattern, home_html, re.DOTALL)
    
    if personal_care_match:
        print("\n  Personal Care分类:")
        links = re.findall(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', personal_care_match.group())
        for href, text in links:
            text = re.sub(r'<[^>]+>', '', text).strip()
            if text and text != "Personal Care":
                print(f"    - {text}: {href}")
    
    # 分析图片资源
    print("\n3. 导航栏相关图片:")
    print("-"*40)
    
    # 读取首页JSON获取图片信息
    home_data = json.load(open('02-pages/home/index/page.json', encoding='utf-8'))
    
    # 查找Logo
    logo_images = [img for img in home_data.get('images', []) if 'logo' in img.get('alt', '').lower()]
    if logo_images:
        print("\n  Logo图片:")
        for img in logo_images:
            print(f"    - {img.get('alt', 'N/A')}: {img.get('local_path', 'N/A')}")
    
    # 查找可能的绿色包装瓶图片
    green_images = [img for img in home_data.get('images', []) 
                   if 'green' in img.get('alt', '').lower() or 'violet' in img.get('alt', '').lower()]
    
    if green_images:
        print("\n  可能的展示图片:")
        for img in green_images[:5]:
            print(f"    - {img.get('alt', 'N/A')}: {img.get('local_path', 'N/A')}")
    
    # 查找所有产品图片
    product_images = [img for img in home_data.get('images', []) 
                     if img.get('category') == 'products']
    
    print(f"\n  产品图片总数: {len(product_images)}")
    
    # 页面映射
    print("\n4. 相关页面映射:")
    print("-"*40)
    
    # 读取URL映射
    with open('04-data/mappings/url-mapping.json', 'r', encoding='utf-8') as f:
        url_mapping = json.load(f)
    
    # 显示主要分类页面的映射
    category_urls = [
        'https://www.jarsking.com/all-applications/',
        'https://www.jarsking.com/all-materials/',
        'https://www.jarsking.com/all-packaging-types/',
        'https://www.jarsking.com/closures-and-caps/',
        'https://www.jarsking.com/boxes-bags-and-supplies/'
    ]
    
    for url in category_urls:
        if url in url_mapping:
            print(f"  {url}")
            print(f"    → {url_mapping[url]}")
    
    print("\n" + "="*60)

if __name__ == '__main__':
    analyze_navigation()
