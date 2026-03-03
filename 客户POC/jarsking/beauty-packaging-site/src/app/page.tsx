import dynamic from 'next/dynamic'
import HeroBanner from '@/components/home/HeroBanner'
import CertificationCarousel from '@/components/home/CertificationCarousel'
import ServiceAdvantages from '@/components/home/ServiceAdvantages'

const ProductShowroom = dynamic(() => import('@/components/home/ProductShowroom'))
const PackagingSolutions = dynamic(() => import('@/components/home/PackagingSolutions'))
const GiftBoxes = dynamic(() => import('@/components/home/GiftBoxes'))
const MaterialsSection = dynamic(() => import('@/components/home/MaterialsSection'))
const WhyPartner = dynamic(() => import('@/components/home/WhyPartner'))
const UltimatePartner = dynamic(() => import('@/components/home/UltimatePartner'))
const SustainableFuture = dynamic(() => import('@/components/home/SustainableFuture'))
const Testimonials = dynamic(() => import('@/components/home/Testimonials'))
const FAQ = dynamic(() => import('@/components/home/FAQ'))
const NewsSection = dynamic(() => import('@/components/home/NewsSection'))
const CTASection = dynamic(() => import('@/components/home/CTASection'))

export default function Home() {
  return (
    <>
      <HeroBanner />
      <CertificationCarousel />
      <ServiceAdvantages />
      <ProductShowroom />
      <PackagingSolutions />
      <GiftBoxes />
      <MaterialsSection />
      <WhyPartner />
      <UltimatePartner />
      <SustainableFuture />
      <Testimonials />
      <FAQ />
      <NewsSection />
      <CTASection />
    </>
  )
}
