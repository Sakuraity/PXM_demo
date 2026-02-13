'use client'

import { Palette, Calendar, Zap, CheckCircle, Box, Warehouse, Send, Phone, Clock, Leaf } from 'lucide-react'

const services = [
  { icon: Palette, title: 'Free Design and Samples', desc: 'Jarsking offers free design and samples to ensure packaging meets your needs, giving you peace of mind.' },
  { icon: Zap, title: '1hr from Concept to Design', desc: 'Need a design fast? Jarsking can deliver your concept to design in just 1 hour, ensuring a quick start to your project.' },
  { icon: Box, title: '2hrs from Graphic to 3D Rendering', desc: 'See your packaging come to life with 3D rendering, ready for review within 2 hours, so to make informed decisions.' },
  { icon: Send, title: '3 Days Sample Production', desc: 'Jarsking team can deliver physical samples in just 3 days, so you can quickly see your ideas come to life.' },
  { icon: Clock, title: '4 Days Urgent Bulk Order', desc: 'Need a rush order? Jarsking delivers small bulk orders in just 4 days to meet your tight schedules.' },
  { icon: Calendar, title: '15 Days Prototype Molding', desc: 'Jarsking specializes in creating precise prototype molds, with physical samples ready in 15 days for testing.' },
  { icon: CheckCircle, title: '30-Day Bulk Order Completion', desc: "Jarsking's efficient process ensures bulk orders are completed within 30 days, keeping your product on track." },
  { icon: Warehouse, title: '30,000+ Ready Molds in Stock', desc: 'With over 30,000 pre-designed molds in our factories, We offers extensive options to meet your needs.' },
  { icon: Phone, title: '2 Days After-Sales Solution Support', desc: 'Jarsking is committed to customer satisfaction, offering after-sales support within 2 days if needed.' },
  { icon: Leaf, title: 'Eco-Friendly Packaging', desc: 'Select sustainable, recyclable, refillable, and biodegradable packaging to minimize environmental impact.' },
]

export default function ServiceAdvantages() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="text-center group">
                <div className="w-14 h-14 bg-[#c8a97e] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-sm font-bold text-[#1a1a2e] mb-2 leading-tight">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
