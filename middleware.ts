import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LANGS = ['en', 'pt'] as const
const DEFAULT_LANG = 'en'

/**
 * Every page lives under /en or /pt. Anything that arrives without a language
 * prefix is redirected, preferring the visitor's Accept-Language header so a
 * Brazilian visitor lands on Portuguese without a flicker.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLang = LANGS.some(
    (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`),
  )
  if (hasLang) return NextResponse.next()

  const accept = request.headers.get('accept-language') ?? ''
  const preferred = accept.toLowerCase().startsWith('pt') ? 'pt' : DEFAULT_LANG

  const url = request.nextUrl.clone()
  url.pathname = `/${preferred}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Skip Next internals, the API surface and anything with a file extension.
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
}
