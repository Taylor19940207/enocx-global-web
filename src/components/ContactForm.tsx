"use client";

import { useState } from "react";
import { defaultLocale, getDictionary, type Locale } from "@/lib/i18n";

const field =
  "w-full rounded-lg border border-mist-line bg-paper px-4 py-3 text-base text-ink outline-none transition focus:border-slate focus:ring-2 focus:ring-slate/15";
const label = "block text-sm font-medium text-ink";

export default function ContactForm({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder submit — wire to an API route or form backend later.
    setSent(true);
  };

  if (sent) {
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
      <button
        type="submit"
        className="w-full rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-dark sm:w-auto"
      >
        {t.contactForm.submit}
      </button>
    </form>
  );
}
