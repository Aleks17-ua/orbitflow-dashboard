'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BarChart3, Lock, Mail, Sparkles } from 'lucide-react';

const initialForm = {
  email: 'owner@orbitflow.app',
  password: 'orbitflow2026'
};

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Login failed');
        return;
      }

      router.push('/dashboard');
      router.refresh();
    } catch (requestError) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card auth-card--info">
        <div className="badge-row">
          <span className="badge badge--dark">
            <Sparkles size={16} />
            Workspace preview
          </span>
        </div>
        <h1>Revenue, customers, and billing in one place.</h1>
        <p>
          A compact internal dashboard for teams that want a clear view of subscription metrics, customer accounts, billing, and workspace settings.
        </p>

        <div className="feature-list">
          <div className="feature-item">
            <BarChart3 size={18} />
            <span>Revenue and growth overview</span>
          </div>
          <div className="feature-item">
            <Mail size={18} />
            <span>Customer accounts and activity</span>
          </div>
          <div className="feature-item">
            <Lock size={18} />
            <span>Protected workspace access</span>
          </div>
        </div>
      </section>

      <section className="auth-card auth-card--form">
        <div>
          <p className="eyebrow">Welcome back</p>
          <h2>Sign in to your workspace</h2>
          <p className="muted">Use the preview account below.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="field-group">
            <span>Email</span>
            <div className="input-wrap">
              <Mail size={18} />
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </label>

          <label className="field-group">
            <span>Password</span>
            <div className="input-wrap">
              <Lock size={18} />
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
          </label>

          {error ? <p className="form-error">{error}</p> : null}

          <button className="button button--primary button--full" type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="preview-box">
          <strong>Preview account</strong>
          <p>Email: owner@orbitflow.app</p>
          <p>Password: orbitflow2026</p>
        </div>
      </section>
    </main>
  );
}
