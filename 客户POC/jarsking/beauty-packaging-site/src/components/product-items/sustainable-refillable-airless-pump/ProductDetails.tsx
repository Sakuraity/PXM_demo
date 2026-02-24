import Image from 'next/image'

export default function ProductDetails() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-[8%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Product Image */}
          <div className="relative aspect-square">
            <Image
              src="https://www.jarsking.com/wp-content/uploads/2025/10/recyclable-skincare-packaging-design.webp"
              alt="recyclable skincare packaging design"
              fill
              className="object-cover rounded-lg"
              unoptimized
            />
          </div>

          {/* Right: Product Details */}
          <div>
            <h2 className="text-[40px] font-medium text-[#1E1E1E] mb-8 font-montserrat leading-[1.2]">
              PRODUCT DETAILS
            </h2>
            <div className="text-[#7A7A7A] text-base leading-relaxed space-y-2 font-poppins">
              <p>
                <strong className="text-[#1E1E1E]">Product Name:</strong> Custom Eco-Friendly Luxury Skincare Packaging
              </p>
              <p>
                <strong className="text-[#1E1E1E]">Capacity:</strong> 30g / 50g jars
              </p>
              <p>
                <strong className="text-[#1E1E1E]">Color:</strong> Customized
              </p>
              <p>
                <strong className="text-[#1E1E1E]">Material:</strong> AS outer design, PP inner refills
              </p>
              <p>
                <strong className="text-[#1E1E1E]">Use:</strong> Serums, creams, and emulsions
              </p>
              <p>
                <strong className="text-[#1E1E1E]">MOQ:</strong> 10000pcs
              </p>
              <p className="pt-2">
                <strong className="text-[#1E1E1E]">Delivery Packing:</strong> Standard export carton packing
              </p>
              <p className="pt-2">
                <strong className="text-[#1E1E1E]">Surface Treatment:</strong> Silk screen, frosting, electroplating, color coating, 3D printing, hot stamping
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
