import PageHeading from '@/components/shared/PageHeading';
import StatCard from '@/components/overview/StatCard';
import RevenueChart from '@/components/overview/RevenueChart';
import TrafficSources from '@/components/overview/TrafficSources';
import ActivityFeed from '@/components/overview/ActivityFeed';
import TeamPerformance from '@/components/overview/TeamPerformance';
import ExportReportButton from '@/components/overview/ExportReportButton';
import {
  getActivityFeed,
  getDashboardSummary,
  getRevenueSeries,
  getTeamPerformance,
  getTrafficSources
} from '@/lib/seedData';

export default function DashboardPage() {
  const summary = getDashboardSummary();
  const stats = Object.values(summary);
  const revenueSeries = getRevenueSeries();
  const trafficSources = getTrafficSources();
  const activity = getActivityFeed();
  const team = getTeamPerformance();

  return (
    <div className="grid gap-24">
      <PageHeading
        eyebrow="Overview"
        title="Track the health of your SaaS business"
        description="A snapshot of revenue, active users, conversion, churn and customer operations."
        actions={<ExportReportButton />}
      />

      <section className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </section>

      <section className="content-grid content-grid--two-thirds">
        <RevenueChart data={revenueSeries} />
        <TrafficSources data={trafficSources} />
      </section>

      <section className="content-grid content-grid--two-thirds">
        <ActivityFeed items={activity} />
        <div className="panel highlight-panel">
          <div className="panel__header">
            <div>
              <h3>Quarterly goals</h3>
              <p className="muted">Focus areas for the current operating cycle.</p>
            </div>
          </div>
          <div className="goal-list">
            <div>
              <strong>Grow MRR to $55k</strong>
              <p>Need +14% monthly expansion from current baseline.</p>
            </div>
            <div>
              <strong>Reduce churn below 1.2%</strong>
              <p>Improve onboarding and reactivation sequences.</p>
            </div>
            <div>
              <strong>Increase activation to 72%</strong>
              <p>Push template usage and first-success moments earlier.</p>
            </div>
          </div>
        </div>
      </section>

      <TeamPerformance data={team} />
    </div>
  );
}
