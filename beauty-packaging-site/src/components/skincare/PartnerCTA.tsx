import Link from 'next/link'

export default function PartnerCTA() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] mb-6">
          Partner With Packaging Experts
        </h2>
        <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed max-w-3xl mx-auto mb-8">
          Selecting the right packaging partner impacts brand perception, product integrity, and customer satisfaction. Jarsking&apos;s expertise spans material selection, decoration capabilities, and global logistics to support brands from startup to enterprise scale. Our consultation process examines your formulation requirements, target market, and brand positioning to recommend optimal packaging solutions.
        </p>
        <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed max-w-3xl mx-auto mb-10">
          From initial sampling through production and fulfillment, we provide end-to-end support that simplifies your supply chain. Request samples today to experience the quality difference that elevates successful skincare brands.
        </p>
        <Link
          href="/contact-jarsking/"
          className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium text-lg px-10 py-4 rounded transition-colors"
        >
          Start Your Project
        </Link>
      </div>
    </section>
  )
}
