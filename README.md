# AIFAGen Admin Portal

AIFAGen Admin Portal is an internal dashboard prototype for managing and monitoring the AIFAGen platform. It brings user administration, revenue and subscriptions, job listings, job-source health, AI performance, analytics, and administrative activity into one interface.

> **Note:** This is a frontend prototype. It uses local sample data to demonstrate the interface and workflows. The Copilot does not connect to an external AI service, and actions are not connected to a production backend.

## Features

### Dashboard
- View key platform metrics and operational summaries.
- Review trends and items that may need attention.
- Navigate from dashboard insights to the relevant management section.

### Revenue & Billing
- **Revenue Overview** — review illustrative revenue and subscription metrics.
- **Subscriptions** — inspect subscription information and statuses.
- **Payments** — review payment records and related payment workflows.

### Job Management
- **Jobs** — browse job listings and manage their visibility.
- **Job Quality** — review job-quality indicators and potential listing issues.
- **Internal Jobs** — manage job postings created by the AIFAGen team.
- **Job Sources** — inspect source status and collection-run information.

### Platform Operations
- **Product Analytics** — explore product and platform usage insights.
- **Engagement** — review illustrative user-engagement information.
- **AI Usage** — review AI call volume, estimated costs, and period comparisons.
- **AI Processing** — inspect AI task reliability and processing signals, including failed-task counts and investigation notes.
- **Audit Log** — review administrative activity.
- **Settings** — access portal administration and settings.

### AIFAGen Copilot
- Open the Copilot panel from the interface.
- Use suggested prompts or enter a question about the sample platform data.
- Explore example responses for platform summaries, revenue changes, inactive Premium users, and items needing attention.
- The Copilot is a local demo experience; it does not call an external LLM or retrieve live platform data.

## How It Works

The application is a client-side React interface built with Vite.

1. The app renders a shared admin layout with grouped sidebar navigation.
2. Selecting a navigation item opens the corresponding section.
3. Pages display sample records and illustrative metrics.
4. Charts, status indicators, filters, panels, and dialogs provide a demonstration of common admin workflows.
5. The Copilot responds using local demo logic and sample data rather than a connected AI service.

Because no production backend is connected, the metrics should be treated as illustrative, not as real business or financial information. Changes made in the interface may not persist after a refresh.

## Technology Stack

- **React** — UI components and page interactions
- **Vite** — development server and build tooling
- **JavaScript / JSX** — application logic
- **CSS** — layout, responsive styling, and themes
- **ESLint** — code-quality checks, if configured in the project

The `package.json` file defines the exact dependencies and available scripts.

## Getting Started

### Prerequisites

Install Node.js (use a version supported by the project's Vite version) and npm.

Check your installation:

```bash
node --version
npm --version
```

### 1. Open the frontend directory

If you already have the project on your computer, open a terminal in the `frontend` directory—the directory containing `package.json`.

If you are cloning the repository, use your repository URL:

```bash
git clone <repository-url>
cd Aifagen-Admin-Panel/frontend
```

### 2. Install dependencies

```bash
npm install
```

If the project has a valid `package-lock.json`, you can use `npm ci` for a clean, reproducible install.

### 3. Start the development server

```bash
npm run dev
```

Open the local URL printed in the terminal. It is commonly:

```text
http://localhost:5173/
```

Keep the terminal open while developing.

### 4. Build the app

```bash
npm run build
```

Vite creates the production frontend build in the `dist` directory.

### 5. Preview the build locally

```bash
npm run preview
```

Use the URL printed by Vite to inspect the built frontend.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the frontend for deployment |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run lint checks, if this script is defined in `package.json` |

## Project Structure

The main parts of the frontend are typically organized as follows. Refer to the current source tree for the exact filenames and component locations.

```text
frontend/
├── public/       # Public static assets
├── src/
│   ├── assets/   # Images and other imported assets
│   ├── components/ # Shared layout and UI components
│   ├── data/    # Local sample data
│   ├── pages/   # Admin sections
│   ├── App.jsx  # Application shell and navigation
│   ├── App.css  # Application styles
│   ├── index.css # Global styles
│   └── main.jsx # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Current Limitations

- No production authentication or server-side admin authorization.
- No connected database or persistent backend.
- No live payment gateway or real refund processing.
- No live job-source collection or retry service.
- No external AI-provider connection; Copilot uses local demo logic.
- Dashboard and analytics figures are sample estimates.
- Some actions may be demonstrative and may not persist across page reloads.

A production deployment would require a secured backend, access control, persistent data storage, server-side validation, audited operations, and integrations for payments, AI processing, and job collection.

## Troubleshooting

**The page does not open**
- Make sure `npm run dev` is still running.
- Open the exact local URL printed in the terminal.

**The browser shows a blank page**
- Check the terminal for build errors.
- Open the browser developer console and review any runtime errors.
- Confirm dependencies were installed successfully.

**A command is unavailable**
- Check the `scripts` section in `package.json`.
- Run commands from the `frontend` directory.

**Changes are not visible**
- Save your files and check the browser console.
- Restart the development server if necessary.
- Edit files under `src`; do not edit generated files in `dist`.

## License

No license has been specified for this project yet.
