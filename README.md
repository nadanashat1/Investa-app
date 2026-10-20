# Investa

A React front-end for an investment platform that connects founders and investors. This was my graduation project, built as a team project, and it was my first larger React project.

## What is in the app

- **Public pages:** landing page, investor FAQ, "Our team" page and a "Raise money" page.
- **Login and forgot-password screens.**
- **Dashboard** with charts for portfolio performance, investment return and revenue growth.
- **Investors, invoices and finances pages:** tables and summaries of income, expenses and net profit.
- **Product management:** list, add, edit and delete products through a REST API.
- **Reports:** investment return, profit margin trend, monthly loss and profit, portfolio performance and revenue growth.
- **Chat page** with a simple bot UI, light and dark mode, notifications, profile and settings pages.

## Tech stack

React 18, Vite, Material UI (MUI), MUI X Charts and Data Grid, Recharts, Chart.js, React Router, Zustand, Axios.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL that Vite prints (usually http://localhost:5173).

## Known limitations

- This repo is the front-end only. The dashboard, login and product pages call a separate backend API that is not included here. That API was run through a temporary ngrok tunnel during development, so those pages will not load live data now. Some pages use sample data instead.
- Route protection is switched off (every route is open) and some forms, such as profile password change, are UI only.
