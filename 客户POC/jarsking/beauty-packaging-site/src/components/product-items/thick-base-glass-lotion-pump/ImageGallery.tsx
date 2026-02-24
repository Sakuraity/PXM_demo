import Image from 'next/image'

export default function ImageGallery() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-[8%]">
        {/* Gallery Row 1: Two equal columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src="https://www.jarsking.com/wp-content/uploads/2026/02/raspberry-bottle-design-OEM-ODM.webp"
              alt="raspberry bottle design OEM ODM"
              width={750}
              height={1123}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src="https://www.jarsking.com/wp-content/uploads/2026/02/beauty-packaging-coating-design.webp"
              alt="beauty packaging coating design"
              width={750}
              height={1106}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Gallery Row 2: Left tall image + Right two stacked images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src="https://www.jarsking.com/wp-content/uploads/2026/02/lotion-bottle-and-jar-components.webp"
              alt="lotion bottle and jar components"
              width={750}
              height={1781}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
          <div className="space-y-6">
            <div className="relative w-full overflow-hidden rounded-lg">
              <Image
                src="https://www.jarsking.com/wp-content/uploads/2026/02/skincare-packaging-3D-molding.webp"
                alt="skincare packaging 3D molding"
                width={750}
                height={377}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
            <div className="relative w-full overflow-hidden rounded-lg">
              <Image
                src="https://www.jarsking.com/wp-content/uploads/2026/02/skincare-packaging-set-size-chart.webp"
                alt="skincare packaging set size chart"
                width={750}
                height={1048}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
