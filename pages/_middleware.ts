import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const host = req.headers.get('host');
  const { pathname } = req.nextUrl;

  if (host?.includes('localhost:3000')) {
    if (host.includes('.')) {
      console.log(host?.split('.')[0]);
      return NextResponse.rewrite(`/_sites/${host?.split('.')[0]}`);
    }
    return NextResponse.next();
  }
  if (pathname.startsWith(`/_sites`)) {
    return NextResponse.rewrite('/404');
  }
  if (host?.startsWith('chivel.tk')) {
    return NextResponse.next();
  }
  const subdomain = host?.split('.')[0];
  console.log(subdomain);
  return NextResponse.rewrite(`/_sites/${subdomain}`);
}
