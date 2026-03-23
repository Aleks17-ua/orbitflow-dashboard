import { NextResponse } from 'next/server';
import { getActivityFeed, getTeamPerformance } from '@/lib/seedData';

export async function GET() {
  return NextResponse.json({
    activity: getActivityFeed(),
    team: getTeamPerformance()
  });
}
