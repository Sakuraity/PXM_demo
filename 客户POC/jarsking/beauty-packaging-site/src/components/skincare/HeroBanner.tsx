import { useTranslation } from 'react-i18next'

export default function SkincareHeroBanner() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-[#f5f5f0] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text */}
        <div className="flex-1">
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-[52px] font-semibold leading-[1.2] text-[#1E1E1E] mb-6">
            {t('allApplications.skincareHero.title', { defaultValue: 'Premium Skincare Packaging Solutions for Beauty Brands' })}
          </h1>
          <p className="text-base md:text-lg text-[#7A7A7A] font-poppins leading-relaxed">
            {t('allApplications.skincareHero.description', { defaultValue: 'Jarsking delivers premium skincare packaging that transforms beauty brands into market leaders. Our customizable solutions combine glass, plastic, and aluminum materials to create distinctive brand identities that capture consumer attention and drive sales. With over 20 years of packaging expertise, we understand that exceptional packaging protects product integrity while elevating brand perception in the competitive skincare market.' })}
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://www.jarsking.com/wp-content/uploads/2025/10/skincare-packaging-set-new-design.webp"
            alt={t('allApplications.skincareHero.imageAlt', { defaultValue: 'skincare packaging set new design' })}
            className="w-full max-w-[560px] h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
