import Link from 'next/link'

const crafts = [
  {
    title: 'Frosting',
    description: 'Frosting adds a smooth, matte finish to glass surfaces, creating a soft, elegant appearance while providing a subtle texture.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/09/2-1-1024x1024.jpg',
    alt: '50g Cosmetic Glass Jar Face Cream Jar',
  },
  {
    title: 'Silkscreen Printing',
    description: 'Silkscreen printing applies detailed logos or designs directly onto glass using ink, offering a precise and durable decoration method.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/10/cj40000-1-1024x1024.jpg',
    alt: 'eye cream jar china',
  },
  {
    title: 'Metallization',
    description: 'Metallization coats glass surfaces with a thin metallic layer, giving a shiny, reflective appearance that enhances luxury appeal.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/10/球形瓶03_1确定-1024x1024.jpg',
    alt: 'glass cream jar',
  },
  {
    title: 'Lacquering',
    description: 'Lacquering adds a colored or clear glossy coating to glass, providing a sleek, polished look while adding a layer of protection.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/09/7-1024x1024.jpg',
    alt: '50g Cosmetic Glass Jar Face Cream Jar',
  },
  {
    title: 'Hot Stamping',
    description: 'Hot stamping uses heat and foil to imprint metallic or colored designs on glass, adding a high-end, embossed look.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/12/hot-stamping-cream-jar-1024x1024.webp',
    alt: 'hot stamping cream jar',
  },
  {
    title: 'Iridescence',
    description: 'Iridescence on glass creates a shimmering, rainbow-like effect, enhancing visual appeal with its vibrant, dynamic color shifts.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/12/iridescent-jar.webp',
    alt: 'iridescent jar',
  },
]

export default function DesignCrafts() {
  return (
    <section className="w-full bg-[#f9f9f9] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-14">
          Customizing the Cream Jar Design Crafts to Enhance your Brand Identity
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {crafts.map((craft, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-square overflow-hidden">
                <img
                  src={craft.image}
                  alt={craft.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat text-xl md:text-2xl font-normal leading-[1.4] text-[#1E1E1E] mb-2">
                  {craft.title}
                </h3>
                <p className="text-sm text-[#7A7A7A] font-poppins leading-relaxed">
                  {craft.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact-jarsking/"
            className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
          >
            Custimize Your Design Crafts Now!
          </Link>
        </div>
      </div>
    </section>
  )
}
