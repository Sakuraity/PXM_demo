export default function HeroBanner() {
  return (
    <section className="relative min-h-[713px] flex items-start bg-cover bg-center"
      style={{ backgroundImage: "url('/images/products/pink-skincare-packaging-scaled.webp')" }}>
      <div className="absolute inset-0 bg-[#663B33] opacity-70"></div>
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4">
        <div className="mt-[6%]">
          <h1 className="text-left text-white text-[75px] font-light capitalize leading-[1.3em] ml-[100px] mb-[30px]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Cosmetic Packaging Solutions <br />From Skincare to Fragrance
          </h1>
          <div className="max-w-[1122px] mx-auto">
            <p className="text-left text-white text-lg font-extralight leading-[35px]">
              Finding the right packaging isn&apos;t just about aesthetics—it&apos;s about protecting your formulation, delivering an exceptional user experience, and building lasting brand equity. Whether you&apos;re launching a vitamin C serum, a luxury perfume, or a sustainable body care line, Jarsking offers application-specific packaging solutions backed by 20+ years of manufacturing expertise and 30,000+ ready molds in stock.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
