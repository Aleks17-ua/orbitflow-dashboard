import './globals.css';

export const metadata = {
  title: {
    default: 'OrbitFlow Dashboard',
    template: '%s | OrbitFlow Dashboard'
  },
  description: 'Admin dashboard prototype for subscription analytics, customer accounts, billing, and workspace settings.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
