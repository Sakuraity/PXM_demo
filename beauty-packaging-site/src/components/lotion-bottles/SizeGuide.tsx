import Link from 'next/link'

const sizes = [
  {
    title: 'Travel/Sample Size (Under 100ml / 3.4 oz)',
    description:
      'This category includes the smallest available sizes, designed for portability, trial, and compliance with travel regulations. Typical capacities range from 10ml to 100ml (0.34 oz to 3.4 oz). The 100ml threshold is particularly important as it aligns with TSA and international airline carry-on liquid restrictions.',
    images: [
      {
        src: 'https://www.jarsking.com/wp-content/uploads/2025/09/plastic-HDPE-bottle-e1758003987365.webp',
        alt: 'plastic HDPE bottle',
      },
      {
        src: 'https://www.jarsking.com/wp-content/uploads/2025/09/Custom-HDPE-dome-bottle.webp',
        alt: 'Custom HDPE dome bottle',
      },
    ],
  },
  {
    title: 'Standard/Personal Size (150ml - 300ml / 5 oz - 10 oz)',
    description:
      'This is the most common category for daily individual or household use. With capacities typically ranging from 150ml to 300ml (5 oz to 10 oz), these bottles are designed to sit on a bathroom counter or nightstand, offering a balance between product quantity and manageable size.',
    images: [
      {
        src: 'https://www.jarsking.com/wp-content/uploads/2024/12/green-shampoo-bottle.jpg',
        alt: 'green shampoo bottle',
      },
      {
        src: 'https://www.jarsking.com/wp-content/uploads/2024/12/travel-shampoo-bottle.jpg',
        alt: 'travel shampoo bottle',
      },
    ],
  },
  {
    title: 'Family/Value Size (400ml and Above / 13.5 oz and Above)',
    description:
      'The largest category, these bottles are designed for households with multiple users or for individuals who use lotion frequently and want the best value. Capacities typically start at 400ml (13.5 oz) and can go up to 1 liter or more for professional and salon use.',
    images: [
      {
        src: 'https://www.jarsking.com/wp-content/uploads/2025/09/shampoo-bottle-components-e1758004233410.webp',
        alt: 'shampoo bottle components',
      },
      {
        src: 'https://www.jarsking.com/wp-content/uploads/2024/12/luxury-shampoo-bottle.webp',
        alt: 'luxury shampoo bottle',
      },
    ],
  },
]

export default function SizeGuide() {
  return (
    <section className="w-full bg-[#f5f5f0] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-4">
          Choose the Right Sizes for Your Body Care Lines
        </h2>
        <div className="text-center mb-12">
          <Link
            href="/contact-jarsking/"
            className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
          >
            Start Your Project
          </Link>
        </div>

        <div className="space-y-12">
          {sizes.map((size, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-10 md:gap-16 bg-white rounded-xl p-8`}
            >
              <div className="flex-1">
                <h2 className="font-montserrat text-2xl md:text-[28px] font-medium leading-[1.2] text-[#1E1E1E] mb-4">
                  {size.title}
                </h2>
                <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed">
                  {size.description}
                </p>
              </div>
              <div className="flex-1 flex gap-4">
                {size.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="flex-1 overflow-hidden rounded-lg">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
