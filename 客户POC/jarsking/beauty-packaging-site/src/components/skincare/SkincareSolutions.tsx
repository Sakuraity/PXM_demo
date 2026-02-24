
import { useTranslation } from 'react-i18next'

const solutionPairs = [
  {
    left: {
      key: 'faceCreamJars',
      image: 'https://www.jarsking.com/wp-content/uploads/2024/10/球形瓶06_1确定.jpg',
    },
    right: {
      key: 'essentialOilBottles',
      image: 'https://www.jarsking.com/wp-content/uploads/2025/09/high-end-cosmetic-packaging-glass-dropper-bottle.webp',
    },
  },
  {
    left: {
      key: 'lotionBottles',
      image: 'https://www.jarsking.com/wp-content/uploads/2024/10/airless-pump-bottle-glass-or-plastic-15ml.webp',
    },
    right: {
      key: 'serumBottles',
      image: 'https://www.jarsking.com/wp-content/uploads/2025/09/premium-serum-bottles-with-safety-design-pipette.webp',
    },
  },
  {
    left: {
      key: 'glassVials',
      image: 'https://www.jarsking.com/wp-content/uploads/2025/07/serum-vial.webp',
    },
    right: {
      key: 'foamPumpBottles',
      image: 'https://www.jarsking.com/wp-content/uploads/2025/06/foam-pump-bottles.webp',
    },
  },
  {
    left: {
      key: 'rollOnBottles',
      image: 'https://www.jarsking.com/wp-content/uploads/2025/07/safe-roller-bottles-for-aromatherapy.webp',
    },
    right: {
      key: 'sprayBottles',
      image: 'https://www.jarsking.com/wp-content/uploads/2025/01/Luxury-matte-spray-bottle.webp',
    },
  },
  {
    left: {
      key: 'tonerBottles',
      image: 'https://www.jarsking.com/wp-content/uploads/2025/09/skincare-bottle-packaging-for-hydrating-toner.webp',
    },
    right: {
      key: 'sunscreenPackaging',
      image: 'https://www.jarsking.com/wp-content/uploads/2024/10/11-1.jpg',
    },
  },
]

export default function SkincareSolutions() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-14">
          {t('allApplications.categories.skincare.title', { defaultValue: 'Skincare Packaging Solutions' })}
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
                    alt={t(`allApplications.products.${pair.left.key}.imageAlt`, { defaultValue: '' })}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-montserrat text-2xl md:text-[28px] font-normal leading-[1.4] text-[#1E1E1E] mb-4">
                    {t(`allApplications.products.${pair.left.key}.title`, { defaultValue: '' })}
                  </h3>
                  <p className="text-[15px] text-[#7A7A7A] font-poppins leading-relaxed">
                    {t(`allApplications.products.${pair.left.key}.description`, { defaultValue: '' })}
                  </p>
                </div>
              </div>

              {/* Right Card */}
              <div className="bg-[#f9f9f9] rounded-xl overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={pair.right.image}
                    alt={t(`allApplications.products.${pair.right.key}.imageAlt`, { defaultValue: '' })}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-montserrat text-2xl md:text-[28px] font-normal leading-[1.4] text-[#1E1E1E] mb-4">
                    {t(`allApplications.products.${pair.right.key}.title`, { defaultValue: '' })}
                  </h3>
                  <p className="text-[15px] text-[#7A7A7A] font-poppins leading-relaxed">
                    {t(`allApplications.products.${pair.right.key}.description`, { defaultValue: '' })}
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
