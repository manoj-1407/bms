# BMS Wellnest Website

A modern Next.js marketing site for BMS Wellnest, built around a holistic wellness brand story: Body, Mind and Soul.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Lucide React
- App Router

## Project structure

- `src/app` — route pages and app layout
- `src/components` — reusable UI, layout, and section components
- `src/data` — content and site data
- `src/lib` — utilities
- `src/types` — shared TypeScript types

## Local development

```bash
npm install
npm run dev
```

Then open:

- http://localhost:3000

## Useful scripts

```bash
npm run dev      # local development server
npm run build    # production build
npm run start    # production server
npm run lint     # ESLint validation
npx tsc --noEmit # TypeScript validation
```

## Routes

- `/` — home
- `/about` — about story and approach
- `/programs` — program overview
- `/founder` — founder story
- `/results` — milestones and outcomes
- `/testimonials` — member stories
- `/locations` — branch details
- `/team` — team overview
- `/gallery` — gallery and categories
- `/faq` — frequently asked questions
- `/contact` — inquiry and contact options

## Important implementation notes

- Internal navigation uses `next/link` with safe href validation.
- CTA buttons use the shared `Button` component and guard placeholder or non-routed values.
- Content is intentionally data-driven so updates can be made in `src/data` rather than hardcoding each page.
- Theme handling is client-side and avoids hydration mismatch by reading the existing DOM theme before React hydration.

## Verification checklist

The app has been validated with the following checks:

```bash
npm run lint
npm run build
npx tsc --noEmit
```

These checks were run against the project and the site was also smoke-tested across the core routes to confirm rendering and navigation are healthy.
