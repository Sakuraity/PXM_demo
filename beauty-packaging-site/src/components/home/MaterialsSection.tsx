const glassProducts = [
  { name: 'Cosmetic Set', img: 'https://www.jarsking.com/wp-content/uploads/2024/10/1-4.jpg', href: '/boxes-bags-and-supplies/custom-cosmetic-packaging/' },
  { name: 'Storage Jar', img: 'https://www.jarsking.com/wp-content/uploads/2024/12/cannabis-packaging-set.png', href: '/cannabis-packaging/cannabis-flower-jars/' },
  { name: 'Dropper Bottle', img: 'https://www.jarsking.com/wp-content/uploads/2025/09/glass-dropper-bottle.webp', href: '/all-applications/essential-oil-bottles/' },
  { name: 'Perfume Bottle', img: 'https://www.jarsking.com/wp-content/uploads/2025/07/100ml-glass-bottle-for-oud-perfume.webp', href: '/all-applications/perfume-bottles/' },
]

const plasticProducts = [
  { name: 'Shampoo Bottle', img: 'https://www.jarsking.com/wp-content/uploads/2025/07/refillable-serum-and-lotion-packaging.webp', href: '/all-applications/shampoo-bottles/' },
  { name: 'PCR Bottle', img: 'https://www.jarsking.com/wp-content/uploads/2025/09/PCR-eco-friendly-packaging.jpg', href: '/all-materials/pcr-cosmetic-packaging/' },
  { name: 'Airless Bottle', img: 'https://www.jarsking.com/wp-content/uploads/2024/10/square-airless-cosmetic-bottle-for-serum.webp', href: '/functions/airless-bottles/' },
  { name: 'Spray Bottle', img: 'https://www.jarsking.com/wp-content/uploads/2025/01/15ml-mist-spray-bottle.webp', href: '/all-applications/spray-bottles/' },
]

function MaterialRow({ title, description, products }: { title: string; description: string; products: typeof glassProducts }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      {products.map((p) => (
        <a key={p.name} href={p.href} className="group relative overflow-hidden rounded-lg aspect-square">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${p.img})` }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-4">
            <span className="text-white font-semibold text-sm">{p.name}</span>
          </div>
        </a>
      ))}
    </div>
  )
}

export default function MaterialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] text-center mb-12">
          Customize Your Packaging from Choosing Materials
        </h2>
        <MaterialRow
          title="Glass Bottles"
          description="offer eco-friendly, recyclable packaging for premium products, enhancing brand sustainability."
          products={glassProducts}
        />
        <MaterialRow
          title="Plastic Bottles"
          description="provide lightweight, durable, cost-effective solutions, ideal for diverse packaging needs."
          products={plasticProducts}
        />
      </div>
    </section>
  )
}
