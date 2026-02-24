'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function ProductDetails() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden">
      {/* Background color with overlay */}
      <div className="absolute inset-0 bg-[#AD4D32]" />
      <div className="absolute inset-0 bg-[#AD4D32] opacity-50" />

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left: Product Image — ~40% */}
          <div className="lg:w-[40%] relative min-h-[400px] lg:min-h-[600px]">
            <Image
              src="https://www.jarsking.com/wp-content/uploads/2026/02/replaceable-cream-jar-with-cute-design-scaled.webp"
              alt="replaceable cream jar with cute design"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Right: Product Details — ~60% with left margin */}
          <div className="lg:w-[60%] py-12 px-8 lg:ml-[70px] lg:pr-[8%] flex flex-col justify-center">
            <h2 className="text-[40px] lg:text-[50px] font-medium text-[#FFF8F8] mb-8 leading-[1.2]">
              {t('ppRefillableJar.productDetails.title', { defaultValue: 'PRODUCT DETAILS' })}
            </h2>
            <div className="text-white text-[17px] font-light leading-[31px] space-y-1">
              <p>
                <strong className="font-semibold">{t('ppRefillableJar.productDetails.productName', { defaultValue: 'Product Name' })}:</strong> {t('ppRefillableJar.productDetails.productNameValue', { defaultValue: 'PP Refillable Cosmetic Jar with Replaceable Inner Cup' })}
              </p>
              <p>
                <strong className="font-semibold">{t('ppRefillableJar.productDetails.capacity', { defaultValue: 'Capacity' })}:</strong> 110g, 240g
              </p>
              <p>
                <strong className="font-semibold">{t('ppRefillableJar.productDetails.color', { defaultValue: 'Color' })}:</strong> {t('ppRefillableJar.productDetails.colorValue', { defaultValue: 'Customized' })}
              </p>
              <p>
                <strong className="font-semibold">{t('ppRefillableJar.productDetails.material', { defaultValue: 'Material' })}:</strong> {t('ppRefillableJar.productDetails.materialValue', { defaultValue: 'PP outer and inner core' })}
              </p>
              <p>
                <strong className="font-semibold">{t('ppRefillableJar.productDetails.use', { defaultValue: 'Use' })}:</strong> {t('ppRefillableJar.productDetails.useValue', { defaultValue: 'personal care and cosmetic brands.' })}
              </p>
              <p>
                <strong className="font-semibold">{t('ppRefillableJar.productDetails.moq', { defaultValue: 'MOQ' })}:</strong> 10000pcs
              </p>
              <p className="pt-2">
                <strong className="font-semibold">{t('ppRefillableJar.productDetails.deliveryPacking', { defaultValue: 'Delivery Packing' })}:</strong> {t('ppRefillableJar.productDetails.deliveryPackingValue', { defaultValue: 'Standard export carton packing' })}
              </p>
              <p className="pt-2">
                <strong className="font-semibold">{t('ppRefillableJar.productDetails.surfaceTreatment', { defaultValue: 'Surface Treatment' })}:</strong> {t('ppRefillableJar.productDetails.surfaceTreatmentValue', { defaultValue: 'Silk screen, frosting, electroplating, color coating, 3D printing, hot stamping' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
