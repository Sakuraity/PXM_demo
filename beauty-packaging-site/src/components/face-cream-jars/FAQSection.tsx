'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Q1: What materials are typically used for face cream jars and why?',
    answers: [
      'Glass jars are preferred for luxury products due to their premium feel, excellent barrier properties, and ability to protect sensitive formulations from UV radiation. They also offer superior chemical stability, preventing unwanted interactions between the container and product, while maintaining the integrity of active ingredients.',
      'Plastic and acrylic alternatives are chosen for their lightweight nature, cost-effectiveness, and reduced risk of breakage during shipping and handling. These materials can be engineered with specific properties like airless dispensing systems or UV protection coatings.',
      'Modern plastic jars often incorporate post-consumer recycled (PCR) materials to meet sustainability goals, though this requires careful consideration of material compatibility with the cosmetic formulation.',
    ],
    images: [
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/cream-jar-materials-1024x1024.webp', alt: 'cream jar materials' },
    ],
  },
  {
    question: 'Q2: What is the optimal jar size for face creams, and how does this impact product shelf life?',
    answers: [
      'The most common face cream jar sizes range from 15ml to 100ml, with 50ml being the industry standard for daily-use facial moisturizers.',
      'This size optimization is based on several factors: the typical amount used per application (0.5-1ml), frequency of use, and the product\'s period-after-opening (PAO) timeframe.',
      'Larger jars may offer better value for consumers but can increase the risk of product degradation due to repeated exposure to air and fingers during application.',
      'The jar\'s headspace (air gap between product and lid) must also be carefully calculated to prevent oxidation while allowing for proper product dispensing.',
      'Many brands are now moving toward smaller sizes (30ml or less) to ensure products are used within their optimal effectiveness window, typically 3-6 months after opening.',
    ],
    images: [
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/cream-jar-1024x1024.webp', alt: 'cream jar' },
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/face-cream-jar-1-1024x1024.webp', alt: 'face cream jar' },
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/face-cream-jar-sizes.webp', alt: 'face cream jar sizes' },
    ],
  },
  {
    question: 'Q3: How do different jar closure systems affect product preservation and user experience?',
    answers: [
      'Traditional screw-cap closures require a proper threading system and usually incorporate an inner liner or seal to prevent product leakage and contamination.',
      'Some advanced systems include mechanisms like inner dispensing discs or pressure-sensitive barriers that help maintain product sterility.',
      'Double-wall containers with airless pumping mechanisms prevent excessive air exposure and allow for complete product dispensing.',
      'Some premium jars feature magnetic closures or special clicking mechanisms that provide tactile feedback during closure, enhancing the luxury experience.',
    ],
    images: [
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/screw-jar-with-seal.webp', alt: 'screw jar with seal' },
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/replaceable-jar.webp', alt: 'replaceable jar' },
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/airless-jar-components.webp', alt: 'airless jar components' },
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/airless-jar-1024x1024.webp', alt: 'airless jar' },
    ],
  },
  {
    question: 'Q4: What role does jar design play in product stability and active ingredient protection?',
    answers: [
      'The design of face cream jars significantly impacts the stability of cosmetic formulations, particularly those containing sensitive active ingredients like vitamins, peptides, and antioxidants.',
      'Double-walled containers create an insulating effect that helps maintain product temperature stability, while specially treated glass or plastic materials can block harmful UV rays that might degrade active ingredients.',
      'Many modern jars incorporate innovative features like vacuum pumping systems or hermetic sealing technologies that minimize oxidation and extend product shelf life.',
      'Some designs include special compartments or mixing mechanisms that keep reactive ingredients separate until application.',
      'The jar\'s interior surface finish is also crucial, as it affects product adhesion and complete dispensing capabilities, with some manufacturers using special treatments or coatings to enhance product compatibility and stability.',
    ],
    images: [
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/plastic-cream-jar-with-inner.webp', alt: 'plastic cream jar with inner' },
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/airless-pump-cream-jar.webp', alt: 'airless pump cream jar' },
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/cream-jar-with-spoon-1024x1024.webp', alt: 'cream jar with spoon' },
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/jar-with-compartments.webp', alt: 'jar with compartments' },
    ],
  },
  {
    question: 'Q5: What makes a reliable face cream jar supplier?',
    answers: [
      'Quality Certifications and Compliance: Essential certifications like ISO 9001, ISO 15378, and GMP demonstrate regulatory compliance. Regular third-party audits and comprehensive documentation validate their commitment to maintaining high standards.',
      'Manufacturing Infrastructure: State-of-the-art facilities with diverse molding technologies, clean rooms, and automated inspection systems. Multiple production lines capable of handling various batch sizes and specialized decoration techniques.',
      'Technical Support and Response Time: Dedicated technical team providing material selection guidance, design optimization, and regulatory assistance. Quick response to inquiries within 24-48 hours and comprehensive troubleshooting support.',
      'Quality Control Systems: Rigorous testing protocols including material inspection, dimensional accuracy, and stability testing. Documented sampling plans following AQL standards with complete batch traceability and analysis certification.',
      'Supply Chain Management: Multiple supplier relationships ensuring consistent material availability. Climate-controlled storage facilities, efficient logistics networks, and contingency planning for minimizing supply chain disruptions.',
    ],
    images: [
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/glass-1024x683.webp', alt: 'glass' },
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/silkscreen-printing-1024x768.webp', alt: 'silkscreen printing' },
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/glass-in-furnace-1024x768.webp', alt: 'glass in furnace' },
      { src: 'https://www.jarsking.com/wp-content/uploads/2024/12/bottle-packing-1024x768.webp', alt: 'bottle packing' },
    ],
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-14">
          Guides to Marketable Face Cream Jars
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              {/* Question Header */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-montserrat text-lg md:text-xl font-normal text-[#1E1E1E] pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer Content */}
              {openIndex === index && (
                <div className="p-6 pt-0 border-t border-gray-100">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Text */}
                    <div className="flex-1">
                      <ul className="space-y-3">
                        {faq.answers.map((answer, aIdx) => (
                          <li key={aIdx} className="flex gap-3">
                            <span className="text-[#61CE70] mt-1 flex-shrink-0">●</span>
                            <span className="text-sm text-[#7A7A7A] font-poppins leading-relaxed">
                              {answer}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Images */}
                    {faq.images.length > 0 && (
                      <div className={`grid gap-3 ${
                        faq.images.length === 1 ? 'grid-cols-1 w-full md:w-[300px]' :
                        faq.images.length <= 2 ? 'grid-cols-2 w-full md:w-[400px]' :
                        'grid-cols-2 w-full md:w-[400px]'
                      }`}>
                        {faq.images.map((img, iIdx) => (
                          <div key={iIdx} className="aspect-square overflow-hidden rounded-lg bg-[#f5f5f5]">
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
