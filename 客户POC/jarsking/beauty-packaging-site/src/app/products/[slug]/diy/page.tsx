import { notFound } from 'next/navigation'
import DIYPageWrapper from './DIYPageWrapper'
import { getProduct } from '@/services'

interface DIYPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function DIYPage({ params }: DIYPageProps) {
  const { slug } = await params
  const product = await getProduct(slug)
  
  if (!product) {
    notFound()
  }

  return <DIYPageWrapper product={product} />
}
