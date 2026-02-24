import SkincareHeroBanner from '@/components/skincare/HeroBanner'
import NewDesignsCarousel from '@/components/skincare/NewDesignsCarousel'
import ValuePropositions from '@/components/skincare/ValuePropositions'
import SkincareSolutions from '@/components/skincare/SkincareSolutions'
import PackagingFormats from '@/components/skincare/PackagingFormats'
import PartnerCTA from '@/components/skincare/PartnerCTA'

export default function SkincarePackagingPage() {
  return (
    <>
      <SkincareHeroBanner />
      <NewDesignsCarousel />
      <ValuePropositions />
      <SkincareSolutions />
      <PackagingFormats />
      <PartnerCTA />
    </>
  )
}
