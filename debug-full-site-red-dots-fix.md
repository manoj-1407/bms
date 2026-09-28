# Debug Session: full-site-red-dots-fix
**Status:** [OPEN]
**Session ID:** full-site-red-dots-fix
**Created:** 2026-09-28
**Symptoms:** User reports "so many red lines red dots all over the folder - fix every bug every red and yellow error - audit every file deeply every line of code - thoroughly audit and test the website yourself - make the website fully functional - update all files properly even files like readme and all". Prior screenshot shows: (a) browser console `<a> cannot be descendant of <a>` hydration error (Navbar), (b) IDE Explorer `tsconfig.json` red error badge marked `1` + Problems panel `1`. Prior browser E2E showed About page server error: `TypeError: Cannot read properties of undefined (reading 'map') at AboutSection`.

## Hypotheses (Falsifiable)
| ID | Statement | Test / Evidence Location | Status |
|---|---|---|---|
| H1 | **IDE TS server stale cache** causes tsconfig.json red "1" badge + Problems panel "1". `npx tsc --noEmit` returns 0 errors, GetDiagnostics returns 0, but VS Code LSP caches a stale tsconfig diagnostic from before edits. | Step 2: Compare GetDiagnostics (LSP realtime) vs `npx tsc --noEmit` (standalone strict) vs IDE visible markers. Re-check after all fixes + TS server reload hint. | [IN PROGRESS] |
| H2 | **AboutSection.tsx has unguarded `.map()` on undefined array** → page `/about` SSR runtime crash `Cannot read properties of undefined (reading 'map')`. Exact line: one of the `steps.map`, `pillars.map`, `principleList.map` etc. inside AboutSection JSX has no truthy guard before `.map()`. | Step 3: Instrument each `.map()` site with guards + debug-point counts. Reproduce: navigate `/about` in browser → check crash stack vs instrumented counts. | [IN PROGRESS] |
| H3 | **Sibling sections have unguarded `.map()`/`.startsWith()` on optional fields** → `/results`, `/faq`, `/gallery`, `/team`, `/locations`, `/contact` route pages crash similarly. Locations / Testimonials / Team were patched in prior sessions but HowItWorksSection, ResultsSection, FAQSection, GallerySection may still have raw `.map()` on possibly-undefined data arrays (e.g. `steps`, `milestones`, `faqs`, `gallery`, `results.items`). | Step 3: Instrument all 13 sections' `.map()` call sites with debug-point + add minimal guards first; reproduce every route page → confirm which crash pre-fix. | [IN PROGRESS] |
| H4 | **README.md + AGENTS.md + CLAUDE.md are stale / do not match current codebase** → "yellow error" of incorrect / missing docs (wrong Next setup instructions, no mention of data-driven architecture, no Link vs `<a>` rules, no TeamMember/Testimonial optional-field patterns, 14 pages not listed, no build/lint commands). | Step 4: Diff README claims vs actual `package.json` scripts, actual route count, actual architecture in `src/`, then rewrite README properly. | [IN PROGRESS] |
| H5 | **Placeholder text or bracket-style `[X]` strings still leak visible to end-users** on routes not yet tested (`/results`, `/gallery`, `/faq`, `/team`, `/locations`, `/contact`), causing "red flag" UX issues that look like "red dots" of broken data in page rendering. | Step 3+5: E2E every route, run `document.body.innerText.match(/\[[A-Z_][\w\s\-\[\]]+\]/)` regex on every page → confirm bodyClean true post-fix. | [IN PROGRESS] |

## Evidence Log
| Timestamp | Run ID | Hypothesis | Location | Event | Raw Data |
|---|---|---|---|---|---|
| (pre) | pre | H1-H5 | baseline | step 2 diagnostics | TBD |

## Verification Checklist
- [ ] `npm run lint` = 0 errors
- [ ] `npx tsc --noEmit` strict = 0 errors
- [ ] `npm run build` = 0 errors, all 14 pages prerendered
- [ ] GetDiagnostics (IDE LSP) = 0 files with errors
- [ ] Every route page loads in browser with no server error (crashed=false)
- [ ] Every route page nestedAnchors=0
- [ ] Every route page bodyClean=true (no `[BRACKET]` placeholder text visible)
- [ ] README, AGENTS, CLAUDE docs up to date with scripts, pages, architecture, rules
- [ ] user confirmation A/B/C/D

## Cleanup Pending User Confirmation Only
- Remove debug instrumentation regions (only after user picks A)
- Delete session files + env only after user confirms "Fixed / No longer reproducible"
