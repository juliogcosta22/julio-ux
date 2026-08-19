import type { MetadataRoute } from 'next'
import { LANGS, getContent } from '@/content'

const BASE = 'https://www.julio-ux.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const lang of LANGS) {
    entries.push({ url: `${BASE}/${lang}`, priority: 1 })
    entries.push({ url: `${BASE}/${lang}/contact`, priority: 0.6 })
    for (const study of getContent(lang).cases) {
      entries.push({ url: `${BASE}/${lang}/work/${study.slug}`, priority: 0.8 })
    }
  }

  return entries
}
