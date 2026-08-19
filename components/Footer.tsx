import Link from 'next/link'
import type { Lang, SiteContent } from '@/content/types'

interface Props {
  lang: Lang
  content: SiteContent
}

export function Footer({ lang, content }: Props) {
  const { footer, nav, cases } = content

  return (
    <footer className="bg-night text-paper">
      <div className="shell py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-display-md leading-none">{footer.brand}</p>
            <p className="eyebrow mt-4 text-paper/50">{footer.role}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 md:col-span-7">
            <FooterColumn title={footer.navTitle}>
              <FooterLink href={`/${lang}`}>{nav.brand}</FooterLink>
              <FooterLink href={`/${lang}/contact`}>{nav.contact}</FooterLink>
            </FooterColumn>

            <FooterColumn title={footer.casesTitle}>
              {cases.map((c) => (
                <FooterLink key={c.slug} href={`/${lang}/work/${c.slug}`}>
                  {c.title}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title={footer.socialTitle}>
              {footer.social.map((s) => (
                <FooterLink key={s.label} href={s.href} external>
                  {s.label}
                </FooterLink>
              ))}
            </FooterColumn>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-paper/15 pt-8 text-[0.75rem] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.rights}</p>
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em]">
            {lang === 'pt' ? 'Feito com Next.js' : 'Built with Next.js'}
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow text-paper/40">{title}</p>
      <ul className="mt-5 space-y-2.5">{children}</ul>
    </div>
  )
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  const className = 'link-reveal text-sm text-paper/75 transition-colors hover:text-paper'

  return (
    <li>
      {external ? (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )}
    </li>
  )
}
