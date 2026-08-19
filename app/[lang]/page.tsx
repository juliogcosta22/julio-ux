import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { WorkIndex } from '@/components/WorkIndex'
import { getContent, isLang } from '@/content'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLang(lang)) notFound()

  const c = getContent(lang)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="shell flex min-h-[92vh] flex-col justify-between pb-14 pt-32 md:pt-40">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-ink-200 px-3.5 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70 motion-reduce:hidden" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="eyebrow text-ink-600">{c.hero.status}</span>
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-10 max-w-[16ch] font-display text-display-xl text-ink">
              {c.hero.titleTop}{' '}
              <em className="italic text-accent">{c.hero.emphasis}</em>{' '}
              {c.hero.titleBottom}
            </h1>
          </Reveal>
        </div>

        <div className="mt-16 grid items-end gap-10 md:grid-cols-12">
          <Reveal delay={160} className="md:col-span-6 md:col-start-7">
            <p className="max-w-prose text-base leading-[1.75] text-ink-600 md:text-[1.0625rem]">
              {c.hero.intro}
            </p>
            <Link href={`/${lang}/contact`} className="btn-ink mt-8">
              {c.hero.cta}
            </Link>
          </Reveal>
        </div>

        <Reveal delay={240} className="mt-16">
          <a href="#work" className="flex items-center gap-3 text-ink-400 transition-colors hover:text-ink">
            <span className="eyebrow">{c.hero.scroll}</span>
            <svg width="8" height="22" viewBox="0 0 8 22" fill="none" aria-hidden="true">
              <path d="M4 0v20M1 17l3 3 3-3" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        </Reveal>
      </section>

      {/* ── Work ─────────────────────────────────────────────────────────── */}
      <section id="work" className="shell scroll-mt-24 py-24 md:py-32">
        <SectionHeader eyebrow={c.work.eyebrow} title={c.work.title} intro={c.work.intro} />
        <WorkIndex lang={lang} cases={c.cases} ui={c.work} />
      </section>

      {/* ── Experience ───────────────────────────────────────────────────── */}
      <section id="experience" className="shell scroll-mt-24 py-24 md:py-32">
        <SectionHeader eyebrow={c.experience.eyebrow} title={c.experience.title} />

        <div className="mt-16 space-y-px bg-ink-200">
          {c.experience.entries.map((entry, i) => (
            <Reveal key={entry.company} delay={i * 90}>
              <div className="grid gap-6 bg-paper py-10 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-4">
                  <h3 className="font-display text-display-sm text-ink">{entry.company}</h3>
                  <p className="mt-2 text-sm text-ink-600">{entry.role}</p>
                  <p className="eyebrow mt-3 text-ink-400">{entry.period}</p>
                </div>
                <ul className="space-y-3 md:col-span-8">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-4">
                      <span className="mt-2.5 h-px w-5 shrink-0 bg-accent" aria-hidden="true" />
                      <span className="max-w-prose text-[0.9375rem] leading-relaxed text-ink-600">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Services + tools ─────────────────────────────────────────────── */}
      <section id="skills" className="shell scroll-mt-24 py-24 md:py-32">
        <SectionHeader eyebrow={c.services.eyebrow} title={c.services.title} />

        <div className="mt-16 grid gap-px bg-ink-200 md:grid-cols-2">
          {c.services.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 90}>
              <div className="h-full bg-paper p-8 md:p-10">
                <span className="eyebrow text-ink-200">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 font-display text-display-sm text-ink">{item.title}</h3>
                <p className="mt-3 max-w-prose text-[0.9375rem] leading-relaxed text-ink-600">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <p className="eyebrow-accent">{c.tools.eyebrow}</p>
          <h3 className="mt-6 font-display text-display-sm text-ink">{c.tools.title}</h3>
          <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.tools.items.map((tool) => (
              <li key={tool.title} className="border-t border-ink-200 pt-4">
                <p className="text-[0.9375rem] font-semibold text-ink">{tool.title}</p>
                <p className="mt-1 text-sm text-ink-400">{tool.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── References ───────────────────────────────────────────────────── */}
      <section id="references" className="scroll-mt-24 bg-paper-100 py-24 md:py-32">
        <div className="shell">
          <SectionHeader eyebrow={c.references.eyebrow} title={c.references.title} />

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {c.references.items.map((ref, i) => (
              <Reveal as="article" key={ref.author + i} delay={i * 90}>
                <figure className="flex h-full flex-col">
                  <span
                    className="font-display text-6xl leading-none text-accent/40"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 flex-1 text-[0.9375rem] leading-[1.7] text-ink-600">
                    {ref.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-ink-200 pt-4">
                    <p className="text-sm font-semibold text-ink">{ref.author}</p>
                    <p className="eyebrow mt-1.5 text-ink-400">{ref.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────────── */}
      <section id="about" className="shell scroll-mt-24 py-24 md:py-32">
        <SectionHeader eyebrow={c.about.eyebrow} title={c.about.title} />

        <div className="mt-14 grid gap-14 md:grid-cols-12 md:gap-10">
          <Reveal className="prose-editorial md:col-span-7">
            {c.about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Link href={`/${lang}/contact`} className="btn-ghost mt-10">
              {c.about.cta}
            </Link>
          </Reveal>

          <Reveal delay={120} className="md:col-span-5">
            <dl className="grid grid-cols-2 gap-px bg-ink-200">
              {c.about.highlights.map((h) => (
                <div key={h.label} className="bg-paper p-6">
                  <dt className="sr-only">{h.label}</dt>
                  <dd>
                    <span className="block font-display text-display-sm text-ink">{h.value}</span>
                    <span className="mt-2 block text-xs leading-snug text-ink-400">{h.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  )
}
