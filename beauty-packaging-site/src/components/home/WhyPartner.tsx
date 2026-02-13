'use client'

import { useState } from 'react'

const accordionItems1 = [
  { title: 'Global Supply Network', desc: 'Jarsking operates a robust global supply network with our own factories and trusted suppliers, offering seamless, one-stop packaging solutions. This integrated approach ensures we can meet diverse client needs efficiently, delivering high quality packaging with reliable, smooth service to markets worldwide.', img: 'https://www.jarsking.com/wp-content/uploads/2024/11/Hot-Stamping-Process-1.png' },
  { title: 'R&D', desc: 'Jarsking offers expert consultation and advanced R&D, driving innovation in packaging design. Our team collaborates closely with clients, delivering custom solutions that merge technology and aesthetics. Benefit from our cutting-edge research, efficient processes, and industry-leading insights. Empowering brands through creativity.', img: 'https://www.jarsking.com/wp-content/uploads/2024/12/Jarsking-designers.webp' },
  { title: 'Custom Design Expertise', desc: 'At Jarsking, our design expertise is unmatched, blending artistic flair with technical precision to create packaging solutions that captivate and perform. Our original approach transforms ideas into visually stunning, market-leading designs that elevate brand presence and consistently deliver exceptional functionality.', img: 'https://www.jarsking.com/wp-content/uploads/2024/11/Jarsking-designer-scaled.jpg' },
]

const accordionItems2 = [
  { title: 'Manufacturing Excellence', desc: "Jarsking's production capabilities ensure high-volume output with the ability to manufacture up to 15 million glassware bottles per month. Our expansive selection of molds allows us to create a wide range of designs and custom solutions, ensuring consistent quality and fast delivery for large scale orders.", img: 'https://www.jarsking.com/wp-content/uploads/2023/07/Cosmetic-Packaging-Factory-06.jpg' },
  { title: 'Strict Quality Control', desc: 'Jarsking maintains industry-leading quality standards through comprehensive inspections and international certifications, including ISO9000, BSCI, ROHS, CE, MSDS, LFGB, and REACH. Our quality control process ensures every packaging solution meets stringent compliance requirements and premium quality benchmarks.', img: 'https://www.jarsking.com/wp-content/uploads/2024/11/100-grid-test-scaled.jpg' },
  { title: 'Fast Turnaround Times', desc: 'With our headquarters in China and additional offices in the Us and Dubai, Jarsking offers fast turnaround times and localized support. Our global presence enables us to efficiently manage production and logistics, ensuring timely delivery and seamless communication for clients across different regions.', img: 'https://www.jarsking.com/wp-content/uploads/2024/12/packing.png' },
]

function ImageAccordion({ items }: { items: typeof accordionItems1 }) {
  const [active, setActive] = useState(0)
  return (
    <div className="flex h-[350px] rounded-lg overflow-hidden mb-6">
      {items.map((item, i) => (
        <div
          key={i}
          className={`relative transition-all duration-500 cursor-pointer overflow-hidden ${active === i ? 'flex-[3]' : 'flex-1'}`}
          onMouseEnter={() => setActive(i)}
          style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors" />
          <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-opacity duration-300 ${active === i ? 'opacity-100' : 'opacity-70'}`}>
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            {active === i && <p className="text-sm leading-relaxed line-clamp-3">{item.desc}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function WhyPartner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">
            Why Partner with Jarsking for Your Packaging Projects
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Jarsking offers a diverse, hybrid solution for businesses of all sizes. with global reach, innovative design, and efficient manufacturing, we provide custom packaging tailored to your unique needs—fast, reliable, and with consistent quality.
          </p>
        </div>
        <ImageAccordion items={accordionItems1} />
        <ImageAccordion items={accordionItems2} />
      </div>
    </section>
  )
}
