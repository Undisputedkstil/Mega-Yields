import logoAsset from "@/assets/megayield-logo.png.asset.json";
import { business } from "@/lib/business";

export function BrandLogo() {
  return (
    <span className="flex min-w-0 items-center gap-3">
      <span className="flex h-12 w-14 shrink-0 items-center justify-center bg-paper p-1">
        <img src={logoAsset.url} alt="MegaYield Farms logo" className="h-full w-full object-contain" />
      </span>
      <span className="min-w-0">
        <span className="block whitespace-nowrap font-display text-lg leading-tight">{business.tradingName}</span>
        <span className="mt-1 block font-mono text-[0.625rem] leading-none opacity-70">Est. {business.established}</span>
      </span>
    </span>
  );
}