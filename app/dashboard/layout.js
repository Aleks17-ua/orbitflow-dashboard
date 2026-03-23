import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { getCurrentUser } from '@/lib/seedData';

export const metadata = {
  title: 'Dashboard'
};

export default function DashboardLayout({ children }) {
  const user = getCurrentUser();

  return (
    <div className="dashboard-shell">
      <Sidebar user={user} />
      <div className="dashboard-main">
        <Header user={user} />
        <div className="dashboard-content">{children}</div>
      </div>
    </div>
  );
}
