'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { Product } from '@/types'

interface Props {
  images: Product['images']
  lang: 'zh' | 'en'
}

export default function ImageGallery({ images, lang }: Props) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div>
      <div className="rounded-2xl overflow-hidden bg-stone-50 aspect-square mb-3">
        {images[activeImage] && (
          <img
            src={images[activeImage].url}
            alt={images[activeImage].alt[lang]}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={cn(
                'w-16 h-16 rounded-xl overflow-hidden border-2 transition-colors',
                i === activeImage ? 'border-[#c9a96e]' : 'border-stone-100 hover:border-stone-300'
              )}
            >
              <img src={img.url} alt={img.alt[lang]} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
