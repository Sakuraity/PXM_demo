import type { Metadata } from 'next'
import ComplianceClient from '@/components/compliance/ComplianceClient'
import { getAllComplianceRegions } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Global Compliance — CE, FCC, TPD Certified | NEXVAP',
  description: 'NEXVAP products are certified and compliant across major global markets. CE, FCC, TPD, TGA, TRPR certifications. Full compliance documentation available.',
}

export default function CompliancePage() {
  const regions = getAllComplianceRegions()
  return <ComplianceClient regions={regions} />
}
