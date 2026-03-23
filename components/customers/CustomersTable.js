import { formatCurrency } from '@/lib/utils';

function getStatusClassName(value) {
  return value.toLowerCase().replace(/\s+/g, '-');
}

export default function CustomersTable({ customers, searchQuery }) {
  return (
    <div className="panel">
      <div className="panel__header">
        <div>
          <h3>Customer list</h3>
          <p className="muted">An overview of accounts, plans, MRR and current health.</p>
        </div>
      </div>

      {customers.length ? (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Owner</th>
                <th>Plan</th>
                <th>MRR</th>
                <th>Status</th>
                <th>Health</th>
                <th>Last active</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>
                    <div>
                      <strong>{customer.company}</strong>
                      <p className="muted">{customer.email}</p>
                    </div>
                  </td>
                  <td>{customer.owner}</td>
                  <td>{customer.plan}</td>
                  <td>{formatCurrency(customer.mrr)}</td>
                  <td>
                    <span className={`pill pill--${getStatusClassName(customer.status)}`}>{customer.status}</span>
                  </td>
                  <td>{customer.health}</td>
                  <td>{customer.lastActive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-state">
          <h4>No customers found</h4>
          <p className="muted">We could not find any accounts matching “{searchQuery}”. Try another company, owner, status or email.</p>
        </div>
      )}
    </div>
  );
}
