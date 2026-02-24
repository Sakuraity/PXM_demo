"use client"

import { useTranslation } from 'react-i18next'

const newsItems = [
  { key: 'mjbizcon', img: 'https://www.jarsking.com/wp-content/uploads/2025/12/MJBizCon-2025-Las-Vegas-1024x400.webp', href: '/mjbizcon-2025-why-las-vegas-is-the-must-attend-cannabis-industry-event-for-forward-thinking-brands/' },
  { key: 'cosmopackAsia', img: 'https://www.jarsking.com/wp-content/uploads/2025/10/cosmopack-Asia-2025.webp', href: '/cosmopack-asia-2025-4-key-trends-to-discover-at-the-jarsking-booth/' },
  { key: 'cannafestPrague', img: 'https://www.jarsking.com/wp-content/uploads/2025/10/cannafest-prague-2025.webp', href: '/cannafest-prague-2025-7-cannabis-trends-to-watch/' },
  { key: 'beautyworldMiddleEast', img: 'https://www.jarsking.com/wp-content/uploads/2025/09/Booth-8-G24-Shaping-the-Future-of-Beauty-Packaging-1024x384.webp', href: '/connecting-with-jarsking-at-booth-8-g24-shaping-the-future-of-beauty-packaging-at-beautyworld-middle-east-2025/' },
  { key: 'cosmoprofLasVegas', img: 'https://www.jarsking.com/wp-content/uploads/2025/06/cosmoprof-2025-las-vegas.webp', href: '/us-beauty-industry-market-analysis-x-cosmoprof-las-vegas-2025/' },
  { key: 'cosmoprofBologna', img: 'https://www.jarsking.com/wp-content/uploads/2025/05/COSMOPROF-Bologna-2025-1024x384.webp', href: '/jarskings-eco-friendly-packaging-innovations-at-cosmoprof-bologna-2025/' },
]

const categoryLinks = [
  { key: 'news', img: 'https://www.jarsking.com/wp-content/uploads/2025/04/news-scaled.webp', href: '/news/' },
  { key: 'successStory', img: 'https://www.jarsking.com/wp-content/uploads/2025/04/cooperation-scaled.webp', href: '/success-stories/' },
  { key: 'blog', img: 'https://www.jarsking.com/wp-content/uploads/2023/02/blog.jpg', href: '/jarsking-blog/' },
]

export default function NewsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] text-center mb-4">
          {t('home.newsSection.title')}
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          {t('home.newsSection.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {categoryLinks.map((cat) => (
            <a key={cat.key} href={cat.href} className="relative h-[200px] rounded-lg overflow-hidden group block">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.img})` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold">{t(`home.newsSection.categories.${cat.key}`)}</h2>
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <a key={item.key} href={item.href} className="block group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={t(`home.newsSection.items.${item.key}`)}
                  className="w-full h-[160px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-[#1a1a2e] line-clamp-2 group-hover:text-[#c8a97e] transition-colors">
                  {t(`home.newsSection.items.${item.key}`)}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
