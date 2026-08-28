## Goal

Write a single prompt that bolt.new can consume to rebuild the MegaYield Farms site as an exact replica — no missing pages, no invented copy, no broken imports.

## Deliverable

One new file: **`.lovable/bolt-prompt.md`**, containing a copy-paste prompt block plus short usage notes at the top.

## Key decision: how bolt.new gets the images

bolt.new runs in the browser (WebContainer) and cannot receive our binary files, so the prompt will tell it to reference every image by its **absolute URL on the published site** (`https://awesome-site-quest.lovable.app/...`) rather than importing from `src/assets/`. This keeps the replica pixel-identical without any upload step, and the prompt notes the images can be downloaded and localised later.

The published URL is also given to bolt.new up front as a visual reference, as requested — but the prompt makes clear the written spec is authoritative, because bolt cannot reliably scrape a JS-rendered site.

## What the prompt will contain

1. **Framing for bolt.new** — build the whole project in one pass, no placeholders, no "TODO", no Lorem, every import must resolve.
2. **Reference link** — the published URL, marked as visual reference only.
3. **Stack pin** — TanStack Start v1 (React 19, file-based routes under `src/routes/`), Vite, Tailwind CSS v4 CSS-first (no `tailwind.config.js`), lucide-react, sonner, TypeScript strict, `@/*` alias. Plus a stated fallback: if bolt's environment cannot scaffold TanStack Start, use Vite + React + TanStack Router with the identical file structure and per-page `<head>` metadata.
4. **Full `src/styles.css`** — verbatim: the OKLCH paper/charcoal/field-green palette, `@theme inline` token map, Newsreader / IBM Plex Sans / IBM Plex Mono font tokens, and every `@utility` (`container-x`, `eyebrow`, `display-xl`, `display-lg`, `lede`, `rule`, `btn-solid`, `btn-line`, `link-rule`).
5. **Font loading rule** — Google Fonts via `<link>` in the root route head, never `@import` in CSS.
6. **File tree** — 8 routes (`index`, `about`, `produce`, `operations`, `partnerships`, `contact`, `privacy`, `terms`), the `sitemap[.]xml.ts` server route, 4 components (`SiteNav`, `SiteFooter`, `PageHeader`, `InquiryForm`), `public/robots.txt`.
7. **Image URL table** — every image with its absolute published URL, the routes that use it, and its alt text.
8. **Component specs** — `SiteNav` (6 links, sticky, transparent-overlay-until-scroll mode for the home hero, mono phone number, mobile toggle), `SiteFooter` (dark charcoal, logo + blurb, Pages nav, contact block, CIPC line, Privacy/Terms), `PageHeader` (asymmetric 12-column grid + optional image band and caption), `InquiryForm` (border-bottom inputs, 5 enquiry types, success state, no backend).
9. **Verbatim page copy** — every heading, lede, numbered section and body paragraph for all 8 pages: home hero "Growing a More Productive Future.", the 01–05 home sections, the 6-stage operations list, the 6 "Building Toward Scale" foundations, About's 01–06 sections with leadership and company table, Produce flagship/tomatoes/pilot crops, the 7-stage Operations journey, the 4 Partnership categories, Contact details, and the Privacy/Terms sections.
10. **SEO block** — exact per-route title, description, og tags and canonical using `https://megayieldfarms.co.za`, plus the Organization and WebSite JSON-LD.
11. **Correctness rules** — the failure modes to avoid: `createFileRoute` string must match filename, single `<h1>` per page, no hash-anchor fake pages, no dark-mode toggle, no stat/hectare/volume claims that aren't in the copy.
12. **Verification checklist** — install, typecheck, dev, then click every route and confirm titles differ and no console errors.

## Out of scope

- No changes to the live site.
- No backend, CMS, auth or database in the replica — the public site is static marketing pages.
- No new imagery generated; the replica reuses the published images by URL.
