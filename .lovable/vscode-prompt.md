# VS Code Agent Prompt — MegaYield Farms Replica

Paste everything between the `===` fences into your VS Code AI assistant (GitHub Copilot Chat in Agent mode, Cursor Composer, Cline, Continue, or Roo Code) as the initial task. It is self-contained: stack, setup commands, tokens, routes, verbatim copy, components, and verification steps.

---

```
===================== BEGIN PROMPT =====================

You are a senior full-stack engineer working inside VS Code. Build a
production-grade marketing website for **MegaYield Farms**, a youth-led
South African agricultural enterprise. Work file by file, run terminal
commands where indicated, and finish with the verification checklist.

## 0. How to work

- Create every file at the EXACT path shown. No `src/pages/`, no `app/`.
- Use the integrated terminal for install / typecheck / dev commands.
- After each major section (setup, styles, components, routes), stop
  and confirm the build compiles before continuing.
- Ask ONLY if a section is genuinely ambiguous; otherwise build straight
  through.

## 1. Stack (pin exactly)

- **TanStack Start v1** (React 19, file-based routing under `src/routes/`)
- **Vite 7**
- **Tailwind CSS v4** — CSS-first config in `src/styles.css`. NO
  `tailwind.config.js`. NO `@tailwind base/components/utilities`. Use
  `@import "tailwindcss"` + `@theme` + `@utility`.
- **shadcn/ui** (Radix + class-variance-authority pattern)
- **lucide-react** icons
- **sonner** for toasts
- **TypeScript strict mode**

Root layout is `src/routes/__root.tsx`. Home is `src/routes/index.tsx`.

## 2. Setup commands (run in terminal)

```bash
# Scaffold with the official TanStack Start starter, then cd in
bunx create-tsrouter-app@latest megayield-farms --template=file-router --tailwind --add-ons=start
cd megayield-farms

# Install runtime deps
bun add lucide-react sonner clsx tailwind-merge class-variance-authority
bun add @radix-ui/react-slot @radix-ui/react-dialog

# Initialise shadcn (accept defaults, choose src alias `@/*`)
bunx shadcn@latest init
bunx shadcn@latest add button sheet input textarea select label sonner
```

If `bun` is not available, use `pnpm` or `npm` equivalents.

## 3. Design tokens — `src/styles.css` (full file)

Top of file rules: `@import` FIRST, then `@theme`, then `:root`, then
`@layer base`, then `@utility` blocks. Never `@import` a Google-Fonts
URL — load fonts via `<link>` in `__root.tsx`.

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --font-display: "Fraunces", Georgia, serif;
  --font-sans: "Inter", system-ui, sans-serif;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-gold: var(--gold);
  --color-gold-foreground: var(--gold-foreground);
  --color-cream: var(--cream);
  --color-ink: var(--ink);
}

:root {
  --radius: 0.5rem;

  --background: oklch(0.985 0.012 95);      /* warm cream */
  --foreground: oklch(0.22 0.04 145);
  --cream: oklch(0.97 0.018 90);
  --ink: oklch(0.18 0.03 150);

  --card: oklch(1 0 0);
  --card-foreground: oklch(0.22 0.04 145);

  --primary: oklch(0.36 0.09 148);          /* deep green */
  --primary-foreground: oklch(0.98 0.015 90);

  --secondary: oklch(0.94 0.03 95);
  --secondary-foreground: oklch(0.22 0.04 145);

  --muted: oklch(0.95 0.018 95);
  --muted-foreground: oklch(0.45 0.03 140);

  --accent: oklch(0.92 0.04 95);
  --accent-foreground: oklch(0.22 0.04 145);

  --gold: oklch(0.74 0.13 78);              /* warm gold */
  --gold-foreground: oklch(0.2 0.04 145);

  --destructive: oklch(0.55 0.22 27);
  --destructive-foreground: oklch(0.98 0 0);

  --border: oklch(0.88 0.02 100);
  --input: oklch(0.9 0.02 100);
  --ring: oklch(0.36 0.09 148);

  --shadow-soft: 0 1px 2px oklch(0.2 0.04 145 / 0.06),
                 0 8px 24px oklch(0.2 0.04 145 / 0.08);
  --shadow-lift: 0 4px 12px oklch(0.2 0.04 145 / 0.1),
                 0 24px 48px oklch(0.2 0.04 145 / 0.14);

  --gradient-hero: linear-gradient(135deg, oklch(0.36 0.09 148) 0%,
                                          oklch(0.28 0.07 150) 60%,
                                          oklch(0.22 0.05 150) 100%);
  --gradient-gold: linear-gradient(135deg, oklch(0.78 0.14 80),
                                           oklch(0.68 0.13 70));
}

@layer base {
  * { border-color: var(--color-border); }
  html { scroll-behavior: smooth; }
  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4 {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
    font-weight: 500;
  }
}

@utility container-x {
  width: 100%;
  margin-inline: auto;
  padding-inline: 1.25rem;
  max-width: 80rem;
  @media (min-width: 768px) { padding-inline: 2rem; }
}

@utility eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-gold);
}

@utility btn-primary {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.85rem 1.5rem; border-radius: 999px;
  background: var(--color-primary); color: var(--color-primary-foreground);
  font-weight: 600; font-size: 0.9rem;
  box-shadow: var(--shadow-soft);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover { transform: translateY(-1px); box-shadow: var(--shadow-lift); }
}

@utility btn-gold {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.85rem 1.5rem; border-radius: 999px;
  background: var(--gradient-gold); color: var(--color-gold-foreground);
  font-weight: 600; font-size: 0.9rem;
  box-shadow: var(--shadow-soft);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover { transform: translateY(-1px); box-shadow: var(--shadow-lift); }
}

@utility btn-outline {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.85rem 1.5rem; border-radius: 999px;
  border: 1px solid var(--color-border); background: transparent;
  color: var(--color-foreground); font-weight: 600; font-size: 0.9rem;
  transition: background 0.2s ease, border-color 0.2s ease;
  &:hover { background: var(--color-muted); border-color: var(--color-primary); }
}
```

## 4. File tree (create in this order)

```
public/
  robots.txt
src/
  styles.css                        (from Section 3)
  routes/
    __root.tsx                      (fonts, global head, Outlet)
    index.tsx                       (/)
    about.tsx                       (/about)
    produce.tsx                     (/produce)
    project.tsx                     (/project)
    why-us.tsx                      (/why-us)
    funding.tsx                     (/funding — NOT in main nav)
    contact.tsx                     (/contact)
    sitemap[.]xml.ts                (/sitemap.xml — bracketed dot in filename)
  components/
    SiteNav.tsx
    SiteFooter.tsx
    PageHeader.tsx
    InquiryForm.tsx
  assets/
    hero-chillies.jpg
    farm-aerial.jpg
    harvest-hands.jpg
    produce-chillies.jpg
    produce-tomatoes.jpg
    produce-spinach.jpg
```

## 5. `__root.tsx` requirements

- Load fonts with `<link>` in the head (never `@import` a URL in CSS):
  - Fraunces (400, 500, 600) + Inter (400, 500, 600) from Google Fonts.
- Sitewide meta only: viewport, charSet, `og:type: "website"`,
  `og:site_name`, a default Organization JSON-LD. **No canonical here**
  (canonical is per-leaf). **No og:image here** (leaf-only).
- Render `<Outlet />` in the body. Include `<Toaster />` from sonner.

## 6. Routes — filename ↔ `createFileRoute` path

Each route MUST have its own `head()` with UNIQUE `title`, `description`,
`og:title`, `og:description`. Include `og:url` per route, and
`<link rel="canonical">` in `links` on the leaf. `og:image` only on
leaves that own a real hero image. Domain:
`https://awesome-site-quest.lovable.app`.

| File                          | createFileRoute path |
|-------------------------------|----------------------|
| `src/routes/index.tsx`        | `/`                  |
| `src/routes/about.tsx`        | `/about`             |
| `src/routes/produce.tsx`      | `/produce`           |
| `src/routes/project.tsx`      | `/project`           |
| `src/routes/why-us.tsx`       | `/why-us`            |
| `src/routes/funding.tsx`      | `/funding`           |
| `src/routes/contact.tsx`      | `/contact`           |
| `src/routes/sitemap[.]xml.ts` | `/sitemap.xml`       |

Sitemap route returns `new Response(xml, { headers: { "content-type": "application/xml" } })`
listing all 7 HTML routes.

`public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://awesome-site-quest.lovable.app/sitemap.xml
```

## 7. Shared components

### `SiteNav.tsx`
Sticky, `bg-background/85 backdrop-blur-md`, `border-b`. Left: logo +
"MegaYield Farms" wordmark + tagline "Purpose in every yield". Center
(lg+): 6 links — **Home · About · Produce · Our Project · Why Us · Contact**.
**Funding is NOT in the main nav.** Right: gold pill CTA
`tel:+27604865455` on md+. Mobile: hamburger toggles a panel with the
same 6 links.

### `SiteFooter.tsx`
Deep-green background, light text. 4 columns:
1. Logo + brand blurb + gold tagline.
2. "Explore" links: About, Produce, Our Project, Why Us, **Growth partnerships** (→ /funding), Contact.
3. Contact: Phone 060 486 5455, Email hello@megayieldfarms.co.za,
   Address Plot 787 Ten Morgan, Winterveld, Pretoria, Gauteng.
4. (Optional) hours: Mon–Fri 08h00–17h00 SAST.
Bottom rule: `© {year} MegaYield Farms (Pty) Ltd. CIPC 2025/964922/07.`

### `PageHeader.tsx`
Props: `eyebrow`, `title`, `intro?`. Deep-green background with a
radial gold+green gradient overlay. Gold eyebrow, Fraunces title,
white/75 intro.

### `InquiryForm.tsx`
Fields: full name (required), organisation, email (required, type=email),
phone (type=tel), **inquiry type select** with these EXACT options:
1. Supply partnership (B2B buyer)
2. Investment / funding
3. Strategic partnership / collaboration
4. Employment / future apprenticeship
5. Community partnership
6. Schedule a farm visit
7. General inquiry

Message textarea (required). Submit handler calls `toast.success(...)`
from sonner and resets the form — no backend. Props: `defaultInquiry?`,
`compact?`.

## 8. Verbatim copy blocks

### Home hero
- Eyebrow: `RELIABLE CHILLI SUPPLY · GAUTENG, SOUTH AFRICA`
- H1 (Fraunces): **Reliable chilli pepper supplier, built on six years of disciplined production.**
- Sub: MegaYield Farms supplies cayenne chillies, tomatoes and spinach to South African retailers and distributors — with proven cycles, professional operations, and capacity to scale.
- Primary CTA: **Supply Partnership** → `/contact`
- Secondary CTA: **Strategic Partnerships** → `/why-us`
- Stats strip (4): `6 yrs operations · 400% chilli scale-up · 8 ha land · 2.5 ha in production`

### Home dual CTA (order matters: B2B first)
- Card 1 — *For B2B buyers*: **Talk supply partnerships** — for buyers, distributors, retailers → `/contact`
- Card 2 — *For investors & collaborators*: **Explore growth partnerships** — strategic investment and collaboration → `/funding`

### Home impact section
Heading quote: **"Keeping people fed is our peace of mind."**
Four impact tiles:
- Local jobs — seasonal workers employed from Winterveld
- Produce donation — partnered with Vuka Africa Youth Hub
- Food security — fresh produce reaching local households
- Future training — **building toward apprenticeship programs as we scale** (never present-tense)

### About — Operational Track Record (4 stages, EXACT)

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

### About — Mission (EXACT)
> To deliver consistent, high-quality agricultural output through efficient farming systems, disciplined execution, and unwavering commitment to supply consistency — while building sustainable value for partners, markets, and communities.
Tagline: **Keeping people fed is our peace of mind.**

### About — Vision (EXACT)
> To establish MegaYield Farms as the preferred chilli pepper supplier across Gauteng by 2028 — recognised for exceptional reliability, consistent quality, scalable production capacity, and meaningful community impact.

### About — Values (5)
- **Consistency** — trust through reliable production cycles
- **Focus** — chilli production is our core; we don't chase trends
- **Discipline** — grounded in experience, honest numbers, long-term thinking
- **Growth with purpose** — scale deliberately to build something that lasts
- **Community first** — keeping people fed is our peace of mind

### Produce (3 products + pilot callout)
- **Cayenne Chilli Peppers** — core crop, 0.5 ha → expanding to 2 ha, year-round cycles
- **Tomatoes** — vine-ripened, wholesale grade
- **Spinach** — fresh-cut, cool-chain handled
- Pilot crops callout: onions, maize under trial

### Project — 1.5 ha chilli expansion, 4 phases
1. Site preparation & infrastructure
2. Planting & crop establishment
3. First commercial harvest
4. Sustained scale & impact
Impact bullets: new permanent + seasonal jobs, **future apprenticeships as we scale** (aspirational), increased local fresh produce, expanded retail supply.

### Why Us — 6 differentiators
1. **Proven track record** — 6 years operating + 400% scale-up
2. **Professional operations** — registered enterprise (CIPC 2025/964922/07)
3. **Reliable supplier** — continuous production cycles
4. **Built for scale** — 8 ha via Kgomodiile Projects partnership
5. **Market validation** — active B2B relationships + engagement with Spar, OK
6. **Youth-led credibility** — founders under 35, eligible for SA growth programs

Then a "Multiple pathways for partnership" grid:
- Supply contracts
- Strategic investment
- Strategic collaboration
- Community partnership

### Funding page — reframed as "Growth Partnerships"
Lead with the business case (proven production, expansion plan, B2B
traction). Mention engagement with **NYDA**, **SEDA**, **DALRRD** as
part of the funding mix — never as "we need money to survive."

### Contact
- Phone: **060 486 5455**
- Email: **hello@megayieldfarms.co.za**
- Address: **Plot 787 Ten Morgan, Winterveld, Pretoria, Gauteng**
- Hours: **Mon–Fri 08h00–17h00 SAST**

## 9. Positioning guardrails (non-negotiable)

- **No active apprenticeship program.** Every mention MUST be future-tense
  ("building toward…", "as we scale…"). Never claim current apprentices.
- **Funding page exists but is NOT in the main nav.** Linked only from
  the footer ("Growth partnerships") and the Why Us pathways grid.
- **Tone** = professional B2B operation with proven production and growth
  opportunities. Never "startup seeking funding to survive."

## 10. Assets

Generate or source 6 JPGs into `src/assets/`. If your VS Code assistant
can't generate images, use Unsplash URLs with the same subject matter
and `loading="lazy"`.

- `hero-chillies.jpg` — close-up of vibrant red cayenne chillies on the vine, golden hour, shallow depth of field
- `farm-aerial.jpg` — aerial rows of chilli plants under blue African sky
- `harvest-hands.jpg` — hands holding freshly harvested red chillies in a wooden crate
- `produce-chillies.jpg` — pile of glossy cayenne chillies on a wooden surface
- `produce-tomatoes.jpg` — vine-ripened tomatoes, market-ready
- `produce-spinach.jpg` — bundled fresh spinach leaves

## 11. SEO checklist (per route)

- Unique `title` and `description` in `head()`.
- `og:title`, `og:description`, `og:url` in `meta`.
- `<link rel="canonical">` in `links` on leaf routes (self-referential).
- `og:image` only where there's a real hero (index, produce, project).
- Single `<h1>` per page. Semantic `<header> <main> <section> <footer>`.
- `sitemap.xml` route + `public/robots.txt`.

## 12. Verification (run before you finish)

```bash
bun install                     # if not already
bunx tsgo --noEmit              # typecheck
bun dev                         # http://localhost:3000
```

Manual pass:
1. All 7 routes load with no console errors.
2. Nav shows 6 links — **Funding is NOT among them**.
3. Mobile hamburger opens & closes.
4. Contact form shows a sonner toast on submit and resets.
5. Every route's `<title>` differs (check DOM head).
6. `/sitemap.xml` returns valid XML listing all 7 pages.
7. No placeholder text ("Lorem", "REPLACE this") anywhere.

Deliver the full repository. Ask clarifying questions ONLY if a section
is genuinely ambiguous — otherwise build straight through.

====================== END PROMPT ======================
```

---

Two things to note when handing this to a VS Code agent:

1. **Agent mode matters.** GitHub Copilot Chat needs `@workspace /new` or Agent mode; Cursor needs Composer (⌘I) with "Agent" enabled; Cline / Roo / Continue work out of the box.
2. **Feed the prompt in one shot**, then let the agent create files. If it stalls after ~15 files, prompt it with "continue from where you stopped" — it will resume against the file tree in Section 4.
