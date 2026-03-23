'use client';

import { useState } from 'react';

export default function ExportReportButton() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleExport() {
    try {
      setIsLoading(true);
      const response = await fetch('/api/dashboard/export');

      if (!response.ok) {
        throw new Error('Failed to export report');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      const disposition = response.headers.get('Content-Disposition');
      const fileNameMatch = disposition?.match(/filename="?([^\"]+)"?/i);
      const fileName = fileNameMatch?.[1] || 'saas-report.csv';

      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      window.alert('Could not export the report. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button className="button button--primary" type="button" onClick={handleExport} disabled={isLoading}>
      {isLoading ? 'Exporting...' : 'Export report'}
    </button>
  );
}
