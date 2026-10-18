import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { InquiryForm } from "@/components/InquiryForm";

const SITE = "https://megayieldfarms.co.za";
const DESC =
  "Contact MegaYield Farms for supply enquiries, partnerships and general questions. Winterveld, Pretoria, Gauteng — hello@megayieldfarms.co.za, 060 486 5455.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MegaYield Farms | Fresh Produce Supplier, Gauteng" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Contact — MegaYield Farms" },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MegaYield Farms (Pty) Ltd",
          url: SITE,
          email: "hello@megayieldfarms.co.za",
          telephone: "+27604865455",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot 787 Ten Morgan, Winterveld",
            addressLocality: "Pretoria",
            addressRegion: "Gauteng",
            addressCountry: "ZA",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

const details: [string, string, string?][] = [
  ["Email", "hello@megayieldfarms.co.za", "mailto:hello@megayieldfarms.co.za"],
  ["Phone", "060 486 5455", "tel:+27604865455"],
  ["Farm", "Plot 787 Ten Morgan, Winterveld, Pretoria"],
  ["Province", "Gauteng, South Africa"],
  ["Registration", "MegaYield Farms (Pty) Ltd · 2025/964922/07"],
];

function ContactPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHeader
          eyebrow="Contact"
          title="Talk to our team."
          intro="Supply enquiries, partnership conversations and general questions all reach the same team. We reply within one business day."
        />

        <section className="border-b border-border">
          <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:py-20">
            <div className="md:col-span-4">
              <h2 className="font-display text-3xl">Details</h2>
              <dl className="mt-8">
                {details.map(([label, value, href]) => (
                  <div key={label} className="border-t border-border py-4">
                    <dt className="eyebrow">{label}</dt>
                    <dd className="mt-1.5 text-[0.9375rem]">
                      {href ? (
                        <a href={href} className="link-rule">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Farm visits are by appointment only. Please arrange a time before travelling.
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <h2 className="font-display text-3xl">Send a message</h2>
              <div className="mt-8">
                <InquiryForm defaultInquiry="General enquiry" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
