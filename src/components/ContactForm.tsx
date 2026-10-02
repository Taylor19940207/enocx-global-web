"use client";

import { useState } from "react";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/lib/contact";
import { defaultLocale, getDictionary, type Locale } from "@/lib/i18n";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-lg border border-mist-line bg-paper px-4 py-3 text-base text-ink outline-none transition focus:border-slate focus:ring-2 focus:ring-slate/15";
const label = "block text-sm font-medium text-ink";

export default function ContactForm({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const [status, setStatus] = useState<Status>("idle");

  // Only a confirmed delivery may show the thank-you: anything else keeps the
  // visitor's text on screen and points them to the mailto fallback.
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const fields = Object.fromEntries(new FormData(e.currentTarget));
    const payload = {
      ...fields,
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: "ENOCX Website",
      subject: `【ENOCX】お問い合わせ（${fields.topic ?? ""}）${fields.name ?? ""}様`,
      language: locale,
    };

    try {
      if (!WEB3FORMS_ACCESS_KEY) throw new Error("Web3Forms access key is not set");
      // Must be a JSON body: a multipart post gets an HTML page back even on
      // success, which would read as a failure here.
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !json.success) throw new Error(json.message ?? `HTTP ${res.status}`);
      setStatus("sent");
    } catch (err) {
      console.error("Contact form delivery failed:", err);
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-mist-line bg-mist-soft p-10 text-center">
        <h3 className="text-xl font-bold text-ink">
          {t.contactForm.thanksTitle}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {t.contactForm.thanksBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            {t.contactForm.name}<span className="text-slate"> *</span>
          </label>
          <input id="name" name="name" required className={`mt-2 ${field}`} />
        </div>
        <div>
          <label className={label} htmlFor="company">
            {t.contactForm.company}
          </label>
          <input id="company" name="company" className={`mt-2 ${field}`} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="email">
            {t.contactForm.email}<span className="text-slate"> *</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`mt-2 ${field}`}
          />
        </div>
        <div>
          <label className={label} htmlFor="topic">
            {t.contactForm.topic}
          </label>
          <select id="topic" name="topic" className={`mt-2 ${field}`}>
            {t.contactForm.topicOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className={label} htmlFor="message">
          {t.contactForm.message}<span className="text-slate"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`mt-2 ${field} resize-none`}
        />
      </div>
      {/* Honeypot: invisible to people, ticked by bots; Web3Forms drops those. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      {status === "error" && (
        <div
          role="alert"
          className="rounded-lg border border-mist-line bg-mist-soft p-5"
        >
          <p className="text-sm font-bold text-ink">
            {t.contactForm.errorTitle}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {t.contactForm.errorBody}
          </p>
        </div>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-dark disabled:cursor-wait disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? t.contactForm.sending : t.contactForm.submit}
      </button>
    </form>
  );
}
