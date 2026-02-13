import Image from 'next/image'

const categoriesRow1 = [
  {
    title: 'By Materials',
    image: '/images/products/plain-perfume-bottle.webp',
    alt: 'plain perfume bottle',
    link: '/all-materials/',
  },
  {
    title: 'By Functions',
    image: '/images/products/plastic-bottles-with-various-dispensers.webp',
    alt: 'plastic bottles with various dispensers',
    link: '/functions/',
  },
  {
    title: 'By Types',
    image: '/images/products/earthly-tone-skincare-packaging.webp',
    alt: 'earthly tone skincare packaging',
    link: '/all-packaging-types/',
  },
]

const categoriesRow2 = [
  {
    title: 'Collections',
    image: '/images/products/dopamine-airless-packaging-for-skincare.webp',
    alt: 'dopamine airless packaging for skincare',
    link: '/collections/',
  },
  {
    title: 'Child Resistant Packaging',
    image: '/images/products/cannabis-packaging-set.png.webp',
    alt: 'cannabis packaging set',
    link: '/cannabis-packaging/',
  },
  {
    title: 'Boxes, Bags, Supplies',
    image: '/images/products/cannabis-paper-box.webp',
    alt: 'cannabis paper box',
    link: '/boxes-bags-and-supplies/',
  },
]

function CategoryCard({ title, image, alt, link }: { title: string; image: string; alt: string; link: string }) {
  return (
    <div className="text-center">
      <a href={link} className="block group">
        <div className="relative aspect-square overflow-hidden rounded-sm mb-4">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover group-hover:scale-95 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </a>
      <h4 className="text-[20px] font-normal leading-[1.5em]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <a href={link} className="text-primary hover:text-accent transition-colors">
          {title}
        </a>
      </h4>
    </div>
  )
}

export default function MoreCategories() {
  return (
    <>
      {/* Header Row */}
      <section className="py-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-[40px] font-medium leading-[1.2em] text-primary"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              More Categories for Your Packaging
            </h2>
            <a href="#"
              className="inline-block bg-accent text-white text-sm font-medium px-6 py-2 rounded hover:scale-105 transition-transform duration-300 mt-4 md:mt-0"
              style={{ fontFamily: "'Roboto', sans-serif" }}>
              Need Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Categories Row 1 */}
      <section className="pb-8 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoriesRow1.map((cat, index) => (
              <CategoryCard key={index} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Row 2 */}
      <section className="pb-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoriesRow2.map((cat, index) => (
              <CategoryCard key={index} {...cat} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
