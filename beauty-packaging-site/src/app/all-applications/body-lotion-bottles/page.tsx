import LotionBottlesHeroBanner from '@/components/lotion-bottles/HeroBanner'
import LotionIntroSection from '@/components/lotion-bottles/IntroSection'
import ManufacturingAdvantages from '@/components/lotion-bottles/ManufacturingAdvantages'
import LotionProductGrid from '@/components/lotion-bottles/ProductGrid'
import MaterialsSection from '@/components/lotion-bottles/MaterialsSection'
import DispensingSystems from '@/components/lotion-bottles/DispensingSystems'
import SizeGuide from '@/components/lotion-bottles/SizeGuide'
import BottleFinishes from '@/components/lotion-bottles/BottleFinishes'
import QualityTests from '@/components/lotion-bottles/QualityTests'
import FullCycleSolution from '@/components/shared/FullCycleSolution'

export default function BodyLotionBottlesPage() {
  return (
    <>
      <LotionBottlesHeroBanner />
      <LotionIntroSection />
      <ManufacturingAdvantages />
      <LotionProductGrid />
      <MaterialsSection />
      <DispensingSystems />
      <SizeGuide />
      <BottleFinishes />
      <QualityTests />
      <FullCycleSolution />
    </>
  )
}
