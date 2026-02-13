
export default function LotionIntroSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1">
          <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] mb-6">
            Manufacturer of Body Lotion Bottles - Custom Packaging Solutions
          </h2>
          <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed">
            Jarsking delivers professional-grade body lotion containers engineered for optimal product preservation, user convenience, and brand differentiation. Our body lotion bottles are designed to meet the demands of modern personal care brands, combining advanced material science with customizable aesthetics.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://www.jarsking.com/wp-content/uploads/2025/09/airless-body-lotion-bottle.webp"
            alt="airless body lotion bottle"
            className="w-full max-w-[500px] h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
