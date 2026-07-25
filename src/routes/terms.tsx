import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — MegaYield Farms" },
      {
        name: "description",
        content:
          "Terms and conditions governing the use of the MegaYield Farms website and enquiries submitted through it.",
      },
      { property: "og:title", content: "Terms & Conditions — MegaYield Farms" },
      { property: "og:description", content: "Website terms of use for MegaYield Farms." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    h: "Use of this website",
    p: "This website is provided for general information about MegaYield Farms (Pty) Ltd and its fresh produce operations. By using it you agree to these terms.",
  },
  {
    h: "Information accuracy",
    p: "We take care to keep content current, but production status, availability and capability change over time. Nothing on this site constitutes a binding offer to supply.",
  },
  {
    h: "Supply agreements",
    p: "All supply arrangements are subject to a separate written agreement covering specification, volume, pricing, delivery and payment terms.",
  },
  {
    h: "Intellectual property",
    p: "The MegaYield Farms name, logo, photography and website content remain the property of MegaYield Farms (Pty) Ltd and may not be reproduced without permission.",
  },
  {
    h: "Liability",
    p: "MegaYield Farms is not liable for any loss arising from reliance on information published on this website.",
  },
  {
    h: "Governing law",
    p: "These terms are governed by the laws of the Republic of South Africa.",
  },
];

function TermsPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        intro="The terms that apply to your use of this website and any enquiry you submit through it."
      />
      <section className="container-x py-20 md:py-28">
        <div className="max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-2xl">{s.h}</h2>
              <p className="mt-3 text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
