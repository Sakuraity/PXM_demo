import Image from 'next/image'

const LEFT_IMAGES = [
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/10/sustainable-packaging-for-clean-beauty-brands.webp',
    alt: 'sustainable packaging for clean beauty brands',
    width: 750,
    height: 750,
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/10/durable-outer-cosmetic-bottle-for-reuse.webp',
    alt: 'durable outer cosmetic bottle for reuse',
    width: 750,
    height: 750,
  },
]

const RIGHT_IMAGES = [
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/10/refillable-cream-jar-with-pp-inner.webp',
    alt: 'refillable cream jar with pp inner',
    width: 750,
    height: 750,
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/10/refillable-airless-pump-skincare-solution.webp',
    alt: 'refillable airless pump skincare solution',
    width: 750,
    height: 650,
  },
  {
    src: 'https://www.jarsking.com/wp-content/uploads/2025/10/airtight-skincare-jar-sustainable-material-1024x698.webp',
    alt: 'airtight skincare jar sustainable material',
    width: 1024,
    height: 698,
  },
]

export default function ImageGallery() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-[8%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {LEFT_IMAGES.map((image, index) => (
              <div key={index} className="relative w-full overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {RIGHT_IMAGES.map((image, index) => (
              <div key={index} className="relative w-full overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
