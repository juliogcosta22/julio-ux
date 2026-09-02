import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F6F4EF', // page background, warm off-white
          50: '#FBFAF7',      // raised cards
          100: '#EFEBE3',     // subtle wells / hairline fills
          200: '#E4DFD4',     // borders on paper
        },
        ink: {
          DEFAULT: '#151311', // primary text
          600: '#4A443D',     // secondary text
          400: '#7A736A',     // muted text / captions
          200: '#B8B1A6',     // disabled / decorative
        },
        accent: {
          DEFAULT: '#C1440E', // burnt orange: links, eyebrows, one CTA
          soft: '#F0E2D8',    // accent tint background
        },
        night: {
          DEFAULT: '#151311', // inverted sections (footer, DeadQueue case)
          50: '#211E1A',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Editorial display scale, fluid, clamps against the viewport.
        'display-xl': ['clamp(2.75rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 5.5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.375rem, 2.2vw, 1.875rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.22em' }],
      },
      maxWidth: {
        prose: '62ch',
        shell: '78rem',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'rise-in': 'rise-in 700ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 900ms ease both',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
