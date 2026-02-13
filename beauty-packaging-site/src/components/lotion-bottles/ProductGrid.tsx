import Link from 'next/link'

const products = [
  {
    title: '150ml custom glass lotion pump bottle with gradient/frosted coating for luxury skincare brands',
    image: 'https://www.jarsking.com/wp-content/uploads/2026/01/glass-lotion-bottle-with-gradient-color-design.webp',
    alt: 'glass lotion bottle with gradient color design',
  },
  {
    title: 'Custom PET Shampoo & Shower Gel Bottles for Personal Care and Hotel Brands',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/12/hot-pink-plastic-lotion-bottle.webp',
    alt: 'hot pink plastic lotion bottle',
  },
  {
    title: 'Versatile Packaging Solutions by Jarsking for Personal Care & Pet Shampoo',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/10/custom-beauty-bottle-manufacturer.webp',
    alt: 'custom beauty bottle manufacturer',
  },
  {
    title: '30ml Refillable Glass Lotion Bottle with Airless Pump',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/09/eco-friendly-airless-pump-skincare-bottle.webp',
    alt: 'eco-friendly airless pump skincare bottle',
  },
  {
    title: 'Eco-Friendly PET Skincare Bottles with Bamboo Accessories',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/09/bamboo-cap-cosmetic-bottles-for-organic-brands.webp',
    alt: 'bamboo cap cosmetic bottles for organic brands',
  },
  {
    title: '300ml HDPE Shampoo Bottle Unique Emulsion Head Design',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/09/personal-care-product-packaging-eco-friendly.webp',
    alt: 'personal care product packaging eco-friendly',
  },
  {
    title: 'Custom PET Shower Gel Bottles 100ml - 700ml',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/08/shower-gel-bottle-packaging-with-safety-pump.webp',
    alt: 'shower gel bottle packaging with safety pump',
  },
  {
    title: 'HDPE Plastic Shampoo Bottles with Lotion Pump 300ml 500ml 700ml',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/08/Square-plastic-shampoo-container-500ml.webp',
    alt: 'Square plastic shampoo container 500ml',
  },
]

export default function LotionProductGrid() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-4">
          Wide Selection of Body Lotion Bottles
        </h2>
        <div className="text-center mb-10">
          <Link
            href="/contact-jarsking/"
            className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
          >
            CONTACT US for More Varieties
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-montserrat text-sm md:text-base font-normal leading-[1.5] text-[#1E1E1E] line-clamp-2">
                  {product.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
