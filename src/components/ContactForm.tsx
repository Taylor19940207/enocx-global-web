"use client";

import { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT, WEB3FORMS_HCAPTCHA_SITEKEY } from "@/lib/contact";
import { defaultLocale, getDictionary, type Locale } from "@/lib/i18n";

type Status = "idle" | "sending" | "sent" | "error";
/** Something the visitor has to fix before the form can be sent. */
type Problem = "name" | "message" | "captcha" | null;

const field =
  "w-full rounded-lg border border-mist-line bg-paper px-4 py-3 text-base text-ink outline-none transition focus:border-slate focus:ring-2 focus:ring-slate/15";
const label = "block text-sm font-medium text-ink";

export default function ContactForm({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const [status, setStatus] = useState<Status>("idle");
  const [problem, setProblem] = useState<Problem>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  // Only a confirmed delivery may show the thank-you: anything else keeps the
  // visitor's text on screen and points them to the mailto fallback.
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const fields = Object.fromEntries(new FormData(e.currentTarget));
    // `required` lets a field of only spaces through; this does not. The
    // first blank field is named and focused, in the order they appear.
    for (const name of ["name", "message"] as const) {
      if (!String(fields[name] ?? "").trim()) {
        setProblem(name);
        e.currentTarget.querySelector<HTMLElement>(`#${name}`)?.focus();
        return;
      }
    }
    // Checked again by Web3Forms, which refuses a submission without a valid
    // token once hCaptcha is switched on for the form. That server-side check
    // is what stops bots posting straight to the API with the public key.
    if (!captchaToken) {
      setProblem("captcha");
      return;
    }
    setProblem(null);
    setStatus("sending");

    // Web3Forms prints each key as the field label in the email body, so the
    // keys are the labels the recipient reads (Simplified Chinese). The
    // English keys are its control fields; `replyto` keeps "Reply" working
    // now that the address is no longer under `email`.
    const payload = {
      姓名: fields.name,
      公司名称: fields.company,
      邮箱: fields.email,
      咨询领域: fields.topic,
      咨询内容: fields.message,
      填写语言: locale === "en" ? "英语" : "日语",
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: "ENOCX Website",
      subject: `【ENOCX】お問い合わせ（${fields.topic ?? ""}）${fields.name ?? ""}様`,
      replyto: fields.email,
      botcheck: fields.botcheck,
      "h-captcha-response": captchaToken,
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
      // A token is single-use: a retry needs a fresh one.
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
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
      <p className="text-sm leading-relaxed text-slate-600">{t.contactForm.noSales}</p>
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
      <HCaptcha
        ref={captchaRef}
        sitekey={WEB3FORMS_HCAPTCHA_SITEKEY}
        languageOverride={locale}
        reCaptchaCompat={false}
        onVerify={(token) => {
          setCaptchaToken(token);
          setProblem(null);
        }}
        onExpire={() => setCaptchaToken(null)}
      />
      {problem && (
        <p role="alert" className="text-sm font-medium text-ink">
          {problem === "name"
            ? t.contactForm.nameRequired
            : problem === "message"
              ? t.contactForm.messageRequired
              : t.contactForm.captchaRequired}
        </p>
      )}
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
