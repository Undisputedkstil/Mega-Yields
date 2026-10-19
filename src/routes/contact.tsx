import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { InquiryForm } from "@/components/InquiryForm";
import { business, businessSchema } from "@/lib/business";

const SITE = "https://awesome-site-quest.lovable.app";
const DESC =
  `Contact MegaYield Farms for supply enquiries, partnerships and general questions. ${business.operatingArea} — ${business.email}, ${business.phone}.`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MegaYield Farms | Fresh Produce Supplier, Gauteng" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Contact — MegaYield Farms" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `${SITE}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(businessSchema),
      },
    ],
  }),
  component: ContactPage,
});

const details: [string, string, string?][] = [
  ["Email", business.email, `mailto:${business.email}`],
  ["Additional email", business.additionalEmail, `mailto:${business.additionalEmail}`],
  ["Phone", business.phone, business.phoneHref],
  ["Operating area", business.operatingArea],
  ["Province", "Gauteng, South Africa"],
  ["Website", business.website, business.website],
  ["Registered legal entity", business.legalName],
  ["Registration", business.registrationNumber],
  ["Established", String(business.established)],
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
                    <dd className="mt-1.5 break-words text-[0.9375rem] [overflow-wrap:anywhere]">
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
