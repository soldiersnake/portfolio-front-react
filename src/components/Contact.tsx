import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { FiCheckCircle, FiMail, FiXCircle } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { sendContactMessage } from "../lib/api";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string; // honeypot
}

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) next.name = t("contact.validation.nameRequired");
    if (!emailPattern.test(form.email.trim())) next.email = t("contact.validation.emailInvalid");
    if (!form.subject.trim()) next.subject = t("contact.validation.subjectRequired");
    if (!form.message.trim()) next.message = t("contact.validation.messageRequired");
    else if (form.message.trim().length < 10) next.message = t("contact.validation.messageMin");

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (form.company) return; // honeypot triggered, silently drop
    if (!validate()) return;

    setStatus("submitting");
    try {
      await sendContactMessage(form);
      setStatus("success");
      setForm(initialState);
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <ContactWrapper>
        <div className="mx-auto max-w-md rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-8 text-center">
          <FiCheckCircle className="mx-auto mb-4 text-4xl text-emerald-400" />
          <h3 className="text-lg font-semibold text-white">{t("contact.successTitle")}</h3>
          <p className="mt-2 text-sm text-slate-300">{t("contact.successBody")}</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-accent/60 hover:text-accent"
          >
            {t("contact.sendAnother")}
          </button>
        </div>
      </ContactWrapper>
    );
  }

  return (
    <ContactWrapper>
      <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-2xl space-y-5">
        {/* Honeypot field — hidden from real users, bots often fill it in */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label={t("contact.name")}
            error={errors.name}
            input={
              <input
                type="text"
                placeholder={t("contact.namePlaceholder")}
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className={inputClass(Boolean(errors.name))}
              />
            }
          />
          <Field
            label={t("contact.email")}
            error={errors.email}
            input={
              <input
                type="email"
                placeholder={t("contact.emailPlaceholder")}
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={inputClass(Boolean(errors.email))}
              />
            }
          />
        </div>

        <Field
          label={t("contact.subject")}
          error={errors.subject}
          input={
            <input
              type="text"
              placeholder={t("contact.subjectPlaceholder")}
              value={form.subject}
              onChange={(e) => updateField("subject", e.target.value)}
              className={inputClass(Boolean(errors.subject))}
            />
          }
        />

        <Field
          label={t("contact.message")}
          error={errors.message}
          input={
            <textarea
              rows={5}
              placeholder={t("contact.messagePlaceholder")}
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              className={inputClass(Boolean(errors.message))}
            />
          }
        />

        {status === "error" && (
          <div className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-400/5 p-4 text-sm text-red-300">
            <FiXCircle className="mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold">{t("contact.errorTitle")}</p>
              <p className="mt-1 text-red-300/80">{t("contact.errorBody")}</p>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? t("contact.submitting") : t("contact.submit")}
        </button>

        <p className="text-center text-sm text-slate-500">
          {t("contact.directEmail")}{" "}
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1 text-accent">
            <FiMail size={14} />
            {profile.email}
          </a>
        </p>
      </form>
    </ContactWrapper>
  );
}

function ContactWrapper({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  return (
    <section id="contact" className="section-fade-in py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />
        {children}
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-300">{label}</span>
      {input}
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-white/3 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-accent/60 ${
    hasError ? "border-red-400/50" : "border-white/15"
  }`;
}
