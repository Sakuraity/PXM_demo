import EssentialOilHeroBanner from '@/components/essential-oil/HeroBanner'
import EssentialOilIntroSection from '@/components/essential-oil/IntroSection'
import EssentialOilProductGrid from '@/components/essential-oil/ProductGrid'
import SupplierAdvantages from '@/components/essential-oil/SupplierAdvantages'
import BottleTypes from '@/components/essential-oil/BottleTypes'
import EssentialOilDesignCrafts from '@/components/essential-oil/DesignCrafts'
import CustomDesigns from '@/components/essential-oil/CustomDesigns'
import CertificationsSection from '@/components/shared/CertificationsSection'
import MarketableGuides from '@/components/essential-oil/MarketableGuides'
import FullCycleSolution from '@/components/shared/FullCycleSolution'

export default function EssentialOilBottlesPage() {
  return (
    <>
      <EssentialOilHeroBanner />
      <EssentialOilIntroSection />
      <EssentialOilProductGrid />
      <SupplierAdvantages />
      <BottleTypes />
      <EssentialOilDesignCrafts />
      <CustomDesigns />
      <CertificationsSection
        title="Certificates of Jarsking Essential Oil Bottles"
        buttonText="Explore Certified Solutions Now!"
      />
      <MarketableGuides />
      <FullCycleSolution />
    </>
  )
}
