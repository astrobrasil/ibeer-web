import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log(req.url, 'url')
  if(req.url === '/'){
      return NextResponse.redirect('/home')
  }
  return NextResponse.next()
}
