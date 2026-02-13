
const guides = [
  {
    title: 'Premium Materials',
    description:
      'Sourcing premium materials is crucial for manufacturing durable essential oil bottles that offer superior protection and preserve product integrity. At Jarsking, we prioritize high-quality glass, metal, and sustainable materials to ensure every bottle meets the highest standards of durability and safety.',
    image: 'https://www.jarsking.com/wp-content/uploads/2023/06/Custom-Essential-Oil-Bottles-03-1024x683.jpg',
    alt: 'Custom Essential Oil Bottles 03',
  },
  {
    title: 'We Care the Environment',
    description:
      'Cosmetic and beauty packaging companies are increasingly expected to adopt sustainable practices to protect the environment. At Jarsking, part of our commitment to reducing our carbon footprint involves using eco-friendly materials and processes in our essential oil bottle manufacturing.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/bamboo-essential-oil-bottle-e1730960862878.jpg',
    alt: 'bamboo essential oil bottle',
  },
  {
    title: 'Attractive Designs',
    description:
      'Design matters because your essential oil bottle and essential oil packaging boxes are often the first points of contact between your brand and potential customers. They\'re not just containers—they\'re powerful marketing tools that can make or break a sale.',
    image: 'https://www.jarsking.com/wp-content/uploads/2023/05/Dropper-bottle-with-box.jpg',
    alt: 'Dropper bottle with box',
  },
  {
    title: 'For Best Performance',
    description:
      'Enhancing the functionality of your essential oil bottles can significantly improve the user experience for your target audience. For instance, dropper bottles provide precise dosing, ideal for aromatherapy and skincare applications.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/dropper-bottle-new-design-e1730961822655-1024x768.jpg',
    alt: 'dropper bottle new design',
  },
]

export default function MarketableGuides() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-14">
          What Makes Marketable Essential Oil Bottles
        </h2>

        <div className="space-y-16">
          {guides.map((guide, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-10 md:gap-16`}
            >
              <div className="flex-1">
                <h3 className="font-montserrat text-2xl md:text-[28px] font-normal leading-[1.4] text-[#1E1E1E] mb-4">
                  {guide.title}
                </h3>
                <p className="text-base text-[#7A7A7A] font-poppins leading-relaxed">
                  {guide.description}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src={guide.image}
                  alt={guide.alt}
                  className="w-full max-w-[450px] h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
