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
 * The work grid: two projects per row, alternating a wide card with a narrow
 * one and flipping the side each row, so the section reads as an asymmetric
 * rhythm. Each row is a flex track sized by flex-grow, so hovering a card lets
 * it expand horizontally while its neighbour gives up the space — the shared,
 * fixed height keeps every divider and title aligned throughout.
 */
export function WorkIndex({ lang, cases, ui }: Props) {
  const rows: CaseStudy[][] = []
  for (let i = 0; i < cases.length; i += 2) rows.push(cases.slice(i, i + 2))

  return (
    <div className="mt-16 space-y-16 md:mt-20 md:space-y-24">
      {rows.map((row, r) => (
        <div key={r} className="flex flex-col gap-16 md:flex-row md:items-start md:gap-8">
          {row.map((study, col) => {
            // Wide card sits left on even rows, right on odd rows — a zigzag.
            const big = r % 2 === 0 ? col === 0 : col === 1
            return (
              <WorkCard
                key={study.slug}
                lang={lang}
                study={study}
                ui={ui}
                index={r * 2 + col}
                big={big}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

function WorkCard({
  lang,
  study,
  ui,
  index,
  big,
}: {
  lang: Lang
  study: CaseStudy
  ui: SiteContent['work']
  index: number
  big: boolean
}) {
  return (
    // The <article> is the flex item: it owns the width (flex-grow) and the
    // hover expansion. Reveal lives inside so its own opacity/transform
    // transition doesn't clash with the flex-grow one animated here.
    <article
      className={[
        'min-w-0 transition-[flex-grow] duration-700 ease-editorial md:basis-0',
        big ? 'md:grow-[1.7] md:hover:grow-[2.4]' : 'md:grow md:hover:grow-[2]',
      ].join(' ')}
    >
      <Reveal delay={(index % 2) * 90}>
      <Link href={`/${lang}/work/${study.slug}`} className="group block">
        {/* Both cards in a row share one height so their dividers and titles
            line up; hover changes only the width. */}
        <CaseCover
          slug={study.slug}
          className={[
            'w-full transition-transform duration-700 ease-editorial group-hover:scale-[1.02]',
            'aspect-[4/3] md:aspect-auto md:h-[clamp(20rem,30vw,29rem)]',
          ].join(' ')}
        />

        <div className="mt-6 flex items-start justify-between gap-6 border-t border-ink-200 pt-5">
          <div>
            <div className="flex items-center gap-3">
              <span className="eyebrow text-ink-200">{String(index + 1).padStart(2, '0')}</span>
              <span className="eyebrow text-ink-400">{study.discipline}</span>
            </div>

            <h3
              className={[
                'mt-3 font-display leading-none text-ink',
                big ? 'text-display-md' : 'text-display-sm',
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
    </article>
  )
}
