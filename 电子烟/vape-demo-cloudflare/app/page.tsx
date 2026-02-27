import dynamic from 'next/dynamic'
import AgeVerifyModal from '@/components/home/AgeVerifyModal'
import HeroSection from '@/components/home/HeroSection'
import { getAllSeries, getFeaturedProducts, getAllTestimonials } from '@/lib/data'

// 懒加载非首屏组件，提升首屏性能
const SeriesSection = dynamic(() => import('@/components/home/SeriesSection'), {
  loading: () => <div className="h-screen bg-[#050505] animate-pulse" />
})

const FeaturedSection = dynamic(() => import('@/components/home/FeaturedSection'), {
  loading: () => <div className="py-24 bg-[#050505] animate-pulse" />
})

const TechnologySection = dynamic(() => import('@/components/home/TechnologySection'), {
  loading: () => <div className="py-24 bg-[#050505] animate-pulse" />
})

const ComplianceSection = dynamic(() => import('@/components/home/ComplianceSection'), {
  loading: () => <div className="py-24 bg-[#050505] animate-pulse" />
})

const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'), {
  loading: () => <div className="py-24 bg-[#050505] animate-pulse" />
})

const WholesaleSection = dynamic(() => import('@/components/home/WholesaleSection'), {
  loading: () => <div className="py-24 bg-[#050505] animate-pulse" />
})

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
