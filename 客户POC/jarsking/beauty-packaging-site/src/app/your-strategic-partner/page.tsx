'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Users, Globe, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Breadcrumb from '@/components/layout/Breadcrumb'

export default function AboutPage() {
  const { t } = useTranslation()

  const values = [
    { icon: Award, titleKey: 'strategicPartner.values.quality.title', descKey: 'strategicPartner.values.quality.description' },
    { icon: Users, titleKey: 'strategicPartner.values.customer.title', descKey: 'strategicPartner.values.customer.description' },
    { icon: Globe, titleKey: 'strategicPartner.values.global.title', descKey: 'strategicPartner.values.global.description' },
    { icon: Zap, titleKey: 'strategicPartner.values.innovation.title', descKey: 'strategicPartner.values.innovation.description' },
  ]

  return (
    <div className="min-h-screen">
      <Breadcrumb items={[{ label: t('strategicPartner.breadcrumb') }]} />

      {/* Hero Section */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {t('strategicPartner.hero.title')}
                <span className="text-gradient">{t('strategicPartner.hero.titleHighlight')}</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {t('strategicPartner.hero.description')}
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center">
                {t('strategicPartner.hero.button')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-brand-orange/20 rounded-2xl p-8">
                <Image
                  src="/images/products/Violet-Glass-Bottles-01.jpg.webp"
                  alt={t('strategicPartner.hero.imageAlt')}
                  width={500}
                  height={500}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-accent text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-sm opacity-90">{t('strategicPartner.stats.yearsExperience')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">1000+</p>
              <p className="text-sm opacity-90">{t('strategicPartner.stats.globalClients')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">5000+</p>
              <p className="text-sm opacity-90">{t('strategicPartner.stats.products')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-sm opacity-90">{t('strategicPartner.stats.countriesServed')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              {t('strategicPartner.values.title')}
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              {t('strategicPartner.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{t(value.titleKey)}</h3>
                <p className="text-sm text-secondary">{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capability */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                {t('strategicPartner.manufacturing.title')}
              </h2>
              <p className="text-secondary leading-relaxed mb-6">
                {t('strategicPartner.manufacturing.description')}
              </p>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  {t('strategicPartner.manufacturing.features.iso')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  {t('strategicPartner.manufacturing.features.cleanroom')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  {t('strategicPartner.manufacturing.features.automated')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  {t('strategicPartner.manufacturing.features.rd')}
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/images/products/personal-care-set-1024x768.webp"
                  alt={t('strategicPartner.manufacturing.imageAlt')}
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
            {t('strategicPartner.cta.title')}
          </h2>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            {t('strategicPartner.cta.description')}
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            {t('strategicPartner.cta.button')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
