'use client';

import { useState } from 'react';

export default function SettingsForm({ initialValues }) {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setValues((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('saving');

    try {
      const response = await fetch('/api/dashboard/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Failed to update');
      }

      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form className="panel settings-form" onSubmit={handleSubmit}>
      <div className="panel__header">
        <div>
          <h3>Profile & preferences</h3>
          <p className="muted">Update your workspace identity and notifications.</p>
        </div>
      </div>

      <div className="form-grid">
        <label className="field-group">
          <span>Full name</span>
          <input name="name" value={values.name} onChange={handleChange} required />
        </label>

        <label className="field-group">
          <span>Email</span>
          <input name="email" type="email" value={values.email} onChange={handleChange} required />
        </label>

        <label className="field-group">
          <span>Company</span>
          <input name="company" value={values.company} onChange={handleChange} required />
        </label>

        <label className="field-group">
          <span>Timezone</span>
          <input name="timezone" value={values.timezone} onChange={handleChange} required />
        </label>
      </div>

      <div className="switch-list">
        <label className="switch-row">
          <div>
            <strong>Email notifications</strong>
            <p className="muted">Receive important account and customer updates.</p>
          </div>
          <input
            name="emailNotifications"
            type="checkbox"
            checked={values.emailNotifications}
            onChange={handleChange}
          />
        </label>

        <label className="switch-row">
          <div>
            <strong>Weekly reports</strong>
            <p className="muted">Get a summary of revenue, usage and churn each week.</p>
          </div>
          <input
            name="weeklyReports"
            type="checkbox"
            checked={values.weeklyReports}
            onChange={handleChange}
          />
        </label>

        <label className="switch-row">
          <div>
            <strong>Product updates</strong>
            <p className="muted">Be notified about new dashboard features and releases.</p>
          </div>
          <input
            name="productUpdates"
            type="checkbox"
            checked={values.productUpdates}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="settings-form__footer">
        {status === 'success' ? <p className="success-message">Settings saved successfully.</p> : null}
        {status === 'error' ? <p className="form-error">Could not save settings.</p> : null}

        <button className="button button--primary" type="submit" disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving...' : 'Save changes'}
        </button>
      </div>
    </form>
  );
}
