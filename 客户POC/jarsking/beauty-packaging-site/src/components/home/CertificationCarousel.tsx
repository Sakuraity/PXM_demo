const certifications = [
  { name: 'ISO', src: 'https://www.jarsking.com/wp-content/uploads/2025/07/iso.webp' },
  { name: 'BSCI', src: 'https://www.jarsking.com/wp-content/uploads/2025/07/bsci.webp' },
  { name: 'REACH', src: 'https://www.jarsking.com/wp-content/uploads/2025/07/reach.webp' },
  { name: 'RoHS', src: 'https://www.jarsking.com/wp-content/uploads/2025/07/rohs.webp' },
  { name: 'CRF', src: 'https://www.jarsking.com/wp-content/uploads/2025/07/crf.webp' },
  { name: 'MSDS', src: 'https://www.jarsking.com/wp-content/uploads/2025/07/msds.webp' },
  { name: 'RAL', src: 'https://www.jarsking.com/wp-content/uploads/2025/07/ral.webp' },
]

export default function CertificationCarousel() {
  return (
    <section className="py-8 bg-white border-b overflow-hidden">
      <div
        className="flex items-center gap-10 animate-[marquee_20s_linear_infinite]"
        style={{ width: 'max-content' }}
      >
        {[...certifications, ...certifications].map((cert, i) => (
          <div key={`${cert.name}-${i}`} className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28">
            <img src={cert.src} alt={cert.name} className="w-full h-full object-contain" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
