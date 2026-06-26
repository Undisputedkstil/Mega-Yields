import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logoAsset from "@/assets/megayield-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.22_0.04_148)] text-[oklch(0.95_0.018_90)]">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logoAsset.url} alt="MegaYield Farms" className="h-16 w-auto brightness-110" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            A youth-led South African agricultural enterprise delivering consistent, high-demand
            vegetable supply to B2B markets — with community impact at the core.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
            Purpose in every yield · Growing what matters
          </p>
        </div>
        <div>
          <h4 className="font-display text-base text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {[
              ["/about", "About"],
              ["/produce", "What we produce"],
              ["/project", "Our project"],
              ["/why-us", "Why choose us"],
              ["/funding", "Growth partnerships"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="transition-colors hover:text-[var(--color-gold)]">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base text-white">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-[var(--color-gold)]" /> 060 486 5455</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-[var(--color-gold)]" /> hello@megayieldfarms.co.za</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[var(--color-gold)]" /> Plot 787 Ten Morgan, Winterveld, Pretoria, Gauteng, South Africa</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs text-white/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} MegaYield Farms (Pty) Ltd. CIPC 2025/964922/07.</span>
          <span>megayieldfarms.co.za</span>
        </div>
      </div>
    </footer>
  );
}
