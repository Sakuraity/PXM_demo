import Image from 'next/image'

export default function PackagingSuggestion() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-[8%]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left: Product Image */}
          <div className="relative">
            <Image
              src="https://www.jarsking.com/wp-content/uploads/2025/10/as-outer-pp-inner-refillable-jar-1024x1024.webp"
              alt="as outer pp inner refillable jar"
              width={1024}
              height={1024}
              className="w-full h-auto rounded-lg"
              unoptimized
            />
          </div>

          {/* Right: Story Text */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-[#7A7A7A] text-sm uppercase tracking-wide font-poppins">
              Packaging Suggestion:
            </p>
            <div className="text-[#7A7A7A] text-base leading-relaxed space-y-4 font-poppins">
              <p>
                When N, a gentle baby care brand devoted to clean ingredients and sustainable living, prepared to launch its &quot;Pure Touch Refillable Care Set&quot;, they faced a familiar challenge — how to protect their delicate, preservative-light formulas while staying true to their eco values.
              </p>
              <p>
                That&apos;s when they partnered with Jarsking.
              </p>
              <p>
                To meet the brand&apos;s high safety and sustainability standards, Jarsking developed a refillable airless packaging system — combining a wear-resistant, durable outer shell with a PP inner refill container. This design not only safeguarded N&apos;s sensitive baby lotions and barrier creams from oxidation and contamination but also provided parents with a clean, hygienic dispensing experience.
              </p>
              <p>
                Every 30g and 50g airless jar was designed with soft neutral tones and minimal embellishment — conveying purity, safety, and gentle care. The smooth, rounded jar contours made them comfortable to hold, even during one-handed use, while the airless system ensured zero backflow, keeping every drop fresh and safe for baby skin.
              </p>
              <p>
                For their eco-luxury launch, N highlighted how every refill reduces waste — a promise to future generations. From baby boutiques to eco-parenting communities, the collection resonated deeply, proving that sustainability and baby safety can coexist in perfect harmony.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
