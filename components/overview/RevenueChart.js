'use client';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

export default function RevenueChart({ data }) {
  return (
    <div className="panel chart-panel">
      <div className="panel__header">
        <div>
          <h3>Revenue vs target</h3>
          <p className="muted">Monthly recurring revenue performance across the year.</p>
        </div>
      </div>

      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
