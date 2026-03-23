import { formatCurrency } from '@/lib/utils';

export default function TeamPerformance({ data }) {
  return (
    <div className="panel">
      <div className="panel__header">
        <div>
          <h3>Team performance</h3>
          <p className="muted">Internal impact by function and customer outcomes.</p>
        </div>
      </div>

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Member</th>
              <th>Role</th>
              <th>MRR impact</th>
              <th>Health score</th>
              <th>Renewals</th>
            </tr>
          </thead>
          <tbody>
            {data.map((member) => (
              <tr key={member.id}>
                <td>{member.member}</td>
                <td>{member.role}</td>
                <td>{formatCurrency(member.mrrImpact)}</td>
                <td>{member.healthScore}</td>
                <td>{member.renewals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
