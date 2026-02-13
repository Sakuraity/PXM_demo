import Breadcrumb from '@/components/layout/Breadcrumb'
import HeroSection from './HeroSection'
import ProductDetails from './ProductDetails'
import ImageGallery from './ImageGallery'
import PackagingSuggestion from './PackagingSuggestion'
import MoreProductsCarousel from '../MoreProductsCarousel'

const MORE_PRODUCTS = [
  {
    title: 'PP Refillable Cosmetic Jar with Replaceable Inner Cup',
    href: '/products/pp-refillable-cosmetic-jar-with-replaceable-inner-cup',
    image: 'https://www.jarsking.com/wp-content/uploads/2026/02/kitty-design-cream-jar-for-kids-1024x1024.webp',
    alt: 'kitty design cream jar for kids',
  },
  {
    title: '2.5ml AS Tube Lip Gloss Packaging with ABS Bubble Cap',
    href: '/product-item/2-5ml-as-tube-lip-gloss-packaging-with-abs-bubble-cap/',
    image: 'https://www.jarsking.com/wp-content/uploads/2026/02/cherry-lip-gloss-tube-1024x1024.webp',
    alt: 'cherry lip gloss tube',
  },
  {
    title: 'Thick-Base Glass Lotion Pump Bottle for Luxury Skincare Brands',
    href: '/products/thick-base-glass-lotion-pump-bottle-for-luxury-skincare-brands',
    image: 'https://www.jarsking.com/wp-content/uploads/2026/02/Dragonfruit-Bloom-skincare-bottle-design-1024x1024.webp',
    alt: 'Dragonfruit Bloom skincare bottle design',
  },
  {
    title: '150ml custom glass lotion pump bottle with gradient/frosted coating for luxury skincare brands',
    href: '/product-item/150ml-custom-glass-lotion-pump-bottle-with-gradient-frosted-coating-for-luxury-skincare-brands/',
    image: 'https://www.jarsking.com/wp-content/uploads/2026/01/glass-lotion-bottle-with-gradient-color-design-1024x1024.webp',
    alt: 'glass lotion bottle with gradient color design',
  },
  {
    title: 'Custom PET dropper bottle with glass pipette for skincare serum OEM/ODM packaging',
    href: '/product-item/custom-pet-dropper-bottle-with-glass-pipette-for-skincare-serum-oem-odm-packaging/',
    image: 'https://www.jarsking.com/wp-content/uploads/2026/01/dropper-bottle-with-dopamine-colors-1024x1024.webp',
    alt: 'dropper bottle with dopamine colors',
  },
  {
    title: 'Custom Glass Cosmetic Bottle & Jar Set with Gift Box',
    href: '/product-item/custom-glass-cosmetic-bottle-jar-set-with-gift-box/',
    image: 'https://www.jarsking.com/wp-content/uploads/2026/01/skincare-gift-box-1024x1024.webp',
    alt: 'skincare gift box',
  },
  {
    title: 'Night Stone Textured Glass Perfume Spray Bottle 50ml/100ml',
    href: '/product-item/night-stone-textured-glass-perfume-spray-bottle-50ml-100ml/',
    image: 'https://www.jarsking.com/wp-content/uploads/2026/01/perfume-bottle-new-design-1024x1024.webp',
    alt: 'perfume bottle new design',
  },
  {
    title: 'PET Fine Mist Spray Bottle Cosmetic Toner & Body Mist',
    href: '/product-item/pet-fine-mist-spray-bottle-cosmetic-toner-body-mist/',
    image: 'https://www.jarsking.com/wp-content/uploads/2026/01/fine-mist-bottle-set-1024x1024.webp',
    alt: 'fine mist bottle set',
  },
  {
    title: 'Custom Glass Airless Pump Jar Replaceable Inner Core',
    href: '/product-item/custom-glass-airless-pump-jar-replaceable-inner-core/',
    image: 'https://www.jarsking.com/wp-content/uploads/2026/01/blue-replaceable-cosmetic-jar-1024x1024.webp',
    alt: 'blue replaceable cosmetic jar',
  },
  {
    title: 'Custom PET Shampoo & Shower Gel Bottles for Personal Care and Hotel Brands',
    href: '/product-item/custom-pet-shampoo-shower-gel-bottles-for-personal-care-and-hotel-brands/',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/12/hot-pink-plastic-lotion-bottle-1024x1024.webp',
    alt: 'hot pink plastic lotion bottle',
  },
  {
    title: '100ml Custom Shell-Shaped Perfume Glass Bottle',
    href: '/product-item/100ml-custom-shell-shaped-perfume-glass-bottle/',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/12/custom-perfume-bottle-with-metal-cap-1024x1024.webp',
    alt: 'custom perfume bottle with metal cap',
  },
  {
    title: 'Luxury 3ml Lip Gloss Tube with Wand Custom Makeup Packaging',
    href: '/product-item/luxury-3ml-lip-gloss-tube-with-wand-custom-makeup-packaging/',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/11/cosmetic-lip-gloss-container-supplier-1024x1024.webp',
    alt: 'cosmetic lip gloss container supplier',
  },
  {
    title: 'Heptagonal Perfume Bottle Elevate Your Fragrance Line',
    href: '/product-item/heptagonal-perfume-bottle-elevate-your-fragrance-line/',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/10/custom-hexagonal-glass-perfume-bottle-1024x1024.webp',
    alt: 'custom hexagonal glass perfume bottle',
  },
  {
    title: 'Custom Child Resistant Mylar Bags for Cannabis Packaging',
    href: '/product-item/custom-child-resistant-mylar-bags-for-cannabis-packaging/',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/10/cannabis-pouch-packaging-supplier-1024x1024.webp',
    alt: 'cannabis pouch packaging supplier',
  },
  {
    title: 'Custom PP Sunscreen Bottle Squeezable for Summer Launches',
    href: '/product-item/custom-pp-sunscreen-bottle-squeezable-for-summer-launches/',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/10/private-label-sunscreen-packaging-1024x1024.webp',
    alt: 'private label sunscreen packaging',
  },
  {
    title: 'Personalized Skincare Container Glass Cream Jars & Lotion Pump Bottles',
    href: '/product-item/personalized-skincare-container-glass-cream-jars-lotion-pump-bottles/',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/10/luxury-cosmetic-bottle-packaging-1024x1024.webp',
    alt: 'luxury cosmetic bottle packaging',
  },
  {
    title: 'Sustainable Refillable Airless Pump Face Cream Jar For Baby Care Brand',
    href: '/products/sustainable-refillable-airless-pump-face-cream-jar-for-baby-care-brand',
    image: 'https://www.jarsking.com/wp-content/uploads/2025/10/refillable-airless-skincare-jar-supplier-1024x1024.webp',
    alt: 'refillable airless skincare jar supplier',
  },
]

export default function PPRefillableCosmeticJarPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'PP Refillable Cosmetic Jar with Replaceable Inner Cup' },
  ]

  return (
    <div className="min-h-screen">
      <div className="px-[8%] pt-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <HeroSection />
      <ProductDetails />
      <ImageGallery />
      <PackagingSuggestion />
      <MoreProductsCarousel products={MORE_PRODUCTS} />
    </div>
  )
}
