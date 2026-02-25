'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Send, CheckCircle, Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'

const officeKeys = ['gz', 'sz', 'hz'] as const

export default function ContactClient() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Page Header */}
      <div className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-stone-300 text-lg max-w-xl mx-auto">{t('contact.subtitle')}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-8">

            {/* Brand */}
            <div>
              <div className="text-2xl font-bold text-stone-900 mb-2">
                Luxe<span className="text-[#c9a96e]">Pack</span>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed">{t('brand.tagline')}</p>
            </div>

            {/* Response Time */}
            <div className="bg-stone-50 rounded-2xl p-5 space-y-3">
              <h3 className="font-semibold text-stone-900 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c9a96e]" />
                {t('contact.responseTime')}
              </h3>
              <ul className="space-y-2 text-sm text-stone-500">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                  {t('contact.quote24h')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c9a96e] flex-shrink-0" />
                  {t('contact.sample')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-stone-300 flex-shrink-0" />
                  {t('contact.custom')}
                </li>
              </ul>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-3 text-sm text-stone-600">
              <div className="w-8 h-8 rounded-lg bg-[#c9a96e]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-[#c9a96e]" />
              </div>
              <div>
                <div className="font-medium text-stone-800 mb-0.5">{t('contact.workingHours')}</div>
                <div>{t('contact.hours')}</div>
              </div>
            </div>

            {/* WeChat */}
            <div className="flex items-start gap-3 text-sm text-stone-600">
              <div className="w-8 h-8 rounded-lg bg-[#c9a96e]/10 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 text-[#c9a96e]" />
              </div>
              <div>
                <div className="font-medium text-stone-800 mb-2">{t('contact.wechat')}</div>
                <div className="w-20 h-20 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center">
                  <span className="text-xs text-stone-400">QR Code</span>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div>
              <h3 className="font-semibold text-stone-900 text-sm mb-4">{t('contact.offices.title')}</h3>
              <div className="space-y-4">
                {officeKeys.map((key) => (
                  <div key={key} className="bg-stone-50 rounded-xl p-4 space-y-2">
                    <div className="font-semibold text-stone-800 text-sm">
                      {t(`contact.offices.${key}.city`)}
                    </div>
                    <div className="flex items-start gap-2 text-xs text-stone-500">
                      <MapPin className="w-3.5 h-3.5 text-[#c9a96e] flex-shrink-0 mt-0.5" />
                      <span>{t(`contact.offices.${key}.address`)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      <Phone className="w-3.5 h-3.5 text-[#c9a96e] flex-shrink-0" />
                      <span>{t(`contact.offices.${key}.tel`)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      <Mail className="w-3.5 h-3.5 text-[#c9a96e] flex-shrink-0" />
                      <span>{t(`contact.offices.${key}.email`)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mb-2">{t('contact.success')}</h2>
                <p className="text-stone-500 mt-1">{t('contact.successSub')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">{t('contact.name')}</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#c9a96e] text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">{t('contact.email')}</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#c9a96e] text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Phone + Company */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">{t('contact.phone')}</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#c9a96e] text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">{t('contact.company')}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#c9a96e] text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Category + Quantity */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">{t('contact.category')}</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#c9a96e] text-sm transition-colors bg-white"
                    >
                      <option value="">{t('contact.categoryPlaceholder')}</option>
                      {(['skincare', 'makeup', 'fragrance', 'haircare', 'other'] as const).map((cat) => (
                        <option key={cat} value={cat}>{t(`contact.categories.${cat}`)}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">{t('contact.quantity')}</label>
                    <input
                      type="text"
                      placeholder="e.g. 5,000 units"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#c9a96e] text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Product */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">{t('contact.product')}</label>
                  <input
                    type="text"
                    placeholder="e.g. Glass face cream jar 50ml"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#c9a96e] text-sm transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">{t('contact.message')}</label>
                  <textarea
                    rows={5}
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#c9a96e] text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-stone-900 text-white font-semibold rounded-xl hover:bg-stone-800 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {t('contact.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
