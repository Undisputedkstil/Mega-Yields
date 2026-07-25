import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — MegaYield Farms" },
      {
        name: "description",
        content:
          "How MegaYield Farms collects, uses and protects the personal information submitted through this website.",
      },
      { property: "og:title", content: "Privacy Policy — MegaYield Farms" },
      { property: "og:description", content: "Our approach to personal information and data use." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    h: "Information we collect",
    p: "We collect the details you choose to submit through our enquiry forms — typically your name, organisation, email address, phone number and the content of your message.",
  },
  {
    h: "How we use it",
    p: "Your information is used only to respond to your enquiry and to manage a potential or existing commercial relationship with MegaYield Farms.",
  },
  {
    h: "Sharing",
    p: "We do not sell your information. It is shared only with service providers who help us operate this website and our business communications, and where the law requires it.",
  },
  {
    h: "Retention",
    p: "Enquiry records are kept for as long as they remain commercially relevant, after which they are deleted or anonymised.",
  },
  {
    h: "Your rights",
    p: "You may request access to, correction of, or deletion of your personal information at any time by contacting us at hello@megayieldfarms.co.za.",
  },
  {
    h: "Contact",
    p: "Questions about this policy can be directed to MegaYield Farms (Pty) Ltd, Plot 787 Ten Morgan, Winterveld, Pretoria, Gauteng, South Africa.",
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This page is maintained by MegaYield Farms to explain how information submitted through this website is handled."
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
