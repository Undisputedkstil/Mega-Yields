## Goal

Create a self-contained prompt package for **Warp** (terminal AI agent) that reproduces the current MegaYield Farms website 1:1 — stack, routes, tokens, copy, components, and **actual image assets**.

## Deliverable

A new folder **`.lovable/warp-prompt/`** containing:

1. **`prompt.md`** — the full Warp agent prompt (one fenced block).
2. **`assets/`** — actual binary copies of every image the current site uses, ready for Warp to drop into `src/assets/`.
3. **`assets.json`** — asset manifest mapping filename → purpose/alt-text/route usage (helps the agent place each image correctly).

The user can zip `.lovable/warp-prompt/` and feed `prompt.md` to Warp; the prompt will instruct Warp to copy the bundled `assets/` folder into the scaffolded project.

## What the prompt will include

1. **Role & mode instructions** — tuned for Warp’s terminal-first agent: run scaffold commands, create files, then verify.
2. **Exact stack pin** — TanStack Start v1, React 19, Vite 7, Tailwind CSS v4 (CSS-first in `src/styles.css`, no `tailwind.config.js`), shadcn/ui, lucide-react, sonner, TypeScript strict.
3. **Setup commands** — `bunx create-tsrouter-app@latest ...`, `bun add ...`, `bunx shadcn@latest init`, `bunx shadcn@latest add ...`.
4. **Asset copy instruction** — copy the bundled `assets/` folder into `src/assets/` before building routes.
5. **File tree** — exact paths for routes, components, styles, sitemap, robots.
6. **Design tokens** — full `src/styles.css` block: OKLCH paper/charcoal/field-green palette, Newsreader + IBM Plex Sans + IBM Plex Mono fonts, `@utility` definitions (`container-x`, `eyebrow`, `display-xl`, `display-lg`, `lede`, `btn-solid`), `@theme inline` mapping.
7. **Routes (6 + sitemap + robots)** — Home, About, Our Produce, Operations, Partnerships, Contact; filename ↔ `createFileRoute` mapping; per-route `head()` with unique title/description/og; canonical domain `https://megayieldfarms.co.za`.
8. **Components** — `SiteNav` (6 links, overlay mode), `SiteFooter`, `PageHeader` (asymmetrical editorial header), `InquiryForm` (simple border-bottom inputs, sonner toast, no backend).
9. **Verbatim copy blocks** — Home hero/operations/building blocks, About company profile/Our Story/leadership, Produce flagship + secondary + pilot crops, Operations 7-stage journey, Partnerships categories, Contact details.
10. **Asset manifest reference** — what each image is and where it is used.
11. **SEO requirements** — unique metadata, single H1, semantic HTML, sitemap.xml route, robots.txt.
12. **Warp verification checklist** — terminal commands (`bun install`, `bunx tsgo --noEmit`, `bun dev`) + manual checks.

## Assets to bundle

Copy actual binaries from `src/assets/` into `.lovable/warp-prompt/assets/`:

- `hero-chillies.jpg`
- `farm-aerial.jpg`
- `harvest-hands.jpg`
- `produce-chillies.jpg`
- `produce-tomatoes.jpg`
- `produce-spinach.jpg`
- `ops-irrigation.jpg`
- `ops-packing.jpg`
- `pilot-onions.jpg`
- `pilot-beetroot.jpg`
- `pilot-green-beans.jpg`
- `pilot-seedlings.jpg`
- `pilot-tomatoes-shade.jpg`
- `megayield-logo.png` (plus its `.asset.json` pointer)

Note: `sustainability-soil.jpg` is no longer referenced by the current 6-page site and will be omitted from the bundle.

## Out of scope

- No changes to the live site code or routes.
- No backend, CMS, auth, or Supabase setup in the prompt (the current public site is static marketing pages only).
- The prompt will not generate new images; it will reuse the exact bundled assets.
