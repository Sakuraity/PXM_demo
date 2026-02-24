'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const testimonials = [
  { key: 'arna', avatar: 'https://www.jarsking.com/wp-content/uploads/2025/04/ava-4.jpg' },
  { key: 'herbert', avatar: 'https://www.jarsking.com/wp-content/uploads/2025/04/ava-1.jpg' },
  { key: 'benson', avatar: 'https://www.jarsking.com/wp-content/uploads/2023/06/Cosmetic-Packaging-Customers-08.jpg' },
  { key: 'jill', avatar: 'https://www.jarsking.com/wp-content/uploads/2025/01/Purchasing-Manager-of-a-USA-Hemp-Brand.jpg' },
  { key: 'ivy', avatar: 'https://www.jarsking.com/wp-content/uploads/2025/01/ivy-malikova.png' },
  { key: 'danielle', avatar: 'https://www.jarsking.com/wp-content/uploads/2023/06/Cosmetic-Packaging-Customers-12.jpg' },
  { key: 'josh', avatar: 'https://www.jarsking.com/wp-content/uploads/2023/06/Cosmetic-Packaging-Customers-14.jpg' },
  { key: 'kianna', avatar: 'https://www.jarsking.com/wp-content/uploads/2025/10/doctor.webp' },
]

export default function Testimonials() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const currentItem = testimonials[current]

  return (
    <section className="py-16 bg-[#f5f0eb]">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] text-center mb-10">
          {t('home.testimonials.title')}
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <img
                src={currentItem.avatar}
                alt={t(`home.testimonials.items.${currentItem.key}.name`)}
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4 italic">
                &ldquo;{t(`home.testimonials.items.${currentItem.key}.text`)}&rdquo;
              </p>
              <p className="font-bold text-[#1a1a2e]">{t(`home.testimonials.items.${currentItem.key}.name`)}</p>
              <p className="text-sm text-[#c8a97e]">{t(`home.testimonials.items.${currentItem.key}.title`)}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
