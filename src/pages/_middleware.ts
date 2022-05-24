import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  if (
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes('/api/') &&
    request.nextUrl.locale === 'default'
  ) {
    const url = request.nextUrl.clone();
    url.pathname = `/pt-br${request.nextUrl.pathname}`;
    return NextResponse.redirect(url);
  }

  return undefined;
}
