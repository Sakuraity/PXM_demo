import Link from 'next/link'

const materials = [
  {
    title: 'PET (Polyethylene Terephthalate)',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/12/bottle-of-shampoo.jpg',
    alt: 'bottle of shampoo',
  },
  {
    title: 'HDPE (High-Density Polyethylene)',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/09/HDPE-squeeze-bottles.webp',
    alt: 'HDPE squeeze bottles',
  },
  {
    title: 'PP (Polypropylene)',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/08/recyclable-PET-plastic-bottles-for-personal-care.webp',
    alt: 'recyclable PET plastic bottles for personal care',
  },
  {
    title: 'PCR (Post-Consumer Recycled)',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/09/PCR-eco-friendly-packaging.jpg',
    alt: 'PCR eco-friendly packaging',
  },
  {
    title: 'Glass',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/04/mens-skincare-packaging.webp',
    alt: "men's skincare packaging",
  },
]

export default function MaterialsSection() {
  return (
    <section className="w-full bg-[#f9f9f9] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-4">
          Body Lotion Bottles by Materials
        </h2>
        <div className="text-center mb-12">
          <Link
            href="/contact-jarsking/"
            className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
          >
            Customization Starts from Here
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={material.image}
                  alt={material.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="font-montserrat text-xl md:text-2xl font-medium leading-[1.2] text-[#1E1E1E]">
                  {material.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
