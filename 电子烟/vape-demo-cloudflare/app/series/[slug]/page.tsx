import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SeriesDetailClient from '@/components/series/SeriesDetailClient'
import { getAllSeries, getSeriesBySlug, getProductsBySeries } from '@/lib/data'
import type { SeriesSlug } from '@/types'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const series = getAllSeries()
  return series.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const series = getSeriesBySlug(slug as SeriesSlug)
  if (!series) return {}
  return {
    title: `${series.name.en} — ${series.tagline.en} | NEXVAP`,
    description: series.description.en.slice(0, 160),
  }
}

export default async function SeriesPage({ params }: Props) {
  const { slug } = await params
  const series = getSeriesBySlug(slug as SeriesSlug)
  if (!series) notFound()

  const products = getProductsBySeries(slug as SeriesSlug)

  return <SeriesDetailClient series={series} products={products} />
}
