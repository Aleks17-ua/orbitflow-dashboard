import { NextResponse } from 'next/server';
import { getInvoices, getPlans } from '@/lib/seedData';

export async function GET() {
  return NextResponse.json({
    plans: getPlans(),
    invoices: getInvoices()
  });
}
