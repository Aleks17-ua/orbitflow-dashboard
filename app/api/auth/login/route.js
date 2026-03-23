import { NextResponse } from 'next/server';
import { getCredentials } from '@/lib/seedData';

export async function POST(request) {
  const body = await request.json();
  const credentials = getCredentials();

  if (body.email !== credentials.email || body.password !== credentials.password) {
    return NextResponse.json(
      {
        message: 'Invalid email or password.'
      },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ message: 'Login successful' });

  response.cookies.set('saas-session', 'preview-session-token', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24
  });

  return response;
}
