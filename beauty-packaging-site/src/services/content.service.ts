import { DataSource } from '@/lib/data-source'
import { SiteConfig, PageData } from '@/types'

export async function getSiteConfig(): Promise<SiteConfig> {
  return DataSource.get<SiteConfig>('/site-config')
}

export async function getPageData(slug: string): Promise<PageData> {
  return DataSource.get<PageData>(`/pages/${slug}`)
}

export async function getHomePageData(): Promise<PageData> {
  return DataSource.get<PageData>('/pages/index')
}
