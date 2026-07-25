import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logoAsset from "@/assets/megayield-logo.png.asset.json";

const explore = [
  ["/about", "About"],
  ["/operations", "Operations"],
  ["/sustainability", "Sustainability"],
  ["/news", "News & Updates"],
  ["/partnerships", "Partnerships"],
  ["/contact", "Contact"],
] as const;

const produce = [
  ["/produce", "Cayenne Chilli Peppers"],
  ["/produce", "Tomatoes"],
  ["/produce", "Spinach"],
  ["/produce", "Onions"],
  ["/produce", "Beetroot"],
  ["/produce", "Green Beans"],
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.22_0.04_148)] text-[oklch(0.95_0.018_90)]">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logoAsset.url} alt="MegaYield Farms" className="h-16 w-auto brightness-110" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            A modern South African agricultural business producing premium fresh vegetables through
            sustainable farming practices for wholesale, retail, food service and commercial supply
            chains.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
            Purpose in every yield
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={`MegaYield Farms on ${label}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {explore.map(([to, label]) => (
              <li key={label}>
                <Link to={to} className="transition-colors hover:text-[var(--color-gold)]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-white">Produce</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {produce.map(([to, label]) => (
              <li key={label}>
                <Link to={to} className="transition-colors hover:text-[var(--color-gold)]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-white">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" /> 060 486 5455
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" />{" "}
              hello@megayieldfarms.co.za
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" /> Plot 787 Ten
              Morgan, Winterveld, Pretoria, Gauteng, South Africa
            </li>
          </ul>
          <p className="mt-4 text-xs text-white/50">Mon – Fri · 08h00 – 17h00 SAST</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} MegaYield Farms (Pty) Ltd. CIPC 2025/964922/07.</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy" className="transition-colors hover:text-[var(--color-gold)]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-[var(--color-gold)]">
              Terms &amp; Conditions
            </Link>
            <span>megayieldfarms.co.za</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
