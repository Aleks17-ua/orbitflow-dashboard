import { NextResponse } from 'next/server';

export function middleware(request) {
  const session = request.cookies.get('saas-session')?.value;
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname === '/login';
  const isProtectedPage = pathname.startsWith('/dashboard');

  if (isProtectedPage && !session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isAuthPage && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/dashboard/:path*']
};
