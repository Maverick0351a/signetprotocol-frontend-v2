# Signet Protocol Frontend — Changes Since Previous Zip

**Date:** 2025-08-29

## New
- **Compliance suite UI**: New `/compliance` page with one-click **Annex IV Dossier** generator, **PMM** summary, and **Retention** status.
- **Hero Q&A** improved: grounded prompts updated to include **Compliance Kit**, **RTL**, **PCH**, **DID/HSM**, **MCP**.
- **Receipts viewer**: Displays `adherence` fields (beta) and RTL inclusion metadata when present; simplified export verify panel.
- **Status/Metrics**: Adds quick Prometheus scrape to show exchanges, denies, fallback usage, p95 latency estimate.
- **Docs hub**: New pages for **RTL**, **PCH**, **DID** explaining proofs & benefits with code snippets.
- **Proxy API routes**: Server-side routes for `/api/exchange`, `/api/receipts/*`, `/api/compliance/*`, `/api/rtl/*` to avoid CORS and keep keys out of the browser.

## Adjusted
- Navigation updated: `Compliance`, `Playground`, `Receipts`, `Status`, `SDKs`, `Docs`.
- Playground payload includes toggles for **adherence strict** and **fallback enable** flags in `meta`.
- Design refresh: cleaner hero, stat cards, and timeline visuals.

## Removed
- No breaking removals. Old routes retained with better error messages.
