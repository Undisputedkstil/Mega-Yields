import logo from "@/assets/megayield-logo.png";
import { business } from "@/lib/business";

export function BrandLogo() {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <img
        src={logo}
        alt="MegaYield Farms logo"
        width={480}
        height={406}
        className="h-12 w-auto shrink-0 object-contain"
      />
      <span className="min-w-0">
        <span className="block whitespace-nowrap font-display text-lg leading-tight">{business.tradingName}</span>
        <span className="mt-1 block font-mono text-[0.625rem] leading-none opacity-70">Est. {business.established}</span>
      </span>
    </span>
  );
}
