'use client';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const colors = ['#4f46e5', '#22c55e', '#f59e0b', '#06b6d4', '#ef4444'];

export default function TrafficSources({ data }) {
  return (
    <div className="panel chart-panel">
      <div className="panel__header">
        <div>
          <h3>Traffic sources</h3>
          <p className="muted">Top acquisition channels for the last 30 days.</p>
        </div>
      </div>

      <div className="traffic-layout">
        <div className="chart-wrap chart-wrap--small">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" innerRadius={65} outerRadius={95} paddingAngle={2}>
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="legend-list">
          {data.map((item) => (
            <div className="legend-item" key={item.name}>
              <div>
                <strong>{item.name}</strong>
                <p className="muted">{item.value}% of total visits</p>
              </div>
              <span>{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
