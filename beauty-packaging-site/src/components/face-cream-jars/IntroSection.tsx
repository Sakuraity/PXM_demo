export default function IntroSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1">
          <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] mb-6">
            Customize Your Skincare Brand with Jarsking Packaging
          </h2>
          <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed">
            With Jarsking, you&apos;re the artist, and our jars are your canvas. Choose from a palette of materials, finishes, and decorative techniques to craft a vessel that&apos;s as unique as your formulation. Want a frosted glass jar with gold hot-stamping? A sleek acrylic container with a custom Pantone color? An eco-friendly bamboo-lidded jar that speaks to your sustainability values? We make it happen. Our in-house design team works closely with you to bring your vision to life, ensuring every detail—from the curve of the jar to the click of the cap—reflects your brand&apos;s identity.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://www.jarsking.com/wp-content/uploads/elementor/thumbs/7-rf63iyfjobnn42rptkk8y5mk0etm0tvkmxah58loqk.jpg"
            alt="cosmetic jar manufacturers"
            className="w-full max-w-[500px] h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
