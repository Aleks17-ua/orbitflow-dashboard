import { getCustomers, getDashboardSummary, getInvoices, getRevenueSeries } from '@/lib/seedData';

function escapeCsvValue(value) {
  const stringValue = String(value ?? '');

  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }

  return stringValue;
}

export async function GET() {
  const summary = Object.values(getDashboardSummary());
  const revenueSeries = getRevenueSeries();
  const customers = getCustomers();
  const invoices = getInvoices();

  const sections = [
    ['Overview summary'],
    ['Metric', 'Value', 'Change', 'Description'],
    ...summary.map((item) => [item.label, item.value, item.change, item.description]),
    [],
    ['Revenue trend'],
    ['Month', 'Revenue', 'Target'],
    ...revenueSeries.map((item) => [item.month, item.revenue, item.target]),
    [],
    ['Customers'],
    ['Company', 'Owner', 'Email', 'Plan', 'MRR', 'Status', 'Health', 'Last active'],
    ...customers.map((item) => [item.company, item.owner, item.email, item.plan, item.mrr, item.status, item.health, item.lastActive]),
    [],
    ['Invoices'],
    ['Invoice', 'Date', 'Amount', 'Status'],
    ...invoices.map((item) => [item.id, item.date, item.amount, item.status])
  ];

  const csv = sections
    .map((row) => row.map((cell) => escapeCsvValue(cell)).join(','))
    .join('\n');

  return new Response(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="orbitflow-report.csv"'
    }
  });
}
