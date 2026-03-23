const currentUser = {
  id: 'usr_01',
  name: 'Alex Morgan',
  email: 'owner@orbitflow.app',
  role: 'Product Manager',
  company: 'OrbitFlow',
  plan: 'Growth',
  avatar: 'AM',
  timezone: 'Europe/Kyiv'
};

const dashboardSummary = {
  revenue: {
    label: 'Monthly revenue',
    value: 48230,
    change: 12.4,
    description: 'vs previous month'
  },
  activeUsers: {
    label: 'Active users',
    value: 1248,
    change: 8.1,
    description: '7-day rolling average'
  },
  conversionRate: {
    label: 'Conversion rate',
    value: 6.82,
    change: 1.9,
    description: 'trial to paid'
  },
  churnRate: {
    label: 'Churn rate',
    value: 1.48,
    change: -0.42,
    description: 'paid customer churn'
  }
};

const revenueSeries = [
  { month: 'Jan', revenue: 18000, target: 20000 },
  { month: 'Feb', revenue: 22800, target: 22000 },
  { month: 'Mar', revenue: 24500, target: 25000 },
  { month: 'Apr', revenue: 27900, target: 27000 },
  { month: 'May', revenue: 30100, target: 29000 },
  { month: 'Jun', revenue: 33500, target: 31000 },
  { month: 'Jul', revenue: 36200, target: 34000 },
  { month: 'Aug', revenue: 38100, target: 36000 },
  { month: 'Sep', revenue: 40200, target: 39000 },
  { month: 'Oct', revenue: 43800, target: 42000 },
  { month: 'Nov', revenue: 46100, target: 44000 },
  { month: 'Dec', revenue: 48230, target: 47000 }
];

const trafficSources = [
  { name: 'Organic', value: 41 },
  { name: 'Paid Ads', value: 21 },
  { name: 'Referral', value: 16 },
  { name: 'Social', value: 12 },
  { name: 'Partners', value: 10 }
];

const activityFeed = [
  {
    id: 'act_1',
    title: 'New enterprise lead created',
    description: 'Finvera requested a workspace review for 35 seats.',
    time: '10 minutes ago',
    status: 'success'
  },
  {
    id: 'act_2',
    title: 'Stripe webhook processed',
    description: 'Invoice INV-2048 has been marked as paid.',
    time: '35 minutes ago',
    status: 'neutral'
  },
  {
    id: 'act_3',
    title: 'Weekly churn warning',
    description: '3 accounts are at risk based on product usage.',
    time: '1 hour ago',
    status: 'warning'
  },
  {
    id: 'act_4',
    title: 'Feature adoption increased',
    description: 'Dashboard reports usage grew by 18% this week.',
    time: '3 hours ago',
    status: 'success'
  }
];

const teamPerformance = [
  {
    id: 'tm_1',
    member: 'Sarah Chen',
    role: 'Customer Success',
    mrrImpact: 9200,
    healthScore: 94,
    renewals: 12
  },
  {
    id: 'tm_2',
    member: 'David Park',
    role: 'Sales',
    mrrImpact: 14100,
    healthScore: 89,
    renewals: 9
  },
  {
    id: 'tm_3',
    member: 'Olivia Martinez',
    role: 'Support',
    mrrImpact: 6100,
    healthScore: 96,
    renewals: 15
  },
  {
    id: 'tm_4',
    member: 'Noah Kim',
    role: 'Growth',
    mrrImpact: 11300,
    healthScore: 91,
    renewals: 11
  }
];

const analyticsHighlights = [
  {
    id: 'an_1',
    label: 'Average session duration',
    value: '8m 42s',
    trend: '+14%'
  },
  {
    id: 'an_2',
    label: 'Feature adoption',
    value: '73%',
    trend: '+9%'
  },
  {
    id: 'an_3',
    label: 'NPS score',
    value: '52',
    trend: '+4'
  }
];

const customers = [
  {
    id: 'cus_001',
    company: 'Finvera',
    owner: 'Emma Foster',
    email: 'emma@finvera.com',
    plan: 'Enterprise',
    mrr: 4200,
    status: 'Active',
    health: 'Healthy',
    lastActive: '2 hours ago'
  },
  {
    id: 'cus_002',
    company: 'Loomstack',
    owner: 'Chris Nolan',
    email: 'chris@loomstack.io',
    plan: 'Growth',
    mrr: 1490,
    status: 'Active',
    health: 'At Risk',
    lastActive: '1 day ago'
  },
  {
    id: 'cus_003',
    company: 'NexaLabs',
    owner: 'Ava Brooks',
    email: 'ava@nexalabs.dev',
    plan: 'Starter',
    mrr: 390,
    status: 'Trial',
    health: 'Healthy',
    lastActive: '45 minutes ago'
  },
  {
    id: 'cus_004',
    company: 'Coremint',
    owner: 'Daniel Reed',
    email: 'daniel@coremint.co',
    plan: 'Growth',
    mrr: 1750,
    status: 'Past Due',
    health: 'Needs Attention',
    lastActive: '3 days ago'
  },
  {
    id: 'cus_005',
    company: 'PulsePeak',
    owner: 'Sophia Young',
    email: 'sophia@pulsepeak.ai',
    plan: 'Enterprise',
    mrr: 5200,
    status: 'Active',
    health: 'Healthy',
    lastActive: '5 hours ago'
  },
  {
    id: 'cus_006',
    company: 'Draftloop',
    owner: 'Michael Bell',
    email: 'michael@draftloop.app',
    plan: 'Starter',
    mrr: 250,
    status: 'Cancelled',
    health: 'Churned',
    lastActive: '2 weeks ago'
  }
];

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    description: 'For early-stage teams launching their first workflow.',
    features: ['1 workspace', 'Up to 5 users', 'Basic analytics', 'Email support'],
    current: false
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 99,
    description: 'For growing SaaS teams that need collaboration and metrics.',
    features: ['5 workspaces', 'Unlimited projects', 'Advanced analytics', 'Priority support'],
    current: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 249,
    description: 'For companies scaling revenue operations and team access.',
    features: ['Unlimited workspaces', 'SSO & roles', 'Custom reports', 'Dedicated manager'],
    current: false
  }
];

const invoices = [
  {
    id: 'INV-2048',
    date: '2026-03-01',
    amount: 99,
    status: 'Paid'
  },
  {
    id: 'INV-2017',
    date: '2026-02-01',
    amount: 99,
    status: 'Paid'
  },
  {
    id: 'INV-1989',
    date: '2026-01-01',
    amount: 99,
    status: 'Paid'
  }
];

const settings = {
  name: currentUser.name,
  email: currentUser.email,
  company: currentUser.company,
  timezone: currentUser.timezone,
  emailNotifications: true,
  weeklyReports: true,
  productUpdates: false
};

const credentials = {
  email: 'owner@orbitflow.app',
  password: 'orbitflow2026'
};

export function getCurrentUser() {
  return currentUser;
}

export function getDashboardSummary() {
  return dashboardSummary;
}

export function getRevenueSeries() {
  return revenueSeries;
}

export function getTrafficSources() {
  return trafficSources;
}

export function getActivityFeed() {
  return activityFeed;
}

export function getTeamPerformance() {
  return teamPerformance;
}

export function getAnalyticsHighlights() {
  return analyticsHighlights;
}

export function getCustomers() {
  return customers;
}

export function getPlans() {
  return plans;
}

export function getInvoices() {
  return invoices;
}

export function getSettings() {
  return settings;
}

export function getCredentials() {
  return credentials;
}
