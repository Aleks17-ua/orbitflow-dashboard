export default function DashboardLoading() {
  return (
    <div className="grid gap-24">
      <div className="skeleton skeleton--lg" />
      <div className="stats-grid">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="panel" key={index}>
            <div className="skeleton skeleton--sm" />
            <div className="skeleton skeleton--md" />
            <div className="skeleton skeleton--sm" />
          </div>
        ))}
      </div>
    </div>
  );
}
