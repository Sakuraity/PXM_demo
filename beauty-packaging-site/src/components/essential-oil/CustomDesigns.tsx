
const designs = [
  {
    title: 'Diverse Custom Options',
    description: 'Explore our samples and vast customization options. From color, volume, shape, to material, we offer tailored solutions for all your needs.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/Jarsking-designer-1024x683.jpg',
    alt: 'Jarsking designer',
  },
  {
    title: 'Creative Designer Team',
    description: 'Our team boasts over 20 professional designers, offering a diverse range of design styles to meet your unique needs.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/Jarsking-design-team-1024x683.jpg',
    alt: 'Jarsking design team',
  },
  {
    title: 'Rapid Design Innovation',
    description: 'Our design process is swift, achieving product design and 3D mockup in as fast as 4 hours, streamlining your project timeline efficiently.',
    image: 'https://www.jarsking.com/wp-content/uploads/2024/11/Jarsking-design-1024x683.jpg',
    alt: 'Jarsking design',
  },
]

export default function CustomDesigns() {
  return (
    <section className="w-full bg-[#f5f5f0] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-3xl md:text-[40px] font-medium leading-[1.2] text-[#1E1E1E] text-center mb-14">
          Expert Custom Designs in Wholesale Essential Oil Bottles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={design.image}
                  alt={design.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat text-xl md:text-2xl font-normal leading-[1.4] text-[#1E1E1E] mb-2">
                  {design.title}
                </h3>
                <p className="text-sm text-[#7A7A7A] font-poppins leading-relaxed">
                  {design.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
