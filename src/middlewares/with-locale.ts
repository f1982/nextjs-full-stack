import { localePrefix, locales, pathnames } from '@/i18n/i18n-config'
import createMiddleware from 'next-intl/middleware'
import { NextFetchEvent, NextRequest } from 'next/server'
import { MiddlewareFactory } from './stack-middleware'

export const matcher = [
  '/',
  '/(en|cn)/:path*',
  // Enable redirects that add missing locales
  // (e.g. `/pathnames` -> `/en/pathnames`)
  '/((?!_next|_vercel|.*\\..*).*)'
]

const localeMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix,
  pathnames
})

export const withLocale: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname
    
    // if (matcher.some((path) => pathname.startsWith(path))) {
      // console.log('pathname', pathname);
      return localeMiddleware(request)
    // }
    // return next(request, _next)
  }
}
