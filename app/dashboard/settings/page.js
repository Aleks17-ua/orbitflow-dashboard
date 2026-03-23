import PageHeading from '@/components/shared/PageHeading';
import SettingsForm from '@/components/settings/SettingsForm';
import { getSettings } from '@/lib/seedData';

export default function SettingsPage() {
  const settings = getSettings();

  return (
    <div className="grid gap-24">
      <PageHeading
        eyebrow="Settings"
        title="Control workspace and notification preferences"
        description="Manage workspace defaults, email preferences, and notification rules."
      />

      <SettingsForm initialValues={settings} />
    </div>
  );
}
