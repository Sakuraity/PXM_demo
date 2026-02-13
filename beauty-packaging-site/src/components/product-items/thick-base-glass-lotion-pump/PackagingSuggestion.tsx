import Image from 'next/image'

export default function PackagingSuggestion() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#f8f6f3] to-[#eee8e0]">
      <div className="container mx-auto px-[8%]">
        {/* Top Row: Left image + Right text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          <div className="relative">
            <Image
              src="https://www.jarsking.com/wp-content/uploads/2026/02/pastel-color-skincare-gift-set.webp"
              alt="pastel color skincare gift set"
              width={1792}
              height={2400}
              className="w-full h-auto rounded-lg"
              unoptimized
            />
          </div>
          <div className="space-y-6 pt-4">
            <p className="text-[#7A7A7A] text-sm uppercase tracking-wide font-poppins">
              Packaging Suggestion:
            </p>
            <p className="text-[#7A7A7A] text-base leading-relaxed font-poppins">
              The Client Profile: A prestige skincare brand preparing a limited-edition holiday gift set for department-store counters and VIP influencer seeding. The concept was a curated &quot;multi-step ritual&quot; presented as a collectible box—multiple glass bottles plus glass cream jars in coordinated pastel tones, all unified under bold, modern typography.
            </p>
            <p className="text-[#7A7A7A] text-base leading-relaxed font-poppins">
              The Challenge: The brand needed packaging that signals luxury instantly (weight, clarity, and perceived value), but also stays consistent across mixed formats (tall bottles + low jars). The set had to look premium under retail lighting, photograph beautifully for campaign visuals, and remain secure in bulk shipment—without scuffs, rattling, or misalignment inside the gift box.
            </p>
          </div>
        </div>

        {/* Bottom Row: Left text + Right image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-[#7A7A7A] text-base leading-relaxed font-poppins">
              The Jarsking Solution: Jarsking developed a cohesive glass packaging family and paired it with a precision-fit presentation insert to keep every component stable and &quot;museum-displayed&quot; on opening. Color-coded pastel coatings distinguish each step of the routine while maintaining one brand system, and the bold front decoration ensures high legibility in e-commerce thumbnails and counter displays. The result is a limited-edition set that increases perceived value, supports wholesale-ready bulk production, and gives the client a scalable template for future seasonal drops (same structure, new colors/decoration).
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://www.jarsking.com/wp-content/uploads/2026/02/pastel-palette-gift-set.webp"
              alt="pastel palette gift set"
              width={1500}
              height={1500}
              className="w-full h-auto rounded-lg"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
