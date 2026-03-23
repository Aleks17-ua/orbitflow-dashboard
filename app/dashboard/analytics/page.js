import PageHeading from '@/components/shared/PageHeading';
import RevenueChart from '@/components/overview/RevenueChart';
import TrafficSources from '@/components/overview/TrafficSources';
import {
  getAnalyticsHighlights,
  getRevenueSeries,
  getTrafficSources
} from '@/lib/seedData';

export default function AnalyticsPage() {
  const highlights = getAnalyticsHighlights();
  const revenueSeries = getRevenueSeries();
  const trafficSources = getTrafficSources();

  return (
    <div className="grid gap-24">
      <PageHeading
        eyebrow="Analytics"
        title="Deep dive into product and revenue performance"
        description="Use this section to understand feature usage, traffic mix and retention signals."
      />

      <section className="stats-grid stats-grid--three">
        {highlights.map((item) => (
          <article className="panel stat-card" key={item.id}>
            <p className="stat-card__label">{item.label}</p>
            <strong className="stat-card__value">{item.value}</strong>
            <div className="stat-card__meta">
              <span className="trend trend--positive">{item.trend}</span>
              <span>Compared to last period</span>
            </div>
          </article>
        ))}
      </section>

      <section className="content-grid content-grid--two-thirds">
        <RevenueChart data={revenueSeries} />
        <TrafficSources data={trafficSources} />
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <h3>Interpretation</h3>
            <p className="muted">What a product or growth manager might note from this data.</p>
          </div>
        </div>

        <div className="goal-list">
          <div>
            <strong>Strong acquisition quality</strong>
            <p>Organic traffic remains the largest source, which lowers CAC pressure.</p>
          </div>
          <div>
            <strong>Revenue pacing above target</strong>
            <p>MRR is closing the year higher than plan, suggesting pricing and retention are healthy.</p>
          </div>
          <div>
            <strong>Retention still needs work</strong>
            <p>Even with strong adoption, churn improvement should stay a key operating priority.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
