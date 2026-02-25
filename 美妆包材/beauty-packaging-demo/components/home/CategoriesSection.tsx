'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Sparkles, Palette, Droplets, ArrowRight } from 'lucide-react'

const categoryData = [
  {
    id: 'skincare',
    href: '/products?application=skincare',
    icon: Sparkles,
    image: '/images/categories/cat-skincare.png',
    color: 'from-amber-50 to-stone-100',
    accent: 'text-amber-700',
    count: '21',
  },
  {
    id: 'makeup',
    href: '/products?application=makeup',
    icon: Palette,
    image: '/images/categories/cat-makeup.png',
    color: 'from-rose-50 to-pink-50',
    accent: 'text-rose-600',
    count: '8',
  },
  {
    id: 'homecare',
    href: '/products?application=homecare',
    icon: Droplets,
    image: '/images/categories/cat-homecare.png',
    color: 'from-sky-50 to-stone-50',
    accent: 'text-sky-600',
    count: '7',
  },
]

export default function CategoriesSection() {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            {t('home.categories.title')}
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            {t('home.categories.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoryData.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="group relative overflow-hidden rounded-2xl border border-stone-100 hover:border-[#c9a96e]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-br ${cat.color} p-8 pb-0`}>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider ${cat.accent} mb-3`}>
                        <Icon className="w-3.5 h-3.5" />
                        {cat.count}+ {t('footer.products').toLowerCase()}
                      </div>
                      <h3 className="text-xl font-bold text-stone-900">
                        {t(`nav.${cat.id}`)}
                      </h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-[#c9a96e] group-hover:translate-x-1 transition-all mt-1" />
                  </div>
                  <div className="overflow-hidden rounded-t-xl h-52">
                    <img
                      src={cat.image}
                      alt={cat.id}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
