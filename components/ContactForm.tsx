"use client";

import { useState, type FormEvent } from "react";
import { OCCASION_OPTIONS } from "@/lib/content";
import { cx } from "./ui";

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

const fieldBox =
  "w-full rounded-[2px] border border-line bg-sand p-4 font-sans text-[14px] text-ink placeholder:text-muted outline-none transition-colors focus:border-sage";

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <label htmlFor={htmlFor} className="font-sans text-[11px] font-semibold uppercase text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}

export function ContactForm({ defaultOccasion, defaultMessage }: { defaultOccasion?: string; defaultMessage?: string }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const initialOccasion = defaultOccasion && OCCASION_OPTIONS.includes(defaultOccasion) ? defaultOccasion : "Corporate Gifting";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Something went wrong.");
      form.reset();
      setStatus({ state: "sent", message: "Thank you — our concierge will be in touch shortly." });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-6" noValidate={false}>
      <div className="flex flex-col gap-6 sm:flex-row">
        <Field label="Name" htmlFor="name">
          <input id="name" name="name" required autoComplete="name" placeholder="Your Name" className={fieldBox} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="your.email@example.com" className={fieldBox} />
        </Field>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row">
        <Field label="Company" htmlFor="company">
          <input id="company" name="company" autoComplete="organization" placeholder="Company Name (Optional)" className={fieldBox} />
        </Field>
        <Field label="Occasion" htmlFor="occasion">
          <div className="relative">
            <select id="occasion" name="occasion" defaultValue={initialOccasion} className={cx(fieldBox, "appearance-none pr-10")}>
              {OCCASION_OPTIONS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/chevron-down.svg"
              alt=""
              aria-hidden
              className="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2"
            />
          </div>
        </Field>
      </div>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          defaultValue={defaultMessage}
          placeholder="Describe your specific customization and volume requests..."
          className={cx(fieldBox, "h-[120px] resize-y")}
        />
      </Field>

      <div className="flex flex-col items-start gap-4">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="rounded-[2px] bg-sage px-9 py-4 font-sans text-[13px] font-semibold uppercase text-white transition-colors hover:bg-[#8f8a6f] disabled:opacity-60"
        >
          {status.state === "sending" ? "Sending…" : "Send Enquiry"}
        </button>
        {status.message && (
          <p role="status" className={cx("font-sans text-[14px]", status.state === "error" ? "text-red-700" : "text-muted")}>
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
