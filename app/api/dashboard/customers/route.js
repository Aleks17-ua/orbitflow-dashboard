import { NextResponse } from 'next/server';
import { getCustomers } from '@/lib/seedData';

export async function GET() {
  return NextResponse.json({
    customers: getCustomers()
  });
}
