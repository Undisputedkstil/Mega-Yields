import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface Props {
  defaultInquiry?: string;
  compact?: boolean;
}

export function InquiryForm({ defaultInquiry = "General inquiry", compact = false }: Props) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // No backend wired yet — UX confirmation only.
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 600);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)]">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
        <h3 className="mt-4 font-display text-2xl">Thank you</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We've received your message and will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-8"
    >
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <Field label="Full name" name="name" required />
        <Field label="Organisation" name="org" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <div className={compact ? "" : "md:col-span-2"}>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Inquiry type
          </label>
          <select
            name="type"
            defaultValue={defaultInquiry}
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
          >
            <option>Supply partnership (B2B buyer)</option>
            <option>Investment / funding</option>
            <option>Strategic partnership / collaboration</option>
            <option>Employment / future apprenticeship</option>
            <option>Community partnership</option>
            <option>Schedule a farm visit</option>
            <option>General inquiry</option>
          </select>
        </div>
        <div className={compact ? "" : "md:col-span-2"}>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
            placeholder="Tell us a little about what you're looking for…"
          />
        </div>
      </div>
      <button type="submit" disabled={submitting} className="mt-6 btn-primary disabled:opacity-60">
        {submitting ? "Sending…" : "Send message"} <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}{required && <span className="ml-1 text-[var(--color-gold)]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}
