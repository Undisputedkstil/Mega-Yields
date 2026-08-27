import { Link } from "@tanstack/react-router";
import logo from "@/assets/megayield-logo.png";

const pages = [
  ["/about", "About"],
  ["/produce", "Our Produce"],
  ["/operations", "Operations"],
  ["/partnerships", "Partnerships"],
  ["/contact", "Contact"],
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-0 bg-[oklch(0.205_0.008_70)] text-[oklch(0.93_0.008_85)]">
      <div className="container-x grid gap-12 border-b border-white/10 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={logo} alt="MegaYield Farms" className="h-12 w-auto" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
            MegaYield Farms is an early-stage South African agricultural enterprise developing a
            scalable fresh-produce operation, with chilli peppers and tomatoes at the centre of
            current production.
          </p>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <h2 className="eyebrow text-white/45">Pages</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-white/75">
            {pages.map(([to, label]) => (
              <li key={label}>
                <Link to={to} className="transition-opacity hover:opacity-60">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="eyebrow text-white/45">Contact</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-white/75">
            <li>
              <a href="tel:+27604865455" className="hover:opacity-60">
                060 486 5455
              </a>
            </li>
            <li>
              <a href="mailto:hello@megayieldfarms.co.za" className="hover:opacity-60">
                hello@megayieldfarms.co.za
              </a>
            </li>
            <li className="text-white/55">
              Plot 787 Ten Morgan, Winterveld
              <br />
              Pretoria, Gauteng, South Africa
            </li>
            <li className="font-mono text-xs text-white/40">Mon – Fri · 08h00 – 17h00 SAST</li>
          </ul>
        </div>
      </div>

      <div className="container-x flex flex-col gap-3 py-6 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-white/40 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} MegaYield Farms (Pty) Ltd · CIPC 2025/964922/07</span>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/privacy" className="hover:text-white/70">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-white/70">
            Terms
          </Link>
          <span>megayieldfarms.co.za</span>
        </div>
      </div>
    </footer>
  );
}
