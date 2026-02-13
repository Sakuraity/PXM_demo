'use client'

import { useState } from 'react'
import { ChevronRight, ChevronUp } from 'lucide-react'

const toggleItems = [
  { title: 'Global Reach, Local Expertise', content: 'At Jarsking, we combine international presence with deep industry expertise to serve businesses worldwide. Our headquarter in Guangzhou, along with our factories in South China, ensure efficient manufacturing and quality control. With branches in Dubai and Los Angeles, we provide seamless support across different markets, offering customized solutions tailored to regional needs. This global network allows us to deliver premium packaging with local insights, ensuring top-tier service, fast communication, and a smooth supply chain for our clients worldwide.' },
  { title: 'Superior Craftsmanship', content: 'We use high-quality glass, plastic, and sustainable materials to create durable, visually appealing packaging. Our design and engineering team blends innovation with functionality, ensuring standout solutions. Every detail is crafted with precision, and our strict quality control guarantees consistency and compliance with international standards.' },
  { title: 'Our Strengths at a Glance', content: 'Free 3D Design in 1 HOUR, see the packaging demo as long as you have a simple idea. 6+ Automatic Production Lines. 10+ Owned Factories. 20+ Years of Professional Experience. 40+ Tons of Glass Bottles Produced Daily. 15,000,000 Bottles Every Month, engineering both popular and unique packaging designs to meet diverse brand needs.' },
  { title: 'Why Choose Jarsking?', content: 'End-to-End Service: From concept to delivery, we handle every step of the process. Dedicated After-Sales Support: Ensuring satisfaction after your products are delivered. Tailored Packaging Solutions: Specializing in custom perfume, skincare, and personal care packaging. Design Expertise: Collaborating with brands to create innovative, eye-catching packaging. A Diverse & Hybrid Solution Trusted by 50,000+ Brands.' },
]

export default function UltimatePartner() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h6 className="text-sm font-bold text-[#c8a97e] mb-4 tracking-wider">JARSKING</h6>
            <img
              src="https://www.jarsking.com/wp-content/uploads/2025/01/perfume-bottle-manufacturer.jpg"
              alt="perfume bottle manufacturer"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">
              Your Ultimate Packaging Partner
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Jarsking is your reliable manufacturer for custom luxury cosmetic packaging, high-end perfume bottles, and premium pharmaceutical containers. We offer a seamless, end-to-end solution—from packaging design and prototyping to mass production and delivery—helping you bring your vision to life effortlessly.
            </p>

            <div className="space-y-0 border-t border-gray-200">
              {toggleItems.map((item, i) => (
                <div key={i} className="border-b border-gray-200">
                  <button
                    className="w-full flex items-center justify-between py-4 text-left font-semibold text-[#1a1a2e] hover:text-[#c8a97e] transition-colors"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span>{item.title}</span>
                    {openIndex === i ? <ChevronUp className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                  {openIndex === i && (
                    <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-6 font-bold text-[#1a1a2e]">
              At Jarsking, we transform packaging into a powerful marketing tool to elevate your brand. Let&apos;s turn your vision into an extraordinary reality.
            </p>
            <div className="mt-4 text-center">
              <a
                href="/contact-jarsking"
                className="inline-block px-6 py-3 bg-[#c8a97e] text-white rounded hover:bg-[#b89a6f] transition-colors text-sm font-medium"
              >
                Discover from Design Capabilities &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
