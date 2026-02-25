'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { Product } from '@/types'

interface Props {
  product: Product
}

export default function ProductBreadcrumb({ product }: Props) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'zh' | 'en'

  return (
    <div className="border-b border-stone-100 bg-stone-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 text-sm text-stone-500">
        <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/products" className="hover:text-stone-900 transition-colors">{t('nav.products')}</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-stone-900 font-medium truncate max-w-xs">{product.name[lang]}</span>
      </div>
    </div>
  )
}
