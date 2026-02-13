import Link from 'next/link'

export default function EssentialOilIntroSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1">
          <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] mb-6">
            Unlock One-Stop Solutions for Essential Oil Bottles Wholesale
          </h2>
          <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed mb-8">
            As a top-tier essential oil glass bottle manufacturer, Jarsking stands out by mastering three distinct sectors: bottle crafting, cap and pump production, and exquisite finishing. Only about 10% of factories can excel in all three areas simultaneously. With over 20 years of expertise, Jarsking integrates resources from more than 20 factories, meeting the essential oil packaging needs of over 10,000 brands worldwide.
          </p>
          <Link
            href="/contact-jarsking/"
            className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
          >
            Unlock One-Stop Solutions Now!
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://www.jarsking.com/wp-content/uploads/2023/02/30ml-Essential-Oil-Bottles.jpg"
            alt="30ml Essential Oil Bottles"
            className="w-full max-w-[500px] h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
