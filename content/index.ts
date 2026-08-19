import { en } from './en'
import { pt } from './pt'
import type { CaseStudy, Lang, SiteContent } from './types'

export const LANGS: Lang[] = ['en', 'pt']
export const DEFAULT_LANG: Lang = 'en'

/** Human label for the language switch. */
export const LANG_LABEL: Record<Lang, string> = { en: 'EN', pt: 'PT' }

const dictionaries: Record<Lang, SiteContent> = { en, pt }

export function isLang(value: string): value is Lang {
  return (LANGS as string[]).includes(value)
}

export function getContent(lang: Lang): SiteContent {
  return dictionaries[lang]
}

export function getCase(lang: Lang, slug: string): CaseStudy | undefined {
  return dictionaries[lang].cases.find((c) => c.slug === slug)
}

/** The case that follows `slug` in the grid, wrapping around at the end. */
export function getNextCase(lang: Lang, slug: string): CaseStudy {
  const list = dictionaries[lang].cases
  const index = list.findIndex((c) => c.slug === slug)
  return list[(index + 1) % list.length]
}

export type { CaseStudy, Lang, SiteContent }
