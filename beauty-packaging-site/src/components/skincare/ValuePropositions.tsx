import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const propositions = [
  {
    key: 'firstImpressions',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/10/skincare-bottle-poster.webp',
    buttonHref: '/contact-jarsking/',
    reverse: false,
  },
  {
    key: 'productIntegrity',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/04/airless-bottle.webp',
    buttonHref: '/contact-jarsking/',
    reverse: true,
  },
  {
    key: 'sustainability',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/10/replaceable-jar.webp',
    buttonHref: '/contact-jarsking/',
    reverse: false,
  },
]

export default function ValuePropositions() {
  const { t } = useTranslation()

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
                {t(`allApplications.valuePropositions.${item.key}.title`, { defaultValue: '' })}
              </h2>
              <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed mb-8">
                {t(`allApplications.valuePropositions.${item.key}.description`, { defaultValue: '' })}
              </p>
              <Link
                href={item.buttonHref}
                className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
              >
                {t(`allApplications.valuePropositions.${item.key}.buttonText`, { defaultValue: '' })}
              </Link>
            </div>
            {/* Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={item.image}
                alt={t(`allApplications.valuePropositions.${item.key}.alt`, { defaultValue: '' })}
                className="w-full max-w-[500px] h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
