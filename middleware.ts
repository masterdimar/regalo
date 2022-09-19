// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
  const { nextUrl: url, geo } = req
  
  const country = geo.country || 'US'

  let geoUrl = `/${country}${url.pathname}`
  url.pathname = geoUrl
    
  return NextResponse.redirect(url)
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}