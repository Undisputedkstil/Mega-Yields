import { useState, type FormEvent } from "react";

interface Props {
  defaultInquiry?: string;
  compact?: boolean;
}

const INQUIRY_TYPES = [
  "General enquiry",
  "Supply enquiry",
  "Partnership",
  "Investment",
  "Media",
];

export function InquiryForm({ defaultInquiry = "General enquiry", compact = false }: Props) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 500);
  };

  if (sent) {
    return (
      <div className="border border-border bg-card p-8">
        <p className="eyebrow">Received</p>
        <h3 className="mt-3 font-display text-2xl">Thank you — your message is with our team.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          We reply to enquiries within one business day. For urgent supply matters, call
          060&nbsp;486&nbsp;5455.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-border bg-card p-6 md:p-8">
      <div className={compact ? "grid gap-5" : "grid gap-5 md:grid-cols-2"}>
        <Field label="Full name" name="name" required />
        <Field label="Organisation" name="org" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <div className={compact ? "" : "md:col-span-2"}>
          <Label>Enquiry type</Label>
          <select
            name="type"
            defaultValue={defaultInquiry}
            className="w-full border-b border-input bg-transparent py-2 text-sm outline-none transition focus:border-primary"
          >
            {INQUIRY_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className={compact ? "" : "md:col-span-2"}>
          <Label>Message</Label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Volumes, crops, timelines or the reason for your enquiry."
            className="w-full border-b border-input bg-transparent py-2 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-primary"
          />
        </div>
      </div>
      <button type="submit" disabled={submitting} className="mt-8 btn-solid disabled:opacity-60">
        {submitting ? "Sending" : "Send enquiry"}
      </button>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="eyebrow mb-2 block">{children}</label>;
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>
        {label}
        {required && <span className="ml-1 text-[var(--color-clay)]">*</span>}
      </Label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border-b border-input bg-transparent py-2 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}
