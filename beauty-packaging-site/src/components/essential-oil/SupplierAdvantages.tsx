import Link from 'next/link'

const advantages = [
  {
    title: 'Wide selection of quality materials',
    description:
      'In the realm of essential oil packaging, material choice is paramount to prevent reactions between the packaging and the oils. Glass is our top recommendation due to its inert nature. However, we also offer high-quality plastic alternatives for specific needs, ensuring your essential oils remain pure and potent.',
    image: 'https://www.jarsking.com/wp-content/uploads/2023/05/30ml-Essential-Oil-Bottle.jpg',
    alt: '30ml Essential Oil Bottle',
    buttonText: 'Tell Us Your Need',
  },
  {
    title: 'Various Options of Caps and Pumps',
    description:
      'In our bulk essential oil bottle offerings, we understand that selecting the right cap is just as important as choosing the right bottle. The cap you choose can make a big difference in the overall functionality and user experience of the product. That\'s why we provide a wide range of cap options to suit various needs.',
    image: 'https://www.jarsking.com/wp-content/uploads/2023/05/40.jpg',
    alt: 'Accessories collection',
    buttonText: 'Customize Your Caps Now!',
  },
  {
    title: 'Precision in Manufacturing',
    description:
      'Our glass bottles are known for their superior chemical stability, high pressure resistance, and excellent sealing properties, ensuring your essential oils remain protected and unaltered. To guarantee the highest quality, we employ rigorous testing at every stage of production.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/essential-oil-bottle-caps-720x1024.jpg',
    alt: 'essential oil bottle caps',
    buttonText: 'Get OEM Solutions Now!',
  },
  {
    title: 'Perfect Harmony: Style Meets Protection',
    description:
      '\u2064Our essential oil bottles are meticulously designed to protect the sensitive nature of essential oils, which can degrade when exposed to light, oxygen, or temperature fluctuations. To ensure both protection and visual appeal, we offer a range of bottle designs that combine functionality with aesthetics.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/essential-oil-bottle-design-e1730883497389.jpg',
    alt: 'essential oil bottle design',
    buttonText: 'Unlock Perfect Solutions Now!',
  },
]

export default function SupplierAdvantages() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-14">
          Superior Solutions by Expert Essential Oil Bottles Suppliers
        </h2>

        <div className="space-y-16">
          {advantages.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-10 md:gap-16`}
            >
              <div className="flex-1">
                <h3 className="font-montserrat text-2xl md:text-[28px] font-normal leading-[1.4] text-[#1E1E1E] mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed mb-6">
                  {item.description}
                </p>
                <Link
                  href="/contact-jarsking/"
                  className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
                >
                  {item.buttonText}
                </Link>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full max-w-[450px] h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
