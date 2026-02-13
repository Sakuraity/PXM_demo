import FaceCreamJarsHeroBanner from '@/components/face-cream-jars/HeroBanner'
import IntroSection from '@/components/face-cream-jars/IntroSection'
import ProductGrid from '@/components/face-cream-jars/ProductGrid'
import OccasionsSection from '@/components/face-cream-jars/OccasionsSection'
import DesignCrafts from '@/components/face-cream-jars/DesignCrafts'
import FAQSection from '@/components/face-cream-jars/FAQSection'
import WholesaleSolutions from '@/components/shared/WholesaleSolutions'
import QualityInspections from '@/components/shared/QualityInspections'
import CertificationsSection from '@/components/shared/CertificationsSection'
import FullCycleSolution from '@/components/shared/FullCycleSolution'

export default function FaceCreamJarsPage() {
  return (
    <>
      <FaceCreamJarsHeroBanner />
      <IntroSection />
      <ProductGrid />
      <OccasionsSection />
      <DesignCrafts />
      <FAQSection />
      <WholesaleSolutions />
      <QualityInspections />
      <CertificationsSection />
      <FullCycleSolution />
    </>
  )
}
