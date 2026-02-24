'use client'

import { useTranslation } from 'react-i18next'

export default function ProductRelatedHeading() {
  const { t } = useTranslation()

  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
        {t('productDetail.relatedProducts')}
      </h2>
      <p className="text-lg text-secondary">
        {t('productDetail.relatedProductsDesc')}
      </p>
    </div>
  )
}
