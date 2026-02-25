'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface NavGroup {
  group: string
  items: { label: string; href: string }[]
}

interface Props {
  isOpen: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onItemClick: () => void
}

export default function ProductsDropdown({ isOpen, onMouseEnter, onMouseLeave, onItemClick }: Props) {
  const { t } = useTranslation()

  const productNav: NavGroup[] = [
    {
      group: t('nav.byApplication'),
      items: [
        { label: t('nav.skincare'), href: '/products?application=skincare' },
        { label: t('nav.makeup'), href: '/products?application=makeup' },
        { label: t('nav.homecare'), href: '/products?application=homecare' },
      ],
    },
    {
      group: t('nav.byMaterial'),
      items: [
        { label: t('nav.glass'), href: '/products?material=glass' },
        { label: t('nav.acrylic'), href: '/products?material=acrylic' },
        { label: t('nav.plastic'), href: '/products?material=plastic' },
      ],
    },
    {
      group: t('nav.byType'),
      items: [
        { label: t('nav.bottles'), href: '/products?type=bottles' },
        { label: t('nav.jars'), href: '/products?type=jars' },
        { label: t('nav.pumps'), href: '/products?type=pumps' },
      ],
    },
  ]

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors py-5">
        {t('nav.products')}
        <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-[520px] bg-white border border-stone-200 shadow-xl rounded-xl p-6 grid grid-cols-3 gap-6">
          {productNav.map((group) => (
            <div key={group.group}>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                {group.group}
              </p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-stone-700 hover:text-[#c9a96e] transition-colors"
                      onClick={onItemClick}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
