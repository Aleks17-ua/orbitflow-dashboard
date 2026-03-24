import { Suspense } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { getCurrentUser } from '@/lib/seedData';

function HeaderFallback({ user }) {
  return (
    <header className="dashboard-header">
      <div>
        <p className="dashboard-header__eyebrow">Workspace</p>
        <h1 className="dashboard-header__title">{user.workspace}</h1>
      </div>
    </header>
  );
}

export default function DashboardLayout({ children }) {
  const user = getCurrentUser();

  return (
    <div className="dashboard-shell">
      <Sidebar user={user} />
      <div className="dashboard-main">
        <Suspense fallback={<HeaderFallback user={user} />}>
          <Header user={user} />
        </Suspense>
        <div className="dashboard-content">{children}</div>
      </div>
    </div>
  );
}