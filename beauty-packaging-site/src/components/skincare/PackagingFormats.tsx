
import { useTranslation } from 'react-i18next'

const formats = [
  {
    key: 'bottles',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/08/Glossy-surface-HDPE-cosmetic-bottles.webp',
  },
  {
    key: 'jars',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/07/Custom-skincare-jar-with-refillable-liner.webp',
  },
  {
    key: 'vials',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/07/cosmetic-glass-vial.webp',
  },
  {
    key: 'syringes',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/04/syringe.webp',
  },
  {
    key: 'tubes',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/06/soft-tube.webp',
  },
  {
    key: 'ampoules',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/05/ampoules.png',
  },
]

export default function PackagingFormats() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-[#f5f5f0] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-14">
          {t('allApplications.packagingFormats.title', { defaultValue: 'Skincare Packaging Formats' })}
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
                  alt={t(`allApplications.packagingFormats.items.${format.key}.alt`, { defaultValue: '' })}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="font-montserrat text-2xl md:text-[28px] font-medium leading-[1.2] text-[#1E1E1E] mb-3">
                  {t(`allApplications.packagingFormats.items.${format.key}.title`, { defaultValue: '' })}
                </h2>
                <p className="text-sm text-[#7A7A7A] font-poppins leading-relaxed">
                  {t(`allApplications.packagingFormats.items.${format.key}.description`, { defaultValue: '' })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
