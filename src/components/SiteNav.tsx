import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoAsset from "@/assets/megayield-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/produce", label: "Produce" },
  { to: "/operations", label: "Operations" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/news", label: "News & Updates" },
  { to: "/partnerships", label: "Partnerships" },
  { to: "/contact", label: "Contact" },
] as const;

interface Props {
  /** Render transparent over a hero until the page is scrolled. */
  overlay?: boolean;
}

export function SiteNav({ overlay = false }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const transparent = overlay && !scrolled && !open;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border/60 bg-background/85 backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logoAsset.url}
            alt="MegaYield Farms"
            className={`h-11 w-auto shrink-0 transition-[filter] ${transparent ? "brightness-0 invert" : ""}`}
          />
          <div className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span
              className={`truncate font-display text-base font-semibold tracking-tight ${
                transparent ? "text-white" : ""
              }`}
            >
              MegaYield Farms
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.18em] ${
                transparent ? "text-white/65" : "text-muted-foreground"
              }`}
            >
              Purpose in every yield
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                transparent ? "text-white/85 hover:text-white" : "text-foreground/75 hover:text-primary"
              }`}
              activeProps={{
                className: `rounded-full px-3 py-2 text-sm font-semibold ${
                  transparent ? "text-[var(--color-gold)]" : "text-primary"
                }`,
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a href="tel:+27604865455" className="hidden btn-gold md:inline-flex">
            <Phone className="h-4 w-4" /> 060 486 5455
          </a>
          <button
            className={`rounded-md p-2 xl:hidden ${transparent ? "text-white" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
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
