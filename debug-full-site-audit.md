# Debug Session: full-site-audit

Status: **[OPEN]**
Date: 2026-09-28
Symptoms: Nested `<a>` hydration error in browser console, IDE showing red dots/red lines across files, tsconfig.json shows error marker, Problems panel shows issues. User reports "red lines red dots all over".

## Hypotheses (Falsifiable)

| ID | Hypothesis | How to Verify |
|----|-----------|---------------|
| H1 | `Navbar.tsx` mobile menu wraps `<Link href="/contact">` (outer `<a>`) around `<Button href="/contact">` (renders inner `<a>/<Link>`), producing illegal nested `<a>` → hydration mismatch. | Inspect Navbar.tsx lines 130-145, reproduce on mobile viewport, check browser console for exact error matching this component tree. |
| H2 | `tsconfig.json` has a config-level error (e.g. malformed JSON, unsupported compiler option, missing `include`/`exclude` or bad `paths` alias). | Open tsconfig.json, run `npx tsc --noEmit --showConfig`, check IDE Problems panel for exact message. |
| H3 | Other sections/pages have similar nested anchor patterns (e.g. wrapping `<Button href>` in a `<Link>`) that don't error on desktop but trigger on SSR hydration. | Grep codebase for patterns: `<Link.*href=.*>\s*.*<Button.*href` or `<Button.*href=.*>\s*.*<Button.*href`; audit every file. |
| H4 | Several files have unused imports/variables or strict-mode TypeScript "implicit any" violations that surface as IDE "yellow/red dots" but don't block the `next build` (because Next uses its own TS defaults). | Run standalone `tsc --noEmit` with strict flags separate from `next build`; check each file's diagnostics. |
| H5 | Components call `.startsWith("[")` on values typed as potentially `undefined` in sections, causing occasional runtime `undefined is not a function` errors in edge cases (e.g. LocationsSection `loc.address.startsWith` before truthy-check in some branches). | Audit every `.startsWith(` call; verify left-hand side is narrowed; run pages and force undefined data paths. |

## Evidence Log

| Timestamp | Source | Finding | Related Hypothesis |
|-----------|--------|---------|-------------------|
| - | User screenshot | Browser console error: "In HTML, <a> cannot be a descendant of <a>. This will cause a hydration error." Call tree: `<LinkComponent href="/contact" onClick={...} className="mt-2">` wrapping `<a className="mt-2">` | **H1 CONFIRMED visually** |
| - | User screenshot | VS Code Explorer shows `tsconfig.json` with red error badge (1) | **H2 TBD** |
| - | User screenshot | Problems panel shows "1" issue badge next to "Problems 1 Terminal" tab | **H2/H4 TBD** |

## Changes Made
*(populated during fix phase)*

## Verification Checklist
- [ ] No hydration errors in console on any page (desktop + mobile viewports)
- [ ] No "nested a" warnings anywhere
- [ ] tsconfig.json no error marker
- [ ] `npm run lint` → 0 errors
- [ ] `npm run build` → 0 errors, all 14 pages prerender
- [ ] `npx tsc --noEmit` (standalone) → 0 errors
- [ ] GetDiagnostics → 0 files with errors
- [ ] Manual navigation test: Home → About → Programs → Founder → Results → Stories → Locations → Team → Gallery → FAQ → Contact — no crashes
- [ ] Mobile viewport test: Navbar open/close, click links, no nested anchor errors
