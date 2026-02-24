'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react'

export default function ContactClient() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-stone-50 border-b border-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            {t('contact.title')}
          </h1>
          <p className="text-stone-500 text-lg">{t('contact.subtitle')}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="text-2xl font-bold text-stone-900 mb-2">
                Luxe<span className="text-[#c9a96e]">Pack</span>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed">
                {t('brand.tagline')}
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, text: 'hello@luxepack.com' },
                { icon: Phone, text: '+86 755 1234 5678' },
                { icon: MapPin, text: 'Guangzhou, Guangdong, China' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-stone-600">
                  <div className="w-8 h-8 rounded-lg bg-[#c9a96e]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#c9a96e]" />
                  </div>
                  {text}
                </div>
              ))}
            </div>

            <div className="bg-stone-50 rounded-2xl p-6">
              <h3 className="font-semibold text-stone-900 mb-3 text-sm">Response Time</h3>
              <ul className="space-y-2 text-sm text-stone-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Quote requests: within 24h
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                  Sample requests: 2–3 business days
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                  Custom orders: 5–7 business days
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-xl font-bold text-stone-900 mb-2">Inquiry Sent!</h2>
                <p className="text-stone-500">{t('contact.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">{t('contact.company')}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#c9a96e] text-sm transition-colors"
                    />
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

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">{t('contact.product')}</label>
                  <input
                    type="text"
                    placeholder="e.g. Glass face cream jar 50ml"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-[#c9a96e] text-sm transition-colors"
                  />
                </div>

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
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors"
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
