'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  { name: 'Arna E', title: 'CEO from a Cosmetic Company', avatar: 'https://www.jarsking.com/wp-content/uploads/2025/04/ava-4.jpg', text: 'We are a cosmetic company located in Iceland. The product we buy is glass bottles for our skin care line. Yancy Zeng is our person and she is absolutely amazing. She replies to our requests fast, she solves every problem quickly and is ready to help us in any way possible. The glass bottles are high quality and the design is costumized to our needs. We are highly satisfied as a costumer.' },
  { name: 'Herbert H', title: 'Purchasing Manager from a Perfume Brand', avatar: 'https://www.jarsking.com/wp-content/uploads/2025/04/ava-1.jpg', text: "Outstanding Supplier Experience in China! I have over a decade of experience working with suppliers worldwide, and my experience with Jarsking has been the best I've had in China. Their clear, smooth, and transparent communication, commitment to solving challenges, and focus on meeting timelines have truly set them apart. Working with them has been a pleasure so far!" },
  { name: 'Benson O', title: 'Manager from a Pet Food Company', avatar: 'https://www.jarsking.com/wp-content/uploads/2023/06/Cosmetic-Packaging-Customers-08.jpg', text: "First Time Working with Jarsking and Highly Impressed!! This was my first time working with Jarsking, and I couldn't be happier with the experience. I started by ordering samples, and they nailed the design right away. The quality of the samples was impressive, and they assured me that the final order would be even better. True to their word, the quality of the finished products exceeded my expectations." },
  { name: 'Jill C', title: 'Purchasing Manager from a Pharmaceutical Company', avatar: 'https://www.jarsking.com/wp-content/uploads/2025/01/Purchasing-Manager-of-a-USA-Hemp-Brand.jpg', text: 'Create your dream business with Jarsking! I had no clue what I was doing but working with experts at Jarsking made my business possible. Together we created 1st in class and 1st in market with custom luxury bottles and child-resistant packaging. Being able to text, share pictures and videos created a team environment. Sherry was fearless and dedicated to making every detail perfect.' },
  { name: 'Ivy M', title: 'CEO from a Niche Aromatherapy Brand', avatar: 'https://www.jarsking.com/wp-content/uploads/2025/01/ivy-malikova.png', text: 'I am more than impressed! Jarsking and especially Mayme which supported me thru this whole journey deserves more than 5 Stars. The communication thru Whastapp, time of responding and realizing my visions into samples are rare! Thank you for building my brand from the scratch with me and creating such a beautifull line to sell!' },
  { name: 'DANIELLE A', title: 'CEO from a Beauty Brand', avatar: 'https://www.jarsking.com/wp-content/uploads/2023/06/Cosmetic-Packaging-Customers-12.jpg', text: "Beautiful bottles for my rebrand. I started working with this company last year when I rebranded my entire packaging. A huge job that took many months of planning to complete. My contact at the company is Sherry, we spoke nearly every day during the process, the communication is great and Sherry goes out of her way to help." },
  { name: 'Josh M', title: 'CEO from a Perfume Brand', avatar: 'https://www.jarsking.com/wp-content/uploads/2023/06/Cosmetic-Packaging-Customers-14.jpg', text: 'Jarsking team has provided top-notch service and clear, timely communication throughout the entire process. Every question was answered promptly, making the ordering experience smooth and stress-free. The packaging quality exceeded expectations—premium materials, precise detailing, and excellent craftsmanship.' },
  { name: 'Kianna M', title: 'Founder from a Skincare Lab', avatar: 'https://www.jarsking.com/wp-content/uploads/2025/10/doctor.webp', text: 'Working with Sherry has been an absolute pleasure. She is incredibly detail-oriented, responsive, and patient throughout every step of the process. From managing complex production timelines to ensuring accuracy in invoices and shipment details, her professionalism and commitment to getting things right have truly stood out.' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="py-16 bg-[#f5f0eb]">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] text-center mb-10">
          What Our Customers Have to Say
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <img src={t.avatar} alt={t.name} className="w-[100px] h-[100px] rounded-full object-cover" />
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <p className="font-bold text-[#1a1a2e]">{t.name}</p>
              <p className="text-sm text-[#c8a97e]">{t.title}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
