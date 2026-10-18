# MegaYield Farms on Vercel

## What changed

The site remains on TanStack Start, React and Vite. No pages, copy, photography,
styles, forms or database connections were replaced. The Vite configuration now
selects Nitro's Vercel adapter outside Lovable. Lovable continues to select its
own managed deployment target. The eight public content pages are explicitly
prerendered so each has its own initial HTML and search/social metadata. The
server remains available for the sitemap and any server functions.

`vercel.json` selects a custom framework, Bun's frozen lockfile install and the
existing production build command. Nitro produces Vercel Build Output API files
under `.vercel/output`, including `config.json`, static content and functions.
This is not a plain Vite `dist` deployment: do not point Vercel at `dist/client`
or `.output/public`, and do not add a blanket rewrite to `/index.html`.

## Vercel settings

1. Connect the existing GitHub repository and choose the intended production branch.
2. Set **Root Directory** to the directory containing `package.json` and `vercel.json`
   (leave it blank if those files are at repository root).
3. Choose **Framework Preset: Other**. Use **Node.js 22.x**.
4. Use **Install Command: `bun install --frozen-lockfile`** and
   **Build Command: `bun run build`**. These are also declared in `vercel.json`.
5. Turn off any existing **Output Directory** override. The adapter writes
   `.vercel/output` for Vercel's Build Output API automatically; do not set a
   static output directory manually.
6. Add the existing browser-safe Lovable Cloud configuration for both Preview
   and Production environments: `VITE_SUPABASE_URL`,
   `VITE_SUPABASE_PUBLISHABLE_KEY`, and `VITE_SUPABASE_PROJECT_ID`.
   Use the values already provided in this project's configuration, not new
   credentials. Never put a secret/admin key in a `VITE_` variable.
7. Remove any previously configured `NITRO_PRESET`, `LOVABLE_NITRO_PRESET`, or
   `LOVABLE_*` build-environment overrides on Vercel. They are not needed there
   and can select the wrong deployment target. Leave Lovable's own settings alone.
8. Redeploy the latest commit without reusing an old build cache.

## Verification after deployment

- Confirm the Vercel build log selects the `vercel` target and generates
  `.vercel/output/config.json` plus a function and static assets.
- Open and refresh `/`, `/about`, `/produce`, `/operations`, `/partnerships`,
  `/contact`, `/privacy`, and `/terms` directly on the Vercel URL.
- Open `/sitemap.xml` and confirm an XML response rather than the app shell.
- Check images, desktop navigation, the phone menu and route-specific titles.
- Check page source for each page's title and description, not just the rendered DOM.

Vercel account settings, actual Vercel build output and hosted behavior cannot be
verified from the local preview alone. If a deployment still returns Vercel's
`404 NOT_FOUND`, provide the deployment URL and its build log. A successful local
build does not prove that Vercel published the correct root/output.

## Existing limitations preserved

The enquiry form only shows a local confirmation; it currently neither sends
email nor stores the enquiry. Deployment does not add delivery. No active content
page currently uses authenticated data, but the existing Cloud clients and data
are retained. Any future sign-in flow must allow the Vercel origin in its auth
redirect settings before it is used there. Canonical URLs and sitemap entries
retain the existing `https://megayieldfarms.co.za` domain; configure that domain
on Vercel if it is to be the production domain.

## Recovery

Pre-change configuration, both lockfiles, package manifest and page sources are
saved under `.lovable/backups/pre-vercel-2026-10-18/`. To undo this deployment
change, restore the backed-up `vite.config.ts`, `AGENTS.md` and changed page
files, then remove the newly added `vercel.json` and this document. No Git
history or branches were changed. The backup contains no `.env` or credentials.
The package copies reflect the already-applied security update, so restoring
deployment configuration does not undo it.