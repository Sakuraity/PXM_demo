import Image from 'next/image'

export default function ImageGallery() {
  return (
    <section className="px-[8%] py-4">
      {/* Row 1: Two images side by side — left 47.3% / right 52.7% */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <div className="lg:w-[47.3%] overflow-hidden">
          <Image
            src="https://www.jarsking.com/wp-content/uploads/2026/02/eco-friendly-packaging-set-for-skincare.webp"
            alt="eco-friendly packaging set for skincare"
            width={750}
            height={1100}
            className="w-full h-auto object-cover"
            unoptimized
          />
        </div>
        <div className="lg:w-[52.7%] overflow-hidden">
          <Image
            src="https://www.jarsking.com/wp-content/uploads/2026/02/cream-jar-decoration-design.webp"
            alt="cream jar decoration design"
            width={750}
            height={980}
            className="w-full h-auto object-cover"
            unoptimized
          />
        </div>
      </div>

      {/* Row 2: Left tall image (~41%) + Right two stacked images (~59%) */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-[41%] overflow-hidden">
          <Image
            src="https://www.jarsking.com/wp-content/uploads/2026/02/refillable-cream-jar-components.webp"
            alt="refillable cream jar components"
            width={750}
            height={1199}
            className="w-full h-auto object-cover"
            unoptimized
          />
        </div>
        <div className="lg:w-[59%] flex flex-col gap-4">
          <div className="overflow-hidden">
            <Image
              src="https://www.jarsking.com/wp-content/uploads/2026/02/cream-jar-3D-effect.webp"
              alt="cream jar 3D effect"
              width={750}
              height={396}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
          <div className="overflow-hidden">
            <Image
              src="https://www.jarsking.com/wp-content/uploads/2026/02/cream-jar-110g-240g.webp"
              alt="cream jar 110g 240g"
              width={750}
              height={496}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
