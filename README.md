# julio-ux

Portfolio of Júlio Costa, Product Designer. Next.js (App Router) + TypeScript +
Tailwind, bilingual EN/PT, statically generated.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (17 static pages)
npm run typecheck
```

---

## Structure

```
app/
  [lang]/               root layout (html/body, fonts, nav, footer)
    page.tsx            home
    contact/page.tsx    contact
    work/[slug]/page.tsx  case study
  globals.css           tokens + component utilities
  robots.ts, sitemap.ts
components/             presentational only, no copy inside
content/
  types.ts              the content model for the whole site
  en.ts / pt.ts         site-level copy per language
  cases/*.ts            one file per case, both languages
middleware.ts           redirects / → /en or /pt by Accept-Language
```

**No component contains copy.** Everything the visitor reads lives in `content/`.
Adding a third language means adding one dictionary and one entry in
`content/index.ts`.

---

## Adding or editing a case

Each case is a `CaseStudy` object with a list of `blocks`. Available blocks:

| kind | use for |
|---|---|
| `text` | eyebrow + title + paragraphs |
| `list` | numbered items with a title and a paragraph each |
| `metrics` | a grid of big numbers |
| `quote` | a full-width pull quote |
| `callout` | inverted dark block, last paragraph renders as a serif kicker |
| `table` | a small comparison table |

The sticky rail on a case page is generated from the `eyebrow` of each block,
so there is no table of contents to keep in sync.

Set `inverted: true` for a dark case hero (DeadQueue uses it).

---

## Covers

Case covers are drawn in CSS in `components/CaseCover.tsx`, one branch per
slug, each abstracting the case's core mechanic. To use real screenshots
instead, drop the file in `public/` and replace the matching branch with a
`next/image`. Keep the same aspect ratios (`21/9` wide, `4/3` in the grid).

---

## Design tokens

Defined in `tailwind.config.ts`:

- **paper** `#F6F4EF` page, `paper-50` raised, `paper-100` wells, `paper-200` borders
- **ink** `#151311` primary, `ink-600` secondary, `ink-400` muted, `ink-200` hairlines
- **accent** `#C1440E` burnt orange: eyebrows, links, one CTA per view
- **night** `#151311` inverted sections (footer, DeadQueue hero, callouts)

Type: `font-display` (Instrument Serif) for headlines and numbers,
`font-sans` (Manrope) for everything else. Fluid display sizes live in the
`display-*` scale.

Utilities in `globals.css`: `.shell`, `.eyebrow`, `.btn-ink`, `.btn-ghost`,
`.btn-paper`, `.link-reveal`, `.prose-editorial`.

---

## Before going live

- Confirm the LinkedIn and Instagram URLs in `content/en.ts` and `content/pt.ts`
  (they are currently a best guess).
- Add `app/opengraph-image.tsx` or a static OG image, there is none yet.
- Point `metadataBase`, `sitemap.ts` and `robots.ts` at the final domain if it
  is not `www.julio-ux.com`.
