import Link from 'next/link'

const crafts = [
  {
    title: 'Frosting',
    description: 'Frosting adds a smooth, matte finish to glass surfaces, creating a soft, elegant appearance while providing a subtle texture.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/frosting-design-e1730884894274.jpg',
    alt: 'frosting design',
  },
  {
    title: 'Silkscreen Printing',
    description: 'Silkscreen printing applies detailed logos or designs directly onto glass using ink, offering a precise and durable decoration method.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/essential-oil-bottle-silkscreen-printing-e1730884335100.jpg',
    alt: 'essential oil bottle silkscreen printing',
  },
  {
    title: 'Metallization',
    description: 'Metallization coats glass surfaces with a thin metallic layer, giving a shiny, reflective appearance that enhances luxury appeal.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/electroplating-bottle-e1730693054715.jpg',
    alt: 'electroplating bottle',
  },
  {
    title: 'Lacquering',
    description: 'Lacquering adds a colored or clear glossy coating to glass, providing a sleek, polished look while adding a layer of protection.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/color-coating-bottle-e1730703419252.jpg',
    alt: 'color coating bottle',
  },
  {
    title: 'Hot Stamping',
    description: 'Hot stamping uses heat and foil to imprint metallic or colored designs on glass, adding a high-end, embossed look.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/hot-stamping-logo-e1730704252612-1024x768.jpg',
    alt: 'hot stamping logo',
  },
  {
    title: 'Tinting',
    description: 'Tinting adds color to glass bottles, enhancing UV protection while offering a customizable aesthetic for branding.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/amber-essential-oil-bottle-e1730885367193.jpg',
    alt: 'amber essential oil bottle',
  },
]

export default function EssentialOilDesignCrafts() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-4">
          Customizing the Design Crafts for Essential Oil Bottles
        </h2>
        <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed text-center max-w-4xl mx-auto mb-12">
          We take pride in our diverse and proven processing technologies as a custom glass container manufacturer. From frosting and silkscreen to metallization, lacquering, hot stamping, and tinting. Take a look at our craftsmanship below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {crafts.map((craft, index) => (
            <div key={index} className="bg-[#f9f9f9] rounded-xl overflow-hidden">
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
            Custimize Your Collections Now!
          </Link>
        </div>
      </div>
    </section>
  )
}
