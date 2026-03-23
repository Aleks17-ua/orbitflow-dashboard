import PageHeading from '@/components/shared/PageHeading';
import CustomersTable from '@/components/customers/CustomersTable';
import { getCustomers } from '@/lib/seedData';

function filterCustomers(customers, query) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return customers;
  }

  return customers.filter((customer) => {
    return [customer.company, customer.owner, customer.email, customer.plan, customer.status, customer.health].some((value) =>
      value.toLowerCase().includes(normalized)
    );
  });
}

export default async function CustomersPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.q || '';
  const customers = getCustomers();
  const filteredCustomers = filterCustomers(customers, query);

  return (
    <div className="grid gap-24">
      <PageHeading
        eyebrow="Customers"
        title="Monitor customer accounts and subscription health"
        description={
          query
            ? `Showing ${filteredCustomers.length} result${filteredCustomers.length === 1 ? '' : 's'} for “${query}”.`
            : 'This page is designed for sales, CS and founders who need a clean view of revenue accounts.'
        }
        actions={<button className="button button--primary">Add customer</button>}
      />

      <CustomersTable customers={filteredCustomers} searchQuery={query} />
    </div>
  );
}
