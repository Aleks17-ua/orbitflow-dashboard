import clsx from 'clsx';

export default function ActivityFeed({ items }) {
  return (
    <div className="panel">
      <div className="panel__header">
        <div>
          <h3>Recent activity</h3>
          <p className="muted">What happened across your workspace recently.</p>
        </div>
      </div>

      <div className="activity-list">
        {items.map((item) => (
          <div className="activity-item" key={item.id}>
            <span className={clsx('activity-dot', `activity-dot--${item.status}`)} />
            <div>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
            <span className="muted">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
