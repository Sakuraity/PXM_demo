import HeroBanner from '@/components/home/HeroBanner'
import CertificationCarousel from '@/components/home/CertificationCarousel'
import ServiceAdvantages from '@/components/home/ServiceAdvantages'
import ProductShowroom from '@/components/home/ProductShowroom'
import PackagingSolutions from '@/components/home/PackagingSolutions'
import GiftBoxes from '@/components/home/GiftBoxes'
import MaterialsSection from '@/components/home/MaterialsSection'
import WhyPartner from '@/components/home/WhyPartner'
import UltimatePartner from '@/components/home/UltimatePartner'
import SustainableFuture from '@/components/home/SustainableFuture'
import Testimonials from '@/components/home/Testimonials'
import FAQ from '@/components/home/FAQ'
import NewsSection from '@/components/home/NewsSection'
import CTASection from '@/components/home/CTASection'

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
