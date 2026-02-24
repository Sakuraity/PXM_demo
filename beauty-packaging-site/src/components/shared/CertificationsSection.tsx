'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const certifications = [
  { src: 'https://www.jarsking.com/wp-content/uploads/2023/12/BSCI.jpg', alt: 'BSCI' },
  { src: 'https://www.jarsking.com/wp-content/uploads/2023/12/EMC.jpg', alt: 'EMC' },
  { src: 'https://www.jarsking.com/wp-content/uploads/2023/12/ISO9001.png', alt: 'ISO9001' },
  { src: 'https://www.jarsking.com/wp-content/uploads/2023/12/MSDS.jpg', alt: 'MSDS' },
  { src: 'https://www.jarsking.com/wp-content/uploads/2023/12/RoHS.png', alt: 'RoHS' },
  { src: 'https://www.jarsking.com/wp-content/uploads/2023/12/Canadian-patent.png', alt: 'Canadian patent' },
  { src: 'https://www.jarsking.com/wp-content/uploads/2023/12/CE-Eseencial-oil.jpg', alt: 'CE Essential oil' },
  { src: 'https://www.jarsking.com/wp-content/uploads/2023/12/Glass-bottle-REACH.png', alt: 'Glass bottle REACH' },
  { src: 'https://www.jarsking.com/wp-content/uploads/2023/12/TUV-cosmetic-bottle.jpg', alt: 'TUV cosmetic bottle' },
]

interface CertificationsSectionProps {
  title?: string
  buttonText?: string
}

export default function CertificationsSection({
  title,
  buttonText,
}: CertificationsSectionProps) {
  const { t } = useTranslation()
  const resolvedTitle = title ?? t('shared.certifications.defaultTitle')
  const resolvedButton = buttonText ?? t('shared.certifications.defaultButton')
  return (
    <section className="w-full bg-[#15294C] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-white mb-12">
          {resolvedTitle}
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 mb-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="w-full aspect-square rounded-lg overflow-hidden bg-white/10 flex items-center justify-center"
              style={{
                backgroundImage: `url(${cert.src})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <span className="sr-only">{cert.alt}</span>
            </div>
          ))}
        </div>
        <Link
          href="/contact-jarsking/"
          className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
        >
          {resolvedButton}
        </Link>
      </div>
    </section>
  )
}
