interface Props {
  slug: string
  className?: string
}

/**
 * Covers are drawn in CSS rather than shipped as images.
 *
 * Each one is an abstraction of the case's core mechanic — the expandable
 * table, the weekly plan, the progress bar, the two-team split — so the grid
 * reads as a system and stays sharp at any size. Drop a real screenshot in
 * later by replacing the matching branch with an <Image />.
 */
export function CaseCover({ slug, className = '' }: Props) {
  const shell = `relative overflow-hidden rounded-sm ${className}`

  if (slug === 'deadqueue') {
    return (
      <div className={`${shell} bg-night`}>
        {/* Warm glow behind the split */}
        <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFAC10] opacity-[0.18] blur-3xl" />
        {/* The two teams, meeting in the middle */}
        <div className="absolute inset-0 flex items-center justify-center gap-3">
          <div className="h-[58%] w-[26%] -skew-x-[14deg] bg-[#FFAC10]/85" />
          <div className="h-[58%] w-[26%] -skew-x-[14deg] bg-[#3B82F6]/85" />
        </div>
        {/* Ten level ticks, one lit */}
        <div className="absolute inset-x-8 bottom-8 flex gap-1.5">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="h-1 flex-1 rounded-full"
              style={{ background: i < 7 ? 'rgba(255,172,16,0.9)' : 'rgba(255,255,255,0.16)' }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (slug === 'toll-validation-system') {
    return (
      <div className={`${shell} bg-paper-100`}>
        {/* Collapsed rows, with one expanded — the key design decision */}
        <div className="absolute inset-x-[12%] top-[16%] space-y-2.5">
          {[0, 1].map((i) => (
            <div key={i} className="h-3 rounded-sm bg-ink/10" />
          ))}
          <div className="rounded-sm border border-accent/40 bg-paper-50 p-2.5 shadow-sm">
            <div className="h-2.5 w-1/3 rounded-sm bg-accent/70" />
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              <div className="col-span-1 h-8 rounded-sm bg-ink/15" />
              <div className="col-span-2 space-y-1.5">
                <div className="h-2 rounded-sm bg-ink/10" />
                <div className="h-2 w-4/5 rounded-sm bg-ink/10" />
                <div className="h-2 w-3/5 rounded-sm bg-ink/10" />
              </div>
            </div>
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-3 rounded-sm bg-ink/10" />
          ))}
        </div>
      </div>
    )
  }

  if (slug === 'nutririo') {
    return (
      <div className={`${shell} bg-[#EAF0E6]`}>
        <div className="absolute inset-x-[12%] top-1/2 -translate-y-1/2">
          {/* Seven days, planned ahead */}
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="space-y-1.5">
                <div className="h-1.5 rounded-full bg-[#5C7A52]/30" />
                {Array.from({ length: 3 }).map((_, j) => (
                  <div
                    key={j}
                    className="rounded-sm"
                    style={{
                      height: `${16 + ((i + j) % 3) * 8}px`,
                      background: (i + j) % 2 === 0 ? 'rgba(92,122,82,0.55)' : 'rgba(92,122,82,0.22)',
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // jornada-ux — effort accumulating into visible progress
  return (
    <div className={`${shell} bg-[#1E1B4B]`}>
      <div className="absolute inset-x-[12%] bottom-[18%] flex h-[52%] items-end gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${18 + i * 7}%`,
              background: i > 8 ? 'rgba(255,255,255,0.2)' : `rgba(196,181,253,${0.35 + i * 0.05})`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-x-[12%] top-[16%]">
        <div className="h-1.5 rounded-full bg-white/15">
          <div className="h-full w-[72%] rounded-full bg-[#C4B5FD]" />
        </div>
      </div>
    </div>
  )
}
