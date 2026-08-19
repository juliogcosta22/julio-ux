import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Reveal } from '@/components/Reveal'
import { DEFAULT_LANG, LANGS, getContent, isLang } from '@/content'

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const c = getContent(isLang(lang) ? lang : DEFAULT_LANG)

  return {
    title: c.contact.title,
    description: c.contact.body,
    alternates: { canonical: `/${lang}/contact` },
  }
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLang(lang)) notFound()

  const c = getContent(lang)

  return (
    <section className="shell flex min-h-[88vh] flex-col justify-center py-32 md:py-40">
      <Reveal>
        <Link href={`/${lang}`} className="link-reveal eyebrow inline-flex items-center gap-2 text-ink-400">
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden="true">
            <path d="M16 4H2M5 1L2 4l3 3" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          {c.contact.back}
        </Link>
      </Reveal>

      <Reveal delay={60}>
        <p className="eyebrow-accent mt-14">{c.contact.eyebrow}</p>
        <h1 className="mt-6 max-w-[16ch] font-display text-display-lg text-ink">
          {c.contact.title}
        </h1>
        <p className="mt-6 max-w-prose text-base leading-[1.75] text-ink-600 md:text-[1.0625rem]">
          {c.contact.body}
        </p>
      </Reveal>

      <Reveal delay={140} className="mt-16">
        <a
          href={`mailto:${c.contact.email}`}
          className="link-underline inline-block font-display text-display-md text-ink transition-colors hover:text-accent"
        >
          {c.contact.email}
        </a>
      </Reveal>

      <Reveal delay={200} className="mt-16">
        <ul className="grid gap-px bg-ink-200 sm:grid-cols-3">
          {c.contact.channels.map((channel) => (
            <li key={channel.label} className="bg-paper py-6 sm:px-6 sm:first:pl-0">
              <p className="eyebrow text-ink-400">{channel.label}</p>
              <a
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="link-reveal mt-3 inline-block break-all text-[0.9375rem] text-ink transition-colors hover:text-accent"
              >
                {channel.value}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
