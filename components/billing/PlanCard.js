import clsx from 'clsx';

export default function PlanCard({ plan, onAction, isLoading }) {
  return (
    <article className={clsx('panel', 'plan-card', plan.current && 'plan-card--current')}>
      <div className="panel__header">
        <div>
          <h3>{plan.name}</h3>
          <p className="muted">{plan.description}</p>
        </div>
        {plan.current ? <span className="badge">Current plan</span> : null}
      </div>

      <div className="price-block">
        <strong>${plan.price}</strong>
        <span>/ month</span>
      </div>

      <ul className="feature-stack">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <button
        className={clsx('button', 'button--full', plan.current ? 'button--ghost' : 'button--primary')}
        type="button"
        onClick={onAction}
        disabled={isLoading}
      >
        {isLoading ? 'Updating...' : plan.current ? 'Managing plan' : 'Upgrade'}
      </button>
    </article>
  );
}
