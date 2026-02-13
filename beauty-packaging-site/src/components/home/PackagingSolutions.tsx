const categories = [
  { name: 'Personal Care', href: '/personal-care-packaging', img: 'https://www.jarsking.com/wp-content/uploads/2025/07/sustainable-PET-packaging-for-hair-oil.webp', desc: 'Bottles, tubes, and containers for hygiene, grooming, and body care products.' },
  { name: 'Cosmetics', href: '/all-applications/skincare-packaging', img: 'https://www.jarsking.com/wp-content/uploads/2025/02/custom-cosmetic-containers.webp', desc: 'Jars, pumps, and compacts for skincare, creams, and treatment solutions.' },
  { name: 'Makeup', href: '/all-applications/makeup-packaging', img: 'https://www.jarsking.com/wp-content/uploads/2025/03/Private-label-lip-gloss-packaging.webp', desc: 'Elegant tubes, palettes, and compact cases for color cosmetics and applicators.' },
  { name: 'Perfume', href: '/perfume-packaging', img: 'https://www.jarsking.com/wp-content/uploads/2025/08/10ml-50ml-100ml-perfume-bottle-packaging.webp', desc: 'Delicate bottles, sprayers, and vessels for liquid fragrances and scents.' },
  { name: 'Pharmaceutical', href: '/cannabis-packaging', img: 'https://www.jarsking.com/wp-content/uploads/2024/11/Luxury-Cannabis-Packaging.jpg', desc: 'Safety-sealed bottles and precise containers for medical treatment products.' },
  { name: 'Essential Oil', href: '/all-applications/essential-oil-bottles', img: 'https://www.jarsking.com/wp-content/uploads/2025/09/Essential-oil-bottle-packaging.webp', desc: 'Small dropper bottles, vials, and sealed containers for concentrated botanical extracts.' },
]

export default function PackagingSolutions() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">
            Packaging Solutions for Beauty, Care &amp; Pharmacy
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Custom Packaging Manufacturer Specializing in Sustainable Design and One-Stop Solutions for Diverse Industry Needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {categories.map((cat) => (
            <a key={cat.name} href={cat.href} className="group block">
              <div className="overflow-hidden rounded-lg mb-3">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a2e] mb-1">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
