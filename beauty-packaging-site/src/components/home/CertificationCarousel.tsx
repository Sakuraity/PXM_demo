'use client'

import { useEffect, useState } from 'react'

const certifications = [
  { name: 'ISO', src: 'https://www.jarsking.com/wp-content/uploads/2025/07/iso.webp' },
  { name: 'BSCI', src: 'https://www.jarsking.com/wp-content/uploads/2025/07/bsci.webp' },
  { name: 'REACH', src: 'https://www.jarsking.com/wp-content/uploads/2025/07/reach.webp' },
  { name: 'RoHS', src: 'https://www.jarsking.com/wp-content/uploads/2025/07/rohs.webp' },
  { name: 'CRF', src: 'https://www.jarsking.com/wp-content/uploads/2025/07/crf.webp' },
  { name: 'MSDS', src: 'https://www.jarsking.com/wp-content/uploads/2025/07/msds.webp' },
  { name: 'RAL', src: 'https://www.jarsking.com/wp-content/uploads/2025/07/ral.webp' },
]

export default function CertificationCarousel() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => (prev + 1) % certifications.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  const allItems = [...certifications, ...certifications]

  return (
    <section className="py-8 bg-white border-b">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-center gap-8 overflow-hidden">
          {allItems.slice(offset, offset + 5).map((cert, i) => (
            <div key={`${cert.name}-${i}`} className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 transition-all duration-500">
              <img src={cert.src} alt={cert.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
