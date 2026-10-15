# AIFAGen Admin Portal

AIFAGen Admin Portal is an internal dashboard prototype for managing and monitoring the AIFAGen platform. It brings user administration, revenue and subscriptions, job listings, job-source health, AI performance, analytics, and administrative activity into one interface.

Live Demo: https://aifagen-admin-portal.vercel.app/

> **Note:** This is an admin prototype using local sample data. Copilot can call Groq through a local server-side API when configured. The dashboard's account and operations workflows are not connected to a production backend.

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
- Use suggested prompts or ask follow-up questions about the current workspace data.
- Copilot uses Groq chat completions and receives a compact, anonymized operational context. User names, emails, and phone numbers are excluded.
- Job hide requests keep a separate review and confirmation flow; the assistant cannot execute changes itself.
- The context comes from local prototype records and illustrative estimates, not a production database.

## How It Works

The application is a React interface built with Vite, with a small local Node API that proxies Copilot requests to Groq. The API key stays on the server and is never sent to browser code.

1. The app renders a shared admin layout with grouped sidebar navigation.
2. Selecting a navigation item opens the corresponding section.
3. Pages display sample records and illustrative metrics.
4. Charts, status indicators, filters, panels, and dialogs provide a demonstration of common admin workflows.
5. The Copilot sends the recent conversation and a redacted summary of current workspace state to the local API. The API sends it to Groq and returns the response.

Metrics should be treated as illustrative, not as verified business or financial information. Supported edits persist in the current browser's `localStorage`; they are not shared across users or devices.

## Technology Stack

- **React** — UI components and page interactions
- **Vite** — development server and build tooling
- **JavaScript / JSX** — application logic
- **CSS** — layout, responsive styling, and themes
- **ESLint** — code-quality checks, if configured in the project

The `package.json` file defines the exact dependencies and available scripts.

## Getting Started

### Prerequisites

Install Node.js 20.19+ or 22.12+ and npm.

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

### 3. Configure the Groq API key

Create a local environment file from the example:

```powershell
Copy-Item .env.example .env.local
```

Edit `.env.local` and set `GROQ_API_KEY` to a newly generated or rotated Groq key. Keep this file private; it is ignored by Git. `GROQ_MODEL` is optional and defaults to `openai/gpt-oss-120b`.

### 4. Start the local API and frontend

Start both the local API and Vite together from one terminal:

```bash
npm run dev
```

Open the local URL printed in the terminal. It is commonly:

```text
http://localhost:5173/
```

The `dev` command starts the local Groq proxy and Vite together. Keep the terminal open while developing. Vite forwards `/api` requests to the local API server. If you only need the frontend, use `npm run dev:web`; run `npm run api` separately alongside it when you need Copilot.

### Deploy to Vercel

The `api/health.js` and `api/chat.js` files are Vercel Node.js functions for the existing `/api/health` and `/api/chat` frontend requests. They share the same Groq request and conversation logic as the local API. No `vercel.json` is needed; Vercel detects functions in the root `api/` directory automatically.

In the Vercel project settings, configure:

1. **Root Directory:** the `frontend` folder containing this README and `package.json` (if the repository contains the frontend in a subfolder).
2. **Build Command:** `npm run build`.
3. **Output Directory:** `dist` (or let the Vite framework preset detect it).
4. **Environment Variables:** set `GROQ_API_KEY` to a valid key for Production, and also Preview/Development if those environments need Copilot.

Redeploy after adding or changing the environment variable. Keep the key in Vercel's server-side environment settings; do not add it to frontend variables such as `VITE_*`, source files, or committed environment files. `GROQ_MODEL` can optionally select another supported model; the default is `openai/gpt-oss-120b`.

### 5. Build the app

```bash
npm run build
```

Vite creates the production frontend build in the `dist` directory.

### 6. Preview the build locally

```bash
npm run preview
```

Use the URL printed by Vite to inspect the built frontend.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the frontend and local Groq proxy together |
| `npm run dev:web` | Start only the Vite frontend |
| `npm run api` | Start the local Groq proxy on `127.0.0.1:8787` |
| `npm run build` | Build the frontend for deployment |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run lint checks, if this script is defined in `package.json` |

## Project Structure

The main parts of the frontend are typically organized as follows. Refer to the current source tree for the exact filenames and component locations.

```text
frontend/
├── public/       # Public static assets
├── api/          # Vercel Copilot serverless routes
├── server/       # Local API runner and shared Groq handler
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

The local Copilot service and environment template are also part of the project:

- `server/dev.mjs` — starts Vite and the local API together.
- `server/index.mjs` — loopback-only Node API proxy to Groq.
- `server/copilot-api.mjs` — shared request handling for local and Vercel routes.
- `api/health.js` and `api/chat.js` — Vercel serverless endpoints.
- `.env.example` — placeholder configuration; copy it to `.env.local` and add a rotated key.

## Current Limitations

- No production authentication or server-side admin authorization.
- No connected database or persistent backend.
- No live payment gateway or real refund processing.
- No live job-source collection or retry service.
- The local Groq proxy is for development only and binds to `127.0.0.1`; it has no user authentication. Do not expose it publicly.
- The Vercel Copilot functions keep the Groq key server-side, but this admin prototype does not authenticate or authorize requests. Restrict access to the deployment before using it with sensitive data.
- Dashboard and analytics figures are sample estimates.
- User and payment workflows remain local prototype behavior and do not connect to production services.

A production deployment would require a secured backend, access control, persistent data storage, server-side validation, audited operations, and integrations for payments, AI processing, and job collection.

## Troubleshooting

**The page does not open**
- Make sure `npm run dev` is still running.
- Open the exact local URL printed in the terminal.
- Stop any older Vite terminal with Ctrl+C before restarting. Vite now requires port 5173 so the page cannot silently open an old frontend without the Copilot API.

**Copilot says the API is offline**
- Stop the running development server with Ctrl+C, then run `npm run dev` from the `frontend` directory and open `http://localhost:5173/`.
- If the header says `Set GROQ_API_KEY in .env.local`, add a valid key to `.env.local` and restart the dev server. The Copilot panel checks the API status every 10 seconds.

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
