'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Recycle, Droplets, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Breadcrumb from '@/components/layout/Breadcrumb'

export default function SustainabilityPage() {
  const { t } = useTranslation()

  const initiatives = [
    { icon: Recycle, titleKey: 'sustainability.initiatives.recyclable.title', descKey: 'sustainability.initiatives.recyclable.description' },
    { icon: Droplets, titleKey: 'sustainability.initiatives.water.title', descKey: 'sustainability.initiatives.water.description' },
    { icon: Sun, titleKey: 'sustainability.initiatives.energy.title', descKey: 'sustainability.initiatives.energy.description' },
    { icon: Leaf, titleKey: 'sustainability.initiatives.ecoPackaging.title', descKey: 'sustainability.initiatives.ecoPackaging.description' },
  ]

  return (
    <div className="min-h-screen">
      <Breadcrumb items={[{ label: t('sustainability.breadcrumb') }]} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full text-accent font-medium text-sm mb-6">
                <Leaf className="w-4 h-4 mr-2" />
                {t('sustainability.hero.badge')}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                {t('sustainability.hero.title')}
                <span className="text-accent">{t('sustainability.hero.titleHighlight')}</span>
              </h1>
              <p className="text-lg text-secondary leading-relaxed mb-8">
                {t('sustainability.hero.description')}
              </p>
              <Link href="/collections/refillable-cosmetics-packaging" className="btn-primary inline-flex items-center">
                {t('sustainability.hero.button')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-green-200 rounded-2xl p-8">
                <Image
                  src="/images/products/refillable-packaging-1024x768.webp"
                  alt={t('sustainability.hero.imageAlt')}
                  width={500}
                  height={500}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-accent text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">30%</p>
              <p className="text-sm opacity-90">{t('sustainability.stats.carbonReduction')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50%</p>
              <p className="text-sm opacity-90">{t('sustainability.stats.recycledMaterials')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">{t('sustainability.stats.wasteToLandfillValue')}</p>
              <p className="text-sm opacity-90">{t('sustainability.stats.wasteToLandfill')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-sm opacity-90">{t('sustainability.stats.renewableEnergy')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              {t('sustainability.initiatives.title')}
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              {t('sustainability.initiatives.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{t(item.titleKey)}</h3>
                <p className="text-sm text-secondary">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refillable Collection */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                {t('sustainability.refillable.title')}
              </h2>
              <p className="text-secondary leading-relaxed mb-6">
                {t('sustainability.refillable.description')}
              </p>
              <ul className="space-y-3 text-secondary mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  {t('sustainability.refillable.features.modular')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  {t('sustainability.refillable.features.premium')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  {t('sustainability.refillable.features.compatible')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  {t('sustainability.refillable.features.reduced')}
                </li>
              </ul>
              <Link href="/collections/refillable-cosmetics-packaging" className="btn-primary inline-flex items-center">
                {t('sustainability.refillable.button')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/images/products/refillable-packaging-1024x768.webp"
                  alt={t('sustainability.refillable.imageAlt')}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            {t('sustainability.cta.title')}
          </h2>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            {t('sustainability.cta.description')}
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            {t('sustainability.cta.button')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
