import { NextResponse } from 'next/server';
import { getCurrentUser, getSettings } from '@/lib/seedData';

export async function GET() {
  return NextResponse.json({
    user: getCurrentUser(),
    settings: getSettings()
  });
}

export async function PUT(request) {
  const body = await request.json();

  return NextResponse.json({
    message: 'Settings updated successfully',
    data: body
  });
}
