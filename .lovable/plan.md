# Windsurf / Devin Prompt — MegaYield Farms Replica

Copy everything inside the `===` fences below into Windsurf or Devin as your initial task prompt. It is self-contained: stack, design system, routes, copy blocks, components, SEO, and asset generation instructions.

---

```
===================== BEGIN PROMPT =====================

You are building a production-grade marketing website for **MegaYield Farms**, a youth-led South African agricultural enterprise. Build the entire site end-to-end, then run typecheck and dev server to verify.

## 1. Stack (use exactly this)

- **TanStack Start v1** (React 19, file-based routing in `src/routes/`)
- **Vite 7**
- **Tailwind CSS v4** (CSS-first config in `src/styles.css` — NO `tailwind.config.js`, NO `@tailwind` directives; use `@import "tailwindcss"` and `@theme`)
- **shadcn/ui** components (already-installed style)
- **lucide-react** icons
- TypeScript strict mode

Do NOT use Next.js, React Router DOM, or src/pages/. Root layout is `src/routes/__root.tsx`. Home is `src/routes/index.tsx`.

## 2. Brand & Design System

Position: **professional agricultural B2B business** (proven production + open to partnerships). NOT a "startup begging for funding."

Tone: confident, disciplined, understated. Reject generic AI aesthetics (no purple gradients, no Inter-everywhere).

### Colors (define as OKLCH tokens in `src/styles.css` under `@theme`)
- Deep Green primary: `oklch(0.32 0.07 150)`
- Warm Gold accent: `oklch(0.78 0.13 75)` (token name `--color-gold`)
- Warm Cream background: `oklch(0.97 0.018 90)`
- Foreground: near-black `oklch(0.18 0.01 90)`
- Card / border / muted tokens per shadcn convention, mapped via `@theme inline`

### Typography
- Headings: **Fraunces** (serif, weights 400/500/600)
- Body: **Inter** (weights 400/500/600)
- Load via `<link>` tag in `src/routes/__root.tsx` head (Google Fonts). Do NOT `@import` font URLs in CSS.
- Token names: `--font-display: "Fraunces", serif;` and `--font-sans: "Inter", sans-serif;`

### Custom utilities (via `@utility` in styles.css)
- `.container-x` — max-w-7xl mx-auto px-6 md:px-10
- `.eyebrow` — text-xs font-semibold uppercase tracking-widest text-primary
- `.btn-primary` — pill, bg-primary text-primary-foreground, inline-flex gap-2 items-center
- `.btn-gold` — pill, bg-[var(--color-gold)] text-foreground
- `.btn-outline` — pill, border, transparent bg
- Shadow var: `--shadow-lift: 0 20px 60px -20px oklch(0.18 0.01 90 / 0.25)`

## 3. Routes (7 total)

Each route MUST have its own `head()` with unique title, description, og:title, og:description. Add og:image only at leaf routes (never on `__root.tsx`).

| File | URL | Purpose |
|---|---|---|
| `src/routes/__root.tsx` | — | html shell, fonts, global meta, Outlet |
| `src/routes/index.tsx` | `/` | Home / hero / impact |
| `src/routes/about.tsx` | `/about` | Story, track record, mission, vision, values, team |
| `src/routes/produce.tsx` | `/produce` | Cayenne chillies, tomatoes, spinach |
| `src/routes/project.tsx` | `/project` | 4-phase expansion plan |
| `src/routes/why-us.tsx` | `/why-us` | 6 differentiators + partnership pathways |
| `src/routes/funding.tsx` | `/funding` | Growth partnerships (de-emphasized, not in main nav) |
| `src/routes/contact.tsx` | `/contact` | Contact info + inquiry form |
| `src/routes/sitemap[.]xml.ts` | `/sitemap.xml` | XML sitemap |
| `public/robots.txt` | — | Allow all, point to sitemap |

## 4. Shared Components (`src/components/`)

- `SiteNav.tsx` — sticky top nav, logo + 6 links: Home, About, Produce, Project, Why Us, Contact. **Funding is NOT in the main nav.** Mobile hamburger with sheet/drawer. CTA button "Start a conversation" → /contact.
- `SiteFooter.tsx` — 4 columns: brand blurb, sitemap, contact (060 486 5455, hello@megayieldfarms.co.za, Plot 787 Ten Morgan, Winterveld, Pretoria), legal. Include a "Growth partnerships" link to /funding here (not in main nav).
- `PageHeader.tsx` — props: `eyebrow`, `title`, `intro`. Gradient deep-green background, gold eyebrow, large Fraunces title.
- `InquiryForm.tsx` — name, email, phone, company (optional), inquiry type (select), message. **Inquiry types:**
  1. Supply partnership (B2B buyer)
  2. Investment / funding
  3. Strategic partnership / collaboration
  4. Employment / future apprenticeship
  5. Community / NGO partnership
  6. Schedule a farm visit
  7. General inquiry
  Submit handler: show toast (sonner), reset form. No backend required.

## 5. Page Copy (use VERBATIM where shown)

### Home hero
- Eyebrow: "RELIABLE CHILLI SUPPLY · GAUTENG, SOUTH AFRICA"
- H1 (Fraunces): "Reliable chilli pepper supplier, built on six years of disciplined production."
- Sub: "MegaYield Farms supplies cayenne chillies, tomatoes and spinach to South African retailers and distributors — with proven cycles, professional operations, and capacity to scale."
- Primary CTA: "Supply Partnership" → /contact
- Secondary CTA: "Strategic Partnerships" → /why-us

### Home stats strip (4 stats)
- 6 yrs operations · 400% chilli scale-up · 8 ha land · 2.5 ha in production

### Home dual CTA section (B2B first, then investment)
- Card 1: "Talk supply partnerships" — for buyers, distributors, retailers
- Card 2: "Explore growth partnerships" — for investors and collaborators

### About — Operational Track Record (4 stages, exact text)

**2019–2020 · Foundation**
- Launched with backyard poultry operation (10 → 400 birds)
- Developed core farm management skills
- Built operational systems and discipline
- First community support: surplus birds shared with local families

**2021–2023 · Crop trials & learning**
- Systematic trials across spinach, maize, chilli, tomatoes, onions
- Mastered crop production techniques
- Built market intelligence and sales relationships
- Refined operational procedures
- Began donating surplus spinach to local community members

**2024 · Land partnership & infrastructure**
- Secured 8-hectare land partnership (Kgomodiile Projects)
- Began infrastructure development
- Transitioned to continuous production cycles
- Established reliable supply relationships
- Formalized community donation approach

**2025–Present · Commercial production & community impact**
- Scaled chilli production by 400% (commercial viability proven)
- Established B2B supply relationships
- Maintained continuous production discipline
- Partnered with NGO (Vuka Africa Youth Hub) for produce donation
- Employed seasonal workers from Winterveld

### About — Mission (exact)
"To deliver consistent, high-quality agricultural output through efficient farming systems, disciplined execution, and unwavering commitment to supply consistency — while building sustainable value for partners, markets, and communities."
Tagline: **"Keeping people fed is our peace of mind."**

### About — Vision (exact)
"To establish MegaYield Farms as the preferred chilli pepper supplier across Gauteng by 2028 — recognised for exceptional reliability, consistent quality, scalable production capacity, and meaningful community impact."

### About — Values (5)
- **Consistency** — trust through reliable production cycles
- **Focus** — chilli production is our core; we don't chase trends
- **Discipline** — grounded in experience, honest numbers, long-term thinking
- **Growth with purpose** — scale deliberately to build something that lasts
- **Community first** — keeping people fed is our peace of mind

### Produce (3 products)
- **Cayenne Chilli Peppers** (core crop) — 0.5 ha → expanding to 2 ha, year-round cycles
- **Tomatoes** (active production) — vine-ripened, wholesale grade
- **Spinach** (active production) — fresh-cut, cool-chain handled
Plus a "Pilot crops" callout.

### Project (4 phases of 1.5 ha chilli expansion)
1. Site preparation & infrastructure
2. Planting & crop establishment
3. First commercial harvest
4. Sustained scale & impact

Impact bullets: new permanent and seasonal jobs, **future apprenticeships as we scale** (aspirational, NOT current), increased local fresh produce, expanded retail supply.

### Why Us (6 differentiators)
1. Proven track record — 6 yrs + 400% scale-up
2. Professional operations — registered enterprise (CIPC 2025/964922/07)
3. Reliable supplier — continuous cycles
4. Built for scale — 8 ha via Kgomodiile Projects partnership
5. Market validation — active B2B + engagement with Spar, OK
6. Youth-led credibility — founders under 35, eligible for SA growth programs

Then a "Multiple pathways for partnership" grid: Supply contracts / Strategic investment / Strategic collaboration / Community partnership.

### Funding page
Reframe as "Growth Partnerships." Mention engagement with NYDA, SEDA, DALRRD as part of the funding mix — but lead with the business case (proven production, expansion plan, B2B traction), not need.

### Contact
- Phone: 060 486 5455
- Email: hello@megayieldfarms.co.za
- Address: Plot 787 Ten Morgan, Winterveld, Pretoria, Gauteng
- Hours: Mon–Fri 08h00–17h00 SAST

## 6. Critical positioning rules

- **NO active apprenticeship program.** Every mention must be future-tense ("building toward…", "as we scale…").
- Funding page exists but is NOT in main nav — only linked from footer and the Why Us partnership pathways grid.
- Tone is "professional B2B operation with proven production and growth opportunities" — NOT "startup seeking funding to survive."

## 7. Assets

Generate or source 6 images, save in `src/assets/`:
- `hero-chillies.jpg` — close-up of vibrant red cayenne chillies on the vine, golden hour, shallow depth of field
- `farm-aerial.jpg` — aerial view of rows of chilli plants under blue African sky
- `harvest-hands.jpg` — hands holding freshly harvested red chillies in a wooden crate
- `produce-chillies.jpg` — pile of glossy cayenne chillies on a wooden surface
- `produce-tomatoes.jpg` — vine-ripened tomatoes, market-ready
- `produce-spinach.jpg` — bundled fresh spinach leaves

If your environment can't generate, use Unsplash placeholders with the same subject and lazy-load.

## 8. SEO

- Per-route unique title + meta description in `head()`
- og:image only on leaf routes (use the page's hero image)
- Single H1 per page
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- `public/robots.txt` allowing all + pointing to `/sitemap.xml`
- `src/routes/sitemap[.]xml.ts` listing all 7 routes

## 9. Verification before finishing

1. `bun install` (or pnpm/npm equivalent)
2. Typecheck passes
3. Dev server runs, all 7 routes load without console errors
4. Mobile nav opens and closes
5. Inquiry form shows toast on submit
6. No placeholder text ("REPLACE this", "Lorem ipsum") remains

Deliver the full repository. Ask clarifying questions only if a section's intent is genuinely ambiguous — otherwise build straight through.

====================== END PROMPT ======================
```

---

After you paste this into Windsurf/Devin, you can follow up with refinements (e.g. "use a different hero image" or "add a blog section"). Want me to also produce a shorter variant for cheaper/faster agents, or a version targeting Next.js instead?
