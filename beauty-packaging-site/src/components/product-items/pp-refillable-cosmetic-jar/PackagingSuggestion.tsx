import Image from 'next/image'

export default function PackagingSuggestion() {
  return (
    <section
      className="relative my-[80px] py-[30px] overflow-hidden"
      style={{ backgroundImage: 'linear-gradient(180deg, #03050C 0%, #0D2068 100%)' }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-10 bg-no-repeat bg-left-bottom"
        style={{
          backgroundImage: 'url(https://www.jarsking.com/wp-content/uploads/2026/02/generation-z.png)',
          backgroundSize: '28% auto',
        }}
      />

      <div className="relative z-10 px-[8%]">
        {/* Top Row: Image left (~35.8%) + Text right (~64.2%) */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="lg:w-[35.8%]">
            <Image
              src="https://www.jarsking.com/wp-content/uploads/2026/02/Gen-Z-Cosmetic-Collage-Poster.webp"
              alt="Gen Z Cosmetic Collage Poster"
              width={1792}
              height={2400}
              className="w-full h-auto"
              unoptimized
            />
          </div>
          <div className="lg:w-[64.2%] flex flex-col justify-center lg:mx-[40px] lg:mr-[100px]">
            <p className="text-white text-[35px] font-normal font-roboto my-[20px]">
              Packaging Suggestion:
            </p>
            <p className="text-white text-[17px] font-light leading-[35px]">
              The Client Profile: A trend-forward skincare brand building a bright, efficacy-led &quot;problem/solution&quot; range for Vitamin C creams and blackhead removal masks, targeting Gen Z / young millennial buyers across DTC and retail. They needed packaging that looks modern on-shelf and consistent across multiple SKUs for scalable rollout.
            </p>
            <p className="text-white text-[17px] font-light leading-[35px] mt-[20px]">
              <strong className="font-semibold">The Challenge:</strong> The brand struggled with crowded shelves and short attention spans: labels looked &quot;same as everyone,&quot; and product benefits didn&apos;t read instantly from 1–2 meters away. They also needed fast sampling for launch timelines and a packaging system that could keep visual consistency while differentiating formulas by color.
            </p>
          </div>
        </div>

        {/* Bottom Row: Text left (~65.1%) + Image right (~34.9%) */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-[65.1%] flex flex-col justify-center lg:ml-[100px] lg:mr-[40px] rounded-tl-[50px]">
            <p className="text-white text-[17px] font-light leading-[35px]">
              <strong className="font-semibold">The Jarsking Solution:</strong> Jarsking developed a custom jar program optimized for <strong className="font-semibold">high-impact typography</strong> and <strong className="font-semibold">color-block differentiation</strong>—deep blue jars for &quot;CREAM&quot; SKUs and vivid yellow for &quot;MASK,&quot; paired with bold, legible decoration for immediate benefit communication (e.g., Vitamin C / blackhead focus). The clean cylindrical form supports premium photography, strong stacking displays, and consistent branding across a full regimen set. With OEM/ODM execution for bulk production, the client could standardize the jar silhouette while updating color + print for new drops, improving shelf recognition and speeding SKU expansion.
            </p>
          </div>
          <div className="lg:w-[34.9%]">
            <Image
              src="https://www.jarsking.com/wp-content/uploads/2026/02/mask-jar-design-skincare.webp"
              alt="mask jar design skincare"
              width={2048}
              height={2048}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
