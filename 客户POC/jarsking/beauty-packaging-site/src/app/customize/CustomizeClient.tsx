'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Loader2, Star } from 'lucide-react'

interface Product3D {
  slug: string
  name: string
  thumbnail: string
  realiboxUrl: string
  featured?: boolean
}

interface ProductCard {
  slug: string
  name: string
  thumbnail: string
  realiboxUrl?: string
  featured?: boolean
}

const PRODUCTS_3D: Product3D[] = [
  {
    slug: 'pp-refillable-cosmetic-jar-with-replaceable-inner-cup',
    name: 'PP Refillable Cosmetic Jar',
    thumbnail: 'https://www.jarsking.com/wp-content/uploads/2026/02/refillable-skincare-jars-playful-pastel-design.webp',
    realiboxUrl: 'https://packvisual.realibox.com/app/mockup_share/projects/2475892491014897754',
    featured: true,
  },
  {
    slug: 'thick-base-glass-lotion-pump-bottle-for-luxury-skincare-brands',
    name: 'Thick-Base Glass Lotion Pump',
    thumbnail: 'https://www.jarsking.com/wp-content/uploads/2026/02/Cacao-Husk-color-cosmetic-packaging.webp',
    realiboxUrl: 'https://packvisual.realibox.com/app/mockup_share/projects/2475889068344344595',
    featured: true,
  },
  {
    slug: 'sustainable-refillable-airless-pump-face-cream-jar-for-baby-care-brand',
    name: 'Sustainable Refillable Airless Pump Jar',
    thumbnail: 'https://www.jarsking.com/wp-content/uploads/2025/10/sustainable-luxury-cosmetic-packaging-manufacturer.webp',
    realiboxUrl: 'https://packvisual.realibox.com/app/mockup_share/projects/2475887442468536410',
  },
  {
    slug: 'elegant-frosted-glass-cosmetic-packaging-set',
    name: 'Elegant Frosted Glass Cosmetic Set',
    thumbnail: '/images/products/elegant-glass-packaging-for-beauty-brands.webp',
    realiboxUrl: 'https://packvisual.realibox.com/app/mockup_share/projects/2475891856910581850',
  },
  {
    slug: 'custom-glass-airless-pump-jar-replaceable-inner-core',
    name: 'Custom Glass Airless Pump Jar',
    thumbnail: '/images/products/refillable-airless-skincare-jar-supplier-1024x1024.webp',
    realiboxUrl: 'https://packvisual.realibox.com/app/mockup_share/projects/2475892896219267091',
  },
]

export default function CustomizeClient() {
  const searchParams = useSearchParams()
  const initialSlug = searchParams.get('product')

  const defaultProduct = initialSlug
    ? PRODUCTS_3D.find(p => p.slug === initialSlug) ?? PRODUCTS_3D[0]
    : PRODUCTS_3D[0]

  const [selected, setSelected] = useState<Product3D>(defaultProduct)
  const [iframeKey, setIframeKey] = useState(0)
  const [iframeLoading, setIframeLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    setIframeLoading(true)
    setIframeKey(prev => prev + 1)
  }, [selected.slug])

  const handleSelect = (product: Product3D) => {
    if (product.slug === selected.slug) return
    setSelected(product)
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Page Header */}
      <div className="bg-[#15294C] py-12">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            3D Product Customizer
          </h1>
          <p className="text-[#B0B8C8] text-base max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Explore our packaging in interactive 3D. Select a product to configure colors, finishes, and more — then request a quote.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left: Product Selector */}
          <div className={`flex-shrink-0 transition-all duration-300 ${sidebarOpen ? 'lg:w-[300px]' : 'lg:w-[64px]'}`}>

            {sidebarOpen ? (
              /* ── Expanded panel ── */
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-[#15294C] uppercase tracking-wider" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Select Product
                  </h2>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-1.5 rounded-md text-gray-400 hover:text-[#15294C] hover:bg-gray-100 transition-colors"
                    title="Collapse panel"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  {PRODUCTS_3D.map(product => {
                    const isActive = selected.slug === product.slug
                    return (
                      <button
                        key={product.slug}
                        onClick={() => handleSelect(product)}
                        className={`w-full text-left rounded-lg border-2 transition-all duration-200 overflow-hidden flex items-center gap-3 p-3 ${
                          isActive
                            ? 'border-[#E3664B] bg-white shadow-md'
                            : 'border-transparent bg-white hover:border-[#E3664B]/40 hover:shadow-sm'
                        }`}
                      >
                        <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={product.thumbnail} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            {product.featured && (
                              <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-[#E3664B] bg-[#E3664B]/10 px-1.5 py-0.5 rounded-full">
                                <Star className="w-2.5 h-2.5" />
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-[13px] font-medium text-[#15294C] leading-tight line-clamp-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {product.name}
                          </p>
                          <p className="text-[11px] text-[#E3664B] mt-1 font-medium">3D Interactive</p>
                        </div>
                        {isActive && <div className="w-2 h-2 rounded-full bg-[#E3664B] flex-shrink-0" />}
                      </button>
                    )
                  })}
                </div>

                {/* CTA */}
                <div className="mt-6 space-y-3">
                  <Link href="/contact" className="btn-primary w-full flex items-center justify-center gap-2">
                    Request Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/products/${selected.slug}`}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-[#15294C] text-[#15294C] rounded-md text-sm font-medium hover:bg-[#15294C] hover:text-white transition-all duration-200"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    View Product Details
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ) : (
              /* ── Collapsed panel ── */
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-white border border-gray-200 text-gray-400 hover:text-[#15294C] hover:border-[#15294C] transition-colors shadow-sm mb-1"
                  title="Expand panel"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                {PRODUCTS_3D.map(product => {
                  const isActive = selected.slug === product.slug
                  return (
                    <button
                      key={product.slug}
                      onClick={() => handleSelect(product)}
                      title={product.name}
                      className={`w-10 h-10 rounded-md overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                        isActive ? 'border-[#E3664B] shadow-md' : 'border-transparent hover:border-[#E3664B]/50'
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={product.thumbnail} alt={product.name} className="w-full h-full object-cover" />
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Right: 3D Viewer */}
          <div className="flex-1 min-h-[600px] lg:min-h-[700px] bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 relative">
            {/* Loading overlay */}
            {iframeLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                <Loader2 className="w-10 h-10 text-[#E3664B] animate-spin mb-3" />
                <p className="text-sm text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Loading 3D viewer…
                </p>
              </div>
            )}

            {/* Product name bar */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/30 to-transparent px-6 py-4 pointer-events-none">
              <div className="flex items-center gap-2">
                {selected.featured && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white bg-[#E3664B] px-2 py-0.5 rounded-full">
                    <Star className="w-3 h-3" />
                    Featured
                  </span>
                )}
                <span className="text-white text-sm font-medium drop-shadow" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {selected.name}
                </span>
              </div>
            </div>

            <iframe
              key={iframeKey}
              src={selected.realiboxUrl}
              className="w-full h-full border-0"
              style={{ minHeight: '700px' }}
              allow="fullscreen"
              onLoad={() => setIframeLoading(false)}
              title={`3D Viewer — ${selected.name}`}
            />
          </div>
        </div>

        {/* Bottom hint */}
        <p className="text-center text-xs text-gray-400 mt-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Use the controls inside the viewer to rotate, zoom, and change colors or finishes. Powered by Realibox.
        </p>
      </div>
    </div>
  )
}
