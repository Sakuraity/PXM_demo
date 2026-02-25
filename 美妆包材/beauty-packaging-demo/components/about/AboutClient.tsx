'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Factory,
  Shield,
  Users,
  Award,
  Building2,
} from 'lucide-react'

const locationKeys = ['guangzhou', 'shenzhen', 'hangzhou'] as const

const capabilityKeys = ['monthly', 'moq', 'leadTime', 'quality'] as const

const teamKeys = ['rd', 'qc', 'service'] as const

const teamIcons = [Users, Shield, Phone]

export default function AboutClient() {
  const { t } = useTranslation()

  const stats = [
    { value: t('about.stats.founded'), label: t('about.stats.foundedLabel') },
    { value: t('about.stats.skus'), label: t('about.stats.skusLabel') },
    { value: t('about.stats.brands'), label: t('about.stats.brandsLabel') },
    { value: t('about.stats.countries'), label: t('about.stats.countriesLabel') },
    { value: t('about.stats.employees'), label: t('about.stats.employeesLabel') },
    { value: t('about.stats.area'), label: t('about.stats.areaLabel') },
  ]

  const certifications = t('about.certifications.items', { returnObjects: true }) as string[]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 70% 30%, #c9a96e 0%, transparent 50%), radial-gradient(circle at 20% 80%, #c9a96e 0%, transparent 40%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9a96e]/20 text-[#c9a96e] text-xs font-semibold tracking-widest uppercase mb-6">
              <Award className="w-3.5 h-3.5" />
              {t('about.story.badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('about.story.title')}
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed">{t('about.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#c9a96e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-6 divide-x divide-[#b8924f]">
            {stats.map((stat) => (
              <div key={stat.label} className="py-6 px-4 text-center">
                <div className="text-2xl font-bold text-stone-900">{stat.value}</div>
                <div className="text-xs text-stone-800/70 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
                {t('about.story.title')}
              </h2>
              <p className="text-stone-600 leading-relaxed">{t('about.story.p1')}</p>
              <p className="text-stone-600 leading-relaxed">{t('about.story.p2')}</p>
              <p className="text-stone-600 leading-relaxed">{t('about.story.p3')}</p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-white text-sm font-semibold hover:bg-stone-700 transition-colors"
                >
                  {t('about.cta.sample')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Factory image placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-stone-100 overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-100" />
                <Factory className="w-20 h-20 text-stone-300 relative z-10" />
                <img
                  src="/about/factory-exterior.jpg"
                  alt="LuxePack Factory"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-2xl bg-[#c9a96e] flex flex-col items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-stone-900">15+</span>
                <span className="text-xs text-stone-800/70 text-center leading-tight mt-0.5">
                  {t('about.stats.foundedLabel')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Locations */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c9a96e] uppercase tracking-widest mb-3">
              <Factory className="w-3.5 h-3.5" />
              {t('about.factory.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
              {t('about.factory.title')}
            </h2>
            <p className="text-stone-500 text-lg">{t('about.factory.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locationKeys.map((loc) => {
              const tags = t(`about.factory.locations.${loc}.tags`, { returnObjects: true }) as string[]
              return (
                <div key={loc} className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                  {/* Factory image placeholder */}
                  <div className="h-48 bg-stone-100 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-100" />
                    <Building2 className="w-14 h-14 text-stone-300 relative z-10" />
                    <img
                      src={`/about/factory-${loc}.jpg`}
                      alt={t(`about.factory.locations.${loc}.name`)}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-stone-900 text-lg mb-2">
                      {t(`about.factory.locations.${loc}.name`)}
                    </h3>
                    <div className="flex items-start gap-2 text-sm text-stone-500 mb-3">
                      <MapPin className="w-4 h-4 text-[#c9a96e] flex-shrink-0 mt-0.5" />
                      <span>{t(`about.factory.locations.${loc}.address`)}</span>
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed mb-4">
                      {t(`about.factory.locations.${loc}.desc`)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-[#c9a96e]/10 text-[#c9a96e] font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
              {t('about.capabilities.title')}
            </h2>
            <p className="text-stone-500 text-lg">{t('about.capabilities.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilityKeys.map((key) => (
              <div key={key} className="text-center py-10 px-6 rounded-2xl bg-stone-50 border border-stone-100">
                <div className="text-3xl font-bold text-stone-900 mb-2">
                  {t(`about.capabilities.items.${key}.value`)}
                </div>
                <div className="text-sm text-stone-500">
                  {t(`about.capabilities.items.${key}.label`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t('about.certifications.title')}</h2>
            <p className="text-stone-400 text-lg">{t('about.certifications.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="flex flex-col items-center text-center p-4 rounded-xl bg-stone-800 border border-stone-700">
                <Shield className="w-6 h-6 text-[#c9a96e] mb-2" />
                <span className="text-xs text-stone-300 leading-snug">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">{t('about.team.title')}</h2>
            <p className="text-stone-500 text-lg">{t('about.team.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamKeys.map((key, i) => {
              const Icon = teamIcons[i]
              return (
                <div key={key} className="text-center p-8 rounded-2xl border border-stone-100 bg-stone-50 hover:border-[#c9a96e]/30 hover:bg-[#c9a96e]/5 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-[#c9a96e]/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-[#c9a96e]" />
                  </div>
                  <div className="text-3xl font-bold text-stone-900 mb-1">
                    {t(`about.team.items.${key}.count`)}
                  </div>
                  <h3 className="font-semibold text-stone-900 mb-2">
                    {t(`about.team.items.${key}.name`)}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {t(`about.team.items.${key}.desc`)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-stone-50 border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">{t('about.cta.title')}</h2>
          <p className="text-stone-500 text-lg mb-8 max-w-2xl mx-auto">{t('about.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-stone-900 text-white font-semibold hover:bg-stone-700 transition-colors"
            >
              {t('about.cta.visit')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-stone-200 text-stone-700 font-semibold hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
            >
              {t('about.cta.sample')}
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
