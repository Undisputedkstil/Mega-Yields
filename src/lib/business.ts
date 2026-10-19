export const business = {
  tradingName: "MegaYield Farms",
  legalName: "K2026684900 (South Africa) (Pty) Ltd",
  registrationNumber: "2026/684900/07",
  established: 2019,
  operatingArea: "Winterveldt, Pretoria, Gauteng, South Africa",
  website: "https://www.megayieldfarms.co.za",
  email: "hello@megayieldfarms.co.za",
  additionalEmail: "karabomolamu3@gmail.com",
  phone: "+27 82 056 9656",
  phoneHref: "tel:+27820569656",
  slogans: ["Purpose in Every Yield.", "Growing What Matters."],
} as const;

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: business.tradingName,
  legalName: business.legalName,
  identifier: business.registrationNumber,
  foundingDate: String(business.established),
  url: business.website,
  email: business.email,
  telephone: business.phone,
  slogan: business.slogans[0],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Winterveldt, Pretoria",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
};