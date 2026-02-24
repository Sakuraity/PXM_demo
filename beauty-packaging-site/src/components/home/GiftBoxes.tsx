"use client"

import { useTranslation } from 'react-i18next'

export default function GiftBoxes() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://www.jarsking.com/wp-content/uploads/elementor/thumbs/gift-box-rf63jdhejsd1autywzjl0o7jqaoy6rikfonvjqq0i8.webp"
              alt="gift box"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-6">
              {t('home.giftBoxes.title')}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t('home.giftBoxes.description')}
            </p>
            <div className="text-right">
              <a
                href="/contact-jarsking"
                className="inline-block px-6 py-3 bg-[#c8a97e] text-white rounded hover:bg-[#b89a6f] transition-colors text-sm font-medium"
              >
                {t('home.giftBoxes.button')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
