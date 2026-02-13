import Link from 'next/link'

const propositions = [
  {
    title: 'First Impressions Drive Purchase Decisions',
    description:
      'Transform standard packaging into distinctive brand assets through screen printing, hot foil stamping, embossing, and custom labeling. Pantone color-matching ensures brand consistency across entire product lines and packaging formats. Multiple decoration techniques can combine on single containers to create unique brand expressions.',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/10/skincare-bottle-poster.webp',
    alt: '',
    buttonText: 'DESIGN WITH US ⟶',
    buttonHref: '/contact-jarsking/',
    reverse: false,
  },
  {
    title: 'Protect Product Integrity',
    description:
      'Active ingredients like retinol, vitamin C, and peptides lose efficacy when exposed to air, light, and contaminants. Airless pump technology and UV-protective glass containers preserve formulation potency from production through final application. Our packaging engineering ensures your premium ingredients deliver promised results to every customer.',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/04/airless-bottle.webp',
    alt: 'airless bottle',
    buttonText: 'COUNSULT TO US ⟶',
    buttonHref: '/contact-jarsking/',
    reverse: true,
  },
  {
    title: 'Sustainability Meets Aesthetics',
    description:
      'Modern consumers prioritize eco-conscious brands, with more and more beauty shoppers considering ingredient transparency and packaging sustainability in purchase decisions. Recyclable glass, refillable systems, and PCR plastics demonstrate environmental commitment without compromising luxury positioning or shelf appeal.',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/10/replaceable-jar.webp',
    alt: 'replaceable jar',
    buttonText: 'GO GREEN ⟶',
    buttonHref: '/contact-jarsking/',
    reverse: false,
  },
]

export default function ValuePropositions() {
  return (
    <section className="w-full">
      {propositions.map((item, index) => (
        <div
          key={index}
          className={`w-full py-16 md:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-[#f9f9f9]'}`}
        >
          <div
            className={`max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col ${
              item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            } items-center gap-10 md:gap-16`}
          >
            {/* Text */}
            <div className="flex-1">
              <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] mb-6">
                {item.title}
              </h2>
              <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed mb-8">
                {item.description}
              </p>
              <Link
                href={item.buttonHref}
                className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
              >
                {item.buttonText}
              </Link>
            </div>
            {/* Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full max-w-[500px] h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
