'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const finishes = [
  { key: 'glossy',
    title: 'Glossy Finishes',
    description:
      'High-gloss coatings enhance visual elements with light reflection properties that emphasize vivid colors and create eye-catching shelf presence. Glossy finishes work excellently with silk screen printing and specialized printing techniques for custom cosmetic packaging. These surfaces stand out in competitive retail environments while supporting premium body lotion brand positioning.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/12/pump-bottles-for-shampoo.jpg',
  },
  { key: 'frosting',
    title: 'Frosting',
    description:
      'Semi-transparent matte effects create matte appearances through different application methods depending on bottle material. Plastic bottles achieve frosting through injection molding or spraying, while glass containers utilize acid etching or spray application. Frosting provides elegant appearance with enhanced tactility while reducing light reflection for stable product presentation.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/12/500ml-plastic-containers.jpg',
  },
  { key: 'metallization',
    title: 'Metallization',
    description:
      'Metallic coating application through electrolysis creates high-gloss metallic surfaces with exceptional durability. Electroplating offers versatile metal colors and textures including brushed effects while providing superior resistance to wear and corrosion compared to ink printing. This finish transforms plastic body lotion bottles into luxury-appearing containers with enhanced tactile appeal.',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/09/metallic-finish-plastic-bottle.webp',
  },
  { key: 'silkscreen',
    title: 'Silkscreen Printing',
    description:
      'Multi-color graphic application directly onto bottle surfaces enables precise logo placement and brand messaging. Silk screening provides color vibrancy while offering cost structures independent of order quantity, calculated based on color count and printing surfaces. This technique excels for body lotion bottles requiring brand graphics and regulatory information display.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/12/big-bottle-shampoo-and-conditioner.jpg',
  },
  { key: 'hotStamping',
    title: 'Hot Stamping',
    description:
      'Metallic foil application creates premium accents and luxury brand elements through heated transfer processes. Hot stamping delivers brilliant metallic finishes in gold, silver, and custom colors while providing superior adhesion and wear resistance. This technique particularly enhances premium body lotion packaging seeking sophisticated market positioning.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/12/hot-stamping-design.jpg',
  },
  { key: 'holographic',
    title: 'Holographic and Glitter',
    description:
      'Multi-dimensional holographic effects and vibrant sparkle finishes create eye-catching presentations particularly popular in younger demographic market segments today. These decorative finishes consistently provide unique retail shelf appeal while supporting trendy brand positioning for premium body lotion products targeting fashion-conscious consumers.',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/09/holographic-shampoo-bottle.webp',
  },
  { key: 'bamboo',
    title: 'Bamboo and Wood Finishes',
    description:
      'Bamboo and Wood Finishes offer a natural, rustic aesthetic with eco-friendly appeal in personal care packaging. This sustainable material has gained popularity among environmentally conscious brands. The unique texture and grain of bamboo creates a premium appearance that perfectly complements products containing natural or organic ingredients. The visual harmony between packaging and formulation strengthens brand authenticity, appealing to sustainability-focused consumers willing to pay more for environmentally responsible products. Brands leverage bamboo packaging as a key marketing differentiator, reinforcing their commitment to natural beauty solutions.',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/09/skincare-bottle-set-PET-with-bamboo-caps.webp',
  },
]

export default function BottleFinishes() {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-4">
          {t('lotionBottles.bottleFinishes.title')}
        </h2>
        <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed text-center max-w-4xl mx-auto mb-12">
          {t('lotionBottles.bottleFinishes.description')}
        </p>

        <div className="space-y-12">
          {finishes.map((finish, index) => (
            <div
              key={finish.key}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-10 md:gap-16`}
            >
              <div className="flex-1">
                <h3 className="font-montserrat text-2xl md:text-[28px] font-normal leading-[1.4] text-[#1E1E1E] mb-3">
                  {t(`lotionBottles.bottleFinishes.items.${finish.key}.title`)}
                </h3>
                <p className="text-sm text-[#7A7A7A] font-poppins leading-relaxed">
                  {t(`lotionBottles.bottleFinishes.items.${finish.key}.description`)}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src={finish.image}
                  alt={t(`lotionBottles.bottleFinishes.items.${finish.key}.title`)}
                  className="w-full max-w-[450px] h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact-jarsking/"
            className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
          >
            {t('lotionBottles.bottleFinishes.button')}
          </Link>
        </div>
      </div>
    </section>
  )
}
