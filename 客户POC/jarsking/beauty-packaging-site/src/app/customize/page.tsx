import { Suspense } from 'react'
import CustomizeClient from './CustomizeClient'

export const metadata = {
  title: '3D Product Customizer — Jarsking',
  description: 'Explore Jarsking packaging in interactive 3D. Configure colors, finishes, and more, then request a quote.',
}

export default function CustomizePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8F8F8]" />}>
      <CustomizeClient />
    </Suspense>
  )
}
