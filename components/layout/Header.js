'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Bell, Search, X } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getCustomers, getInvoices, getTeamPerformance } from '@/lib/seedData';

const customers = getCustomers();
const invoices = getInvoices();
const team = getTeamPerformance();

function buildResults(query) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return [];
  }

  const customerResults = customers
    .filter((item) => {
      return [item.company, item.owner, item.email, item.plan, item.status].some((value) =>
        value.toLowerCase().includes(normalized)
      );
    })
    .map((item) => ({
      id: item.id,
      type: 'Customer',
      title: item.company,
      subtitle: `${item.owner} • ${item.plan} • ${item.email}`,
      href: `/dashboard/customers?q=${encodeURIComponent(query)}`
    }));

  const teamResults = team
    .filter((item) => {
      return [item.member, item.role].some((value) => value.toLowerCase().includes(normalized));
    })
    .map((item) => ({
      id: item.id,
      type: 'Team',
      title: item.member,
      subtitle: `${item.role} • ${item.renewals} renewals • health ${item.healthScore}`,
      href: '/dashboard/analytics'
    }));

  const invoiceResults = invoices
    .filter((item) => item.id.toLowerCase().includes(normalized) || item.status.toLowerCase().includes(normalized))
    .map((item) => ({
      id: item.id,
      type: 'Invoice',
      title: item.id,
      subtitle: `${item.date} • ${item.status} • $${item.amount}`,
      href: '/dashboard/billing'
    }));

  return [...customerResults, ...teamResults, ...invoiceResults].slice(0, 6);
}

export default function Header({ user }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const wrapperRef = useRef(null);
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (!wrapperRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const results = useMemo(() => buildResults(query), [query]);

  function goToCustomersSearch(nextQuery) {
    const trimmed = nextQuery.trim();

    if (!trimmed) {
      router.push('/dashboard/customers');
      return;
    }

    router.push(`/dashboard/customers?q=${encodeURIComponent(trimmed)}`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsOpen(false);
    goToCustomersSearch(query);
  }

  function handleClear() {
    setQuery('');
    setIsOpen(false);

    if (pathname === '/dashboard/customers' && searchParams.get('q')) {
      router.push('/dashboard/customers');
    }
  }

  return (
    <header className="dashboard-header">
      <div>
        <p className="eyebrow">Workspace</p>
        <h1>{user.company} dashboard</h1>
      </div>

      <div className="dashboard-header__actions">
        <form className="search-shell" onSubmit={handleSubmit} ref={wrapperRef}>
          <label className="search-box">
            <Search size={18} />
            <input
              type="text"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              placeholder="Search customers, team members, invoices..."
              aria-label="Search dashboard data"
            />
            {query ? (
              <button className="search-clear" type="button" aria-label="Clear search" onClick={handleClear}>
                <X size={16} />
              </button>
            ) : null}
          </label>

          {isOpen && query.trim() ? (
            <div className="search-dropdown">
              {results.length ? (
                <>
                  {results.map((result) => (
                    <button
                      key={`${result.type}-${result.id}`}
                      className="search-result"
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        router.push(result.href);
                      }}
                    >
                      <span className="search-result__type">{result.type}</span>
                      <strong>{result.title}</strong>
                      <span className="muted">{result.subtitle}</span>
                    </button>
                  ))}

                  <button
                    className="search-result search-result--footer"
                    type="submit"
                  >
                    See all matching customers for “{query.trim()}”
                  </button>
                </>
              ) : (
                <div className="search-empty">
                  <strong>No direct match</strong>
                  <p className="muted">Press Enter to search customer accounts for “{query.trim()}”.</p>
                </div>
              )}
            </div>
          ) : null}
        </form>

        <button className="icon-button" type="button" aria-label="Notifications">
          <Bell size={18} />
        </button>
      </div>
    </header>
  );
}
