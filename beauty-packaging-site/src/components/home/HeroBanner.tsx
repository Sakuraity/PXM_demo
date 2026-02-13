'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroBanner() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] bg-[#1a1a2e] text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://www.jarsking.com/wp-content/uploads/2023/02/Group-95.jpg')` }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-16 lg:py-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Pack the Ordinary into Extraordinary
            </h1>
            <p className="text-base lg:text-lg text-gray-200 leading-relaxed">
              Jarsking Packaging is a premier full-service designer and manufacturer of packaging solutions, catering to both small and large production needs. We deliver innovative, high-quality, and cost-effective packaging with precision and consistency.
              <br />Your Reliable Packaging Partner.
            </p>
          </div>

          <Link href="/all-applications" className="block group">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="relative h-[250px]">
                <img
                  src="https://www.jarsking.com/wp-content/uploads/2024/12/frost-cosmetic-bottle-set.webp"
                  alt="frost cosmetic bottle set"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h5 className="text-xl font-bold text-[#1a1a2e] mb-2">Turnkey Services for Your Brand</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  From design to delivery, tailored to elevate your brand. Whether you&apos;re in skincare, cosmetic, makeup, personal care, perfume, and pharmaceutical, we provide high-quality, custom packaging that meets your unique needs. Partner with us for seamless, end-to-end packaging services.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
