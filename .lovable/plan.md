## Goal

Create a single, self-contained prompt file that any VS Code AI assistant (GitHub Copilot Chat, Cursor, Cline, Continue, Roo) can consume to reproduce the MegaYield Farms site 1:1 — same stack, routes, tokens, copy, and components.

## Deliverable

A new file **`.lovable/vscode-prompt.md`** containing one long fenced prompt block, structured for VS Code agent workflows (multi-file edits, terminal commands, verification steps).

## What the prompt will include

1. **Role & mode instructions** — tuned for VS Code agents: "create files at these exact paths, run these terminal commands, then verify."
2. **Exact stack pin** — TanStack Start v1, React 19, Vite 7, Tailwind v4 (CSS-first, no `tailwind.config.js`), shadcn/ui, lucide-react, TypeScript strict.
3. **Setup commands** — `bun create`, `bun add` list for every dependency, shadcn init, font `<link>` in `__root.tsx`.
4. **File tree** — every file to create with its exact path (routes, components, styles, sitemap, robots).
5. **Design tokens** — full `src/styles.css` block: OKLCH colors (Deep Green, Warm Gold, Cream), Fraunces + Inter tokens, `@utility` definitions (`container-x`, `eyebrow`, `btn-primary`, `btn-gold`, `btn-outline`, `--shadow-lift`), `@theme inline` shadcn mapping.
6. **Routes (7 + sitemap + robots)** — filename ↔ `createFileRoute` path mapping, per-route `head()` requirements (unique title/description/og), og:image only on leaves.
7. **Components** — `SiteNav` (6 links, no Funding in main nav, mobile sheet), `SiteFooter` (4 cols, Growth partnerships in footer only), `PageHeader`, `InquiryForm` (7 inquiry types, sonner toast, no backend).
8. **Verbatim copy blocks** — Home hero + stats + dual CTA, About track record (4 stages), Mission, Vision, 5 Values, Produce (3 products), Project (4 phases), Why Us (6 differentiators + 4 pathways), Funding/Growth Partnerships framing, Contact details.
9. **Positioning guardrails** — apprenticeships always future-tense; Funding page exists but not in main nav; B2B-first tone.
10. **Asset generation** — 6 image prompts with filenames for `src/assets/`, Unsplash fallback guidance.
11. **SEO requirements** — per-route metadata, single H1, semantic HTML, sitemap.xml route, robots.txt.
12. **VS Code-specific verification checklist** — terminal commands to run (`bun install`, typecheck, `bun dev`), what to click through, what "done" looks like.

## Differences vs the existing `.lovable/plan.md` (Windsurf prompt)

- Framed for a VS Code agent workflow (explicit file-create + terminal-run steps) instead of a one-shot Devin brief.
- Adds explicit `bun add` command list up front.
- Adds a per-file "create this file with this content shape" checklist so Copilot/Cursor can iterate file by file.
- Keeps the existing Windsurf prompt untouched.

## Out of scope

- No changes to the live site's code.
- No new images generated now — the prompt tells the target agent to generate them.
