import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'

export default function SuccessStoriesPage() {
  const breadcrumbItems = [
    { label: 'Success Stories' }
  ]

  const stories = [
    {
      client: 'LuxBeauty Brand',
      industry: 'Premium Skincare',
      image: '/images/products/skincare-collection-1024x768.webp',
      challenge: 'Needed sustainable yet premium packaging for their new organic line.',
      solution: 'Developed custom frosted glass bottles with bamboo caps, achieving 100% recyclable packaging.',
      result: '40% increase in brand perception scores and featured in Vogue Beauty Awards.'
    },
    {
      client: 'GloWell Cosmetics',
      industry: 'Clean Beauty',
      image: '/images/products/new-design-bottle-e1730775751520-1024x768.jpg',
      challenge: 'Required refillable packaging system to support their zero-waste commitment.',
      solution: 'Created innovative airless pump system with replaceable inner cartridges.',
      result: 'Reduced packaging waste by 65% and won Sustainable Beauty Award 2023.'
    },
    {
      client: 'Essence Naturals',
      industry: 'Aromatherapy',
      image: '/images/products/essential-oil-bottle.webp',
      challenge: 'Sought UV-protective packaging for light-sensitive essential oils.',
      solution: 'Designed amber glass bottles with precision dropper caps and child safety features.',
      result: 'Extended product shelf life by 18 months and achieved 99.5% customer satisfaction.'
    },
    {
      client: 'PureCare Pharma',
      industry: 'Dermocosmetics',
      image: '/images/products/cream-jar-e1730775980312-1024x768.jpg',
      challenge: 'Needed medical-grade packaging that meets strict pharmaceutical standards.',
      solution: 'Developed airless jars with dual-chamber technology for sensitive formulations.',
      result: 'Obtained FDA approval and launched in 12 international markets within 6 months.'
    }
  ]

  return (
    <div className="min-h-screen">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Success <span className="text-gradient">Stories</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover how leading beauty brands have transformed their packaging 
            and elevated their market presence with Jarsking solutions.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-16">
            {stories.map((story, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.client}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full mb-4">
                    {story.industry}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                    {story.client}
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-secondary uppercase tracking-wide mb-1">Challenge</p>
                      <p className="text-primary">{story.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary uppercase tracking-wide mb-1">Solution</p>
                      <p className="text-primary">{story.solution}</p>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <p className="text-sm text-secondary uppercase tracking-wide mb-1">Result</p>
                      <p className="text-primary font-medium">{story.result}</p>
                    </div>
                  </div>

                  <Link 
                    href={`/products`}
                    className="inline-flex items-center text-accent hover:underline"
                  >
                    View Similar Products
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-secondary">
              Trusted by leading brands worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Jarsking transformed our packaging from ordinary to extraordinary. Their attention to detail and quality is unmatched.",
                author: "Sarah Chen",
                role: "Product Director, LuxBeauty"
              },
              {
                quote: "The refillable packaging solution they developed helped us achieve our sustainability goals while reducing costs by 30%.",
                author: "Michael Torres",
                role: "CEO, GloWell Cosmetics"
              },
              {
                quote: "Working with Jarsking feels like having an extension of our own team. They truly understand our vision.",
                author: "Emma Williams",
                role: "Founder, Essence Naturals"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-secondary mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            Partner with us to create packaging solutions that drive real business results.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
