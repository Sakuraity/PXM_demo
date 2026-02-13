
const steps = [
  {
    title: 'From Concept to Demo',
    image: 'https://www.jarsking.com/wp-content/uploads/2023/02/Mask-group-29.jpg',
    alt: 'Mask group 29',
    href: '/concept/',
  },
  {
    title: 'In-House Molding',
    image: 'https://www.jarsking.com/wp-content/uploads/2023/02/Mask-group-30.jpg',
    alt: 'Mask group 30',
    href: '/in-house-bottle-molding/',
  },
  {
    title: 'Turnkey Manufacturing',
    image: 'https://www.jarsking.com/wp-content/uploads/2023/02/Mask-group-7.jpg',
    alt: 'Mask group 7',
    href: '/turnkey-manufacturing/',
  },
]

export default function FullCycleSolution() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-14">
          A Full-Cycle Solution for Cosmetic Packaging
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <a key={index} href={step.href} className="group block">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-montserrat text-xl font-normal leading-[1.5] text-[#1E1E1E] mt-4 text-center">
                {step.title}
              </h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
