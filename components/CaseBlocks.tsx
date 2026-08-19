import { Reveal } from './Reveal'
import type { CaseBlock } from '@/content/types'

/** Stable anchor id for a block, derived from its eyebrow. */
export function blockId(eyebrow: string, index: number) {
  const slug = eyebrow
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  return `${slug || 'section'}-${index}`
}

export function CaseBlocks({ blocks }: { blocks: CaseBlock[] }) {
  return (
    <div className="space-y-20 md:space-y-28">
      {blocks.map((block, i) => (
        <Block key={i} block={block} index={i} />
      ))}
    </div>
  )
}

function Block({ block, index }: { block: CaseBlock; index: number }) {
  if (block.kind === 'quote') {
    return (
      <Reveal as="section">
        <figure className="border-y border-ink-200 py-12 md:py-16">
          <blockquote className="font-display text-display-sm leading-[1.25] text-ink md:text-[2.25rem]">
            &ldquo;{block.text}&rdquo;
          </blockquote>
          {block.author ? (
            <figcaption className="eyebrow mt-6 text-ink-400">{block.author}</figcaption>
          ) : null}
        </figure>
      </Reveal>
    )
  }

  const id = block.eyebrow ? blockId(block.eyebrow, index) : undefined

  return (
    <Reveal as="section">
      <section id={id} className="scroll-mt-28">
        <BlockHead eyebrow={block.eyebrow} title={block.kind === 'callout' ? undefined : block.title} />

        {block.kind === 'text' ? (
          <div className="prose-editorial mt-8">
            {block.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        ) : null}

        {block.kind === 'list' ? (
          <>
            {block.body?.length ? (
              <div className="prose-editorial mt-8">
                {block.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            ) : null}
            <ol className="mt-10 space-y-px bg-ink-200">
              {block.items.map((item, i) => (
                <li key={item.title} className="bg-paper py-7">
                  <div className="grid gap-3 md:grid-cols-12 md:gap-8">
                    <div className="flex items-baseline gap-4 md:col-span-4">
                      <span className="eyebrow text-ink-200">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">
                        {item.title}
                      </h3>
                    </div>
                    <p className="max-w-prose text-[0.9375rem] leading-relaxed text-ink-600 md:col-span-8">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </>
        ) : null}

        {block.kind === 'metrics' ? (
          <>
            {block.body?.length ? (
              <div className="prose-editorial mt-8">
                {block.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            ) : null}
            <dl className="mt-10 grid gap-px bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
              {block.items.map((m) => (
                <div key={m.label} className="bg-paper p-7">
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
          </>
        ) : null}

        {block.kind === 'callout' ? (
          <div className="mt-8 bg-night px-7 py-10 text-paper md:px-12 md:py-14">
            <h3 className="max-w-[24ch] font-display text-display-sm text-paper">{block.title}</h3>
            <div className="mt-6 space-y-5">
              {block.body.map((p, i) => (
                <p
                  key={p}
                  className={[
                    'max-w-prose leading-[1.75]',
                    i === block.body.length - 1
                      ? 'font-display text-xl italic text-paper md:text-2xl'
                      : 'text-[0.9375rem] text-paper/70',
                  ].join(' ')}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        ) : null}

        {block.kind === 'table' ? (
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-sm">
              <thead>
                <tr>
                  {block.head.map((h) => (
                    <th
                      key={h}
                      className="border-b border-ink-200 pb-3 pr-6 text-left align-bottom eyebrow text-ink-400"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="border-b border-ink-200/70 py-3.5 pr-6 text-ink-600">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </section>
    </Reveal>
  )
}

function BlockHead({ eyebrow, title }: { eyebrow?: string; title?: string }) {
  if (!eyebrow && !title) return null

  return (
    <div className="border-t border-ink-200 pt-5">
      {eyebrow ? <p className="eyebrow-accent">{eyebrow}</p> : null}
      {title ? (
        <h2 className="mt-5 max-w-[22ch] font-display text-display-sm text-ink md:text-[2.25rem]">
          {title}
        </h2>
      ) : null}
    </div>
  )
}
