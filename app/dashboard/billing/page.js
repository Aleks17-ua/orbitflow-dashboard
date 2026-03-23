import PageHeading from '@/components/shared/PageHeading';
import BillingPlans from '@/components/billing/BillingPlans';
import { getInvoices, getPlans } from '@/lib/seedData';
import { formatCurrency } from '@/lib/utils';

export default function BillingPage() {
  const plans = getPlans();
  const invoices = getInvoices();

  return (
    <div className="grid gap-24">
      <PageHeading
        eyebrow="Billing"
        title="Manage plans and invoices"
        description="Review the current plan, compare tiers, and keep an eye on recent invoices."
      />

      <BillingPlans initialPlans={plans} />

      <section className="panel">
        <div className="panel__header">
          <div>
            <h3>Invoice history</h3>
            <p className="muted">Latest successful payments for the current workspace.</p>
          </div>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Invoice</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>{invoice.id}</td>
                  <td>{invoice.date}</td>
                  <td>{formatCurrency(invoice.amount)}</td>
                  <td>
                    <span className="pill pill--paid">{invoice.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
