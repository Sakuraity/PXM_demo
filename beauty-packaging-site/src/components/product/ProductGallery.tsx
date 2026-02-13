'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProductGalleryProps {
  images: string[]
  title: string
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const displayImages = images.length > 0 ? images : ['/images/placeholder.png']
  
  return (
    <div className="space-y-4">
      {/* 主图 */}
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
        <Image
          src={displayImages[currentIndex]}
          alt={title}
          fill
          className="object-cover"
        />
        {displayImages.length > 1 && (
          <>
            <button
              onClick={() => setCurrentIndex(prev => prev === 0 ? displayImages.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentIndex(prev => prev === displayImages.length - 1 ? 0 : prev + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {displayImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-accent w-6' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 缩略图 */}
      {displayImages.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {displayImages.slice(0, 4).map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`aspect-square bg-gray-100 rounded-lg overflow-hidden relative transition-all ${
                index === currentIndex ? 'ring-2 ring-accent' : 'hover:ring-2 ring-accent/50'
              }`}
            >
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
