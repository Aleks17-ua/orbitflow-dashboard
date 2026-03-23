import clsx from 'clsx';
import { formatCompactNumber, formatCurrency, formatPercent, getTrendTone } from '@/lib/utils';

function formatValue(label, value) {
  if (label.toLowerCase().includes('revenue')) {
    return formatCurrency(value);
  }

  if (label.toLowerCase().includes('rate')) {
    return formatPercent(value);
  }

  return formatCompactNumber(value);
}

export default function StatCard({ stat }) {
  const tone = getTrendTone(stat.change);

  return (
    <article className="panel stat-card">
      <p className="stat-card__label">{stat.label}</p>
      <strong className="stat-card__value">{formatValue(stat.label, stat.value)}</strong>
      <div className="stat-card__meta">
        <span className={clsx('trend', `trend--${tone}`)}>
          {stat.change > 0 ? '+' : ''}
          {stat.change}
          {stat.label.toLowerCase().includes('rate') ? 'pp' : '%'}
        </span>
        <span>{stat.description}</span>
      </div>
    </article>
  );
}
