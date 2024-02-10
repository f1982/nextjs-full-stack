import { MiddlewareFactory } from './stack-middleware'
import { getToken } from 'next-auth/jwt'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export const matcher = ['dashboard', 'blog/create']

export const withAuthorization: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname
    
    if (matcher.some((path) => pathname.startsWith(path))) {
      const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET
      })
      console.log('token', token)
      if (!token) {
        const url = new URL(`/api/auth/signin`, request.url)
        url.searchParams.set('callbackUrl ', encodeURI(request.url))
        return NextResponse.redirect(url)
      }
    }
    return next(request, _next)
  }
}
