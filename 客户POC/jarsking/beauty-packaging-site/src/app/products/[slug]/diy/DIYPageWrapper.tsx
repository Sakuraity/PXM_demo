'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Save, Share2, Download } from 'lucide-react'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { useTranslation } from 'react-i18next'
import DIYConfigurator from '@/components/diy/DIYConfigurator'
import { Product, DIYConfiguration } from '@/types'

interface DIYPageWrapperProps {
  product: Product
}

export default function DIYPageWrapper({ product }: DIYPageWrapperProps) {
  const { t } = useTranslation()
  const [configuration, setConfiguration] = useState<Partial<DIYConfiguration>>({})
  const [statusMessage, setStatusMessage] = useState('')
  const draftKey = useMemo(() => `diy:draft:${product.slug}`, [product.slug])
  const wishlistKey = useMemo(() => `diy:wishlist:${product.slug}`, [product.slug])
  const quoteKey = useMemo(() => `diy:quote:${product.slug}`, [product.slug])

  const breadcrumbItems = [
    { label: t('navigation.products', { defaultValue: 'Products' }), href: '/all-applications' },
    { label: product.title, href: `/products/${product.slug}` },
    { label: t('diy.breadcrumb', { defaultValue: 'DIY Customization' }) }
  ]

  // 处理配置变更
  const handleConfigurationChange = async (config: Partial<DIYConfiguration>) => {
    setConfiguration(config)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(draftKey, JSON.stringify(config))
    }
    setStatusMessage('Draft autosaved')
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const raw = window.localStorage.getItem(draftKey)
    if (!raw) return

    try {
      const parsed = JSON.parse(raw) as Partial<DIYConfiguration>
      setConfiguration(parsed)
      setStatusMessage('Draft loaded from local storage')
    } catch {
      setStatusMessage('Failed to load previous draft')
    }
  }, [draftKey])

  const handleSaveWishlist = () => {
    if (typeof window === 'undefined') return
    const current = window.localStorage.getItem(wishlistKey)
    const list: Partial<DIYConfiguration>[] = current ? JSON.parse(current) : []
    list.unshift({
      ...configuration,
      status: 'saved',
      updatedAt: new Date().toISOString(),
    })
    window.localStorage.setItem(wishlistKey, JSON.stringify(list.slice(0, 20)))
    setStatusMessage('Saved to wishlist')
  }

  const handleRequestQuote = () => {
    if (typeof window === 'undefined') return
    const payload = {
      productSlug: product.slug,
      submittedAt: new Date().toISOString(),
      configuration,
      status: 'submitted',
    }
    window.localStorage.setItem(quoteKey, JSON.stringify(payload))
    setStatusMessage('Quote request submitted (placeholder)')
  }

  const handleExportConfiguration = () => {
    if (typeof window === 'undefined') return
    const blob = new Blob([JSON.stringify(configuration, null, 2)], { type: 'application/json' })
    const href = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = href
    link.download = `${product.slug}-diy-config.json`
    link.click()
    URL.revokeObjectURL(href)
    setStatusMessage('Configuration exported')
  }

  const handleShare = async () => {
    const url = window.location.href
    if (navigator.share) {
      await navigator.share({
        title: `${product.title} DIY Configuration`,
        text: 'Check my packaging customization design',
        url,
      })
    } else {
      await navigator.clipboard.writeText(url)
      setStatusMessage('Share link copied to clipboard')
    }
  }

  return (
    <div className="min-h-screen">
      {/* 面包屑导航 */}
      <Breadcrumb items={breadcrumbItems} />

      {/* DIY配置器 */}
      <section className="py-12">
        <div className="container-custom">
          {/* 页面头部 */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              {t('diy.title', { defaultValue: 'DIY Customization' })}
            </h1>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              {t('diy.description', { defaultValue: 'Customize your packaging with our intuitive 3D designer. Choose shape, material, color, and add your brand logo.', productTitle: product.title })}
            </p>
          </div>

          {/* 返回按钮 */}
          <Link 
            href={`/products/${product.slug}`}
            className="inline-flex items-center text-secondary hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('diy.backToProduct', { defaultValue: 'Back to Product Details' })}
          </Link>

          {/* 配置器主体 */}
          <DIYConfigurator 
            productId={product.slug}
            onConfigurationChange={handleConfigurationChange}
            initialConfiguration={configuration}
          />

          {/* 操作栏 */}
          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <button onClick={handleSaveWishlist} className="btn-secondary flex items-center">
                <Save className="w-4 h-4 mr-2" />
                {t('diy.saveDesign', { defaultValue: 'Save Design' })}
              </button>
              <button onClick={handleShare} className="btn-secondary flex items-center">
                <Share2 className="w-4 h-4 mr-2" />
                {t('diy.share', { defaultValue: 'Share' })}
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <button onClick={handleExportConfiguration} className="btn-secondary flex items-center">
                <Download className="w-4 h-4 mr-2" />
                {t('diy.exportConfig', { defaultValue: 'Export Config' })}
              </button>
              <button onClick={handleRequestQuote} className="btn-primary">
                {t('diy.requestQuote', { defaultValue: 'Request Quote' })}
              </button>
            </div>
          </div>

          {statusMessage && (
            <p className="mt-4 text-sm text-secondary">{statusMessage}</p>
          )}

          {/* 提示信息 */}
          <div className="mt-8 p-6 bg-accent/10 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-2">
              {t('diy.designTips', { defaultValue: 'Design Tips' })}
            </h3>
            <ul className="text-sm text-secondary space-y-1">
              <li>• {t('diy.tip1', { defaultValue: 'Choose materials that complement your product type' })}</li>
              <li>• {t('diy.tip2', { defaultValue: 'Consider the ergonomics and user experience' })}</li>
              <li>• {t('diy.tip3', { defaultValue: 'Ensure your logo placement is visible and aligned' })}</li>
              <li>• {t('diy.tip4', { defaultValue: 'Test different color combinations to find the perfect match' })}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
