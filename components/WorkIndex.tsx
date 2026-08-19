import Link from 'next/link'
import { CaseCover } from './CaseCover'
import { Reveal } from './Reveal'
import type { CaseStudy, Lang, SiteContent } from '@/content/types'

interface Props {
  lang: Lang
  cases: CaseStudy[]
  ui: SiteContent['work']
}

/**
 * The work grid. The first case runs full width and the rest pair up, so the
 * page has one clear entry point instead of four equal ones.
 */
export function WorkIndex({ lang, cases, ui }: Props) {
  const [lead, ...rest] = cases

  return (
    <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
      <WorkCard lang={lang} study={lead} ui={ui} index={0} wide />

      <div className="grid gap-16 md:grid-cols-2 md:gap-x-8 md:gap-y-20">
        {rest.map((study, i) => (
          <WorkCard key={study.slug} lang={lang} study={study} ui={ui} index={i + 1} />
        ))}
      </div>
    </div>
  )
}

function WorkCard({
  lang,
  study,
  ui,
  index,
  wide,
}: {
  lang: Lang
  study: CaseStudy
  ui: SiteContent['work']
  index: number
  wide?: boolean
}) {
  return (
    <Reveal as="article" delay={wide ? 0 : (index % 2) * 90}>
      <Link href={`/${lang}/work/${study.slug}`} className="group block">
        <CaseCover
          slug={study.slug}
          className={[
            'w-full transition-transform duration-700 ease-editorial group-hover:scale-[1.012]',
            wide ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]',
          ].join(' ')}
        />

        <div className="mt-6 flex items-start justify-between gap-6 border-t border-ink-200 pt-5">
          <div>
            <div className="flex items-center gap-3">
              <span className="eyebrow text-ink-200">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="eyebrow text-ink-400">{study.discipline}</span>
            </div>

            <h3
              className={[
                'mt-3 font-display leading-none text-ink',
                wide ? 'text-display-md' : 'text-display-sm md:text-[2rem]',
              ].join(' ')}
            >
              {study.title}
            </h3>

            <p className="mt-3 max-w-prose text-[0.9375rem] leading-relaxed text-ink-400">
              {study.subtitle}
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-accent">
              {ui.viewCase}
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-500 ease-editorial group-hover:translate-x-1.5"
              >
                <path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
          </div>

          <span className="font-display text-xl text-ink-200 md:text-2xl">{study.year}</span>
        </div>
      </Link>
    </Reveal>
  )
}
