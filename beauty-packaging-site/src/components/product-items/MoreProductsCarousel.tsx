'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProductItem {
  title: string
  href: string
  image: string
  alt: string
}

interface MoreProductsCarouselProps {
  products: ProductItem[]
}

export default function MoreProductsCarousel({ products }: MoreProductsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll)
      return () => el.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector('.product-card')?.clientWidth || 300
    el.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-8 bg-white px-[8%]">
      <div>
        <h2 className="text-[28px] md:text-[45px] lg:text-[65px] font-semibold text-[#7C7C7C] mb-10 leading-[1.2]">
          More Products
        </h2>

        <div className="relative">
          {/* Navigation Arrows */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 text-[#1E1E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Next"
            >
              <svg className="w-5 h-5 text-[#1E1E1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <Link
                key={index}
                href={product.href}
                className="product-card flex-shrink-0 w-[calc(25%-18px)] min-w-[260px] group"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <h4 className="text-base font-medium text-[#1E1E1E] group-hover:text-[#61CE70] transition-colors line-clamp-2 font-montserrat">
                  {product.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
