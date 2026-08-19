import type { Metadata } from 'next'
import { Instrument_Serif, Manrope } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { DEFAULT_LANG, LANGS, getContent, isLang } from '@/content'

/** Display serif — headlines, case titles, pull quotes. */
const display = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
})

/** Body sans — everything else. */
const sans = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const content = getContent(isLang(lang) ? lang : DEFAULT_LANG)

  return {
    metadataBase: new URL('https://www.julio-ux.com'),
    title: {
      default: content.meta.title,
      template: `%s · ${content.nav.brand}`,
    },
    description: content.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: '/en', 'pt-BR': '/pt' },
    },
    openGraph: {
      type: 'website',
      title: content.meta.title,
      description: content.meta.description,
      locale: lang === 'pt' ? 'pt_BR' : 'en_US',
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLang(lang)) notFound()

  const content = getContent(lang)

  return (
    <html lang={lang === 'pt' ? 'pt-BR' : 'en'} className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-xs focus:uppercase focus:tracking-[0.18em] focus:text-paper"
        >
          {lang === 'pt' ? 'Pular para o conteúdo' : 'Skip to content'}
        </a>
        <Nav lang={lang} nav={content.nav} />
        <main id="main">{children}</main>
        <Footer lang={lang} content={content} />
      </body>
    </html>
  )
}
