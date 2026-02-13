import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Recycle, Droplets, Sun } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'

export default function SustainabilityPage() {
  const breadcrumbItems = [
    { label: 'Sustainability' }
  ]

  const initiatives = [
    {
      icon: Recycle,
      title: 'Recyclable Materials',
      description: 'We prioritize recyclable and biodegradable materials in our product development, reducing environmental impact throughout the product lifecycle.'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Our manufacturing processes are optimized to minimize water usage, with closed-loop systems that recycle and purify water for reuse.'
    },
    {
      icon: Sun,
      title: 'Renewable Energy',
      description: 'Solar panels and energy-efficient equipment power our facilities, significantly reducing our carbon footprint.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Packaging',
      description: 'From production to delivery, we use sustainable packaging solutions that minimize waste and environmental impact.'
    }
  ]

  return (
    <div className="min-h-screen">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full text-accent font-medium text-sm mb-6">
                <Leaf className="w-4 h-4 mr-2" />
                Our Commitment
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Sustainable Packaging for a
                <span className="text-accent"> Better Tomorrow</span>
              </h1>
              <p className="text-lg text-secondary leading-relaxed mb-8">
                At Jarsking, we believe that beautiful packaging should not come at the 
                cost of our planet. Our commitment to sustainability drives every decision 
                we make, from material selection to manufacturing processes.
              </p>
              <Link href="/collections/refillable-cosmetics-packaging" className="btn-primary inline-flex items-center">
                Explore Sustainable Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-green-200 rounded-2xl p-8">
                <Image
                  src="/images/products/refillable-packaging-1024x768.webp"
                  alt="Sustainable Packaging"
                  width={500}
                  height={500}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-accent text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">30%</p>
              <p className="text-sm opacity-90">Carbon Reduction</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50%</p>
              <p className="text-sm opacity-90">Recycled Materials</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">Zero</p>
              <p className="text-sm opacity-90">Waste to Landfill</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-sm opacity-90">Renewable Energy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Sustainability Initiatives
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Concrete actions we take to minimize our environmental footprint
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refillable Collection */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Refillable Packaging Collection
              </h2>
              <p className="text-secondary leading-relaxed mb-6">
                Our refillable packaging solutions are designed to reduce waste and 
                extend product lifecycle. By allowing consumers to refill their containers 
                rather than discard them, we significantly reduce plastic consumption.
              </p>
              <ul className="space-y-3 text-secondary mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Modular design for easy refilling
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Premium materials that last longer
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Compatible with various refill formats
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Reduced packaging waste by up to 70%
                </li>
              </ul>
              <Link href="/collections/refillable-cosmetics-packaging" className="btn-primary inline-flex items-center">
                View Collection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/images/products/refillable-packaging-1024x768.webp"
                  alt="Refillable Packaging"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            Partner with us to create sustainable packaging solutions that protect both 
            your products and our planet.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Start Your Sustainable Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
