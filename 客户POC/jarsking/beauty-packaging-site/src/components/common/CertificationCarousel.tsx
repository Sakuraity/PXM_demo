'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const certifications = [
  { name: 'ISO', src: '/wp-content/uploads/2025/07/iso.webp' },
  { name: 'BSCI', src: '/wp-content/uploads/2025/07/bsci.webp' },
  { name: 'REACH', src: '/wp-content/uploads/2025/07/reach.webp' },
  { name: 'RoHS', src: '/wp-content/uploads/2025/07/rohs.webp' },
  { name: 'CRF', src: '/wp-content/uploads/2025/07/crf.webp' },
  { name: 'MSDS', src: '/wp-content/uploads/2025/07/msds.webp' },
  { name: 'RAL', src: '/wp-content/uploads/2025/07/ral.webp' },
]

export default function CertificationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certifications.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % certifications.length
      items.push(certifications[index])
    }
    return items
  }

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length)
  }

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="relative">
          <div className="flex items-center justify-center space-x-8 overflow-hidden">
            {getVisibleItems().map((cert, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 transition-all duration-500"
              >
                <Image
                  src={cert.src}
                  alt={cert.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
