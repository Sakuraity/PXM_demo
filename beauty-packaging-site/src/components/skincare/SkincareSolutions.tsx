
const solutionPairs = [
  {
    left: {
      title: 'Face Cream Jars',
      description:
        'Face cream jars combine premium aesthetics with practical functionality for rich, thick formulations. Our jars accommodate moisturizers, night creams, eye creams, and specialty treatments that require wide-mouth access for finger or spatula application. Available in glass, acrylic, and PP materials with airless options that prevent oxidation of active ingredients.',
      image: 'https://www.jarsking.com/wp-content/uploads/2024/10/球形瓶06_1确定.jpg',
      alt: 'ball shape cream jar',
    },
    right: {
      title: 'Essential Oil Bottles',
      description:
        'Essential oil formulations demand UV-resistant, airtight packaging to maintain therapeutic potency over time. Amber, cobalt, and violet glass options filter harmful light wavelengths that degrade sensitive botanical compounds. Dropper caps, roller balls, and tamper-evident closures provide precise dispensing while maintaining product integrity throughout shelf life.',
      image: 'https://www.jarsking.com/wp-content/uploads/2025/09/high-end-cosmetic-packaging-glass-dropper-bottle.webp',
      alt: 'high-end cosmetic packaging glass dropper bottle',
    },
  },
  {
    left: {
      title: 'Lotion Bottles',
      description:
        'Lotion bottles with pump dispensers deliver hygienic, convenient access to body lotions, facial moisturizers, and hand creams. Material versatility accommodates formulations ranging from lightweight lotions to rich body butters. Airless pump options prevent contamination while ensuring complete product dispensing without waste.',
      image: 'https://www.jarsking.com/wp-content/uploads/2024/10/airless-pump-bottle-glass-or-plastic-15ml.webp',
      alt: 'airless pump bottle glass or plastic 15ml',
    },
    right: {
      title: 'Serum Glass Bottles',
      description:
        'High-performance serums containing vitamin C, retinol, hyaluronic acid, and peptides require protective glass packaging that preserves ingredient efficacy. Dark glass options prevent light-induced oxidation while precision dropper assemblies enable controlled application of concentrated formulations. Premium glass communicates the clinical sophistication that serum customers expect.',
      image: 'https://www.jarsking.com/wp-content/uploads/2025/09/premium-serum-bottles-with-safety-design-pipette.webp',
      alt: 'premium serum bottles with safety design pipette',
    },
  },
  {
    left: {
      title: 'Glass Vials',
      description:
        'Vials serve multiple purposes including product sampling, travel sizes, and single-use treatment ampoules. They can be used in subscription boxes and promotional campaigns.  Pharmaceutical-grade glass ensures product safety for concentrated treatment formulations.',
      image: 'https://www.jarsking.com/wp-content/uploads/2025/07/serum-vial.webp',
      alt: 'serum vial',
    },
    right: {
      title: 'Foam Pump Bottles',
      description:
        'Foam pump dispensers create rich, airy lather perfect for facial cleansers, makeup removers, and lightweight moisturizing mousses. The foaming action reduces product waste while delivering consistent dosages with each pump. Consumers appreciate the luxurious texture and ease of application that foam pumps provide.',
      image: 'https://www.jarsking.com/wp-content/uploads/2025/06/foam-pump-bottles.webp',
      alt: 'foam pump bottles',
    },
  },
  {
    left: {
      title: 'Roll-on Bottles',
      description:
        'Roll-on applicators provide targeted, mess-free delivery for eye serums, spot treatments, and cooling gels. Rollerball offers gentle massage that enhances product benefits like reduced puffiness and improved circulation. Stainless steel rollerballs deliver cooling sensations that depuff eyes and calm inflammation. Glass and plastic options suit different price points while maintaining smooth glide.',
      image: 'https://www.jarsking.com/wp-content/uploads/2025/07/safe-roller-bottles-for-aromatherapy.webp',
      alt: 'safe roller bottles for aromatherapy',
    },
    right: {
      title: 'Spray Bottles',
      description:
        'Fine mist sprayers distribute toners, essences, facial mists, and setting sprays evenly across the skin. They are used between skincare steps, perfect for multi-step routines. The refreshing application method creates a spa-like experience that customers can enjoy at home or on-the-go.\u200B Mist quality varies from ultra-fine facial mists to trigger sprays for body products.',
      image: 'https://www.jarsking.com/wp-content/uploads/2025/01/Luxury-matte-spray-bottle.webp',
      alt: 'Luxury matte spray bottle',
    },
  },
  {
    left: {
      title: 'Toner Bottles',
      description:
        'Toner bottles bridge cleansing and treatment steps in skincare routines, requiring versatile closure options that accommodate different application preferences. Disc-top caps suit cotton pad application, while spray tops enable direct misting onto skin. Design should reflect the toner\'s role in the broader skincare ritual, whether refreshing, pH-balancing, or treatment-oriented.',
      image: 'https://www.jarsking.com/wp-content/uploads/2025/09/skincare-bottle-packaging-for-hydrating-toner.webp',
      alt: 'skincare bottle packaging for hydrating toner',
    },
    right: {
      title: 'Sunscreen Packaging',
      description:
        'Sunscreen packaging must protect UV-sensitive formulations while enabling frequent, easy application throughout the day. Squeeze tubes, pump bottles, and stick formats each serve use cases from beach activities to daily commuting. Travel-friendly formats in TSA-compliant sizes encourage reapplication habits.',
      image: 'https://www.jarsking.com/wp-content/uploads/2024/10/11-1.jpg',
      alt: 'squeeze sunscreen bottle supplier',
    },
  },
]

export default function SkincareSolutions() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-14">
          Skincare Packaging Solutions
        </h2>

        <div className="space-y-12">
          {solutionPairs.map((pair, pairIndex) => (
            <div
              key={pairIndex}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Left Card */}
              <div className="bg-[#f9f9f9] rounded-xl overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={pair.left.image}
                    alt={pair.left.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-montserrat text-2xl md:text-[28px] font-normal leading-[1.4] text-[#1E1E1E] mb-4">
                    {pair.left.title}
                  </h3>
                  <p className="text-[15px] text-[#7A7A7A] font-poppins leading-relaxed">
                    {pair.left.description}
                  </p>
                </div>
              </div>

              {/* Right Card */}
              <div className="bg-[#f9f9f9] rounded-xl overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={pair.right.image}
                    alt={pair.right.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-montserrat text-2xl md:text-[28px] font-normal leading-[1.4] text-[#1E1E1E] mb-4">
                    {pair.right.title}
                  </h3>
                  <p className="text-[15px] text-[#7A7A7A] font-poppins leading-relaxed">
                    {pair.right.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
