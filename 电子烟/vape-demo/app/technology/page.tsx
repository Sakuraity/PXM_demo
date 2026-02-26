import type { Metadata } from 'next'
import TechnologyClient from '@/components/technology/TechnologyClient'

export const metadata: Metadata = {
  title: 'Technology — NEXCORE™ & FLUXPOD™ | NEXVAP',
  description: 'Discover the proprietary NEXCORE™ chip and FLUXPOD™ pod platform powering every NEXVAP product. 5ms response, zero-leak design, 12-layer safety.',
}

export default function TechnologyPage() {
  return <TechnologyClient />
}
