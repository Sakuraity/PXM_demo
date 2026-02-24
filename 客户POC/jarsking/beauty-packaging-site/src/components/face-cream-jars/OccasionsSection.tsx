import Link from 'next/link'

const occasionGroups = [
  {
    items: [
      {
        title: 'Daily Skincare Routine',
        description:
          'Face cream jars are widely used for daily skincare routines, especially for moisturizing and nourishing the skin. They are designed to preserve the integrity of the product, providing easy access for users while maintaining hygiene. Whether it\'s for morning hydration or night repair, face cream jars play a crucial role in the effectiveness of skincare products.',
        image: 'https://www.jarsking.com/wp-content/uploads/2024/09/08_0003.jpg',
        alt: 'matte 50g Cosmetic Glass Jar Face Cream Jar',
      },
      {
        title: 'Seasonal Promotions',
        description:
          'Face cream jars can be used in seasonal skincare campaigns, such as a fall or winter collection. During colder months, brands may create special products with nourishing ingredients to combat dry skin. Packaging the cream in a stylish jar with seasonal motifs can elevate the experience and attract customers looking for skincare solutions during colder weather.',
        image: 'https://www.jarsking.com/wp-content/uploads/2024/12/amber-cream-jar.webp',
        alt: 'amber cream jar',
      },
    ],
  },
  {
    items: [
      {
        title: 'Holiday and Special Occasion',
        description:
          'Face cream jars are ideal for gift sets and holiday-themed packaging. For occasions like Christmas, Mother\'s Day, or birthdays, skincare brands often offer face creams as part of luxurious gift sets. The jars can be customized with elegant designs, offering a premium feel for customers looking to treat loved ones to skincare gifts.',
        image: 'https://www.jarsking.com/wp-content/uploads/2024/12/christmas-gift-box.webp',
        alt: 'christmas gift box',
      },
      {
        title: 'Spa and Wellness Kits',
        description:
          'Face cream jars are frequently included in spa and wellness packages, where premium products are offered for relaxation and rejuvenation. The jar\'s sleek design can complement the overall luxury experience, whether the product is marketed for use at spas, salons, or home treatments.',
        image: 'https://www.jarsking.com/wp-content/uploads/2024/12/face-cream-jar.webp',
        alt: 'face cream jar',
      },
      {
        title: 'Personalized Skincare Lines',
        description:
          'Customizable face cream jars can be used for branded skincare lines targeting niche markets. For example, a brand focused on organic, cruelty-free, or natural ingredients can design face cream jars that reflect its values and resonate with eco-conscious consumers.',
        image: 'https://www.jarsking.com/wp-content/uploads/2024/10/cj60000.jpg',
        alt: 'Face Cream Glass Jar with Bamboo Lid',
      },
    ],
  },
  {
    items: [
      {
        title: 'Exclusive or Limited-Edition Launches',
        description:
          'Face cream jars can be the centerpiece of exclusive or limited-edition product launches. The packaging is a key aspect of creating a sense of exclusivity. Luxury skincare brands often launch special versions of their products in unique packaging, making the face cream jar a coveted item among consumers.',
        image: 'https://www.jarsking.com/wp-content/uploads/2025/07/glass-jar-for-new-product-launch-1.webp',
        alt: 'glass jar for new product launch',
      },
      {
        title: 'Travel Size and Convenience',
        description:
          'Smaller face cream jars are popular for travel-sized products. Offering face creams in compact jars that comply with travel regulations makes it easier for consumers to carry their skincare essentials without the hassle of large containers. Travel-friendly jars also serve as promotional items, encouraging people to try a product during a trip.',
        image: 'https://www.jarsking.com/wp-content/uploads/2024/12/cream-jar-new-design.webp',
        alt: 'cream jar new design',
      },
      {
        title: 'Private Labeling and Subscription Boxes',
        description:
          'Face cream jars are commonly used in private labeling or subscription box services. Brands can supply these jars to customers who prefer curated skincare products or those looking to discover new skincare brands. The jars can be personalized with the brand\'s logo, making it an ideal choice for niche market offerings.',
        image: 'https://www.jarsking.com/wp-content/uploads/2024/12/cosmetic-packaging-set.webp',
        alt: 'cosmetic packaging set',
      },
    ],
  },
]

export default function OccasionsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h3 className="font-montserrat text-2xl md:text-[28px] font-normal leading-[1.4] text-[#1E1E1E] text-center mb-4">
          Face Cream Jars for Every Occasion
        </h3>
        <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed text-center max-w-4xl mx-auto mb-12">
          Face cream jars are more than just functional packaging; they serve as a powerful marketing tool across various occasions, promoting skincare products in a visually appealing and practical manner. Whether for everyday use, seasonal promotions, or special events, face cream jars can be customized to fit a wide range of marketing strategies.
        </p>

        <div className="space-y-12">
          {occasionGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`grid grid-cols-1 ${
                group.items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
              } gap-8`}
            >
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-[#f9f9f9] rounded-xl overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-montserrat text-xl md:text-2xl font-normal leading-[1.4] text-[#1E1E1E] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#7A7A7A] font-poppins leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact-jarsking/"
            className="inline-block bg-[#61CE70] hover:bg-[#50b85e] text-white font-medium px-8 py-3 rounded transition-colors"
          >
            Custimize Your Design Now!
          </Link>
        </div>
      </div>
    </section>
  )
}
