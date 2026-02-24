#!/usr/bin/env python3
"""Extract page structure from crawled HTML files for replication."""

from bs4 import BeautifulSoup
import re
import json
import sys

def extract_page_structure(html_path, page_name):
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    # Find the main content area (skip header/footer)
    # Look for data-elementor-type="wp-page" which is the main page content
    main_content = soup.find('div', {'data-elementor-type': 'wp-page'})
    if not main_content:
        main_content = soup.find('div', {'class': 'elementor-inner'})
    if not main_content:
        main_content = soup.body
    
    print(f"\n{'='*80}")
    print(f"PAGE: {page_name}")
    print(f"FILE: {html_path}")
    print(f"{'='*80}")
    
    # Extract all sections (top-level e-con elements)
    sections = main_content.find_all('div', class_=re.compile(r'e-con(?:\s|-)'), recursive=False)
    if not sections:
        # Try finding elementor-section
        sections = main_content.find_all('section', class_=re.compile(r'elementor-section'), recursive=False)
    if not sections:
        # Try all direct children that are sections or divs with data-id
        sections = main_content.find_all(['section', 'div'], attrs={'data-id': True}, recursive=False)
    
    print(f"\nTotal top-level sections found: {len(sections)}")
    
    for idx, section in enumerate(sections, 1):
        data_id = section.get('data-id', 'N/A')
        data_settings = section.get('data-settings', '{}')
        
        print(f"\n{'─'*60}")
        print(f"区块 {idx} (data-id: {data_id})")
        print(f"{'─'*60}")
        
        # Extract headings
        headings = section.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
        if headings:
            print(f"  标题:")
            for h in headings:
                text = h.get_text(strip=True)
                if text:
                    print(f"    <{h.name}>: {text}")
        
        # Extract paragraphs/text content
        texts = section.find_all('div', class_='elementor-widget-text-editor')
        if texts:
            print(f"  文本内容:")
            for t in texts:
                text = t.get_text(strip=True)
                if text and len(text) > 10:
                    print(f"    {text[:200]}{'...' if len(text) > 200 else ''}")
        
        # Extract images
        images = section.find_all('img')
        if images:
            print(f"  图片 ({len(images)}张):")
            for img in images:
                src = img.get('data-src') or img.get('src', '')
                alt = img.get('alt', '')
                if src and not src.startswith('data:'):
                    print(f"    - src: {src}")
                    if alt:
                        print(f"      alt: {alt}")
        
        # Extract links/buttons
        buttons = section.find_all('a', class_=re.compile(r'elementor-button'))
        if buttons:
            print(f"  按钮:")
            for btn in buttons:
                href = btn.get('href', '')
                text = btn.get_text(strip=True)
                print(f"    - [{text}] -> {href}")
        
        # Extract icon lists
        icon_lists = section.find_all('ul', class_='elementor-icon-list-items')
        if icon_lists:
            print(f"  图标列表:")
            for ul in icon_lists:
                items = ul.find_all('li')
                for item in items:
                    text = item.get_text(strip=True)
                    link = item.find('a')
                    href = link.get('href', '') if link else ''
                    print(f"    - {text} -> {href}")
        
        # Extract accordion/FAQ items
        accordions = section.find_all('div', class_='elementor-accordion')
        if accordions:
            print(f"  折叠面板/FAQ:")
            for acc in accordions:
                items = acc.find_all('div', class_='elementor-accordion-item')
                for item in items:
                    title = item.find('a', class_='elementor-accordion-title')
                    content = item.find('div', class_='elementor-tab-content')
                    if title:
                        print(f"    Q: {title.get_text(strip=True)}")
                    if content:
                        print(f"    A: {content.get_text(strip=True)[:200]}...")
        
        # Extract product cards / grid items
        cards = section.find_all('div', class_=re.compile(r'elementor-col-'))
        if cards and not headings and not texts:
            print(f"  列布局 ({len(cards)}列):")
            for card in cards[:8]:  # Show first 8
                card_text = card.get_text(strip=True)
                if card_text:
                    print(f"    - {card_text[:100]}")
        
        # Extract background images from style
        bg_elements = section.find_all(style=re.compile(r'background.*url'))
        if bg_elements:
            print(f"  背景图:")
            for el in bg_elements:
                style = el.get('style', '')
                urls = re.findall(r'url\(["\']?(.*?)["\']?\)', style)
                for url in urls:
                    print(f"    - {url}")
        
        # Check data-settings for background
        settings_elements = section.find_all(attrs={'data-settings': re.compile(r'background')})
        if settings_elements:
            for el in settings_elements[:3]:
                try:
                    settings = json.loads(el.get('data-settings', '{}'))
                    if 'background_image' in settings:
                        print(f"  背景图(settings): {settings['background_image'].get('url', '')}")
                except:
                    pass

    # Also extract the overall page structure summary
    print(f"\n{'='*60}")
    print(f"页面结构总结 - {page_name}")
    print(f"{'='*60}")
    all_h1 = main_content.find_all('h1')
    all_h2 = main_content.find_all('h2')
    all_h3 = main_content.find_all('h3')
    print(f"H1标题: {[h.get_text(strip=True) for h in all_h1 if h.get_text(strip=True)]}")
    print(f"H2标题: {[h.get_text(strip=True) for h in all_h2 if h.get_text(strip=True)]}")
    print(f"H3标题: {[h.get_text(strip=True) for h in all_h3 if h.get_text(strip=True)]}")
    
    all_imgs = main_content.find_all('img')
    real_imgs = [img for img in all_imgs if (img.get('data-src') or img.get('src', '')).startswith('http')]
    print(f"总图片数: {len(real_imgs)}")


pages = [
    ("/Users/realibox/Projects/PXM_demo/jarsking-crawl/02-pages/products/product-lists/all-applications-skincare-packaging/page.html", "Skincare Packaging"),
    ("/Users/realibox/Projects/PXM_demo/jarsking-crawl/02-pages/products/product-lists/all-applications-face-cream-jars/page.html", "Face Cream Jars"),
    ("/Users/realibox/Projects/PXM_demo/jarsking-crawl/02-pages/products/product-lists/all-applications-essential-oil-bottles/page.html", "Essential Oil Bottles"),
    ("/Users/realibox/Projects/PXM_demo/jarsking-crawl/02-pages/products/product-lists/all-applications-body-lotion-bottles/page.html", "Body Lotion Bottles"),
]

for path, name in pages:
    try:
        extract_page_structure(path, name)
    except Exception as e:
        print(f"Error processing {name}: {e}")
