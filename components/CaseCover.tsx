import Image from 'next/image'

interface Props {
  slug: string
  className?: string
}

/** Real screenshot covers, one per case, carried over from the live portfolio. */
const COVERS: Record<string, { src: string; alt: string; bg: string }> = {
  deadqueue: { src: '/Images/Deadqueue-home.png', alt: 'DeadQueue home screen', bg: 'bg-night' },
  'toll-validation-system': {
    src: '/Images/toll-cover.jpg',
    alt: 'Toll validation workspace on a laptop, overlooking a toll plaza',
    bg: 'bg-paper-100',
  },
  'jornada-ux': {
    src: '/Images/jornada-cover.png',
    alt: 'Jornada UX gamified learning modules on a laptop',
    bg: 'bg-[#1E1B4B]',
  },
  nutririo: {
    src: '/Images/nutririo-cover.jpg',
    alt: 'Nutrir.io meal-plan app on a phone in a kitchen',
    bg: 'bg-[#EAF0E6]',
  },
}

/**
 * Each case cover is a real screenshot from the portfolio, cropped to fill the
 * card so the home grid reads as a system at any size.
 */
export function CaseCover({ slug, className = '' }: Props) {
  const shell = `relative overflow-hidden rounded-sm ${className}`
  const cover = COVERS[slug] ?? COVERS.deadqueue

  return (
    <div className={`${shell} ${cover.bg}`}>
      <Image
        src={cover.src}
        alt={cover.alt}
        fill
        sizes="(min-width: 768px) 100vw, 100vw"
        className="object-cover object-center"
      />
    </div>
  )
}
