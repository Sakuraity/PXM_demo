'use client'

import { useTranslation } from 'react-i18next'
import Breadcrumb from '@/components/layout/Breadcrumb'

interface ProductBreadcrumbProps {
  productTitle: string
}

export default function ProductBreadcrumb({ productTitle }: ProductBreadcrumbProps) {
  const { t } = useTranslation()

  const items = [
    { label: t('navigation.products', { defaultValue: 'Products' }), href: '/all-applications' },
    { label: productTitle },
  ]

  return <Breadcrumb items={items} />
}
