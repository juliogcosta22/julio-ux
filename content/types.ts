/**
 * Content model for the whole site.
 *
 * Every piece of copy lives in `content/en.ts` / `content/pt.ts` and in the
 * per-case files under `content/cases/`. Components never hardcode copy, so
 * adding a language is a matter of adding one dictionary.
 */

export type Lang = 'en' | 'pt'

export interface Metric {
  value: string
  label: string
}

export interface NamedItem {
  title: string
  text: string
}

/** Blocks a case study page can be built from. */
export type CaseBlock =
  | { kind: 'text'; eyebrow?: string; title?: string; body: string[] }
  | { kind: 'list'; eyebrow?: string; title?: string; body?: string[]; items: NamedItem[] }
  | { kind: 'metrics'; eyebrow?: string; title?: string; body?: string[]; items: Metric[] }
  | { kind: 'quote'; text: string; author?: string }
  | { kind: 'table'; eyebrow?: string; title?: string; body?: string[]; head: string[]; rows: string[][] }
  | { kind: 'callout'; eyebrow?: string; title: string; body: string[] }

export interface CaseStudy {
  slug: string
  /** Kicker above the title on the case hero. */
  eyebrow: string
  title: string
  /** One-line description used on the home grid. */
  subtitle: string
  role: string
  year: string
  /** Short discipline label shown on the home grid, e.g. "UX Design". */
  discipline: string
  /** Renders the case hero inverted (dark). Used for the DeadQueue case. */
  inverted?: boolean
  /** Pulls the card to full width on the home grid. */
  featured?: boolean
  /** Numbers surfaced right under the case hero. */
  metrics?: Metric[]
  /**
   * The case body. The sticky rail on the case page is derived from the
   * eyebrows of these blocks, so there is no separate table of contents to
   * keep in sync.
   */
  blocks: CaseBlock[]
  links?: { label: string; href: string }[]
}

export interface SiteContent {
  meta: {
    title: string
    description: string
  }
  nav: {
    brand: string
    items: { id: string; label: string }[]
    contact: string
    menu: string
    close: string
  }
  hero: {
    status: string
    /** The headline is split so `emphasis` can render in italic serif. */
    titleTop: string
    emphasis: string
    titleBottom: string
    intro: string
    cta: string
    scroll: string
  }
  work: {
    eyebrow: string
    title: string
    intro: string
    viewCase: string
  }
  experience: {
    eyebrow: string
    title: string
    entries: {
      company: string
      role: string
      period: string
      bullets: string[]
    }[]
  }
  services: {
    eyebrow: string
    title: string
    items: NamedItem[]
  }
  tools: {
    eyebrow: string
    title: string
    items: NamedItem[]
  }
  references: {
    eyebrow: string
    title: string
    items: { quote: string; author: string; role: string }[]
  }
  about: {
    eyebrow: string
    title: string
    body: string[]
    highlights: Metric[]
    cta: string
  }
  contact: {
    eyebrow: string
    title: string
    body: string
    email: string
    channels: { label: string; value: string; href: string }[]
    back: string
  }
  footer: {
    brand: string
    role: string
    navTitle: string
    casesTitle: string
    socialTitle: string
    social: { label: string; href: string }[]
    rights: string
  }
  caseUi: {
    role: string
    year: string
    discipline: string
    index: string
    next: string
    backHome: string
    liveSite: string
  }
  cases: CaseStudy[]
}
