"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const EMAIL = "vextrixstudio@outlook.com";

const projectTypes = [
  "Landing page",
  "Website design",
  "Website redesign",
  "E-commerce",
  "Other project",
];

const budgets = [
  "Under $500",
  "$500–$1,500",
  "$1,500–$3,000",
  "$3,000+",
  "Not sure yet",
];

const fieldClass =
  "min-h-14 w-full rounded-2xl border border-[#deded6] bg-white/85 px-4 py-3.5 text-sm text-[#25251f] outline-none transition-colors placeholder:text-[#707168] hover:border-[#c9cabe] focus:border-[#777b61] focus:ring-4 focus:ring-[#858873]/15";

function SelectField({
  id,
  label,
  name,
  options,
  placeholder,
  required = false,
}: {
  id: string;
  label: string;
  name: string;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-[13px] font-medium text-[#292921]">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-[#777b61]">
            *
          </span>
        )}
      </span>

      <span className="relative block">
        <select
          id={id}
          name={name}
          required={required}
          defaultValue=""
          className={`${fieldClass} appearance-none pr-11`}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5f6158]"
        >
          <path
            d="m5 7.5 5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </label>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M4.2 10h11.6m-4.8-4.8 4.8 4.8-4.8 4.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [currentYear, setCurrentYear] = useState("2026");

  useEffect(() => {
    setCurrentYear(String(new Date().getFullYear()));
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    // Usa la validación integrada del navegador antes de preparar el correo.
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();
    const budget = String(data.get("budget") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    const subject = encodeURIComponent(`Project inquiry — ${project}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${project}`,
        `Estimated budget: ${budget || "Not specified"}`,
        "",
        "Project details:",
        details,
      ].join("\n"),
    );

    setStatus(
      "Your email app should open with a draft. Review it there and send it when ready.",
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#e9e8e2] text-[#20201c] selection:bg-[#858873]/25">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#20201c] focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-[#858873] focus:ring-offset-2"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-3 sm:px-8 lg:px-14">
        <Navbar />

        <main id="main-content">
          <section
            aria-labelledby="contact-title"
            className="grid gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:pb-24 lg:pt-24"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#55564e]">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-[#777b61]"
                />
                Let’s make something meaningful
              </div>

              <h1
                id="contact-title"
                className="mt-8 text-[clamp(3.7rem,8vw,7.4rem)] font-medium leading-[0.88] tracking-[-0.085em]"
              >
                Have a
                <br />
                good idea?
                <br />
                <span className="font-serif font-normal italic tracking-[-0.07em] text-[#6b7057]">
                  Let’s talk.
                </span>
              </h1>

              <p className="mt-8 max-w-md text-[15px] leading-7 text-[#4f5048] sm:text-[17px] sm:leading-8">
                Tell us what you have in mind. We’ll learn about your goals and
                work out a thoughtful next step together.
              </p>

              <div className="mt-12 border-t border-black/10 pt-6 sm:mt-16">
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#55564e]">
                  Prefer email?
                </span>

                <a
                  href={`mailto:${EMAIL}`}
                  className="group mt-3 flex w-fit max-w-full items-center gap-2 break-all text-[15px] tracking-[-0.025em] transition-colors hover:text-[#62674e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#777b61] focus-visible:ring-offset-4 sm:text-lg"
                >
                  {EMAIL}
                  <ArrowIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                </a>
              </div>

              <div className="mt-10 flex max-w-sm items-start gap-3.5 rounded-[22px] border border-white/80 bg-white/60 p-4 shadow-[0_8px_24px_rgba(42,42,32,0.04)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#e2e2da] bg-white">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[18px] w-[18px] text-[#555747]"
                  >
                    <path
                      d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="pt-0.5">
                  <p className="text-sm font-medium tracking-[-0.02em]">
                    No complicated process
                  </p>
                  <p className="mt-1 text-[13px] leading-5 text-[#55564e]">
                    Just an honest conversation about your goals and what comes
                    next.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[28px] border border-white/80 bg-white/65 p-5 shadow-[0_20px_65px_rgba(42,42,32,0.07)] sm:rounded-[32px] sm:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4 border-b border-black/10 pb-6">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#55564e]">
                      Project inquiry
                    </p>
                    <h2 className="mt-2.5 text-[27px] font-medium tracking-[-0.06em] sm:text-[32px]">
                      Let’s start here.
                    </h2>
                    <p className="mt-2 text-[13px] leading-5 text-[#55564e]">
                      A few details are all we need.
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e2e2da] bg-white">
                    <ArrowIcon className="-rotate-45 h-5 w-5 text-[#555747]" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-[13px] font-medium text-[#292921]">
                        Your name <span className="text-[#777b61]">*</span>
                      </span>
                      <input
                        autoComplete="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className={fieldClass}
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-[13px] font-medium text-[#292921]">
                        Email address{" "}
                        <span className="text-[#777b61]">*</span>
                      </span>
                      <input
                        autoComplete="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className={fieldClass}
                      />
                    </label>
                  </div>

                  <SelectField
                    id="project"
                    name="project"
                    label="Project type"
                    options={projectTypes}
                    placeholder="Choose a project type"
                    required
                  />

                  <SelectField
                    id="budget"
                    name="budget"
                    label="Estimated budget"
                    options={budgets}
                    placeholder="Choose a budget (optional)"
                  />

                  <label className="block">
                    <span className="mb-2 block text-[13px] font-medium text-[#292921]">
                      Tell us about your project{" "}
                      <span className="text-[#777b61]">*</span>
                    </span>
                    <textarea
                      name="details"
                      required
                      rows={4}
                      placeholder="Your idea, goals, timeline, or anything we should know…"
                      className={`${fieldClass} min-h-[140px] resize-y leading-6`}
                    />
                  </label>

                  {status && (
                    <p
                      role="status"
                      aria-live="polite"
                      className="rounded-xl bg-[#858873]/10 px-3.5 py-3 text-[13px] leading-5 text-[#424536]"
                    >
                      {status}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#20201c] px-6 text-sm font-medium text-white shadow-[0_5px_16px_rgba(32,32,28,0.12)] transition-colors duration-200 hover:bg-[#3b3d31] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#858873]/25 active:scale-[0.99] motion-reduce:transition-none"
                  >
                    Prepare email inquiry
                    <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
                  </button>

                  <p className="text-center text-[11px] leading-5 text-[#55564e]">
                    This prepares a draft in your email app; it doesn’t send
                    anything automatically.
                  </p>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="flex flex-col gap-3 border-t border-black/10 pt-5 text-xs text-[#55564e] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Vextrix Studio</p>

          <a
            href={`mailto:${EMAIL}`}
            className="w-fit transition-colors hover:text-[#20201c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#777b61] focus-visible:ring-offset-4"
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </a>

          <Link
            href="/"
            className="w-fit transition-colors hover:text-[#20201c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#777b61] focus-visible:ring-offset-4"
          >
            Back to home
          </Link>
        </footer>
      </div>
    </div>
  );
}