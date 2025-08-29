# Signet Protocol Website (v2) — Vercel Ready

Modern Next.js frontend for **signetprotocol.com** featuring:
- **Hero AI Q&A** panel grounded on Signet docs
- **Compliance** page with one-click dossier generation (Annex IV, PMM, Retention, CE/DoC, GPAI)
- **Playground** to call `/v1/exchange`
- **Receipts** viewer & export verifier
- **Status/Metrics** probe (healthz + Prometheus quick stats)
- **SDKs & Integrations** hub
- **RTL/PCH/DID** explainer pages

## Quick Start (local)

```bash
pnpm i # or npm i / yarn
cp .env.example .env.local
pnpm dev
```

Open http://localhost:3000

## Environment Variables

- `NEXT_PUBLIC_SIGNET_API_BASE` — your backend (e.g., https://api.signetprotocol.com)
- `SIGNET_DEMO_API_KEY` — optional demo key for playground
- `SIGNET_QA_MODE` — `proxy` or `local`; when `proxy`, set `SIGNET_QA_URL` to an upstream QA service

## Deploy to Vercel

1. Push this folder to GitHub
2. Import the repo in Vercel
3. Set env vars in Vercel Project Settings
4. Deploy

## Notes on Compliance features
- **Compliance** page hits new endpoints (`/v1/compliance/dossier`, `/v1/compliance/dashboard`)
- **Receipts** viewer displays adherence/RTL metadata when present
- **Status** parses Prometheus metrics for exchanges/denies/fallbacks

Security: API keys are **never** stored client-side; proxy routes accept a temporary key input per action.
