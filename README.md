# OrbitFlow Dashboard

OrbitFlow Dashboard is a small internal admin prototype for a subscription SaaS product. The app focuses on the parts you would expect in a real workspace: overview metrics, customer accounts, billing, settings, search, and CSV export.

## Highlights

- overview page with KPI cards and charts
- customer search from the header
- billing page with plan switching UI and invoice history
- settings form with API route handling
- protected dashboard routes with cookie-based session flow
- CSV report export
- App Router structure with reusable components

## Stack

- Next.js 15
- React 19
- JavaScript
- Recharts
- Lucide React
- plain CSS

## Preview account

- **Email:** `owner@orbitflow.app`
- **Password:** `orbitflow2026`

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project structure

```bash
app/
  api/
  dashboard/
  login/
components/
  billing/
  customers/
  layout/
  overview/
  settings/
  shared/
lib/
  seedData.js
  utils.js
middleware.js
```

## Notes

The current build uses local seed data and route handlers so the project stays self-contained. The UI is structured in a way that makes it easy to replace the data layer with a real backend later.

## Next steps

- wire the billing flow to a real provider
- persist settings in a database
- add customer filters and activity drill-downs
- add role-based permissions
