'use client'

import { useState } from 'react'
import { ChevronRight, ChevronUp } from 'lucide-react'

const faqs = [
  { q: 'What is your minimum order quantities (MOQ)?', a: 'Our minimum order quantity (MOQ) depends on the specific product line and customization requirements. Please reach out to our product specialists for detailed information regarding the MOQ for the product you are interested in. Since Jarsking is an established company, manufacturing scale is matter. Therefore in most cases, MOQ for glass containers is 5000 pieces, for plastic containers is 10000 pieces. We strive to accommodate orders of various sizes to meet our customers diverse needs so don\'t hesitate to contact us!' },
  { q: 'Can you produce less than your minimum order quantities (MOQ)?', a: 'We strongly recommend that our customers adhere to our minimum order quantities to mitigate associated setup costs. However, we do accommodate smaller orders for some occasions and strive to fulfill our customers\' specific needs. If you are interested in placing an order for a sample, please reach out to our sales representatives. They will be delighted to assist you in this regard and provide further guidance.' },
  { q: 'How long is the lead time?', a: 'Our current production times typically range from an estimated average of 10 to 30 business days, contingent upon factors such as packaging type, order size, and the time of the year. It\'s important to note that greater customization and the inclusion of additional processes in your custom packaging generally result in slightly longer production durations. Please be aware that all dates provided are estimates and not guaranteed.' },
  { q: 'Are all the products recyclable?', a: 'At Jarsking, we prioritize sustainability and offer a wide range of recyclable packaging solutions. Many of our products, including glass bottles, PCR (Post-Consumer Recycled) plastic, and biodegradable materials like PLA and bamboo, are designed for eco-friendly disposal. However, recyclability depends on local recycling facilities and material types. We\'re happy to guide you in choosing sustainable packaging options that align with your brand\'s environmental goals.' },
  { q: 'Will I see a sample or design proof before my custom packaging is produced?', a: 'Yes! Before your custom packaging goes into production, we provide a detailed digital proof for your review. This proof includes the design, dimensions, colors, and material specifications. If needed, we can also produce a physical sample to ensure everything meets your expectations. Once you approve the final proof, we move forward with production. This step ensures accuracy and allows for any adjustments before mass manufacturing begins. Your satisfaction is our priority, and we only proceed after your confirmation.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-0 border-t border-gray-200">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                className="w-full flex items-center justify-between py-4 text-left font-semibold text-[#1a1a2e] hover:text-[#c8a97e] transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.q}</span>
                {openIndex === i ? <ChevronUp className="w-4 h-4 flex-shrink-0 ml-4" /> : <ChevronRight className="w-4 h-4 flex-shrink-0 ml-4" />}
              </button>
              {openIndex === i && (
                <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
