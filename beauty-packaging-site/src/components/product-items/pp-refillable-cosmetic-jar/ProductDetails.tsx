import Image from 'next/image'

export default function ProductDetails() {
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
              PRODUCT DETAILS
            </h2>
            <div className="text-white text-[17px] font-light leading-[31px] space-y-1">
              <p>
                <strong className="font-semibold">Product Name:</strong> PP Refillable Cosmetic Jar with Replaceable Inner Cup
              </p>
              <p>
                <strong className="font-semibold">Capacity:</strong> 110g, 240g
              </p>
              <p>
                <strong className="font-semibold">Color:</strong> Customized
              </p>
              <p>
                <strong className="font-semibold">Material:</strong> PP outer and inner core
              </p>
              <p>
                <strong className="font-semibold">Use:</strong> personal care and cosmetic brands.
              </p>
              <p>
                <strong className="font-semibold">MOQ:</strong> 10000pcs
              </p>
              <p className="pt-2">
                <strong className="font-semibold">Delivery Packing:</strong> Standard export carton packing
              </p>
              <p className="pt-2">
                <strong className="font-semibold">Surface Treatment:</strong> Silk screen, frosting, electroplating, color coating, 3D printing, hot stamping
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
