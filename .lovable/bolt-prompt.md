# bolt.new Prompt — MegaYield Farms Exact Replica

**How to use:** open bolt.new, paste everything between the `=====` fences as your first message, and let it build in one pass. The image URLs below are permanent CDN links — they will not break when the original site is redeployed, so bolt can load them directly.

---

```
===================== BEGIN PROMPT =====================

Build a complete, production-ready marketing website for MEGAYIELD FARMS, a
South African agricultural company. This is a 1:1 replica of an existing live
site. Build the ENTIRE project in one pass.

VISUAL REFERENCE (look at it, but this written spec is authoritative):
https://awesome-site-quest.lovable.app

HARD RULES — do not violate any of these:
- No placeholders. No "TODO". No Lorem Ipsum. No "add your content here".
- Use the copy in this prompt VERBATIM. Do not paraphrase, shorten, or invent.
- Do NOT invent statistics, hectares, tonnages, volumes, years of operation,
  client names or certifications. If a number is not in this prompt, it does
  not go on the site.
- Every import must resolve. Every route in the nav must exist.
- Exactly ONE <h1> per page.
- No dark-mode toggle. No cookie banner. No backend, database or auth.
- Do not fake pages with #hash anchors. Each page is a real route.

============================================================
1. STACK
============================================================

- TanStack Start v1 (React 19) with file-based routing under src/routes/
- Vite
- Tailwind CSS v4, CSS-first config in src/styles.css.
  NO tailwind.config.js. NO @tailwind base/components/utilities.
  Use @import "tailwindcss" + @theme inline + @utility.
- lucide-react (icons), sonner (toasts)
- TypeScript strict, path alias @/* -> ./src/*

Root layout: src/routes/__root.tsx. Home: src/routes/index.tsx.

FALLBACK: if you cannot scaffold TanStack Start in this environment, use
Vite + React + TypeScript + TanStack Router with the SAME file structure,
the SAME components, the SAME copy, and per-page <head> metadata (react-helmet
or a small useEffect head hook). Never silently drop pages or metadata.

============================================================
2. FILE TREE
============================================================

public/
  robots.txt
src/
  styles.css
  routes/
    __root.tsx
    index.tsx              -> /
    about.tsx              -> /about
    produce.tsx            -> /produce
    operations.tsx         -> /operations
    partnerships.tsx       -> /partnerships
    contact.tsx            -> /contact
    privacy.tsx            -> /privacy
    terms.tsx              -> /terms
    sitemap[.]xml.ts       -> /sitemap.xml
  components/
    SiteNav.tsx
    SiteFooter.tsx
    PageHeader.tsx
    InquiryForm.tsx

The string in createFileRoute("...") MUST match the filename's route id
exactly (e.g. src/routes/about.tsx -> createFileRoute("/about")).

============================================================
3. DESIGN SYSTEM — src/styles.css (use verbatim)
============================================================

Aesthetic: editorial "ink on warm paper". Newsreader serif headlines, IBM Plex
Sans body, IBM Plex Mono for small caps labels. Hairline 1px rules instead of
cards and shadows. Almost no border radius. Asymmetric 12-column grids.
NOT a SaaS template: no glassmorphism, no neon gradients, no floating cards,
no rounded-2xl shadow-xl boxes, no emoji.

```css
@import "tailwindcss";

@theme inline {
  --font-display: "Newsreader", Georgia, "Times New Roman", serif;
  --font-sans: "IBM Plex Sans", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  --radius-sm: 1px;
  --radius-md: 2px;
  --radius-lg: 2px;
  --radius-xl: 3px;

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
  --color-clay: var(--clay);
  --color-ink: var(--ink);
  --color-paper: var(--paper);
  --color-wheat: var(--wheat);
}

:root {
  --radius: 0.125rem;

  /* Warm paper, charcoal ink, field green, muted earth */
  --paper: oklch(0.966 0.009 85);
  --background: oklch(0.966 0.009 85);
  --foreground: oklch(0.235 0.008 70);
  --ink: oklch(0.205 0.008 70);

  --card: oklch(0.987 0.005 85);
  --card-foreground: oklch(0.235 0.008 70);

  --primary: oklch(0.42 0.068 148);
  --primary-foreground: oklch(0.975 0.008 85);

  --secondary: oklch(0.925 0.014 85);
  --secondary-foreground: oklch(0.235 0.008 70);

  --muted: oklch(0.932 0.012 85);
  --muted-foreground: oklch(0.475 0.014 75);

  --accent: oklch(0.915 0.02 70);
  --accent-foreground: oklch(0.235 0.008 70);

  --clay: oklch(0.545 0.098 48);
  --wheat: oklch(0.79 0.07 78);

  --border: oklch(0.855 0.012 80);
  --input: oklch(0.855 0.012 80);
  --ring: oklch(0.42 0.068 148);
}

@layer base {
  * { border-color: var(--color-border); }
  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4 {
    font-family: var(--font-display);
    font-weight: 400;
    letter-spacing: -0.015em;
  }
  ::selection { background: var(--color-primary); color: var(--color-primary-foreground); }
}

@utility container-x {
  width: 100%;
  margin-inline: auto;
  padding-inline: 1.25rem;
  max-width: 84rem;
  @media (min-width: 768px) { padding-inline: 2.5rem; }
}

@utility eyebrow {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-muted-foreground);
}

@utility display-xl {
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 0.98;
  letter-spacing: -0.025em;
  font-size: clamp(2.6rem, 6.4vw, 5.1rem);
}

@utility display-lg {
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 1.02;
  letter-spacing: -0.022em;
  font-size: clamp(2rem, 4.2vw, 3.4rem);
}

@utility lede {
  font-size: 1.0625rem;
  line-height: 1.65;
  color: var(--color-muted-foreground);
  @media (min-width: 768px) { font-size: 1.1875rem; }
}

@utility rule { border-top: 1px solid var(--color-border); }

@utility btn-solid {
  display: inline-flex; align-items: center; gap: 0.55rem;
  padding: 0.8rem 1.4rem; border-radius: 1px;
  background: var(--color-primary); color: var(--color-primary-foreground);
  font-size: 0.8125rem; font-weight: 600; letter-spacing: 0.04em;
  text-transform: uppercase; transition: background 0.18s ease;
  &:hover { background: oklch(0.35 0.06 148); }
}

@utility btn-line {
  display: inline-flex; align-items: center; gap: 0.55rem;
  padding: 0.8rem 1.4rem; border-radius: 1px;
  border: 1px solid currentColor;
  font-size: 0.8125rem; font-weight: 600; letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: background 0.18s ease, color 0.18s ease;
  &:hover { background: var(--color-foreground); color: var(--color-background); }
}

@utility link-rule {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-size: 0.8125rem; font-weight: 600; letter-spacing: 0.04em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-foreground);
  padding-bottom: 0.2rem;
  transition: opacity 0.18s ease;
  &:hover { opacity: 0.6; }
}
```

FONTS: load with a <link> in the root route head. NEVER @import a Google Fonts
URL inside CSS.
https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap

============================================================
4. IMAGES — use these exact absolute URLs in <img src="...">
============================================================

Do not download, do not generate, do not substitute stock photos.
Base = https://awesome-site-quest.lovable.app

LOGO   /__l5e/assets-v1/8fb75308-f5c2-4c84-941d-6177a86d6aa3/megayield-logo.png
HERO   /__l5e/assets-v1/7d930fd1-bd51-48ea-a576-539e2c81af88/hero-chillies.jpg
AERIAL /__l5e/assets-v1/3b43f936-21b9-4954-811c-7ecefc9f9efa/farm-aerial.jpg
HANDS  /__l5e/assets-v1/18715516-4af1-4f6f-a1e0-0a4e24d021cf/harvest-hands.jpg
CHILLI /__l5e/assets-v1/f0a7885e-03c6-4ae2-a025-33976c033d35/produce-chillies.jpg
TOMATO /__l5e/assets-v1/f76c8dda-096c-445d-9d98-13d539bc223b/produce-tomatoes.jpg
SPINACH /__l5e/assets-v1/842a2369-a509-44af-acaa-f57bf41ab2bb/produce-spinach.jpg
SHADETOM /__l5e/assets-v1/d2281938-08d0-4bc5-b3cd-6fd7eed50805/pilot-tomatoes-shade.jpg
ONIONS /__l5e/assets-v1/aa010705-1580-4cb5-806c-3941da4763fc/pilot-onions.jpg
BEETROOT /__l5e/assets-v1/2d2c6153-2499-4d21-a976-efbb6f7d5de6/pilot-beetroot.jpg
BEANS  /__l5e/assets-v1/952b18ef-08fa-4bdc-ba48-05238567aa42/pilot-green-beans.jpg
SEEDLINGS /__l5e/assets-v1/207798a7-7407-46c2-8add-5f40d536471c/pilot-seedlings.jpg
IRRIGATION /__l5e/assets-v1/53ea3812-98ce-4f71-a6e9-2c04455014b9/ops-irrigation.jpg
PACKING /__l5e/assets-v1/f985630a-6857-4158-adcd-64f6ff3900b3/ops-packing.jpg
SOIL   /__l5e/assets-v1/7a74b397-3c6a-456e-8a62-78097b9e2588/sustainability-soil.jpg

Define them once in a shared module (e.g. src/lib/images.ts) exporting the full
absolute URLs, and import from there. All images below the fold: loading="lazy".
The home hero: fetchPriority="high".

============================================================
5. COMPONENTS
============================================================

--- SiteNav.tsx ---
Props: { overlay?: boolean }.
Sticky top, z-50, h-16, container-x, flex justify-between.
Links (exactly these 6, in order):
  Home /, About /about, Our Produce /produce, Operations /operations,
  Partnerships /partnerships, Contact /contact
Left: logo img (h-9) + "MegaYield Farms" in font-display text-lg (hidden below sm).
Center: the 6 links, gap-7, text-[0.8125rem] font-medium, hidden below lg,
  active link gets font-semibold + border-b border-current pb-0.5.
Right: "060 486 5455" as tel:+27604865455 in font-mono text-xs (hidden below md),
  plus a lucide Menu/X toggle button visible below lg.
Overlay behaviour: when overlay is true AND window.scrollY <= 40 AND the mobile
menu is closed, the header is bg-transparent text-white with border-white/20 and
the logo gets "brightness-0 invert". Otherwise bg-background text-foreground with
border-border. Attach a passive scroll listener; clean it up on unmount.
Mobile panel: full-width, bg-background, links stacked with divide-y, closes on click.

--- SiteFooter.tsx ---
Background oklch(0.205 0.008 70), text oklch(0.93 0.008 85).
Top area: container-x, grid md:grid-cols-12, gap-12, py-16, border-b border-white/10.
  Col 1 (md:col-span-5): logo (h-12) + this paragraph in text-white/60:
    "MegaYield Farms is an early-stage South African agricultural enterprise
     developing a scalable fresh-produce operation, with chilli peppers and
     tomatoes at the centre of current production."
  Col 2 (md:col-span-3): heading "Pages" (eyebrow, text-white/45), links:
     About, Our Produce, Operations, Partnerships, Contact
  Col 3 (md:col-span-4): heading "Contact" (eyebrow, text-white/45):
     060 486 5455 (tel:+27604865455)
     hello@megayieldfarms.co.za (mailto:)
     Plot 787 Ten Morgan, Winterveld / Pretoria, Gauteng, South Africa
     "Mon – Fri · 08h00 – 17h00 SAST" in font-mono text-xs text-white/40
Bottom bar: container-x, py-6, font-mono text-[0.6875rem] uppercase
  tracking-[0.12em] text-white/40, flex md:justify-between:
  "© {current year} MegaYield Farms (Pty) Ltd · CIPC 2025/964922/07"
  then links Privacy (/privacy), Terms (/terms), and the text "megayieldfarms.co.za".

--- PageHeader.tsx ---
Props: { eyebrow, title, intro?, image?, imageAlt?, caption? }.
<section class="border-b border-border">
  container-x, grid md:grid-cols-12, gap-8, py-14 md:py-20
  Left (md:col-span-5): eyebrow <p>, then <h1 class="mt-5 display-lg">{title}</h1>
  Right (md:col-span-6 md:col-start-7 md:self-end): <p class="lede max-w-xl">{intro}</p>
If image: a <figure class="border-t border-border"> with the image at
  h-[38vh] md:h-[52vh] w-full object-cover, and if caption, a figcaption in
  container-x py-3 font-mono text-[0.6875rem] uppercase tracking-[0.12em]
  text-muted-foreground.

--- InquiryForm.tsx ---
Props: { defaultInquiry?: string; compact?: boolean }.
No backend. On submit: preventDefault, show a "Sending" state for ~500ms, then
replace the form with a success panel.
Wrapper: <form class="border border-border bg-card p-6 md:p-8">.
Grid: "grid gap-5 md:grid-cols-2" (or "grid gap-5" when compact).
Fields: Full name (required), Organisation, Email (type=email, required),
Phone (type=tel), then full-width: Enquiry type <select>, then Message <textarea rows=5>
required with placeholder "Volumes, crops, timelines or the reason for your enquiry."
Enquiry type options, exactly these five:
  General enquiry / Supply enquiry / Partnership / Investment / Media
Every input & textarea & select: "w-full border-b border-input bg-transparent py-2
text-sm outline-none transition focus:border-primary" — border-bottom only, NOT boxed.
Labels use the eyebrow utility; required fields get a * in text-[var(--color-clay)].
Submit button: class "mt-8 btn-solid", label "Send enquiry" / "Sending".
Success panel:
  eyebrow "Received"
  h3 (font-display text-2xl): "Thank you — your message is with our team."
  p: "We reply to enquiries within one business day. For urgent supply matters,
      call 060 486 5455."

============================================================
6. PAGE: / (src/routes/index.tsx)  — <SiteNav overlay />
============================================================

SECTION A — HERO (section class "relative -mt-16", so the nav overlays it)
  HERO image, class "h-[86vh] min-h-[560px] w-full object-cover",
  alt "Ripening chilli peppers on the plant at MegaYield Farms".
  Absolute overlay gradient:
    bg-[linear-gradient(90deg,oklch(0.16_0.01_70/0.82)_0%,oklch(0.16_0.01_70/0.55)_45%,transparent_88%)]
  Content pinned bottom-left inside container-x, pb-14 md:pb-20:
    eyebrow (text-white/70): South Africa · Fresh Produce · Est. 2024
    h1 (display-xl text-white, max-w-4xl): Growing a More Productive Future.
    p (text-white/80, max-w-xl): MegaYield Farms is a South African agricultural
      enterprise developing a scalable fresh-produce operation, with chilli peppers
      and tomatoes at the centre of our current production strategy.
    Buttons: "Explore Our Produce" -> /produce (btn-solid)
             "Work With Us" -> /partnerships (btn-line text-white)

SECTION B — WHO WE ARE (border-b border-border, container-x, grid md:grid-cols-12,
py-20 md:py-28)
  Left (md:col-span-5):
    eyebrow: 01 — Who we are
    h2 (display-lg): Built From the Ground Up.
    HANDS image below it, aspect-4/3 object-cover, hidden below md,
    alt "Harvested chillies being sorted by hand".
  Right (md:col-span-6 md:col-start-7):
    p (lede text-foreground): MegaYield Farms is an early-stage agricultural
      enterprise actively developing a commercial fresh-produce operation in
      Gauteng, South Africa.
    p: We are not a finished or fully scaled agricultural corporation, and we do
      not present ourselves as one. We are a working farm: planting, irrigating,
      harvesting and supplying customers while we build the systems that will
      carry larger volumes.
    p: Every cycle teaches us something about our soil, our water, our crops and
      our market. That learning is deliberately fed back into planning — which
      crops to expand, which to trial, and which infrastructure to build next.
    p: Our ambition is unambiguous: to become a dependable commercial supplier of
      fresh produce, grown responsibly and delivered consistently.
    blockquote (border-l-2 border-[var(--color-clay)] pl-6 font-display text-2xl
      md:text-3xl): “We produce today while preparing for tomorrow.”
    link-rule -> /about : Read the company profile

SECTION C — CURRENT PRODUCTION (border-b border-border)
  Header row (container-x, pt-20 md:pt-28, flex md:justify-between md:items-end):
    eyebrow: 02 — Current production
    h2 (display-lg): What We're Growing
    right p (max-w-sm text-sm text-muted-foreground): Availability varies by crop
      and production cycle. For volumes and specifications, speak to our team
      directly.
  Grid (container-x mt-14, grid gap-px bg-border md:grid-cols-12 — the gap-px on a
  border-coloured background creates hairline dividers):
    Left article (md:col-span-7, bg-background):
      CHILLI image aspect-16/10 object-cover,
      alt "Cayenne chilli peppers, MegaYield Farms flagship crop"
      eyebrow text-[var(--color-clay)]: Flagship crop
      h3 (font-display text-4xl md:text-5xl): Chilli Peppers
      p: Our primary commercial crop and the centre of our production planning.
         Grown for colour, heat consistency and shelf life, and supplied fresh to
         buyers across Gauteng.
    Right column (md:col-span-5, bg-background, two stacked articles, first with
    border-b border-border):
      TOMATO image aspect-3/2, alt "Tomatoes grown at MegaYield Farms"
        eyebrow: Second production focus
        h3 (font-display text-2xl): Tomatoes
        p: Grown under shade and open field, scaling alongside chillies as our
           second commercial line.
      SEEDLINGS image aspect-3/2, alt "Seedlings under development in the nursery"
        eyebrow: Under development
        h3 (font-display text-2xl): Pilot Crops
        p: Additional crops trialled at small scale; selected produce is supplied
           where available.
  Footer of section (container-x pb-20 md:pb-28): link-rule -> /produce :
    View Our Produce

SECTION D — OPERATIONS (dark: bg-[oklch(0.205_0.008_70)] text-[oklch(0.95_0.008_85)],
border-b border-border, container-x grid md:grid-cols-12 py-20 md:py-28)
  Left (md:col-span-4):
    eyebrow text-white/45: 03 — Operations
    h2 (display-lg): From Production to Supply.
    p (text-white/60 max-w-sm): Six stages carry a crop from a planting decision to
      a customer's delivery. Each one is documented, reviewed and refined as the
      operation grows.
    link-rule (border-white/70 text-white) -> /operations : Inside our operations
  Right (md:col-span-7 md:col-start-6): an <ol>; each <li> is a
  grid-cols-[3.25rem_1fr] gap-5, border-t border-white/12 py-6 (first item no
  border, no top padding). Number in font-mono text-sm text-[var(--color-wheat)];
  title in font-display text-2xl text-white; body text-sm text-white/60.
    01 Planning — Crop selection, planting calendars and input planning ahead of each cycle.
    02 Production — Seedling establishment and planting into prepared, tested soil beds.
    03 Crop Management — Irrigation scheduling, nutrition, scouting and disease control.
    04 Harvest — Hand-picking at defined maturity, cycle by cycle, to protect quality.
    05 Quality & Handling — Sorting, grading and cool, clean handling before dispatch.
    06 Customer Supply — Packed and moved to buyers on agreed schedules and specifications.
  Below the grid, full-bleed IRRIGATION image h-[34vh] md:h-[46vh] object-cover,
  alt "Irrigation lines running through planted rows".

SECTION E — BUILDING TOWARD SCALE (border-b border-border, container-x, py-20 md:py-28)
  Left (md:col-span-5): eyebrow "04 — Growth", h2 (display-lg) "Building Toward Scale."
  Right (md:col-span-6 md:col-start-7 md:self-end) p.lede: We are early in our
    journey. Rather than claiming scale we have not yet reached, we are putting the
    six foundations below in place — deliberately, and in order.
  <dl class="mt-14 grid gap-x-12 md:grid-cols-2">; each item is flex gap-6,
  border-t border-border py-6 (the first two items in the md layout have no top
  border/padding), a two-digit font-mono index, dt in font-display text-xl,
  dd in text-sm text-muted-foreground:
    01 Production capability — Expanding what we can reliably grow across each season.
    02 Agricultural infrastructure — Irrigation, seedling and handling infrastructure, built in stages.
    03 Supply relationships — Repeat commercial buyers who plan volumes with us in advance.
    04 Crop diversification — Pilot crops trialled before they enter commercial production.
    05 Market access — Direct routes into wholesale, retail and food service channels.
    06 Technology-enabled practice — Data-led irrigation, record keeping and crop monitoring.

SECTION F — PARTNERSHIP (grid md:grid-cols-2, no container)
  Left: AERIAL image, h-72 md:h-full w-full object-cover,
    alt "Planted fields at MegaYield Farms".
  Right (px-5 py-16 md:px-14 md:py-24):
    eyebrow: 05 — Partnership
    h2 (display-lg): Growing Through Partnership.
    p: Our growth depends on the organisations we work with — buyers who plan
       volumes with us, partners who strengthen our production, and institutions
       invested in South African food systems.
    <ul>, each <li> border-t border-border py-4, h3 text-sm font-semibold + p text-sm:
      Commercial buyers — Wholesalers, retailers, processors and food service operators.
      Strategic agricultural partners — Land, input, mentorship and production collaboration.
      Investment partners — Capital aligned to phased, disciplined expansion.
      Development organisations — Government, NGO and enterprise-development programmes.
      Technology & innovation partners — Agritech, irrigation and data partners.
    btn-solid -> /contact : Start a Conversation

============================================================
7. PAGE: /about (src/routes/about.tsx)
============================================================

PageHeader:
  eyebrow: Company profile
  title (h1): An agricultural business being built in the open.
  intro: MegaYield Farms is an early-stage South African agricultural enterprise.
    We grow and supply fresh produce today, and we are honest about what we are
    still building.
  image: AERIAL, alt "Planted fields at MegaYield Farms in Winterveld, Gauteng"
  caption: Winterveld, Pretoria — Gauteng, South Africa

Then a repeating numbered Section layout (build it as a local helper component):
section border-b border-border > container-x grid md:grid-cols-12 gap-8 py-16
md:py-20; left md:col-span-4 holds the eyebrow number + h2 (font-display text-3xl
md:text-4xl) + optional image (aspect-4/3, hidden below md); right is
md:col-span-7 md:col-start-6.

01 — Our Story
  p: MegaYield Farms began with a small planted area, a mentor, and a conviction
     that South Africa needs more young, disciplined commercial growers. We started
     with chilli peppers because the crop rewards attention: it demands consistent
     irrigation, careful scouting and disciplined harvesting.
  p: Since then we have expanded planting, added tomatoes as a second production
     focus, and begun trialling additional crops at pilot scale. Selected produce
     is already supplied to customers where available.
  p: We remain early. Our growth is deliberately phased — each expansion follows
     proven demand and the infrastructure to support it.

02 — What We Do  (two columns, grid md:grid-cols-2 gap-8)
  p: We grow fresh produce for commercial supply. Chilli peppers are our flagship
     crop and tomatoes our second production focus, with additional crops under
     development. We handle production planning, crop establishment and management,
     harvesting, quality handling and delivery to customers.
  p: We supply wholesalers, retailers, processors and food service buyers. Because
     we are scaling, availability varies by crop and production cycle — volumes and
     specifications are always confirmed directly with our team rather than published.

03 — Our Approach  (left image: HANDS, alt "Hand-harvested chillies being sorted")
  A <ul class="divide-y divide-border">, each item h3 font-display text-xl + p text-sm:
    Consistency — The same standard every cycle, because buyers plan around it.
    Discipline — Records, schedules and reviews rather than improvisation.
    Focus — Depth in a few crops before breadth across many.
    Growth with purpose — Expansion only where demand and capability meet.
    Community first — Local employment and skills, growing as the operation grows.

04 — Our Vision
  blockquote (border-l-2 border-[var(--color-clay)] pl-6 font-display text-2xl
  md:text-3xl): To establish MegaYield Farms as a preferred chilli pepper and
  fresh-produce supplier in Gauteng — recognised for reliability, quality and the
  discipline behind every delivery.
  p: Our mission is to deliver consistent, high-quality agricultural output through
     efficient farming systems, while creating dependable work and skills in the
     communities around us. Keeping people fed is our peace of mind.

05 — Leadership
  grid gap-px bg-border sm:grid-cols-3; each article bg-background with a 16x16
  square (bg-[oklch(0.205_0.008_70)] text-[oklch(0.95_0.008_85)] font-display
  text-xl, centred) containing the person's initials, then h3 font-display text-2xl,
  eyebrow role, and a text-sm bio:
    Karabo Molamu — Founder & Managing Director — Leads company strategy,
      commercial development and day-to-day direction of the farming operation.
    Zwelihle Zulu — Co-Founder & Operations Director — Responsible for production
      planning, field operations, harvest scheduling and quality of output.
    Gilbert Sehoole — Mentor & Agricultural Supervisor — Provides agronomic
      guidance and hands-on supervision across crop establishment and management.

06 — Company Information
  A <table class="w-full border-collapse text-left text-sm"> with an sr-only
  caption "MegaYield Farms company at a glance". Each row: <th scope="row"> in
  font-mono uppercase tracking-[0.12em] text-muted-foreground w-56, <td> the value,
  row border-t border-border:
    Registered name        MegaYield Farms (Pty) Ltd
    Registration number    CIPC 2025/964922/07
    Country                South Africa
    Province               Gauteng
    Sector                 Agriculture — fresh produce
    Current crops          Chilli peppers, tomatoes, pilot crops
    Location               Plot 787 Ten Morgan, Winterveld, Pretoria
    Contact                hello@megayieldfarms.co.za · 060 486 5455
  Then p (text-sm text-muted-foreground): We publish only verified company
    information. For production detail — availability, volumes and supply
    requirements — contact our team.   ("contact our team" links to /contact with
    border-b border-foreground.)

============================================================
8. PAGE: /produce (src/routes/produce.tsx)
============================================================

PageHeader (no image):
  eyebrow: Fresh produce
  title (h1): Our Produce
  intro: Chilli peppers lead our production, tomatoes follow, and a portfolio of
    pilot crops is being developed behind them. Availability varies by crop and
    production cycle.

FLAGSHIP (border-b border-border)
  Full-bleed CHILLI image, h-[45vh] md:h-[62vh] object-cover,
  alt "Cayenne chilli peppers harvested at MegaYield Farms".
  container-x grid md:grid-cols-12 gap-10 py-16 md:py-20:
    Left (md:col-span-5): eyebrow text-[var(--color-clay)] "Flagship crop",
      h2 display-lg "Chilli Peppers"
    Right (md:col-span-6 md:col-start-7):
      p.lede text-foreground: Our primary commercial crop, and the crop our
        planning, irrigation and harvest schedules are built around.
      p: Grown in open field and hand-picked at defined maturity for colour, heat
        consistency and shelf life. Chillies are graded and handled cool before
        dispatch to wholesale, retail, processing and food service buyers across
        Gauteng.
      <dl class="mt-8 grid grid-cols-2 gap-x-8">, each cell border-t border-border
      py-3, dt uses eyebrow, dd text-sm:
        Type   — Cayenne and related hot varieties
        Form   — Fresh, hand-picked, graded
        Buyers — Wholesale · retail · processing
        Cycle  — Continuous picking through season

TOMATOES (border-b border-border, grid md:grid-cols-2)
  Text block (order-2 md:order-1, px-5 py-14 md:px-14 md:py-20):
    eyebrow: Second production focus
    h2 display-lg: Tomatoes
    p: Tomatoes are our second commercial line, grown in open field and under shade
       structures. Production is expanding cycle by cycle as demand from buyers is
       confirmed, with fruit picked firm and sorted by grade before supply.
    SHADETOM image, aspect-16/9 object-cover, alt "Tomatoes grown under shade structures"
  TOMATO image (order-1 md:order-2), h-72 md:h-full object-cover,
    alt "Ripe tomatoes ready for grading"

PILOT CROPS (border-b border-border, container-x py-16 md:py-20)
  Header row (flex md:justify-between md:items-end):
    eyebrow: Development portfolio
    h2 display-lg: Pilot Crops
    right p (max-w-sm text-sm text-muted-foreground): Additional crops under
      development. Selected produce is supplied to customers where available, while
      trials continue.
  <ul class="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">; each item
  is an image aspect-4/5 object-cover with alt "{name} grown at MegaYield Farms",
  h3 font-display text-xl, p text-sm text-muted-foreground:
    Onions (ONIONS) — Trial plantings assessing bulb size and storage.
    Beetroot (BEETROOT) — Small-scale rows tested for local demand.
    Green beans (BEANS) — Short-cycle crop under production trial.
    Spinach (SPINACH) — Leaf crop supplied where available.
    Seedling nursery (SEEDLINGS) — In-house propagation supporting each cycle.

ENQUIRY BAND (dark: bg-[oklch(0.205_0.008_70)] text-[oklch(0.95_0.008_85)],
container-x grid md:grid-cols-12 gap-8 py-16 md:py-20)
  h2 (md:col-span-6, display-lg): For current availability, volumes and supply
    requirements, contact our team.
  Right (md:col-span-5 md:col-start-8 md:self-end):
    p (text-sm text-white/60): We do not publish production quantities.
      Requirements are confirmed directly so that what we commit to is what we can
      deliver.
    btn-line text-white -> /contact : Make a Supply Enquiry

============================================================
9. PAGE: /operations (src/routes/operations.tsx)
============================================================

PageHeader (no image):
  eyebrow: Operations
  title (h1): How the farm actually runs.
  intro: MegaYield Farms is not a fully industrialised operation, and we do not
    describe it as one. What follows is how we work today — and how we are refining
    these systems as the business grows.

Then a container-x list of seven <article>s, each
"grid gap-8 border-b border-border py-14 md:grid-cols-12 md:py-20":
  left md:col-span-4 = number in font-mono text-sm text-[var(--color-clay)] and
  h2 font-display text-3xl md:text-4xl;
  right md:col-span-7 md:col-start-6 = the body paragraph, plus the image where
  listed (aspect-16/9 object-cover, mt-8).

01 Production planning — Each cycle begins on paper: crop selection, planting
   calendar, input requirements and the buyers we expect to serve. Planning is
   conservative — we plant against demand we can see, not demand we hope for.
   [image SOIL, alt "Prepared soil beds before planting"]
02 Crop establishment — Beds are prepared and seedlings — increasingly raised in
   our own nursery — are transplanted at the right stage. Spacing, bed layout and
   planting dates are recorded so results can be compared cycle to cycle.
03 Crop management — Field walks, pest and disease scouting, nutrition and weed
   control run on a weekly rhythm. Interventions are logged, and problems in one
   block inform how we treat the next.
04 Irrigation — Water is the constraint that governs everything else. Irrigation is
   scheduled to crop stage and weather rather than habit, with drip lines used to
   place water where the plant needs it and limit waste.
   [image IRRIGATION, alt "Drip irrigation lines running along planted rows"]
05 Harvest — Chillies and tomatoes are hand-picked at defined maturity, in repeated
   passes through the same block. Picking teams work to a standard so that what
   leaves the field is already close to grade.
   [image HANDS, alt "Hand-harvesting chillies into crates"]
06 Quality & handling — Produce is sorted, graded and kept out of heat and direct
   sun. Crates are clean, handling is minimal, and anything below grade is separated
   before it reaches a customer.
   [image PACKING, alt "Sorting and packing fresh produce into crates"]
07 Supply — Orders are matched to what the field can genuinely deliver and moved to
   buyers on agreed schedules. Where we cannot meet a volume, we say so early rather
   than under-deliver.

CLOSING SECTION (border-b border-border, container-x grid md:grid-cols-12 gap-8
py-16 md:py-20)
  h2 (md:col-span-4, font-display text-3xl md:text-4xl): Continuously refined
  Right (md:col-span-7 md:col-start-6):
    p: Every cycle produces records: what was planted, when it was irrigated, what
       was sprayed, what was picked and what was rejected. Those records are
       reviewed and used to change the next plan. It is unglamorous work, and it is
       the reason our output becomes more predictable each season.
    link-rule -> /partnerships : Work with us

============================================================
10. PAGE: /partnerships (src/routes/partnerships.tsx)
============================================================

PageHeader:
  eyebrow: Partnerships
  title (h1): Growing Through Partnership.
  intro: Our growth depends on the organisations we work with. Below are the four
    relationships that matter most to MegaYield Farms at this stage.
  image: AERIAL, alt "Fields under production at MegaYield Farms"
  caption: Winterveld, Pretoria — Gauteng, South Africa

Four articles, same numbered two-column pattern as Operations
(number in font-mono text-[var(--color-clay)], h2 font-display text-3xl,
body md:col-span-7 md:col-start-6), each border-b border-border py-12 md:py-16
with the last one border-b-0:

01 Commercial Buyers — Wholesalers, retailers, processors and food service
   operators who need fresh produce on a planned schedule. We work best with buyers
   who share forecasts, because it lets us plant against real demand and commit only
   to what we can deliver.
02 Strategic Partners — Land, input, logistics and production partners who
   strengthen what we can grow and how reliably we can move it. This includes
   established farming operations willing to collaborate on capacity, mentorship or
   shared infrastructure.
03 Investment Partners — Capital aligned to phased expansion — infrastructure,
   irrigation, nursery capacity and working capital for production cycles. We are
   early-stage and we plan in stages, each tied to demand we can demonstrate.
04 Development & Innovation Partners — Government programmes, development
   organisations, agritech and research partners working on food systems, youth
   participation in agriculture and technology-enabled farming practice.

ENQUIRY SECTION (container-x grid md:grid-cols-12 gap-10 py-16 md:py-20)
  Left (md:col-span-4):
    eyebrow: Enquire
    h2 (font-display text-3xl md:text-4xl): Start a Partnership Conversation
    p (text-sm text-muted-foreground): Tell us what you need and the scale you work
      at. We will respond with what we can realistically commit to, and how we would
      plan production around it.
  Right (md:col-span-7 md:col-start-6): <InquiryForm defaultInquiry="Partnership" />

============================================================
11. PAGE: /contact (src/routes/contact.tsx)
============================================================

PageHeader (no image):
  eyebrow: Contact
  title (h1): Talk to our team.
  intro: Supply enquiries, partnership conversations and general questions all reach
    the same team. We reply within one business day.

Section (border-b border-border, container-x grid md:grid-cols-12 gap-12 py-16
md:py-20):
  Left (md:col-span-4):
    h2 (font-display text-3xl): Details
    <dl>, each entry border-t border-border py-4, dt uses eyebrow, dd text-[0.9375rem];
    the first two values are links styled with link-rule:
      Email        hello@megayieldfarms.co.za   (mailto:hello@megayieldfarms.co.za)
      Phone        060 486 5455                 (tel:+27604865455)
      Farm         Plot 787 Ten Morgan, Winterveld, Pretoria
      Province     Gauteng, South Africa
      Registration MegaYield Farms (Pty) Ltd · 2025/964922/07
    p (text-sm text-muted-foreground): Farm visits are by appointment only. Please
      arrange a time before travelling.
  Right (md:col-span-7 md:col-start-6):
    h2 (font-display text-3xl): Send a message
    <InquiryForm defaultInquiry="General enquiry" />

============================================================
12. PAGES: /privacy and /terms
============================================================

Both: <SiteNav />, then PageHeader, then a section container-x py-20 md:py-28 with
a max-w-3xl space-y-10 stack where each block is an h2 (font-display text-2xl) plus
a p (text-muted-foreground), then <SiteFooter />.

/privacy — eyebrow "Legal", h1 "Privacy Policy",
intro: This page is maintained by MegaYield Farms to explain how information
submitted through this website is handled.
  Information we collect — We collect the details you choose to submit through our
    enquiry forms — typically your name, organisation, email address, phone number
    and the content of your message.
  How we use it — Your information is used only to respond to your enquiry and to
    manage a potential or existing commercial relationship with MegaYield Farms.
  Sharing — We do not sell your information. It is shared only with service
    providers who help us operate this website and our business communications, and
    where the law requires it.
  Retention — Enquiry records are kept for as long as they remain commercially
    relevant, after which they are deleted or anonymised.
  Your rights — You may request access to, correction of, or deletion of your
    personal information at any time by contacting us at hello@megayieldfarms.co.za.
  Contact — Questions about this policy can be directed to MegaYield Farms (Pty)
    Ltd, Plot 787 Ten Morgan, Winterveld, Pretoria, Gauteng, South Africa.

/terms — eyebrow "Legal", h1 "Terms & Conditions",
intro: The terms that apply to your use of this website and any enquiry you submit
through it.
  Use of this website — This website is provided for general information about
    MegaYield Farms (Pty) Ltd and its fresh produce operations. By using it you
    agree to these terms.
  Information accuracy — We take care to keep content current, but production
    status, availability and capability change over time. Nothing on this site
    constitutes a binding offer to supply.
  Supply agreements — All supply arrangements are subject to a separate written
    agreement covering specification, volume, pricing, delivery and payment terms.
  Intellectual property — The MegaYield Farms name, logo, photography and website
    content remain the property of MegaYield Farms (Pty) Ltd and may not be
    reproduced without permission.
  Liability — MegaYield Farms is not liable for any loss arising from reliance on
    information published on this website.
  Governing law — These terms are governed by the laws of the Republic of South
    Africa.

============================================================
13. SEO / METADATA
============================================================

Canonical domain constant: const SITE = "https://megayieldfarms.co.za"

__root.tsx head: charSet utf-8; viewport width=device-width, initial-scale=1;
author "MegaYield Farms (Pty) Ltd"; og:type website; og:site_name "MegaYield Farms";
twitter:card summary_large_image; the Google Fonts <link>s (with preconnect); and an
Organization JSON-LD:
  { "@context":"https://schema.org", "@type":"Organization",
    "name":"MegaYield Farms (Pty) Ltd", "url":"https://megayieldfarms.co.za",
    "description":"South African agricultural company growing chilli peppers,
    tomatoes and pilot crops for commercial fresh-produce supply." }
Do NOT put og:image or canonical on the root — those belong on each page.

Per page: unique <title>, meta description, og:title, og:description, og:url, and a
self-referencing <link rel="canonical">.

/  title: MegaYield Farms | Fresh Produce & Agriculture in South Africa
   desc: MegaYield Farms is a South African agricultural enterprise developing a
     scalable fresh-produce operation, with chilli peppers and tomatoes at the
     centre of its current production strategy.
   also add WebSite JSON-LD with publisher Organization "MegaYield Farms (Pty) Ltd".
/about  title: About MegaYield Farms | Agricultural Company in South Africa
   og:title "About MegaYield Farms"
   desc: MegaYield Farms (Pty) Ltd is an early-stage agricultural enterprise in
     Gauteng, South Africa, growing chilli peppers and tomatoes for commercial
     fresh-produce supply.
/produce  title: Our Produce | Chilli Pepper & Tomato Supplier, South Africa
   og:title "Our Produce — MegaYield Farms"
   desc: Chilli peppers and tomatoes grown for commercial supply in Gauteng, plus
     pilot crops under development. Contact MegaYield Farms for current availability
     and volumes.
/operations  title: Operations | Vegetable Farming Practice, MegaYield Farms
   og:title "Operations — MegaYield Farms"
   desc: How MegaYield Farms plans, plants, irrigates, harvests and supplies fresh
     produce in Gauteng — and how those systems are being refined as the operation
     grows.
/partnerships  title: Partnerships | MegaYield Farms, Agricultural Business Gauteng
   og:title "Partnerships — MegaYield Farms"
   desc: MegaYield Farms works with commercial buyers, strategic agricultural
     partners, investment partners and development organisations across South Africa.
/contact  title: Contact MegaYield Farms | Fresh Produce Supplier, Gauteng
   og:title "Contact — MegaYield Farms"
   desc: Contact MegaYield Farms for supply enquiries, partnerships and general
     questions. Winterveld, Pretoria, Gauteng — hello@megayieldfarms.co.za,
     060 486 5455.
   plus Organization JSON-LD with email hello@megayieldfarms.co.za,
   telephone +27604865455, PostalAddress { streetAddress "Plot 787 Ten Morgan,
   Winterveld", addressLocality "Pretoria", addressRegion "Gauteng",
   addressCountry "ZA" }.
/privacy  title: Privacy Policy — MegaYield Farms
/terms    title: Terms & Conditions — MegaYield Farms

sitemap route (/sitemap.xml) returns
new Response(xml, { headers: { "Content-Type": "application/xml" } }) listing all
eight pages with https://megayieldfarms.co.za as the base:
  / (weekly, 1.0), /about (0.9), /produce (0.9), /operations (0.8),
  /partnerships (0.8), /contact (0.7), /privacy (0.3), /terms (0.3)
  — all except / are monthly.

public/robots.txt:
User-agent: *
Allow: /

Sitemap: https://megayieldfarms.co.za/sitemap.xml

============================================================
14. VERIFY BEFORE YOU FINISH
============================================================

Run the install, the typecheck and the dev server. Then confirm:
1. All 8 routes render with zero console errors.
2. The nav shows exactly 6 links and every one navigates to a real page.
3. On the home page the nav starts transparent over the hero and turns solid
   (paper background, dark text) once you scroll past ~40px.
4. Every image loads — no broken image icons.
5. The contact form submits, shows "Sending", then the success panel.
6. Each page's <title> is different and matches section 13.
7. /sitemap.xml returns valid XML with all 8 URLs.
8. Nothing anywhere says Lorem, TODO, placeholder, or "Your Company".
9. Mobile at 375px: no horizontal scroll, hamburger opens and closes.

Build everything now. Do not ask questions unless something here is genuinely
contradictory.

====================== END PROMPT ======================
```

---

## Notes for you

- **The images are permanent.** The URLs above point at the Lovable CDN, not at the hashed build files, so they will keep working even after this project is republished. bolt.new can load them straight into `<img src>`.
- **Give bolt the reference link too** — it's already in the prompt at the top. Bolt can't reliably read a JS-rendered page, which is exactly why the full copy is spelled out below it.
- **If bolt stalls partway through** (it sometimes does on long builds), reply with: *"Continue from where you stopped — next file in the tree from section 2."*
- **If bolt refuses TanStack Start**, it will fall back to Vite + React + TanStack Router per section 1. The look and content stay identical; only the routing plumbing differs.
- **Later, to make it fully self-hosted**, download each image from the URLs in section 4 into `src/assets/` and switch the `<img src>` values to normal imports.
