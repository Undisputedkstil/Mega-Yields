<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep TanStack Start and use the Vercel Nitro target for external deployments; Lovable's managed target takes precedence so both hosts retain server routes.
- Prerender only the explicitly listed public content pages; exclude authenticated and request-dependent pages to avoid publishing personal data.
- Use src/lib/business.ts as the shared source for official business identity and contact links to prevent inconsistent information across pages.
- Use BrandLogo for navigation and footer branding to keep the same asset, colours, proportions and establishment treatment everywhere.
