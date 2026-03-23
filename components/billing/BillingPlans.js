'use client';

import { useMemo, useState } from 'react';
import PlanCard from '@/components/billing/PlanCard';

export default function BillingPlans({ initialPlans }) {
  const [currentPlanId, setCurrentPlanId] = useState(initialPlans.find((plan) => plan.current)?.id || initialPlans[0]?.id);
  const [pendingPlanId, setPendingPlanId] = useState('');
  const [message, setMessage] = useState('');

  const plans = useMemo(() => {
    return initialPlans.map((plan) => ({
      ...plan,
      current: plan.id === currentPlanId
    }));
  }, [currentPlanId, initialPlans]);

  async function handlePlanChange(plan) {
    if (plan.id === currentPlanId) {
      setMessage(`You are already managing the ${plan.name} plan.`);
      return;
    }

    try {
      setPendingPlanId(plan.id);
      setMessage('');

      await new Promise((resolve) => {
        window.setTimeout(resolve, 700);
      });

      setCurrentPlanId(plan.id);
      setMessage(`${plan.name} is now your current plan.`);
    } finally {
      setPendingPlanId('');
    }
  }

  return (
    <div className="grid gap-18">
      <section className="billing-grid">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isLoading={pendingPlanId === plan.id}
            onAction={() => handlePlanChange(plan)}
          />
        ))}
      </section>

      {message ? <p className="billing-feedback">{message}</p> : null}
    </div>
  );
}
