import { NextResponse } from 'next/server';
import { getDashboardSummary, getRevenueSeries, getTrafficSources } from '@/lib/seedData';

export async function GET() {
  return NextResponse.json({
    summary: getDashboardSummary(),
    revenueSeries: getRevenueSeries(),
    trafficSources: getTrafficSources()
  });
}
