import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/BrandLogo";
import { business } from "@/lib/business";

const pages = [
  ["/about", "About"],
  ["/produce", "Our Produce"],
  ["/operations", "Operations"],
  ["/partnerships", "Partnerships"],
  ["/contact", "Contact"],
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-0 bg-ink text-paper">
      <div className="container-x grid gap-12 border-b border-white/10 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" aria-label="MegaYield Farms home"><BrandLogo /></Link>
          <p className="mt-5 font-display text-xl">{business.slogans[0]}</p>
          <p className="mt-1 text-sm text-paper/60">{business.slogans[1]}</p>
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
              <a href={business.phoneHref} className="hover:opacity-60">
                {business.phone}
              </a>
            </li>
            <li>
              <a href="mailto:hello@megayieldfarms.co.za" className="hover:opacity-60">
                hello@megayieldfarms.co.za
              </a>
            </li>
            <li className="text-white/55">
              Winterveldt
              <br />
              Pretoria, Gauteng, South Africa
            </li>
            <li className="font-mono text-xs text-white/40">Mon – Fri · 08h00 – 17h00 SAST</li>
          </ul>
        </div>
      </div>

      <div className="container-x flex flex-col gap-3 py-6 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-white/40 md:flex-row md:items-center md:justify-between">
        <span className="max-w-xl leading-relaxed">© {new Date().getFullYear()} {business.tradingName}<br />{business.legalName} · Reg. {business.registrationNumber}</span>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/privacy" className="hover:text-white/70">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-white/70">
            Terms
          </Link>
          <a href={business.website} className="hover:opacity-60">www.megayieldfarms.co.za</a>
        </div>
      </div>
    </footer>
  );
}
