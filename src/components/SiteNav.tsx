import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/megayield-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/produce", label: "Our Produce" },
  { to: "/operations", label: "Operations" },
  { to: "/partnerships", label: "Partnerships" },
  { to: "/contact", label: "Contact" },
] as const;

interface Props {
  /** Sit over a dark hero image until the page is scrolled. */
  overlay?: boolean;
}

export function SiteNav({ overlay = false }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const light = overlay && !scrolled && !open;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        light
          ? "border-b border-white/20 bg-transparent text-white"
          : "border-b border-border bg-background text-foreground"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logoAsset.url}
            alt="MegaYield Farms"
            className={`h-9 w-auto shrink-0 ${light ? "brightness-0 invert" : ""}`}
          />
          <span className="hidden font-display text-lg leading-none tracking-tight sm:block">
            MegaYield&nbsp;Farms
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.8125rem] font-medium tracking-wide transition-opacity hover:opacity-60"
              activeProps={{
                className:
                  "text-[0.8125rem] font-semibold tracking-wide border-b border-current pb-0.5",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <a
            href="tel:+27604865455"
            className="hidden font-mono text-xs tracking-wide md:inline hover:opacity-60"
          >
            060 486 5455
          </a>
          <button
            className="p-1 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background text-foreground lg:hidden">
          <div className="container-x flex flex-col divide-y divide-border">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3.5 text-sm font-medium"
                activeProps={{ className: "py-3.5 text-sm font-semibold text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
