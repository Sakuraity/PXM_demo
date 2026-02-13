export default function SustainableFuture() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">
            Let&apos;s Create a Sustainable Future Together
          </h2>
          <p className="text-gray-600">Grow your business with eco-friendly alternatives to packaging.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Our commitment to sustainable sourcing prioritizes recyclable materials including glass, PCR, and PLA. This strategy minimizes waste, lowers environmental impact, and fosters a circular economy to promote a greener future.
            </p>
            <a href="/all-materials/eco-friendly-cosmetic-packaging/" className="block relative h-[300px] rounded-lg overflow-hidden group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: 'url(https://www.jarsking.com/wp-content/uploads/2024/12/glass-1024x683.webp)' }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold">Material Sourcing</h2>
              </div>
            </a>
          </div>

          <div>
            <a href="/collections/refillable-cosmetics-packaging/" className="block relative h-[300px] rounded-lg overflow-hidden group mb-4">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: 'url(https://www.jarsking.com/wp-content/uploads/2025/09/bamboo-cap-cosmetic-bottles-for-organic-brands-1024x1024.webp)' }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold">Structure Engineering</h2>
              </div>
            </a>
            <p className="text-sm text-gray-600 leading-relaxed">
              We engineer innovative packaging structures featuring replaceable and refillable systems to reduce waste, extend product lifecycle, and enhance usability. Our designs promote environmental responsibility while offering sustainable, user-friendly solutions.
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Our ESG commitment drives practices, environmental stewardship, and social responsibility. We integrate sustainable strategies across operations, ensuring transparency, accountability, and value creation while contributing to communities and preserving natural resources.
            </p>
            <a href="/sustainability/" className="block relative h-[300px] rounded-lg overflow-hidden group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: 'url(https://www.jarsking.com/wp-content/uploads/2025/04/ESG-1024x1024.webp)' }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold">ESG</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
