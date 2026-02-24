'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Breadcrumb from '@/components/layout/Breadcrumb'

export default function SuccessStoriesPage() {
  const { t } = useTranslation()

  const stories = [
    { key: 'luxbeauty', image: '/images/products/skincare-collection-1024x768.webp' },
    { key: 'glowell', image: '/images/products/new-design-bottle-e1730775751520-1024x768.jpg' },
    { key: 'essence', image: '/images/products/essential-oil-bottle.webp' },
    { key: 'purecare', image: '/images/products/cream-jar-e1730775980312-1024x768.jpg' },
  ]

  const testimonials = [
    { key: 'sarah' },
    { key: 'michael' },
    { key: 'emma' },
  ]

  return (
    <div className="min-h-screen">
      <Breadcrumb items={[{ label: t('successStories.breadcrumb') }]} />

      {/* Hero Section */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('successStories.hero.title')} <span className="text-gradient">{t('successStories.hero.titleHighlight')}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('successStories.hero.description')}
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-16">
            {stories.map((story, index) => (
              <div
                key={story.key}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={story.image}
                      alt={t(`successStories.stories.${story.key}.client`)}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full mb-4">
                    {t(`successStories.stories.${story.key}.industry`)}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                    {t(`successStories.stories.${story.key}.client`)}
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-secondary uppercase tracking-wide mb-1">{t('successStories.labels.challenge')}</p>
                      <p className="text-primary">{t(`successStories.stories.${story.key}.challenge`)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary uppercase tracking-wide mb-1">{t('successStories.labels.solution')}</p>
                      <p className="text-primary">{t(`successStories.stories.${story.key}.solution`)}</p>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <p className="text-sm text-secondary uppercase tracking-wide mb-1">{t('successStories.labels.result')}</p>
                      <p className="text-primary font-medium">{t(`successStories.stories.${story.key}.result`)}</p>
                    </div>
                  </div>

                  <Link
                    href="/products"
                    className="inline-flex items-center text-accent hover:underline"
                  >
                    {t('successStories.labels.viewSimilar')}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              {t('successStories.testimonials.title')}
            </h2>
            <p className="text-secondary">
              {t('successStories.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div key={item.key} className="bg-white p-6 rounded-lg shadow-sm">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-secondary mb-4">{t(`successStories.testimonials.items.${item.key}.quote`)}</p>
                <div>
                  <p className="font-semibold text-primary">{t(`successStories.testimonials.items.${item.key}.author`)}</p>
                  <p className="text-sm text-secondary">{t(`successStories.testimonials.items.${item.key}.role`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            {t('successStories.cta.title')}
          </h2>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            {t('successStories.cta.description')}
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            {t('successStories.cta.button')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
