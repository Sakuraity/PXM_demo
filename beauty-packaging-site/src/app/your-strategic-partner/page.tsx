import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Users, Globe, Zap } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'

export default function AboutPage() {
  const breadcrumbItems = [
    { label: 'About' }
  ]

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'ISO certified manufacturing with strict quality control standards ensuring every product meets international requirements.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Dedicated team providing personalized service from design consultation to after-sales support.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving beauty brands worldwide with reliable logistics and localized support across major markets.'
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description: 'Continuous R&D investment to bring cutting-edge packaging solutions that set trends in the industry.'
    }
  ]

  return (
    <div className="min-h-screen">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Your Strategic Partner in
                <span className="text-gradient"> Cosmetic Packaging</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                With over 15 years of experience, Jarsking has established itself as a 
                leading manufacturer of premium cosmetic packaging solutions. We combine 
                innovative design, sustainable practices, and uncompromising quality to 
                help beauty brands bring their vision to life.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-brand-orange/20 rounded-2xl p-8">
                <Image
                  src="/images/products/Violet-Glass-Bottles-01.jpg.webp"
                  alt="Jarsking Factory"
                  width={500}
                  height={500}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-accent text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">1000+</p>
              <p className="text-sm opacity-90">Global Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">5000+</p>
              <p className="text-sm opacity-90">Products</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-sm opacity-90">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capability */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                World-Class Manufacturing
              </h2>
              <p className="text-secondary leading-relaxed mb-6">
                Our state-of-the-art production facilities span over 50,000 square meters, 
                equipped with advanced injection molding, blow molding, and decoration 
                technologies. We maintain strict quality control throughout the entire 
                production process.
              </p>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  ISO 9001 & ISO 14001 Certified
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  100,000级无尘生产车间
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Automated production lines
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  In-house R&D laboratory
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/images/products/personal-care-set-1024x768.webp"
                  alt="Manufacturing Facility"
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
            Ready to Start Your Project?
          </h2>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            Let us help you create packaging that elevates your brand and delights your customers.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Get in Touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
