#!/usr/bin/env python3
"""
Jarsking网站爬虫
用于爬取网站的所有内容资源，为复刻网站提供素材
"""

import requests
from bs4 import BeautifulSoup
import json
import os
import time
import urllib.parse
from urllib.parse import urljoin, urlparse
import re
from pathlib import Path
import logging

# 配置日志
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class JarskingCrawler:
    def __init__(self, base_url="https://www.jarsking.com/"):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        })
        
        # 创建目录结构
        self.base_dir = Path("jarsking-crawl")
        self.images_dir = self.base_dir / "images"
        self.pages_dir = self.base_dir / "pages"
        self.styles_dir = self.base_dir / "styles"
        self.content_dir = self.base_dir / "content"
        self.interactions_dir = self.base_dir / "interactions"
        
        # 已访问的URL集合
        self.visited_urls = set()
        self.all_links = set()
        
    def ensure_directories(self):
        """创建所有必要的目录"""
        dirs = [
            self.images_dir / "products",
            self.images_dir / "banners",
            self.images_dir / "icons",
            self.images_dir / "backgrounds",
            self.images_dir / "logos",
            self.pages_dir / "homepage",
            self.pages_dir / "products",
            self.pages_dir / "categories",
            self.pages_dir / "content",
        ]
        for dir_path in dirs:
            dir_path.mkdir(parents=True, exist_ok=True)
            
    def get_page_content(self, url):
        """获取页面内容"""
        try:
            response = self.session.get(url, timeout=30)
            response.raise_for_status()
            return response.text, response.headers
        except Exception as e:
            logger.error(f"获取页面失败 {url}: {e}")
            return None, None
            
    def save_html(self, url, html_content):
        """保存HTML文件"""
        parsed = urlparse(url)
        path = parsed.path.strip('/').replace('/', '_') or 'index'
        filename = f"{path}.html"
        filepath = self.pages_dir / filename
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html_content)
        logger.info(f"保存HTML: {filepath}")
        
    def extract_links(self, soup, base_url):
        """提取页面中的所有链接"""
        links = set()
        for link in soup.find_all('a', href=True):
            href = link['href']
            full_url = urljoin(base_url, href)
            # 只保留同域名下的链接
            if urlparse(full_url).netloc == urlparse(base_url).netloc:
                # 清理URL（移除参数和锚点）
                clean_url = full_url.split('?')[0].split('#')[0]
                if clean_url.endswith('/'):
                    clean_url = clean_url[:-1]
                if clean_url:
                    links.add(clean_url)
        return links
        
    def download_image(self, img_url, category='products'):
        """下载图片"""
        try:
            response = self.session.get(img_url, timeout=30)
            response.raise_for_status()
            
            # 获取文件名
            parsed = urlparse(img_url)
            filename = os.path.basename(parsed.path)
            if not filename:
                filename = f"image_{int(time.time())}.jpg"
                
            # 根据内容类型确定扩展名
            content_type = response.headers.get('content-type', '')
            if 'jpeg' in content_type or 'jpg' in content_type:
                if not filename.endswith('.jpg') and not filename.endswith('.jpeg'):
                    filename += '.jpg'
            elif 'png' in content_type:
                if not filename.endswith('.png'):
                    filename += '.png'
            elif 'svg' in content_type:
                if not filename.endswith('.svg'):
                    filename += '.svg'
            elif 'webp' in content_type:
                if not filename.endswith('.webp'):
                    filename += '.webp'
                    
            filepath = self.images_dir / category / filename
            
            with open(filepath, 'wb') as f:
                f.write(response.content)
            logger.info(f"下载图片: {filepath}")
            return filepath
        except Exception as e:
            logger.error(f"下载图片失败 {img_url}: {e}")
            return None
            
    def extract_images(self, soup, page_url):
        """提取并下载页面中的所有图片"""
        images = []
        for img in soup.find_all('img', src=True):
            src = img['src']
            full_url = urljoin(page_url, src)
            
            # 判断图片类别
            category = 'products'
            if 'banner' in src.lower() or 'hero' in src.lower():
                category = 'banners'
            elif 'icon' in src.lower() or 'logo' in src.lower():
                category = 'icons'
            elif 'bg' in src.lower() or 'background' in src.lower():
                category = 'backgrounds'
                
            filepath = self.download_image(full_url, category)
            if filepath:
                images.append({
                    'original_url': full_url,
                    'local_path': str(filepath),
                    'alt': img.get('alt', ''),
                    'class': img.get('class', []),
                    'category': category
                })
        return images
        
    def extract_text_content(self, soup):
        """提取文本内容"""
        content = {
            'title': '',
            'meta': {
                'description': '',
                'keywords': ''
            },
            'headings': [],
            'paragraphs': [],
            'lists': [],
            'tables': []
        }
        
        # 提取title
        title_tag = soup.find('title')
        if title_tag:
            content['title'] = title_tag.get_text().strip()
            
        # 提取meta信息
        desc_meta = soup.find('meta', attrs={'name': 'description'})
        if desc_meta:
            content['meta']['description'] = desc_meta.get('content', '')
            
        keywords_meta = soup.find('meta', attrs={'name': 'keywords'})
        if keywords_meta:
            content['meta']['keywords'] = keywords_meta.get('content', '')
            
        # 提取标题
        for i in range(1, 7):
            for heading in soup.find_all(f'h{i}'):
                content['headings'].append({
                    'level': i,
                    'text': heading.get_text().strip(),
                    'id': heading.get('id', ''),
                    'class': heading.get('class', [])
                })
                
        # 提取段落
        for p in soup.find_all('p'):
            text = p.get_text().strip()
            if text:
                content['paragraphs'].append({
                    'text': text,
                    'class': p.get('class', [])
                })
                
        # 提取列表
        for ul in soup.find_all(['ul', 'ol']):
            items = []
            for li in ul.find_all('li'):
                items.append(li.get_text().strip())
            if items:
                content['lists'].append({
                    'type': ul.name,
                    'items': items,
                    'class': ul.get('class', [])
                })
                
        return content
        
    def extract_styles(self, soup):
        """提取样式信息"""
        styles = {
            'inline_styles': [],
            'css_links': [],
            'css_variables': {},
            'color_scheme': {
                'primary': [],
                'secondary': [],
                'accent': []
            },
            'typography': {
                'fonts': [],
                'sizes': []
            }
        }
        
        # 提取CSS链接
        for link in soup.find_all('link', rel='stylesheet'):
            if link.get('href'):
                styles['css_links'].append(urljoin(self.base_url, link['href']))
                
        # 提取内联样式
        for style in soup.find_all('style'):
            if style.string:
                styles['inline_styles'].append(style.string)
                
        # 提取CSS变量
        for style in styles['inline_styles']:
            # 查找CSS变量定义
            var_pattern = r'--([\w-]+):\s*([^;]+);'
            matches = re.findall(var_pattern, style)
            for var_name, var_value in matches:
                styles['css_variables'][var_name] = var_value.strip()
                
        # TODO: 进一步分析颜色和字体信息
        
        return styles
        
    def crawl_page(self, url):
        """爬取单个页面"""
        if url in self.visited_urls:
            return
            
        logger.info(f"爬取页面: {url}")
        html_content, headers = self.get_page_content(url)
        
        if not html_content:
            return
            
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # 保存HTML
        self.save_html(url, html_content)
        
        # 提取并下载图片
        images = self.extract_images(soup, url)
        
        # 提取文本内容
        text_content = self.extract_text_content(soup)
        
        # 提取样式信息
        styles = self.extract_styles(soup)
        
        # 保存页面数据
        page_data = {
            'url': url,
            'title': text_content['title'],
            'meta': text_content['meta'],
            'images': images,
            'text_content': text_content,
            'styles': styles,
            'timestamp': time.time()
        }
        
        # 保存为JSON
        parsed = urlparse(url)
        path = parsed.path.strip('/').replace('/', '_') or 'index'
        json_path = self.content_dir / f"{path}.json"
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(page_data, f, ensure_ascii=False, indent=2)
            
        # 提取链接
        links = self.extract_links(soup, url)
        self.all_links.update(links)
        
        self.visited_urls.add(url)
        
        # 延时避免过于频繁的请求
        time.sleep(1)
        
    def crawl(self):
        """开始爬取"""
        self.ensure_directories()
        
        # 从首页开始
        self.crawl_page(self.base_url)
        
        # 爬取所有发现的页面
        max_pages = 100  # 限制最大页面数
        crawled_count = 1
        
        while self.all_links and crawled_count < max_pages:
            # 找出未访问的链接
            unvisited = self.all_links - self.visited_urls
            if not unvisited:
                break
                
            url = unvisited.pop()
            self.crawl_page(url)
            crawled_count += 1
            
        logger.info(f"爬取完成，共爬取 {len(self.visited_urls)} 个页面")
        
        # 生成网站结构报告
        self.generate_site_structure()
        
    def generate_site_structure(self):
        """生成网站结构报告"""
        structure = {
            'base_url': self.base_url,
            'total_pages': len(self.visited_urls),
            'pages': list(self.visited_urls),
            'crawl_time': time.strftime('%Y-%m-%d %H:%M:%S'),
            'directory_structure': {
                'images': ['products', 'banners', 'icons', 'backgrounds', 'logos'],
                'pages': ['homepage', 'products', 'categories', 'content'],
                'styles': ['css-variables.json', 'typography.json', 'color-scheme.json'],
                'content': ['pages-content.json', 'products-data.json'],
                'interactions': ['animations.json', 'form-behaviors.json']
            }
        }
        
        # 保存结构信息
        with open(self.base_dir / 'site-structure.json', 'w', encoding='utf-8') as f:
            json.dump(structure, f, ensure_ascii=False, indent=2)
            
        # 生成Markdown报告
        md_content = f"""# Jarsking网站结构报告
        
## 基本信息
- 网站URL: {self.base_url}
- 爬取时间: {structure['crawl_time']}
- 总页面数: {structure['total_pages']}

## 页面列表
"""
        for page in sorted(structure['pages']):
            md_content += f"- {page}\n"
            
        with open(self.base_dir / 'site-structure.md', 'w', encoding='utf-8') as f:
            f.write(md_content)
            
        logger.info("网站结构报告已生成")

if __name__ == "__main__":
    crawler = JarskingCrawler()
    crawler.crawl()
