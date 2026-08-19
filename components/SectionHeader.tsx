import { Reveal } from './Reveal'

interface Props {
  eyebrow: string
  title: string
  intro?: string
  /** Renders light-on-dark for inverted sections. */
  inverted?: boolean
}

/**
 * Every section opens the same way: a rule, an eyebrow, a serif title, and an
 * optional intro set in the right column. The repetition is what makes the
 * page read as one document instead of a stack of blocks.
 */
export function SectionHeader({ eyebrow, title, intro, inverted }: Props) {
  return (
    <Reveal>
      <div className={inverted ? 'border-t border-paper/20 pt-6' : 'border-t border-ink-200 pt-6'}>
        <p className={inverted ? 'eyebrow text-paper/50' : 'eyebrow-accent'}>{eyebrow}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-12 md:gap-10">
          <h2
            className={[
              'font-display text-display-md',
              intro ? 'md:col-span-7' : 'md:col-span-9',
              inverted ? 'text-paper' : 'text-ink',
            ].join(' ')}
          >
            {title}
          </h2>
          {intro ? (
            <p
              className={[
                'max-w-prose self-end text-[0.9375rem] leading-relaxed md:col-span-5',
                inverted ? 'text-paper/60' : 'text-ink-400',
              ].join(' ')}
            >
              {intro}
            </p>
          ) : null}
        </div>
      </div>
    </Reveal>
  )
}
