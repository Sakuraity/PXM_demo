'use client'

import Link from 'next/link'
import { ArrowRight, Download, Mail, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface ProductDetailContentProps {
  productSlug: string
}

export default function ProductDetailContent({ productSlug }: ProductDetailContentProps) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-6">
      {/* 操作按钮 */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link
          href={`/products/${productSlug}/diy`}
          className="btn-primary flex items-center justify-center"
        >
          {t('productDetail.customizeProduct')}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>

        <button className="btn-secondary flex items-center justify-center">
          <Download className="w-5 h-5 mr-2" />
          {t('productDetail.downloadSpec')}
        </button>
      </div>

      {/* 联系信息 */}
      <div className="bg-accent/10 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">{t('productDetail.needHelp')}</h3>
        <p className="text-sm text-secondary mb-4">
          {t('productDetail.needHelpDesc')}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="mailto:info@jarsking.com" className="flex items-center text-accent hover:underline">
            <Mail className="w-4 h-4 mr-2" />
            info@jarsking.com
          </a>
          <a href="tel:+86123456789" className="flex items-center text-accent hover:underline">
            <Phone className="w-4 h-4 mr-2" />
            +86 123 456 789
          </a>
        </div>
      </div>
    </div>
  )
}
