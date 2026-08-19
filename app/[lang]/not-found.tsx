import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="shell flex min-h-[80vh] flex-col justify-center py-32">
      <p className="eyebrow-accent">404</p>
      <h1 className="mt-6 max-w-[14ch] font-display text-display-lg text-ink">
        This page moved, or never existed
      </h1>
      <p className="mt-5 max-w-prose text-ink-600">
        Esta página não existe. Try the work index instead.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/en" className="btn-ink">
          English
        </Link>
        <Link href="/pt" className="btn-ghost">
          Português
        </Link>
      </div>
    </section>
  )
}
