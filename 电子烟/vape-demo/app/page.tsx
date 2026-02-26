import AgeVerifyModal from '@/components/home/AgeVerifyModal'
import HeroSection from '@/components/home/HeroSection'
import SeriesSection from '@/components/home/SeriesSection'
import FeaturedSection from '@/components/home/FeaturedSection'
import TechnologySection from '@/components/home/TechnologySection'
import ComplianceSection from '@/components/home/ComplianceSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import WholesaleSection from '@/components/home/WholesaleSection'
import { getAllSeries, getFeaturedProducts, getAllTestimonials } from '@/lib/data'

export default function Home() {
  const series = getAllSeries()
  const featuredProducts = getFeaturedProducts()
  const testimonials = getAllTestimonials()

  return (
    <>
      <AgeVerifyModal />
      <HeroSection />
      <SeriesSection series={series} />
      <FeaturedSection products={featuredProducts} />
      <TechnologySection />
      <ComplianceSection />
      <TestimonialsSection testimonials={testimonials} />
      <WholesaleSection />
    </>
  );
}
