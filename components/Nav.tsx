'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { Lang, SiteContent } from '@/content/types'

interface Props {
  lang: Lang
  nav: SiteContent['nav']
}

/**
 * Sticky header. It starts transparent over the hero and picks up a paper
 * background plus a hairline once the page scrolls, so the type in the hero
 * never competes with a bar.
 */
export function Nav({ lang, nav }: Props) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const isHome = pathname === `/${lang}`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock the page while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Anchors only resolve on the home page; elsewhere they need the full path.
  const anchor = (id: string) => (isHome ? `#${id}` : `/${lang}#${id}`)

  // Keep the reader on the same page when they flip languages.
  const otherLang: Lang = lang === 'en' ? 'pt' : 'en'
  const otherHref = pathname.replace(`/${lang}`, `/${otherLang}`) || `/${otherLang}`

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-editorial',
        scrolled
          ? 'border-b border-ink-200/60 bg-paper/85 backdrop-blur-md'
          : 'border-b border-transparent',
      ].join(' ')}
    >
      <div className="shell flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href={`/${lang}`}
          className="font-display text-xl leading-none tracking-tight md:text-2xl"
        >
          {nav.brand}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label={nav.menu}>
          {nav.items.map((item) => (
            <a
              key={item.id}
              href={anchor(item.id)}
              className="link-reveal text-[0.8125rem] font-medium text-ink-600 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-ink-200 p-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em]">
            <span className="rounded-full bg-ink px-2.5 py-1 text-paper">{lang}</span>
            <Link
              href={otherHref}
              className="px-2.5 py-1 text-ink-400 transition-colors hover:text-ink"
              hrefLang={otherLang}
            >
              {otherLang}
            </Link>
          </div>

          <Link href={`/${lang}/contact`} className="btn-ink hidden py-2.5 text-[0.6875rem] sm:inline-flex">
            {nav.contact}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? nav.close : nav.menu}
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={[
                  'absolute left-0 h-px w-full bg-ink transition-all duration-300 ease-editorial',
                  open ? 'top-1.5 rotate-45' : 'top-0',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute left-0 h-px w-full bg-ink transition-all duration-300 ease-editorial',
                  open ? 'top-1.5 -rotate-45' : 'top-3',
                ].join(' ')}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={[
          'overflow-hidden border-t border-ink-200/60 bg-paper transition-[max-height] duration-500 ease-editorial md:hidden',
          open ? 'max-h-[70vh]' : 'max-h-0 border-t-transparent',
        ].join(' ')}
      >
        <nav className="shell flex flex-col gap-1 py-6" aria-label={nav.menu}>
          {nav.items.map((item) => (
            <a
              key={item.id}
              href={anchor(item.id)}
              className="font-display text-3xl leading-tight text-ink"
            >
              {item.label}
            </a>
          ))}
          <Link href={`/${lang}/contact`} className="btn-ink mt-6 self-start">
            {nav.contact}
          </Link>
        </nav>
      </div>
    </header>
  )
}
