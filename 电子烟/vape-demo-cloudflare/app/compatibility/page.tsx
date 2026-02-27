import type { Metadata } from 'next'
import CompatibilityClient from '@/components/compatibility/CompatibilityClient'
import { getAllProducts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Compatibility Checker — NEXVAP',
  description: 'Find the perfect NEXVAP device and pod combination. FLUXPOD™ universal compatibility system.',
}

export default function CompatibilityPage() {
  const products = getAllProducts()
  const deviceProducts = products.filter((p) => p.category === 'device')
  const podProducts = products.filter((p) => p.category === 'pod')
  return <CompatibilityClient deviceProducts={deviceProducts} podProducts={podProducts} />
}
