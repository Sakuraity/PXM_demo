import Image from 'next/image'

export interface ProductCardProps {
  title: string
  description: string
  image: string
  imageAlt: string
  features: string[]
  idealFor: string
  link: string
}

export default function ProductCard({ title, description, image, imageAlt, features, idealFor, link }: ProductCardProps) {
  return (
    <a href={link} className="block group cursor-pointer">
      <div className="relative overflow-hidden bg-[#f5f0ed] rounded-sm">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10"></div>
        <div className="p-6">
          <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-sm">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
          <h3 className="text-[28px] font-normal leading-[1.4em] text-primary mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {title}
          </h3>
          <p className="text-text text-sm leading-relaxed mb-4">
            {description}
          </p>
          <ul className="space-y-2 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-text">
                <span className="text-accent mt-0.5 flex-shrink-0">›</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-text">
            <strong className="text-primary">Ideal for:</strong> {idealFor}
          </p>
        </div>
      </div>
    </a>
  )
}
