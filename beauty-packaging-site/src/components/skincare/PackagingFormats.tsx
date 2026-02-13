
const formats = [
  {
    title: 'Bottles',
    description:
      'Skincare bottles represent the versatile foundation of beauty packaging, accommodating everything from lightweight essences to rich body lotions. Premium glass bottles convey luxury and protect photosensitive ingredients like vitamin C and retinol from degradation. PET and HDPE plastic options offer lightweight durability for travel-sized products and everyday formulations.',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/08/Glossy-surface-HDPE-cosmetic-bottles.webp',
    alt: 'Glossy surface HDPE cosmetic bottles',
  },
  {
    title: 'Jars',
    description:
      'Face cream jars combine wide-mouth accessibility with premium aesthetics perfect for thick, rich formulations. Double-wall construction creates luxurious unboxing experiences while protecting light-sensitive ingredients through opaque or UV-filtering glass options. Acrylic jars offer shatter-resistant alternatives for travel products and luxury hotel amenities.',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/07/Custom-skincare-jar-with-refillable-liner.webp',
    alt: 'Custom skincare jar with refillable liner',
  },
  {
    title: 'Vials',
    description:
      'Glass vials serve multiple strategic purposes including premium sampling, travel sizes, and single-dose treatment ampoules. Pharmaceutical-grade glass ensures product safety for concentrated active formulations, while small capacity options enable cost-effective customer acquisition through subscription boxes and promotional campaigns. Vials maintain sterile conditions essential for preserving ingredient potency in serums and treatment concentrates.',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/07/cosmetic-glass-vial.webp',
    alt: 'cosmetic glass vial',
  },
  {
    title: 'Syringes',
    description:
      'Cosmetic syringes deliver pharmaceutical-grade precision for high-concentration treatments requiring exact dosing. Luer lock fittings enable hygienic, mess-free application of eye creams, spot treatments, and professional-grade serums without finger contamination. The syringe format communicates clinical efficacy and scientific sophistication that premium skincare customers expect.',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/04/syringe.webp',
    alt: 'syringe',
  },
  {
    title: 'Tubes',
    description:
      'Soft tubes combine portability, product protection, and convenient dispensing for creams, gels, and cleansers. Flexible materials accommodate varying product viscosities while leak-proof caps prevent spills during travel. Aluminum and laminate tubes offer superior barrier properties that protect formulations from air and light exposure.',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/06/soft-tube.webp',
    alt: 'soft tube',
  },
  {
    title: 'Ampoules',
    description:
      'Ampoules deliver single-use doses of highly concentrated active ingredients in hermetically sealed glass containers. Break-seal designs maintain complete sterility and prevent oxidation until the moment of application, ensuring maximum ingredient potency. This format perfectly suits treatment regimens featuring hyaluronic acid, vitamin C, retinol, and other sensitive compounds.',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/05/ampoules.png',
    alt: 'ampoules',
  },
]

export default function PackagingFormats() {
  return (
    <section className="w-full bg-[#f5f5f0] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-14">
          Skincare Packaging Formats
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formats.map((format, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden bg-[#f9f9f9]">
                <img
                  src={format.image}
                  alt={format.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="font-montserrat text-2xl md:text-[28px] font-medium leading-[1.2] text-[#1E1E1E] mb-3">
                  {format.title}
                </h2>
                <p className="text-sm text-[#7A7A7A] font-poppins leading-relaxed">
                  {format.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
