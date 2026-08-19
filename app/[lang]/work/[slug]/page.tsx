import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CaseBlocks, blockId } from '@/components/CaseBlocks'
import { CaseCover } from '@/components/CaseCover'
import { Reveal } from '@/components/Reveal'
import { DEFAULT_LANG, LANGS, getCase, getContent, getNextCase, isLang } from '@/content'

export function generateStaticParams() {
  return LANGS.flatMap((lang) =>
    getContent(lang).cases.map((study) => ({ lang, slug: study.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const study = getCase(isLang(lang) ? lang : DEFAULT_LANG, slug)
  if (!study) return {}

  return {
    title: study.title,
    description: study.subtitle,
    alternates: { canonical: `/${lang}/work/${slug}` },
    openGraph: { title: study.title, description: study.subtitle, type: 'article' },
  }
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!isLang(lang)) notFound()

  const study = getCase(lang, slug)
  if (!study) notFound()

  const { caseUi } = getContent(lang)
  const next = getNextCase(lang, slug)

  // The rail is derived from the blocks themselves, so it can never drift.
  const rail = study.blocks
    .map((block, i) => ('eyebrow' in block && block.eyebrow ? { id: blockId(block.eyebrow, i), label: block.eyebrow } : null))
    .filter((item): item is { id: string; label: string } => item !== null)

  return (
    <article>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header className={study.inverted ? 'bg-night text-paper' : 'bg-paper'}>
        <div className="shell pb-16 pt-32 md:pb-20 md:pt-44">
          <Link
            href={`/${lang}#work`}
            className={[
              'link-reveal eyebrow inline-flex items-center gap-2',
              study.inverted ? 'text-paper/50' : 'text-ink-400',
            ].join(' ')}
          >
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden="true">
              <path d="M16 4H2M5 1L2 4l3 3" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            {caseUi.backHome}
          </Link>

          <p className={['eyebrow mt-12', study.inverted ? 'text-accent' : 'text-accent'].join(' ')}>
            {study.eyebrow}
          </p>

          <h1
            className={[
              'mt-6 max-w-[14ch] font-display text-display-lg',
              study.inverted ? 'text-paper' : 'text-ink',
            ].join(' ')}
          >
            {study.title}
          </h1>

          <p
            className={[
              'mt-6 max-w-prose text-lg leading-relaxed',
              study.inverted ? 'text-paper/70' : 'text-ink-600',
            ].join(' ')}
          >
            {study.subtitle}
          </p>

          <dl
            className={[
              'mt-12 grid gap-8 border-t pt-8 sm:grid-cols-3',
              study.inverted ? 'border-paper/20' : 'border-ink-200',
            ].join(' ')}
          >
            <Meta label={caseUi.role} value={study.role} inverted={study.inverted} />
            <Meta label={caseUi.year} value={study.year} inverted={study.inverted} />
            <Meta label={caseUi.discipline} value={study.discipline} inverted={study.inverted} />
          </dl>

          {study.links?.length ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {study.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={study.inverted ? 'btn-paper' : 'btn-ink'}
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div className="shell pb-16 md:pb-24">
          <CaseCover slug={study.slug} className="aspect-[16/9] w-full md:aspect-[21/9]" />
        </div>
      </header>

      {/* ── Metrics strip ────────────────────────────────────────────────── */}
      {study.metrics?.length ? (
        <section className="border-y border-ink-200 bg-paper-100">
          <div className="shell">
            <dl className="grid divide-ink-200 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
              {study.metrics.map((m) => (
                <div key={m.label} className="border-b border-ink-200 py-8 last:border-b-0 sm:border-b-0 sm:px-8 sm:first:pl-0">
                  <dt className="sr-only">{m.label}</dt>
                  <dd>
                    <span className="block font-display text-display-sm leading-none text-ink">
                      {m.value}
                    </span>
                    <span className="mt-3 block text-xs leading-snug text-ink-400">{m.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <div className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav className="sticky top-28" aria-label={caseUi.index}>
              <p className="eyebrow text-ink-400">{caseUi.index}</p>
              <ul className="mt-5 space-y-2.5">
                {rail.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="link-reveal text-[0.8125rem] text-ink-400 transition-colors hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="lg:col-span-9">
            <CaseBlocks blocks={study.blocks} />
          </div>
        </div>
      </div>

      {/* ── Next case ────────────────────────────────────────────────────── */}
      <section className="border-t border-ink-200">
        <Reveal>
          <Link href={`/${lang}/work/${next.slug}`} className="group block">
            <div className="shell grid items-center gap-8 py-16 md:grid-cols-12 md:py-20">
              <div className="md:col-span-7">
                <p className="eyebrow-accent">{caseUi.next}</p>
                <h2 className="mt-5 font-display text-display-md text-ink">{next.title}</h2>
                <p className="mt-4 max-w-prose text-[0.9375rem] leading-relaxed text-ink-400">
                  {next.subtitle}
                </p>
              </div>
              <div className="md:col-span-5">
                <CaseCover
                  slug={next.slug}
                  className="aspect-[16/9] w-full transition-transform duration-700 ease-editorial group-hover:scale-[1.015]"
                />
              </div>
            </div>
          </Link>
        </Reveal>
      </section>
    </article>
  )
}

function Meta({
  label,
  value,
  inverted,
}: {
  label: string
  value: string
  inverted?: boolean
}) {
  return (
    <div>
      <dt className={['eyebrow', inverted ? 'text-paper/40' : 'text-ink-400'].join(' ')}>{label}</dt>
      <dd className={['mt-2.5 text-[0.9375rem]', inverted ? 'text-paper' : 'text-ink'].join(' ')}>
        {value}
      </dd>
    </div>
  )
}
