import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoAsset from "@/assets/megayield-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/produce", label: "Produce" },
  { to: "/project", label: "Our Project" },
  { to: "/why-us", label: "Why Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logoAsset.url} alt="MegaYield Farms" className="h-11 w-auto" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base font-semibold tracking-tight">MegaYield Farms</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Purpose in every yield</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:+27604865455" className="hidden btn-gold md:inline-flex">
            <Phone className="h-4 w-4" /> 060 486 5455
          </a>
          <button
            className="rounded-md p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-x flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground/80"
                activeProps={{ className: "py-3 text-sm font-semibold text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:+27604865455" className="mt-3 btn-gold w-fit">
              <Phone className="h-4 w-4" /> Call 060 486 5455
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
