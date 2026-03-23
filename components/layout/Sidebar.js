'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import {
  BarChart3,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Settings,
  Users
} from 'lucide-react';

const navigation = [
  {
    href: '/dashboard',
    label: 'Overview',
    icon: LayoutDashboard
  },
  {
    href: '/dashboard/analytics',
    label: 'Analytics',
    icon: BarChart3
  },
  {
    href: '/dashboard/customers',
    label: 'Customers',
    icon: Users
  },
  {
    href: '/dashboard/billing',
    label: 'Billing',
    icon: CreditCard
  },
  {
    href: '/dashboard/settings',
    label: 'Settings',
    icon: Settings
  }
];

function isLinkActive(pathname, href) {
  if (href === '/dashboard') {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar({ user }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST'
      });
    } finally {
      router.replace('/login');
      router.refresh();
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <Link href="/dashboard" className="brand">
          <span className="brand__logo">S</span>
          <div>
            <strong>OrbitFlow</strong>
            <p>Revenue ops</p>
          </div>
        </Link>

        <nav className="sidebar__nav">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = isLinkActive(pathname, item.href);

            return (
              <Link
                className={clsx('sidebar__link', isActive && 'sidebar__link--active')}
                href={item.href}
                key={item.href}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="sidebar__bottom">
        <div className="profile-card">
          <div className="avatar">{user.avatar}</div>
          <div>
            <strong>{user.name}</strong>
            <p>{user.role}</p>
          </div>
        </div>

        <button className="button button--ghost sidebar__logout" type="button" onClick={handleLogout}>
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}
