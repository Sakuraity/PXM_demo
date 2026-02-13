'use client'

import { 
  Palette, 
  Calendar, 
  Zap, 
  CheckCircle, 
  Box, 
  Warehouse, 
  Send, 
  Phone, 
  Clock, 
  Leaf 
} from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Free Design and Samples',
    description: 'Jarsking offers free design and samples to ensure packaging meets your needs, giving you peace of mind.'
  },
  {
    icon: Calendar,
    title: '15 Days Prototype Molding',
    description: 'Jarsking specializes in creating precise prototype molds, with physical samples ready in 15 days for testing.'
  },
  {
    icon: Zap,
    title: '1hr from Concept to Design',
    description: 'Need a design fast? Jarsking can deliver your concept to design in just 1 hour, ensuring a quick start to your project.'
  },
  {
    icon: CheckCircle,
    title: '30-Day Bulk Order Completion',
    description: 'Jarsking\'s efficient process ensures bulk orders are completed within 30 days, keeping your product on track.'
  },
  {
    icon: Box,
    title: '2hrs from Graphic to 3D Rendering',
    description: 'See your packaging come to life with 3D rendering, ready for review within 2 hours, so to make informed decisions.'
  },
  {
    icon: Warehouse,
    title: '30,000+ Ready Molds in Stock',
    description: 'With over 30,000 pre-designed molds in our factories, We offers extensive options to meet your needs.'
  },
  {
    icon: Send,
    title: '3 Days Sample Production',
    description: 'Jarsking team can deliver physical samples in just 3 days, so you can quickly see your ideas come to life.'
  },
  {
    icon: Phone,
    title: '2 Days After-Sales Solution Support',
    description: 'Jarsking is committed to customer satisfaction, offering after-sales support within 2 days if needed.'
  },
  {
    icon: Clock,
    title: '4 Days Urgent Bulk Order',
    description: 'Need a rush order? Jarsking delivers small bulk orders in just 4 days to meet your tight schedules.'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Packaging',
    description: 'Select sustainable, recyclable, refillable, and biodegradable packaging to minimize environmental impact.'
  }
]

export default function ServiceAdvantages() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
