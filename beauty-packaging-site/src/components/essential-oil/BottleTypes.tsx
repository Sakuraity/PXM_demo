import Link from 'next/link'

const bottleTypes = [
  {
    title: 'Dropper Bottles',
    description: 'Dropper bottles allow precise dosing, making them ideal for essential oils used in aromatherapy, skincare, or healing treatments. Their controlled dispensing is perfect for adding oils to diffusers or applying small amounts directly to the skin.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/dropper-bottle-e1730958554179-1024x768.jpg',
    alt: 'dropper bottle',
  },
  {
    title: 'Spray Bottles',
    description: 'Spray bottles are convenient for home fragrance, cleaning solutions, or personal misting. They allow easy application of diluted essential oils as room sprays, body mists, or surface cleaners, offering even distribution for refreshing spaces or creating custom blends.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/spray-bottles-e1730958985134.jpg',
    alt: 'spray bottles',
  },
  {
    title: 'Roller Bottles',
    description: 'Roller bottles are perfect for on-the-go applications, such as personal fragrances or topical essential oil blends. They allow for easy, controlled application to pulse points, ideal for relaxation, energy boosts, or skin treatments like headaches or stress relief.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/roller-bottle-e1730959139662-1024x768.jpg',
    alt: 'roller bottle',
  },
  {
    title: 'Airless Pump Bottles',
    description: 'Airless pump bottles are suited for skincare products, as they protect essential oil blends from air exposure, keeping them fresh. They\'re ideal for lotions, serums, or oil blends that need clean, precise dispensing without contamination or oxidation.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/airless-bottle-e1730959083802-1024x768.jpg',
    alt: 'airless bottle',
  },
  {
    title: 'Cannabis Dropper Bottles',
    description: 'Cannabis/CBD dropper bottles with child-resistant caps ensure both safety and precision. Designed to prevent accidental access, these bottles offer secure storage for CBD oils while allowing users to dispense the right amount, making them ideal for cannabis products.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/child-resistant-dropper-bottle-e1730961993793-1024x768.jpg',
    alt: 'child resistant dropper bottle',
  },
  {
    title: 'Amber Bottles',
    description: 'Amber bottles provide UV protection, making them essential for preserving the potency of light-sensitive essential oils. They\'re ideal for storing oils in bulk or in smaller quantities, protecting against light degradation, ensuring long-term efficacy and stability.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/amber-essential-oil-bottle-e1730885367193.jpg',
    alt: 'amber essential oil bottle',
  },
]

export default function BottleTypes() {
  return (
    <section className="w-full bg-[#f9f9f9] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-4">
          Essential Oil Packaging Solutions: Choosing the Right Bottle for Every Application
        </h2>
        <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed text-center max-w-4xl mx-auto mb-12">
          As a leading essential oil packaging manufacturer, we offer six versatile bottle types—dropper, spray, roller, airless pump, amber, and cannabis CRC bottles. Each serves a unique purpose, from precise dosing to UV protection, ensuring your essential oils are perfectly packaged for every application.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bottleTypes.map((bottle, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={bottle.image}
                  alt={bottle.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat text-xl md:text-2xl font-normal leading-[1.4] text-[#1E1E1E] mb-2">
                  {bottle.title}
                </h3>
                <p className="text-sm text-[#7A7A7A] font-poppins leading-relaxed">
                  {bottle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact-jarsking/"
            className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
          >
            Custimize Your Collections Now!
          </Link>
        </div>
      </div>
    </section>
  )
}
